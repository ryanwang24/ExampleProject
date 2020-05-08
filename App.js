import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";


function doSomething() {
  var x = 0;
  console.log("x is equal to: " +x)
  x++; //+1 to x
  console.log("x is equal to: " +x)
}

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

  const function goalInputHandler = (enteredText)=> {
  setEnteredGoal(enteredText);
};

const addGoalHandler = () => {
  console.log(enteredGoal);
};

  return (
    <View style={{styles.root}}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" 
        style={styles.input} 
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler}/>
     </View>
    <View> />
   </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50
  },
  inputContainer:{flexDirection: 'row', 
  justifyContent: 'space-between', 
  alignItems: 'center'
},
input: {
    width: '80%', 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10
}
});
