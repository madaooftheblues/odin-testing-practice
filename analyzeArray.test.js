import analyzeArray from './analyzeArray.js'

const object = analyzeArray([])

test('module exists', () => {
    expect(analyzeArray).toBeDefined()
})

test('average exists', () => {
    expect(object.average).toBeDefined()
})

test('min exists', () => {
    expect(object.min).toBeDefined()
})

test('max exists', () => {
    expect(object.max).toBeDefined()
})

test('length exists', () => {
    expect(object.length).toBeDefined()
})

const a1 = analyzeArray([1, 8, 3, 4, 2, 6])
const a2 = analyzeArray([21, 1, 5, 8, 3, 2, 11])

test('average', () => {
    expect(a1.average).toBe(4)
    expect(a2.average).toBeCloseTo(7.285)
})

test('min', () => {
    expect(a1.min).toBe(1)
    expect(a2.min).toBe(1)
})

test('max', () => {
    expect(a1.max).toBe(8)
    expect(a2.max).toBe(21)
})

test('length', () => {
    expect(a1.length).toBe(6)
    expect(a2.length).toBe(7)
})
