import React, { useEffect, useState } from "react";
import { StyleSheet, LogBox } from "react-native";
import { Container, Root } from "native-base";
import * as firebase from "firebase";
import ApiKeys from "./constants/ApiKeys";
import { NativeRouter, Switch, Route } from "react-router-native";
import { Provider, useDispatch } from "react-redux";
import configureStore from "./store/store";
import { getUser } from "./store/actions/users";

import GroceryList from "./containers/GroceryList/GroceryList";
import Account from "./containers/Account/Account.js";
import Pantry from "./containers/Pantry/Pantry.js";
import Recipe from "./containers/Recipe/Recipe.js";
import Footer from "./components/Footer/Footer";
import PantryEntry from "./containers/PantryEntry/PantryEntry";
import RecipeFav from "./containers/RecipeFav/RecipeFav";
import RecipeSearch from "./containers/RecipeSearch/RecipeSearch";
import Login from "./containers/Auth/Login";
import Signup from "./containers/Auth/Signup";

const store = configureStore();

LogBox.ignoreLogs([
  "VirtualizedLists should never be nested", // TODO: Remove when fixed
  "Remote debugger is in a background tab which may cause apps to perform slowly",
]);

export default function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [isAuthenticationReady, setIsAuthenticationReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }

    // listInit();

    firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return () => {
      setIsAuthenticated(false);
      setIsAuthenticationReady(false);
    };
  }, []);

  const onAuthStateChanged = (user) => {
    setIsAuthenticationReady(true);
    setIsAuthenticated(!!user);

    return;
  };

  return (
    <Provider store={store}>
      <Root>
        <NativeRouter>
          <Container style={styles}>
            {!isAuthenticated ? (
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup} />
              </Switch>
            ) : (
              <Switch>
                <Route exact path="/" component={GroceryList} />
                <Route exact path="/pantry/entry" component={PantryEntry} />
                <Route exact path="/recipe/fav" component={RecipeFav} />
                <Route exact path="/recipe/search" component={RecipeSearch} />
                <Route path="/pantry" component={Pantry} />
                <Route path="/recipe" component={Recipe} />
                <Route path="/account" component={Account} />
              </Switch>
            )}
            {isAuthenticated ? <Footer /> : null}
          </Container>
        </NativeRouter>
      </Root>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
