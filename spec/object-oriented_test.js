import chai,{ expect } from 'chai'
import mtHtmlConverter from '../lib-object-oriented/index'

describe('object-oriented parser', () => {

  it('is a function', () => {
    expect(mtHtmlConverter).to.be.a('function')
  })

  it('can convert Headers', () => {
    let myOOConvert = new mtHtmlConverter(
      `# Multiple Paradigms
      ## Challenge Rating
      ###### Got a whole heap of information somewhere
      ### Another test
      #### Old transparency
      ### New transparency
      # Other words for this line
      ##### Last line for now
      ###### Okay one more
      `)
    let result = myOOConvert.parseInitiator()
    expect(result).to.eql([
      "<h1>Multiple Paradigms</h1>",
      "<h2>Challenge Rating</h2>",
      "<h6>Got a whole heap of information somewhere</h6>",
      "<h3>Another test</h3>",
      "<h4>Old transparency</h4>",
      "<h3>New transparency</h3>",
      "<h1>Other words for this line</h1>",
      "<h5>Last line for now</h5>",
      "<h6>Okay one more</h6>"
    ])
  })
})
