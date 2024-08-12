import React, { useState,useCallback  } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  Modal,
  Alert,
  StyleSheet,
  TextInput,
} from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';


const NutritionScreen = () => {
  const SubLogo = require('./Sublogo.png');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [history, setHistory] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setIsModalVisible(true);
    }, [])
  );

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
    
    axios.post('https://us-east-2.aws.data.mongodb-api.com/app/data-fyrfzoj/endpoint/data/v1/action/findOne', data, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': 'ryxUn0mSel0Q5n2l4qXxHBgZioUULrEW4SeaoJiPpWPz6inaGTC44m1v8LPSW1vR',
      }
    })
    .then(response => {
      if (response.data && response.data.document) {
        setIsModalVisible(false);
        fetchUserHistory();
      } else {
        Alert.alert('Invalid credentials');
      }
    })
    .catch(error => {
      console.error('Error during login:', error);
      Alert.alert('Error', 'An error occurred.');
    });
  };

  const fetchUserHistory = () => {
    const data = {
      "collection": "Foods",
      "database": "User",
      "dataSource": "Test",
      "filter": {
        "username": username,
      },
    };
    
    axios.post('https://us-east-2.aws.data.mongodb-api.com/app/data-fyrfzoj/endpoint/data/v1/action/find', data, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': 'ryxUn0mSel0Q5n2l4qXxHBgZioUULrEW4SeaoJiPpWPz6inaGTC44m1v8LPSW1vR',
      }
    })
    .then(response => {
      if (response.data && response.data.documents) {
        setHistory(response.data.documents);
      } else {
        Alert.alert('No history found');
      }
    })
    .catch(error => {
      console.error('Error fetching user history:', error);
      Alert.alert('Error', 'An error occurred while fetching history.');
    });
  };

  return (
    <View style={styles.screen}>
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="formSheet"
      >
        <View style={styles.modalContent}>
          <Image source={SubLogo} style={styles.logo} />
          <Text style={styles.TextData}>Enter Username and Password:</Text>
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
          <View style={styles.box}></View>
          <View style={styles.closeButton}>
            <Button
              title="Show History"
              onPress={handleLogin}
            />
          </View>
        </View>
      </Modal>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image source={SubLogo} style={styles.logo} />
       <Text style={styles.TextData}>Nutrition History </Text>
  {history.length > 0 && (
          <View style={styles.historyContainer}>
            {history.map((item, index) => (
              <View key={index} style={styles.historyBox}>
                <Text style={styles.historyText}>Food Type: {item.FoodType}</Text>
                <Text style={styles.historyText}>Calories: {item.Calories}</Text>
                <Text style={styles.historyText}>Date: {item.Date}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'teal',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  box: {
    width: '100%',
    height: 40,
    padding: 20,
    marginBottom: 10,
  },
  TextData: {
    fontSize: 20,
    color: "white",
    fontFamily: 'KohinoorBangla',
    textAlign: 'center',
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
  header: {
    backgroundColor: 'white',
    padding: 5,
    height: 50,
    width: "100%",
    borderWidth: 0,
  },
  closeButton: {
    backgroundColor: 'white',
    padding: 5,
    height: 50,
    width: "70%",
    borderWidth: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'teal',
    padding: 16,
  },
  historyContainer: {
    width: '100%',
    padding: 20,
  },
  historyBox: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  historyText: {
    fontSize: 16,
    color: 'black',
  },
});

export default NutritionScreen;
