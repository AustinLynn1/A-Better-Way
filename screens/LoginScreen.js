import React from 'react';
import { Text } from 'react-native';

export default class LoginScreen extends React.Component{

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
            <Text>Login</Text>
        )
    }

    setEmail(event){
        this.setState({email: event.target.value});
        this.setState({loginFail: false});
    }

    setPassword(event){
        this.setState({password: event.target.value});
        this.setState({loginFail: false});
    }
    
    login(){
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        fetch(process.env.REACT_APP_API_URL + 'login', {
            method: 'post',
            body:  JSON.stringify({email: this.state.email, password: this.state.password}),
            headers: headers
         }).then((res) => res.json()).then((result) => {
            if(result.success === false){
                this.setState({loginFail: true});
            }
            else if(result.success === true){
                console.log('Success!');
                const user = result.data.rows[0];
                history.push('/menu', {id: user.id, 
                    email: user.email, 
                    firstName: user.firstName, 
                    lastName: user.lastName, 
                    team_id: user.team_id});
            } 
        });
    }
}