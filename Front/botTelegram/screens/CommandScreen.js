// CommandScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../globalStyles';
import Button from '../components/CustomButtons/Button';
import CustomInputs from '../components/CustomInputs/CustomInputs';


const CommandScreen = () => {

    const [command, setCommand] = React.useState('');
    const [nameCommand, setNameCommand] = React.useState('');

    const sentCommand = async () => {
        try {
          console.log(command, nameCommand);

        } catch (error) {
          // Mostrar mensaje de error en caso de fallo de inicio de sesión
          console.log('Error al enviar comando:', error);
          Alert.alert("Error al enviar comando");
    
      };
    };

    const getCommands = async () => {
        try {
          console.log(command, nameCommand);

        } catch (error) {
          // Mostrar mensaje de error en caso de fallo de inicio de sesión
          console.log('Error al enviar comando:', error);
          Alert.alert("Error al enviar comando");
    
      };
    };

  return (
    <View style={globalStyles.container}>
        <View >
        <Text style={globalStyles.titleText}>Command Screen</Text>
        </View>
        <View style={[{      alignItems: 'center'}]}>
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
        onPress={sentCommand}
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
        </View>
    </View>
  );
};

export default CommandScreen;
