import React, { useState } from "react";
import {
  Container,
  Fab,
  Icon,
  Form,
  Item,
  Label,
  Header,
  Input,
  Picker,
} from "native-base";
import { useHistory } from "react-router-native";
import AppHeader from "../../components/Header/Header";
import { connect } from "react-redux";
import { pantryAdd } from "../../store/actions/pantry";

function PantryEntry(props) {
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [category, setCategory] = useState(null);
  const [barcode, setBarCode] = useState(null);

  let history = useHistory();

  return (
    <Container>
      <AppHeader title={"Pantry Entry"} />
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
            <Picker.Item label="Beverages" value="Beverages" />
            <Picker.Item label="Bread" value="Bread" />
            <Picker.Item label="Canned" value="Canned" />
            <Picker.Item label="Dairy" value="Dairy" />
            <Picker.Item label="Baking Goods" value="Baking Goods" />
            <Picker.Item label="Frozen Foods" value="Frozen Foods" />
            <Picker.Item label="Meat" value="Meat" />
            <Picker.Item label="Produce" value="Produce" />
            <Picker.Item label="Cleaners" value="Cleaners" />
            <Picker.Item label="Paper Goods" value="Paper Goods" />
            <Picker.Item label="Personal Care" value="Personal Care" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </Item>
        <Header />
        <Item inlineLabel last>
          <Label>Item</Label>
          <Input value={item} onChangeText={(val) => setItem(val)} />
        </Item>
        <Item inlineLabel last>
          <Label>Quantity</Label>
          <Input onChangeText={(val) => setQuantity(val)} value={quantity} />
        </Item>
        <Item inlineLabel last>
          <Label>Barcode</Label>
          <Input onChangeText={(val) => setBarCode(val)} value={barcode} />
        </Item>
      </Form>

      <Fab
        active={true}
        direction="up"
        style={{ backgroundColor: "green" }}
        position="bottomRight"
        onPress={async () => {
          await props.addPantry(item, quantity, category, barcode).then(() => {
            history.push("/pantry");
          });
        }}
      >
        <Icon name="add"></Icon>
      </Fab>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPantry: (item, quantity, category, code) =>
      dispatch(pantryAdd(item, quantity, category, code)),
  };
};

export default connect(null, mapDispatchToProps)(PantryEntry);
