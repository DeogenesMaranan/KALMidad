

class Name {
    #firstname 
    #middlename
    #lastname

    constructor(firstname='', middlename='', lastname='') {
        this.#firstname = firstname
        this.#middlename = middlename
        this.#lastname = lastname 
    }

    get lastname() { return this.#lastname }
    get firstname() { return this.#firstname }
    get middlename() { return this.#middlename }

    set lastname(lastname) { this.#lastname = lastname }
    set firstname(firstname) {this.#firstname = firstname }
    set middlename(middlename) {this.#middlename = middlename }
}

export default Name