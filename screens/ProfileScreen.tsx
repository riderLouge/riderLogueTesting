import React from 'react';  
import { View, Text, ScrollView, StyleSheet, Dimensions} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar} from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import { Image } from 'native-base';
import { BottomSheet, Button } from "react-native-elements";
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';



const ProfileScreen = () => {

  const [Pic,SetPic] = React.useState('');
  const [profileName,SetProfileName] = React.useState('');
  const [FirstName,SetFirstName] = React.useState('');
  const [LastName,SetLastName] = React.useState('');  
  const [City,SetCity] = React.useState('');
  const Navigation = useNavigation()
  const [IsVisible,SetIsVisible] = React.useState(false);
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser?.uid;

  var {width,height} = Dimensions.get('window')

  const [images, setimages] =React.useState(['']);
  
  var test: String[] = [];


  const userDoc = db.collection('users').doc(firebase.auth().currentUser?.uid)
  userDoc.collection('posts').get().then((snapshot) => {
        snapshot.forEach(doc => {
            test.push(doc.data().result)        
    })
    console.log(test.length)
    images.length=0;
      test.map((image) => {
        images.push(image+"");
      })
    })
  console.log(images.length)

  
  renderSection = () => {

   
    return images.map((image,index) => {

        if (image != ''){
            return(
                <View key={index} style={[{width:(width/3.18)},
                                          {height:(width/3.18)},
                                          index % 3 !==0 ? {paddingLeft:2} : {paddingLeft:0},
                                          index === 3 ? {borderTopEndRadius:10} : {borderTopLeftRadius:0}]}>
                    <Image
                        style={{flex:1, width:undefined, height:undefined}}
                        source={{uri:'data:image/jpg;base64,'+image}}
                        alt='postImg' />
                </View>
              )
        }
    })
  }

  async function Post(){
    try {
        const file = await DocumentPicker.pickSingle({
            type: [DocumentPicker.types.images],
        });
        const path = file.uri;
    
    
        const result = await RNFetchBlob.fs.readFile(path, "base64")
        firestore().collection('users')
          .doc(firebase.auth().currentUser?.uid)
          .collection('posts').add({
              result
          })
    } catch (err) {
        if(DocumentPicker.isCancel(err)){

        }
        else {
            throw err;
        }  
    }
  }


  db.collection('users').get().then((snapshot) => {
    snapshot.forEach(doc=>{
        if(doc.id === uid){
            ProfileData(doc);
        }            
    })
  })

  function ProfileData(doc){
        SetPic(doc.data().ProfilePic);
        SetProfileName(doc.data().ProfileName);
        SetFirstName(doc.data().FirstName);
        SetLastName(doc.data().LastName); 
        SetCity(doc.data().City);
  }


  const MenuScreen = () =>{
    SetIsVisible(true)
  }

  return(
    <View style={{flex:1, backgroundColor:'black'}}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <Text style={{color:'white', fontSize:20, marginLeft:5, marginTop:5}}>{profileName}</Text>
            <View style={{flexDirection:'row'}}>
               <Icon name='add-circle-outline' 
                     size={30}
                     color={'white'}
                     style={{marginTop:5,marginRight:5 }}
                     onPress={Post}></Icon>
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
                          <Icon name="md-chevron-down-outline"
                            style={{color:'white', marginRight:15, paddingBottom:15}} 
                            onPress={() => {SetIsVisible(false)}} 
                            size={23}>  
                          </Icon>
                      </View>
                      <View>
                          <View style={{alignItems:'center'}}>
                              <Avatar.Image
                                    style={{backgroundColor:"grey",marginLeft:'1.7%'}}
                                    size={100}
                                    source={{uri:'data:image/jpg;base64,'+Pic}} />
                          </View>
                          <View style={{paddingTop:'5%', alignItems:'center'}}>
                              <Text style={{fontSize:25, color:'white'}}>{FirstName +" "+LastName}</Text>
                              <View style={{flexDirection:'row'}}>
                                  <Text style={{color:'white'}}>{City+" "}</Text>
                                  <Icon name='location' size={13} style={{paddingTop:'1%', color:'white'}}></Icon>
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
                                mode='contained' title='Add Story'
                                type="solid"
                                onPress={() => SetIsVisible(false)}
                                titleStyle={{fontSize:11, color:'black'}}
                                buttonStyle={{width:(width/2.5),
                                              height:(width/11),
                                              backgroundColor:'white',
                                              borderRadius:4}}>
                              </Button> 
                              <Button  
                                mode='contained' title='Followers'
                                type="solid"
                                onPress={() => {SetIsVisible(false)  }}
                                titleStyle={{fontSize:11, color:'black'}}
                                buttonStyle={{width:(width/2.5),
                                              height:(width/11),
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


export default  ProfileScreen;

