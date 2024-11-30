
import { 
    doc, setDoc,
    getFirestore,
    getDoc,
    getDocs,
    query,
    collection,
    getCountFromServer,
    where,
    deleteDoc,
    updateDoc,
    collectionGroup,
    orderBy
} from 'firebase/firestore'
import firebaseApp from './firebase-config.js'
import { 
    LongToUsDateConverter,
    nameToFirestore, 
    reportToFirebase 
} from '../../services/converter.js'
import Cipher from '../../services/cipher.js'
import env from 'dotenv'


class UserCredential {
    #firebaseApp
    #cipher
    #key

    constructor() {
        env.config()

        this.#firebaseApp = firebaseApp
        this.#key = process.env.ENCRYPTION_KEY
        this.#cipher = new Cipher(this.#key)
    }

    deleteReport(p_subcollection, p_uid) {
        return new Promise(async (resolve, reject) => {
            try {
                const db = getFirestore(this.#firebaseApp)
                const ref = doc(db, `report/${p_uid}/userReport/${p_subcollection}`)

                await deleteDoc(ref)
                resolve('Report deleted successfully.')
            } catch(error) { reject('Failed to delete report.') }
        })
    }
    
    insertUserInfo(p_user, p_uid) {
        return new Promise(async (resolve, reject) => {
            try {
                const db = getFirestore(this.#firebaseApp)
                const ref = doc(db, 'users-credential', p_uid)
                const jsonName = nameToFirestore(p_user)
                const encryptedJson = this.#cipher.encryptJson(jsonName)
                
                await setDoc(ref, encryptedJson)
                resolve('User\'s info added successfully')
            } 
            catch(error) { reject(error) }
        })
    }

    insertNewReport(p_reportDetails, p_uid) {
        return new Promise(async (resolve, reject) => {
            try {
                const date = LongToUsDateConverter(p_reportDetails.date)
                const subcollection = `${date} ${p_reportDetails.time}`
        
                const db = getFirestore()
                const ref = doc(db, `report/${p_uid}/userReport/${subcollection}`)

                const jsonReport = reportToFirebase(p_reportDetails)
                const encryptedJson = this.#cipher.encryptJson(jsonReport)

                const reportId = await setDoc(ref, encryptedJson)

                resolve(`Report successfully submitted: ${reportId}`)
            } 
            catch(error) { reject(error) }
        })
    }

    insertNewUser(p_uid) {
        return new Promise(async (resolve, reject) => {
            try {
                const db = getFirestore(this.#firebaseApp)
                const ref = doc(db, 'admin', 'user-list')
                let fields = { }
                fields['user'+p_uid] = p_uid
                const encryptedJson = this.#cipher.encryptJson(fields)
                
                await updateDoc(ref, encryptedJson)
                resolve('User successfully added.')
            }
            catch (error) { reject(error) }
        })
    }

    getAllStringUids() {
        return new Promise(async (resolve, reject) => {
            try {
                const querySnapshot = await getDocs(collectionGroup(db, "admin"))
                const stringUids = []
                
                querySnapshot.forEach((doc) => {
                    const data = doc.data()
                    if (data.p_uid) {
                        stringUids.push(data.p_uid)
                    }
                })
                resolve(stringUids)
            }
            catch (error) { reject(error) }
        })
    }

    getUserInfoById(p_document, p_uid) {
        return new Promise(async (resolve, reject) => {
            try{
                const db = getFirestore()
                const ref = doc(db, p_document, p_uid)
                const snapshot = await getDoc(ref)

                if (snapshot.exists()) {
                    const decryptedData = this.#cipher.decryptJson(snapshot.data())
                    resolve(decryptedData)
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
                    const results = snapshot.docs.map(doc => {
                        return this.#cipher.decryptJson(doc.data())
                    })
                    resolve(results)
                } else {
                    throw new Error('Fetching failed. No information was found.')
                }
            }
            catch(error) { reject(error) }
        })
    }

    getAllUsersinAdmin() {
        return new Promise(async (resolve, reject) => {
            try {
                const db = getFirestore()
                const request = query(collection(db, 'admin'))
                const snapshot = await getDocs(request)

                if(!snapshot.empty) {
                    const valuesArray = []

                    snapshot.forEach((doc) => {
                        const data = this.#cipher.decryptJson(doc.data())
                        Object.values(data).forEach((value) => {
                            valuesArray.push(value)
                        })
                    })
                    resolve(valuesArray)
                } else {
                    throw new Error('Fetching failed. No information was found.')
                }
            }
            catch (error) { reject(error) }
        })
    }

    getAllReportsSubcollection() {
        return new Promise(async (resolve, reject) => {
            try {
                const userList = await this.getAllUsersinAdmin()

                const allReportList = []
                for(const uid of userList) {
                    const userName = await this.getUserInfoById('users-credential', uid)
                    const userReport = await this.getAllUserReports('report', uid, 'userReport')

                    Object.values(userReport).forEach((value) => {
                        const userData = { uid, ...userName, ...value }
                        allReportList.push(userData)
                    })
                }

                resolve(allReportList)
            }
            catch(error) { reject(error) }
        })
    }

    getAllByConstraint(p_field, p_constraint) {
        return new Promise( async (resolve, reject) => {
            try {
                const db = getFirestore(this.#firebaseApp)
                const request = query(collection(db, "report"), 
                                where(p_field, "==", p_constraint))

                const snapshot = await getDocs(request)

                if (!snapshot.empty) {
                    const results = snapshot.docs.map(doc => { 
                        return this.#cipher.decryptJson(doc.data())
                    })
                    resolve(results)
                } else {
                    throw new Error(`Fetching failed. No information found.`)
                }
            } 
            catch(error) { reject(error) }
        })
    }

    getCount(p_field) {
        return new Promise(async (resolve, reject) => {
            try {
                const db = getFirestore(this.#firebaseApp)
                let request

                if (p_field === 'ALL') {
                    request = query(collectionGroup(db, 'userReport'))
                } else {
                    request = query(collectionGroup(db, 'userReport'), where('flag', '==', p_field), orderBy('date', 'asc'))
                }

                const snapshot = await getCountFromServer(request)
                resolve(snapshot.data().count)

            } catch (error) {
                reject(error)
            }
        });
    }


    getAllUserReports(p_document, p_uid, subcollection) {
        return new Promise(async (resolve, reject) => {
            try {
                const db = getFirestore()
                const ref = collection(db, p_document, p_uid, subcollection)
                const snapshot = await getDocs(ref)

                if (snapshot.empty) {
                    throw new Error(`No reports found for user ${p_uid}`)
                }

                const data = snapshot.docs.map(doc => {
                    const decryptedData = this.#cipher.decryptJson(doc.data())
                    return { id: doc.id, ...decryptedData }
                })

                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
    }

    updateUserInfo(p_fields, p_uid) {
        return new Promise(async (resolve, reject) => {
            try {
                const db = getFirestore(this.#firebaseApp)
                const ref = doc(db, 'users-credential', p_uid)
                const encryptedJson = this.#cipher.encryptJson(p_fields)

                const response = await updateDoc(ref, encryptedJson)
                resolve(response)
            }
            catch(error) { reject(error) }
        })
    }

    updateReportStatus(p_uid, p_reportId, p_status) {
        return new Promise(async (resolve, reject) => {
            try {
                const db = getFirestore()
                const ref = doc(db, `report/${p_uid}/userReport/${p_reportId}`)
                const encryptedJson = this.#cipher.encryptJson( { status: p_status } )
                
                await updateDoc(ref, encryptedJson)
                resolve(`Report successfully submitted: ${p_reportId}`)
            } 
            catch(error) { reject(`Failed to update report. ${error}`) }
        })
    }
}

export default new UserCredential()