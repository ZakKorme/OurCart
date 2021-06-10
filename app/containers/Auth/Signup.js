import React, { useState } from "react";
import {
  Container,
  Text,
  Input,
  List,
  ListItem,
  Icon,
  Button,
} from "native-base";
import AppHeader from "../../components/Header/Header";
import { useHistory } from "react-router";
import * as firebase from "firebase";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/actions/users";

export default function Signup() {
  const dispatch = useDispatch();
  const userAdd = (email, firstName, lastName, phoneNumber) =>
    dispatch(addUser(email, firstName, lastName, phoneNumber));

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [icon, setIcon] = useState("eye");
  const [secureText, setSecureText] = useState(true);

  let history = useHistory();

  const iconSwitch = () => {
    icon === "eye" ? setIcon("eye-off") : setIcon("eye");
  };

  const onSignup = async () => {
    if (password !== passwordConfirm) {
      Alert.alert("Passwords do not match");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        (result) => {
          userAdd(email, firstName, lastName, phoneNumber);
          history.push("/");
          return result.user.updateProfile({
            displayName: `${firstName} ${lastName}`,
          });
        },
        (error) => {
          Alert.alert(error);
        }
      );
  };

  return (
    <Container>
      <AppHeader title="Create Account" />
      <List>
        <ListItem>
          <Input
            placeholder="First Name"
            value={firstName}
            onChangeText={(val) => setFirstName(val)}
          />
        </ListItem>
        <ListItem>
          <Input
            placeholder="Last Name"
            value={lastName}
            onChangeText={(val) => setLastName(val)}
          />
        </ListItem>
        <ListItem>
          <Input
            placeholder="Phone Number"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={(val) => setPhoneNumber(val)}
          />
        </ListItem>
        <ListItem>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(val) => setEmail(val)}
          />
        </ListItem>
        <ListItem>
          <Input
            placeholder="Password"
            secureTextEntry={secureText}
            value={password}
            onChangeText={(val) => setPassword(val)}
          />
        </ListItem>
        <ListItem>
          <Input
            placeholder="Confirm Password"
            secureTextEntry={secureText}
            value={passwordConfirm}
            onChangeText={(val) => setPasswordConfirm(val)}
          />
        </ListItem>
        <Button
          primary
          rounded
          style={{ padding: 5, marginTop: 20, marginLeft: "28%" }}
          onPress={() => onSignup()}
        >
          <Text>Create Account</Text>
        </Button>
        <Button
          rounded
          iconLeft
          style={{ padding: 5, margin: 8, marginLeft: "25.5%" }}
          onPress={() => history.push("/")}
        >
          <Icon name="home" />
          <Text>Back to Login</Text>
        </Button>
      </List>
    </Container>
  );
}
