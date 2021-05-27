import React, { Component, useState } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Right,
  Left,
  View,
  Thumbnail,
} from "native-base";
import { FlatList, SafeAreaView } from "react-native";

const DATA = [
  {
    category_id: 1,
    category: "PRODUCE",
    items: [
      {
        item: "Tomatoes",
        quantity: 2,
      },
      {
        item: "Oranges",
        quantity: 1,
      },
    ],
  },
  {
    category_id: 2,
    category: "DAIRY",
    items: [
      {
        item: "Milk",
        quantity: 1,
      },
      {
        item: "Cheese",
        quantity: 3,
      },
    ],
  },
  {
    category_id: 3,
    category: "SPICES",
    items: [
      {
        item: "Salt",
        quantity: 1,
      },
      {
        item: "Pepper",
        quantity: 1,
      },
    ],
  },
];

const Title = ({ title, items }) => {
  return (
    <View>
      <ListItem itemHeader>
        <Text>{title}</Text>
      </ListItem>

      {items.map((item) => {
        return (
          <ListItem>
            <Left>
              <Thumbnail
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                }}
                source={require("../../assets/721px-Tomato_je.jpeg")}
              />
              <Text style={{ paddingLeft: 10 }}>{item.item}</Text>
            </Left>

            <Right>
              <Text>{item.quantity}</Text>
            </Right>
          </ListItem>
        );
      })}
    </View>
  );
};
export default function PantryList() {
  const [pantryItems, setPantryItems] = useState(DATA);

  const renderTitle = ({ item }) => {
    return <Title title={item.category} items={item.items} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderTitle}
        keyExtractor={(item) => item.category_id}
      />
    </SafeAreaView>
  );
}
