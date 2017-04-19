class mdHtmlConverter {
  constructor(data){
    this.data = data
    this.element = ''
  }
  assign(input){
    var CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var NUMBERS = '1234567890'
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
    var tokener = this
    var result = this.data.split('').map(function(token){
      return tokener.assign(token)
    })
    return tokener.tokenBuilder(result)
  }
  tokenBuilder(input){
    var tokener = this, index = 0, message = [], tagName = [], counter = 0

    while(!(input[index] instanceof Character)){

      tagName.push(input[index].data)
      index++
    }
    tagName.pop()
    index--
    while(input[index].data !== '\n'){

      if(input[index] instanceof Character || input[index] instanceof Number || input[index] instanceof Space){
        message.push(input[index].data)
      }

      index++
    }
    message.shift()

    console.log(tagName.join(''));
    switch(tagName.join('')){
      case '#': tokener.element = new Header1(message.join('')); break;
      case '##': tokener.element = new Header2(message.join('')); break;
      case '###': tokener.element = new Header3(message.join('')); break;
      case '####': tokener.element = new Header4(message.join('')); break;
      case '#####': tokener.element = new Header5(message.join('')); break;
      case '######': tokener.element = new Header6(message.join('')); break;
    }
    return tokener.element
  }
}

class Header1 {constructor(data){this.data = data}}
class Header2 {constructor(data){this.data = data}}
class Header3 {constructor(data){this.data = data}}
class Header4 {constructor(data){this.data = data}}
class Header5 {constructor(data){this.data = data}}
class Header6 {constructor(data){this.data = data}}
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
