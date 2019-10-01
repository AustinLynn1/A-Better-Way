import React from 'react';
import Styles from '../constants/styles';
import Header from './Header';

export default class RedHeader extends React.Component{

   render(){
        return(
            <Header style={Styles.redButton} backButton={this.props.backButton}>
                {this.props.children}
            </Header>
        )
    }
}

RedHeader.defaultProps = {
    backButton: false
}