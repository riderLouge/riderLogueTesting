/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import InitialScreen from './screens/InitialScreen';
import ContactScreen from './screens/ContactScreen';
import SplashScreen from 'react-native-splash-screen'


const Tab = createBottomTabNavigator();

useEffect(()=>{
   SplashScreen.hide();
},[]);

export default function App() {
  return (
<NavigationContainer>
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="About" component={InitialScreen} />
    <Tab.Screen name="contact" component={ContactScreen} />
  </Tab.Navigator>
</NavigationContainer>
  );
};