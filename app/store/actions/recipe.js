import * as actionTypes from "./actionTypes";
import * as firebase from "firebase";

export const savedRecipes = () => {
  let currentUserEmail = firebase.auth().currentUser.email;
  let currentUserRecipes = [];
  let usersRecipes = null;

  firebase
    .database()
    .ref("Users")
    .on("value", (snap) => {
      usersRecipes = Object.values(snap.val());
    });

  for (let i in usersRecipes) {
    if (currentUserEmail === usersRecipes[i].Email) {
      currentUserRecipes = Object.values(usersRecipes[i].Recipes);
      break;
    }
  }
  return {
    type: actionTypes.RECIPE_FAV_SUCCESS,
    recipe: currentUserRecipes,
  };
};
