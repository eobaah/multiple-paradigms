module.exports = function parseFunctional(stream) {
  // let fileStream = stream.join('')

  function addH1(input){
    // input = input.join('')
    let result = input.replace(/^\#\s*([^#].*)$/gm, '<h1>$&</h1>').replace('# ', '')
    if(result !== input){ return result }

  }
  function addH2(input){
    // input = input.join('')
    let result = input.replace(/^\##\s*([^#].*)$/gm, '<h2>$&</h2>').replace('## ', '')
    if(result !== input){ return result + '' }

  }
  function addH3(input){
    // input = input.join('')
    let result = input.replace(/^\###\s*([^#].*)$/gm, '<h3>$&</h3>').replace('### ', '')
    if(result !== input){ return result }

  }
  function addH4(input){
    // input = input.join('')
    let result = input.replace(/^\####\s*([^#].*)$/gm, '<h4>$&</h4>').replace('#### ', '')
    if(result !== input){ return result }

  }
  function addH5(input){
    // input = input.join('')
    let result = input.replace(/^\#####\s*([^#].*)$/gm, '<h5>$&</h5>').replace('##### ', '')
    if(result !== input){ return result }

  }
  const functions = [addH1, addH2, addH3, addH4, addH5]
  let result = stream.forEach(function(token){
    return functions.map(function(method, index){
      // console.log(stream[index], index, stream);
      return method(token)
    })
  })
  return result
  //receiving all of our functional identifiers
  //apply each each function to the tokenized data file or data stream
    //looks at token by applying each helper functional
      //each helper function applies some kind of replacement that removes markdown syntax with html tags
}
