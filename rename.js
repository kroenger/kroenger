const fs = require('fs');
const path = require('path');

const folderPath = './src/images/days'; // Path to your folder

// Function to convert string to small-caps URL format
function toUrlFormat(str) {
  return str
    .toLowerCase()
    .replace(/-+/g, '-')
    .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
    .trim() // Remove leading and trailing spaces
    .split(' ').join('-');
}

// Read the folder and get all .png files
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(`Error reading folder: ${err}`);
    return;
  }

  files.forEach(file => {
    if (path.extname(file) === '.png') {
      const oldPath = path.join(folderPath, file);
      const newFileName = toUrlFormat(file.replace('.png', '')) + '.png';
      const newPath = path.join(folderPath, newFileName);

      fs.rename(oldPath, newPath, err => {
        if (err) {
          console.error(`Error renaming file ${file}: ${err}`);
        } else {
          console.log(`Renamed ${file} to ${newFileName}`);
        }
      });
    }
  });
});
