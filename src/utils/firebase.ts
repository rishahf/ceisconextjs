// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7m8j5kkBOyTcsbmlUZBtOjIvCtn3LFHw",
    authDomain: "fir-creds.firebaseapp.com",
    projectId: "fir-creds",
    storageBucket: "fir-creds.appspot.com",
    messagingSenderId: "343918575162",
    appId: "1:343918575162:web:099345ad7d869eb239ff03",
    measurementId: "G-8XFVQHGZCM"
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
            let tokenId = await getToken(messaging, { vapidKey: "BMqTUqE-Tl5MlkDIHKGt2Fay1KLssd77u5RlyykSUQR5qXdQYUBa-2KsZnfJIBh6JbRy43ZCxi3Ye665aSKeSY0", })
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