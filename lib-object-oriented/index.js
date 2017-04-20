class mdHtmlConverter {
  constructor(data){
    this.data = data
    this.elements = []
  }
  assign(input){
    let CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let NUMBERS = '1234567890'
    switch(input){
      case '#': return new Hash(input); break;
      case '_': return new Underscore(input); break;
      case '.': return new Period(input); break;
      case '-': return new Hyphen(input); break;
      case ' ': return new Space(input); break;
      case '(': return new OpenParen(input); break;
      case ')': return new CloseParen(input); break;
      case '\n': return new NewLine(input); break;
      case '{': return new OpenCurly(input); break;
      case '}': return new CloseCurly(input); break;
      case '[': return new OpenSquare(input); break;
      case ']': return new CloseSquare(input); break;
      case ':': return new Colon(input); break;
      case '/': return new ForwardSlash(input); break;
      case '\\': return new BackSlash(input); break;
      case '*': return new Asterisk(input); break;
      case '!': return new Bang(input); break;
      default:
        if(CHARACTERS.indexOf(input)){ return new Character(input) }
        else if(NUMBERS.indexOf(input)){ return new Number(input) }
        break
    }
  }
  tokenIdentifier(){
    let index = 0
    this.data = this.data.split('').map((token) => {
      return this.assign(token)
    })
    return this.tokenBuilder(this.data)
  }
  tokenBuilder(input, position){
    let index = position || 0, message = [], tagSymbol = [], counter = 0
    while(!(input[index] instanceof Character)){
      if(input[index] !== undefined){
        tagSymbol.push(input[index].data)
        index++
      }else{
        return this.elements
      }
    }
    if(tagSymbol.includes('#')){
      tagSymbol.pop()
    }
    index--
    if(tagSymbol.join('').includes('__')||tagSymbol.join('').includes('**')){
      console.log('im a bold');
    }

    while(input[index].data !== '\n'){
      message.push(input[index].data)
      index++
    }
    message.shift()
    this.populateElement(tagSymbol.join(''),message.join(''))
    return this.resetIndex(index)
  }
  indexIncrementor(num){
    if(this.data[num] instanceof NewLine || this.data[num] instanceof Space){
      // console.log('where am i???? ', this.data[num + 2], this.data.length);
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
  populateElement(input, message){
    switch(input){
      case '#': this.elements.push(new Header1(message)); break;
      case '##': this.elements.push(new Header2(message)); break;
      case '###': this.elements.push(new Header3(message)); break;
      case '####': this.elements.push(new Header4(message)); break;
      case '#####': this.elements.push(new Header5(message)); break;
      case '######': this.elements.push(new Header6(message)); break;
      case '**'||'__': this.elements.push(new Bold(message)); break;
      case '*'||'_': this.elements.push(new Italics(message)); break;
    }
  }
}

class Header1 {constructor(data){this.data = data}}
class Header2 {constructor(data){this.data = data}}
class Header3 {constructor(data){this.data = data}}
class Header4 {constructor(data){this.data = data}}
class Header5 {constructor(data){this.data = data}}
class Header6 {constructor(data){this.data = data}}
class Bold {constructor(data){this.data = data}}
class Italics {constructor(data){this.data = data}}
class Hash {constructor(data){this.data = data}}
class Underscore {constructor(data){this.data = data}}
class Period {constructor(data){this.data = data}}
class Hyphen {constructor(data){this.data = data}}
class Space {constructor(data){this.data = data}}
class OpenParen {constructor(data){this.data = data}}
class CloseParen {constructor(data){this.data = data}}
class NewLine {constructor(data){this.data = data}}
class OpenCurly {constructor(data){this.data = data}}
class CloseCurly {constructor(data){this.data = data}}
class OpenSquare {constructor(data){this.data = data}}
class CloseSquare {constructor(data){this.data = data}}
class Colon {constructor(data){this.data = data}}
class ForwardSlash {constructor(data){this.data = data}}
class BackSlash {constructor(data){this.data = data}}
class Asterisk {constructor(data){this.data = data}}
class Bang {constructor(data){this.data = data}}
class UrlLink {constructor(data){this.data = data}}
class Image {constructor(data){this.data = data}}
class Character {constructor(data){this.data = data}}
class Number {constructor(data){this.data = data}}
module.exports = mdHtmlConverter
