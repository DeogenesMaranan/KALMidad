
import Name from '../model/name.js';


export function nameToFirestore(name) {
    if (name instanceof Name) {
        return {
            firstname: name.firstname,
            middlename: name.middlename,
            lastname: name.lastname,
        };
    }
    throw new Error('Expected Name instance for serialization');
}
