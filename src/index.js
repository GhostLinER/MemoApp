import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  Formdata,
  CameraUse,
} from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    Formdata,
    CameraUse,
  },
  {
    initialRouteName: 'CameraUse',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
