import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDz5x48Hw7KN-0j6VBKtgYIjJpWQvyoGWw",
  authDomain: "boater-b2c77.firebaseapp.com",
  databaseURL: "https://boater-b2c77.firebaseio.com",
  projectId: "boater-b2c77",
  storageBucket: "boater-b2c77.appspot.com",
  messagingSenderId: "368854544857",
  appId: "1:368854544857:web:edf2d2211af88ec5a1a9c8",
  measurementId: "G-PYPSG0Q1KG"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
     Loading: LoadingScreen,
     App: AppStack,
     Auth: AuthStack
    },
    
  )
)