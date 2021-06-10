import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Text,
  Left,
  Icon,
  Button,
  Right,
  ListItem,
  Input,
  Form,
  Spinner,
} from "native-base";
import AppHeader from "../../components/Header/Header";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { savedRecipes, recipeSearchInit } from "../../store/actions/recipe";

function Recipe(props) {
  const [recipeNum, setRecipeNum] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
            <Button
              transparent
              onPress={async () => {
                setIsLoading(!isLoading);
                await props.recipeFav();
                setTimeout(() => {
                  setIsLoading(!isLoading);
                  history.push("/recipe/fav");
                }, 1000);
              }}
            >
              <Icon name="heart" style={{ color: "green" }} />
            </Button>
          </Right>
        </ListItem>
        {!isLoading ? (
          <Button
            first
            style={{
              backgroundColor: "green",
              marginTop: 10,
              marginLeft: "63%",
            }}
            rounded
            dark
            iconLeft
            onPress={async () => {
              setIsLoading(!isLoading);
              await props.recipeSearchInit(recipeNum, props.ingredients);
              setTimeout(() => {
                setIsLoading(!isLoading);
                history.push("/recipe/search");
              }, 1000);
            }}
          >
            <Icon name="search" />
            <Text>Search</Text>
          </Button>
        ) : (
          <Spinner color="green" />
        )}
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
const mapStateToProps = (state) => {
  return {
    ingredients: state.pantry.pantry,
    recipeSearch: state.recipe.recipeSearch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    recipeFav: () => dispatch(savedRecipes()),
    recipeSearchInit: (numRecipes, ingredients) =>
      dispatch(recipeSearchInit(numRecipes, ingredients)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
