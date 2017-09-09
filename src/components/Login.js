import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, Button, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import wheevyimg from '../wheevyimg.png';


export default class Login extends Component {
  constructor(props){
    super(props)
    this.navigate = this.navigate.bind(this);
    this.state = {
      username: '',
      password: ''
    }
  }
  navigate(name){
    this.props.navigator.push({
      name
    })
  }
  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.wheevyimgCon}>
          <Image style={styles.wheevyimg} source={wheevyimg}/>
          <Text style={styles.title}>Wheevy</Text>
          <Text style={styles.paragraph}>The anonymous chat app</Text>
        </View>
        <View style={styles.loginContainer}>
          <StatusBar barStyle='light-content'/>
          <TextInput
            onChangeText={(username)=>this.setState({username})}
            value={this.state.username}
            returnKeyType='next'
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            placeholderTextColor='rgba(255,255,255,0.2)'
            placeholder='username or email'
            style={styles.input}
            onSubmitEditing={()=>this.password.focus()}
          />
          <TextInput
            onChangeText={(password)=>this.setState({password})}
            value={this.state.password}
            returnKeyType='go'
            secureTextEntry
            placeholderTextColor='rgba(255,255,255,0.2)'
            placeholder='password'
            style={styles.input}
            ref={(input)=>this.password=input}
          />
          <TouchableOpacity onPress={()=>this.navigate('Home')} style={styles.buttonCon}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  wheevyimg: {
    width: 100,
    height: 100,
  },
  wheevyimgCon: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold'
  },
  paragraph: {
    color: 'white'
  },
  loginContainer: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: 'white',
    paddingHorizontal: 10
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700'
  },
  buttonCon: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  }
});
