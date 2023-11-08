import react from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#205CA4',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    titleText:{
      color: 'white',
      fontSize:40,
      fontWeight: 'bold',
    },
    subtitleText:{
      color: 'white',
      fontSize:20
    },
    contentText: {
      color: 'white',
      fontSize:14,
      textAlign:'justify',
    }
  });
