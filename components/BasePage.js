import React, { Fragment } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Image, View } from 'react-native';
import Styles from '../constants/styles';
import Colors from '../constants/Colors';

export default function BasePage(props) {
      return (
        <Fragment>
          <SafeAreaView style={[{flex: 0, backgroundColor: '#000'}, props.headerStyle]}/>
            <StatusBar barStyle={props.barStyle}/>
          <SafeAreaView style={[{flex: 1, backgroundColor: Colors.socialMediaGray}, props.footerStyle]}>
            <Image source={require('../assets/images/logo-Black.png')} style={styles.logo}/>
            <View style={Styles.appContainer}>
                  {props.children}
            </View>
          </SafeAreaView>
        </Fragment>
      )
    
}

BasePage.defaultProps = {
  barStyle: 'light-content'
}

const styles = StyleSheet.create({
    logo: {
      alignSelf: 'stretch',
      width: "100%"
    },
  });