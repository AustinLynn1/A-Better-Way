import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Styles from '../constants/styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

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

const styles = StyleSheet.create({
    icon:{
        color: Colors.buttonText,
        
        
    }
})