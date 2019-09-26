import React from 'react';
import Styles from '../constants/styles';
import Button from './Button';

export default class BlackButton extends React.Component{

   render(){
        return(
            <Button style={Styles.blackButton} onPress={this.props.onPress} backButton={this.props.backButton}>
                {this.props.children}
            </Button>
        )
    }
}

BlackButton.defaultProps = {
    backButton: false
}