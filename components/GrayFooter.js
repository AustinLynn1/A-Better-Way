import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default class GrayFooter extends React.Component{
    render(){
        return(
            <View style={{paddingTop: 70, alignItems: 'center'}}>
                <Text style={styles.footerText}>Social Media Info</Text>
                <Text style={styles.footerText}>Other Stuff</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footerText:{
        fontSize: 28,
        color: Colors.buttonText,
        fontWeight: 'bold',
    }
})