
import ReportDetails from '../model/report-details.js'
import UserCredential from '../model/user-credential.js';


export function nameToFirestore(userInfo) {
    if (userInfo instanceof UserCredential) {
        return {
            firstname: userInfo.firstname,
            middlename: userInfo.middlename,
            lastname: userInfo.lastname,
            userType: userInfo.userType,
            town: userInfo.town,
            city: userInfo.city
        };
    }
    throw new Error('Expected User Credential instance for serialization');
}

export function reportToFirebase(reportDetails) {
    if (reportDetails instanceof ReportDetails) {
        return {
            city: reportDetails.city,
            date: reportDetails.date,
            time: reportDetails.time,
            flag: reportDetails.flag,
            town: reportDetails.town,
            status: reportDetails.status,
            calamity: reportDetails.calamity,
            imageLink: reportDetails.imageLink,
            description: reportDetails.description
        }
    }
}
