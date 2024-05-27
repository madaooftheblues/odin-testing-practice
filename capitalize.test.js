import capitalize from './capitalize.js'

test('module exists', () => {
    expect(capitalize).toBeDefined()
})

test('Capitalize a string', () => {
    expect(capitalize('azlan')).toBe('Azlan')
    expect(capitalize('lion')).toBe('Lion')
})
