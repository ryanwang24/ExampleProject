import React from'react'
import {View,StyleSheet} from 'react-native'

const Box = () =>{<View style={styles.box}/> }

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