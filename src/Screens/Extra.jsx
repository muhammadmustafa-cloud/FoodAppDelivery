import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Color from '../Constants/Color'
import swipeIcon from '../../assets/images/swipeIcon.png'
import group2 from '../../assets/images/group2.png';
import group1 from '../../assets/images/group1.png';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
const Cart = () => {
    const translateX = useSharedValue(0);
    const panGesture = useAnimatedGestureHandler({
        onActive: (event) => {
           translateX.value = event.translationX
        },
        onEnd: () => {
            translateX.value = 0
        },
    }) 

    const rStyle = useAnimatedStyle(()=> ({
        transform: [{
            translateX: translateX.value
        }]
    }))
    return (
        <GestureHandlerRootView>
        <View style={{ flex: 1 }}>
            <View style={{ marginTop: "10%", }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8, marginBottom: "10%" }}>
                    <Image source={swipeIcon} style={{ width: 20, height: 20 }} />
                    <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Light' }}>swipe on an item to delete</Text>
                </View>
                <View style={{ width: '80%', marginHorizontal: 'auto', marginBottom: "5%" }}>
                    <PanGestureHandler onGestureEvent={panGesture}>
                        <Animated.View style={[{ backgroundColor: Color.white, borderRadius: 25, flexDirection: 'row', display: 'flex', alignItems: 'center', height: 140, overflow: 'hidden', paddingRight: 7 }, rStyle]}>
                            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: "15%" }}>
                                <Image source={group2} style={{ width: 110, height: 110, display: 'flex', }} />
                            </View>
                            <View style={{ display: 'flex', gap: 6 }}>
                                <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Bold', fontSize: 18 }}>Veggie tomato mix</Text>
                                <Text style={{ color: Color.orangeColor, fontFamily: 'SFProDisplay-Medium', fontSize: 18 }}>#1,900</Text>
                            </View>
                            <View style={{ backgroundColor: Color.orangeColor, flexDirection: 'row', gap: 8, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 2, borderRadius: 15, position: 'absolute', bottom: 15, right: 15 }}>
                                <Text style={{ fontFamily: 'SFProDisplay-Medium', fontSize: 18, color: Color.white }}>-</Text>
                                <Text style={{ fontFamily: 'SFProDisplay-Medium', fontSize: 18, color: Color.white }}>1</Text>
                                <Text style={{ fontFamily: 'SFProDisplay-Medium', fontSize: 18, color: Color.white }}>+</Text>
                            </View>
                        </Animated.View>
                    </PanGestureHandler>
                </View>
                <View style={{ width: '80%', marginHorizontal: 'auto', marginBottom: "5%" }}>
                    <PanGestureHandler onGestureEvent={panGesture}>
                        <Animated.View style={[{ backgroundColor: Color.white, borderRadius: 25, flexDirection: 'row', display: 'flex', alignItems: 'center', height: 140, overflow: 'hidden', paddingRight: 7 }, rStyle]}>
                            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: "15%" }}>
                                <Image source={group2} style={{ width: 110, height: 110, display: 'flex', }} />
                            </View>
                            <View style={{ display: 'flex', gap: 6 }}>
                                <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Bold', fontSize: 18 }}>Veggie tomato mix</Text>
                                <Text style={{ color: Color.orangeColor, fontFamily: 'SFProDisplay-Medium', fontSize: 18 }}>#1,900</Text>
                            </View>
                            <View style={{ backgroundColor: Color.orangeColor, flexDirection: 'row', gap: 8, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 2, borderRadius: 15, position: 'absolute', bottom: 15, right: 15 }}>
                                <Text style={{ fontFamily: 'SFProDisplay-Medium', fontSize: 18, color: Color.white }}>-</Text>
                                <Text style={{ fontFamily: 'SFProDisplay-Medium', fontSize: 18, color: Color.white }}>1</Text>
                                <Text style={{ fontFamily: 'SFProDisplay-Medium', fontSize: 18, color: Color.white }}>+</Text>
                            </View>
                        </Animated.View>
                    </PanGestureHandler>
                </View>
                
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.btnContainer}>
                <Text style={styles.btnText}>Complete Order</Text>
            </TouchableOpacity>
        </View>
        </GestureHandlerRootView>
    )
}

export default Cart

const styles = StyleSheet.create({
    btnContainer: {
        position: 'absolute',
        left: '10%',
        right: '10%',
        bottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: Color.orangeColor,
        borderRadius: 30,
    },
    btnText: {
        fontFamily: 'SFProDisplay-Bold',
        fontSize: 18,
        color: Color.white,
    }
})