import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Color from '../Constants/Color';
import Dimension from '../Constants/Dimension';

import logo from '../../assets/images/logo.png';

const Login = ({ navigation }) => {
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    <View style={styles.loginContainer}>
      <View style={styles.topContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logoImg} source={logo} />
        </View>
        <View style={styles.loginProcess}>
          <TouchableOpacity onPress={()=> setLoggedIn(true)} style={styles.textContainer}>
            <Text style={[styles.text, loggedIn && styles.activeText ]}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setLoggedIn(false)} style={styles.textContainer}>
            <Text style={[styles.text, !loggedIn && styles.activeText]}>Sign-up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        {
          loggedIn ? (
            <>
              <View style={styles.inputFieldsContainer}>
                <Text style={{ color: '#000' }}>Email Address</Text>
                <TextInput style={styles.textInputField} />
              </View>
              <View style={styles.inputFieldsContainer}>
                <Text style={{ color: '#000' }}>Password</Text>
                <TextInput secureTextEntry={true} style={styles.textInputField} />
              </View>
              <Text style={styles.forgotPasscode}>Forgot passcode?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.btnContainer} >
                <Text style={styles.btnText}>Login</Text>
              </TouchableOpacity>
            </>
          )
            :
            (
              <>
                <View style={styles.inputFieldsContainer}>
                  <Text style={{ color: '#000' }}>User Name</Text>
                  <TextInput style={styles.textInputField} />
                </View>
                <View style={styles.inputFieldsContainer}>
                  <Text style={{ color: '#000' }}>Email Address</Text>
                  <TextInput secureTextEntry={true} style={styles.textInputField} />
                </View>
                <Text style={styles.forgotPasscode}>Forgot passcode?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.btnContainer} >
                  <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
              </>
            )
        }
      </View>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: Color.grayColor,
    width: Dimension.windowWidth,
    height: Dimension.windowHeight,
  },
  topContainer: {
    backgroundColor: '#fff',
    width: Dimension.windowWidth,
    height: (Dimension.windowHeight) / 2.5,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: '8%'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 'auto'
  },
  logoImg: {

  },
  loginProcess: {
    bottom: 0,
    // paddingBottom: '2%',
    fontSize: 18,
    color: '#000',
    // borderWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textContainer: {
    width: '25%',
  },
  activeText:{
    paddingBottom: "10%",
    borderBottomColor: Color.btnColor,
    borderBottomWidth: 2,

  },
  text: {
    textAlign: 'center',
    color: '#000',
    fontSize: 20,
    fontFamily: 'SFProDisplay-Regular',

  },
  bottomContainer: {
    flex: 1,
    width: "80%",
    marginHorizontal: 'auto',
    marginTop: '3%',
    justifyContent: 'space-evenly'
  },
  inputFieldsContainer: {
    marginBottom: '8%'
  },
  textInputField: {
    borderBottomWidth: 0.5,
    color: '#000',
    padding: 0,
    borderBottomColor: '#000'
  },
  forgotPasscode: {
    color: Color.orangeColor
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    padding: 0,
    backgroundColor: Color.orangeColor,
    width: '100%',
    height: '18%',
    borderRadius: 30,
  },

  btnText: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    bottom: 0,
  }

})