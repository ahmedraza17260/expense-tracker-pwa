import firebase from 'firebase';

export const initializeFirebase = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyANNAsbq7y9zJ7KWuIIK71BfjHd93H_RVE",
        authDomain: "expense-tracker-pwa-61f27.firebaseapp.com",
        databaseURL: "https://expense-tracker-pwa-61f27.firebaseio.com",
        projectId: "expense-tracker-pwa-61f27",
        storageBucket: "expense-tracker-pwa-61f27.appspot.com",
        messagingSenderId: "240588230013",
        appId: "1:240588230013:web:875666c26f6a5f591c5014",
        measurementId: "G-9V5KVV2DGZ"
    });
}


export const permissionToReceiveNotifications = async () => {
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        //console.log('Token:', token);

        return token;
    } catch (error) {
        console.error(error);
    }
}



// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();


// export function initNotification() {
//     Notification.requestPermission().then((permission) => {
//         console.log(permission)
//         if (permission === "granted") {
//             messaging.getToken().then((currentToken) => {
//                 if (currentToken) {
//                     console.log("TOKEN")
//                     console.log(currentToken);
//                 } else {
//                     console.log('No Instance ID token available. Request permission to generate one.');

//                 }
//             }).catch((err) => {
//                 console.log('An error occurred while retrieving token. ', err);
//             });
//         }
//     })
// }