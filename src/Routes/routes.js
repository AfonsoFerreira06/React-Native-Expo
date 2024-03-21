import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { Home } from '../Pages/home';
import { CalcImc } from '../Pages/calcImc';
import { Login } from '../Pages/login';
import { Cadastro } from '../Pages/cadastro';


const Stack = createNativeStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Calculadora" component={CalcImc} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}