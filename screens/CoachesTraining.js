import React from 'react';
import BasePage from '../components/BasePage';
import BlackButton from '../components/BlackButton';
import RedButton from '../components/RedButton';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

export default class CoachesTraining extends React.Component{
    render(){
        return(
            <BasePage footerStyle={{backgroundColor: Colors.redButton}}>
                <BlackButton backButton={true}>COACHES TRAINING</BlackButton>
                <ScrollView style={{width: '100%'}}>
                    <RedButton>INTRODUCTION</RedButton>
                    <RedButton>INFORMATION AGE</RedButton>
                    <RedButton>ENCOURAGING TEAMS</RedButton>
                    <RedButton>INSPIRED</RedButton>
                    <RedButton>CORE VALUES</RedButton>
                    <RedButton>COMPELLING WHY</RedButton>
                    <RedButton>DESIRED OUTCOME</RedButton>
                    <RedButton>DEFINED SUCCESS</RedButton>
                    <RedButton>A BETTER WAY</RedButton>
                    <RedButton>THE CORE PROCESS</RedButton>
                    <RedButton>THREE MENTALITIES OF COACHES</RedButton>
                    <RedButton>CONNECT AND CELEBRATE</RedButton>
                    <RedButton>ORGANIZE AND OUTLINE</RedButton>
                    <RedButton>REFLECT AND REVIEW</RedButton>
                </ScrollView>
            </BasePage>
        )
    }
}
