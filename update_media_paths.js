const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/ACER/Desktop/cerdycom/src';

const classification = {
    videos: [
        'accesoo.mp4', 'antenaa.mp4', 'camara.mp4', 'fotovoltaica.mp4',
        'rastre.mp4', 'verde11.mp4', 'video.mp4'
    ],
    brands: [
        'honey.webp', 'alhua.webp', 'han.webp', 'hik.webp', 'ez.webp', 'ezmarca.webp',
        'tp.webp', 'samsung.webp', 'pana.webp', 'sony.webp', 'pol.webp'
    ],
    products: [
        'antena1.webp', 'antena2.webp', 'antena3.jpg', 'antena4.webp', 'antena5.jpg',
        'camara 1.webp', 'camara 2.webp', 'camara 3.png', 'camara 4.jpg',
        'grabadora 2.png', 'grabadora.webp', 'gps1.webp', 'gps2.webp', 'gps3.jpg',
        'iaman3.webp', 'iman.webp', 'iman2.webp', 'iman4.webp', 'iman5.jpg',
        'iman6.webp', 'iman7.jpg', 'terminal.webp', 'bombillo.webp', 'Ventilador.webp',
        'panel1.png', 'panel2.jpg', 'panel3.jpg', 'panel4.png', '1.png', '2.png', '3.png',
        '4.png', 'Acceso.jpg', 'Alarma.jpg', 'Antena.png', 'Concertinas.jpg', 'Drone.jpg',
        'Instalacion.jpg', 'Rastreo.jpg'
    ],
    ui: [
        'Fondo.webp', 'logo.webp', 'what.webp'
    ]
};

// Create a map from filename to new path
const pathMap = {};
Object.entries(classification).forEach(([category, files]) => {
    files.forEach(file => {
        // For React components we usually keep the leading slash when referring to public folder
        pathMap[`"${file}"`] = `"/media/${category}/${file}"`;
        pathMap[`'${file}'`] = `'/media/${category}/${file}'`;
        pathMap[`\/${file}"`] = `"/media/${category}/${file}"`;
        pathMap[`\/${file}'`] = `'/media/${category}/${file}'`;
    });
});

function getAllFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllFiles(filePath, fileList);
        } else {
            if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
                fileList.push(filePath);
            }
        }
    }
    return fileList;
}

const getSrcFiles = getAllFiles(srcDir);

let changedFilesCount = 0;

getSrcFiles.forEach(srcFile => {
    let content = fs.readFileSync(srcFile, 'utf8');
    let originalContent = content;

    // Check all keys and replace them if found
    Object.keys(pathMap).forEach(oldPath => {
        // Only replace if they are exactly matching (with quotes) to avoid partial matches
        // using global replacement
        const newPath = pathMap[oldPath];

        // Replace /filename with /media/category/filename
        // First fix cases where the content actually uses "/filename"
        content = content.replace(new RegExp(`"/${oldPath.replace(/['"]/g, '')}"`, 'g'), newPath.replace(/'/g, '"'));
        content = content.replace(new RegExp(`'/${oldPath.replace(/['"]/g, '')}'`, 'g'), newPath.replace(/"/g, "'"));

        // Handle cases where content is just "filename" (without leading slash in the src file)
        // Let's rely on standard String.prototype.replaceAll or a simple loop for the exact oldPath strings.
        // Note we have already mapped oldPath with quotes `"${file}"`
        content = content.split(oldPath).join(newPath);
    });

    if (content !== originalContent) {
        fs.writeFileSync(srcFile, content, 'utf8');
        console.log(`Updated paths in ${path.basename(srcFile)}`);
        changedFilesCount++;
    }
});

console.log(`\nUpdated paths in ${changedFilesCount} files.`);
