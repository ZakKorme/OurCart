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
    recipeName: "Baked Tomatoes",
    name: "One",
    image: { uri: "https://spoonacular.com/recipeImages/633852-312x231.jpg" },
    ingredients: {
      usedIngredients: ["Tomatoes", "Goat Milk", "Parmesan Cheese"],
      missedIngredients: ["Basil"],
    },
  },
  {
    recipeName: "Mini Ham Omelets",
    name: "One",
    image: { uri: "https://spoonacular.com/recipeImages/636769-312x231.jpg" },
    ingredients: {
      usedIngredients: ["Cherry Tomatoes", "Milk", "Parmesan Cheese"],
      missedIngredients: ["Eggs", "Onions", "Bell Peppers", "Prosciutto"],
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
                    <Text>{item.recipeName}</Text>
                    <Text note>Recipe</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: 300, flex: 1 }} source={item.image} />
              </CardItem>
              <CardItem>
                <List>
                  <Text>Used Ingredients: </Text>
                  <ListItem>
                    {item.ingredients.usedIngredients.map(
                      (ingredients, index) => {
                        return (
                          <Text note style={{ paddingRight: 5 }}>
                            {item.ingredients.usedIngredients[index + 1]
                              ? `${ingredients},`
                              : ingredients}
                          </Text>
                        );
                      }
                    )}
                  </ListItem>
                  <Text style={{ paddingTop: 5 }}>Missing Ingredients: </Text>
                  <ListItem>
                    {item.ingredients.missedIngredients.map(
                      (ingredients, index) => {
                        return (
                          <Text note style={{ paddingRight: 5 }}>
                            {item.ingredients.missedIngredients[index + 1]
                              ? `${ingredients},`
                              : ingredients}
                          </Text>
                        );
                      }
                    )}
                  </ListItem>
                  {/* <ListItem>
                    <Text>{item.r}</Text>
                  </ListItem> */}
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
