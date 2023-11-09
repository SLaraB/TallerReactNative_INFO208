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
            getCommands();
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
        console.log(jsonResponse);
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

    const stopBot = async () => {
      try {
        const response = await fetch('http://192.168.0.13:3000/api/bot/stop', {
          method: 'GET',
        });
        const jsonResponse = await response.json();
        if (jsonResponse.ok === "success") {
          Alert.alert("Bot detenido con éxito");
        } else {
          console.error('Error al detener el bot:', jsonResponse.error);
          // Si el bot no estaba encendido, aún queremos actualizarlo con los nuevos comandos.
          if (jsonResponse.error === "El bot no ha sido encendido") {
            Alert.alert("El bot no estaba encendido. Actualizando...");
            startBot(commandsList);
          } else {
            // Manejar otros posibles errores
            Alert.alert("Otro error...");
          }
        }
      } catch (error) {
        console.error('Error al detener el bot:', error);
        Alert.alert("Error al detener el bot", error.toString());
      }
    };
    
    
    const startBot = async () => {
      try {
        // Obtener los datos de los comandos para el bot
        const commandDataResponse = await fetch('http://192.168.0.13:3000/api/command');
        const commandData = await commandDataResponse.json();
        
        // Asegúrate de que la respuesta contiene la propiedad 'data'
        if (!commandData || !commandData.data) {
          console.error('La respuesta no contiene la propiedad "data" esperada.');
          return;
        }
    
        // Los 'interactions' deben ser un array, que es lo que se espera en el servidor.
        const interactions = commandData.data;
    
        // Iniciar el bot con las interacciones obtenidas
        let startResponse = await fetch('http://192.168.0.13:3000/api/bot/start', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ interactions }), // Asegúrate de pasar las interacciones como un array
        });
        
        let jsonResponse = await startResponse.json();
        
        // Manejar la respuesta del servidor después de intentar iniciar el bot
        if (jsonResponse.ok === "success") {
          Alert.alert("Bot iniciado con éxito");
        } else {
          console.error('Error al iniciar el bot:', jsonResponse);
          Alert.alert("Error al iniciar el bot", jsonResponse.message || 'Error desconocido');
        }
      } catch (error) {
        console.error('Error al iniciar el bot:', error);
        Alert.alert("Error al iniciar el bot", error.toString());
      }
    };
    

    const updateBot = async (interactions) => {
      try {
          const response = await fetch('http://192.168.0.13:3000/api/bot/update', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ interactions }),
          });
          const jsonResponse = await response.json();
          if (jsonResponse.ok === "success") {
              Alert.alert("Bot actualizado con éxito","Ya puedes usar los comandos en Telegram");
          } else {
              console.error('Error al actualizar el bot:', jsonResponse);
              Alert.alert("Error al actualizar el bot", jsonResponse.error);
          }
      } catch (error) {
          console.error('Error al actualizar el bot:', error);
          Alert.alert("Error al actualizar el bot", error.toString());
      }
  };

  const getAndUpdateCommands = async () => {
    await getCommands();
    await updateBot(commandsList);
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
                <Button
                    height={40}
                    width={'40%'}
                    onPress={startBot}
                    title="Encender bot"
                    buttonColor={'#00802C'}
                />
                <Button
                    height={40}
                    width={'40%'}
                    onPress={stopBot}
                    title="Apagar bot"
                    buttonColor={'#BD0000'}
                    MRight={10}
                />
                <Button
                    height={40}
                    width={'40%'}
                    onPress={getAndUpdateCommands}
                    title="Actualizar bot"
                    buttonColor={'#b03084'}
                />
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
