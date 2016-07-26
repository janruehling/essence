import chai from 'chai'
const {expect} = chai

import { useES2015 } from '../src/main'

describe('useES2015', () => {
  it('should just work', () => {
    const result = useES2015('Hello World')
    const expected = 'Hello World'
    expect(result).to.equal(expected)
  })
})
