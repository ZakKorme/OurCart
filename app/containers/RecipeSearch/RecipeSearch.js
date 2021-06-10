import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import {
  Container,
  Text,
  Body,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Icon,
  Button,
  ListItem,
  List,
  Toast,
} from "native-base";

import AppHeader from "../../components/Header/Header";
import { connect } from "react-redux";
import { addRecipe } from "../../store/actions/recipe";

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

function RecipeSearch(props) {
  const [recipeSearchList] = useState(props.recipeSearch);
  const [showToast, setShowToast] = useState(false);

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
          dataSource={recipeSearchList}
          renderItem={(item) => (
            <Card style={{ elevation: 3 }} key={item.key}>
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
                </List>
              </CardItem>
              <CardItem>
                <Button
                  success
                  style={{
                    marginTop: 10,
                    marginLeft: "25%",
                  }}
                  onPress={() => {
                    props.addRecipe(item);
                    Toast.show({
                      text: "Recipe Saved!",
                      buttonText: "Okay",
                      buttonTextStyle: { color: "#008000" },
                      buttonStyle: { backgroundColor: "#5cb85c" },
                    });
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

const mapStateToProps = (state) => {
  return {
    recipeSearch: state.recipe.recipeSearch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRecipe: (recipe) => dispatch(addRecipe(recipe)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSearch);
