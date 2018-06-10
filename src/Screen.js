import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import { AuthLoadingScreen, HomeScreen, LoginScreen } from './screens';

const AppStack = createStackNavigator(
  { Home: HomeScreen}
);
const AuthStack = createStackNavigator({ LoginIn: LoginScreen },
  {
    headerMode: 'none'
  }
);

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)