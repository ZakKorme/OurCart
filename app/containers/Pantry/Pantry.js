import React, { useState } from "react";

import { StyleSheet } from "react-native";
import { Container, Fab, Icon } from "native-base";
import { useHistory } from "react-router";

import PantryList from "../../components/PantryList/PantryList";
import AppHeader from "../../components/Header/Header";

export default function Pantry({ navigation }) {
  const [fabActive, setFabActive] = useState(false);

  let history = useHistory();

  return (
    <Container style={styles.container}>
      <AppHeader title={"Pantry"} />
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
