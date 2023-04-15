import React from "react";
import { Dimensions, TextInput, View} from "react-native"
import { Text } from "react-native-elements";
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';


var {width,height} = Dimensions.get('window')


const Followers = () => {

    const [load,setLoad] = React.useState('add');
    const [profileName,setProfileName] = React.useState('');
    
    const db = firebase.firestore();




    renderSection = () => {

        if(load == 'add'){

            return(
                <View style={{marginTop:20}}>
                    <View style={{alignItems:'center'}}>
                        <TextInput style={{backgroundColor:'white',
                                           borderRadius:10,
                                           width:(width-15)}}
                                    placeholder="Enter Profile Name" 
                                    placeholderTextColor={'#666666'}
                                    onChangeText={newProfileName => setProfileName(newProfileName)}>
                        </TextInput>
                    </View>
                </View>
            )
        }

    
    }

    return(
        <View style={{flex:1, backgroundColor:'black'}}>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:10}}>
                <View style={{backgroundColor:'grey',
                          width:(width/3.2),
                          height:(30),
                          alignItems:'center',
                          justifyContent:'center',
                          borderRadius:5}}>
                    <Text style={{color:'white'}} onPress={() => {setLoad("add")}}>ADD</Text>
                </View>
                <View style={{backgroundColor:'grey',
                          width:(width/3.2),
                          height:(30),
                          alignItems:'center',
                          justifyContent:'center',   
                          borderRadius:5}}>                    
                    <Text style={{color:'white'}} onPress={() => {setLoad("followers")}}>FOLLOWERS</Text>
                </View>
                <View style={{backgroundColor:'grey',
                          width:(width/3.2),
                          height:(30),
                          alignItems:'center',
                          justifyContent:'center',
                          borderRadius:5}}>                   
                    <Text style={{color:'white'}} onPress={() => {setLoad("following")}}>FOLLOWING</Text>
                </View>
            </View>
            <View>
                {this.renderSection()}
            </View>
        </View>
    );
}

export default Followers;