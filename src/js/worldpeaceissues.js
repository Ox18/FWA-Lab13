// JavaScript file for the web page "World Peace Issue Tracker"
// Created by Harrison Kong
// Copyright (C) Coursera 2020

// Your web app's Firebase configuration
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Paste the web app's configuration above this line
// Our code starts below

const rootRef = firebase.database().ref("issues/");

// Task 4 ------------------------------------------

rootRef.on(
  "value",

  (snapshot) => {
    const listTableBody = document.getElementById("list-table-body");

    // clear all the table rows first
    listTableBody.textContent = "";

    snapshot.forEach((child) => {
      issue = child.val();
      console.log(issue);
      var row = document.createElement("tr");

      listTableBody.append(row);

      let tdSeverity = document.createElement("td");
      tdSeverity.innerHTML = issue.severity;

      let tdDescription = document.createElement("td");
      tdDescription.innerHTML = issue.description;

      let selectResolved = document.createElement("select");

      let optionYes = document.createElement("option");
      let optionNo = document.createElement("option");

      optionYes.value = "yes";
      optionYes.textContent = "yes";
      // check if is equals to issue.resolved and put selected
      if (issue.resolved == "yes") {
        optionYes.selected = true;
      }

      optionNo.value = "no";
      optionNo.textContent = "no";
      // check if is equals to issue.resolved and put selected
      if (issue.resolved == "no") {
        optionNo.selected = true;
      }

      selectResolved.append(optionYes);
      selectResolved.append(optionNo);

      // make td to button
      let tdButton = document.createElement("td");

      // make button delete
      let buttonDelete = document.createElement("button");
      buttonDelete.innerHTML = "Delete";
      buttonDelete.onclick = function () {
        deleteIssue(child.key);
      };
      tdButton.append(buttonDelete);

      row.append(tdSeverity);
      row.append(tdDescription);
      row.append(selectResolved);
      row.append(tdButton);

      // add listener on change and get the value in select
      selectResolved.addEventListener("change", (event) => {
        updateIssue(child.key, event.target.value);
      });

      listTableBody.append(row);
    });
  },

  (error) => {
    console.log("Error: " + error.code);
  }
);

function addNewIssue() {
  const severity = document.getElementById("severity-dropdown").value;
  const description = document.getElementById("description-textfield").value;
  const resolved = document.getElementById("resolved-dropdown").value;

  if (description.length == 0) {
    alert("Description cannot be blank!");
    return;
  }

  rootRef.push({
    description,
    severity,
    resolved,
  });

  // Add code to insert into firebase here

  document.getElementById("description-textfield").value = "";
}

// Task 6 ------------------------------------------

function updateIssue(issueKey, newResolvedValue) {
  const rootRef = firebase.database().ref("issues/");

  rootRef.child(issueKey).update({
    resolved: newResolvedValue,
  });
}

// Task 7 ------------------------------------------

function deleteIssue(issueKey) {
  if (confirm("Are you sure?")) {
    const rootRef = firebase.database().ref("issues/");

    rootRef.child(issueKey).remove();
  }
}

// Utility function to encode special HTML characters so that the
// web browser does not treat them as HTML tags
// but as literal characters

function encodeHtml(str) {
  str = str.replace(/&/g, "&amp;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/ /g, "&nbsp;");
  return str;
}
