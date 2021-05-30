import React, { useState } from "react";
import {
  Container,
  ListItem,
  Text,
  Body,
  CheckBox,
  Left,
  Right,
} from "native-base";

export default function GroceryListItem(props) {
  const [selectedCheck, setSelectedCheck] = useState(false);
  return (
    <ListItem icon style={{ textDecoration: "none" }}>
      <Left>
        <CheckBox
          checked={selectedCheck}
          style={{ paddingRight: "10%" }}
          onPress={() => setSelectedCheck(!selectedCheck)}
          color="green"
        />
      </Left>
      <Body style={{ borderColor: "white" }}>
        <Text>{props.item}</Text>
      </Body>
      <Right style={{ borderColor: "white" }}>
        <Text>{props.quantity}</Text>
      </Right>
    </ListItem>
  );
}
