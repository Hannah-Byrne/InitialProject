/*
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from 'react-native';

import React, { useState } from 'react';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
function FitnessScreen() {
  return (
    <View style={styles.screen}>
      <Text>Fitness Screen</Text>
    </View>
  );
}

function NutritionScreen() {
  return (
    <View style={styles.screen}>
      <Text>Nutrition Screen</Text>
    </View>
  );
}

function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const Logo = require('./Logo.png');
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <Image source={Logo} style={{width:360}}/>
        <View style={[styles.box]}>

          <Button1
           title="Get Started"
           onPress={() => setIsModalVisible(true)}
          /> 
        </View>

        <View style={styles.box}>
        <Button2
            title="Log a Workout"
            onPress={() => Alert.alert('Button pressed!', 'Test')}
          />
        </View>

        <View style={[styles.box]}>
          <Button2
            title="Log a Meal"
            onPress={() =>
              Alert.alert('You did it', 'You pressed the button', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancelled button pressed'),
                },
                {
                  text: 'Okay',
                  onPress: () => console.log('Okay button pressed'),
                },
              ])
            }
          />
        </View>
        <View style={styles.box}>
          <Button2
            title="Create a Goal"
            onPress={() => console.log('Button Pressed')}
          />
        </View>

        <Pressable onPress={() => setIsModalVisible(true)}>
          <Image
            source={{ uri: 'https://picsum.photos/200' }}
            style={{ width: 220, height: 200 }}
          />
        </Pressable>
      </ScrollView>

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="formSheet"
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'teal',
            padding: 60,
          }}
        ></View>

        <Button
          title="Close"
          onPress={() => setIsModalVisible(false)}
        ></Button>
      </Modal>
    </View>
  );
}

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Fitness" component={FitnessScreen} />
      <Tab.Screen name="Nutrition" component={NutritionScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkseagreen',
  },
  box: {
    height: 70,
    width: 339,
    margin:5
  },

});
*/

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';

const Stack = createStackNavigator();
//const Users = require('./components/UsersSchema');

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
