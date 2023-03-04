import React from 'react';  
import { View, Text, ScrollView, StyleSheet, Dimensions} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar} from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Album from './Album';
import Post from './Post';
import { launchImageLibrary } from "react-native-image-picker";
import { Image } from 'native-base';
import { BottomSheet, ListItem, Input, Button } from "react-native-elements";



const ProfileScreen = () => {

  const [profileName,SetProfileName] = React.useState('Nightmare');
  const [show,setShow]=React.useState(false);
  const [tabName,SetTabName]=React.useState(""); 
  const [Pic,SetPic]=React.useState('');
  const Tab = createMaterialTopTabNavigator();
  const Navigation = useNavigation()
  const [IsVisible,SetIsVisible] = React.useState(false);
  
 
  var {width,height} = Dimensions.get('window')
  var images = [
    require('../android/app/src/images/1.png'),
    require('../android/app/src/images/2.jpeg'),
    require('../android/app/src/images/3.jpg'),
    require('../android/app/src/images/4.jpg'),
    require('../android/app/src/images/5.jpg'),
    require('../android/app/src/images/6.jpg'),
    require('../android/app/src/images/7.jpg'),
    require('../android/app/src/images/1.png'),
    require('../android/app/src/images/2.jpeg'),
    require('../android/app/src/images/3.jpg'),
    require('../android/app/src/images/4.jpg'),
    require('../android/app/src/images/5.jpg'),
    require('../android/app/src/images/6.jpg'),
    require('../android/app/src/images/7.jpg'),
  ]
  renderSection = () => {
    
    return images.map((image,index) => {
      
      return(
        <View key={index} style={[{width:(width/3.18)},
                                  {height:(width/3.18)},
                                  index % 3 !==0 ? {paddingLeft:2} : {paddingLeft:0},
                                  index === 3 ? {borderTopEndRadius:10} : {borderTopLeftRadius:0}]}>
            <Image style={{flex:1, width: undefined, height: undefined}}
              source={image}
              alt="posts"></Image>
        </View>
      )
    })
  }

  const MenuScreen = () =>{
    SetIsVisible(true)
  }

  const list=[
    {Title: "New Post",
    },
    {Title: "New Album",
    },
    {Title: "Edit Profile",
    },
  ]

  return(
    <View style={{flex:1, backgroundColor:'black'}}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <Text style={{color:'white', fontSize:20, marginLeft:5, marginTop:5}}>{profileName}</Text>
            <View style={{flexDirection:'row'}}>
               <Icon name='add-circle-outline' size={30} color={'white'} style={{marginTop:5,marginRight:5 }}></Icon>
               <Icon name='people-circle' 
                     size={30} 
                     color={'white'} 
                     style={{marginTop:5}}
                     onPress={()=>{MenuScreen(this)}}>
                <ScrollView>
                  <BottomSheet
                    isVisible={IsVisible}
                    containerStyle={{backgroundColor:"#1f1e1e",
                                    borderTopLeftRadius:30,
                                    borderTopRightRadius:30,
                                    borderWidth:1,
                                    borderTopColor:'white',
                                    marginTop:280}}>
                      <View style={{alignItems:'flex-end'}}>
                          <Icon name="close"
                            style={{color:'white', marginRight:10}} 
                            onPress={() => {SetIsVisible(false)}} 
                            size={23}>  
                          </Icon>
                      </View>
                      <View>
                          <View style={{alignItems:'center'}}>
                              <Avatar.Image
                                    style={{backgroundColor:"grey",marginLeft:'1.7%'}}
                                    size={100}
                                    source={{uri:'https://images.unsplash.com/photo-1506424482693-1f123321fa53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmlkZXJzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',}} />  
                          </View>
                          <View style={{paddingTop:'5%', alignItems:'center'}}>
                              <Text style={{fontSize:25, color:'white'}}>Vikranth Venkateswar</Text>
                              <View style={{flexDirection:'row'}}>
                                  <Text style={{color:'white'}}>Chennai </Text>
                                  <Icon name='location' size={13} style={{paddingTop:'1%', color:'white'}}></Icon>
                              </View>
                              <View>
                                  <Text style={{color:'white'}}>youtube link</Text>
                              </View>
                          </View>
                          <View style={{justifyContent:'space-around', flexDirection:'row', paddingTop:'5%', paddingBottom:'5%'}}>
                              <View style={{alignItems:'center'}}>
                                  <Text style={{color:'silver'}}>20</Text>
                                  <Text style={{color:'white'}}>rides</Text>
                              </View>
                              <View style={{alignItems:'center'}}>
                                  <Text style={{color:'silver'}}>148k</Text>
                                  <Text style={{color:'white'}}>followers</Text>
                              </View>
                              <View style={{alignItems:'center'}}>
                                  <Text style={{color:'silver'}}>28</Text>
                                  <Text style={{color:'white'}}>following</Text>
                              </View>
                          </View>
                          <View style={{flexDirection:'row', justifyContent:'space-evenly', marginBottom:40}}>
                              <Button  
                                mode='contained' title='Edit Profile'
                                type="solid"
                                onPress={() => Navigation.push("EditProfile", SetIsVisible(false))}
                                titleStyle={{fontSize:11, color:'black'}}
                                buttonStyle={{width:(width/2.5),
                                              height:(width/12),
                                              backgroundColor:'white',
                                              borderRadius:4,}}>
                              </Button> 
                              <Button  
                                mode='contained' title='Add Friend'
                                type="solid"
                                titleStyle={{fontSize:11, color:'black'}}
                                buttonStyle={{width:(width/2.5),
                                              height:(width/12),
                                              backgroundColor:'white',
                                              borderRadius:4}}>
                              </Button>                        
                          </View>
                      </View>
                  </BottomSheet>
                </ScrollView>  
               </Icon>
            </View>
        </View>
        <View style={{width:(width-20), height:90, borderColor:'black', borderWidth:1, marginLeft:10, marginTop:10, justifyContent:'center', borderRadius:10, backgroundColor:'#1f1e1e'}}>
            <View style={{flexDirection:'row'}}>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}>
                    <View style={{width:(width/5), height:(width/5), borderRadius:(width/8), marginLeft:10, backgroundColor:'white'}}></View>
                    <View style={{width:(width/5), height:(width/5), borderRadius:(width/8), marginLeft:10, backgroundColor:'white'}}></View>
                    <View style={{width:(width/5), height:(width/5), borderRadius:(width/8), marginLeft:10, backgroundColor:'white'}}></View>
                    <View style={{width:(width/5), height:(width/5), borderRadius:(width/8), marginLeft:10, backgroundColor:'white'}}></View>
                    <View style={{width:(width/5), height:(width/5), borderRadius:(width/8), marginLeft:10, backgroundColor:'white'}}></View>
                    <View style={{width:(width/5), height:(width/5), borderRadius:(width/8), marginLeft:10, backgroundColor:'white'}}></View>
                </ScrollView>
            </View>
        </View>
        <View style={{marginTop:15}}></View>
        <ScrollView>
            <View style={{backgroundColor:'black', width:(width-20), height:'100%', marginLeft:10, borderRadius:10}}>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    {this.renderSection()}
                </View>
            </View>
        </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  
  CircleShape: {
    width: 135,
    height: 135,
    borderRadius: 135 / 2,
    backgroundColor: 'black',
  },
  modalBackGround: {
    flex: .3,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
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
});


export default ProfileScreen;


