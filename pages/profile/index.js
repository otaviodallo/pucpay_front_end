import React from 'react';
import { StyleSheet, StatusBar, View, TouchableOpacity, Image, Text, Button } from 'react-native';
import { AntDesign, Feather, Ionicons, MaterialIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

function Profile() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity>
                        <Ionicons name="arrow-back" size={31} color="grey" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonUser}>
                        <Feather name="edit" size={30} color="grey" marginRight={13} />
                    </TouchableOpacity>
                </View>
                <View style={styles.profile}>
                    <Image
                        style={styles.profileImage}
                        source={require('../eu.jpg')}
                        resizeMode="contain"
                    />
                    <View style={styles.names}>
                        <Text style={styles.profileName}>Otávio Costa Dallo</Text>
                        <Text style={styles.profileCity}>Curitiba - PR</Text>
                    </View>
                </View>
                <View style={styles.status}>
                    <View style={styles.statusTexts}>
                        <View style={styles.text}>
                            <Text style={styles.textWord}>Saldo</Text>
                            <Text style={styles.text}>R$0</Text>
                        </View>
                        <View style={styles.text}>
                            <Text style={styles.textWord}>Gastos</Text>
                            <Text style={styles.text}>R$0</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.menuPerfil}>
                    <TouchableOpacity style={styles.buttons}>
                        <AntDesign name="user" size={28} color="grey" />
                        <Text style={styles.buttonsPerfil}>Informação pessoal</Text>
                        <AntDesign name="arrowright" size={24} color="grey" marginLeft={63}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <FontAwesome name="money" size={28} color="grey" />
                        <Text style={styles.buttonsPerfil}>Adicionar saldo</Text>
                        <AntDesign name="arrowright" size={24} color="grey" marginLeft={101}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <AntDesign name="shoppingcart" size={28} color="grey" />
                        <Text style={styles.buttonsPerfil}>Seus Pedidos</Text>
                        <AntDesign name="arrowright" size={24} color="grey" marginLeft={120}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons}>
                        <MaterialIcons name="payment" size={28} color="grey" />
                        <Text style={styles.buttonsPerfil}>Métodos de pagamento</Text>
                        <AntDesign name="arrowright" size={24} color="grey" marginLeft={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLogout}>
                        <FontAwesome5 name="power-off" size={28} color="grey" />
                        <Text style={styles.buttonsPerfil}>Deslogar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity><AntDesign name="home" size={35} color="grey"/></TouchableOpacity>
                    <TouchableOpacity><AntDesign name="shoppingcart" size={35} color="grey"/></TouchableOpacity>
                    <TouchableOpacity><Ionicons name="notifications-outline" size={35} color="grey"/></TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 60,
        backgroundColor: 'white'
    },
    content: {
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: statusBarHeight - 30,
        paddingStart: 14,
        paddingEnd: 14,
        paddingBottom: 20
    },
    username: {
        fontSize: 18,
        color: 'grey',
        fontWeight: 'bold',
        marginLeft: 55,
    },
    profile: {
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: 170,
        height: 170,
        borderRadius: 100
    },
    names: {
        alignItems: 'center',
        marginTop: 20
    },
    profileName: {
        color: '#2F4F4F',
        fontSize: 25,
        fontWeight: 700
    },
    profileCity: {
        color: '#2F4F4F',
        fontSize: 17,
        fontWeight: 400
    },
    status: {
        marginTop: 60,
        alignItems: 'center',
        height: 90,
        gap: 0,
        fontSize: 20
    },
    statusTexts: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        gap: 80,
        backgroundColor: '#2F4F4F',
        borderRadius: 20,
        padding: 30,
    },
    text: {
        alignItems: 'center',
        fontSize: 16,
        color: 'white',
        fontWeight: 900
    },
    textWord: {
        alignItems: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: 900
    },
    buttons: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: '2F4F4F',
        maxWidth: 310,
        alignItems: 'center'
    },
    buttonsPerfil: {
        fontSize: 20,
        color: '#2F4F4F',
        fontWeight: 400
    },
    menuPerfil: {
        marginLeft: 40,
        gap: 5,
        marginTop: -30
    },
    buttonLogout:{
        flexDirection: 'row',
        gap: 10,
        maxWidth: 300,
        alignItems: 'center',
        marginTop: 5
    },
    footer: {
        backgroundColor: 'white',
        height: 95,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        gap: 70,
        marginTop: -25,
        borderTopWidth: 2,
        borderColor: 'grey'
    },
    
})
export default Profile;