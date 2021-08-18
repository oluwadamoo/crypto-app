import React from 'react'
import { View, Text } from '../../components/Themed'
import { Image } from 'react-native'
import styles from './styles'
import { FlatList } from 'react-native-gesture-handler';
import PortfolioCoin from '../../components/PortfolioCoin';
import MarketCoin from '../../components/MarketCoin';
const image = require('../../../assets/images/Saly-17.png');

const marketCoins = [
    {
        id: '1',
        name: 'Virtual Dollars',
        image:'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        symbol: 'USD',
        valueChange24H: 69.420,
        valueUSD: 69420,
    },
    {
        id: '2',
        name: 'Bitcoin',
        image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        symbol: 'BTC',
        valueChange24H: 1.12,
        valueUSD: 59420,
    },
    {
        id: '3',
        name: 'Etherium',
        image:'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        symbol: 'ETH',
        valueChange24H: 30,
        valueUSD: 30120,
    },
    {
        id: '4',
        name: 'Etherium',
        image:'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        symbol: 'ETH',
        valueChange24H: 30,
        valueUSD: 30120,
    },
    {
        id: '5',
        name: 'Etherium',
        image:'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        symbol: 'ETH',
        valueChange24H: 30,
        valueUSD: 30120,
    },
    {
        id: '6',
        name: 'Etherium',
        image:'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        symbol: 'ETH',
        valueChange24H: 30,
        valueUSD: 30120,
    },
    {
        id: '7',
        name: 'Etherium',
        image:'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        symbol: 'ETH',
        valueChange24H: 30,
        valueUSD: 30120,
    },
    {
        id: '8',
        name: 'Etherium',
        image:'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        symbol: 'ETH',
        valueChange24H: -30,
        valueUSD: 30120,
    },
    {
        id: '9',
        name: 'Etherium',
        image:'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        symbol: 'ETH',
        valueChange24H: 30,
        valueUSD: 30120,
    },
    {
        id: '10',
        name: 'Etherium',
        image:'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        symbol: 'ETH',
        valueChange24H: 30,
        valueUSD: 30120,
    },
    {
        id: '11',
        name: 'Etherium',
        image:'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        symbol: 'ETH',
        valueChange24H: 30,
        valueUSD: 30120,
    },
    {
        id: '12',
        name: 'Etherium',
        image:'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        symbol: 'ETH',
        valueChange24H: 30,
        valueUSD: 30120,
    },
]
function PortfolioScreen() {
    return (
        <View style={styles.root}>
            
            <FlatList
                style={{width:'100%'}}
                data={marketCoins}
                renderItem={({ item }) => <MarketCoin marketCoin={item}/>}
              showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle={{ alignItems: 'center' }}
                ListHeaderComponent={() => (
              
                    <>
            <Image style={styles.image} source={image}/>
           
            
                <Text style={styles.label}>Market</Text>
            
</>
          )}
            />
        </View>
    )
}

export default PortfolioScreen
