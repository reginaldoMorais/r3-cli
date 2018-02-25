const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase : () => {
    return path.basename(process.cwd());
  },

  fileExists: (file) => {
    console.log('file? ', file);
    try {
      console.log('file? ', fs.statSync(file).isFile());
      return fs.statSync(file).isFile();
    } catch (err) {
      console.log('file? false');
      return false;
    }
  },

  directoryExists: (filePath) => {
    console.log('filePath? ', filePath);
    try {
      console.log('filePath? ', fs.statSync(filePath).isDirectory());
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      console.log('filePath? false');
      return false;
    }
  }
};
