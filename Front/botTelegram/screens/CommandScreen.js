import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { globalStyles } from '../globalStyles';
import Button from '../components/CustomButtons/Button';
import CustomInputs from '../components/CustomInputs/CustomInputs';
import {API_BASE_URL} from '../config';

const CommandScreen = () => {
    const [command, setCommand] = useState('');
    const [nameCommand, setNameCommand] = useState('');
    const [commandsList, setCommandsList] = useState([]);


    const sendCommand = async () => {
        try {
            const response = await fetch('http://192.168.0.13:3000/api/command', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    command: nameCommand,
                    message: command,
                }),
            });
            const data = await response.json();
            console.log(data);
            Alert.alert("Comando enviado con éxito");
            setCommand('');
            setNameCommand('');
        } catch (error) {
            console.log('Error al enviar comando:', error);
            Alert.alert("Error al enviar comando");
        };
    };

    const getCommands = async () => {
      Alert.alert("Obteniendo comandos");
      try {
        const response = await fetch('http://192.168.0.13:3000/api/command');
        const jsonResponse = await response.json();
        if (jsonResponse.ok === "success" && Array.isArray(jsonResponse.data)) {
          setCommandsList(jsonResponse.data);
          Alert.alert("Comandos obtenidos con éxito");
        } else {
          console.error('La respuesta no tiene el formato esperado:', jsonResponse);
          // Puedes manejar este caso como consideres apropiado
        }
      } catch (error) {
        console.error('Error al obtener comandos:', error);
        Alert.alert("Error al obtener comandos", error.toString());
      }
    };
    
  

    return (
        <View style={globalStyles.container}>
            <View>
                <Text style={globalStyles.titleText}>Command Screen</Text>
            </View>
            <View style={[{ alignItems: 'center' }]}>
                <Text style={globalStyles.subtitleText}>Ingrese sus comandos</Text>
                <CustomInputs
                    placeholder="Nombre Comando"
                    value={nameCommand}
                    setValue={setNameCommand}
                    width={'70%'}
                />
                <CustomInputs
                    placeholder="Comando"
                    value={command}
                    setValue={setCommand}
                    width={'70%'}
                />
                <Button
                    height={40}
                    width={'40%'}
                    onPress={sendCommand}
                    title="Enviar"
                    buttonColor={'#b03084'}
                    MRight={20}
                />
                <Button
                    height={40}
                    width={'50%'}
                    onPress={getCommands}
                    title="Obtener comandos"
                    buttonColor={'#b03084'}
                />
                {commandsList.map((item, index) => (
                    <View key={index} style={styles.commandItem}>
                        <Text style={styles.commandText}>{item.command}: {item.message}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  commandItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
  },
  commandText: {
      fontSize: 16,
      color:'white'
  },
});

export default CommandScreen;
