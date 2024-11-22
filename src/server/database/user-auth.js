import { 
    signOut,
    getAuth,
    setPersistence, 
    browserSessionPersistence,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
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

                let userCredential = await signInWithEmailAndPassword(this.#auth, email, password)
                resolve(userCredential.user)
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
                
                let userCredential = await createUserWithEmailAndPassword(this.#auth, email, password)
                await sendEmailVerification(this.#auth.currentUser)

                resolve(userCredential.user)
            } 
            catch (error) {
                reject(error)
            }
        });
    }

    getUserType(uid) {
        if (uid == 'm5wP2OTHSSZRxLZr0gjYidgMKck1') {
            return {userType: 'admin'}
        }
        return {userType: 'client'}
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
