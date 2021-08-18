import React from 'react'
import { View, Text } from '../../components/Themed'
import { Image } from 'react-native'
import styles from './styles'
import { FlatList } from 'react-native-gesture-handler';
import MarketCoin from '../../components/MarketCoin';
import UserRankingItem from '../../components/UserRankingItem';
const image = require('../../../assets/images/Saly-22.png');

const userRanking = [
    {
        id: '1',
        name: 'Virtual Dollars',
        image:'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        netWorth: 69420,
    },
    {
        id: '2',
        name: 'Bitcoin',
        image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        netWorth: 59420,
    },
    {
        id: '3',
        name: 'Etherium',
        image:'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        
        netWorth: 30120,
    },
]
function RankingScreen() {
    return (
        <View style={styles.root}>
            
            <FlatList
                style={{width:'100%'}}
                data={userRanking}
                renderItem={({ item, index }) => <UserRankingItem place={ index + 1} user={item}/>}
              showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle={{ alignItems: 'center' }}
                ListHeaderComponent={() => (
              
                    <>
            <Image style={styles.image} source={image}/>
           
            
                <Text style={styles.label}>Rankings</Text>
            
</>
          )}
            />
        </View>
    )
}

export default RankingScreen
