module.exports = function parseFunctional(fileArray) {
  var methods = [addH1, addH2, addH3, addH4, addH5, addH6, addBold, addItalics, addLinks, addImages, addListItem]
  var result = []
  fileArray.map(function(line){
    return methods.map(function(method){
      if(method(line)[0] === '<'){
        result.push(method(line))
      }
      return method(line)
    })
  })
  return result.join('\n')
}
export default function addH1(input){
  return input.replace(/^\s*(?:\<h1\>)*(?:\#\s)(?!\#)(.*)/gm, '<h1>$1</h1>')
}
export default function addH2(input){
  return input.replace(/^\s*(?:\<h2\>)*(?:\##\s)(?!\#)(.*)/gm, '<h2>$1</h2>')
}
export default function addH3(input){
  return input.replace(/^\s*(?:\<h3\>)*(?:\###\s)(?!\#)(.*)/gm, '<h3>$1</h3>')
}
export default function addH4(input){
  return input.replace(/^\s*(?:\<h4\>)*(?:\####\s)(?!\#)(.*)/gm, '<h4>$1</h4>')
}
export default function addH5(input){
  return input.replace(/^\s*(?:\<h5\>)*(?:\#####\s)(?!\#)(.*)/gm, '<h5>$1</h5>')
}
export default function addH6(input){
  return input.replace(/^\s*(?:\<h6\>)*(?:\######\s)(?!\#)(.*)/gm, '<h6>$1</h6>')
}
export default function addBold(input){
  return input.replace(/(?:(?:\*\*)|(?:\_\_))*(.+?)(?:(\*\*)|(?:\_\_))/gm, '<strong>$1</strong>')
}
export default function addItalics(input){
  return input.replace(/(?:(?:\*)|(?:\_))*(.+?)(?:(\*)|(?:\_))/gm, '<i>$1</i>')
}
export default function addLinks(input){
  return input.replace(/(^(?:(\[(.+?)\]))*(?:\((.*?)\)))/gm, '<a href=\"$4\">$3</a>')
}
export default function addImages(input){
  return input.replace(/(?:!(?:(\[(.+?)\]))*(?:\((.*?)\)))/gm, '<img src="$3" alt="$2">')
}
export default function addListItem(input){
  return input.replace(/(?:(\- )(.*))/gm, '<li>$2</li>')
}
