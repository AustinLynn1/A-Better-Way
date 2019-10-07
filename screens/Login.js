import React from 'react';
import BasePage from '../components/BasePage';
import Input from '../components/Input';
import Colors from '../constants/Colors';
import Styles from '../constants/styles';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Login extends React.Component{

    constructor() {
        super();
        this.state = {
            id: "",
            email: '', 
            password: '',
            loginFail: false,
        };

        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.login = this.login.bind(this);
    }

    render(){
        return(
            <BasePage footerStyle={{backgroundColor: Colors.redButton}}>
                <View style={{paddingTop: 40}}></View>
                {this.state.loginFail ? <Text>Incorrect username or password</Text> : null}
               <Input onChangeText={this.setEmail} value={this.state.email}>EMAIL</Input>
               <Input onChangeText={this.setPassword} value={this.state.password}>PASSWORD</Input>
               <TouchableOpacity onPress={this.login} style={{paddingTop: 20}}>
                   <Text style={Styles.textLabel}>LOGIN</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => this.props.navigation.navigate("SignUp")} style={{paddingTop: 20}}>
                   <Text style={Styles.textLabel}>SIGN UP</Text>
               </TouchableOpacity>
            </BasePage>
        )
    }

    setEmail(event){
        this.setState({email: event});
        this.setState({loginFail: false});
    }

    setPassword(event){
        this.setState({password: event});
        this.setState({loginFail: false});
    }
    
    login(){
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        fetch('http://localhost:3001/login', {
            method: 'post',
            body:  JSON.stringify({email: this.state.email, password: this.state.password}),
            headers: headers
         }).then((res) => res.json()).then((result) => {
            if(result.success === false){
                this.setState({loginFail: true});
            }
            else if(result.success === true){
                const user = result.data.rows[0];
                this.props.navigation.navigate("Home", 
                    {id: user.id, 
                    email: user.email, 
                    firstName: user.firstName, 
                    lastName: user.lastName, 
                    teamId: user.teamId});
            } 
        });
    }

}