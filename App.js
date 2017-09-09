import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './src/components/Login.js';
import Splash from './Splash.js';
import Home from './src/components/Home.js'
import { Navigator } from 'react-native-deprecated-custom-components';


export default class App extends React.Component {
  constructor(){
    super()
    this.navigatorRenderScene = this.navigatorRenderScene.bind(this);
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'Login'}}
        renderScene={this.navigatorRenderScene}
      />
    );
  }

  navigatorRenderScene(route, navigator){
    switch (route.name) {
      case 'Login':
        return (<Login navigator = {navigator}/>)
      case 'Home':
        return (<Home navigator = {navigator}/>)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2980b9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
