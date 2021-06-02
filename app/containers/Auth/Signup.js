import React, { useState } from "react";
import {
  Container,
  Text,
  Input,
  List,
  ListItem,
  Icon,
  Header,
  Button,
} from "native-base";
import AppHeader from "../../components/Header/Header";
import { useHistory } from "react-router";
import * as firebase from "firebase";
import { Alert } from "react-native";

export default function Signup() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [icon, setIcon] = useState("eye");
  const [secureText, setSecureText] = useState(true);

  let history = useHistory();

  const iconSwitch = () => {
    icon === "eye" ? setIcon("eye-off") : setIcon("eye");
  };

  const onSignup = () => {
    if (password !== passwordConfirm) {
      Alert.alert("Passwords do not match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        () => {
          history.push("/");
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
