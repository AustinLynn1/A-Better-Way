import React from 'react';
import { View, Image, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import AppContainer from './navigation/AppNavigator';


export default class App extends React.Component {
  render() {
    console.log(AppContainer);
    return (
      <View style={{ flex: 1 }}>
        <AppContainer></AppContainer>
      </View>
    ); 
  }
 }


