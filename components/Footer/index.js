import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native';

function Footer() {
    const navigation = useNavigation()
    const goToHome = () => {
        navigation.navigate('Home')
    }

    return(
        <View style={styles.footer}>
            <TouchableOpacity onPress={goToHome}><AntDesign name="home" size={35} color="grey" /></TouchableOpacity>
            <TouchableOpacity><AntDesign name="shoppingcart" size={35} color="grey" /></TouchableOpacity>
            <TouchableOpacity><Ionicons name="notifications-outline" size={35} color="grey" /></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'white',
        height: 95,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: -25,
        justifyContent: 'center',
        gap: 70,
        borderTopWidth: 1.5,
        borderColor: 'grey'
    },
})

export default Footer