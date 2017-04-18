module.exports = function parseFunctional(fileArray) {
  return methods.reduce(function(filestream, method){
    return method(filestream)
  }, fileArray)
  //receiving all of our functional identifiers
  //apply each each function to the tokenized data file or data stream
    //looks at token by applying each helper functional
      //each helper function applies some kind of replacement that removes markdown syntax with html tags
}
var methods = [addH1, addH2, addH3, addH4, addH5, addH6]

function addH1(input){
  return input.replace(/^\s*(?:\<h1\>)*(?:\#\s)(?!\#)(.*)/gm, '<h1>$1</h1>')
}
function addH2(input){
  // input = input.join('')
  return input.replace(/^\s*(?:\<h2\>)*(?:\##\s)(?!\#)(.*)/gm, '<h2>$1</h2>')
}
function addH3(input){
  // input = input.join('')
  return input.replace(/^\s*(?:\<h3\>)*(?:\###\s)(?!\#)(.*)/gm, '<h3>$1</h3>')
}
function addH4(input){
  // input = input.join('')
  return input.replace(/^\s*(?:\<h4\>)*(?:\####\s)(?!\#)(.*)/gm, '<h4>$1</h4>')
}
function addH5(input){
  // input = input.join('')
  return input.replace(/^\s*(?:\<h5\>)*(?:\#####\s)(?!\#)(.*)/gm, '<h5>$1</h5>')
}
function addH6(input){
  return input.replace(/^\s*(?:\<h6\>)*(?:\######\s)(?!\#)(.*)/gm, '<h6>$1</h6>')
}
