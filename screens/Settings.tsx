import React from "react";
import { Button, View, Text, Dimensions, TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { color } from "react-native-elements/dist/helpers";
import { firebase } from "@react-native-firebase/firestore";



var {width,height} = Dimensions.get('window')

export default function Settings() {

  const Navigation = useNavigation()

  return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor:'black'}}>
      <View style={{marginTop:10}}>
          <View >
              <Text style={{paddingLeft:'2%', fontSize:20, fontStyle:"italic", paddingTop:'2%', paddingBottom:'2%', color:'white'}}>Settings</Text>
          </View> 
          <View style={{flexDirection:'row', alignItems:'center', paddingTop:'4%'}}>
              <Icon name="ios-person" size={16} color={'white'} style={{marginLeft:'2%'}}></Icon>
              <Text style={{fontSize: width/23, marginLeft:'2%', color:'white'}}>User Credentials</Text>     
          </View>
          <View style={{flexDirection:'row', alignItems:'center', paddingTop:'4%'}}>
              <Icon name="qr-code" size={16} color={'white'} style={{marginLeft:'2%'}}></Icon>
              <Text style={{fontSize: width/23, marginLeft:'2%', color:'white'}}>QR privacy</Text>     
          </View>
          <View style={{flexDirection:'row', alignItems:'center', paddingTop:'4%'}}>
              <Icon name="md-information-circle" size={16} color={'white'} style={{marginLeft:'2%'}}></Icon>
              <Text style={{fontSize: width/23, marginLeft:'2%', color:'white'}}>About</Text>     
          </View>
          <View style={{flexDirection:'row', alignItems:'center', paddingTop:'4%'}}>
              <Icon name="ios-power-sharp" size={16} color={'white'} style={{marginLeft:'2%'}}></Icon>
              <Text style={{fontSize: width/23, marginLeft:'2%', color:'white'}} onPress={()=> firebase.auth().signOut()}>Log Out</Text>     
          </View>
          <View style={{flexDirection:'row', alignItems:'center', paddingTop:'4%'}}>
              <Icon1 name="shopping" size={16} color={'white'} style={{marginLeft:'2%'}}></Icon1>
              <Text style={{fontSize: width/23, marginLeft:'2%', color:'white'}}>Shop</Text>     
          </View>
      </View>   
    </View>
  );
}

const styles = StyleSheet.create({

});
