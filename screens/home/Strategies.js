import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

import BasePage from '../../components/BasePage';
import Styles from '../../constants/styles';
import RedHeader from '../../components/RedHeader';
import GrayFooter from '../../components/GrayFooter';
import GrayButton from '../../components/GrayButton';


class Strategies extends React.Component{
    render(){
        return(
            <BasePage>
                <RedHeader backButton={true}>STRATEGIES</RedHeader>
                <ScrollView style={Styles.grayScrollView}>

                </ScrollView>
                <GrayFooter style={{paddingTop: 30}}></GrayFooter>
            </BasePage>
        )
    }
}

export default withNavigation(Strategies);