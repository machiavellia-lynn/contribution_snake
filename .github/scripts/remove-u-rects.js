const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Path to the SVG files
const svgDir = path.resolve(__dirname, '../../dist/');

function removeProgressBar(svgFile) {
    const fullPath = path.join(svgDir, svgFile);

    // Read the SVG file
    let svgContent = fs.readFileSync(fullPath, 'utf8');

    // Parse SVG with JSDOM
    const dom = new JSDOM(svgContent, { contentType: 'image/svg+xml' });
    const document = dom.window.document;

    // Find all rect elements with class starting with "u"
    const uRects = document.querySelectorAll('rect[class^="u u"]');
    console.log(`Found ${uRects.length} rect elements with class "u"`);

    // Remove all matching elements
    uRects.forEach(rect => {
      rect.parentNode.removeChild(rect);
    });

    // Save the modified SVG
    const updatedSvg = dom.serialize();
    fs.writeFileSync(fullPath, updatedSvg, 'utf8');

    console.log(`Successfully removed progress bar from ${svgFile}`);
}

for (const file of fs.readdirSync(svgDir)) {
    if (file.endsWith('.svg')) {
        removeProgressBar(file);
    }
}