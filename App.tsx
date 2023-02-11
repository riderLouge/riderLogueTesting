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
import HomeScreen from './screens/Settings';
import InitialScreen from './screens/InitialScreen';
import ContactScreen from './screens/ContactScreen';
import MapStaringScreen from './screens/MapInitialScreen';
import ProfileScreen from './screens/ProfileScreen';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColorScheme } from 'react-native';
import {enableLatestRenderer} from 'react-native-maps';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditProfile from './screens/EditProfile';
import AddFriends from './screens/AddFriends';
import Settings from './screens/Settings';



enableLatestRenderer();

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  useEffect(()=>{
   SplashScreen.hide();
},[]);

  const scheme = useColorScheme();

  const BottomTabScreen = () => {
    return (
        <Tab.Navigator initialRouteName="Profile" 
        
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: 'black' },
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
    
                  if (route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline';
                  } else if (route.name === 'Qr Code') {
                    iconName = focused ? 'qr-code' : 'qr-code-outline';
                  } else if (route.name === 'Trip') {
                    iconName = focused ? 'ios-map' : 'map-outline';
                  }else if (route.name === 'Shop') {
                    iconName = focused ? 'ios-cart' : 'ios-cart-outline';
                  }else if (route.name === 'settings') {
                    iconName = focused? 'md-settings' : 'md-settings-outline';
                  }
    
                  // You can return any component that you like here!
                  return <Icon name={iconName} size={size} color={color} />;
                },
                //tabBarActiveTintColor: '#182747',
                //tabBarInactiveTintColor: 'gray',
              })}
        >
          <Tab.Screen name="Profile" component={ProfileScreen}  options={{
              title: 'Profile',
              headerStyle: {
                backgroundColor: '#121212',
              },
              headerShown:false,
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold',
              },
            }} />
          <Tab.Screen name="Qr Code" component={InitialScreen} 
          options={{
                title: 'Qr code',
                headerStyle: {
                  backgroundColor: 'grey',
                },
                headerShown:false,
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }} />
          <Tab.Screen name="Trip" component={MapStaringScreen}  options={{
              headerShown:false
              }}
              
          />
          <Tab.Screen name="Shop" component={ContactScreen}  options={{
                title: 'Shop',
                headerStyle: {
                  backgroundColor: 'grey',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}/>
         <Tab.Screen name="settings"  component={Settings}  options={{
                title: 'Settings',
                headerStyle: {
                  backgroundColor: 'grey',
                },
                headerShown:false,
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }} />
        
        </Tab.Navigator>
      );
  }
  return(
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="AddFriends" component={AddFriends} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;