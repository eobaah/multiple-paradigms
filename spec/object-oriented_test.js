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
      { data: 'Multiple Paradigms' },
      { data: 'Challenge Rating' },
      { data: 'Got a whole heap of information somewhere' },
      { data: 'Another test' },
      { data: 'Old transparency' },
      { data: 'New transparency' },
      { data: 'Other words for this line' },
      { data: 'Last line for now' },
      { data: 'Okay one more' }
    ])
  })
})
