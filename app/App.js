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
} from "native-base";
import { NativeRouter, Route, Link, Switch } from "react-router-native";

import GroceryList from "./containers/GroceryList/GroceryList";
import Account from "./containers/Account/Account.js";
import Pantry from "./containers/Pantry/Pantry.js";
import Recipe from "./containers/Recipe/Recipe.js";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <NativeRouter>
      <Container style={styles}>
        <Header>
          <Left />
          <Body>
            <Title>OurCart</Title>
          </Body>
          <Right />
        </Header>
        <Switch>
          <Route exact path="/" component={GroceryList} />
          <Route path="/pantry" component={Pantry} />
          <Route path="/recipe" component={Recipe} />
          <Route path="/account" component={Account} />
        </Switch>
        <Footer />
      </Container>
    </NativeRouter>
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
