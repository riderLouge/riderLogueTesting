import React, { Component } from "react";
import { View, Text,StyleSheet, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'; 
import { Button } from "react-native-elements";



var {width,height} = Dimensions.get('window')

export default function InitialScreen() {

  
  return (
    <View style={{flex:1, backgroundColor:'black'}}>
      <View style={{flex:1, backgroundColor:'black', flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{paddingLeft:'2%', fontSize:20, fontStyle:"italic", paddingTop:'2%', color:'white'}}>QR Details</Text>
        <View style={{paddingRight:'2%'}}>
            <Button  
                mode='contained' color="#121212" title='Add QR'
                type="outline"
                buttonStyle={{borderColor:'white', width:50, marginTop:'2%', backgroundColor:'#1f1e1e'}}
                titleStyle={{fontSize:width/40, color:'white'}}>
            </Button>
        </View>
      </View>
      <View style={{flex:15, alignItems:'center'}}>
       <View style={{backgroundColor:'#1f1e1e', width:(width-20), height:(width/8), marginTop:'5%', borderWidth:1, flexDirection:'row', borderRadius:10}}>
          <Icon name="ios-qr-code-sharp" size={width/15} style={{marginLeft:'2%', marginTop:'2.5%', color:'white'}}></Icon>
          <Text style={{fontSize: width/20, marginLeft:'2%', marginTop: width/45, color:'white'}}>HELMET</Text>
       </View>
       <View style={{backgroundColor:'#1f1e1e', width:(width-20), height:(width/8), marginTop:'5%', borderWidth:1, flexDirection:'row', borderRadius:10}}>
          <Icon name="ios-qr-code-sharp" size={width/15} style={{marginLeft:'2%', marginTop:'2.5%', color:'white'}}></Icon>
          <Text style={{fontSize: width/20, marginLeft:'2%', marginTop: width/45, color:'white'}}>Bike</Text>
       </View>
       <View style={{backgroundColor:'#1f1e1e', width:(width-20), height:(width/8), marginTop:'5%', borderWidth:1, flexDirection:'row', borderRadius:10}}>
          <Icon name="ios-qr-code-sharp" size={width/15} style={{marginLeft:'2%', marginTop:'2.5%', color:'white'}}></Icon>
          <Text style={{fontSize: width/20, marginLeft:'2%', marginTop: width/45, color:'white'}}>MOBILE</Text>
       </View>
       <View style={{backgroundColor:'#1f1e1e', width:(width-20), height:(width/8), marginTop:'5%', borderWidth:1, flexDirection:'row', borderRadius:10}}>
          <Icon name="ios-qr-code-sharp" size={width/15} style={{marginLeft:'2%', marginTop:'2.5%', color:'white'}}></Icon>
          <Text style={{fontSize: width/20, marginLeft:'2%', marginTop: width/45, color:'white'}}>BAG</Text>
       </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    height:'23%' ,
    width:'90%',
    borderBottomStartRadius:40,
    borderTopEndRadius:40,
    backgroundColor: '#91D8E4',
  },
  text: {
    fontSize: 16,
    color: '#000'
  },
  icon:{
    color:'#000',
    fontSize:100
  },
  editIcon:{
    color:'#000',
    fontSize:25,
    marginRight:10
  }
});