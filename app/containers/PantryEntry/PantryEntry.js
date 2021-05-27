import React, { useState } from "react";
import {
  Container,
  Text,
  Fab,
  Icon,
  Content,
  Form,
  Item,
  Label,
  Header,
  Input,
  Picker,
} from "native-base";
import { Link, useHistory } from "react-router-native";

export default function PantryEntry() {
  const [category, setCategory] = useState(null);

  let history = useHistory();

  return (
    <Container>
      <Form>
        <Item picker success={category ? true : false}>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: 375 }}
            placeholder="Category"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            selectedValue={category}
            onValueChange={(value) => setCategory(value)}
          >
            <Picker.Item label="Beverages" value="key0" />
            <Picker.Item label="Bread" value="key1" />
            <Picker.Item label="Canned" value="key2" />
            <Picker.Item label="Diary" value="key3" />
            <Picker.Item label="Baking Goods" value="key4" />
            <Picker.Item label="Frozen Foods" value="key5" />
            <Picker.Item label="Meat" value="key6" />
            <Picker.Item label="Produce" value="key7" />
            <Picker.Item label="Cleaners" value="key8" />
            <Picker.Item label="Paper Goods" value="key9" />
            <Picker.Item label="Personal Care" value="key10" />
            <Picker.Item label="Other" value="key11" />
          </Picker>
        </Item>
        <Header />
        <Item inlineLabel last>
          <Label>Item</Label>
          <Input />
        </Item>
        <Item inlineLabel last>
          <Label>Quantity</Label>
          <Input />
        </Item>
        <Item inlineLabel last>
          <Label>Barcode</Label>
          <Input />
        </Item>
      </Form>

      <Fab
        active={true}
        direction="up"
        style={{ backgroundColor: "green" }}
        position="bottomRight"
        onPress={() => {
          history.push("/pantry");
        }}
      >
        <Icon name="add"></Icon>
      </Fab>
    </Container>
  );
}
