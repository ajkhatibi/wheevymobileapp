import React, { Component } from 'react';
import firebase from 'firebase';
import { Header } from 'react-native-elements';
import { StatusBar, View, Text, StyleSheet, TextInput, KeyboardAvoidingView, FlatList } from 'react-native';
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

    componentDidMount(event){
    firebase.database().ref('messages/').on('value', (snapshot)=>{
      const currentMessages = snapshot.val();
      if(currentMessages != null){
        this.setState({
          messages: currentMessages
        })
      }
    })
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
    this.state.message = ''
  }

  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={{width: '100%', height: '9%'}}>
              <Header
                statusBarProps={{ barStyle: 'light-content' }}
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Chat Room', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
              />
            </View>
              <View style={{flex: 1, padding: 20, opacity: 0.5}}>
                  <FlatList
                    data={this.state.messages}
                    renderItem={({item})=>(
                      <Text >{item.text}</Text>
                    )}
                    keyExtractor={(item)=>item.id}
                  />
              </View>
              <TextInput
                value={this.state.message}
                onSubmitEditing={this.submitMessages}
                onChangeText={this.updateMessage}
                style={styles.text}
                keyboardType='default'
                returnKeyType='send'
                placeholderTextColor='rgba(255,255,255,0.2)'
                placeholder='type a message'
                ref='messagefield'
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
    paddingHorizontal: 10,
    borderRadius: 25
  },
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  }

})
