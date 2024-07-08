import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Color from '../Constants/Color';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CartIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import BottomTabNavigation from './BottomTabNavigation';
import Profile from '../Screens/Profile';
import Order from '../Screens/Order';
import Offers from '../Screens/Offers';
import PrivacyPolicy from '../Screens/PrivacyPolicy';
import Security from '../Screens/Security';
import Home from '../Screens/Home';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
        drawerActiveBackgroundColor: 'transparent',
        drawerInactiveBackgroundColor: 'transparent',
        drawerHideStatusBarOnOpen: true,
        overlayColor: 'transparent',
        drawerStyle: {
            backgroundColor: Color.orangeColor,
            width: "60%"
        },
        sceneContainerStyle:{
            backgroundColor: Color.orangeColor,
        },
        drawerType: 'slide',
        headerStyle: {
            backgroundColor: Color.white
        },
        headerShown: false,
        headerTintColor: Color.black,
        drawerLabelStyle: {
            color: Color.white,
            fontSize: 16,
            fontFamily: "SFProDisplay-Medium",
            marginLeft: -10
        }
    }}
    >
        <Drawer.Screen name='Home' options={{
            drawerLabel: 'Home',
            title: 'Home',
            headerShadowVisible: false,
            drawerIcon: () => (
                <FontAwesome name='home' size={30} color={Color.white} />
            )
        }} 
        component={Home} 
        />
        <Drawer.Screen name='Profile' options={{
            drawerLabel: 'Profile',
            title: 'Profile',
            headerShadowVisible: false,
            drawerIcon: () => (
                <FontAwesome name='user' size={30} color={Color.white} />
            )
        }} 
        component={Profile} 
        />
        <Drawer.Screen name='Order' options={{
            drawerLabel: 'Order',
            title: 'Order',
            headerShadowVisible: false,
            drawerIcon: () => (
                <CartIcon name='cart-arrow-down' size={30} color={Color.white} />
            )
        }} 
        component={Order} 
        />
        <Drawer.Screen name='Offers' options={{
            drawerLabel: 'Offers',
            title: 'Offers',
            headerShadowVisible: false,
            drawerIcon: () => (
                <MaterialIcons name='local-offer' size={30} color={Color.white} />
            )
        }} 
        component={Offers} 
        />
        <Drawer.Screen name='PrivacyPolicy' options={{
            drawerLabel: 'PrivacyPolicy',
            title: 'PrivacyPolicy',
            headerShadowVisible: false,
            drawerIcon: () => (
                <MaterialIcons name='sticky-note-2' size={30} color={Color.white} />
            )
        }} 
        component={PrivacyPolicy} 
        />
        <Drawer.Screen name='Security' options={{
            drawerLabel: 'Security',
            title: 'Security',
            headerShadowVisible: false,
            drawerIcon: () => (
                <MaterialIcons name='security' size={30} color={Color.white} />
            )
        }} 
        component={Security} 
        />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})