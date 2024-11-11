
import UserCredential from '../model/user-credential.js';


export function nameToFirestore(userInfo) {
    if (userInfo instanceof UserCredential) {
        return {
            firstname: userInfo.firstname,
            middlename: userInfo.middlename,
            lastname: userInfo.lastname,
            suffix: userInfo.suffix,
            userType: userInfo.userType,
            region: userInfo.region,
            state: userInfo.state,
            city: userInfo.city,
            town: userInfo.town
        };
    }
    throw new Error('Expected User Credential instance for serialization');
}
