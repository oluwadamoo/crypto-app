
import { StyleSheet, Dimensions } from 'react-native'


const styles = StyleSheet.create({
    root: {
        padding: 20,
        alignItems: 'center',
        flex: 1,
        backgroundColor:'white'
    },
    image: {
        height: Dimensions.get('screen').height / 2,
        aspectRatio: 1
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom:15
    },
    sub_title: {
        fontSize: 20,
        textAlign: 'center',
        color:'#707070'
    }
})

export default styles