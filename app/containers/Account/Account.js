import React from "react";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as firebase from "firebase";
import { useHistory } from "react-router";
import { connect } from "react-redux";

let formatPhoneNumber = (str) => {
  //Filter only numbers from the input
  let cleaned = ("" + str).replace(/\D/g, "");

  //Check if the input is of correct length
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }

  return null;
};

function Account(props) {
  let history = useHistory();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={require("../../assets/user.png")}
            size={80}
            style={{
              backgroundColor: "white",
            }}
          />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              {firebase.auth().currentUser.displayName}
            </Title>
            <Caption style={styles.caption}>
              user_id:{" "}
              {firebase.auth().currentUser.displayName.split(" ").join("_")}
            </Caption>
          </View>
        </View>
        <View
          style={[
            styles.userInfoSection,
            {
              marginTop: 20,
            },
          ]}
        >
          <View style={styles.row}>
            <Icon name="phone" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              {`+1 ${formatPhoneNumber(props.phoneNumber)}`}
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              {firebase.auth().currentUser.email}
            </Text>
          </View>
        </View>
        <View style={styles.infoBoxWrapper}>
          <View
            style={[
              styles.infoBox,
              {
                borderRightColor: "#dddddd",
                borderRightWidth: 1,
              },
            ]}
          >
            <Title>{`${props.numOfRecipes}`}</Title>
            <Caption>Saved Recipes</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>10</Title>
            <Caption>Grocery Entries</Caption>
          </View>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="heart-outline" color="green" size={25} />
              <Text style={styles.menuItemText}>Favorite Recipes</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="cart-outline" color="green" size={25} />
              <Text style={styles.menuItemText}>Grocery Items</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="magnify-scan" color="green" size={25} />
              <Text style={styles.menuItemText}>Remove Pantry Item</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple
            onPress={() => {
              firebase.auth().signOut();
              history.push("/");
            }}
          >
            <View style={styles.menuItem}>
              <Icon name="logout" color="green" size={25} />
              <Text style={styles.menuItemText}>Logout</Text>
            </View>
          </TouchableRipple>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});

const mapStateToProps = (state) => {
  return {
    numOfRecipes: state.user.numOfRecipes,
    phoneNumber: state.user.phoneNumber,
    firstName: state.user.firstName,
  };
};

export default connect(mapStateToProps)(Account);
