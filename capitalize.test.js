import capitalize from './capitalize.js'

test('module exists', () => {
    expect(capitalize).toBeDefined()
})

test('Capitalize a string', () => {
    expect(capitalize('azlan')).toBe('Azlan')
    expect(capitalize('lion')).toBe('Lion')
    expect(capitalize('the man who sold the world.')).toBe(
        'The man who sold the world.',
    )
    expect(capitalize('Brilliant diagnostics')).toBe('Brilliant diagnostics')
})

test('Check for empty string', () => {
    expect(capitalize('')).toBe('')
})
