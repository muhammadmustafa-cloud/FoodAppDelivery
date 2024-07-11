import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import food1 from '../../assets/images/item4.png';
import Color from '../Constants/Color';

const FoodItemSlider = () => {
    const flatListRef = useRef();

    const width = Dimensions.get('window').width;
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(()=> {

    })

    const list = [
        { id: 1, img: food1 },
        { id: 2, img: food1 },
        { id: 3, img: food1 },
    ];

    const renderDotIndicator = () => {
        return list.map((dot, index) => {
            if (activeIndex === index) {
                return (
                    <View key={index}
                        style={{ backgroundColor: Color.orangeColor, height: 10, width: 10, borderRadius: 5, marginHorizontal: 4 }}>

                    </View>
                )
            }
            else {
                return (
                    <View key={index} style={{ backgroundColor: Color.iconColor, height: 10, width: 10, borderRadius: 5, marginHorizontal: 4 }}>

                    </View>
                )
            }
        })
    }

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width); // Correct the index calculation
        setActiveIndex(index);
    }

    const renderItem = ({ item, index }) => {
        return (
            <View>
                <Image key={index} source={item.img} style={{ height: 200, width, }} />
            </View>
        )
    }

    return (
        <View>
            <FlatList data={list} ref={flatListRef} onScroll={handleScroll} renderItem={renderItem} horizontal={true} pagingEnabled={true} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, }}>{renderDotIndicator()}</View>
        </View>
    );
};

export default FoodItemSlider;

const styles = StyleSheet.create({

});
