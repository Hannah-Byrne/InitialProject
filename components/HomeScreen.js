
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
import Button1 from './Button1';
import Button2 from './Button2';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { forNoAnimation } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';

// fitness tab
function FitnessScreen() {
  const SubLogo = require('./Sublogo.png');
  return (
    <View style={styles.screen}>
      <Image source={SubLogo} style={{}}/>
      <Text>Fitness History</Text>
    </View>
  );
}


//nutrition tab
function NutritionScreen() {
  const SubLogo = require('./Sublogo.png');
  return (
    <View style={styles.screen}>
      <Image source={SubLogo} style={{}}/>
      <Text>Nutrition History</Text>
    </View>
  );
}

//home / main screen
function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const Logo = require('./Logo.png');
  const SubLogo = require('./Sublogo.png');
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
      <Image source={Logo} style={{width:370}}/>
  
        <View style = {styles.TextBox}>
          <Text style={styles.TextData}>Welcome Back!</Text>
          <Text>Continue your health journey by selecting an option</Text>
        </View>
        <View style={styles.box}>
        <Button2
            title="Log a Workout"
            onPress={() => setIsModalVisible(true)}
          />
        </View>

        <View style={[styles.box]}>
          <Button2
            title="Log a Meal"
            onPress={() => setIsModalVisible(true)}
            /*onPress={() =>
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
        <Pressable onPress={() => setIsModalVisible(true)}>
          <Image
            source={{ uri: 'https://picsum.photos/200' }}
            style={{ width: 220, height: 200 }}
          />
        </Pressable>
            */
          />
          
        </View>
        <View style={styles.box}>
          <Button2
            title="Create a Goal"
            onPress={() => setIsModalVisible(true)}
          />
        </View>


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
            padding: 10,
            alignItems: 'center',
          }}>
          <Image source={SubLogo} />
        </View>

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
      <Tab.Screen name="Home " component={HomeScreen} />
      <Tab.Screen name="Fitness" component={FitnessScreen} />
      <Tab.Screen name="Nutrition" component={NutritionScreen} />
    </Tab.Navigator>
  );
}

//main app function
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}

//font and box styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'teal',
  },
  box: {
    height: 70,
    width: 339,
    margin:5
  },
  TextBox: {
    alignItems: 'center',
    padding: 20,
    height:100,
  
  },
  TextData: {
    fontSize: 25,
    color: "black",
    fontFamily: 'KohinoorBangla'
  }

});
