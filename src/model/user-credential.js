

class UserCredential {
    #town
    #city
    #state 
    #suffix
    #region 
    #userType
    #lastname
    #firstname 
    #middlename

    constructor(firstname='', middlename='', lastname='', city='',
                suffix='null', region='', state='', town=''
    ) {
        this.#town = town
        this.#city = city
        this.#state = state
        this.#suffix = suffix
        this.#region = region
        this.#userType = 'admin'
        this.#lastname = lastname
        this.#firstname = firstname
        this.#middlename = middlename
    }

    get town() { return this.#town}
    get city() { return this.#city }
    get state() { return this.#state }
    get suffix() { return this.#suffix }
    get region() { return this.#region }
    get userType() { return this.#userType }
    get lastname() { return this.#lastname }
    get firstname() { return this.#firstname }
    get middlename() { return this.#middlename }

    set town(town) { this.#town = town }
    set city(city) { this.#city = city }
    set state(state) { this.#state = state }
    set suffix(suffix) {this.#suffix = suffix }
    set region(region) { this.#region = region } 
    set lastname(lastname) { this.#lastname = lastname }
    set firstname(firstname) {this.#firstname = firstname }
    set middlename(middlename) {this.#middlename = middlename }
}

export default UserCredential