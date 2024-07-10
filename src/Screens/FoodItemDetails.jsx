import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel'
import food2 from '../../assets/images/food1.png'
const FoodItemDetails = () => {
  const width = Dimensions.get('window').width;

  const list = [
    {
      id: 1,
      img: food2,
    },
    {
      id: 2,
      img: food2,
    },
    {
      id: 3,
      img: food2,
    },
  ]
  return (
    <View style={{flex: 1}}>
      <View>
        <View>
            <Carousel 
            width={width}
            height={width/2}
            data={list}
            autoPlay={true}
            // pagingEnabled={}
            renderItem={({item}) => (
              <View style={styles.carouselImg}>
                <Image style={styles.img} source={item.img} />
              </View>
            )}
            />
        </View>
      </View>
    </View>
  )
}

export default FoodItemDetails

const styles = StyleSheet.create({
  carouselImg:{
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden'
  },
  img:{
    width: "60%",
    height: '100%'
  }
})