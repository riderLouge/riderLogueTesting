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
import { NavigationContainer,DarkTheme,DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import InitialScreen from './screens/InitialScreen';
import ContactScreen from './screens/ContactScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColorScheme } from 'react-native';
import {enableLatestRenderer} from 'react-native-maps';



const Tab = createBottomTabNavigator();

enableLatestRenderer();

export default function App() {

  useEffect(()=>{
   SplashScreen.hide();
},[]);

  const scheme = useColorScheme();

  return (
<NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
  <Tab.Navigator initialRouteName="Home" 
  
  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused? 'md-home' : 'home-outline';
            } else if (route.name === 'Qr Code') {
              iconName = focused ? 'qr-code' : 'qr-code-outline';
            } else if (route.name === 'Map') {
              iconName = focused ? 'ios-map' : 'map-outline';
            }else if (route.name === 'Shop') {
              iconName = focused ? 'ios-cart' : 'ios-cart-outline';
            }else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          //tabBarActiveTintColor: '#182747',
          //tabBarInactiveTintColor: 'gray',
        })}
  >
    <Tab.Screen name="Home"  component={HomeScreen}  options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#2192FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
    <Tab.Screen name="Qr Code" component={InitialScreen} 
     options={{
          title: 'Qr code',
          headerStyle: {
            backgroundColor: '#2192FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
    <Tab.Screen name="Map" component={MapScreen}  options={{
          title: 'Map',
          headerStyle: {
            backgroundColor: '#2192FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        
    />
    <Tab.Screen name="Shop" component={ContactScreen}  options={{
          title: 'Shop',
          headerStyle: {
            backgroundColor: '#2192FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
    <Tab.Screen name="Profile" component={ProfileScreen}  options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#2192FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
   
  </Tab.Navigator>
</NavigationContainer>
  );
};