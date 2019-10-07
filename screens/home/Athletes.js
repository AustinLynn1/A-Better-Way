import React from 'react';
import { withNavigation } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

import BasePage from '../../components/BasePage';
import RedHeader from '../../components/RedHeader';
import RedButton from '../../components/RedButton';
import GrayHeader from '../../components/GrayHeader';
import GrayFooter from '../../components/GrayFooter';
import Styles from '../../constants/styles';

class Athletes extends React.Component{
    render(){
        return(
            <BasePage>
                <RedHeader backButton={true}>ATHLETES</RedHeader>
                <GrayHeader style={{alignItems: 'center'}}>ROSTER</GrayHeader>
                <ScrollView style={Styles.grayScrollView}>
                    <GrayHeader style={{alignItems: 'left'}}>PLAYER 1</GrayHeader>
                    <GrayHeader style={{alignItems: 'left'}}>PLAYER 2</GrayHeader>
                </ScrollView>
                <RedButton onPress={() => this.props.navigation.navigate("AthleteEvaluation")}>ATHLETE EVALUATION</RedButton>
                <GrayFooter style={{paddingTop: 30}}></GrayFooter>
            </BasePage>
        )
    }
}

export default withNavigation(Athletes);