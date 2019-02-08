import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBpWf0wSlkCFNLoUjF7_AnX2qqv8TFH6_0",
    authDomain: "movieappcarodasilva.firebaseapp.com",
    databaseURL: "https://movieappcarodasilva.firebaseio.com",
    projectId: "movieappcarodasilva",
    storageBucket: "movieappcarodasilva.appspot.com",
    messagingSenderId: "952133220533"
};
firebase.initializeApp(config);

export default firestore;