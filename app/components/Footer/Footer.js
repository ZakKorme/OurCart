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
} from "native-base";

export default function BottomBanner() {
  return (
    <Footer style={{ backgroundColor: "green" }}>
      <FooterTab>
        <Button vertical>
          <Icon name="cart" style={{ color: "white" }} />
          <Text style={{ color: "white" }}>List</Text>
        </Button>
      </FooterTab>
      <FooterTab>
        <Button vertical>
          <Icon name="basket" style={{ color: "white" }} />
          <Text style={{ color: "white" }}>Pantry</Text>
        </Button>
      </FooterTab>
      <FooterTab>
        <Button vertical>
          <Icon name="book" style={{ color: "white" }} />
          <Text style={{ color: "white" }}>Recipes</Text>
        </Button>
      </FooterTab>
      <FooterTab>
        <Button vertical>
          <Icon name="person" style={{ color: "white" }} />
          <Text style={{ color: "white" }}>Account</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}
