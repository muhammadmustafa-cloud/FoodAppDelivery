import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Color from '../Constants/Color'
import { Searchbar } from 'react-native-paper'
import Header from '../Components/Header'
import DrawerScreenWrapper from '../Components/DrawerScreenWrapper'
import FoodMenu from '../Constants/FoodMenu'
import { FoodCartItems } from '../Constants/FoodMenu'
// import Carousel from 'react-native-snap-carousel';
import MenuItemCards from '../Components/MenuItemCards'
const Home = () => {
  const [activeMenu, setActiveMenu] = useState(1)
  return (
    <DrawerScreenWrapper>
      <View style={{ flex: 1, backgroundColor: Color.grayColor }}>
        <Header />
        <View style={{ marginTop: 5 }}>
          <Text style={{ fontFamily: 'SFProDisplay-Semibold', fontSize: 40, paddingHorizontal: '12%', color: "#000", marginBottom: 15 }}>Delicious {"\n"}food for you</Text>
          <Searchbar placeholder='Search' style={{ width: '80%', alignSelf: 'center', marginBottom: '10%' }} />
        </View>
        <View style={{ marginHorizontal: 9, marginTop: 8 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={FoodMenu}
            keyExtractor={item => item.id}
            style={{ overflow: 'visible' }}
            renderItem={({ item }) => {
              let isActive = item.id == activeMenu;
              let activeTextClass = isActive ? Color.white : Color.orangeColor
              return (
                <TouchableOpacity onPress={() => setActiveMenu(item.id)} style={{ backgroundColor: isActive ? Color.orangeColor : Color.white, padding: 6, paddingHorizontal: 15, borderRadius: 50, marginRight: 18, }}>
                  <Text style={{ color: activeTextClass, fontFamily: 'SFProDisplay-Medium' }}> {item.name} </Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        {/* Food Items Cards */}
        {/* <View style={{ marginTop: 15, paddingHorizontal: 5 }}>
          <Carousel
            containerCustomStyle={{ overflow: 'visible' }}
            data={FoodCartItems}
            renderItem={({ item }) => <MenuItemCards item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.77}
            sliderWidth={400}
            itemWidth={260}
            slideStyle={{ display: 'flex', alignItems: 'center' }}
          />
        </View> */}

        <ScrollView
        contentContainerStyle={{paddingHorizontal:20}}
        horizontal 
        showsHorizontalScrollIndicator={false}
        >
          {
            FoodCartItems.map((item, index)=> <MenuItemCards item={item} index={index} key={index}/>)
          }
        </ScrollView>
      </View>
    </DrawerScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({})