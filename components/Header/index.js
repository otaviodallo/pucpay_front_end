import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AntDesign, FontAwesome } from '@expo/vector-icons'
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

function Header({ name }) {
    const navigation = useNavigation();
      
    const navigateToRegistro = () => {
      navigation.navigate('Profile');
    }


    return (
    <>
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity>
                    <Text style={styles.username}>{name}</Text>
                    <AntDesign name="menuunfold" size={24} color="grey" marginTop={-23} marginLeft={20}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <FontAwesome name="user-circle" size={30} color="grey" marginRight={13} onPress={navigateToRegistro}/>
                </TouchableOpacity>
            </View>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username: {
        fontSize: 18,
        color: 'grey',
        fontWeight: 'bold',
        marginLeft: 55,
    },
})

export default Header;