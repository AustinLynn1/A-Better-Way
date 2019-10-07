import React from 'react';
import BasePage from '../components/BasePage';
import RedHeader from '../components/RedHeader';
import RedButton from '../components/RedButton';
import { withNavigation } from 'react-navigation';
import GrayHeader from '../components/GrayHeader';
import { ScrollView } from 'react-native-gesture-handler';
import GrayFooter from '../components/GrayFooter';

class Athletes extends React.Component{
    render(){
        return(
            <BasePage>
                <RedHeader backButton={true}>ATHLETES</RedHeader>
                <GrayHeader style={{alignItems: 'center'}}>ROSTER</GrayHeader>
                <ScrollView style={{width: '100%'}}>
                    <GrayHeader style={{alignItems: 'left'}}>PLAYER 1</GrayHeader>
                    <GrayHeader style={{alignItems: 'left'}}>PLAYER 2</GrayHeader>
                </ScrollView>
                <RedButton onPress={() => this.props.navigation.navigate("AthleteEvaluation")}>ATHLETE EVALUATION</RedButton>
                <GrayFooter style={{paddingTop: 30, alignItems: 'center'}}></GrayFooter>
            </BasePage>
        )
    }
}

export default withNavigation(Athletes);