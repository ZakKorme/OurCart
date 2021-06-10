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

export const recipeSearchInit = (numRecipes, ingredients) => {
  let urlIngredients = "";
  let recipeSearch = [];
  for (let i in ingredients) {
    ingredients[i].items.map((item, index) => {
      if (index == 0) {
        urlIngredients += `${item.item},`;
      } else if (index + 1 === NaN) {
        urlIngredients += `+${item.item}`;
      }
      urlIngredients += `+${item.item},`;
    });
  }

  return async (dispatch) => {
    let url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=122897b7d5044ef3853892f265520c5b&ingredients=${urlIngredients
      .split(" ")
      .join("")}&number=${numRecipes ? numRecipes : 10}`;

    try {
      let res = await fetch(url);
      let body = await res.json();
      let index = 0;

      for (let i of body) {
        recipeSearch.push({
          key: index,
          recipeName: i.title,
          image: { uri: i.image },
          ingredients: {
            usedIngredients: i.usedIngredients.map((item) => item.name),
            missedIngredients: i.missedIngredients.map((item) => item.name),
          },
        });
        ++index;
      }
    } catch (err) {
      console.log(err);
    }
    dispatch(searchSuccess(recipeSearch));
  };
};

export const searchSuccess = (recipeList) => {
  return {
    type: actionTypes.RECIPE_SEARCH_SUCCESS,
    recipeSearch: recipeList,
  };
};
