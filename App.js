import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

function doSomething() {
  var x = 0;
  console.log("x is equal to: " + x);
  x++; //+1 to x
  console.log("x is equal to: " + x);
}

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");

  goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
  };

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "lightblue",
  },
  boxContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  }
});
