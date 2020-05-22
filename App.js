import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import Box from "./components/Box";
import GoalInput from "./components/GoalInput"
function doSomething() {
  var x = 0;
  console.log("x is equal to: " + x);
  x++; //+1 to x
  console.log("x is equal to: " + x);
}

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
       {id: Math.random().toString(), value: goalTitle}
      ]);
  };

  return (
    <View style={styles.root}>
      <GoalInput addGoalHandler={addGoalHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
      {/* <Box/> */}
    </View>
    
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50,
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
});
