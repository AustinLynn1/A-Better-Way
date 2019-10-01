import React from 'react';
import Styles from '../constants/styles';
import Header from './Header';

export default class BlackHeader extends React.Component{

   render(){
        return(
            <Header style={Styles.blackButton} backButton={this.props.backButton}>
                {this.props.children}
            </Header>
        )
    }
}

BlackHeader.defaultProps = {
    backButton: false
}