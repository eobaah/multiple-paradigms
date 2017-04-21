import {addH1, addH2, addH3, addH4, addH5, addH6, addBold, addItalics, addLinks, addImages, addListItem} from '../lib-functional/index'
import chai, { expect } from 'chai'
import data from '../functional-test-data'

describe('functional programming paradigm', () => {

  it('exists', () => {
    expect(addH1).to.be.a('function')
  })
})


context('addH1()', () => {
  it('Convert md h1 heading to HTML h1 tags.', () => {

    expect(addH1('# Multiple Paradigms')).to.equal('<h1>Multiple Paradigms</h1>')
  })
})

context('addH2()', () => {
  it('Convert md h2 heading to HTML h2 tags.', () => {

    expect(addH2('## Challenge Rating')).to.equal('<h2>Challenge Rating</h2>')
  })
})

context('addH3()', () => {
  it('Convert md h3 heading to HTML h3 tags.', () => {

    expect(addH3('### New transparency')).to.equal('<h3>New transparency</h3>')
  })
})

context('addH4()', () => {
  it('Convert md h4 heading to HTML h4 tags.', () => {

    expect(addH4('#### Old transparency')).to.equal('<h4>Old transparency</h4>')
  })
})

context('addH5()', () => {
  it('Convert md h5 heading to HTML h5 tags.', () => {

    expect(addH5('##### last line for now')).to.equal('<h5>last line for now</h5>')
  })
})

context('addBold()', () => {
  it('Convert md addBold heading to HTML addBold tags.', () => {

    expect(addBold('__make me bold too__')).to.equal('<strong>make me bold too</strong>')
  })
})
