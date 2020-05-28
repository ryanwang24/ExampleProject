import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default Box = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Enter grades</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: "25%",
    backgroundColor: "rgba(154,129,255,0.5)",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  text: {
    color: "#6646e6",
    fontSize: 30,
  },
});
