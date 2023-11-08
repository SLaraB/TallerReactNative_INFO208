import { View, Text,TextInput,StyleSheet} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../../globalStyles';

const CustomInputs = ({value,setValue,placeholder,secureTextEntry,nameIcon,keyboardType,height,width}) => {
  return (
    
    <View style = {styles.container}>
      <Ionicons 
      name={nameIcon} 
      color={'grey'} 
      size={18} 
      style = {[{alignSelf:'center'},{marginLeft:10}]}
      />
      <TextInput
      placeholderTextColor={'grey'}
      value= {value}
      onChangeText ={setValue}
      placeholder={placeholder}
      style = {styles.input}
      secureTextEntry = {secureTextEntry}
      keyboardType = {keyboardType}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius:20,
        marginVertical:10,
        flexDirection: 'row',
        width:'80%',
        height:50,
    },
    input:{
        fontSize:12,
        marginLeft:15,
        flex:1
    }
})

export default CustomInputs