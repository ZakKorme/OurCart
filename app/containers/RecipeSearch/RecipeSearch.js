import React, { Component, useState } from "react";
import { Image } from "react-native";
import {
  Container,
  Content,
  Text,
  Body,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Right,
  Icon,
  Button,
  Header,
  Accordion,
  ListItem,
  List,
} from "native-base";

import AppHeader from "../../components/Header/Header";

const cards = [
  {
    text: "Card One",
    name: "One",
    image: require("../../assets/721px-Tomato_je.jpeg"),
    recipe: {
      title: "recipe 1",
      content: "Lorem ipsum dolor sit amet",
    },
  },
  {
    text: "Card Two",
    name: "Two",
    image: require("../../assets/721px-Tomato_je.jpeg"),
    recipe: {
      title: "recipe 2",
      content: "Lorem ipsum dolor sit amet",
    },
  },
  {
    text: "Card Three",
    name: "Three",
    image: require("../../assets/721px-Tomato_je.jpeg"),
    recipe: {
      title: "recipe 3",
      content: "Lorem ipsum dolor sit amet",
    },
  },
];

export default function RecipeSearch() {
  const _renderHeader = (item, expanded) => {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontWeight: "600" }}> Recipe Instructions</Text>
        {expanded ? (
          <Icon style={{ fontSize: 18 }} name="remove-circle" />
        ) : (
          <Icon style={{ fontSize: 18 }} name="add-circle" />
        )}
      </View>
    );
  };
  const _renderContent = (item) => {
    return (
      <Text
        style={{
          backgroundColor: "#e4f7e4",
          padding: 10,
          fontStyle: "italic",
        }}
      >
        {item.content}
      </Text>
    );
  };

  return (
    <Container>
      <AppHeader title={"Search"} />
      <View>
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
                <List>
                  <ListItem>
                    <Text>{item.recipe.title}</Text>
                  </ListItem>
                </List>
              </CardItem>
              <CardItem>
                <Button
                  success
                  style={{
                    marginTop: 10,
                    marginLeft: "25%",
                  }}
                >
                  <Icon name="heart" style={{ color: "white" }} />
                  <Text>Save Recipe</Text>
                </Button>
              </CardItem>
            </Card>
          )}
        />
      </View>
    </Container>
  );
}
