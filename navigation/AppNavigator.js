import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Athletes from '../screens/Athletes';
import CoachesTraining from '../screens/CoachesTraining';
import SignUp from '../screens/SignUp';
import AthleteEvaluation from '../screens/AthleteEvaluation';

const RootStack = createStackNavigator(
  {
    Home: { screen: Home },
    Login: { screen: Login},
    Athletes: { screen: Athletes},
    CoachesTraining: {screen: CoachesTraining},
    SignUp: { screen: SignUp },
    AthleteEvaluation: { screen: AthleteEvaluation }
  },
  {
    initialRouteName: 'Athletes',
    // removes react navigations default header
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
     
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
