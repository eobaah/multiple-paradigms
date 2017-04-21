let CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let NUMBERS = '1234567890'

class mdHtmlConverter {
  constructor(data){
    this.data = data
    this.elements = []
  }

  assign(char){
    switch(char){
      case '#': return new Hash(char); break;
      case '_': return new Underscore(char); break;
      case '.': return new Period(char); break;
      case '-': return new Hyphen(char); break;
      case ' ': return new Space(char); break;
      case '(': return new OpenParen(char); break;
      case ')': return new CloseParen(char); break;
      case '\n': return new NewLine(char); break;
      case '{': return new OpenCurly(char); break;
      case '}': return new CloseCurly(char); break;
      case '[': return new OpenSquare(char); break;
      case ']': return new CloseSquare(char); break;
      case ':': return new Colon(char); break;
      case '/': return new ForwardSlash(char); break;
      case '\\': return new BackSlash(char); break;
      case '*': return new Asterisk(char); break;
      case '!': return new Bang(char); break;
      default:
        if(CHARACTERS.includes(char)){ return new Character(char) }
        else if(NUMBERS.includes(char)){ return new Number(char) }
        break
    }
  }

  parseInitiator(){
    this.data = this.data.split('').map((token) => {
      return this.assign(token)
    })
    return this.tokenBuilder(this.data, 0)
  }

  stripExtraSpace(message) {
    if(message[0] === ' '){
      message.shift()
    }
  }

  checkBoldOrItalics(tag, data){
    let index = 0
    while(index <= data.length){
      if((data[index] === '*' && data[index + 1] === '*') || (data[index] === '_' && data[index + 1] === '_')){
        data.pop()
        data.pop()
        return data
      }else if(data[index] === '*' || data[index] === '_'){
        data.pop()
        return data
      }
      index++
    }
  }
  tokenBuilder(input, position){
    let index = position || 0, message = [], tagIdentifier = [], counter = 0
    while(!(input[index] instanceof Character)){
      if(input[index] !== undefined){
        tagIdentifier.push(input[index].data)
        index++
      }else{ return this.elements }
    }
    this.verifyTag(tagIdentifier)
    if(tagIdentifier.includes('#')){ tagIdentifier.pop() }
    index--

    while(input[index] && input[index].data !== '\n'){
      message.push(input[index].data)
      index++
    }

    this.stripExtraSpace(message)
    if(tagIdentifier.join('').includes('**') || tagIdentifier.join('').includes('__')  || tagIdentifier.join('').includes('*') || tagIdentifier.join('').includes('_')){
      this.checkBoldOrItalics(tagIdentifier, message)
    }
    this.populateElement(tagIdentifier.join(''),message.join(''))
    return this.resetIndex(index)
  }
  populateElement(input, message){
    switch(input){
      case '#': this.elements.push(`<h1>${message}</h1>`); break;
      case '##': this.elements.push(`<h2>${message}</h2>`); break;
      case '###': this.elements.push(`<h3>${message}</h3>`); break;
      case '####': this.elements.push(`<h4>${message}</h4>`); break;
      case '#####': this.elements.push(`<h5>${message}</h5>`); break;
      case '######': this.elements.push(`<h6>${message}</h6>`); break;
      case '**'||'__': this.elements.push(`<strong>${message}</strong>`); break;
      case '*'||'_': this.elements.push(`<i>${message}</i>`); break;
      default: this.elements.push(`<p>${message}</p>`); break;
    }
  }

  checkTag(input){
    switch(input){
      case '#' || ' #' || '  #' || '   #': return true;
      case '##' || ' ##' || '  ##' || '   ##': return true;
      case '###' || ' ###' || '  ###' || '   ###': return true;
      case '####' || ' ####' || '  ####' || '   ####': return true;
      case '#####' || ' #####' || '  #####' || '   #####': return true;
      case '######' || ' ######' || '  ######' || '   ######': return true;
      case '**'||'__': return true;
      case '*'||'_': return true;
      default: return false
    }
  }
  verifyTag(input){
    let count = 0, index = 0, result = {}
    //checking the tag if it is syntactically accurate
    if(!this.checkTag(input)){
      while (input[index] instanceof Space){
        //loop through input
        //count number of spaces before symbol
        if(input[index] instanceof Space){ count++ }
        //if more than accepted spaces are found it changes to pre code tags
        if(count > 3){
          result.flag = 'pre-code'
          result.data = input
        }
        index++
      }
      if(count < 4 && input[input.length - 1] !== ' '){
        result.flag = 'para'
        result.data = input
      }

    }else{
      return input }
    //if it fits criteria it continues though function
    return result
    //if does not correlate to an existing tag it changes into a p tag
  }


  indexIncrementor(num){
    if(this.data[num] instanceof NewLine || this.data[num] instanceof Space){
      return this.indexIncrementor(num + 1)
    }
    return num
  }
  resetIndex(index){
    let newIndex
    if(index === this.data.length){
      return this.elements
    }
    newIndex = this.indexIncrementor(index)

    return this.tokenBuilder(this.data, newIndex)
  }
}

class Token {constructor(data) {this.data = data}}
class Hash extends Token {}
class Underscore extends Token {}
class Period extends Token {}
class Hyphen extends Token {}
class Space extends Token {}
class OpenParen extends Token {}
class CloseParen extends Token {}
class NewLine extends Token {}
class OpenCurly extends Token {}
class CloseCurly extends Token {}
class OpenSquare extends Token {}
class CloseSquare extends Token {}
class Colon extends Token {}
class ForwardSlash extends Token {}
class BackSlash extends Token {}
class Asterisk extends Token {}
class Bang extends Token {}
class Character extends Token {}
class Number extends Token {}

class Header1 extends Token {}
class Header2 extends Token {}
class Header3 extends Token {}
class Header4 extends Token {}
class Header5 extends Token {}
class Header6 extends Token {}
class Paragraph extends Token {}
class Bold extends Token {}
class Italics extends Token {}
class UrlLink extends Token {}
class Image extends Token {}
module.exports = mdHtmlConverter
