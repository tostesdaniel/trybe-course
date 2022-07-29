const fs = require('fs');

module.exports = (fileName, fileContent) => {
  fs.writeFileSync(fileName, fileContent);
  return 'ok';
};
