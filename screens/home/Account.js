import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import BasePage from '../../components/BasePage';
import BlackHeader from '../../components/BlackHeader';
import RedButton from '../../components/RedButton';
import GrayFooter from '../../components/GrayFooter';
import styles from '../../constants/styles';
import GrayHeader from '../../components/GrayHeader';

export default class Account extends React.Component{
    render(){
        return(
            <BasePage>
                <BlackHeader backButton={true}>ACCOUNT</BlackHeader>
                <ScrollView style={styles.grayScrollView}>
                <GrayHeader style={{alignItems: 'left'}}>NAME</GrayHeader>
                <GrayHeader style={{alignItems: 'left'}}>EMAIL ADDRESS</GrayHeader>
                <GrayHeader style={{alignItems: 'left'}}>ORGANIZATION</GrayHeader>
                <GrayHeader style={{alignItems: 'left'}}>SPORT</GrayHeader>
                <GrayHeader style={{alignItems: 'left'}}>COACHES</GrayHeader>
                </ScrollView>
                <RedButton>LOGOUT</RedButton>
                <GrayFooter></GrayFooter>
            </BasePage>
        )
    }
}
