import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Accordion,
  Text,
  View,
  Icon,
  Fab,
  ListItem,
} from "native-base";
import { useHistory } from "react-router-native";
import { connect } from "react-redux";

import AppHeader from "../../components/Header/Header";

const dataArray = [
  {
    recipeName: "Baked Tomatoes",
    ingredients: {
      usedIngredients: ["Tomatoes", "Goat Milk", "Parmesan Cheese"],
      missedIngredients: ["Basil"],
    },
  },
  {
    recipeName: "Mini Ham Omelets",
    ingredients: {
      usedIngredients: ["Tomatoes", "Goat Milk", "Parmesan Cheese"],
      missedIngredients: ["Basil"],
    },
  },
];

function RecipeFav(props) {
  let history = useHistory();

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
        <Text style={{ fontWeight: "600" }}> {item.recipeName}</Text>
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
        <ListItem style={{ flexDirection: "row" }}>
          <Text style={{ paddingRight: 5 }}>Used Ingredients:</Text>
          {item.ingredients.usedIngredients.map((ingredients, index) => {
            return (
              <View style={{ flexShrink: 1 }}>
                <Text note>
                  {item.ingredients.usedIngredients[index + 1]
                    ? `${ingredients},`
                    : ingredients}
                </Text>
              </View>
            );
          })}
        </ListItem>
        <ListItem style={{ lexShrink: 1 }}>
          <Text style={{ paddingRight: 5 }}>Missing Ingredients:</Text>
          {item.ingredients.missedIngredients.map((ingredients, index) => {
            return (
              <Text note>
                {item.ingredients.missedIngredients[index + 1]
                  ? `${ingredients},`
                  : ingredients}
              </Text>
            );
          })}
        </ListItem>
      </Text>
    );
  };

  return (
    <Container>
      <AppHeader title={"Favorites"} />
      <Content padder>
        <Accordion
          dataArray={props.recipeList}
          animation={true}
          expanded={[]}
          icon="add"
          expandedIcon="remove"
          renderHeader={_renderHeader}
          renderContent={_renderContent}
        />
      </Content>

      <Fab
        active={true}
        direction="up"
        style={{ backgroundColor: "green" }}
        position="bottomRight"
        onPress={() => {
          history.push("/recipe");
        }}
      >
        <Icon name="book" />
      </Fab>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    recipeList: state.recipe.recipe,
  };
};

export default connect(mapStateToProps)(RecipeFav);
