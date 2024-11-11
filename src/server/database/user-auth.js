import { 
    signOut,
    getAuth,
    setPersistence, 
    browserSessionPersistence,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword, 
} from 'firebase/auth'

import firebaseApp from './firebase-config.js'
import StringValidator from '../../services/string-validator.js'


class UserAuth {
    
    #auth

    constructor() {
        this.#auth = getAuth(firebaseApp)
    }

    signin(email, password) {
        return new Promise(async (resolve, reject) => {
            try {
                await setPersistence(this.#auth, browserSessionPersistence)

                console.log('signing')
                let userCredential = signInWithEmailAndPassword(this.#auth, email, password)
                resolve((await userCredential).user)
            } 
            catch(error) {
                reject(error)
            }
        })
    }

    signup(email, password) {
        return new Promise(async (resolve, reject) => {
            try {
                await setPersistence(this.#auth, browserSessionPersistence)
                this.#constraintPassword(password)
                
                let userCredential = createUserWithEmailAndPassword(this.#auth, email, password)
                resolve((await userCredential).user)
            } 
            catch (error) {
                reject(error)
            }
        });
    }

    signout() {
        return new Promise (async (resolve, reject) => {
            try {
                await signOut(this.#auth)
                resolve('Signout successful.')
            } 
            catch (error) {
                reject('Error signing out.')
            }
        })
    }
    
    #constraintPassword(p_password) {
        if (!StringValidator.containsLowercaseLetter(p_password)){
            throw new Error('Password must contain lower-cased characters.')
        } 
        if (StringValidator.containsNonNumericCharacter(p_password)) {
            throw new Error('Password must only contain alphnumeric characters.')
        }
    }
}

export default new UserAuth()
