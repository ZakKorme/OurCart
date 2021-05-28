import React, { Component } from "react";
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
const cards = [
  {
    text: "Card One",
    name: "One",
    image: require("../../assets/721px-Tomato_je.jpeg"),
  },
  {
    text: "Card Two",
    name: "Two",
    image: require("../../assets/721px-Tomato_je.jpeg"),
  },
  {
    text: "Card Three",
    name: "Three",
    image: require("../../assets/721px-Tomato_je.jpeg"),
  },
];

export default function Recipe() {
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
        >
          <Icon name="search" />
          <Text>Search</Text>
        </Button>
      </Form>

      {/* <Header /> */}
      {/* <View>
        <DeckSwiper
          dataSource={cards}
          renderItem={(item) => (
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={item.image} />
                  <Body>
                    <Text>{item.text}</Text>
                    <Text note>Recipe</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: 300, flex: 1 }} source={item.image} />
              </CardItem>
              <CardItem>
                <Icon name="heart" style={{ color: "#ED4A6A" }} />
                <Text>{item.name}</Text>
              </CardItem>
            </Card>
          )}
        />
      </View> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
    flex: 1,
  },
});
