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
} from "native-base";
import { useHistory } from "react-router-native";

import AppHeader from "../../components/Header/Header";

const dataArray = [
  { title: "Recipe One", content: "Lorem ipsum dolor sit amet" },
  { title: "Recipe Two", content: "Lorem ipsum dolor sit amet" },
  { title: "Recipe Three", content: "Lorem ipsum dolor sit amet" },
];

export default function RecipeFav() {
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
        <Text style={{ fontWeight: "600" }}> {item.title}</Text>
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
      <AppHeader title={"Favorites"} />
      <Content padder>
        <Accordion
          dataArray={dataArray}
          animation={true}
          expanded={[]}
          // renderHeader={renderHeader}
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
