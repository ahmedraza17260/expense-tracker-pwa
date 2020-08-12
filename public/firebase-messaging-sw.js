importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyANNAsbq7y9zJ7KWuIIK71BfjHd93H_RVE",
    authDomain: "expense-tracker-pwa-61f27.firebaseapp.com",
    databaseURL: "https://expense-tracker-pwa-61f27.firebaseio.com",
    projectId: "expense-tracker-pwa-61f27",
    storageBucket: "expense-tracker-pwa-61f27.appspot.com",
    messagingSenderId: "240588230013",
    appId: "1:240588230013:web:604473047e5fa6b51c5014",
    measurementId: "G-LRVPMDJTJ0"    
)};

const messaging = firebase.messaging();
