const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Path to the SVG file
const svgFilePath = path.resolve(__dirname, '../../Tests/test.svg');

// Read the SVG file
let svgContent = fs.readFileSync(svgFilePath, 'utf8');

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
fs.writeFileSync(svgFilePath, updatedSvg, 'utf8');

console.log('Successfully removed all "u" class rectangles from SVG');
