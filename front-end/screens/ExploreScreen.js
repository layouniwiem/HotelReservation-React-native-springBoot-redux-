import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BouncingPreloader from "react-native-bouncing-preloader";


const ExploreScreen = ({ route, navigation }) => {
  const icons = [
      "https://www.shareicon.net/data/256x256/2016/05/04/759906_food_512x512.png",
    "https://www.shareicon.net/data/256x256/2016/05/04/759921_food_512x512.png",
    "https://www.shareicon.net/data/256x256/2016/09/23/833977_sign_512x512.png",
    "https://www.shareicon.net/data/256x256/2016/08/19/816711_service_512x512.png",
    "https://www.shareicon.net/data/256x256/2015/09/15/101405_beach_512x512.png",
    "https://www.shareicon.net/data/256x256/2016/09/16/829648_nature_512x512.png",
     "https://www.shareicon.net/data/256x256/2015/09/02/94772_sunglasses_512x512.png",
  
  ];
    return (
    
      <View style={styles.container}>
        <BouncingPreloader
          icons={icons}
          leftDistance={-100}
          rightDistance={-150}
          speed={1000}
        />
      </View>
    
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});