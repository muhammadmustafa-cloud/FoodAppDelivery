import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import Color from '../Constants/Color';
import swipeIcon from '../../assets/images/swipeIcon.png';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming, runOnJS } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../redux/action/Action';

const SwipeableItem = ({ item, index, onDelete }) => {
    const width = Dimensions.get('window').width;
    const translateX = useSharedValue(0);
    const itemHeight = useSharedValue(130);
    const viewMarginBottom = useSharedValue("5%");
    const opacity = useSharedValue(1);
    const translate_X_threshold = -width * 0.3;

    const panGesture = useAnimatedGestureHandler({
        onActive: (event) => {
            translateX.value = event.translationX;
        },
        onEnd: () => {
            const shouldBeDismissed = translateX.value < translate_X_threshold;
            if (shouldBeDismissed) {
                translateX.value = withTiming(-width);
                itemHeight.value = withTiming(0);
                viewMarginBottom.value = withTiming(0);
                opacity.value = withTiming(0, {}, (isFinished) => {
                    if (isFinished) {
                        runOnJS(onDelete)(index);
                    }
                });
            } else {
                translateX.value = withTiming(0);
            }
        },
    });

    const rStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    const rIconContainerStyle = useAnimatedStyle(() => {
        const iconOpacity = withTiming(translateX.value < translate_X_threshold ? 1 : 0);
        return { opacity: iconOpacity };
    });

    const rTaskContainerStyle = useAnimatedStyle(() => {
        return {
            height: itemHeight.value,
            marginBottom: viewMarginBottom.value,
            opacity: opacity.value,
        };
    });

    return (
        <Animated.View style={[{ width: '80%', marginHorizontal: 'auto', display: 'flex', justifyContent: 'center' }, rTaskContainerStyle]}>
            <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
                <AntDesign style={styles.icon} name="heart" size={30} color={Color.white} />
            </Animated.View>
            <PanGestureHandler onGestureEvent={panGesture}>
                <Animated.View style={[{ backgroundColor: Color.white, borderRadius: 25, flexDirection: 'row', display: 'flex', alignItems: 'center', height: 140, width: 270 ,overflow: 'hidden', paddingRight: 7 }, rStyle]}>
                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  }}>
                        <Image source={item.img} style={{ width: 110, height: 80, display: 'flex' }} />
                    </View>
                    <View style={{ display: 'flex', gap: 6 }}>
                        <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Bold', fontSize: 18 }}>{item.name}</Text>
                        <Text style={{ color: Color.orangeColor, fontFamily: 'SFProDisplay-Medium', fontSize: 18 }}>{item.price}</Text>
                    </View>
                    <View style={{ backgroundColor: Color.orangeColor, flexDirection: 'row', gap: 8, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, paddingVertical: 2, borderRadius: 15, position: 'absolute', bottom: 15, right: 15 }}>
                        <Text style={{ fontFamily: 'SFProDisplay-Medium', fontSize: 18, color: Color.white }}>-</Text>
                        <Text style={{ fontFamily: 'SFProDisplay-Medium', fontSize: 18, color: Color.white }}>1</Text>
                        <Text style={{ fontFamily: 'SFProDisplay-Medium', fontSize: 18, color: Color.white }}>+</Text>
                    </View>
                </Animated.View>
            </PanGestureHandler>
        </Animated.View>
    );
};

const Cart = ({ navigation }) => {
    const itemsCart = useSelector(state => state);
    const dispatch = useDispatch();

    const removeItem = (index) => {
        dispatch(removeItemFromCart(index))
    }

    const handleDeleteItem = (index) => {
        removeItem(index);
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingHorizontal: '10%', paddingTop: '10%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8, marginBottom: '10%' }}>
                    <Image source={swipeIcon} style={{ width: 20, height: 20 }} />
                    <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Light' }}>Swipe on an item to delete</Text>
                </View>
                <FlatList
                    data={itemsCart}
                    renderItem={({ item, index }) => (
                        <SwipeableItem item={item} index={index} onDelete={handleDeleteItem} />
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ alignItems: 'center', paddingBottom: 100 }} // Added paddingBottom
                />
                <TouchableOpacity onPress={() => navigation.navigate('Checkout')} activeOpacity={0.8} style={styles.btnContainer}>
                    <Text style={styles.btnText}>Complete Order</Text>
                </TouchableOpacity>
            </View>
        </GestureHandlerRootView>
    );
};

export default Cart;

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
        right: '4%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
});
