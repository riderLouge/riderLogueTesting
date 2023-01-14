import React, { Component } from "react";
import { View, Text,StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'; 
import { SearchBar } from 'react-native-elements';



export default function InitialScreen() {

   state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

   const { search } = this.state;
   
  return (
    <View style={{ flex: 1, alignItems: "center"}}>
      <View style={{backgroundColor:'#FAEAB1',width:"90%",height:"10%",marginTop:20,borderRadius:20,flexDirection:'row',alignItems:'center'}}>
         <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
          <Icon name=""/>
      </View>


      <View style={styles.container}>
         <Text style={styles.text}> 1.Qr Code </Text>
         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Icon style={styles.icon} name="md-qr-code-sharp" />
            <Icon style={styles.editIcon} name="ios-create"/>
         </View>
      </View>

          <View style={styles.container}>
            <Text style={styles.text}> 2.Qr Code </Text>
           <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <Icon style={styles.icon} name="md-qr-code-sharp" />
              <Icon style={styles.editIcon} name="ios-create"/>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.text}> 3.Qr Code </Text>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <Icon style={styles.icon} name="md-qr-code-sharp" />
              <Icon style={styles.editIcon} name="ios-create"/>
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