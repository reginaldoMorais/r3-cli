const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  fileExists: file => {
    try {
      return fs.statSync(file).isFile();
    } catch (err) {
      return false;
    }
  },

  directoryExists: filePath => {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  },
};
