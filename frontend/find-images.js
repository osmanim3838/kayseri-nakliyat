const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}
const files = walk('src').filter(f => f.endsWith('.jsx') || f.endsWith('.js'));
let imgMap = {};
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let regex = /["']\/([^"'\n]+\.(?:jpg|png|jpeg))["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (!imgMap[match[1]]) imgMap[match[1]] = [];
    imgMap[match[1]].push(file);
  }
});
console.log(JSON.stringify(imgMap, null, 2));
