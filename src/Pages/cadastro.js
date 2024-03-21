import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export function Cadastro({navigation}) {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text> TELA DE CADASTRO </Text>

            <TextInput
                value={email}
                onChangeText={(text) => setEmail(text) }
                placeholder="Digite seu e-mail"
                keyboardType='email-address'
            />
            <TextInput
                value={name}
                onChangeText={(text) => setName(text) }
                placeholder="Digite seu nome"
                keyboardType='name-phone-pad'
            />
            <TextInput
                value={password}
                onChangeText={(text) => setPassword(text) }
                placeholder="Digite sua senha"
                secureTextEntry
            />

            <TouchableOpacity>
                <Text> Cadastrar-me </Text>
            </TouchableOpacity>
            <Text> Já tem uma conta? </Text>

            <TouchableOpacity
                title="Ir para Login"
                onPress={() => navigation.navigate('Login')}
            >
                <Text> Ir para Login</Text>
            </TouchableOpacity>
        </View>
    )

    const styles = StyleSheet.create({
        Container:{

        },
        Input:{

        },
        Button:{

        },
        textButton:{
            
        },
    })
}