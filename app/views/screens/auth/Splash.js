import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import BaseView from '../../hoc/BaseView'
import { colors } from '../../../values/colors'
import { useDispatch } from 'react-redux'
import { images } from '../../../assets/images'


const Splash = props => {

    const baseViewRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        
        _navigateTo()
        return () => {
            
        };
    }, [])


    const _navigateTo = async() => {
        props.navigation.navigate('Dashboard')
     }

    return (
        <BaseView
            ref={baseViewRef}
        >
        <View style={styles.parent}>
            <Image 
                source={images.logo}
                style={styles.logo}
                resizeMode={'contain'}
            />
            {/* <Text style={[styles.heading]}>{APP_NAME}</Text> */}
        </View>
        </BaseView>
    )
}

export default Splash

const styles = StyleSheet.create({
    parent : {
        flex:1,
        backgroundColor:'#F7F7F7',
        paddingHorizontal:16,
        paddingBottom:48,
        alignItems:'center',
        justifyContent: 'center'
    },
    logo : {
        height:196,
        width:'80%',
        marginLeft:16
    },
    heading : {
        fontSize:32,
        color:colors.primary,
        marginTop:16
    },
   
})