import { onLongPress } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';
import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CustomButton({ title, onPress, onLongPress,icon, iconColor, buttonColor, sizeIcon, height, width, MRight, description,rightIcon }) {
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={[styles.button, { backgroundColor: buttonColor }, { height: height }, { width: width }, { size: sizeIcon }]}>
      <View style={[{flexDirection:'row',justifyContent: 'space-between'}]}>
      <View style={styles.buttonContent}>
      <Text style={[styles.text, { marginLeft: 10, color: title === 'Emociones' ? '#666666' : '#f1f1f1'}]}>{title}</Text>
      {description && <Text style={[styles.description, { color: title === 'Emociones' ? '#666666' : '#f1f1f1'}]}>{description}</Text>}
      </View>
      <View style={[{alignSelf:'center',marginRight:10}]} >
     {icon&&  <Ionicons name = {icon} size = {sizeIcon} color = {title === 'Emociones' ? '#666666' : iconColor} />} 
     {rightIcon && <Image source={rightIcon} style={[styles.icon]} />}
      </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    margin: 10,
  },

  buttonContent: {
    flexDirection: 'column',
    marginVertical: 5,
  },

  text: {
    fontFamily:'Poppins-Bold',
    fontSize: 15,
    color: '#f1f1f1',
    marginLeft: 15,
  },

  description: {
    fontSize: 10,
    color: '#f1f1f1',
    marginLeft: 15,
    fontFamily:'Poppins-Medium'
  },
  icon:{ 
    width: 50, 
    height: 60,
    marginTop:10
  }
});
