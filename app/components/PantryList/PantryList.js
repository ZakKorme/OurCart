import React, { Component, useEffect, useState } from "react";
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
  Spinner,
  Thumbnail,
} from "native-base";
import { FlatList, SafeAreaView } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import { initPantry } from "../../store/actions/pantry";

// const DATA = [
//   {
//     category_id: 1,
//     category: "PRODUCE",
//     items: [
//       {
//         item: "Tomatoes",
//         quantity: 2,
//         img: require("../../assets/721px-Tomato_je.jpeg"),
//       },
//       {
//         item: "Oranges",
//         quantity: 1,
//         img: require("../../assets/oranges.jpeg"),
//       },
//     ],
//   },
//   {
//     category_id: 2,
//     category: "DAIRY",
//     items: [
//       {
//         item: "Milk",
//         quantity: 1,
//         img: require("../../assets/Milk.jpeg"),
//       },
//       {
//         item: "Cheese",
//         quantity: 3,
//         img: require("../../assets/cheese.jpeg"),
//       },
//     ],
//   },
//   {
//     category_id: 3,
//     category: "SPICES",
//     items: [
//       {
//         item: "Salt",
//         quantity: 1,
//         img: require("../../assets/salt.jpeg"),
//       },
//       {
//         item: "Pepper",
//         quantity: 1,
//         img: require("../../assets/pepper.jpeg"),
//       },
//     ],
//   },
// ];

const Title = ({ title, items }) => {
  return (
    <View>
      <ListItem itemHeader>
        <Text>{title}</Text>
      </ListItem>

      {items.map((item, index) => {
        return (
          <ListItem key={`${item.item}_${index}`}>
            <Left>
              <Thumbnail
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                }}
                source={{
                  uri: `${item.img}`,
                }}
              />
              <Text style={{ paddingLeft: 10 }}>{item.item}</Text>
            </Left>

            <Right>
              <Text>{`${item.quantity}`}</Text>
            </Right>
          </ListItem>
        );
      })}
    </View>
  );
};
function PantryList(props) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    props.pantryInit();
    setIsLoading(false);
  }, []);

  const pantry = useSelector((state) => state.pantry.pantry);
  const [pantryItems, setPantryItems] = useState(props.pantry);

  const renderTitle = ({ item }) => {
    return <Title title={item.category} items={item.items} />;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading ? <Spinner color="green" /> : null}
      <FlatList
        data={pantryItems}
        renderItem={renderTitle}
        keyExtractor={(item, index) => `${item.category}_${index}`}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  return {
    pantry: state.pantry.pantry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pantryInit: () => {
      dispatch(initPantry());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PantryList);
