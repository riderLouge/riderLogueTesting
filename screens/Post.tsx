import React, { Component } from "react";
import { View, Dimensions, Text, Image } from "react-native";
var images = [
    require('../android/app/src/images/1.png'),
    require('../android/app/src/images/3.jpg'),
    require('../android/app/src/images/4.jpg'),
    require('../android/app/src/images/5.jpg'),
    require('../android/app/src/images/6.jpg'),
    require('../android/app/src/images/7.jpg')
]  

var {width,height} = Dimensions.get('window')

export default function Post() {
    return(
        <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
            {/* <Image source={require('../android/app/src/images/3.jpg')} style={[{width:(width/3)},{height:(width)/3}]} ></Image>
            <Image source={require('../android/app/src/images/4.jpg')} style={[{width:(width/3)},{height:(width)/3}]}></Image>
            <Image source={require('../android/app/src/images/5.jpg')} style={[{width:(width/3)},{height:(width)/3}]}></Image>
            <Image source={require('../android/app/src/images/1.png')} style={[{width:(width/3)},{height:(width)/3}]}></Image> */}

        </View>
     );
}