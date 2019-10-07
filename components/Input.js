import React from 'react';
import Styles from '../constants/styles';
import { View, Text, TextInput } from 'react-native';

export default class Input extends React.Component{

   render(){
        return(
            <View style={{paddingTop: 20, alignItems: 'center'}}>
            <Text style={Styles.textLabel}>{this.props.children}</Text>
            <TextInput style={Styles.textInput} keyboardType={this.props.keyboardType}
                        onChangeText={this.props.onChangeText} value={this.props.value}
                        autoCapitalize="none">
            </TextInput>
            </View>
        )
    }
}

Input.defaultProps={
    keyboardType: 'default',
}