import fs from 'fs';
import path from 'path';

export function getImageUrls(baseUrl, dirs = ['public/days', 'public/tips']) {
  const images = [];
  
  const scanDir = (dir) => {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        scanDir(fullPath);
      } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
        // Remove 'public' from path and convert to URL format
        const urlPath = fullPath.replace('public', '').replace(/\\/g, '/');
        images.push(`${baseUrl}${urlPath}`);
      }
    });
  };

  dirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      scanDir(dir);
    }
  });
  
  return images;
}
