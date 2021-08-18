import {StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
     userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        alignItems: 'center',
         marginVertical: 10,
        width:'100%'
    },
   userImage: {
        height: 90,
       width: 90,
        borderRadius: 45,
       marginRight:15
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
        fontWeight: 'bold',
        marginBottom:5
    },
    email: {
        
    }
})