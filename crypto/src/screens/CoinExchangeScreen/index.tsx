import { useRoute } from '@react-navigation/native'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Alert, KeyboardAvoidingView } from 'react-native'
import { View, Text, Image, Pressable } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
const image = require('../../../assets/images/Saly-31.png')
import { styles } from './styles'


const CoinExchangeScreen = () => {
    const [coinAmount, setCoinAmount] = useState('');
    const [coinUSDValue, setCoinUSDValue] = useState('');

    useEffect(() => {
        const amount = parseFloat(coinAmount)

        if (!amount && amount !== 0) {
            setCoinAmount('')
            setCoinUSDValue('')
            return;
        }
        setCoinUSDValue((amount * coinData.currentPrice).toString())
    }, [coinAmount])


    const maxUSD = 100000;
    const route = useRoute()
    const { isBuy, coinData } = route.params;


    const onPlaceOrder = () => {
        if (isBuy && parseFloat(coinUSDValue) > maxUSD) {
            Alert.alert('Error', `Not enough USD coins. Max: ${maxUSD}`)
            return;
        }
        if (!isBuy && parseFloat(coinAmount) > coinData.amount) {
            Alert.alert('Error', `Not enough ${coinData.symbol} coin. Max: ${coinData.amount}`)
            return;
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.root}
            behavior={'height'}
            keyboardVerticalOffset={100}
        >
            <Text style={styles.title}>
                {isBuy ? "Buy " : "Sell "}{coinData?.name}
            </Text>
            <Text style={styles.subtitle}>
                1 {coinData?.symbol}
                {' = '}
                ${coinData?.currentPrice}
            </Text>
            <Image style={styles.image} source={image} />

            <View style={styles.inputsContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        keyboardType="decimal-pad"
                        placeholder='0'
                        value={coinAmount}
                        onChangeText={setCoinAmount}
                    />
                    <Text>{coinData.symbol}</Text>
                </View>
                <Text style={{ fontSize: 30 }}>=</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="0"
                        keyboardType="decimal-pad"
                        value={coinUSDValue}
                        onChangeText={setCoinUSDValue}

                    />
                    <Text>USD</Text>

                </View>
            </View>

            <Pressable style={styles.button} onPress={onPlaceOrder}>
                <Text style={styles.buttonText}>Place Order</Text>
            </Pressable>
        </KeyboardAvoidingView>
    )
}

export default CoinExchangeScreen
