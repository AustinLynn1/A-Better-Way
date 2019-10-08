import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Athletes from '../screens/home/Athletes';
import CoachesTraining from '../screens/home/CoachesTraining';
import SignUp from '../screens/SignUp';
import AthleteEvaluation from '../screens/athlete-evaluation/AthleteEvaluation';
import PracticePlan from '../screens/home/PracticePlan';
import Account from '../screens/home/Account';
import Strategies from '../screens/home/Strategies';

const RootStack = createStackNavigator(
  {
    Home: { screen: Home },
    Login: { screen: Login},
    Account: { screen: Account },
    AthleteEvaluation: { screen: AthleteEvaluation },
    Athletes: { screen: Athletes },
    CoachesTraining: { screen: CoachesTraining },
    PracticePlan: { screen: PracticePlan },
    SignUp: { screen: SignUp },
    Strategies: { screen: Strategies }
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
