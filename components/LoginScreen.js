import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image, Modal } from 'react-native';
import axios, * as others from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';


const LoginScreen = ({ navigation = useNavigation() }) => {
  const Logo = require('./Logo.png');
  const SubLogo = require('./Sublogo.png');
 const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newUsername, setNewUsername] = useState(''); 
  const [newPassword, setNewPassword] = useState(''); 
  const DataContext= React.createContext('');



  const handleLogin = () => {
    const data = {
      "collection": "User",
      "database": "User",
      "dataSource": "Test",
      "filter": {
        "username": username,
        "password": password,
      },

    };
    console.log(navigation.params);
    axios.post('https://us-east-2.aws.data.mongodb-api.com/app/data-fyrfzoj/endpoint/data/v1/action/findOne', data, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': 'ryxUn0mSel0Q5n2l4qXxHBgZioUULrEW4SeaoJiPpWPz6inaGTC44m1v8LPSW1vR',
      }
    })
      .then(response => {

        console.log(JSON.stringify(response.data));
        if (response.data && response.data.document) {
          Alert.alert('Login Successful', `Welcome to back to MotionWave ${username}`);
            navigation.navigate('HomeScreen')
        } else {
          Alert.alert('Login Failed', 'Invalid credentials');
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
        Alert.alert('Error', 'An error occurred during login.');
      });
  };

  const handleCreateAccount = () => {

    var axios = require('axios').default;
    var data = JSON.stringify({
    "collection": "User",
    "database": "User",
    "dataSource": "Test",
    "document": {
       "username": newUsername,
       "password": newPassword,
    },
 
});
var config = {
    method: 'post',
    url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-fyrfzoj/endpoint/data/v1/action/insertOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'ryxUn0mSel0Q5n2l4qXxHBgZioUULrEW4SeaoJiPpWPz6inaGTC44m1v8LPSW1vR',
    },
    data: data
};
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
    Alert.alert('Created Account', `Welcome to MotionWave${newUsername}`);

    setIsModalVisible(false); 
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ width: 370 }} />
      <View style={styles.box}></View>
      <Text style={styles.title}>Welcome!</Text>
      <View style={styles.box}>
        <Text style={styles.TextData}> Enter your credentials: </Text>
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
      <Button title="Login" onPress={handleLogin} color='white' />
      <Button title="Create Account" onPress={() => setIsModalVisible(true)} color='white' />

      
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="formSheet"
      >
         <View
          style={{
            backgroundColor: 'teal',
            padding: 10,
            alignItems: 'center',
          }}>
          <Image source={SubLogo} />
        </View>
      
        <View style={styles.modalContainer}>
        <Text style={styles.title}>Welcome to MotionWave!</Text>
        <Text style={styles.TextData}> Enter your information to get started:</Text>
          <TextInput
            style={styles.input}
            placeholder="New Username"
            value={newUsername}
            onChangeText={setNewUsername}
          />
          
          <TextInput
            style={styles.input}
            placeholder="New Password"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry
          />
          <Button title="Create Account" onPress={handleCreateAccount} color='white' />
          <Button title="Close" onPress={() => setIsModalVisible(false)} color='white' />
        </View>
      
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
    padding: 20,
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
    color: "white",
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  box: {
    padding: 10,
  },
  TextData: {
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'center',
    color: "white",
  },
  header:{
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center',
    color: "white",
  }
});

export default LoginScreen;
