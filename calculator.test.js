import calculator from './calculator.js'

const c = calculator()

test('module exists', () => {
    expect(calculator).toBeDefined()
})

test('add exists', () => {
    expect(c.add).toBeDefined()
})

test('subtract exists', () => {
    expect(c.subtract).toBeDefined()
})

test('multiply exists', () => {
    expect(c.multiply).toBeDefined()
})

test('divide exists', () => {
    expect(c.divide).toBeDefined()
})

test('addtition', () => {
    expect(c.add(2, 2)).toBe(4)
    expect(c.add(-5, 2)).toBe(-3)
    expect(c.add(2, 0)).toBe(2)
})

test('subtraction', () => {
    expect(c.subtract(2, 2)).toBe(0)
    expect(c.subtract(-5, 2)).toBe(-7)
    expect(c.subtract(2, 0)).toBe(2)
})

test('multiplication', () => {
    expect(c.multiply(2, 2)).toBe(4)
    expect(c.multiply(-5, 2)).toBe(-10)
    expect(c.multiply(2, 0)).toBe(0)
})

test('division', () => {
    expect(c.divide(2, 2)).toBe(1)
    expect(c.divide(-5, 2)).toBeCloseTo(-2.5)
    expect(() => c.divide(2, 0)).toThrow()
})
