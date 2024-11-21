
class ReportDetails {
    #city
    #date
    #time
    #town
    #flag
    #status
    #calamity
    #imageLink
    #description

    constructor(calamity, city, date, time, description, 
                flag, imageLink, town, status
    ) {
        this.#city = city
        this.#time = time
        this.#date = date
        this.#town = town
        this.#flag = flag
        this.#status = status
        this.#calamity = calamity
        this.#imageLink = imageLink
        this.#description = description
    }

    get city() { return this.#city }
    get date() { return this.#date }
    get time() { return this.#time }
    get town() { return this.#town }
    get flag() { return this.#flag }
    get status() { return this.#status }
    get calamity() { return this.#calamity }
    get imageLink() { return this.#imageLink }
    get description() { return this.#description }
    
    set city(city) { this.#city = city }
    set date(date) { this.#date = date }
    set time(time) { this.#time = time }
    set town(town) { this.#town = town }
    set flag(flag) { this.#flag = flag }
    set status(status) { this.#status = status }
    set calamity(calamity) { this.#calamity = calamity }
    set imageLink(imageLink) { this.#imageLink = imageLink }
    set description(description) { this.#description = description }
}

export default ReportDetails