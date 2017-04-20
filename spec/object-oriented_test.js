import chai,{ expect } from 'chai'
import mtHtmlConverter from '../lib-object-oriented/index'
import data from '../for_test'

describe('object-oriented parser', () => {
  let myOOConvert = new mtHtmlConverter(data.data)

  it('is a function', () => {
    expect(mtHtmlConverter).to.be.a('function')
  })

  it('can convert Headers', () => {
    // console.log(typeof data.data);
    expect(myOOConvert.tokenIdentifier()).to.equal([])
  })
})
