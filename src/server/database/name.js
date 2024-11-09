import { 
    doc, setDoc,
    getFirestore
} from 'firebase/firestore'
import firebaseApp from './firebase-config.js'
import { nameToFirestore } from '../services/converter.js'

class Name {
    #db

    constructor() {
        this.#db = getFirestore(firebaseApp)
    }

    insertName(p_name) {
        return new Promise(async (resolve, reject) => {
            try {
                const ref = doc(this.#db, 'user-credential', 'name')
                const jsonName = nameToFirestore(p_name)

                await setDoc(ref, jsonName)
                console.log('setdoc finished')
                resolve('User\'s name added successfully')
            } 
            catch(error) {
                reject(error)
            }
        })
    }
}

export default new Name()