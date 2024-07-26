import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Color from '../Constants/Color'

const { width, height } = Dimensions.get('window');

const MenuItemCards = ({ item, navigation, parentHeight = height * 0.3, parentWidth = width * 0.45, imageHeight = height * 0.2, imageWidth = width * 0.5 }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.touchable}
      onPress={() => navigation.navigate('FoodItemDetails', { item })}
    >
      <View style={[styles.parent, { height: parentHeight, width: parentWidth }]}>
        <View style={styles.textContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
      <View style={styles.absoluteImage}>
        <Image
          resizeMode='contain'
          source={item.img}
          style={[styles.imageShadow, { height: imageHeight, width: imageWidth }]}
        />
      </View>
    </TouchableOpacity>
  )
}

export default MenuItemCards

const styles = StyleSheet.create({
  touchable: {
    height: height * 0.4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#393939'
  },
  parent: {
    marginVertical: height * 0.02,
    marginRight: width * 0.06,
    padding: height * 0.015,
    paddingVertical: height * 0.025,
    borderRadius: 24,
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: height * 0.06,
    elevation: 8,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.01,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemName: {
    fontFamily: 'SFProDisplay-Medium',
    fontSize: width * 0.05,
    marginTop: height * 0.02,
    color: 'black',
    textAlign: 'center',
  },
  price: {
    color: Color.orangeColor,
    fontFamily: 'SFProDisplay-Bold',
    marginTop: height * 0.01,
    textAlign: 'center',
  },
  absoluteImage: {
    position: 'absolute',
    top: -height * 0.03,
    left: '45%',
    zIndex: 1,
    transform: [{ translateX: -width * 0.25 }],
    paddingTop: '5%',
  },
  imageShadow: {
    elevation: 10,
    borderRadius: 100,
  },
})
