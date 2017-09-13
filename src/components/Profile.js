import React, { Component } from 'react';
import firebase from 'firebase';
import { StatusBar, View, StyleSheet, TextInput, KeyboardAvoidingView, FlatList } from 'react-native';
export default class Profile extends Component {
  constructor(props, context){
    super(props, context)
    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessages = this.submitMessages.bind(this);
    this.state = {
      message: '',
      messages: []
    }
  }

  updateMessage(event){
    console.log('Updating messages: '+event)
    this.setState({
      message: event
    })
  }

  submitMessages(){
    console.log('On Submit Editing: '+ this.state.message)
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message
    };
    firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
  }

  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar barStyle='light-content'/>
              <View style={{flex: 1, padding: 20}}>
                <FlatList/>
              </View>
              <TextInput
                value={this.state.message}
                onSubmitEditing={this.submitMessages}
                onChangeText={this.updateMessage}
                style={styles.text}
                keyboardType='default'
                returnKeyType='send'
                placeholderTextColor='rgba(255,255,255,0.2)'
              />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: 'white',
    paddingHorizontal: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  }
})
