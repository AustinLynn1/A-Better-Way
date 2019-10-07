import React from 'react';
import BasePage from '../../components/BasePage';
import { withNavigation } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import GrayFooter from '../../components/GrayFooter';
import RedHeader from '../../components/RedHeader';
import GrayButton from '../../components/GrayButton';

class AthleteEvaluation extends React.Component{
    render(){
        return(
            <BasePage>
                <RedHeader backButton={true}>ATHLETE EVALUATION</RedHeader>
                <ScrollView style={{width: '100%'}}>
                    <GrayButton>ACADEMIC</GrayButton>
                    <GrayButton>TRAINING</GrayButton>
                    <GrayButton>TECHNICALLY</GrayButton>
                    <GrayButton>CHARACTER</GrayButton>
                    <GrayButton>COACHABLE</GrayButton>
                    <GrayButton>SUCCESS QUALITIES</GrayButton>
                    <GrayButton>QUESTIONS / COMMENTS</GrayButton>
                    <GrayButton>TEAM REPORT</GrayButton>
                </ScrollView>
                <GrayFooter style={{paddingTop: 30, alignItems: 'center'}}></GrayFooter>
            </BasePage>
        )
    }
}

export default withNavigation(AthleteEvaluation);