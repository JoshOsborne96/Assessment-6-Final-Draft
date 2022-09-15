const {shuffleArray} = require('./utils')


describe('shuffleArray should', () => {
    test('return an array of same length', () => {

        expect(shuffleArray(Array.length)).toEqual(Array.length)
    })
    
    // test('', () => {
    //     expect(shuffleArray(Array)).toContain('Rusty')
    // })
    
})

