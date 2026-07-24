const fs = require('fs');
const path = require('path');
function getImagesFromDirectory(directory) {
  try {
    const dirPath = path.join(process.cwd(), 'public', directory);
    if (!fs.existsSync(dirPath)) return [];
    const files = fs.readdirSync(dirPath);
    return files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => `/${directory}/${file}`);
  } catch (error) {
    return [];
  }
}
console.log("SCROLL 1:", getImagesFromDirectory("hero-scroll/scroll-1"));
console.log("SCROLL 2:", getImagesFromDirectory("hero-scroll/scroll-2"));
