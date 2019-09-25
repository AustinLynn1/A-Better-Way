import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from '../constants/styles';

export default class Button extends React.Component{

   render(){
        return(
            <View style={Styles.buttonView}> 
            <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
                <Text style={Styles.buttonText}>{this.props.children}</Text>
            </TouchableOpacity>
            </View>
        )
    }
}