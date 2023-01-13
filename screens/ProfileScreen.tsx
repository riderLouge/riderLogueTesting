import React from "react";
import { View, Text, StyleSheet,Modal, Animated, ScrollView, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar, Title } from "react-native-paper";
import Album from "./Album";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { BottomSheet, ListItem, Input, Button } from "react-native-elements";
import post from "./Post";
import AddFriends from "./AddFriends";
import EditProfile from "./EditProfile";
import { NativeScreenNavigationContainer } from "react-native-screens";



export default function ProfileScreen() {

  const Tab = createMaterialTopTabNavigator();
  const [Name,SetName]=React.useState("");
  const [IsVisible,SetIsVisible]=React.useState(false);
  const [TestIsVisible,SetTestIsVisible]=React.useState(false);
  const [Pic,SetPic]=React.useState('');
  const Post= () => {
  
  }
  const Album= () => {

  }
  const EditProfile= () =>{
   <Tab.Navigator>
        <Tab.Screen name="EditProfile" component={EditProfile}></Tab.Screen>
    </Tab.Navigator>
  } 
  var screen=""
  const MenuScreen = () =>{
    SetIsVisible(true)
    screen="menu"
    SelectScreen()
  }
  const AddFriendScreen = () =>{
    SetTestIsVisible(true)
    screen="addFriend"
    SelectScreen()
  }
  const SelectScreen = () =>{
    if(screen=="menu"){
    }
    else if(screen=="addFriend"){
     
    }
  }

  const list=[
    {Title: "New Post",
     onPress: Post},
    {Title: "New Album",
    onPress: Album},
    {Title: "Edit Profile",
     onPress:EditProfile,
    },
  ]

  const list2=[
    {Title: "New Post2",
     onPress: Post},
    {Title: "New Album2",
    onPress: Album},
    {Title: "Edit Profile2",
     onPress:EditProfile,
    },
  ]


  return (
    <View style={[styles.container, {
      flexDirection: "column", backgroundColor: "black"
    }]}>
      <View style={{ flex: 0.5, backgroundColor: "black", justifyContent: 'space-between', flexDirection: 'row' }}>
        <View style={{paddingLeft: '5%' , justifyContent: 'center'}}>
          <Text style={{fontSize: 20}}>Nightmare</Text>
        </View>
        <View style={{paddingRight: '5%', justifyContent: 'center', flexDirection: 'row'}}>
          <Icon name='people-outline' size={23} style={{paddingTop: '5%', paddingRight:'3%'}}
            onPress={()=>{AddFriendScreen(this)}}>
               <ScrollView>
                <BottomSheet
                  TestIsVisible={TestIsVisible}
                  containerStyle={{backgroundColor:"pink" ,borderTopLeftRadius:30 ,borderTopRightRadius:30 , marginTop:100}}
                  >
                   <View style={{paddingLeft:'90%', paddingTop:'5%'}}>
                    <Icon name="close" 
                      onPress={() => {SetTestIsVisible(false)}} 
                      size={23}>  
                    </Icon>
                    </View>
                      {
                      list2.map((l,i)=>(
                        <ListItem key={i} containerStyle={l.containerStyle } onPress={l.onPress} style={{}}>
                          <ListItem.Content style={{backgroundColor:"green"}}>
                            <ListItem.Title >{l.Title}</ListItem.Title>
                          </ListItem.Content>
                        </ListItem>
                      ))
                     }
                </BottomSheet>
              </ScrollView>  
          </Icon>
          <View>
          <Icon name='menu' size={23} style={{paddingTop: '5%'}}
            onPress={()=>{MenuScreen(this)}}>
              <ScrollView>
                <BottomSheet
                  isVisible={IsVisible}
                  containerStyle={{backgroundColor:"#1A1717" ,borderTopLeftRadius:30 ,borderTopRightRadius:30 , marginTop:600}}
                >
                   <View style={{paddingLeft:'90%', paddingTop:'5%'}}>
                    <Icon name="close" 
                      onPress={() => {SetIsVisible(false)}} 
                      size={23}>  
                    </Icon>
                    </View>
                      {
                      list.map((l,i)=>(
                        <ListItem key={i} containerStyle={l.containerStyle } onPress={l.onPress} style={{}}>
                          <ListItem.Content style={{backgroundColor:"yellow"}}>
                            <ListItem.Title >{l.Title}</ListItem.Title>
                          </ListItem.Content>
                        </ListItem>
                      ))
                     }
                </BottomSheet>
              </ScrollView>  
          </Icon>
          </View>
        </View>
      </View>
      <View style={{ flex: 2, backgroundColor: "black" }}>
        <View style={{paddingLeft: '5%'}}>
        <Avatar.Image
             style={{backgroundColor:"#1A1717"}}
             size={100}
             source={{uri:'data:image/png;base64,'+Pic}} />
        </View>
      </View>
      <View style={{ flex: 5, flexDirection: 'column', backgroundColor: "black"}}>
         <Tab.Navigator initialRouteName="Post" 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'post') {
                    iconName = focused? 'images-outline' : 'images-outline';
                    } else if (route.name === 'album') {
                    iconName = focused ? 'albums-outline' : 'albums-outline';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={20} color={color} />;
                },
                //tabBarActiveTintColor: '#182747',
                //tabBarInactiveTintColor: 'gray',
                })} >
            <Tab.Screen name="post"  component={post}  options={{
                headerStyle: {
                    backgroundColor: '#2192FF',
                },
                tabBarShowLabel:false,
                headerShown:false,
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                }} />
            <Tab.Screen name="album" component={Album} 
            options={{
                headerStyle: {
                    backgroundColor: '#2192FF',
                },
                tabBarShowLabel:false,
                headerShown:false,
                headerTintColor: '#fff',
                }} />
        </Tab.Navigator>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listStyle: {
    backgroundColor: "#2192FF"
  }
});
