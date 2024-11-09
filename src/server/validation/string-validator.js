
class StringValidator {
    static containsLowercaseLetter(p_password) {
        return /[a-z]/.test(p_password)
    }

    static containsNonNumericCharacter(p_password) {
        return /[^a-zA-Z0-9]/.test(p_password)
    }
}

export default StringValidator
