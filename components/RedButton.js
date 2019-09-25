import React from 'react';
import Styles from '../constants/styles';
import Button from './Button';

export default class RedButton extends React.Component{

   render(){
        return(
            <Button style={Styles.redButton} onPress={this.props.onPress}>
                {this.props.children}
            </Button>
        )
    }
}