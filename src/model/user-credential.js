

class UserCredential {
    #city 
    #town 
    #suffix
    #userType
    #lastname
    #firstname 
    #middlename

    constructor(firstname='', middlename='', lastname='',
                city='', town=''
    ) {
        this.#city = city
        this.#town = town
        this.#userType = 'admin'
        this.#lastname = lastname
        this.#firstname = firstname
        this.#middlename = middlename
    }

    get town() { return this.#town }
    get city() { return this.#city }
    get userType() { return this.#userType }
    get lastname() { return this.#lastname }
    get firstname() { return this.#firstname }
    get middlename() { return this.#middlename }

    set city(city) { this.#city = city } 
    set town(town) { this.#town = town }
    set userType(userType) {this.#userType = userType }
    set lastname(lastname) { this.#lastname = lastname }
    set firstname(firstname) {this.#firstname = firstname }
    set middlename(middlename) {this.#middlename = middlename }
}

export default UserCredential