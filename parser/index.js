const fs = require('fs')

module.exports = function parseFile(file){
  return fs.readFileSync(file, 'utf-8').split('\n')
}
//receives data file
//splits file by new line
