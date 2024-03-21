import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import FundoCalc from '/home/estagiario-15/Área de Trabalho/Estudos/ReactNative/imc_calculator/src/assets/fundoCalc.webp'

export function CalcImc() {
    const [Weight, setWeight] = useState('');
    const [Height, setHeight] = useState('');
    const [imc, setImc] = useState('');
    const [Description, setDescription] = useState('');

    const imcCalculo = () => {
        const imc = Weight / ((Height / 100) * (Height / 100))
        setImc(imc.toFixed(1))

        if (imc < 18.5) {
            setDescription('- Tu tá só o osso e o couro oh man...')
        } else if (imc >= 18.5 && imc <= 24.9) {
            setDescription('- Tá show!')
        } else if (imc >= 25 && imc <= 29.9) {
            setDescription('- Tá començando a aparecer o buchin')
        } else if (imc >= 30) {
            setDescription('- Próxima parada: cardíaca')
        }
    }
    return (
        <View style={styles.Container}>
            <View style={styles.Header} >
                <Text style={styles.Title} >Calculadora de IMC</Text>
            </View>
            <TextInput
                style={styles.Input}
                value={Weight}
                onChangeText={(text) => setWeight(text)}
                placeholder="Digite seu peso (Kg)"
                keyboardType='numeric'
            />
            <TextInput
                style={styles.Input}
                value={Height}
                onChangeText={(text) => setHeight(text)}
                placeholder="Digite sua altura (Cm)"
                keyboardType='numeric'
            />
            <TouchableOpacity
                style={styles.Button}
                onPress={imcCalculo}
            >
                <Text style={styles.textButton} > Enviar </Text>
            </TouchableOpacity>
            <View style={styles.resultConstainer}>
                <Text style={styles.Result}  > { imc } </Text>
                <Text style={styles.Result}  > { Description } </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#f2e8e1",
    },
    Header: {
        height: 100,
        backgroundColor: "#7a695d",
        alignItems: "center",
        justifyContent: "center",
    },
    Title: {
        fontSize: 32,
        fontWeight: "900",
        color: "#f2e8e1",
    },
    Input: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#7a695d",
        height: 55,
        margin: 20,
        padding: 10,
        borderWidth: 1 / 2,
    },
    Button: {
        width: 120,
        height: 40,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7a695d",
        borderRadius: 15,
    },
    textButton: {
        fontSize: 18,
        fontWeight: "500",
        color: "#f5f3f0",
    },
    resultConstainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent: "center",
        marginTop:60,
    },
    Result:{
        fontSize: 18,
        fontWeight: "500",
        color: "#7a695d",
    },
})