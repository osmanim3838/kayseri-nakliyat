const fs = require('fs');
const path = require('path');

const mapping = {
  "resim.jpg": "dikmen-asansorlu-nakliyat-hero.jpg",
  "resim1.jpg": "dikmen-evden-eve-nakliyat-1.jpg",
  "resim2.jpg": "dikmen-sehirler-arasi-nakliyat-2.jpg",
  "resim3.jpg": "dikmen-nakliyat-genel-3.jpg",
  "resim4.jpg": "dikmen-asansorlu-nakliyat-4.jpg",
  "resim6.jpg": "dikmen-hizmetlerimiz-6.jpg",
  "resim7.jpg": "dikmen-hizmetlerimiz-7.jpg",
  "resim9.jpg": "dikmen-hakkimizda-9.jpg",
  "resim10.jpg": "dikmen-hakkimizda-10.jpg",
  "resim11.jpg": "dikmen-ne-yapiyoruz.jpg",
  "resim12.jpg": "dikmen-neden-biz.jpg",
  "Dikmen depolama.jpg": "dikmen-esya-depolama.jpg",
  "ofis taşımacılığı.jpg": "dikmen-ofis-tasimaciligi.jpg"
};

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

// 1. Rename files in public
const publicDir = path.join(__dirname, 'public');
for (const [oldName, newName] of Object.entries(mapping)) {
  const oldPath = path.join(publicDir, oldName);
  const newPath = path.join(publicDir, newName);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed ${oldName} to ${newName}`);
  }
}

// 2. Update files in src
const files = walk('src').filter(f => f.endsWith('.jsx') || f.endsWith('.js'));
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  for (const [oldName, newName] of Object.entries(mapping)) {
    // Escape dots for regex
    const oldRegex = new RegExp(`(["'])/${oldName.replace(/\./g, '\\.')}(["'])`, 'g');
    content = content.replace(oldRegex, `$1/${newName}$2`);
    
    // Also cover the case without leading slash if any
    const oldRegex2 = new RegExp(`(["'])${oldName.replace(/\./g, '\\.')}(["'])`, 'g');
    content = content.replace(oldRegex2, `$1${newName}$2`);
    
    // URI encoded case (e.g. for spaces)
    const oldUri = encodeURIComponent(oldName);
    if (oldUri !== oldName) {
        const oldRegexUri = new RegExp(`(["'])/${oldUri.replace(/\./g, '\\.')}(["'])`, 'g');
        content = content.replace(oldRegexUri, `$1/${newName}$2`);
    }
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated references in ${file}`);
  }
});
