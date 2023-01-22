import React from "react";
import { View, Text,ImageBackground,StyleSheet } from "react-native";





export default function NewTrip() {
    return(
       <View style={{backgroundColor:"#003049",height:"100%",width:"100%",flexDirection:"row"}}>
               <ImageBackground
       style={[styles.destination,{justifyContent:"center"}]}
       imageStyle={{ borderRadius: 15,opacity:0.9,}}
        source={{
          uri:
            'https://cdn.pixabay.com/photo/2020/04/13/08/32/zzz-5037255_960_720.jpg',
        }}>
             <View style={styles.darkness}>
    <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>GOA</Text>
</View>
    </ImageBackground>

     <ImageBackground
       style={[styles.destination,{justifyContent:"center"}]}
       imageStyle={{ borderRadius: 15,opacity:0.9,}}
       blurRadius={4}
        source={{
          uri:
            'https://cdn.pixabay.com/photo/2022/11/02/16/21/mountain-7565364_960_720.jpg',
        }}>
            
    <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>LADAKH</Text>

    </ImageBackground>
       </View>
    );
}

const styles = StyleSheet.create({
  
  destination: {
    width: 150,
    height: 80,
    borderRadius: 30,
    margin:15
  },
  imageBackGround: {
    opacity:0
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
   darkness: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    borderRadius: 15,
    flex:1,
    justifyContent:"center"
  },

});