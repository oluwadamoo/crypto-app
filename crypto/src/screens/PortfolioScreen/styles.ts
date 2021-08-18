import { StyleSheet, Dimensions } from 'react-native'


const styles = StyleSheet.create({
    root: {
        padding: 20,
        alignItems: 'center',
        flex: 1,
        backgroundColor:'white'
    },
    image: {
        height: 200,
        resizeMode: 'contain'
        // height: Dimensions.get('screen').height / 2,
        // aspectRatio: 1
    },
    balanceContainer: {
        width: '100%',
        marginVertical: 20,
        justifyContent: 'center',
        alignItems:'center'
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#777777'
    },
    balance: {
        fontSize: 36,
        fontWeight:'bold'
        
    }

})

export default styles