import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions, Image} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';


var {width,height} = Dimensions.get('window')


export default function ContactScreen() {
  return (
    <View style={{flex:1, backgroundColor:'black'}}>
      <ScrollView
       showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:2}}>
            <Text style={{color:'white', fontSize:20}}>App Name</Text>
        </View>
        <View style={{flexDirection:'row', marginTop:13, paddingBottom:13}}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
                <Image source={require('../android/app/src/images/6.jpg')}
                    style={{width:(width/5), height:(width/5), borderRadius:(width/8), marginLeft:15}}></Image>             
                <Image source={require('../android/app/src/images/2.jpeg')}
                    style={{width:(width/5), height:(width/5), borderRadius:(width/8), marginLeft:15}}></Image>             
                <Image source={require('../android/app/src/images/1.png')}
                    style={{width:(width/5), height:(width/5), borderRadius:(width/8), marginLeft:15}}></Image>             
                <Image source={require('../android/app/src/images/7.jpg')}
                    style={{width:(width/5), height:(width/5), borderRadius:(width/8), marginLeft:15}}></Image>             
                <Image source={require('../android/app/src/images/5.jpg')}
                    style={{width:(width/5), height:(width/5), borderRadius:(width/8), marginLeft:15}}></Image>             
                <Image source={require('../android/app/src/images/2.jpeg')}
                    style={{width:(width/5), height:(width/5), borderRadius:(width/8), marginLeft:15}}></Image>             
                <Image source={require('../android/app/src/images/6.jpg')}
                    style={{width:(width/5), height:(width/5), borderRadius:(width/8), marginLeft:15}}></Image>             
            </ScrollView>
         </View>           
         <View style={{paddingTop:10}}>
            <View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View style={{width:(width/12), height:(width/12), borderRadius:(width/8), backgroundColor:'white'}}></View>
                    <Text style={{color:'white', fontSize:15, marginLeft:5}}>Nightmare</Text>
                </View>
                <View style={{paddingBottom:'5%'}}>
                    <Image source={require('../android/app/src/images/1.png')} style={[{width:width},{height:width},{marginTop:5}]}></Image>             
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{flexDirection:'row', alignItems:'center', paddingTop:5}}>
                            <Icon name="heart-outline" style={{color:'white'}} size={30}></Icon>
                            <Icon2 name="send" style={{color:'white', marginLeft:10}} size={23}></Icon2>
                        </View>
                        <View>
                            <Icon name="location-outline" style={{color:'white'}} size={25}></Icon>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View style={{width:(width/12), height:(width/12), borderRadius:(width/8), backgroundColor:'white'}}></View>
                        <Text style={{color:'white', fontSize:15, marginLeft:5}}>Nightmare</Text>
                    </View>
                    <View style={{paddingBottom:'5%'}}>
                        <Image source={require('../android/app/src/images/3.jpg')} style={[{width:width},{height:width},{marginTop:5}]}></Image>             
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <View style={{flexDirection:'row', alignItems:'center', paddingTop:5}}>
                                <Icon name="heart-outline" style={{color:'white'}} size={30}></Icon>
                                <Icon2 name="send" style={{color:'white', marginLeft:10}} size={23}></Icon2>
                            </View>
                            <View>
                                <Icon name="location-outline" style={{color:'white'}} size={25}></Icon>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View style={{width:(width/12), height:(width/12), borderRadius:(width/8), backgroundColor:'white'}}></View>
                        <Text style={{color:'white', fontSize:15, marginLeft:5}}>Nightmare</Text>
                    </View>
                    <View style={{paddingBottom:'5%'}}>
                        <Image source={require('../android/app/src/images/4.jpg')} style={[{width:width},{height:width},{marginTop:5}]}></Image>             
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <View style={{flexDirection:'row', alignItems:'center', paddingTop:5}}>
                                <Icon name="heart-outline" style={{color:'white'}} size={30}></Icon>
                                <Icon2 name="send" style={{color:'white', marginLeft:10}} size={23}></Icon2>
                            </View>
                            <View>
                                <Icon name="location-outline" style={{color:'white'}} size={25}></Icon>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
         </View> 
      </ScrollView>                      
    </View>
  );
}