
import ReportDetails from '../model/report-details.js'
import UserCredential from '../model/user-credential.js';


export function LongToUsDateConverter(strDate) {
    const date = new Date(strDate);

    // Format the date as MM-DD-YYYY
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
    }).format(date)

    return formattedDate.replace(/\//g, '-')
}

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
            flag: reportDetails.flag,
            status: reportDetails.status,
            calamity: reportDetails.calamity,
            imageLink: reportDetails.imageLink,
            description: reportDetails.description
        }
    }
}

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function UsToLongDateConverter(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}
