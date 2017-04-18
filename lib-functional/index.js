module.exports = function parseFunctional(stream) {
  let fileStream = stream.join('\n')

  var methods = [addH1, addH2, addH3, addH4, addH5, addH6]
  return methods.reduce(function(filestream, method){
    // console.log(method);
    return method(filestream)
  }, fileStream)
  let result = stream.forEach(function(token){
    // console.log(functions, token);
    return functions.map(function(method, index){
      console.log(method(token));
      return method(token)
    })
  })
  return result
  //receiving all of our functional identifiers
  //apply each each function to the tokenized data file or data stream
    //looks at token by applying each helper functional
      //each helper function applies some kind of replacement that removes markdown syntax with html tags
}
function addH1(input){
  // input = input.join('')
  return input.replace(/^\#\s*([^#].*)$/gm, '<h1>$&</h1>').replace('# ', '')
}
function addH2(input){
  // input = input.join('')
  return input.replace(/^\##\s*([^#].*)$/gm, '<h2>$&</h2>').replace('## ', '')
}
function addH3(input){
  // input = input.join('')
  return input.replace(/^\###\s*([^#].*)$/gm, '<h3>$&</h3>').replace('### ', '')
}
function addH4(input){
  // input = input.join('')
  return input.replace(/^\####\s*([^#].*)$/gm, '<h4>$&</h4>').replace('#### ', '')
}
function addH5(input){
  // input = input.join('')
  return input.replace(/^\#####\s*([^#].*)$/gm, '<h5>$&</h5>').replace('##### ', '')
}
function addH6(input){
  return input.replace(/^\######\s*([^#].*)$/gm, '<h6>$&</h6>').replace('###### ', '')
}
