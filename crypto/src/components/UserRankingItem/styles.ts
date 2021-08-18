import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        alignItems: 'center',
        marginVertical: 10
    },
    image: {
        height: 50,
        width: 50,
       marginRight:10
    },
    left:{
        flexDirection: 'row',
        alignItems:'center'
    },
    name: {
        fontWeight: 'bold',
        marginBottom:5
    },
    value: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom:5
    },
     place: {
        fontSize: 18,
        fontWeight: 'bold',
        width: 20,
    }
})


export default styles