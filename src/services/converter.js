
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
