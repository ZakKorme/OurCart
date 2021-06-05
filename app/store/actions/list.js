import * as actionTypes from "./actionTypes";
import * as firebase from "firebase";

export const initList = () => {
  let newList = null;
  let updatedList = [];
  firebase
    .database()
    .ref("List")
    .on("value", (snap) => {
      newList = Object.values(snap.val());
    });
  console.log(newList);
  newList
    ? newList.forEach((element) => {
        for (let i in element) {
          let key = Object.keys(element[i])[0];
          let pair = {
            item: `${key}`,
            quantity: Object.values(element[i])[0],
          };
          updatedList.push(pair);
        }
      })
    : null;

  if (newList) {
    return successInitList(updatedList);
  } else {
    return failureInitList("Error: database did not load");
  }
};

export const successInitList = (list) => {
  return {
    type: actionTypes.LIST_SUCCESS,
    list: list,
  };
};

export const failureInitList = (error) => {
  return {
    type: actionTypes.LIST_FAILURE,
    error: error,
  };
};

export const addToList = (item, quantity) => {
  let newItem = {
    [`${item}`]: quantity,
  };
  //Save New Item
  firebase.database().ref("List/List_1").push(newItem);
  //Reinitialze DB
  return initList();
};

export const successAddToList = () => {
  return {
    type: actionTypes.LIST_ADD_SUCCESS,
  };
};

export const failureAddToList = () => {
  return {
    type: actionTypes.LIST_ADD_FAILURE,
  };
};

export const removeItemFromList = (item) => {
  let path = "List/List_1/";

  firebase
    .database()
    .ref("List/List_1")
    .on("value", (snap) => {
      for (let i of Object.keys(snap.val())) {
        if (Object.keys(snap.val()[i]) == item) {
          path += i.toString();
        }
      }
    });

  if (path !== "List/List_1/") {
    firebase.database().ref(path).remove().then().catch();
    initList();
  } else {
    console.warn("Couldn't find item");
  }

  return {
    type: actionTypes.LIST_REMOVE_SUCCESS,
  };
};
