// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASURMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (typeof window !== "undefined") {
    const analytics = getAnalytics(app);
}
export const getFirebaseMessageToken = async () => {
    let isSupport = await isSupported()
    if (isSupport) {
        const messaging = getMessaging(app);
        try {
            let tokenId = await getToken(messaging, { vapidKey: process.env.FIREBASE_VAP_ID_KEY, })
            return { tokenId }
        } catch (error) {
            return { error }
        }
    }
    else {
        return { error: " Notification Not Supported" }
    }
}
// export const onMessageListener = () => {
//     const messaging = getMessaging(app);
//     return new Promise((resolve, reject) => {
//         if (messaging) {
//             messaging.onMessage((payload) => {
//                 resolve(payload)
//             })
//         } else {
//             reject(null)
//         }
//     })
// }


export default app