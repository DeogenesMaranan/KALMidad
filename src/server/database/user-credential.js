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
    collectionGroup
} from 'firebase/firestore'
import firebaseApp from './firebase-config.js'
import { 
    LongToUsDateConverter,
    nameToFirestore, 
    reportToFirebase 
} from '../../services/converter.js'


class UserCredential {
    #firebaseApp

    constructor() {
        this.#firebaseApp = firebaseApp
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
                
                await setDoc(ref, jsonName)
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
                const reportId = await setDoc(ref, jsonReport)

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
                
                await updateDoc(ref, fields)
                resolve('User successfully added.')
            }
            catch (error) { reject(error) }
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

    // used in getAllReportsSubcollection
    getAllUsersinAdmin() {
        return new Promise(async (resolve, reject) => {
            try {
                const db = getFirestore()
                const request = query(collection(db, 'admin'))
                const snapshot = await getDocs(request)

                if(!snapshot.empty) {
                    const valuesArray = []

                    snapshot.forEach((doc) => {
                        const data = doc.data()
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
                const db = getFirestore(this.#firebaseApp)
                let request

                if (p_field === 'ALL') {
                    request = query(collectionGroup(db, 'userReport'))
                } else {
                    request = query(collectionGroup(db, 'userReport'), where('flag', '==', p_field))
                }

                const snapshot = await getCountFromServer(request)
                resolve(snapshot.data().count)
            } catch (error) {
                console.log(error)
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

                const data = snapshot.docs.map(doc => ({
                    id: doc.id, ...doc.data()    
                }))
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

                const response = await updateDoc(ref, p_fields)
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
                const jsonReport = { status: p_status }
                
                await updateDoc(ref, jsonReport)
                resolve(`Report successfully submitted: ${p_reportId}`)
            } 
            catch(error) { reject(`Failed to update report. ${error}`) }
        })
    }
}

export default new UserCredential()