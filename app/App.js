import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Header, Left, Right, Body, Title } from "native-base";

import GroceryList from "./containers/GroceryList/GroceryList";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <Container style={styles}>
      <Header>
        <Left />
        <Body>
          <Title>OurCart</Title>
        </Body>
        <Right />
      </Header>
      <GroceryList />
      <Footer />
    </Container>
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
