function isLower(code) {
    if (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) return true
    return false
}

function isUpper(code) {
    if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) return true
    return false
}

function isLetter(code) {
    if (isLower(code) || isUpper(code)) return true
    return false
}

export default function caesarCipher(str, shift) {
    let out = ''
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)

        if (!isLetter(code)) {
            out += str[i]
            continue
        }

        let shiftedCode = code + (shift % 26)

        if (isLower(code) && shiftedCode > 'z'.charCodeAt(0)) {
            shiftedCode =
                'a'.charCodeAt(0) + (shiftedCode - 'z'.charCodeAt(0) - 1)
        }
        if (isUpper(code) && shiftedCode > 'Z'.charCodeAt(0)) {
            shiftedCode =
                'A'.charCodeAt(0) + (shiftedCode - 'Z'.charCodeAt(0) - 1)
        }
        out += String.fromCharCode(shiftedCode)
    }

    return out
}
