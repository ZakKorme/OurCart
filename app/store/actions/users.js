import * as actionTypes from "./actionTypes";
import * as firebase from "firebase";

export const getUser = () => {
  let currentUserEmail = firebase.auth().currentUser.email;
  let usersObj = [];
  let userEntries = [];
  let userEntryId = "";

  firebase
    .database()
    .ref("Users")
    .on("value", (snap) => {
      usersObj = snap.val();
      userEntries = Object.keys(snap.val());
    });

  for (let i in usersObj) {
    if (currentUserEmail == usersObj[i].Email.toLowerCase()) {
      userEntryId = i.toString();
    }
  }

  let dbEntryPath = "Users/" + userEntryId + "/Recipes";
  let userEntryPath = "Users/" + userEntryId;
  let numOfRecipes = 0;
  let firstName = "";
  let lastName = "";
  let phoneNumber = "";

  firebase
    .database()
    .ref(userEntryPath)
    .on("value", (snap) => {
      firstName = snap.val()["First Name"];
      lastName = snap.val()["Last Name"];
      phoneNumber = snap.val()["Phone Number"];
    });

  firebase
    .database()
    .ref(dbEntryPath)
    .on("value", (snap) => {
      if (snap.val()) {
        numOfRecipes = Object.values(snap.val()).length;
      }
    });

  return {
    type: actionTypes.USER_GET_SUCCESS,
    numOfRecipes: numOfRecipes,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
  };
};

export const addUser = (email, firstName, lastName, phoneNumber) => {
  let data = {
    Email: email,
    "First Name": firstName,
    "Last Name": lastName,
    "Phone Number": phoneNumber,
  };

  firebase.database().ref("Users").push(data);

  return {
    type: actionTypes.USER_ADD_SUCCESS,
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
  };
};
