import React from "react";
import { View, Text ,StyleSheet,Dimensions} from "react-native";
import MapView,{ Marker } from 'react-native-maps';


var { width, height } = Dimensions.get('window');

const tokyo = {
  latitude: 35.6762,
  longitude: 139.6503,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};
const izumi = {
  latitude: 32.0903,
  longitude: 130.3532,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export default function MapScreen() {
  return (
     <View style={styles.container}>
     <MapView style = {styles.mapcontainer}
          userInterfaceStyle={'dark'}
          showsUserLocation={true}
          showsMyLocationButton={true}
          zoomEnabled = {true}
          region={izumi} >
        <Marker
  coordinate={izumi}
  pinColor="red"
/>   

<Marker
  coordinate={tokyo}
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
});