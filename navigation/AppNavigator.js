import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Athletes from '../screens/home/Athletes';
import CoachesTraining from '../screens/home/CoachesTraining';
import SignUp from '../screens/SignUp';
import AthleteEvaluation from '../screens/athlete-evaluation/AthleteEvaluation';
import PracticePlan from '../screens/home/PracticePlan';

const RootStack = createStackNavigator(
  {
    Home: { screen: Home },
    Login: { screen: Login},
    Athletes: { screen: Athletes},
    CoachesTraining: {screen: CoachesTraining},
    SignUp: { screen: SignUp },
    AthleteEvaluation: { screen: AthleteEvaluation },
    PracticePlan: { screen: PracticePlan}
  },
  {
    initialRouteName: 'Login',
    // removes react navigations default header
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
     
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
