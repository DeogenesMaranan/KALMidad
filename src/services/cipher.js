
import CryptoJS from 'crypto-js';
const { AES, enc } = CryptoJS;


class Cipher {
    #key

    constructor(key) {
        this.#key = key
    }

    encryptJson(jsonObject) {
        let cipherOjbect = {}
        
        Object.keys(jsonObject).forEach(key => {
            if (key !== 'flag') {  
                const cipherText = AES.encrypt(jsonObject[key], this.#key).toString()
                cipherOjbect[key] = cipherText
            } 
            else {
                cipherOjbect[key] = jsonObject[key]
            }
        })

        return cipherOjbect
    }

    decryptJson(jsonObject) {
        let cipherOjbect = {}
        
        Object.keys(jsonObject).forEach(key => {
            if (key !== 'flag') {
                const bytes = AES.decrypt(jsonObject[key], this.#key)
    
                if (bytes.sigBytes > 0) {
                    cipherOjbect[key] = bytes.toString(enc.Utf8)
                } 
            }
            else {
                cipherOjbect[key] = jsonObject[key]
            }
        })

        return cipherOjbect
    }
}

export default Cipher