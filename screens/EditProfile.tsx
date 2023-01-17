import React from "react";
import { StyleSheet, View, Text, ToastAndroid, Alert, TextInput, ScrollView } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { Button } from "react-native-elements";



export default function App (){


    const[Pic,SetPic]=React.useState('');
    const Navigation = useNavigation()
    const setImgMsg = msg => {
        ToastAndroid.showWithGravity(msg,ToastAndroid.SHORT,ToastAndroid.CENTER)
    }

    const uploadImage = () => {
        let options={
        mediaType: 'photo',
        quality: 1,
        includeBase64: true,
        }

        launchImageLibrary(options,Response=>{
        if(Response.didCancel){
            setImgMsg('cancelled image selection')
        }
        else if(Response.errorCode == 'permission'){
            setImgMsg('permission not satisfied')
        }
        else if(Response.errorCode == 'others'){
            setImgMsg(Response.errorMessage)
        }
        else if(Response.assets[0].fileSize > 2097152){
            Alert.alert('maximum image size exceded','please choose image under 2mb'[{text: 'OK'}])
        }
        else{
            SetPic(Response.assets[0].base64)
        }
        })

    }
    const removeImage = () => {
        SetPic('')
        setImgMsg('IMAGE REMOVED')
    }

    return(
        <View style={{flex:1, flexDirection:'column'}}>
            <ScrollView>
                <View style={{flex:.5, backgroundColor:'black', flexDirection:'row', justifyContent:'space-between'}}>
                    <Icon2 name="ios-chevron-back-outline" size={23} style={{paddingLeft:'5%', paddingTop:'2%'}} 
                         onPress={()=> Navigation.goBack()}>
                    </Icon2>
                    <View style={{paddingRight:'5%'}}>
                        <Button  
                            mode='contained' color="#121212" title='save profile'
                            type="outline"
                            buttonStyle={{borderColor:'white'}}
                            onPress={()=> Navigation.push("ProfileScreen")}
                            titleStyle={{fontSize:10, color:'white'}}>
                        </Button>
                    </View>
                </View>
                <View style={{flex:10, backgroundColor:'black'}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{justifyContent: 'center',  marginTop: 15, paddingLeft:'3%'}}>
                            <Avatar.Image
                            style={{backgroundColor:"#121212"}}
                            size={120}
                            source={{uri:'data:image/png;base64,'+Pic}} />
                        </View>
                        <View style={[styles.centerContent, {marginTop:'10%', marginLeft:'5%', flexDirection:'row'}]}>
                            <View>
                                <Button mode='contained' color="#121212" title='Upload Image'
                                     type="outline"
                                     buttonStyle={{borderColor:'white'}}
                                     titleStyle={{fontSize:10, color:'white'}}
                                     onPress={() => uploadImage()}>
                                </Button>
                            </View>
                            <View style={styles.removeImage}>
                                <Button mode='contained' color="#121212" title='remove Image'  
                                    type="outline"
                                    buttonStyle={{borderColor:'white'}}
                                    titleStyle={{fontSize:10, color:'white'}}
                                    onPress={() => removeImage()}>
                                </Button>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                        <Icon2 name="ios-person-circle-outline" size={30}></Icon2>
                        <TextInput 
                            placeholder="First Name" 
                            placeholderTextColor={'#666666'}
                            style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                        <Icon2 name="ios-person-circle-outline" size={30}></Icon2>
                        <TextInput 
                            placeholder="Last Name" 
                            placeholderTextColor={'#666666'}
                            style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                        <Icon2 name="ios-calendar" size={30}></Icon2>
                        <TextInput 
                            placeholder="DOB" 
                            placeholderTextColor={'#666666'}
                            style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                        <Icon name="phone" size={30}></Icon>
                        <TextInput 
                            placeholder="Phone Number" 
                            placeholderTextColor={'#666666'}
                            style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                        <Icon2 name="mail-outline" size={30}></Icon2>
                        <TextInput 
                            placeholder="E-mail" 
                            placeholderTextColor={'#666666'}
                            style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                        <Icon2 name="ios-briefcase-outline" size={30}></Icon2>
                        <TextInput 
                            placeholder="Occupation" 
                            placeholderTextColor={'#666666'}
                            style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                        <Icon3 name="globe-americas" size={30}></Icon3>
                        <TextInput 
                            placeholder="Country" 
                            placeholderTextColor={'#666666'}
                            style={[styles.textInput , {width:'70%', marginLeft: '3%', marginRight:'7%'}]}></TextInput>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'4%'}}>
                        <Icon2 name="location-sharp" size={30}></Icon2>
                        <TextInput 
                            placeholder="City" 
                            placeholderTextColor={'#666666'}
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
     }
  });