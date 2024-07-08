import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';
import DrawerNavigation from './DrawerNavigation';
import WelcomePage from '../Screens/Welcome';
import Login from '../Screens/Login';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      // initialRouteName='Main'
      >
        <Stack.Screen name='Welcome' component={WelcomePage} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Main' component={DrawerNavigation} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})