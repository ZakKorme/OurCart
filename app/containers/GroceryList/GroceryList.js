import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Container, Form, Icon, Fab, Item, Input, Spinner } from "native-base";
import SwipeList from "../../components/SwipeList/SwipeList";
import AppHeader from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { initList, addToList } from "../../store/actions/list";

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

export default function GroceryList({ navigation }) {
  const dispatch = useDispatch();
  const listInit = () => dispatch(initList());
  const listAdd = (item, quantity) => dispatch(addToList(item, quantity));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    listInit();
    setIsLoading(false);
  }, []);
  const list = useSelector((state) => state.list.list);
  const [selectedId, setSelectedId] = useState(null);
  const [fabActive, setFabActive] = useState(false);
  const [inputItem, setInputItem] = useState(null);
  const [inputQuantity, setInputQuantity] = useState(null);
  const [groceryList, setGroceryList] = useState(list);

  return (
    <Container style={styles.container}>
      <AppHeader title="Grocery List" />
      {isLoading ? <Spinner color="green" /> : null}

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
                ? listAdd(inputItem, inputQuantity)
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
