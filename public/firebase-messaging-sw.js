importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCID2D9mlCLzSAxcYMzOETBf8oAswQngE0",
    authDomain: "expense-tracker-pwa-2fee8.firebaseapp.com",
    databaseURL: "https://expense-tracker-pwa-2fee8.firebaseio.com",
    projectId: "expense-tracker-pwa-2fee8",
    storageBucket: "expense-tracker-pwa-2fee8.appspot.com",
    messagingSenderId: "351766921306",
    appId: "1:351766921306:web:9f861e61a354fdb9e7d863",
    measurementId: "G-JFFYWGERJE"
)};

const messaging = firebase.messaging();
