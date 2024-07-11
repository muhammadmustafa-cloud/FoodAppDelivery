import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Color from '../Constants/Color'
import swipeIcon from '../../assets/images/swipeIcon.png'
import group2 from '../../assets/images/group2.png';
import group1 from '../../assets/images/group1.png';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Cart = () => {
    const width = Dimensions.get('window').width;
    const translateX = useSharedValue(0);
    const itemHeight = useSharedValue(130);
    const translate_X_threshold = -width * .3;
    const opacity = useSharedValue(1);
    const panGesture = useAnimatedGestureHandler({
        onActive: (event) => {
            translateX.value = event.translationX
        },
        onEnd: () => {
            const shouldBeDismissed = translateX.value < translate_X_threshold;
            if (shouldBeDismissed) {
                translateX.value = withTiming(-width)
                itemHeight.value = withTiming(0)
                opacity.value = withTiming(0)
            }
            else {
                translateX.value = withTiming(0)
            }
        },
    })

    const rStyle = useAnimatedStyle(() => ({
        transform: [{
            translateX: translateX.value
        }]
    }))

    const rIconContainerStyle = useAnimatedStyle(() => {
        const opacity = withTiming(translateX.value < translate_X_threshold ? 1 : 0);
        return { opacity }
    })

    const rtaskContainerStyle = useAnimatedStyle(() => {
        return {
            height: itemHeight.value,
            opacity: opacity.value

        }
    })
    return (
        <GestureHandlerRootView>
            <View style={{ flex: 1 }}>
                <View style={{ marginTop: "10%", }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8, marginBottom: "10%" }}>
                        <Image source={swipeIcon} style={{ width: 20, height: 20 }} />
                        <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Light' }}>swipe on an item to delete</Text>
                    </View>
                    <Animated.View style={[{ width: '80%', marginHorizontal: 'auto', marginBottom: "5%", display: 'flex', justifyContent: 'center' }, rtaskContainerStyle]}>
                        <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
                            <AntDesign style={styles.icon} name="heart" size={30} color={Color.white} />
                        </Animated.View>
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

                    </Animated.View>
                    <View style={{ width: '80%', marginHorizontal: 'auto', marginBottom: "5%" }}>
                        <PanGestureHandler >
                            <Animated.View style={[{ backgroundColor: Color.white, borderRadius: 25, flexDirection: 'row', display: 'flex', alignItems: 'center', height: 140, overflow: 'hidden', paddingRight: 7 },]}>
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
    },
    iconContainer: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
        position: 'absolute',
        right: "4%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,



    }
})