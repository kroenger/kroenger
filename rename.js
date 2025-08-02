const fs = require('fs');
const path = require('path');

const folderPath = './public/days';

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

      // Skip if the file already has the correct name
      if (file === newFileName) {
        console.log(`Skipped ${file} (already in correct format)`);
        return;
      }

      fs.rename(oldPath, newPath, (renameErr) => {
        if (renameErr) {
          console.error(`Error renaming file ${file}: ${renameErr}`);
        } else {
          console.log(`Renamed ${file} to ${newFileName}`);
        }
      });
    }
  });
});