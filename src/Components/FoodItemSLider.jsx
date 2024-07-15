import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Color from '../Constants/Color';

const FoodItemSlider = ({ images }) => {
  const flatListRef = useRef();
  const width = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);

  const renderDotIndicator = () => {
    return images.map((dot, index) => {
      if (activeIndex === index) {
        return (
          <View key={index} style={{ backgroundColor: Color.orangeColor, height: 10, width: 10, borderRadius: 5, marginHorizontal: 4 }} />
        );
      } else {
        return (
          <View key={index} style={{ backgroundColor: Color.iconColor, height: 10, width: 10, borderRadius: 5, marginHorizontal: 4 }} />
        );
      }
    });
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={item} style={{ height: 200, width }} />
      </View>
    );
  };

  return (
    <View>
      <FlatList 
        data={images} 
        ref={flatListRef} 
        onScroll={handleScroll} 
        renderItem={renderItem} 
        horizontal={true} 
        pagingEnabled={true} 
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>{renderDotIndicator()}</View>
    </View>
  );
};

export default FoodItemSlider;

const styles = StyleSheet.create({

});
