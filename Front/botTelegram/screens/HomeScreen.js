import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../globalStyles';
import Button from '../components/CustomButtons/Button';

const HomeScreen = (props) => {

  const { navigation } = props;

  const goToCommand = () => {
    navigation.navigate('Command');
  };
  return (
    <View style={[globalStyles.container]}>
      <Text style ={[globalStyles.contentText]}>Bienvenidos a [Nombre de la App], la herramienta definitiva diseñada para simplificar y enriquecer tu experiencia de comunicación. Nuestra aplicación se enfoca en ofrecerte una plataforma ágil y fácil de usar, permitiéndote gestionar tus mensajes y interactuar con tu audiencia a través de [característica distintiva, como podría ser 'nuestro avanzado bot de Telegram']. Ya sea para mantener conversaciones personales o para manejar dinámicas de trabajo colaborativo, [Nombre de la App] está aquí para ayudarte a mantener todo organizado y accesible, optimizando tu tiempo y mejorando tu conectividad. ¡Descubre una manera más inteligente de comunicarte hoy!</Text>
      <View style ={[styles.buttonContainer]}>
      <Button
        height={40}
        width={'50%'}
        sizeIcon={28}
        onPress={goToCommand}
        title="Ir a CommandBot"
        buttonColor={'#b03084'}
      />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    marginTop:60,
    alignItems: 'center',
    justifyContent: 'center',
  },

});


export default HomeScreen;
