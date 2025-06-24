import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { signOut } from "firebase/auth";

import { auth } from "../config";

export const HomeScreen = () => {
  // const handleLogout = () => {
  //   signOut(auth).catch((error) => console.log("Error logging out: ", error));
  // };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
