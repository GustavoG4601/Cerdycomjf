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

    // Fix lines starting with "/ " -> "// "
    content = content.replace(/^(\s*)\/ (?![/*])/gm, '$1// ');

    // Fix " / " in the middle of lines -> " // "
    // We avoid strings by a simple check (not foolproof but works for these comments)
    content = content.replace(/ \/ (?![\/*])/g, ' // ');

    // Fix the triple slash in App.js if it exists
    content = content.replace(/^\/\/\/ /gm, '// ');

    // Fix https protocol again just in case
    content = content.replace(/https:\/([^\/])/g, 'https://$1');

    if (content !== originalContent) {
        fs.writeFileSync(srcFile, content, 'utf8');
        console.log(`Deep repaired ${path.basename(srcFile)}`);
    }
});
