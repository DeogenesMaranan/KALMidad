import { 
    doc, setDoc,
    getFirestore,
    getDoc,
    getDocs,
    query,
    collection,
    getCountFromServer,
    where
} from 'firebase/firestore'
import firebaseApp from './firebase-config.js'
import { 
    nameToFirestore, 
    reportToFirebase 
} from '../../services/converter.js'


class UserCredential {
    #firebaseApp

    constructor() {
        this.#firebaseApp = firebaseApp
    }
    insertUserInfo(p_user, p_uid) {
        return new Promise(async (resolve, reject) => {
            try {
                const db = getFirestore(this.#firebaseApp)
                const ref = doc(db, 'users-credential', p_uid)
                const jsonName = nameToFirestore(p_user)
                
                await setDoc(ref, jsonName)
                resolve('User\'s info added successfully')
            } 
            catch(error) { reject(error) }
        })
    }

    insertNewReport(p_reportDetails, p_uid) {
        return new Promise(async (resolve, reject) => {
            try {
                const db = getFirestore(this.#firebaseApp)
                const ref = collection(db, `report/${p_uid}/userReport`)
                const jsonReport = reportToFirebase(p_reportDetails)

                const reportId = await addDoc(ref, jsonReport)
                resolve(`Report successfully submitted: ${reportId}`)
            } 
            catch(error) { reject(error) }
        })
    }

    // can be applied for reporter's name, admin cred, report details
    getUserInfoById(p_document, p_uid) {
        return new Promise(async (resolve, reject) => {
            try{
                const db = getFirestore()
                const ref = doc(db, p_document, p_uid)
                const snapshot = await getDoc(ref)

                if (snapshot.exists()) {
                    resolve(snapshot.data())
                } else {
                    throw new Error(`Fetching failed. No information found.`)
                }
            }
            catch(error) { reject(error) }
        })
    }

    getAllUserInfo() {
        return new Promise(async (resolve, reject) => {
            try {
                const db = getFirestore()
                const request = query(collection(db, "users-credential"))
                const snapshot = await getDocs(request)

                if(!snapshot.empty) {
                    const results = snapshot.docs.map(doc => doc.data())
                    resolve(results)
                } else {
                    throw new Error('Fetching failed. No information was found.')
                }
            }
            catch(error) { reject(error) }
        })
    }

    // getall:
    // by city (newest first)
    // get report history where status = resolved 
    // note: for report history, filter by flag in the request, after getting all resolved reports
    getAllByConstraint(p_field, p_constraint) {
        return new Promise( async (resolve, reject) => {
            try {
                const db = getFirestore(this.#firebaseApp)
                const request = query(collection(db, "report"), 
                                where(p_field, "==", p_constraint))

                const snapshot = await getDocs(request)

                if (!snapshot.empty) {
                    const results = snapshot.docs.map(doc => doc.data());
                    resolve(results);
                } else {
                    throw new Error(`Fetching failed. No information found.`)
                }
            } 
            catch(error) { reject(error) }
        })
    }

    // getCount
    // total
    // castrophic
    // Major/Severe
    // Moderate
    // Minor/Mild

    getCount(p_field) {
        return new Promise(async (resolve, reject) => {
            try {
                const db = getFirestore()
                let request
                
                if (p_field == undefined) {
                    request = query(collection(db, 'report'))
                } else{
                    request = query(collection(db, 'report'), where('flag', '==', p_field))
                }

                const snapshot = await getCountFromServer(request)
                resolve(snapshot.data().count)
            }
            catch(error) { reject(error) }
        })
    }
}

export default new UserCredential()