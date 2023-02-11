import React from "react";
import { Button, View, Text, StyleSheet, ImageBackground,TextInput,Dimensions, Image, ScrollView } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewTrip from '../screens/NewTrip';
import OldTrip from '../screens/OldTrip';
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import Icon from 'react-native-vector-icons/Ionicons';


var {width,height} = Dimensions.get('window')
export default function MapInitialScreen(){

const Tab = createMaterialTopTabNavigator();

  return (
    <View style={{ flex: 1, alignItems: "center",width:"100%", }}>
      <ScrollView>
        <View>
          <GooglePlacesAutocomplete 
            placeholder='Enter Location'
            textInputProps={{
              placeholderTextColor: 'grey',
              returnKeyType: "search",
              color: 'grey'
            }}
            debounce={200}
            fetchDetails={true}
            styles={{
              container: {
                flex:1,
                paddingTop:'6%',
                width: width*0.9,
                alignSelf:'center',
              },
            }}
            query={{
              key: 'AIzaSyAnuL_aIiVuU9J7IXjOu49Gx7IsQVxJE98',
            language: 'en',
            }}
            onPress={(data, details = null) => {
              console.log(data, details);
            }}
          />
        </View>
        <View style={{marginTop:'5%'}}>
          <View style={{height:'8%', marginBottom:'5%', width: width-50, borderWidth:1, borderColor:'grey', alignItems:'center', justifyContent:'center', borderRadius:5}}>
            <Text style={{color:'grey'}}>Completed Rides</Text>
          </View>
          <View style={{paddingBottom:'5%'}}>
              <Image source={require('../android/app/src/album/1.jpg')} style={[{width:(width-50)},{height:(width)/2.5},{borderRadius:10, opacity:0.6}]}></Image>             
          </View>
          <View style={{paddingBottom:'5%'}}>
              <Image source={require('../android/app/src/album/2.png')} style={[{width:(width-50)},{height:(width)/2.5},{borderRadius:10, opacity:0.6}]}></Image>             
          </View>
          <View style={{paddingBottom:'5%'}}>
              <Image source={require('../android/app/src/album/3.webp')} style={[{width:(width-50)},{height:(width)/2.5},{borderRadius:10, opacity:0.6}]}></Image>             
          </View>
          <View style={{paddingBottom:'5%', width:(width-50), height:(width/2.5), borderRadius:10, borderWidth:1, borderColor:'grey', justifyContent:'center', alignItems:'center', marginBottom:'10%', opacity:0.5}}>
              <Icon name="add-outline" size={100} style={{marginTop:'5%', opacity:0.5}}></Icon>
          </View>
        </View>
      </ScrollView>
    </View>    
  );
}

const styles = StyleSheet.create({
  
  destination: {
    width: 325,
    height: 80,
    borderRadius: 30,
  },
  imageBackGround: {
    opacity:0.2
  },
  modalContainer: {
    width: '55%',
    backgroundColor: 'black',
    borderWidth:.4,
    borderColor:'grey',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 20,
    elevation: 20,
    alignSelf:'flex-end',
    marginRight:'5%',
  },
  header: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
   input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor:'#415a77',
    borderRadius:15,
    opacity:0.8
  },
  tripDetails:{width:"90%",
  height:45,
  marginTop:25,
  backgroundColor:"#0d1b2a",
  borderRadius:8,
  borderColor:'#1b263b',
  borderWidth:0.3,
  justifyContent:"center",
  alignItems:"center",
}
});

const textinputstyle = StyleSheet.create({

  container: {
    backgroundColor:'#2b5d6b',
    paddingTop:'6%',
    width: width*0.9,
    alignSelf:'center',
  },
  TextInput: {
    backgroundColor:'#e0e0e0',
    fontSize: 22,
    color:'green'
  },
  textinputContainer: {},
});
