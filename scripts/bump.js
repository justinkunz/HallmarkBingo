const fs = require('fs');
const path = require('path');
const { version } = require('../src/version.json');
const [, , bumpV] = process.argv;

let majorVersion = parseInt(version.slice(1, version.indexOf('.')));
let minorVersion = parseInt(version.slice(version.indexOf('.') + 1, version.lastIndexOf('.')));
let hotfixVersion = parseInt(version.slice(version.lastIndexOf('.') + 1, version.length));

if (bumpV === 'major') majorVersion++;
if (bumpV === 'minor') minorVersion++;
if (bumpV === 'hotfix') hotfixVersion++;

const newVersion = `v${majorVersion}.${minorVersion}.${hotfixVersion}`;

console.log(`New version: ${newVersion}`);
fs.writeFileSync(
  path.join('src', 'version.json'),
  JSON.stringify({ version: newVersion }, null, 2)
);
