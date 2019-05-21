const fs = require('fs');
const TokenGenerator = require('uuid-token-generator');

const getNewId = (array) => {
  if (array.length > 0) {
    return array[array.length - 1].id + 1;
  }
  return 1;
};

const newDate = () => new Date().toString();

function mustBeInArray(array, id) {
  return new Promise((resolve, reject) => {
    const row = array.find(r => r.id === id);
    if (!row) {
      reject({
        message: 'ID is not good',
        status: 404,
      });
    }
    resolve(row);
  });
}

function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
    if (err) {
      console.log(err);
    }
  });
}

const tokenGen = () => {
  const tokgen = new TokenGenerator();
  return tokgen.generate();
};

module.exports = {
  getNewId,
  newDate,
  mustBeInArray,
  tokenGen,
  writeJSONFile,
};
