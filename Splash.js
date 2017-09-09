import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Splash extends Component {
  render(){
    return(
      <View style={styles.wrapper}>
        <Text style={styles.title}>Wheevy</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {

      backgroundColor: '#2980b9',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'

  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'

  }
})
