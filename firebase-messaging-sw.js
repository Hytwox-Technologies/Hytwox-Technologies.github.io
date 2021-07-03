importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

var firebaseConfig = {
  apiKey: "AIzaSyAiVhJulOg1A8tymvmf-9spbfffgnhxEuc",
  authDomain: "acqui-a848d.firebaseapp.com",
  projectId: "acqui-a848d",
  storageBucket: "acqui-a848d.appspot.com",
  messagingSenderId: "173137562034",
  appId: "1:173137562034:web:68de1767f5638ff79bfcab",
  measurementId: "G-B1T0QSZ5RJ",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});
