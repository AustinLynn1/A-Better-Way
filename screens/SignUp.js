import React from 'react';
import BasePage from '../components/BasePage';
import Input from '../components/Input';
import Colors from '../constants/Colors';
import Styles from '../constants/styles';
import { View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BlackHeader from '../components/BlackHeader';


export default class SignUp extends React.Component{

    constructor() {
        super();
        this.state = {
            id: "",
            email: '', 
            password: '',
            lastName: '',
            firstName: '',
            phoneNumber: '',
            teamId: '',
            failMessage: '',
        };

        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName - this.setLastName.bind(this);
        this.setPhoneNumber = this.setPhoneNumber.bind(this);
        this.setTeamId = this.setTeamId.bind(this);

        this.signUp = this.signUp.bind(this);
    }

    render(){
        return(
            <BasePage footerStyle={{backgroundColor: Colors.redButton}}>
                <BlackHeader backButton={true}>SIGN UP</BlackHeader>
                {this.state.failMessage ? 
                    <Text style={{color: Colors.buttonText}}>{this.state.failMessage}</Text> 
                : null}
                <ScrollView>
               <Input onChangeText={this.setEmail} value={this.state.email}>EMAIL</Input>
               <Input onChangeText={this.setPassword} value={this.state.password}>PASSWORD</Input>
               <Input onChangeText={this.setFirstName} value={this.state.firstName}>FIRST NAME</Input>
               <Input onChangeText={this.setLastName} value={this.state.lastName}>LAST NAME</Input>
               <Input onChangeText={this.setPhoneNumber} value={this.state.phoneNumber} keyboardType="numeric">PHONE NUMBER</Input>
               <Input onChangeText={this.setTeamId} value={this.state.teamId} keyboardType="numeric">TEAM CODE</Input>
               <Text style={{color: Colors.buttonText, fontSize: 14, paddingTop: 5}}>This is provided by your coach.</Text>
               <TouchableOpacity onPress={this.props.signUp} style={{paddingTop: 20}}>
                   <Text style={Styles.textLabel}>SIGN UP</Text>
               </TouchableOpacity>
               </ScrollView>
            </BasePage>
        )
    }

    setEmail(event){
        this.setState({email: event});
    }

    setPassword(event){
        this.setState({password: event});
    }

    setFirstName(event){
        this.setState({firstName: event});
    }

    setLastName(event){
        this.setState({lastName: event});
    }

    setPhoneNumber(event){
        this.setState({phoneNumber: event});
    }

    setTeamId(event){
        this.setState({teamId: event});
    }
    
    signUp(){
        if(!this.state.email || !this.state.password || !this.state.firstName
            || !this.state.lastName || !this.state.phoneNumber || !this.state.teamId){
                this.setState({failMessage: "Please fill in all fields."});
            }
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        fetch(process.env.REACT_APP_API_URL + 'signUp', {
            method: 'post',
            body:  JSON.stringify({
                email: this.state.email, 
                password: this.state.password,
                firstName: this.state.firstName, 
                lastName: this.state.lastName, 
                phoneNumber: this.state.phoneNumber,
                teamId: this.state.teamId}),
            headers: headers
         }).then((res) => res.json()).then((result) => {
            if(result.success === false){
                this.setState({failMessage: result.data});
            }
            else if(result.success === true){
                const user = result.data.rows[0];
                this.props.navigation.navigate("Home", 
                    {id: user.id, 
                    email: user.email, 
                    firstName: user.firstName, 
                    lastName: user.lastName, 
                    phoneNumber: user.phoneNumber,
                    teamId: user.teamId});
            } 
        });
    }
}