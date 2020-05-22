import React from'react'
import {View,StyleSheet} from 'react-native'

export default Box = () =>{return <View style={styles.box}/> }

const styles = StyleSheet.create({
box: {
    width: 1000,
    height: 100,
    backgroundColor: "lightblue",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  }
});