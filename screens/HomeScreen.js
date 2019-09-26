import React from 'react';
import RedButton from '../components/RedButton';
import BasePage from '../components/BasePage';
import BlackButton from '../components/BlackButton';
import GrayFooter from '../components/GrayFooter';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <BasePage>
          <BlackButton backButton={true}>ACCOUNT</BlackButton>
          <BlackButton>COACHES TRAINING</BlackButton>
          <RedButton>PRACTICE PLAN</RedButton>
          <RedButton onPress={() => this.props.navigation.navigate("Athletes")}>ATHLETES</RedButton>
          <RedButton>PARENTS</RedButton>
          <RedButton>STRATEGIES</RedButton>
          <RedButton>CONTENT</RedButton>
          <GrayFooter></GrayFooter>
      </BasePage>
    );
  }
}


