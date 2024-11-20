
class ReportDetails {
    #city
    #date
    #time
    #town
    #calamity
    #lastname
    #firstname
    #imageLink
    #description

    constructor(calamity, city, date, time, description,
                lastname, imageLink, town, firstname
    ) {
        this.#city = city
        this.#time = time
        this.#date = date
        this.#town = town
        this.#calamity = calamity
        this.#lastname = lastname
        this.#firstname = firstname
        this.#imageLink = imageLink
        this.#description = description
    }

    get city() { return this.#city }
    get date() { return this.#date }
    get time() { return this.#time }
    get town() { return this.#town }
    get calamity() { return this.#calamity }
    get lastname() { return this.#lastname }
    get firstname() { return this.#firstname }
    get imageLink() { return this.#imageLink }
    get description() { return this.#description }
    
    set city(city) { this.#city = city }
    set date(date) { this.#date = date }
    set time(time) { this.#time = time }
    set town(town) { this.#town = town }
    set calamity(calamity) { this.#calamity = calamity }
    set lastname(lastname) { this.#lastname = lastname }
    set firstname(firstname) { this.#firstname = firstname }
    set imageLink(imageLink) { this.#imageLink = imageLink }
    set description(description) { this.#description = description }
}

export default ReportDetails