import reverseString from './reverseString.js'

test('module exists', () => {
    expect(reverseString).toBeDefined()
})

test('reverse a given string', () => {
    expect(reverseString('Hello World')).toBe('dlroW olleH')
})
