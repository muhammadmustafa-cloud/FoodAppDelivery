import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Color from '../Constants/Color'

const LikedItems = () => {
  return (
    <View>
      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 500 }}>
        <MaterialCommunityIcons color={Color.iconColor} name="calendar" size={200} />
        <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Semibold', fontSize: 30, marginBottom: 5 }}>No Order yet</Text>
        <Text style={{ color: Color.iconColor, fontFamily: 'SFProDisplay-Regular', width: '50%', textAlign: 'center' }}>Hit the orange button down
          below to Create an order</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.btnContainer} >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LikedItems

const styles = StyleSheet.create({
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    paddingHorizontal: 100,
    paddingVertical: 20,
    backgroundColor: Color.orangeColor,
    // width: '80%',
    // height: '30%',
    borderRadius: 30,
    marginHorizontal: 'auto'
  },

  btnText: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 18,
    bottom: 0,
    color: Color.white
  }
})