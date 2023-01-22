import React from "react";
import { Button, View, Text, StyleSheet, ImageBackground,TextInput } from "react-native";

export default function MapInitialScreen(){
  return (
    <View style={{ flex: 1, alignItems: "center",width:"100%", }}>
        <View style={styles.tripDetails}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>Trip Details</Text>
        </View>
          <ImageBackground
       style={[styles.destination,{marginTop:20,justifyContent:"center"}]}
       imageStyle={{ borderRadius: 15}}
        source={{
          uri:
            'https://images.pexels.com/photos/2291428/pexels-photo-2291428.jpeg?auto=compress&cs=tinysrgb&w=600',
        }}>
     
       <TextInput
        style={styles.input}
         placeholder="From"
      />
      <TextInput
        style={styles.input}
        placeholder="To"
      />

    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  
  destination: {
    width: 325,
    height: 160,
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
