import React, { Component } from 'react'
import firebase from "@react-native-firebase/app";
// import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyADZjgrx11K1XSqGtALqDyUWPR5k_jMgSM",
    authDomain: "course-c25e7.firebaseapp.com",
    projectId: "course-c25e7",
    storageBucket: "course-c25e7.appspot.com",
    messagingSenderId: "507828569515",
    appId: "1:507828569515:web:1bd7249b4077f649b57eee",
    measurementId: "${config.measurementId}"
  };

 
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };