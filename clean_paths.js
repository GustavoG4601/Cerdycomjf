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

    // Fix double slashes that might have been created
    content = content.replace(/\/\//g, '/').replace(/\/media/g, '/media');
    // specifically target: "//media" to "/media"
    content = content.split('//media/').join('/media/');
    content = content.split('"/media/').join('"/media/');
    content = content.split("'/media/").join("'/media/");

    if (content !== originalContent) {
        fs.writeFileSync(srcFile, content, 'utf8');
        console.log(`Cleaned up double slashes in ${path.basename(srcFile)}`);
    }
});
