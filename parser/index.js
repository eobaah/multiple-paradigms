const fs = require('fs')

module.exports = function parseFile(file){
  let newLineSplit = fs.readFileSync(file, 'utf-8').split('\n')
  // let tokens = []
  // newLineSplit.forEach(function(line){
  //   // console.log('=================================',line.split(''));
  //   return tokens.push(line.split(''))
  // })
  return newLineSplit
}
//receives data file
//splits file by new line
