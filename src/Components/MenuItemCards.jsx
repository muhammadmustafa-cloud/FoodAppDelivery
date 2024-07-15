import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Color from '../Constants/Color'
import tw from 'twrnc';

const MenuItemCards = ({ item, index, navigation }) => {

  return (
    <TouchableOpacity 
      activeOpacity={0.8} 
      style={{height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center'}} 
      onPress={() => navigation.navigate('FoodItemDetails', { item })}
    >
      <View style={[tw`w-46 h-55 my-5 mr-6 p-3 py-5 rounded-3xl`, styles.parent]}>
        <View style={tw`flex px-3 py-2 justify-center items-center`}>
          <Text style={[tw`text-black text-xl text-center`, styles.itemName]}>{item.name}</Text>
          <Text style={[tw`text-black`, styles.price]}>{item.price}</Text>
        </View>
      </View>
      <View style={[tw`absolute -top-8 left-1/2`, styles.imageContainer]}>
        <Image resizeMode='contain' source={item.img} style={[ styles.imageShadow]} />
      </View>
    </TouchableOpacity>
  )
}

export default MenuItemCards

const styles = StyleSheet.create({
  parent: {
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50, // Adjust this value as needed to create space for the image
  },
  imageContainer: {
    transform: [{ translateX: -115 }], // Adjust this value to center the image horizontally
    paddingTop: "5%",

  },
  shadow: {
    // elevation: 10, // For Android
  },
  imageShadow: {
    elevation: 10,
    width: 200,
    height: 150,
    borderRadius: 100, // Makes the image circular
  },
  price: {
    color: Color.orangeColor,
    fontFamily: 'SFProDisplay-Bold',
    marginTop: '7%'
  },
  itemName:{
    fontFamily: 'SFProDisplay-Medium',
    fontSize: 24,
    marginTop: '7%'
  }
})
