import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Animated,
  TouchableHighlight,
} from "react-native";
import {
  Container,
  ListItem,
  Text,
  Body,
  CheckBox,
  Label,
  Form,
  List,
  Left,
  Right,
  Icon,
  Fab,
  Button,
  Card,
  Header,
  Title,
  CardItem,
  Item,
  Input,
  View,
} from "native-base";

import GroceryListItem from "../../components/GroceryListItem/GroceryListItem";
import SwipeList from "../../components/SwipeList/SwipeList";
import AppHeader from "../../components/Header/Header";

const DATA = [
  {
    id: 1,
    item: "Bread",
    quantity: "2",
  },
  {
    id: 2,
    item: "Nutmeg",
    quantity: "5",
  },
  {
    id: 3,
    item: "Chocolate",
    quantity: "1",
  },
];

export default function GroceryList() {
  const [selectedId, setSelectedId] = useState(null);
  const [fabActive, setFabActive] = useState(false);
  const [inputItem, setInputItem] = useState(null);
  const [inputQuantity, setInputQuantity] = useState(null);
  const [groceryList, setGroceryList] = useState(DATA);

  return (
    <Container style={styles.container}>
      <AppHeader title={"Grocery List"} />
      <SwipeList data={groceryList} />
      {fabActive ? (
        <Form style={{ paddingBottom: "1%" }}>
          <Item style={{ width: "70%" }}>
            <Input
              placeholder="Item"
              onChangeText={(val) => setInputItem(val)}
            />
          </Item>
          <Item style={{ width: "70%" }}>
            <Input
              placeholder="Quantity"
              onChangeText={(val) => setInputQuantity(val)}
            />
          </Item>
        </Form>
      ) : null}
      <Fab
        active={fabActive}
        direction="up"
        style={{ backgroundColor: "green" }}
        position="bottomRight"
        onPress={() => setFabActive(!fabActive)}
      >
        {fabActive ? (
          <Icon
            name="add"
            onPress={() => {
              inputItem && inputQuantity
                ? setGroceryList([
                    ...groceryList,
                    {
                      id: groceryList.length + 1,
                      item: inputItem,
                      quantity: inputQuantity,
                    },
                  ])
                : null;
              setInputItem(null);
              setFabActive(!fabActive);
            }}
          />
        ) : (
          <Icon name="cart" />
        )}
      </Fab>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
    flex: 1,
  },
});
