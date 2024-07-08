import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
// import Heart from 'react-native-vector-icons/Feather'
import Color from '../Constants/Color';
import LikedItems from '../Screens/LikedItems';
import Profile from '../Screens/Profile';
import Order from '../Screens/Order';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: Platform.OS === 'ios' ? 90 : 60,

    }
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name='DrawerHome' component={Home} 
        options={{
            tabBarIcon: ({ focused }) => (
                <FontAwesome name="home" color={focused ? Color.orangeColor : Color.iconColor} size={30} />
              )
        }}
        />
        <Tab.Screen name='LikeItems' component={LikedItems} 
        options={{
            tabBarIcon: ({ focused }) => (
                <Feather name="heart" color={focused ? Color.orangeColor : Color.iconColor} size={28} />
              )
        }}
        />
        <Tab.Screen name='Profile' component={Profile} 
        options={{
            tabBarIcon: ({ focused }) => (
                <Feather name="user" color={focused ? Color.orangeColor : Color.iconColor} size={28} />
              )
        }}
        />
        <Tab.Screen name='Order' component={Order} 
        options={{
            tabBarIcon: ({ focused }) => (
                <Entypo name="back-in-time" color={focused ? Color.orangeColor : Color.iconColor} size={28} />
              )
        }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})