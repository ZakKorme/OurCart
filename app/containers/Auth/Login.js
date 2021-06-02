import React, { useState } from "react";
import AppHeader from "../../components/Header/Header";
import {
  Container,
  Text,
  Input,
  List,
  ListItem,
  Icon,
  Header,
  Button,
  Spinner,
  View,
} from "native-base";
import * as firebase from "firebase";
import { Alert } from "react-native";
import { useHistory } from "react-router";

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [icon, setIcon] = useState("eye");
  const [secureText, setSecureText] = useState(true);
  const [loading, setLoading] = useState(false);

  let history = useHistory();
  const iconSwitch = () => {
    icon === "eye" ? setIcon("eye-off") : setIcon("eye");
  };

  const onLogin = async () => {
    setLoading(true);
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        () => {
          setLoading(false);
          history.push("/");
        },
        (error) => {
          Alert.alert(error.message);
          setLoading(false);
        }
      );
  };
  const onCreateAccount = () => {
    history.push("/signup");
  };
  return (
    <Container>
      <AppHeader title="Login" />
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
          <Icon
            name={icon}
            onPress={() => {
              setSecureText(!secureText);
              iconSwitch();
            }}
          />
        </ListItem>
        {loading ? (
          <Spinner color="green" />
        ) : (
          <View>
            <Button
              success
              rounded
              style={{ padding: 5, marginTop: 25, marginLeft: "38%" }}
              onPress={() => onLogin()}
            >
              <Text>Login</Text>
            </Button>
            <Button
              primary
              rounded
              style={{ padding: 5, margin: 8, marginLeft: "28%" }}
              onPress={() => onCreateAccount()}
            >
              <Text>Create Account</Text>
            </Button>
          </View>
        )}
      </List>
    </Container>
  );
}
