import React from 'react';
import { View } from 'react-native';
import AppContainer from './navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    
    return (
      <View style={{ flex: 1 }}>
        <AppContainer></AppContainer>
      </View>
    ); 
  }
 }


