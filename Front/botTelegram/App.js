import React from 'react';

// Importamos las librerias para navegar entre pantallas
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importan las pantallas para navegar
import LoginScreen from '../botTelegram/screens/LoginScreen.js'; 
import HomeScreen from '../botTelegram/screens/HomeScreen.js';
import CommandScreen from '../botTelegram/screens/CommandScreen.js';

//Creamos la instacia de navegación
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Command" component={CommandScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
