import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import profile from '../../assets/images/profile.png'
import Color from '../Constants/Color';
import RadioBtn from '../Components/RadioBtn';
const Profile = () => {
  return (
    <View style={{ marginHorizontal: 'auto', width: "80%" }}>
      <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Semibold', fontSize: 20, marginBottom:10 }}>Information</Text>
      <View style={{ backgroundColor: Color.white, display: 'flex', paddingVertical: 20, paddingHorizontal: 10, borderRadius: 15 }}>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          <View>
            <Image source={profile} />
          </View>
          <View style={{display: 'flex', gap:2}}>
            <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Medium', fontSize: 18 }}>Marvis Ighedosa</Text>
            <Text style={{ color: Color.iconColor, letterSpacing: 0.5 }}>dosamarvis@gmail.com</Text>
            <Text style={{ color: Color.iconColor, width: "60%" }}>No 15 uti street off ovie palace road effurun delta state</Text>
          </View>
        </View>
      </View>
      <View>
        <RadioBtn/>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})