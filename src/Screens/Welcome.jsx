import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import Color from '../Constants/Color'
import Dimension from '../Constants/Dimension'

import logo from '../../assets/images/logo.png';
import bgImg1 from '../../assets/images/toyface1.png';
import bgImg2 from '../../assets/images/toyface2.png';
const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logoImage} />
        </View>
        <Text style={styles.mainHeading}>Food for Everyone</Text>
      </View>
      <View style={styles.bgImgContainer}>
        {/* <Image source={bgImg1} style={styles.bgImg1} />
        <Image source={bgImg2} style={styles.bgImg2} /> */}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btnContainer}>
        <View style={styles.loginBtn}>
          <Text style={styles.btnText}>Get Started</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomePage;

const styles = StyleSheet.create({
  welcomeContainer: {
    backgroundColor: Color.orangeColor,
    width: Dimension.windowWidth,
    height: Dimension.windowHeight,
    paddingTop: '10%',
  },
  mainContainer: {
    paddingHorizontal: '10%',
    marginBottom: "8%"
  },
  logoContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },
  logoImage: {
    width: 50,
    height: 50,

  },
  mainHeading: {
    fontSize: 50,
    fontFamily: 'SFProDisplay-Heavy',
    marginHorizontal: '4%',
    color: '#fff'
  },
  bgImgContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative'
  },
  // bgImg1: {
  //   position: 'relative',
  //   width: "60%",
  //   zIndex: 40
  // },
  // bgImg2: {
  //   position: 'relative',
  //   width: "60%",
  //   right:100
  // },
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
    width: "80%",
    height: "10%"
  },
  loginBtn: {
    backgroundColor: '#fff',
    width: '100%',
    height: '80%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  btnText: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    color: Color.orangeColor,
  }
})