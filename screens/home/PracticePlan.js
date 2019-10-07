import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { withNavigation } from 'react-navigation';

import BasePage from '../../components/BasePage';
import Styles from '../../constants/styles';
import RedHeader from '../../components/RedHeader';
import GrayFooter from '../../components/GrayFooter';
import Input from '../../components/Input';
import GrayButton from '../../components/GrayButton';

class PracticePlan extends React.Component{
    render(){
        return(
            <BasePage>
                <RedHeader backButton={true}>PRACTICE PLAN</RedHeader>
                <KeyboardAwareScrollView style={Styles.grayScrollView}>
                    <Input>CONNECT</Input>
                    <Input>ORGANIZE</Input>
                    <Input>REFLECT</Input>
                    <Input>ENCOURAGE</Input>
                </KeyboardAwareScrollView>
                <GrayButton>SEND TO OTHER COACHES</GrayButton>
                <GrayFooter style={{paddingTop: 30}}></GrayFooter>
            </BasePage>
        )
    }
}

export default withNavigation(PracticePlan);