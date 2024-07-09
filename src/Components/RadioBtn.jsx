import React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Color from '../Constants/Color';

const RadioBtn = () => {
    const [checked, setChecked] = React.useState('first');

    return (
        <View style={{backgroundColor: Color.white, borderRadius: 10}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }}>
                <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                />
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10}}>
                    <View style={{ width: 40, height: 40, backgroundColor: Color.orangeColor, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10, padding: 10 }}>
                        <FontAwesome name="credit-card-alt" color={Color.white} size={20} />
                    </View>
                    <Text style={{fontFamily: 'SFProDisplay-Regular', fontSize: 16}}>Card</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                />
                <Icon name="currency-usd" size={20} />
                <Text>Bank Account</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="third"
                    status={checked === 'third' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('third')}
                />
                <Icon name="account" size={20} />
                <Text>Paypal</Text>
            </View>
        </View>
    );
};

export default RadioBtn;
