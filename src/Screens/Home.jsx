import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Color from '../Constants/Color'
import { Searchbar } from 'react-native-paper'
import Header from '../Components/Header'
import DrawerScreenWrapper from '../Components/DrawerScreenWrapper'
import FoodMenu from '../Constants/FoodMenu'
const Home = () => {
  return (
    <DrawerScreenWrapper>
      <View style={{ flex: 1, backgroundColor: Color.grayColor }}>
        <Header />
        <View>
          <Text style={{ fontFamily: 'SFProDisplay-Medium', fontSize: 40, paddingHorizontal: '12%', color: "#000" }}>Delicious {"\n"}food for you</Text>
          <Searchbar placeholder='Search' style={{ width: '80%', alignSelf: 'center', marginBottom: '10%' }} />
        </View>
        <View style={{ marginHorizontal: 5, marginTop: 10 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={FoodMenu}
            keyExtractor={item => item.id}
            style={{ overflow: 'visible' }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{ backgroundColor: Color.orangeColor, padding: 6, paddingHorizontal: 15, borderRadius: 50, marginRight: 18, }}>
                  <Text style={{ color: 'white', fontFamily: 'SFProDisplay-Medium' }}> {item.name} </Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </View>
    </DrawerScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({})