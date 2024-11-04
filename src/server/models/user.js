
class User {
    constructor() {
        this._userId = ""
        this._email = ""
        this._password = ""
    }

    get userId() {
        return this._userId
    }
    get email() {
        return this._email
    }
    get password() {
        return this._password
    }

    set userId(userId) {
        this._userId = userId
    }
    set email(email) {
        this._email = email
    }
    set password(password) {
        this._password = password
    }
}