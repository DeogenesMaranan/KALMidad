import ReportDetails from '../model/report-details.js';
import UserCredential from '../model/user-credential.js';

class DataConverter {
    static longToUsDate(strDate) {
        const date = new Date(strDate);

        const formattedDate = new Intl.DateTimeFormat("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
        }).format(date);

        return formattedDate.replace(/\//g, '-');
    }

    static nameToFirestore(userInfo) {
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

    static reportToFirebase(reportDetails) {
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
            };
        }
        throw new Error('Expected ReportDetails instance for serialization');
    }

    static jsonConverter(p_object) {
        const newObject = {};

        for (const [key, value] of Object.entries(p_object)) {
            if (key === 'uid') continue;
            newObject[key] = value;
        }

        return newObject;
    }

    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    static usToLongDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
}

export const LongToUsDateConverter = DataConverter.longToUsDate;
export const nameToFirestore = DataConverter.nameToFirestore;
export const reportToFirebase = DataConverter.reportToFirebase;
export const jsonConverter = DataConverter.jsonConverter;
export const capitalize = DataConverter.capitalize;
export const UsToLongDateConverter = DataConverter.usToLongDate;