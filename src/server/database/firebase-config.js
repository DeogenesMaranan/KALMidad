import { initializeApp } from "firebase/app";
import env from 'dotenv'


env.config()

const firebaseConfig = {
    apiKey: process.env.FIRESTORE_API_KEY,
    authDomain: "kalmidad-project-server.firebaseapp.com",
    projectId: "kalmidad-project-server",
    storageBucket: "kalmidad-project-server.firebasestorage.app",
    messagingSenderId: process.env.FIRESTORE_MESSAGING_ID,
    appId: process.env.FIRESTORE_APP_ID
};

export default initializeApp(firebaseConfig);

export async function getReCaptchaResponse() {
    try {
        const recaptchaResponse = await axios.post(
        'https://www.google.com/recaptcha/api/siteverify',
        null,
        {
            params: {
            secret: '6LdWjHkqAAAAALs24s1GqFdINo-UOMVse8TE7W-8', 
            response: recaptchaToken
            }
        });
        
        if (recaptchaResponse.data.success) {
            return recaptchaResponse.data;
        } else {
            throw new Error('reCAPTCHA verification failed');
        }
    }
    catch(error) {
        throw new Error(error.message || 'Error during reCAPTCHA verification');
    }
}


