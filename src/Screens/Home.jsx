import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Color from '../Constants/Color'
import {Searchbar} from 'react-native-paper'
import Header from '../Components/Header'
import DrawerScreenWrapper from '../Components/DrawerScreenWrapper'
const Home = () => {
  return (
    <DrawerScreenWrapper>
    <View style={{flex: 1, backgroundColor: Color.grayColor}}>
      <Header/>
      <View>
      <Text style={{fontFamily: 'SFProDisplay-Medium', fontSize: 40, paddingHorizontal: '12%' ,color:"#000"}}>Delicious {"\n"}food for you</Text>
      <Searchbar placeholder='Search' style={{width: '80%', alignSelf: 'center', marginBottom: '10%' }} />
      </View>
    </View>
    </DrawerScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({})