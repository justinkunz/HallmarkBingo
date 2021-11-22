const fs = require('fs');
const path = require('path');
const { version } = require('../src/version.json');
const packageJson = require('../package.json');
const [, , bumpV] = process.argv;

let majorVersion = parseInt(version.slice(1, version.indexOf('.')));
let minorVersion = parseInt(version.slice(version.indexOf('.') + 1, version.lastIndexOf('.')));
let hotfixVersion = parseInt(version.slice(version.lastIndexOf('.') + 1, version.length));

if (bumpV === 'major') {
  majorVersion++;
  minorVersion = 0;
  hotfixVersion = 0;
} else if (bumpV === 'minor') {
  minorVersion++;
  hotfixVersion = 0;
} else if (bumpV === 'hotfix') {
  hotfixVersion++;
}

const newVersion = `${majorVersion}.${minorVersion}.${hotfixVersion}`;

console.log(`New version: ${newVersion}`);
fs.writeFileSync(
  path.join('src', 'version.json'),
  JSON.stringify({ version: `v${newVersion}` }, null, 2)
);

packageJson.version = newVersion;
fs.writeFileSync(path.join('package.json'), JSON.stringify(packageJson, null, 2));
