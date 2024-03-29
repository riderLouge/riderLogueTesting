import React, {Component} from 'react';
import { StyleSheet, View, Text, ToastAndroid, Alert, TextInput, ScrollView, Platform, Dimensions, ImageBackground } from "react-native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { Button } from "react-native-elements";
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';


var {width,height} = Dimensions.get('window')

const EditProfile = () => {

    const[Pic,SetPic]=React.useState('');
    const[ProfileName,SetProfileName]=React.useState('');
    const[FirstName,SetFirstName]=React.useState('');
    const[LastName,SetLastName]=React.useState('');
    const[DOB,SetDOB]=React.useState('');
    const[PhoneNumber,SetPhoneNumber]=React.useState('');
    const[Email,SetEmail]=React.useState('');
    const[Country,SetCountry]=React.useState('');
    const[City,SetCity]=React.useState('');
    const Navigation = useNavigation();
    const db = firebase.firestore();
    const [count,SetCount]=React.useState(0);
    const uid = firebase.auth().currentUser?.uid
    
    
    db.collection('users').get().then((snapshot) => {
        snapshot.forEach(doc=>{
            if(doc.id === uid){
                renderData(doc);
            }            
        })
    })
    function renderData(doc){
        if(count==0){
            SetPic(doc.data().ProfilePic);
            SetProfileName(doc.data().ProfileName);
            SetFirstName(doc.data().FirstName);
            SetLastName(doc.data().LastName);
            SetDOB(doc.data().DOB);
            SetPhoneNumber(doc.data().PhoneNumber);
            SetEmail(doc.data().Email);
            SetCountry(doc.data().Country);
            SetCity(doc.data().City);
        }
        console.log(Pic)
    }
    async function profilePic(){
        try {
            const file = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.images],
            });
            console.log(file.uri)
            const path = file.uri;
            const result = await RNFetchBlob.fs.readFile(path, "base64")
            SetPic(result);
        } catch (err) {
            if(DocumentPicker.isCancel(err)){

            }
            else {
                throw err;
            }  
        }
    }
    
    function save(){
        firestore().collection('users')
        .doc(firebase.auth().currentUser?.uid)
        .update({
            ProfilePic: Pic,
            ProfileName: ProfileName,
            FirstName: FirstName,
            LastName: LastName,
            DOB: DOB,
            PhoneNumber: PhoneNumber,
            Email: Email,
            Country: Country,
            City: City,
        })
        .then(() => {
            console.log('Post Added!');
            Alert.alert(
              'Post published!',
              'Your post has been published Successfully!',
            );
        })
        .catch((error) => {
            console.log('Something went wrong with added post to firestore.', error);
        });
    }

const name2= ProfileName;

