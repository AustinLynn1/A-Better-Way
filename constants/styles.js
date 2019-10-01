import { StyleSheet } from 'react-native';
import colors from './Colors';

const buttonHeight = 71;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.socialMediaGray
    },
    blackButton: {
        height: buttonHeight,
        backgroundColor: colors.blackButton,
        justifyContent: 'center',
        alignItems: 'center',
      },
    redButton: {
        height: buttonHeight,
        backgroundColor: colors.redButton,
        justifyContent: 'center',
        alignItems: 'center'
      },
    buttonText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.buttonText,
        textAlign: 'center'
      },
    buttonView: {
        width: '100%',
      },
    textInput: {
      height: 56, 
      width: 300, 
      fontSize: 22,
      backgroundColor: '#ffffff'
    },
    textLabel:{
      textAlign: 'center',
      fontSize: 28, 
      fontWeight: 'bold', 
      color: colors.buttonText
    }

})

export default styles;