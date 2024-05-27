export default function reverseString(str) {
    let out = ''
    for (let i = str.length - 1; i >= 0; i--) {
        out += str[i]
    }
    return out
}
