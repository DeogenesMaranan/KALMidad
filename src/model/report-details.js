
class ReportDetails {
    #city
    #flag
    #status
    #calamity
    #dateTime
    #location
    #imageLink
    #description

    constructor(calamity, city, dateTime, description, flag,
                imageLink, location, status
    ) {
        this.#city = city
        this.#flag = flag
        this.#status = status
        this.#calamity = calamity
        this.#dateTime = dateTime
        this.#location = location
        this.#imageLink = imageLink
        this.#description = description
    }

    get city() { return this.#city }
    get flag() { return this.#flag }
    get status() { return this.#status}
    get calamity() { return this.#calamity }
    get dateTime() { return this.#dateTime }
    get location() { return this.#location }
    get imageLink() { return this.#imageLink }
    get description() { return this.#description }
    
    set city(city) { this.#city = city }
    set flag(flag) { this.#flag = flag }
    set status(status) { this.#status = status }
    set calamity(calamity) { this.calamity = calamity }
    set dateTime(dateTime) { thie.#dateTime = dateTime }
    set location(location) { this.#location = location }
    set imageLink(imageLink) { this.#imageLink = imageLink }
    set description(description) { this.#description = description }
}

export default ReportDetails