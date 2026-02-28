const fs = require('fs');
const path = require('path');

const publicDir = 'c:/Users/ACER/Desktop/cerdycom/public';
const srcDir = 'c:/Users/ACER/Desktop/cerdycom/src';

function getAllFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllFiles(filePath, fileList);
        } else {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const publicFiles = fs.readdirSync(publicDir).filter(f => !fs.statSync(path.join(publicDir, f)).isDirectory());
const srcFiles = getAllFiles(srcDir);

const usedFiles = new Set();

for (const srcFile of srcFiles) {
    const content = fs.readFileSync(srcFile, 'utf8');
    for (const pubFile of publicFiles) {
        // Check if the filename appears in the content
        if (content.includes(pubFile) || content.includes(pubFile.split('.')[0])) {
            usedFiles.add(pubFile);
        }
    }
}

// Additional implicit files to keep (index.html, manifest.json, robots.txt, favicon.ico)
const alwaysKeep = ['index.html', 'manifest.json', 'robots.txt', 'favicon.ico', '_redirects'];
alwaysKeep.forEach(f => usedFiles.add(f));

console.log("=== USED FILES ===");
console.log(Array.from(usedFiles).sort().join('\n'));

console.log("\n=== UNUSED FILES ===");
const unusedFiles = publicFiles.filter(f => !usedFiles.has(f));
console.log(unusedFiles.sort().join('\n'));
