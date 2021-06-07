import * as actionTypes from "./actionTypes";
import * as firebase from "firebase";

const pantryIndex = {
  Beverages: 0,
  Bread: 1,
  Canned: 2,
  Diary: 3,
  "Baking Goods": 4,
  "Frozen Foods": 5,
  Meat: 6,
  Produce: 7,
  Cleaners: 8,
  "Paper Goods": 9,
  "Personal Care": 10,
  Other: 11,
};

export const initPantry = () => {
  newPantry = [];
  for (let i in pantryIndex) {
    firebase
      .database()
      .ref("Pantry/" + i)
      .on("value", (snap) => {
        newPantry.push({
          category_id: pantryIndex[i],
          category: i.toUpperCase(),
          items: Object.values(snap.val()),
        });
      });
  }
  return {
    type: actionTypes.PANTRY_INIT_SUCCESS,
    pantry: newPantry,
  };
};

export const initPantrySuccess = (pantry) => {
  return {
    type: actionTypes.PANTRY_INIT_SUCCESS,
    data: pantry,
  };
};

export const pantryAdd = (item, quantity, category, code) => {
  img = null;
  firebase
    .database()
    .ref("Pantry/" + category)
    .push({
      item: item,
      quantity: quantity,
      image: img,
      barcode: code,
    });

  return {
    type: actionTypes.PANTRY_ADD_SUCCESS,
  };
};
