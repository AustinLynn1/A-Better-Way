import React from 'react';
import RedButton from '../components/RedButton';
import BasePage from '../components/BasePage';
import BlackButton from '../components/BlackButton';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <BasePage>
          <BlackButton>ACCOUNT</BlackButton>
          <BlackButton>COACHES TRAINING</BlackButton>
          <RedButton>PRACTICE PLAN</RedButton>
          <RedButton>ATHLETES</RedButton>
          <RedButton>PARENTS</RedButton>
          <RedButton>STRATEGIES</RedButton>
          <RedButton>CONTENT</RedButton>
      </BasePage>
    );
  }
}

