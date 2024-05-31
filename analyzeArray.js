function len(arr) {
    return arr.length
}

function average(arr) {
    let sum = arr.reduce((total, current) => current + total, 0)
    return sum / arr.length
}

function min(arr) {
    let m = Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < m) m = arr[i]
    }
    return m
}

function max(arr) {
    let m = Number.NEGATIVE_INFINITY
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > m) m = arr[i]
    }
    return m
}

export default function analyzeArray(arr) {
    return {
        average: average(arr) || 0,
        min: min(arr) || 0,
        max: max(arr) || 0,
        length: len(arr) || 0,
    }
}
