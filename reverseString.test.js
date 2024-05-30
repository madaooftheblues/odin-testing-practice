import reverseString from './reverseString.js'

test('module exists', () => {
    expect(reverseString).toBeDefined()
})

test('reverse a given string', () => {
    expect(reverseString('Hello World')).toBe('dlroW olleH')
    expect(reverseString('Funia')).toBe('ainuF')
})

test('empty string should return an empty string', () => {
    expect(reverseString('')).toBe('')
})
