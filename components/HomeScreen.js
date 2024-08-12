
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  Modal,
  StatusBar,
  Alert,
  StyleSheet,
  TextInput,
  ActionSheetIOS
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import React, { useState } from 'react';
import Button2 from './Button2';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DatePicker from './DatePicker.js';
import GiphySearch from './GiphySearch'
import axios, * as others from 'axios';
import FitnessScreen from './NutritionScreen.js';
import NutritionScreen from './FitnessScreen.js';

//home / main screen
function HomeScreen() {
  const [isWorkoutModalVisible, setIsWorkoutModalVisible] = useState(false);
  const [isMealModalVisible, setIsMealModalVisible] = useState(false);
  const [isGoalModalVisible, setIsGoalModalVisible] = useState(false);
  const Logo = require('./Logo.png');
  const SubLogo = require('./Sublogo.png');
  const [FoodType, setFoodType] = useState('');
  const [Calories, setCalories] = useState('');
  const [Username, setUsername] = useState('');
  const Today = new Date().toLocaleDateString();
  const [WorkoutType, setWorkoutType] = useState('');
  const [WorkoutTime, setWorkoutTime] = useState('');

  const handlePostWorkout =  async () => {
    var axios = require('axios').default;
    var data = JSON.stringify({
    "collection": "Workouts",
    "database": "User",
    "dataSource": "Test",
    "document": {
       "WorkoutType": WorkoutType,
       "WorkoutTime": WorkoutTime,
       "Date": Today,
       "username": Username
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
    Alert.alert('Workout posted!', `WorkoutType: ${WorkoutType}\nWorkoutTime ${WorkoutTime}`);
    setIsWorkoutModalVisible(false);};


  const handlePostMeal =  async () => {
    var axios = require('axios').default;
    var data = JSON.stringify({
    "collection": "Foods",
    "database": "User",
    "dataSource": "Test",
    "document": {
       "FoodType": FoodType,
       "Calories": Calories,
       "Date": Today,
       "username": Username
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
    Alert.alert('Meal posted!', `FoodType: ${FoodType}\nCalories: ${Calories}`);
    setIsMealModalVisible(false);};

const showActionSheet = () => {
     ActionSheetIOS.showActionSheetWithOptions(
              {
                  options: ['Strength', 'Cardio', 'Aerobics', 'Cancel'],
                  cancelButtonIndex: 3,
              },
              (buttonIndex) => {
                  let selectedType;
                  switch (buttonIndex) {
                      case 0:
                          selectedType = 'Strength';
                          break;
                      case 1:
                          selectedType = 'Cardio';
                          break;
                      case 2:
                          selectedType = 'Aerobics';
                          break;
                      default:
                          selectedType = '';
                  }
                  if (selectedType) {
                      setWorkoutType(selectedType);
                      console.log(`Selected Workout Type: ${selectedType}`);
                  }
              }
            )}
const DatePicker = () => {
              const [selectedDate, setSelectedDate] = useState(null);
          
              const onDayPress = (day) => {
                  setSelectedDate(day.dateString);
              };
          
              return (
                  <View style={styles.container}>
                      <Text style={styles.header}>Select a Date</Text>
                      <Calendar
                          onDayPress={onDayPress}
                          markedDates={selectedDate ? { [selectedDate]: { selected: true } } : {}}
                      />
                      {selectedDate && (
                          <Text style={styles.selectedDate}>Selected Date: {selectedDate}</Text>
                      )}
                  </View>
              );
          };

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
      <Image source={Logo} style={{ width: 370 }} />
        <View style = {styles.TextBox}>
          <Text style={styles.TextData}>Welcome Back!</Text>
          <Text style={styles.whiteText}>Continue your health journey by selecting an option below </Text>
        </View>
        <View style={styles.box}>
        <Button2
            title="Log a Workout"
            onPress={() => setIsWorkoutModalVisible(true)}
          />
        </View>

        <View style={[styles.box]}>
          <Button2
            title="Log a Meal"
            onPress={() => setIsMealModalVisible(true)}
          />
          
        </View>
        <View style={styles.box}>
          <Button2
            title="Motivate me!"
            onPress={() => setIsGoalModalVisible(true)}
          />
        </View>

      </ScrollView>

    {/* Workout Modal */}
    <Modal
        visible={isWorkoutModalVisible}
        onRequestClose={() => setIsWorkoutModalVisible(false)}
        animationType="slide"
        presentationStyle="formSheet"
      >
        < ScrollView contentContainerStyle={styles.modalContent} >
        <Image source={Logo} style={{ width: 370 }} />
          <View style={styles.smallbox}></View>
          <Text style={styles.TextData}> Enter Username: </Text>
          <TextInput
        style={styles.input}
        placeholder="Username"
        value={Username}
        onChangeText={setUsername}
      />
      <Text style={styles.TextData}> Enter the amount of time: </Text>
      <TextInput
        style={styles.input}
        placeholder="X minutes"
        value={WorkoutTime}
        onChangeText={setWorkoutTime}
      />
      <View style={styles.smallbox}></View>
          <View style={styles.button2}>
        <Button title="Select Workout Type" onPress={showActionSheet} /> 
            <View style={styles.box}></View>
        </View>
            <View style={styles.smallbox}></View>
            <View style={styles.buttonContainer}>
            <View style={styles.closeButton}>
            <Button
              title="Post"
              onPress={handlePostWorkout}
            />
          </View>
          <View style={styles.closeButton}>
            <Button
              title="Close"
              onPress={() => setIsWorkoutModalVisible(false)}
            />
          </View>
          </View>
        </ScrollView>
      </Modal>

      {/* Meal Modal */}
      <Modal
        visible={isMealModalVisible}
        onRequestClose={() => setIsMealModalVisible(false)}
        animationType="slide"
        presentationStyle="formSheet"
      >

         <ScrollView contentContainerStyle={styles.modalContent} >
         <Image source={Logo} style={{ width: 370 }} />
         <View style={styles.smallbox}></View>
         <Text style={styles.TextData}> Enter Username: </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={Username}
        onChangeText={setUsername}
      />

          <Text style={styles.TextData}> Enter Meal: </Text>
      <TextInput
        style={styles.input}
        placeholder="FoodType"
        value={FoodType}
        onChangeText={setFoodType}
      />
    
       <Text style={styles.TextData}> Enter Calories: </Text>
     <TextInput
        style={styles.input}
        value={Calories}
        placeholder="Calories"
        onChangeText={setCalories}
        keyboardType="number-pad" 
      />
      <View style={styles.box}></View>
      <View style={styles.buttonContainer}>
            <View style={styles.closeButton}>
            <Button
              title="Post"
              onPress={handlePostMeal}
            />
          </View>
          <View style={styles.closeButton}>
            <Button
              title="Close"
              onPress={() => setIsMealModalVisible(false)}
            />
          </View>
          </View>
          
        </ScrollView>
  
      </Modal>

      {/* Goal Modal */}
      <Modal
        visible={isGoalModalVisible}
        onRequestClose={() => setIsGoalModalVisible(false)}
        animationType="slide"
        presentationStyle="formSheet"
      >
        <View style={styles.modalContent}>
          <Image source={SubLogo} />
          <View style={styles.smallbox}></View>
          <Text style={styles.TextData}> You're doing great! </Text>
          <View style={styles.smallbox}></View>
          <GiphySearch/>
          <View style={styles.closeButton}>
            <Button
              title="Close"
              onPress={() => setIsGoalModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}



const Tab = createBottomTabNavigator();

//main app function
export default function App() {
  return (
    <NavigationContainer independent = {true} >
      <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Fitness" component={NutritionScreen} />
      <Tab.Screen name="Nutrition" component={FitnessScreen} />
    </Tab.Navigator>
   </NavigationContainer>
  );
}

//styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
  },
  box: {
    width: '100%',
    height: 40,
   padding:20,
   marginBottom: 10,
   padding: 10,
    
  },
  smallbox:{
    width: '100%',
    height: 5,
   padding: 5,
  },
  TextBox: {
    alignItems: 'center',
    padding: 20,
    height:100,
  },
  TextData: {
    fontSize: 20,
    color: "white",
    fontFamily: 'KohinoorBangla'
  },
  whiteText: {
    color: 'white',
    textAlign: 'center',
  },
  modalContent:{
      flexGrow: 1,
      backgroundColor: 'teal',
      padding: 16,
      alignItems: 'center',
    },
    closeButton: {
      backgroundColor: 'white',
      padding: 5,
      height:50,
      width: "40%", 
      borderWidth: .25
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: '#ccc',
      borderWidth: 0,
      borderRadius: 5,
      marginBottom: 10,
      padding: 10,
      backgroundColor: '#fff',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    button2:{
    backgroundColor: 'white',
    padding: 5,
    height:50,
    borderRadius: 0,
    width: "80%", 
    borderWidth: 0
    },
});
