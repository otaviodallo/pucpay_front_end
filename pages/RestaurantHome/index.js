import React from "react"
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function RestaurantHome() {
    return (
        <>
            <View style={styles.container}>
                <Header />
                <View style={styles.imagePart}>
                    <Image
                        style={styles.mainImage}
                        source={require('../starbuckslogo.jpg')}
                        resizeMode="contain"
                    />
                    <Text>Starbucks</Text>
                </View>
                <View style={styles.infoDrinks}>
                    <Text style={styles.infoDrink}>Bebidas</Text>
                    <TouchableOpacity>
                        <Text style={styles.infoTodosDrink}>Ver todos</Text>
                    </TouchableOpacity>
                </View>
                <View name="Drink" style={styles.drinkCard}>
                    <TouchableOpacity>
                        <Image
                            style={styles.restaurantImage}
                            source={require('../coffe.jpg')}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <Text marginLeft={5} style={styles.nameProduct}>Café 350ml</Text>
                </View>
                <View style={styles.food}>
                    <View style={styles.infoFoods}>
                        <Text style={styles.infoFood}>Comidas</Text>
                        <TouchableOpacity>
                            <Text style={styles.infoTodosFood}>Ver todos</Text>
                        </TouchableOpacity>
                    </View>
                    <View name="Food" style={styles.foodCard}>
                        <TouchableOpacity>
                            <Image
                                style={styles.restaurantImage}
                                source={require('../coxinha.jpg')}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <Text marginLeft={12} style={styles.nameProduct}>Coxinha</Text>
                    </View>
                </View>
            </View>
            <Footer />
        </>
    )
}

export default RestaurantHome;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    imagePart: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    mainImage: {
        width: 170,
        height: 170,
        alignItems: 'center',
        marginTop: -50,
        borderRadius: 100
    },
    infoDrinks: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: "90%",
        alignItems: 'center',
        padding: 35,
        gap: 170,
        marginTop: 5,
    },
    infoDrink: {
        fontSize: 18,
        marginLeft: 15,
        color: 'grey',
        fontWeight: 900
    },
    infoTodosDrink: {
        marginLeft: 50,
        marginRight: -30,
        color: 'grey'
    },
    drinkCard: {
        height: "12.5%",
        width: '20%',
        borderRadius: 40,
        marginLeft: 20,
        marginTop: -10
    },
    drinkImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 50
    },
    restaurantImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 50
    },
    infoFoods: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: "90%",
        alignItems: 'center',
        padding: 40,
        gap: 165,
        marginTop: 10
    },
    infoFood: {
        fontSize: 18,
        marginLeft: 15,
        color: 'grey',
        fontWeight: 900
    },
    infoTodosFood: {
        marginLeft: 50,
        marginRight: -30,
        color: 'grey'
    },
    foodCard: {
        height: "31%",
        width: '20%',
        borderRadius: 40,
        marginLeft: 20,
        marginTop: -20
    },
    food: {
        height: 290,
        marginTop: -20,
    },
    promoCard: {
        height: 100,
        marginTop: -50
    },
    nameProduct: {
        color: 'grey',
        fontWeight: 700
    }
})