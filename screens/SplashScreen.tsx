import React,{useState} from "react";
import { View, Text } from "react-native";


const SplashScreen = ({ navigation }) => {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 5000);

  if (!timePassed) {
    return (
      <View style={styles.splash}>
        <Text style={styles.text}>Splash Screen</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  splash: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  },
  text: {
    fontSize: 20
  }
});

export default SplashScreen;


