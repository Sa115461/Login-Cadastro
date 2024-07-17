const firebaseConfig = {
  apiKey: "AIzaSyDz1EedQrnPjayBpoJFsGI6tfwrZCAA1aI",
  authDomain: "login-7b75b.firebaseapp.com",
  projectId: "login-7b75b",
  storageBucket: "login-7b75b.appspot.com",
  messagingSenderId: "1057219988174",
  appId: "1:1057219988174:web:2433c5c4c8e6c01ff51e9f",
  measurementId: "G-Z8BQVKDB8E"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();