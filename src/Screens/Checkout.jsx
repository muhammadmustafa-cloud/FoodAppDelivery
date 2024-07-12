import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Color from '../Constants/Color'
import DeliveryMethod from '../Components/DeliveryMethod'
import RadioBtn from '../Components/RadioBtn'

const Checkout = ({ navigation }) => {
    const [btnClicked, setBtnClicked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const processBtn = () => {
        if (btnClicked) {
            setModalVisible(true);
        } else {
            setBtnClicked(true);
        }
    };

    const modalBox = () => {
        return (
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={{ backgroundColor: "#EDEDED", paddingVertical: "5%" }}>
                            <Text style={{ color: Color.black }}>Please note</Text>
                        </View>
                        <View>
                            <Text style={{ color: Color.iconColor, textTransform: 'uppercase' }}>Delivery to Mainland</Text>
                            <Text style={{ color: Color.black }}> N1000 - N2000</Text>
                        </View>
                        <View>
                            <Text style={{ color: Color.iconColor, textTransform: 'uppercase' }}>Delivery to island</Text>
                            <Text style={{ color: Color.black }}> N2000 - N3000</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                        <TouchableOpacity>
                            <Text style={{color:Color.iconColor}}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={{color:Color.iconColor}}>Proceed</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            {modalBox()}
            <View style={{ marginHorizontal: 'auto', width: "80%", marginTop: "3%", display: 'flex', justifyContent: 'center', marginVertical: '10%' }}>
                <Text style={{ fontFamily: 'SFProDisplay-Medium', fontSize: 28, color: Color.black, marginBottom: "3%" }}>{!btnClicked ? 'Delivery' : 'Payment'}</Text>
                <View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5, marginTop: "5%", marginBottom: '4%' }}>
                        <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Medium' }}>{!btnClicked ? 'Address Details' : 'Payment method'}</Text>
                        <Text style={{ color: Color.orangeColor, fontFamily: 'SFProDisplay-Medium' }}>{!btnClicked ? 'change' : ''}</Text>
                    </View>
                    {
                        !btnClicked ?
                            <View style={{ backgroundColor: Color.white, display: 'flex', flexDirection: 'column', gap: 10, paddingVertical: 20, paddingHorizontal: 20, borderRadius: 15, marginBottom: "8%" }}>
                                <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Medium', fontSize: 18, borderBottomWidth: 1, paddingBottom: "3%", borderColor: Color.grayColor }}>Marvis Ighedosa</Text>
                                <Text style={{ color: Color.black, width: "85%", letterSpacing: 0.3, borderBottomWidth: 1, paddingBottom: "3%", borderColor: Color.grayColor, }}>Km 5 refinery road oppsite re
                                    public road, effurun, delta state</Text>
                                <Text style={{ color: Color.black, letterSpacing: 0.5, width: "50%", }}>+234 9011039271</Text>
                            </View>
                            :
                            <RadioBtn />
                    }
                </View>
                <View style={{}}>
                    <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Medium', paddingBottom: 15, marginTop: !btnClicked ? '' : '4%' }}>Delivery method.</Text>
                    <DeliveryMethod />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: !btnClicked ? '20%' : '5%' }}>
                    <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Regular', fontSize: 17 }}>Total</Text>
                    <Text style={{ color: Color.black, fontFamily: 'SFProDisplay-Bold', fontSize: 20 }}>23,000</Text>
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={processBtn} style={styles.btnContainer}>
                <Text style={styles.btnText}>Proceed to payment</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Checkout

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
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        // width: 200,
        // height: 200,
        backgroundColor: Color.white,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 10,
    },
    modalCloseBtn: {
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: Color.black,
        borderRadius: 5,
    },
});
