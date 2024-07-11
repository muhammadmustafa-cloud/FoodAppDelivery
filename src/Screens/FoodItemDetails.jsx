import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FoodItemSlider from '../Components/FoodItemSLider';
import Color from '../Constants/Color';


const FoodItemDetails = ({navigation}) => {
    const width = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <FoodItemSlider />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Veggie tomato mix</Text>
                <Text style={styles.price}>₦1,900</Text>
                <Text style={styles.infoTitle}>Delivery info</Text>
                <Text style={styles.infoText}>Delivered between Monday Aug and Thursday 20 from 8pm to 9:32 pm</Text>
                <Text style={styles.infoTitle}>Return policy</Text>
                <Text style={styles.infoText}>All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</Text>
            </View>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.btnContainer}>
                    <Text style={styles.btnText}>Add to cart</Text>
                </TouchableOpacity>
        </View>
    );
};

export default FoodItemDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    sliderContainer: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        // marginTop: 20,
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        // marginVertical: 10,
    },
    price: {
        fontSize: 22,
        color: '#FF5733',
        // marginVertical: 10,
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    infoText: {
        fontSize: 14,
        color: '#777',
        marginVertical: 5,
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
});
