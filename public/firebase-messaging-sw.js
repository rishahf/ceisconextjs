importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js")

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyA7m8j5kkBOyTcsbmlUZBtOjIvCtn3LFHw",
  authDomain: "fir-creds.firebaseapp.com",
  projectId: "fir-creds",
  storageBucket: "fir-creds.appspot.com",
  messagingSenderId: "343918575162",
  appId: "1:343918575162:web:099345ad7d869eb239ff03",
  measurementId: "G-8XFVQHGZCM"
};

firebase.initializeApp(firebaseConfig)

// Retrieve firebase messaging
const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {

  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})
