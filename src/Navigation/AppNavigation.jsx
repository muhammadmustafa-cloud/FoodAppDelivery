import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';
import DrawerNavigation from './DrawerNavigation';
import WelcomePage from '../Screens/Welcome';
import Login from '../Screens/Login';
import Profile from '../Screens/Profile';
import FoodItemDetails from '../Screens/FoodItemDetails';
import Cart from '../Screens/Cart';

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
        <Stack.Screen name='Profile' options={{ headerShown: true }} component={Profile} />
        <Stack.Screen name='FoodItemDetails' options={{ headerShown: true }} component={FoodItemDetails} />
        <Stack.Screen name='Cart' options={{ headerShown: true }} component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})