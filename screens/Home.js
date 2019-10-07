import React from 'react';

import RedButton from '../components/RedButton';
import BasePage from '../components/BasePage';
import BlackButton from '../components/BlackButton';
import GrayFooter from '../components/GrayFooter';

export default class Home extends React.Component {
  constructor(){
    super();
    // this.state = {
    //   id: this.props.navigation.state.params.id,
    //   email: this.props.navigation.state.params.email, 
    //   password: this.props.navigation.state.params.password,
    //   lastName: this.props.navigation.state.params.lastName,
    //   firstName: this.props.navigation.state.params.firstName,
    //   phoneNumber: this.props.navigation.state.params.phoneNumber,
    //   teamId: this.props.navigation.state.params.teamId,
    // }
  }

  render() {
    //console.log(this.props.navigation.state.params.id)
    return (
      <BasePage>
          <BlackButton backButton={true}>ACCOUNT</BlackButton>
          <BlackButton onPress={()=>this.props.navigation.navigate("CoachesTraining")}>COACHES TRAINING</BlackButton>
          <RedButton onPress={() => this.props.navigation.navigate("PracticePlan")}>PRACTICE PLAN</RedButton>
          <RedButton onPress={() => this.props.navigation.navigate("Athletes")}>ATHLETES</RedButton>
          <RedButton>PARENTS</RedButton>
          <RedButton>STRATEGIES</RedButton>
          <RedButton>CONTENT</RedButton>
          <GrayFooter></GrayFooter>
      </BasePage>
    );
  }
}


