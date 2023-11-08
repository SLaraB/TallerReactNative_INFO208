// LoginScreen.js
import React from 'react';
import { View, Text, StyleSheet,Alert,TextInput,Image } from 'react-native';
import { globalStyles } from '../globalStyles';
import Button from '../components/CustomButtons/Button';
import CustomInputs from '../components/CustomInputs/CustomInputs';
import PasswordInputs from '../components/CustomInputs/PasswordInputs';


const LoginScreen = (props) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { navigation } = props;

    const userEmail = "sebastian.lara@uach.cl"
    const userPassword = "Info208$$"

    const goToHome = () => {
        navigation.navigate('Home');
      };

    const loginUser = async () => {
        try {
          console.log(email, password);
          if(email == userEmail && password == userPassword){
          // Realizar acciones después de iniciar sesión exitosamente
           console.log('Usuario ha iniciado sesión');
            Alert.alert("Credenciales correctas")
            goToHome();
          }
          else {
            Alert.alert("Error al iniciar sesión");
          }

        } catch (error) {
          // Mostrar mensaje de error en caso de fallo de inicio de sesión
          console.log('Error al iniciar sesión:', error);
          Alert.alert("Error al iniciar sesión");
    
      };
    };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Login</Text>
      <Image source={require('../assets/logoInfo.png')} />
      <Text style={globalStyles.subtitleText}>Ingresa tus Credenciales</Text>
      <CustomInputs
        nameIcon={'mail'}
        placeholder="Correo electrónico"
        value={email}
        setValue={setEmail}
        keyboardType={'email-address'}
        width={'70%'}
      />
      <PasswordInputs
        nameIcon={'key'}
        secureTextEntry={true}
        placeholder="Contraseña"
        value={password}
        setValue={setPassword}
        width={'70%'}
        />
      <Button
        height={40}
        width={'70%'}
        sizeIcon={28}
        onPress={loginUser}
        title="Iniciar Sesión"
        buttonColor={'#b03084'}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  }); 

export default LoginScreen;
