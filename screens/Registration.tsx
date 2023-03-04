import { firebase } from "@react-native-firebase/firestore";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput} from "react-native";
import { Alert } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { Button } from "react-native-elements";
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';



var {width,height} = Dimensions.get('window')

const Registration = () => {

    const [FirstName,SetFirstName]=React.useState('');
    const [LastName,SetLastName]=React.useState('');
    const [Email,SetEmail]=React.useState('');
    const [Password,SetPassword]=React.useState('');
    const [PhoneNumber,SetPhoneNumber]=React.useState('');
    const [DOB,SetDOB]=React.useState('');
    const Navigation = useNavigation()



    registerUser = async(Email,Password,FirstName,LastName,PhoneNumber,DOB) => {
        
        console.log(Email)
        console.log(Password)
        console.log(FirstName)
        console.log(LastName)
        console.log(DOB)

        await firebase.auth().createUserWithEmailAndPassword(Email,Password)
        .then(() =>{
            firebase.auth().currentUser?.sendEmailVerification({
                handleCodeInApp:true,
                url:'https://riderlogue.page.link/ride',
            })
            .then(() => {
                console.log('verification email sent')
            }).catch((error)=>{
                console.log('1')
                console.log(error)
            })
            .then(() => {
                firebase.firestore().collection('users')
                .doc(firebase.auth().currentUser?.uid)
                .set({
                    FirstName,
                    LastName,
                    PhoneNumber,
                    Email,
                    DOB
                })
            })
            .catch((error) => {
                console.log('2')
                console.log(error)
            })
        })
        .catch((error) => {
            console.log('3')
            console.log(error)
        })
    }

    return(
        <View style={{flex:1, backgroundColor:'black'}}>
            <View style={{backgroundColor:'black',
                          width:(width-10),
                          borderTopStartRadius:20,
                          borderTopEndRadius:20,
                          marginTop:10}}>
                 <Text style={{fontWeight: 'normal',
                              fontSize:20,
                              color:'white',
                              marginLeft:10,
                              marginTop:25}}>App Name</Text>
                 <Text style={{fontWeight: 'bold',
                              fontSize:23,
                              color:'white',
                              marginLeft:10,
                              marginTop:53}}>Welcome Back,</Text>
                <Text style={{fontWeight: 'normal',
                              fontSize:16,
                              color:'silver',
                              marginLeft:10,
                              marginTop:5}}>Sign Un to continue</Text>
                <View style={{alignItems:'center', marginTop:10}}>
                     <View style={{flexDirection:'row',
                                  alignItems:'center',
                                  marginTop:30,
                                  borderBottomWidth:0.5,
                                  borderBottomColor:'white',
                                  width:(width-40)}}>
                        <Icon name="person-outline" size={width/20} style={{color:'white'}}></Icon>
                        <TextInput
                            style={styles.textInput}
                            placeholder="FirstName"
                            placeholderTextColor={'#666666'}
                            onChangeText={(newFirstName) => SetFirstName(newFirstName)}>   
                        </TextInput>
                    </View>                    
                    <View style={{flexDirection:'row',
                                  alignItems:'center',
                                  marginTop:5,
                                  borderBottomWidth:0.5,
                                  borderBottomColor:'white',
                                  width:(width-40)}}>
                        <Icon name="person-outline" size={width/20} style={{color:'white'}}></Icon>
                        <TextInput
                            style={styles.textInput}
                            placeholder="LastName"
                            placeholderTextColor={'#666666'}
                            onChangeText={(newLastName) => SetLastName(newLastName)}>   
                        </TextInput>
                    </View>
                    <View style={{flexDirection:'row',
                                 alignItems:'center',
                                 marginTop:5,
                                 borderBottomWidth:0.5,
                                 borderBottomColor:'white',
                                 width:(width-40)}}>
                        <Icon2 name="email" size={width/20} style={{color:'white'}}></Icon2>
                        <TextInput 
                            style={styles.textInput}
                            placeholder="Email"
                            placeholderTextColor={'#666666'}
                            onChangeText={(newEmail) => SetEmail(newEmail)}>   
                        </TextInput>
                    </View>
                    <View style={{flexDirection:'row',
                                 alignItems:'center',
                                 marginTop:5,
                                 borderBottomWidth:0.5,
                                 borderBottomColor:'white',
                                 width:(width-40)}}>
                        <Icon2 name="email" size={width/20} style={{color:'white'}}></Icon2>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Password"
                            placeholderTextColor={'#666666'}
                            secureTextEntry={true}
                            onChangeText={(newPassword) => SetPassword(newPassword)}>   
                        </TextInput>
                    </View>
                    <View>
                        <Button  
                            mode='contained' title='Register'
                            type="solid"
                            buttonStyle={{width:(width/1.1),
                            height:(width/7),
                            backgroundColor:'#690367',
                            marginTop:40}}                           
                            onPress={() => registerUser(Email,Password,FirstName,LastName,)}>
                        </Button>
                    </View>
                    <View style={{flexDirection:'row', marginTop:30}}>
                        <Text style={{color:'white'}}>Already have an account ?</Text>
                        <Text style={{color:'#7a0278'}} onPress={()=> Navigation.push("Login")}>  Sign In</Text>
                    </View>
                </View>
            </View>
        </View>
    )
 }

const styles = StyleSheet.create({
    textInput: {
        color: "white",
        width:(width-120),
        marginLeft:5

    },
});


export default Registration;