import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import { Container, Root } from "native-base";
import * as firebase from "firebase";
import ApiKeys from "./constants/ApiKeys";
import { NativeRouter, Switch, Route } from "react-router-native";

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

export default function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [isAuthenticationReady, setIsAuthenticationReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
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

  // const navigationRef = React.useRef(null);

  return (
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
