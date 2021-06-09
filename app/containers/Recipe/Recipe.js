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
} from "native-base";
import AppHeader from "../../components/Header/Header";
import { useHistory } from "react-router";
import { connect, useDispatch } from "react-redux";
import { savedRecipes } from "../../store/actions/recipe";

function Recipe(props) {
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
            <Button
              transparent
              onPress={() => {
                props.recipeFav();
                history.push("/recipe/fav");
              }}
            >
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

const mapDispatchToProps = (dispatch) => {
  return {
    recipeFav: () => dispatch(savedRecipes()),
  };
};

export default connect(null, mapDispatchToProps)(Recipe);
