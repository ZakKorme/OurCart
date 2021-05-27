import React, { useState } from "react";
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
  CardItem,
  Item,
  Input,
  View,
} from "native-base";
import {
  StyleSheet,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import GroceryListItem from "../GroceryListItem/GroceryListItem";

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

export default function SwipeList(props) {
  const [listData, setListData] = useState(
    props.data.map((item, index) => ({
      key: `${index}`,
      item: item.item,
      quantity: item.quantity,
    }))
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
      console.log(listData);
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };
  const VisibleItem = (props) => {
    const { data } = props;
    return (
      <View style={styles.rowFront}>
        <TouchableHighlight style={styles.rowFrontVisible}>
          <GroceryListItem
            item={data.item.item}
            quantity={data.item.quantity}
          />
        </TouchableHighlight>
      </View>
    );
  };

  const HiddenItemWithActions = (props) => {
    const { onClose, onDelete } = props;

    return (
      <View style={styles.rowBack}>
        <Text>Left</Text>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={onClose}
        >
          <Icon name="ios-arrow-back" style={{ color: "white" }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={onDelete}
        >
          <Icon name="trash" style={{ color: "white" }} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = (data, rowMap) => {
    return <VisibleItem data={data} />;
  };
  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        onClose={() => closeRow(rowMap, data.item.key)}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        disableRightSwipe={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
    flex: 1,
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    height: 65,
    margin: 5,
    marginBottom: 5,
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    height: 60,
    padding: 6,
    marginBottom: 15,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    margin: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: "flex-end",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
    paddingRight: 17,
  },
  backRightBtnLeft: {
    backgroundColor: "green",
    color: "white",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "#d63c2b",
    color: "white",
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  trash: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#666",
  },
  details: {
    fontSize: 12,
    color: "#999",
  },
});
