import React from 'react';
import Styles from '../constants/styles';
import Button from './Button';

export default class GrayButton extends React.Component{

   render(){
        return(
            <Button style={Styles.grayButton} onPress={this.props.onPress} backButton={this.props.backButton}>
                {this.props.children}
            </Button>
        )
    }
}

GrayButton.defaultProps = {
    backButton: false
}