import React from 'react';  
import { View, Text, ScrollView, ImageBackground, StyleSheet, Alert, Modal, TouchableOpacity, Animated, Image, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar} from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { BottomSheet } from 'react-native-elements';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Album from './Album';
import Post from './Post';
import { launchImageLibrary } from "react-native-image-picker";


const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <View
          style={[styles.modalContainer]}>
          {children}
        </View>
      </View>
    </Modal>
  );
}

const ProfileScreen = () => {

  const [tabName,SetTabName]=React.useState(""); 
  const[Pic,SetPic]=React.useState('');
  const Tab = createMaterialTopTabNavigator();
  const Navigation = useNavigation()
  const [IsVisible,SetIsVisible]=React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const MenuScreen = () =>{
      SetIsVisible(true)
    }
    const imagesScreen = () =>{
      SetTabName("imagesScreen")
    }
    const albumScreen = () =>{
      SetTabName("albumScreen")
    }
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
  var {width,height} = Dimensions.get('window')

  return(
    <View style={{flex:1, flexDirection:'column', backgroundColor:'#121212'}}>
       <ScrollView>
        <ModalPoup visible={visible} >
          <View style={{justifyContent:'space-between'}}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                  <Icon name='ios-close-outline' size={30} style={{paddingRight:'2%'}} ></Icon>
              </TouchableOpacity>
            </View>
            <View style={{paddingLeft:'4%'}}>
                <View style={{flexDirection:'row', paddingTop:'4%', alignItems:'center', marginBottom:'4%'}}>
                    <Icon name="bicycle-sharp" size={18}></Icon>
                    <Text style={{fontSize:16, paddingLeft:'5%'}} onPress={() => uploadImage()}>On Ride</Text>
                </View>
                <View style={{flexDirection:'row', paddingTop:'4%', alignItems:'center', marginBottom:'4%'}}>
                    <Icon name="images-outline" size={18} ></Icon>
                    <Text style={{fontSize:16, paddingLeft:'5%'}}>Add Album</Text>
                </View>
                <View style={{flexDirection:'row', paddingTop:'4%', alignItems:'center', marginBottom:'4%'}}>
                    <Icon name="md-pencil-outline" size={18} ></Icon>
                    <Text style={{fontSize:16, paddingLeft:'5%'}} onPress={()=> Navigation.push("EditProfile")}>Edit Profile</Text>
                </View>
                <View style={{flexDirection:'row', paddingTop:'4%', alignItems:'center', marginBottom:'4%'}}>
                    <Icon name="ios-people-outline" size={18} ></Icon>
                    <Text style={{fontSize:16, paddingLeft:'5%'}}>Add Friend</Text>
                </View>
                <View style={{flexDirection:'row', paddingTop:'4%', alignItems:'center', marginBottom:'4%'}}>
                    <Icon name="ios-settings-sharp" size={18} ></Icon>
                    <Text style={{fontSize:16, paddingLeft:'5%'}}>Settings</Text>
                </View>
            </View>
          </View>
        </ModalPoup>
        <ImageBackground
            style={{ flex:1, backgroundColor:'#121212', flexDirection:'row', justifyContent:'space-between', position:'relative', opacity:0.8}}
            source={{uri:'https://www.theindia.co.in/place/travelogues/articleplace/ktm-in-ladakh.jpg',}}>
              <View>
                <View style={{marginLeft:'5%', marginTop:'50%'}}>
                  <View>
                    <View style={[styles.CircleShape, {position:'relative'}]}></View>
                    <Avatar.Image
                        style={{backgroundColor:"grey", position:'absolute',marginLeft:'1.7%',marginTop:'1.5%', opacity:1}}
                        size={130}
                        source={{uri:'https://images.unsplash.com/photo-1506424482693-1f123321fa53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmlkZXJzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',}} />
                  </View>
                </View>
              </View>
              <Icon name='menu' size={30} style={{paddingRight:'4%'}} onPress={() => setVisible(true)}>  
              </Icon>
          </ImageBackground>
          <View style={{ flex:2, backgroundColor:'black', position:'absolute', marginTop:'51%',width:'100%', borderTopLeftRadius:25, borderTopRightRadius:25}}>
            <View style={{paddingLeft:'5%', paddingTop:'5%'}}>
              <Text style={{fontSize:25, color:'grey'}}>Vikranth Venkateswar</Text>
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'grey'}}>On Ride</Text>
                <Icon name='bicycle-sharp' size={13} style={{paddingLeft:'3%', paddingTop:'1%'}}></Icon>
              </View>
              <View>
                <Text style={{color:'grey'}}>Bike - RC 200 ❤️</Text>
              </View>
              <View style={{justifyContent:'space-around', flexDirection:'row', paddingTop:'5%', paddingBottom:'5%'}}>
                <View style={{alignItems:'center'}}>
                  <Text>20</Text>
                  <Text style={{color:'grey'}}>rides</Text>
                </View>
                <View style={{alignItems:'center'}}>
                  <Text>148k</Text>
                  <Text style={{color:'grey'}}>followers</Text>
                </View>
                <View style={{alignItems:'center'}}>
                  <Text>28</Text>
                  <Text style={{color:'grey'}}>following</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ flex:2, backgroundColor:'black', marginTop:'39%',alignItems:'center'}}>
              <View style={{height:'8%', width:'80%', borderWidth:1, borderColor:'grey', alignItems:'center', justifyContent:'center', borderRadius:5}}>
                <Text style={{color:'grey'}}>ALBUM</Text>
              </View>
              <View style={{paddingTop:'5%'}}>
                <View style={{paddingBottom:'5%'}}>
                <Image source={require('../android/app/src/album/1.jpg')} style={[{width:(width-50)},{height:(width)/2.5},{borderRadius:10, opacity:0.6}]}></Image>             
                </View>
                <View style={{paddingBottom:'5%'}}>
                <Image source={require('../android/app/src/album/2.png')} style={[{width:(width-50)},{height:(width)/2.5},{borderRadius:10, opacity:0.6}]}></Image>             
                </View>
                <View style={{paddingBottom:'5%'}}>
                <Image source={require('../android/app/src/album/3.webp')} style={[{width:(width-50)},{height:(width)/2.5},{borderRadius:10, opacity:0.6}]}></Image>             
                </View>
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


