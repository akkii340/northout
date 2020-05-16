import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeTabNavigator, AuthNavigator } from './userNavigator';
import { useSelector,useDispatch } from 'react-redux';

const AppNavigator = props => {
    const isAuth = useSelector(state => state.users.isAuth.auth);
  return (
    <NavigationContainer>
    {isAuth?<HomeTabNavigator/>:<AuthNavigator/>}
    </NavigationContainer>
  );
};

export default AppNavigator;
