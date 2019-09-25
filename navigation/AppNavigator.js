import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen }
  },
  {
    initialRouteName: 'Home',
    // removes react navigations default header
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
