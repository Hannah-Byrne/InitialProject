import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const Logo = require('./Logo.png');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Replace this with login logic
    if (username === 'User' && password === 'password') {
      Alert.alert('Login Successful', 'Welcome back!');
      // Navigate to the next screen if login is successful
      navigation.navigate('HomeScreen');
    } else {
      Alert.alert('Login Failed', 'Invalid credentials');
    }
  };

  return (
    
    <View style={styles.container}>
      <Image source={Logo} style={{width:370}}/>
      <View style={styles.box} ></View>
      <Text style={styles.title}>Welcome!</Text>
      <View style={styles.box}>
      <Text style={styles.title}> Enter your credentials here: </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} color='white'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'teal',
    
  },
  title: {
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'center',
    color: "white"
    
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  box: {
    height: 40,
    alignItems: 'center'
  }
});

export default LoginScreen;