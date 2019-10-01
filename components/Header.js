import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Styles from '../constants/styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

class Header extends React.Component{

   render(){
        return(
            <View style={Styles.buttonView}> 
            <View style={this.props.style}>
                <View style={{flexDirection: 'row', flex: 1, paddingTop: 10}}>
                {this.props.backButton ? 
                        <View style={{flex: 1}}>
                            <Ionicons name="ios-arrow-back" size={38} style={styles.icon} 
                                onPress={() => this.props.navigation.goBack()}>
                            </Ionicons> 
                        </View>
                    : null}
                    <View style={{flex: 5}}>
                        <Text style={Styles.buttonText}>{this.props.children}</Text>
                    </View>
                    {this.props.backButton && <View style={{flex: 1}}></View>}  
                </View>
            </View>
            </View>
        )
    }
}

export default withNavigation(Header);

const styles = StyleSheet.create({
    icon:{
        color: Colors.buttonText,
        paddingLeft: 15,
        alignContent: 'flex-start'
    }
})