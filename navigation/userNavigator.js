import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen'
import AboutScreen from '../screens/Home/AboutScreen'
import FormScreen from '../screens/Home/FormScreen'

import WelcomeScreen from '../screens/Authscreens/WelcomeScreen'
import RegisterScreen from '../screens/Authscreens/RegisterScreen'
import LoginScreen from '../screens/Authscreens/LoginScreen'
import SelectedProfile from '../screens/Home/SelectedProfile'


const Tab = createBottomTabNavigator();

const Homestack = createStackNavigator();

const Homestacknavigator =()=>{
    return ( <Homestack.Navigator>
         <Homestack.Screen
      name="Home"
      component={HomeScreen}
    />   
     <Homestack.Screen
      name="select"
      component={SelectedProfile}
    />
    </Homestack.Navigator>)
} 

export const  HomeTabNavigator=()=> {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Homestacknavigator}/>
          <Tab.Screen name="Form" component={FormScreen} />
          <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
    );
  }

const AuthStackNavigator = createStackNavigator();
export const AuthNavigator = () => {
    return (
      <AuthStackNavigator.Navigator>
        <AuthStackNavigator.Screen
          name="welcome"
          component={WelcomeScreen}
        />
           <AuthStackNavigator.Screen
          name="Register"
          component={RegisterScreen}
        />
         <AuthStackNavigator.Screen
          name="Login"
          component={LoginScreen}
        />
      </AuthStackNavigator.Navigator>
    );

 
  };
