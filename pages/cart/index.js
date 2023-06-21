import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Ionicons, AntDesign } from '@expo/vector-icons'
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

function Cart() {
    const navigation = useNavigation();

    const navigateToHome = () => {
        navigation.goBack()
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={navigateToHome}>
                        <Ionicons name="arrow-back" size={30} color="grey" />
                    </TouchableOpacity>
                    <Text style={styles.username}>Carrinho</Text>
                </View>
            </View>
            <View style={styles.products}>
                <View style={styles.productCard}>
                    <Image
                        style={styles.restaurantImage}
                        source={require('../coffe.jpg')}
                        resizeMode="contain"
                    />
                <View>
                    <Text style={styles.productDescription}>Café 350ml</Text>
                    <Text style={styles.productDescription} marginTop={10}>R$7.50</Text>
                </View>
                <View style={styles.addProduct}>
                    <TouchableOpacity>
                        <AntDesign name="pluscircle" size={26} color="black" />
                    </TouchableOpacity>
                    <Text>0</Text>
                    <TouchableOpacity>
                        <AntDesign name="minuscircle" size={26} color="black" />   
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            <View style={styles.payment}>
                <View style={styles.total}>
                    <View style={styles.totalTaxDiv}>
                        <View style={styles.totalDivs}>
                            <Text>Subtotal</Text>
                            <Text>R$ 7.50</Text>
                        </View>
                        <View style={styles.totalDivs}>
                            <Text>Taxa</Text>
                            <Text marginLeft={23}>R$ 0.50</Text>
                        </View>
                    <View style={styles.totalDivs} marginTop={30}>
                        <Text>Total</Text>
                        <Text marginLeft={23}>R$8.00</Text> 
                    </View>
                    </View>
                </View>
                <View style={styles.confirmPayment}>
                    <View>
                        <Text style={styles.paymentChoose}>Formas de pagamento</Text>
                        <Text style={styles.paymentOption}>Cartão de Crédito</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text>Trocar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonConfirm}>
                    <Text>Confirmar Pagamento</Text>
                </TouchableOpacity>
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
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username: {
        fontSize: 20,
        color: 'grey',
        fontWeight: 'bold',
        marginLeft: 113,
    },
    productCard: {
       backgroundColor: '#D5DBDB',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
       gap: 110,
       borderRadius: 20,
       width: 380,
       marginLeft: 6.5
    },
    restaurantImage:{
        width: 70,
        height: 100,
    },
    addProduct:{
        flexDirection: 'row',
        gap: 5,

    },
    productDescription:{
        fontSize: 17,
        color: 'black',
        marginLeft: -105
    },
    products: {
        height: 450
    },
    total: {
        backgroundColor:'#D5DBDB',
        width: 380,
        marginLeft: 6.5,
        borderRadius: 10
    },  
    totalDivs: {
        flexDirection: 'row',
        gap: 270,
    },
    totalTaxDiv:{
        padding: 5
    },
    confirmPayment:{
        padding: 5,
        backgroundColor:'#D5DBDB',
        marginTop: 10,
        width: 380,
        marginLeft: 6.5,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    paymentChoose:{
        fontSize: 18
    },
    paymentOption: {
        fontWeight: 300,
        marginLeft: 35
    },
    buttonConfirm:{
        width: 380,
        alignItems: 'center',
        backgroundColor: 'grey',
        marginLeft: 6.5,
        height: 35,
        marginTop: 10,
        borderRadius: 15,
        justifyContent:'center'
    }
})


export default Cart;