import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../Constants/Color'
import tw from 'twrnc';

const MenuItemCards = ({ item, index }) => {
  return (
    <View style={[tw`w-56 h-70 my-5 mr-6 p-3 py-5 rounded-3xl`, styles.parent]}>
      <View style={[tw`flex-row -top-10 justify-center`, styles.shadow]}>
        <Image source={item.img} style={[tw`h-64 w-64 -mb-20`, styles.imageShadow]} />
      </View>
      <View style={tw`flex px-3 py-2 justify-center items-center`}>
        <Text style={tw`text-black text-xl font-medium text-center tracking-wider`}>{item.name}</Text>
        <Text style={tw`text-black`}>{item.price}</Text>
      </View>
    </View>
  )
}

export default MenuItemCards

const styles = StyleSheet.create({
  parent: {
    backgroundColor: Color.white,
  },
  shadow: {
    // elevation: 10, // For Android
  },
  imageShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    borderRadius: 10,
    elevation: 10
  },
})
