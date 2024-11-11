

class UserCredential {
    #state 
    #suffix
    #region 
    #userType
    #lastname
    #firstname 
    #middlename

    constructor(firstname='', middlename='', lastname='',
                suffix='null', region='', state=''
    ) {
        this.#state = state
        this.#suffix = suffix
        this.#region = region
        this.#userType = 'admin'
        this.#lastname = lastname
        this.#firstname = firstname
        this.#middlename = middlename
    }

    get state() { return this.#state }
    get suffix() { return this.#suffix }
    get region() { return this.#region }
    get userType() { return this.#userType }
    get lastname() { return this.#lastname }
    get firstname() { return this.#firstname }
    get middlename() { return this.#middlename }

    set state(state) { this.#state = state }
    set suffix(suffix) {this.#suffix = suffix }
    set region(region) { this.#region = region } 
    set lastname(lastname) { this.#lastname = lastname }
    set firstname(firstname) {this.#firstname = firstname }
    set middlename(middlename) {this.#middlename = middlename }
}

export default UserCredential