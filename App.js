import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Text, FlatList, } from "react-native";

function doSomething() {
  var x = 0;
  console.log("x is equal to: " + x);
  x++; //+1 to x
  console.log("x is equal to: " + x);
}

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
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
      <FlatList
      keyExtractor={(item, index) => item.id}
      data={courseGoals}
      renderItem={itemData => (
      <View style={styles.boxContainer}>
        {courseGoals.map(goal => (
  
        )}
      />
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
    width: 1000,
    height: 100,
    backgroundColor: "lightblue",
    borderColor: "black",
    borderWidth: 1,
    padding: 10, 
  },
  boxContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  listItem: {
    padding: 10,
    marginVertical: 10, 
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
