import React from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  View,
} from "native-base";
import { Link, useHistory } from "react-router-native";

export default function BottomBanner(props) {
  let history = useHistory();

  return (
    <Footer style={{ backgroundColor: "green" }}>
      <FooterTab>
        <Button vertical onPress={() => history.push("/")}>
          <Icon name="cart" style={{ color: "white" }} />
          <Text style={{ color: "white" }}>List</Text>
        </Button>
      </FooterTab>
      <FooterTab>
        <Button vertical onPress={() => history.push("/pantry")}>
          <Icon name="basket" style={{ color: "white" }} />
          <Text style={{ color: "white" }}>Pantry</Text>
        </Button>
      </FooterTab>
      <FooterTab>
        <Button vertical onPress={() => history.push("/recipe")}>
          <Icon name="book" style={{ color: "white" }} />
          <Text style={{ color: "white" }}>Recipes</Text>
        </Button>
      </FooterTab>
      <FooterTab>
        <Button vertical onPress={() => history.push("/account")}>
          <Icon name="person" style={{ color: "white" }} />
          <Text style={{ color: "white" }}>Account</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}
