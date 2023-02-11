import * as React from "react";
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
    const[CoverPic,SetCoverPic]=React.useState('');
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
    
    
    db.collection('posts').get().then((snapshot) => {
        snapshot.docs.forEach(doc=>{
        renderData(doc);
        })
    })
    function renderData(doc){
        SetPic(doc.data().profilePic);
        SetCoverPic(doc.data().coverPic);
        SetProfileName(doc.data().profileName);
        SetFirstName(doc.data().firstName);
        SetLastName(doc.data().lastName);
        SetDOB(doc.data().dateOfBirth);
        SetPhoneNumber(doc.data().phoneNumber);
        SetEmail(doc.data().email);
        SetCountry(doc.data().country);
        SetCity(doc.data().city);

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
    async function coverPic(){
        try {
            const file = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.images],
            });
            console.log(file.uri)
            const path = file.uri;
            const result = await RNFetchBlob.fs.readFile(path, "base64")
            SetCoverPic(result);
        } catch (err) {
            if(DocumentPicker.isCancel(err)){

            }
            else {
                throw err;
            }  
        }
    }
    function save(){
        firestore().collection('posts').add({
            profilePic: Pic,
            coverPic: CoverPic,
            profileName: ProfileName,
            firstName: FirstName,
            lastName: LastName,
            dateOfBirth: DOB,
            phoneNumber: PhoneNumber,
            email: Email,
            country: Country,
            city: City,
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
  
    return(
        <View style={{flex:1}}>
            <ScrollView>
            <View style={{flex:.5, flexDirection:'row', justifyContent:'space-between', marginBottom:'2%'}}>
                <Text style={{paddingLeft:'2%', fontSize:20, fontStyle:"italic", paddingTop:'2%'}}>Edit Profile</Text>
                <View style={{paddingRight:'2%'}}>
                    <Button  
                        mode='contained' color="#121212" title='save profile'
                        type="outline"
                        buttonStyle={{borderColor:'white'}}
                        onPress={() => {save(); Navigation.push("ProfileScreen")}}
                        titleStyle={{fontSize:width/40, color:'white'}}>
                    </Button>
                </View>
            </View>
            <View style={{flex:10}}>
                <View style={{flexDirection:'row', borderWidth:.5, borderColor:'grey', height: width/2}}>
                    <ImageBackground
                        style={{flex:1}}
                        source={{uri:'data:image/jpg;base64,'+CoverPic}}>
                        <View>
                            <View style={{justifyContent: 'center', paddingLeft:'3%'}}>
                                <View style={{backgroundColor:'black', width: width/2.9, borderRadius:120, height: width/2.9 ,marginTop: width/12}}>
                                    <View style={{zIndex: 1}}>
                                        <Avatar.Image
                                        style={{backgroundColor:"#121212", marginLeft:'1.5%', marginTop:'2%'}}
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
                            <View style={[styles.centerContent, {marginTop:'10%', marginLeft:'5%', flexDirection:'row'}]}>
                                <View style={styles.removeImage}>
                                    <Icon2 name="camera-sharp"
                                        size={width/13}
                                        style={styles.iconContainer}
                                        onPress={coverPic}>
                                    </Icon2>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                    <Icon name="ninja" size={width/12}></Icon>
                    <TextInput 
                        placeholder="Profile Name" 
                        placeholderTextColor={'#666666'}
                        onChangeText={newProfileName => SetProfileName(newProfileName)}
                        defaultValue={ProfileName}
                        style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}>
                        </TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                    <Icon2 name="ios-person-circle-outline" size={width/12}></Icon2>
                    <TextInput 
                        placeholder="First Name" 
                        placeholderTextColor={'#666666'}
                        onChangeText={newFirstName => SetFirstName(newFirstName)}
                        defaultValue={FirstName}
                        style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                    <Icon2 name="ios-person-circle-outline" size={width/12}></Icon2>
                    <TextInput 
                        placeholder="Last Name" 
                        placeholderTextColor={'#666666'}
                        onChangeText={newText => SetLastName(newText)}
                        defaultValue={LastName}
                        style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                    <Icon2 name="ios-calendar" size={width/12}></Icon2>
                    <TextInput 
                        placeholder="DOB" 
                        placeholderTextColor={'#666666'}
                        onChangeText={newText => SetDOB(newText)}
                        defaultValue={DOB}
                        style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                    <Icon name="phone" size={width/12}></Icon>
                    <TextInput 
                        placeholder="Phone Number" 
                        placeholderTextColor={'#666666'}
                        onChangeText={newText => SetPhoneNumber(newText)}
                        defaultValue={PhoneNumber}
                        style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                    <Icon2 name="mail-outline" size={width/12}></Icon2>
                    <TextInput 
                        placeholder="E-mail" 
                        placeholderTextColor={'#666666'}
                        onChangeText={newText => SetEmail(newText)}
                        defaultValue={Email}
                        style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                    <Icon3 name="globe-americas" size={width/12}></Icon3>
                    <TextInput 
                        placeholder="Country" 
                        placeholderTextColor={'#666666'}
                        onChangeText={newText => SetCountry(newText)}
                        defaultValue={Country}
                        style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                    <Icon2 name="location-sharp" size={width/12}></Icon2>
                    <TextInput 
                        placeholder="City" 
                        placeholderTextColor={'#666666'}
                        onChangeText={newText => SetCity(newText)}
                        defaultValue={City}
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