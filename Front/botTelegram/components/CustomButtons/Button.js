import * as React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Button ({title, onPress, icon, iconColor,buttonColor,sizeIcon,height,width,MRight,color}){

    return(
        <TouchableOpacity onPress={onPress} style = {[styles.button ,{backgroundColor: buttonColor },
            {height: height},{width: width},{size: sizeIcon}]}>
            <Ionicons name = {icon} size = {sizeIcon} color = {iconColor} />
            <Text style = {[styles.text, {marginRight : MRight,color: color || '#f1f1f1'},]}> {title} </Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        borderRadius: 20,
        margin:5,
    },

    text: {
        fontSize: 16,
        color: '#f1f1f1',
        marginLeft: 10,
        textAlign:'center',
        paddingRight: 10,
    }

}) 