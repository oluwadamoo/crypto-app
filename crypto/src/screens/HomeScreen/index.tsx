import React from 'react'
import { Image } from 'react-native'
import { View, Text } from '../../components/Themed'
import styles from './styles'
const image = require('../../../assets/images/Saly-1.png');

function HomeScreen() {
    return (
        <View style={styles.root}>
            <Image style={styles.image} source={image}/>
            <Text style={ styles.title}>Welcome to Super Crypto</Text>
            <Text style={ styles.sub_title}>Invest your virtual $100.00 and compete with others</Text>
        </View>
        
    )
}

export default HomeScreen
