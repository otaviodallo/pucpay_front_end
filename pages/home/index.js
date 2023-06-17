import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar,Image } from 'react-native';
import Header from '../../components/Header'


import { AntDesign, FontAwesome } from '@expo/vector-icons'
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

function Home() {
    return (
        <View style={styles.container}>
            <Header name="Início" />
            <View style={styles.search}>
                <TextInput style={styles.inputSearch} placeholder="Procurar Restaurante" marginRight={-15} />
                <TouchableOpacity activeOpacity={0.9}>
                    <AntDesign name="search1" size={45} color="white" marginLeft={4}
                        backgroundColor='grey' borderWidth={2} />
                </TouchableOpacity>
            </View>
            <View style={styles.info}>
                <Text style={styles.infoRestaurante}>Restaurantes populares</Text>
                <TouchableOpacity>
                    <Text style={styles.infoTodos}>Ver todos</Text>
                </TouchableOpacity>
            </View>
            <View name="Restaurant" style={styles.restaurantCard}>
                <Image 
                style={styles.restaurantImage}
                source={require('../thedripper.png')}
                resizeMode="contain"
                />
                <Text marginLeft={5}>The Dripper</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    },
    search: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputSearch: {
        width: "70%",
        borderRadius: 15,
        borderWidth: 2,
        height: 50,
        borderColor: 'grey'
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: "90%",
        alignItems: 'center',
        padding: 40,
        gap: 80,
    },
    infoRestaurante: {
        fontSize: 18,
        marginLeft: 25,
        color: 'grey',
        fontWeight: 800
    },
    infoTodos: {
        marginLeft: 30,
        marginRight: -17,
        color: 'grey'
    },
    restaurantCard: {
        height: "10%",
        width: '20%',
        borderRadius: 50,
        marginLeft: 20
    },
    restaurantImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 50
      }
})

export default Home;