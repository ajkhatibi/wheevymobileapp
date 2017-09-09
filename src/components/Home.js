import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Home extends Component {
  render(){
    return(
      <View>
        <Button
          onPress={()=>this.props.navigator.pop()}
          title='goback'
        />
      </View>
    )
  }
}
