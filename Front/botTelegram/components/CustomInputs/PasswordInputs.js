import { View, Text,TextInput,StyleSheet} from 'react-native'
import React , {useState}from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../../globalStyles';
const PasswordInputs = ({value,setValue,placeholder,nameIcon,keyboardType,width}) => {
  
  const [passwordVisible, setPasswordVisible] = useState(true);


  return (
    
    <View style = {styles.container}>
      <Ionicons 
      name={nameIcon} 
      color={'grey'} 
      size={18} 
      style = {[{alignSelf:'center'},{marginLeft:5}]}
      />
      <TextInput
      placeholderTextColor={'grey'}
      value= {value}
      onChangeText ={setValue}
      placeholder={placeholder}
      style = {styles.input}
      secureTextEntry = {passwordVisible}
      keyboardType = {keyboardType}
      width={'70%'}
      />

      <Ionicons 
      name={passwordVisible ? "eye-off" : "eye"} onPress={() => setPasswordVisible(!passwordVisible)} 
      color={'grey'} 
      size={18} 
      style = {[{alignSelf:'center'},{marginLeft:'auto'},{marginRight:10}]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius:20,
        marginVertical:10,
        flexDirection: 'row'
    },
    input:{
        fontSize:12,
        marginLeft:15,
    }
})

export default PasswordInputs
