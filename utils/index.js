const fs = require('fs-extra');

async function removeFileIfExists(filePath) {
  const fileExists = await fs.pathExists(filePath);
  if (fileExists) {
    return fs.remove(filePath);
  }
  return Promise.resolve();
}

module.exports = {
  removeFileIfExists,
};
