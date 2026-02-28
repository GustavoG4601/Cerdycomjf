const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/ACER/Desktop/cerdycom/src';

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

getSrcFiles.forEach(srcFile => {
    let content = fs.readFileSync(srcFile, 'utf8');
    let originalContent = content;

    // 1. Fix comments: " / " followed by something that looks like a comment start
    // We can't just replace all "/ " because it might be a division operator.
    // However, in this project, most comments were " // " or " // 👈"
    content = content.replace(/ \/ 👈/g, ' // 👈');
    content = content.replace(/ \/ Tus/g, ' // Tus');
    content = content.replace(/ \/ Bootstrap/g, ' // Bootstrap');
    content = content.replace(/^ \/ src/gm, '// src');
    content = content.replace(/\/ src/g, '// src');
    content = content.replace(/ \/ importamos/g, ' // importamos');
    content = content.replace(/ \/ hook/g, ' // hook');
    content = content.replace(/ \/ Categorías/g, ' // Categorías');
    content = content.replace(/ \/ 👈/g, ' // 👈');

    // 2. Fix protocol
    content = content.replace(/https:\//g, 'https://');

    // 3. Fix double paths
    // Search for patterns like "/media/category"/media/category/file"
    const categories = ['videos', 'brands', 'products', 'ui'];
    categories.forEach(cat => {
        const brokenPattern = `"/media/${cat}"/media/${cat}/`;
        content = content.split(brokenPattern).join(`"/media/${cat}/`);

        const brokenPatternSingle = `'/media/${cat}'/media/${cat}/`;
        content = content.split(brokenPatternSingle).join(`'/media/${cat}/`);
    });

    if (content !== originalContent) {
        fs.writeFileSync(srcFile, content, 'utf8');
        console.log(`Repaired paths/syntax in ${path.basename(srcFile)}`);
    }
});
