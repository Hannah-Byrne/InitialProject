import React from 'react';
import { View,Pressable, Text, StyleSheet } from 'react-native';

const Button1 = ({ title, onPress }) => {
  return (
    <View>
    <Pressable style={styles.button1} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button1: {
    backgroundColor: 'darkseagreen',
    padding: 5,
    height:40,
    borderRadius: 5,
    alignItems: 'center', 
    borderColor: 'black',
    borderWidth: 2,
     
  },
  buttonText: {
    color: 'white',
    fontSize: 20,  // Change the text size here
    fontFamily: 'Iowan Old Style'
  },
});

export default Button1;
