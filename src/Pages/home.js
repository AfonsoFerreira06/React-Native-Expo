import homeIMG from '/home/estagiario-15/Área de Trabalho/Estudos/ReactNative/imc_calculator/src/assets/homeImg.png'
import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Button } from "react-native";

export function Home({ navigation }) {

    return (
        <View style={styles.Container}>
            <Image style={styles.Image} source={homeIMG} />
            <Text style={styles.Holder} > Quer acompanhar seu emagrecimento? </Text>
            <Text style={styles.Holder} > Vem com a Gente! </Text>

            <TouchableOpacity
                style={styles.Button}
                title="Ir para Cadastro"
                onPress={() => navigation.navigate('Cadastro')}
            >
                <Text style={styles.buttonText} > Acompanhar meu progresso </Text>
            </TouchableOpacity>
            <TouchableOpacity
                title="Ir para Calculadora"
                onPress={() => navigation.navigate('Calculadora')}
            >
                <Text style={styles.linkText} > Apenas usar a Calculadora </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    Container: {
        flex: 1,
        backgroundColor: "#f5f3f0",
        alignItems: "center",
    },
    Image: {
        width: 350,
        height: 350,
        margin: 80,
    },
    Holder: {
        fontSize: 18,
        color: "#b03648",
    },
    Button: {
        marginTop: 20,
        width: 250,
        height: 60,
        backgroundColor: "#96305a",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#f5f3f0",
    },
    linkText: {
        margin: 55,
        fontSize: 14,
        fontWeight: "400",
        color: "#96305a",
        borderBottomColor:"#96305a",
        borderBottomWidth: .5,
    },
})