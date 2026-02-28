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
