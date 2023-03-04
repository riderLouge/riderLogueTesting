import React from "react";
import { Button, View, Text, Dimensions, TextInput, StyleSheet } from "react-native";
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { color } from "react-native-elements/dist/helpers";
import { firebase } from "@react-native-firebase/firestore";



var {width,height} = Dimensions.get('window')

export default function Settings() {

  const Navigation = useNavigation()

  return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor:'black'}}>
      <View style={{flex: 1}}>
          {/* <View >
           <Text style={{paddingLeft:'2%', fontSize:20, fontStyle:"italic", paddingTop:'2%', paddingBottom:'2%'}}>Settings</Text>
          </View> */}
          <View style={{flexDirection:'row', alignItems:'center', paddingTop:'6%'}}>
              <Icon2 name="ios-person-circle-outline" color={'white'} size={width/14} style={{marginLeft:'2%'}}></Icon2>
              <Text style={{fontSize: width/23, marginLeft:'2%', color:'white'}} onPress={()=> Navigation.push("EditProfile")}>Edit profile</Text>     
          </View>
          <View style={{flexDirection:'row', alignItems:'center', paddingTop:'4%'}}>
              <Icon2 name="bicycle-sharp" size={width/14} color={'white'} style={{marginLeft:'2%'}}></Icon2>
              <Text style={{fontSize: width/23, marginLeft:'2%', color:'white'}}>On Ride</Text>     
          </View>
          <View style={{flexDirection:'row', alignItems:'center', paddingTop:'4%'}}>
              <Icon name="idcard" size={width/14} color={'white'} style={{marginLeft:'2%'}}></Icon>
              <Text style={{fontSize: width/23, marginLeft:'2%', color:'white'}}>Change UserId</Text>     
          </View>
          <View style={{flexDirection:'row', alignItems:'center', paddingTop:'4%'}}>
              <Icon1 name="archive-edit-outline" size={width/14} color={'white'} style={{marginLeft:'2%'}}></Icon1>
              <Text style={{fontSize: width/23, marginLeft:'2%', color:'white'}}>Change Password</Text>     
          </View>
          <View style={{flexDirection:'row', alignItems:'center', paddingTop:'4%'}}>
              <Icon3 name="privacy-tip" size={width/14} color={'white'} style={{marginLeft:'2%'}}></Icon3>
              <Text style={{fontSize: width/23, marginLeft:'2%', color:'white'}}>QR privacy</Text>     
          </View>
          <View style={{flexDirection:'row', alignItems:'center', paddingTop:'4%'}}>
              <Icon2 name="ios-people-outline" size={width/14} color={'white'} style={{marginLeft:'2%'}}></Icon2>
              <Text style={{fontSize: width/23, marginLeft:'2%', color:'white'}}>manage followers</Text>     
          </View>
          <View style={{flexDirection:'row', alignItems:'center', paddingTop:'4%'}}>
              <Icon name="poweroff" size={width/14} color={'white'} style={{marginLeft:'2%'}}></Icon>
              <Text style={{fontSize: width/23, marginLeft:'2%', color:'white'}} onPress={()=> firebase.auth().signOut()}>Log Out</Text>     
          </View>
      </View>
      <View style={{flex: 0.4}}>
        <Text style={{fontSize: width/20, marginLeft:'2%', fontStyle:"italic", color:'white'}}>About</Text>  
        <Text style={{fontSize: width/27, marginLeft:'2%', marginTop:'2%', color:'white'}}>Line 1</Text>
        <Text style={{fontSize: width/27, marginLeft:'2%', color:'white'}}>Line 2</Text>
        <Text style={{fontSize: width/27, marginLeft:'2%', color:'white'}}>Line 3</Text>
        <Text style={{fontSize: width/27, marginLeft:'2%', color:'white'}}>Line 3</Text>
        <Text style={{fontSize: width/27, marginLeft:'2%', marginTop:'3%', color:'white'}}>E-mail : Vikranth005@gmail.com</Text>
        <Text style={{fontSize: width/27, marginLeft:'2%', color:'white'}}>PhoneNumber : +91 9952910682</Text>
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({

});
