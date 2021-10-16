const firebaseConfig = {
  apiKey: "AIzaSyBJrLS01kgeEd08WF8QslKMAlifiUTdfuM",
  authDomain: "wilmer-world-peace.firebaseapp.com",
  projectId: "wilmer-world-peace",
  storageBucket: "wilmer-world-peace.appspot.com",
  messagingSenderId: "906630158543",
  appId: "1:906630158543:web:cdd6587b33f060fce9bfba",
  measurementId: "G-CWKN8R7KM5",
  databaseURL: "https://wilmer-world-peace-default-rtdb.firebaseio.com/",
};

// JavaScript file for the web page "World Peace Issue Tracker"
// Created by Harrison Kong
// Copyright (C) Coursera 2020

// Your web app's Firebase configuration

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Paste the web app's configuration above this line
// Our code starts below

// GET A ROOT REFERENCE to issues HERE (type along)
const rootRef = firebase.database().ref("issues/");

// Task 3 ------------------------------------------

rootRef.push({
  description: "Logo does not show up on screen 3",
  resolved: "yes",
  severity: "minor",
});

rootRef.push({
  description: "Screen flashes on save",
  resolved: "no",
  severity: "moderate",
});

// Task 6 ------------------------------------------

// var recordRef = firebase.database().ref("issues/change-me");
//
// recordRef.update ({
//    "resolved": "yes"
// });

// Task 7 ------------------------------------------

// var recordRef = firebase.database().ref("issues/delete-me");
//
// recordRef.remove()
//    .catch(function(error) {
//      alert("Delete failed: " + error.message)
//    });
