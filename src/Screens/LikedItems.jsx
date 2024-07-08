import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import cartItems from '../../assets/images/cartItems.png'
const LikedItems = () => {
  return (
    <View>
      <View>
        <Image source={cartItems}/>
      </View>
    </View>
  )
}

export default LikedItems

const styles = StyleSheet.create({})