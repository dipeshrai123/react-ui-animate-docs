const fs = require('fs');
const path = require('path');
const fsExtra = require('fs-extra'); // <-- For recursive deletion

const BASE_INPUT_DIR = path.join(__dirname, '../src/examples/raw');
const BASE_OUTPUT_DIR = path.join(__dirname, '../src/examples/strings');

// 🧹 Step 1: Clean output directory
if (fs.existsSync(BASE_OUTPUT_DIR)) {
    fsExtra.removeSync(BASE_OUTPUT_DIR);
    console.log('🧹 Cleaned previous output files');
}

// Step 2: Walk input directory recursively
function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach((entry) => {
        const fullPath = path.join(dir, entry);
        const isDirectory = fs.statSync(fullPath).isDirectory();
        if (isDirectory) {
            walkDir(fullPath, callback);
        } else {
            callback(fullPath);
        }
    });
}

// Step 3: Loop through each versioned folder
fs.readdirSync(BASE_INPUT_DIR).forEach((versionFolder) => {
    const versionPath = path.join(BASE_INPUT_DIR, versionFolder);
    if (!fs.statSync(versionPath).isDirectory()) return;

    walkDir(versionPath, (filePath) => {
        if (!filePath.endsWith('.tsx')) return;

        const code = fs.readFileSync(filePath, 'utf-8').replace(/`/g, '\\`');
        const relativePath = path.relative(versionPath, filePath);
        const outputPath = path.join(BASE_OUTPUT_DIR, versionFolder, relativePath).replace(/\.tsx$/, '.ts');
        const outputDir = path.dirname(outputPath);
        const exportName = relativePath.replace(/\.tsx$/, '').replace(/[\/\\]/g, '_');

        fs.mkdirSync(outputDir, { recursive: true });

        fs.writeFileSync(outputPath, `const ${exportName} = \`${code}\`;\nexport default ${exportName};\n`);
        console.log(`✅ Generated: ${path.relative(BASE_OUTPUT_DIR, outputPath)}`);
    });
});
