import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import Color from '../Constants/Color';
import swipeIcon from '../../assets/images/swipeIcon.png';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming, runOnJS } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../redux/action/Action';
import Dimension from '../Constants/Dimension';
import Header from '../Components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const SwipeableItem = ({ item, index, onDelete }) => {
    const [count, setCount] = useState(1)
    const translateX = useSharedValue(0);
    const itemHeight = useSharedValue(130);
    const viewMarginBottom = useSharedValue('5%');
    const opacity = useSharedValue(1);
    const translate_X_threshold = -screenWidth * 0.3;

    const panGesture = useAnimatedGestureHandler({
        onActive: (event) => {
            translateX.value = event.translationX;
        },
        onEnd: () => {
            const shouldBeDismissed = translateX.value < translate_X_threshold;
            if (shouldBeDismissed) {
                translateX.value = withTiming(-screenWidth);
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
    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <Animated.View style={[styles.swipeableItemContainer, rTaskContainerStyle]}>
            <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
                <AntDesign style={styles.icon} name="heart" size={30} color={Color.white} />
            </Animated.View>
            <PanGestureHandler onGestureEvent={panGesture}>
                <Animated.View style={[styles.item, rStyle]}>
                    <View style={styles.imageContainer}>
                        <Image source={item.img} style={styles.itemImage} />
                    </View>
                    <View style={styles.itemDetails}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemPrice}>{item.price}</Text>
                    </View>
                    <View style={styles.itemActions}>
                    <TouchableOpacity onPress={handleDecrement}>
                            <Text style={styles.actionText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.actionText}>{count}</Text>
                        <TouchableOpacity onPress={handleIncrement}>
                            <Text style={styles.actionText}>+</Text>
                        </TouchableOpacity>
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
        dispatch(removeItemFromCart(index));
    };

    const handleDeleteItem = (index) => {
        removeItem(index);
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
                <Header 
                leftIcon={{
                    component: <MaterialIcons name="keyboard-arrow-left" size={33} color={Color.black} />,
                    onPress: () => navigation.goBack()
                }}
                title={"Cart"}
                />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={swipeIcon} style={styles.swipeIcon} />
                    <Text style={styles.headerText}>Swipe on an item to delete</Text>
                </View>
                <FlatList
                    data={itemsCart}
                    renderItem={({ item, index }) => (
                        <SwipeableItem item={item} index={index} onDelete={handleDeleteItem} />
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.flatListContent}
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
    container: {
        flex: 1,
        paddingHorizontal: '5%',
        paddingTop: '10%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        marginBottom: '5%',
    },
    swipeIcon: {
        width: 20,
        height: 20,
    },
    headerText: {
        color: Color.black,
        fontFamily: 'SFProDisplay-Light',
    },
    flatListContent: {
        alignItems: 'center',
        paddingBottom: 100,
    },
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
    swipeableItemContainer: {
        width: '80%',
        marginHorizontal: 'auto',
        display: 'flex',
        justifyContent: 'center',
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
    item: {
        backgroundColor: Color.white,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        height: Dimension.windowHeight/6,
        width: '100%',
        overflow: 'hidden',
        paddingRight: 7,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemImage: {
        width: 110,
        height: 80,
    },
    itemDetails: {
        flex: 1,
        paddingHorizontal: 10,
    },
    itemName: {
        color: Color.black,
        fontFamily: 'SFProDisplay-Bold',
        fontSize: 18,
    },
    itemPrice: {
        color: Color.orangeColor,
        fontFamily: 'SFProDisplay-Medium',
        fontSize: 18,
    },
    itemActions: {
        backgroundColor: Color.orangeColor,
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 15,
        position: 'absolute',
        bottom: 15,
        right: 15,
    },
    actionText: {
        fontFamily: 'SFProDisplay-Medium',
        fontSize: 18,
        color: Color.white,
    },
});
