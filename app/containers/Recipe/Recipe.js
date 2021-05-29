import React, { Component, useState } from "react";
import { Image, StyleSheet } from "react-native";

import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Button,
  Title,
  Right,
  ListItem,
  Input,
  Form,
} from "native-base";
import { Link, useHistory } from "react-router-native";
import AppHeader from "../../components/Header/Header";
import App from "../../App";

export default function Recipe() {
  const [recipeNum, setRecipeNum] = useState(null);
  let history = useHistory();
  return (
    <Container style={styles.container}>
      <AppHeader title={"Recipes"} />
      <Form>
        <ListItem>
          <Input
            placeholder="How many recipes?"
            style={{ fontSize: 15 }}
            picker
            keyboardType="numeric"
            value={recipeNum}
            onChangeText={(val) => setRecipeNum(val)}
          />
        </ListItem>
        <ListItem>
          <Left>
            <Text style={{ color: "black", fontSize: 15 }}>Saved Recipes</Text>
          </Left>
          <Right>
            <Button transparent onPress={() => history.push("/recipe/fav")}>
              <Icon name="heart" style={{ color: "green" }} />
            </Button>
          </Right>
        </ListItem>
        <Button
          first
          style={{ backgroundColor: "green", marginTop: 10, marginLeft: "63%" }}
          rounded
          dark
          iconLeft
          onPress={() => history.push("/recipe/search")}
        >
          <Icon name="search" />
          <Text>Search</Text>
        </Button>
      </Form>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
    flex: 1,
  },
});
