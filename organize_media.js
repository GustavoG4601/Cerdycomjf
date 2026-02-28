const fs = require('fs');
const path = require('path');

const publicDir = 'c:/Users/ACER/Desktop/cerdycom/public';
const mediaDir = path.join(publicDir, 'media');

const dirs = {
    videos: path.join(mediaDir, 'videos'),
    brands: path.join(mediaDir, 'brands'),
    products: path.join(mediaDir, 'products'),
    ui: path.join(mediaDir, 'ui')
};

// Ensure directories exist
if (!fs.existsSync(mediaDir)) fs.mkdirSync(mediaDir);
Object.values(dirs).forEach(d => {
    if (!fs.existsSync(d)) fs.mkdirSync(d);
});

// Classification
const classification = {
    videos: [
        'accesoo.mp4', 'antenaa.mp4', 'camara.mp4', 'fotovoltaica.mp4',
        'rastre.mp4', 'verde111.mp4', 'video.mp4'
    ],
    brands: [
        'honey.webp', 'alhua.webp', 'han.webp', 'hik.webp', 'ez.webp', 'ezmarca.webp',
        'tp.webp', 'samsung.webp', 'pana.webp', 'sony.webp', 'pol.webp'
    ],
    products: [
        'antena1.webp', 'antena2.webp', 'antena3.webp', 'antena4.webp', 'antena5.webp',
        'camara 1.webp', 'camara 2.webp', 'camara 3.webp', 'camara 4.webp',
        'grabadora 2.webp', 'grabadora.webp', 'gps1.webp', 'gps2.webp', 'gps3.webp',
        'iaman3.webp', 'iman.webp', 'iman2.webp', 'iman4.webp', 'iman5.webp',
        'iman6.webp', 'iman7.webp', 'terminal.webp', 'bombillo.webp', 'Ventilador.webp',
        'panel1.webp', 'panel2.webp', 'panel3.webp', 'panel4.webp', '1.png', '2.png', '3.png',
        '4.png', 'Acceso.webp', 'Alarma.webp', 'Antena.png', 'Concertinas.webp', 'Drone.webp',
        'Instalacion.webp', 'Rastreo.webp'
    ],
    ui: [
        'Fondo.webp', 'logo.webp', 'what.webp'
    ]
};

// Archivos a eliminar (no usados)
const toDelete = ['1111.jpg', '1111.png'];

// Move files
Object.entries(classification).forEach(([category, files]) => {
    files.forEach(file => {
        const srcPath = path.join(publicDir, file);
        const destPath = path.join(dirs[category], file);

        if (fs.existsSync(srcPath)) {
            fs.renameSync(srcPath, destPath);
            console.log(`Moved ${file} -> media/${category}/`);
        } else {
            console.log(`Could not find ${file}`);
        }
    });
});

// Delete unused
toDelete.forEach(file => {
    const filePath = path.join(publicDir, file);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Deleted unused file: ${file}`);
    }
});

console.log("File reorganization complete.");
