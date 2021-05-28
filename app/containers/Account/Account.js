import React from "react";
import { Text, View, Container } from "native-base";
import AppHeader from "../../components/Header/Header";

export default function Account() {
  return (
    <Container>
      <AppHeader title={"Account"} />
      <Text>Account</Text>
    </Container>
  );
}
