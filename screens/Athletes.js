import React from 'react';
import BasePage from '../components/BasePage';
import RedButton from '../components/RedButton';
import { withNavigation } from 'react-navigation';

class Athletes extends React.Component{
    render(){
        return(
            <BasePage>
            <RedButton backButton={true}>ATHLETES</RedButton>
            </BasePage>
        )
    }
}

export default withNavigation(Athletes);