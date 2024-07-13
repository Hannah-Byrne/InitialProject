import React from 'react';
import { View,Pressable, Text, StyleSheet } from 'react-native';

const Button2 = ({ title, onPress }) => {
  return (
    <View>
    <Pressable style={styles.button2} onPress={onPress}>
      <Text style={styles.buttonText2}>{title}</Text>
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button2: {
    backgroundColor: 'white',
    padding: 5,
    height:40,
    borderRadius: 5,
    alignItems: 'center', 
    borderWidth: 2
     // Center the text inside the button
  },
  buttonText2: {
    color: 'darkgreen',
    fontSize: 20,  // Change the text size here
    fontFamily: 'KohinoorBangla-Semibold'
  },
});

export default Button2;