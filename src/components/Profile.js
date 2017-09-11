import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Profile extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Profile</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'red',
      flex: 1,

  },
  text: {
    color: 'red'
  }
})
