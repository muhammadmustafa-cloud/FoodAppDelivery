import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import menu from '../../assets/images/menu.png'
import cart from '../../assets/images/cart.png'
import Color from '../Constants/Color'

const Header = ({ title, onPress }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={styles.iconContainer} onPress={()=> navigation.toggleDrawer()}>
                    <Image
                        resizeMode='contain'
                        style={styles.menu}
                        source={menu}
                    />
                </TouchableOpacity>
                <Text style={{
                    marginLeft: 12,
                    fontSize: 17,
                    fontWeight: 'bold'
                }}> {title} </Text>
            </View>
            <TouchableOpacity style={styles.iconContainer} onPress={()=> navigation.navigate('Cart')}>
                    <Image
                        resizeMode='contain'
                        style={[styles.menu, {tintColor:Color.iconColor}]}
                        source={cart}
                    />
                </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 16
    },
    iconContainer: {
        height: 45,
        width: 45,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.grayColor
    },
    menu: {
        height: 35,
        width: 35,
        tintColor: Color.black
    }
})