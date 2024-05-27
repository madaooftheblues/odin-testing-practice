export default function capitalize(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string')
    }

    return str.charAt(0).toUpperCase() + str.slice(1)
}
