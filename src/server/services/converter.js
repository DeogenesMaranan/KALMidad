// converter.js (Firestore Converter)
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

export function nameFromFirebase(snapshot, options) {
    const data = snapshot.data(options);
    return new Name(data.firstname, data.middlename, data.lastname);
}
