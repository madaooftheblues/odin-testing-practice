import caesarCipher from './caesarCipher.js'

test('module exists', () => {
    expect(caesarCipher).toBeDefined()
})

test('encryption', () => {
    expect(caesarCipher('abc', 3)).toBe('def')
    expect(caesarCipher('abcd', 3)).toBe('defg')
    expect(caesarCipher('xyz', 3)).toBe('abc')
    expect(caesarCipher('The man who sold the world.', 11)).toBe(
        'Esp xly hsz dzwo esp hzcwo.',
    )
    expect(caesarCipher('abcd', 1000)).toBe('mnop')
})

test('case preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})

test('ignore non-letters', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})
