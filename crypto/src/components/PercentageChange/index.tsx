import React from 'react'
import { View, Text } from 'react-native'

interface PercentageChangeProps{
    value: number,
    style?: object
}
const PercentageChange = ({value, style= {}}: PercentageChangeProps) => {
    return (
        <View>
            <Text style={{ color: value > 0 ? "#4bdb00" : "#f10000" }}>
                {value > 0 && "+"}{value}%
            </Text>
            
        </View>
    )
}

export default PercentageChange