state ={
    name: name2
};

    return(
        <View style={{flex:1, backgroundColor:'black'}}>
            <ScrollView>
            <View style={{flex:.5, flexDirection:'row', justifyContent:'space-between', marginBottom:'2%'}}>
                <Text style={{paddingLeft:'2%', fontSize:20, fontStyle:"italic", paddingTop:'2%', color:'white'}}>Edit Profile</Text>
                <View style={{paddingRight:'2%'}}>
                    <Button  
                        mode='contained' color="#121212" title='save profile'
                        type="outline"
                        buttonStyle={{borderColor:'white', marginTop:8}}
                        onPress={() => {save(); Navigation.push("ProfileScreen")}}
                        titleStyle={{fontSize:width/40, color:'white'}}>
                    </Button>
                </View>
            </View>
            <View style={{flex:10}}>
                <View style={{flexDirection:'row', height: width/2, alignItems:'center', justifyContent:'center'}}>                
                    <View>
                        <View style={{justifyContent: 'center', paddingLeft:'3%'}}>
                            <View style={{backgroundColor:'white', width: width/2.9, borderRadius:120, height: width/2.9}}>
                                <Avatar.Image
                                    style={{backgroundColor:"grey", marginLeft:'1.5%', marginTop:'2%'}}
                                    size={width/3}
                                    source={{uri:'data:image/jpg;base64,'+Pic}} />
                                <Icon2 name="camera-sharp"
                                    size={width/13}
                                    style={styles.profileiconContainer}
                                    onPress={profilePic}>
                                </Icon2>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                    <Icon name="ninja" size={width/12} color='white'></Icon>
                    <TextInput 
                        placeholder="Profile Name" 
                        placeholderTextColor={'#666666'}
                        onChangeText={newProfileName => SetProfileName(newProfileName)}
                        defaultValue={ProfileName}
                        onPressIn={()=>{
                            SetCount(1)
                            console.log(count)
                            console.log(ProfileName)}}
                        style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}/>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                    <Icon2 name="ios-person-circle-outline" color='white' size={width/12}></Icon2>
                    <TextInput 
                        placeholder="First Name" 
                        placeholderTextColor={'#666666'}
                        onChangeText={newFirstName => SetFirstName(newFirstName)}
                        defaultValue={FirstName}
                        onPressIn={()=>{
                            SetCount(1)
                            console.log(count)
                            console.log(FirstName)}}
                        style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                    <Icon2 name="ios-person-circle-outline" color='white' size={width/12}></Icon2>
                    <TextInput 
                        placeholder="Last Name" 
                        placeholderTextColor={'#666666'}
                        onChangeText={newText => SetLastName(newText)}
                        defaultValue={LastName}
                        onPressIn={()=>{
                            SetCount(1)
                            console.log(count)
                            console.log(LastName)}}
                        style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                    <Icon2 name="ios-calendar" color='white' size={width/12}></Icon2>
                    <TextInput 
                        placeholder="DOB" 
                        placeholderTextColor={'#666666'}
                        onChangeText={newText => SetDOB(newText)}
                        defaultValue={DOB}
                        onPressIn={()=>{
                            SetCount(1)
                            console.log(count)
                            console.log(DOB)}}
                        style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                    <Icon name="phone" size={width/12} color='white'></Icon>
                    <TextInput 
                        placeholder="Phone Number" 
                        placeholderTextColor={'#666666'}
                        onChangeText={newText => SetPhoneNumber(newText)}
                        defaultValue={PhoneNumber}
                        onPressIn={()=>{
                            SetCount(1)
                            console.log(count)
                            console.log(PhoneNumber)}}
                        style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                    <Icon2 name="mail-outline" size={width/12} color='white'></Icon2>
                    <TextInput 
                        placeholder="E-mail" 
                        placeholderTextColor={'#666666'}
                        onChangeText={newText => SetEmail(newText)}
                        defaultValue={Email}
                        onPressIn={()=>{
                            SetCount(1)
                            console.log(count)
                            console.log(Email)}}
                        style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                    <Icon3 name="globe-americas" size={width/12} color='white'></Icon3>
                    <TextInput 
                        placeholder="Country" 
                        placeholderTextColor={'#666666'}
                        onChangeText={newText => SetCountry(newText)}
                        defaultValue={Country}
                        onPressIn={()=>{
                            SetCount(1)
                            console.log(count)
                            console.log(Country)}}
                        style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                    <Icon2 name="location-sharp" size={width/12} color='white'></Icon2>
                    <TextInput 
                        placeholder="City" 
                        placeholderTextColor={'#666666'}
                        onChangeText={newText => SetCity(newText)}
                        defaultValue={City}
                        onPressIn={()=>{
                            SetCount(1)
                            console.log(count)
                            console.log(City)}}
                        style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                </View>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    edit: {
      width: '30%',
      height: 60,
    },
    centerContent: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
     },
     removeImage: {
      marginLeft: '5%',
     },
     textInput: {
      borderBottomWidth: 1,
      borderColor: "#121212",
      color: "white"
     },
     iconContainer: {
      color:'silver',
      alignSelf: 'flex-end',
      bottom: width/1.9,
      left: width/2.5,
      zIndex: 1
    },
    profileiconContainer: {
      color:'silver',
      alignSelf: 'flex-end',
      bottom: width/3.3,
      zIndex: 1
    }
  });
export default EditProfile;