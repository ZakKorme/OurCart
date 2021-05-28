import React from "react";
import { Header, Left, Body, Title, Right } from "native-base";
import { ProgressViewIOSComponent } from "react-native";

export default function AppHeader(props) {
  return (
    <Header>
      <Left />
      <Body>
        <Title>{props.title}</Title>
      </Body>
      <Right />
    </Header>
  );
}
