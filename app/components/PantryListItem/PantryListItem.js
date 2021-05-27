import React from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Right,
  Left,
} from "native-base";

export default function PantryListItem(props) {
  return (
    <ListItem>
      <Left>
        <Text>{props.item}</Text>
      </Left>
      <Right>
        <Text>{props.quantity}</Text>
      </Right>
    </ListItem>
  );
}
