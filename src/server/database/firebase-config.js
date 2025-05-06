import { initializeApp } from "firebase/app";
import env from 'dotenv';
import axios from 'axios';

env.config();

class FirebaseService {
    static firebaseConfig = {
        apiKey: process.env.FIRESTORE_API_KEY,
        authDomain: "kalmidad-project-server.firebaseapp.com",
        projectId: "kalmidad-project-server",
        storageBucket: "kalmidad-project-server.firebasestorage.app",
        messagingSenderId: process.env.FIRESTORE_MESSAGING_ID,
        appId: process.env.FIRESTORE_APP_ID
    };

    static app = initializeApp(FirebaseService.firebaseConfig);

    static async getReCaptchaResponse(recaptchaToken) {
        try {
            const recaptchaResponse = await axios.post(
                'https://www.google.com/recaptcha/api/siteverify',
                null,
                {
                    params: {
                        secret: process.env.FIRESTORE_SECRET_KEY,
                        response: recaptchaToken
                    }
                }
            );

            if (recaptchaResponse.data.success) {
                return recaptchaResponse.data;
            } else {
                throw new Error('reCAPTCHA verification failed');
            }
        } catch (error) {
            throw new Error(error.message || 'Error during reCAPTCHA verification');
        }
    }
}

export default FirebaseService.app;
export const getReCaptchaResponse = FirebaseService.getReCaptchaResponse;
