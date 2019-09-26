import React, { Fragment } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Image, View } from 'react-native';
import Styles from '../constants/styles';
import Colors from '../constants/Colors';

export default class BasePage extends React.Component {
  render(){
    return (
      <Fragment>
        <SafeAreaView style={[{flex: 0, backgroundColor: '#000'}, this.props.headerStyle]}/>
          <StatusBar barStyle={this.props.barStyle}/>
        <SafeAreaView style={[{flex: 1, backgroundColor: Colors.grayFooter}, this.props.footerStyle]}>
          <Image source={require('../assets/images/logo-Black.png')} style={styles.logo}/>
          <View style={Styles.appContainer}>
                {this.props.children}
          </View>
        </SafeAreaView>
      </Fragment>
    )
  }
}

BasePage.defaultProps = {
  barStyle: 'light-content',
  footerStyle: Colors.grayFooter
}

const styles = StyleSheet.create({
    logo: {
      alignSelf: 'stretch',
      width: "100%"
    },
  });