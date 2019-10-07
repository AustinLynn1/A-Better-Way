import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Styles from '../constants/styles';
import Colors from '../constants/Colors';
import { withNavigation } from 'react-navigation';

class GrayHeader extends React.Component{

   render(){
        return(
            <View style={Styles.buttonView}> 
                <View style={[this.props.style, styles.grayHeader]}>
                    <Text style={styles.headerText}>{this.props.children}</Text>
                </View>
            </View>
        )
    }
}

export default withNavigation(GrayHeader);

const styles = StyleSheet.create({
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.buttonText,
        paddingLeft: 5
      },
    grayHeader: {
        backgroundColor: Colors.grayHeader,
        height: 60,
        justifyContent: 'center'
    }
})