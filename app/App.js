import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  SwipeRow,
  Root,
} from "native-base";
import {
  NativeRouter,
  Route,
  Link,
  Switch,
  useLocation,
} from "react-router-native";

import GroceryList from "./containers/GroceryList/GroceryList";
import Account from "./containers/Account/Account.js";
import Pantry from "./containers/Pantry/Pantry.js";
import Recipe from "./containers/Recipe/Recipe.js";
import Footer from "./components/Footer/Footer";
import PantryEntry from "./containers/PantryEntry/PantryEntry";
import RecipeFav from "./containers/RecipeFav/RecipeFav";

export default function App() {
  return (
    <Root>
      <NativeRouter>
        <Container style={styles}>
          <Switch>
            <Route exact path="/" component={GroceryList} />
            <Route exact path="/pantry/entry" component={PantryEntry} />
            <Route exact path="/recipe/fav" component={RecipeFav} />
            <Route path="/pantry" component={Pantry} />
            <Route path="/recipe" component={Recipe} />
            <Route path="/account" component={Account} />
          </Switch>
          <Footer />
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
