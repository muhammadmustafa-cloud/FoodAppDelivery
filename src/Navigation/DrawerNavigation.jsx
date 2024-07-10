import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Color from '../Constants/Color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CartIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BottomTabNavigation from './BottomTabNavigation';
import Profile from '../Screens/Profile';
import Order from '../Screens/Order';
import Offers from '../Screens/Offers';
import PrivacyPolicy from '../Screens/PrivacyPolicy';
import Security from '../Screens/Security';
import Home from '../Screens/Home';
import MainProfile from '../Screens/MainProfile';
import Feather from 'react-native-vector-icons/Feather';

const Drawer = createDrawerNavigator();

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 20 }}>
      <Feather name="arrow-left" size={24} color={Color.iconColor} />
    </TouchableOpacity>
  );
};

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
        sceneContainerStyle: {
          backgroundColor: 'transparent',
        },
        drawerType: 'slide',
        headerStyle: {
          backgroundColor: Color.white,
        },
        headerTintColor: Color.black,
        drawerLabelStyle: {
          color: Color.white,
          fontSize: 16,
          fontFamily: "SFProDisplay-Medium",
          marginLeft: -10,
        },
      }}
    >
      <Drawer.Screen name='Home' options={{
        drawerLabel: 'Home',
        title: 'Home',
        headerShown: false,
        headerShadowVisible: false,
        drawerIcon: () => (
          <FontAwesome name='home' size={30} color={Color.white} />
        ),
      }}
        component={BottomTabNavigation}
      />
      <Drawer.Screen name='MyProfile'
        options={{
          drawerLabel: 'Profile',
          title: 'Profile',
          headerLeft: () => <BackButton />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0, // Remove shadow on Android
            shadowOpacity: 0, // Remove shadow on iOS
          },
          headerTitle: '',
          headerShadowVisible: false,
          drawerIcon: () => (
            <FontAwesome name='user' size={30} color={Color.white} />
          ),
        }}
        component={MainProfile}
      />
      <Drawer.Screen name='Order' options={{
        drawerLabel: 'Order',
        title: 'Order',
        headerShadowVisible: false,
        drawerIcon: () => (
          <CartIcon name='cart-arrow-down' size={30} color={Color.white} />
        ),
      }}
        component={Order}
      />
      <Drawer.Screen name='Offers' options={{
        drawerLabel: 'Offers',
        title: 'Offers',
        headerShadowVisible: false,
        drawerIcon: () => (
          <MaterialIcons name='local-offer' size={30} color={Color.white} />
        ),
      }}
        component={Offers}
      />
      <Drawer.Screen name='PrivacyPolicy' options={{
        drawerLabel: 'PrivacyPolicy',
        title: 'PrivacyPolicy',
        headerShadowVisible: false,
        drawerIcon: () => (
          <MaterialIcons name='sticky-note-2' size={30} color={Color.white} />
        ),
      }}
        component={PrivacyPolicy}
      />
      <Drawer.Screen name='Security' options={{
        drawerLabel: 'Security',
        title: 'Security',
        headerShadowVisible: false,
        drawerIcon: () => (
          <MaterialIcons name='security' size={30} color={Color.white} />
        ),
      }}
        component={Security}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
