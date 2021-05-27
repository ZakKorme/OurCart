import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  Text,
  View,
  Container,
  Card,
  CardItem,
  Fab,
  Icon,
  Content,
} from "native-base";
import { Link, useHistory } from "react-router-native";

import PantryList from "../../components/PantryList/PantryList";

export default function Pantry() {
  const [fabActive, setFabActive] = useState(false);

  let history = useHistory();

  return (
    <Container style={styles.container}>
      <Card>
        <CardItem header>
          <Text>Pantry</Text>
        </CardItem>
      </Card>
      <PantryList />
      <Fab
        active={fabActive}
        direction="up"
        style={{ backgroundColor: "green" }}
        position="bottomRight"
        onPress={() => {
          history.push("/pantry/entry");
        }}
      >
        <Icon name="basket"></Icon>
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
