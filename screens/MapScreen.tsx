import React from "react";
import { View, Text ,StyleSheet,Dimensions} from "react-native";
import MapView,{ Marker, } from 'react-native-maps';



var { width, height } = Dimensions.get('window');


const MapScreen = ({route}) => {

  const place = route.params.place;
  const lat= route.params.latitude;
  const lng = route.params.longitude;

  const destination = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }

  function Location () {
      
  }
  
  return (
     <View style={styles.container}>
        <MapView style = {styles.mapcontainer}
                  userInterfaceStyle={'dark'}
                  showsUserLocation={true}
                  showsMyLocationButton={true}
                  zoomEnabled = {true}
                  region={destination}>
            <Marker
              coordinate={destination}
              pinColor="red"
            />   
      </MapView>
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
mapcontainer: {
    flex: 1,
    width: width,
    height: height,
  },
})














;


export default  MapScreen;