import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BouncingPreloader from "react-native-bouncing-preloader";
import AnimatedLoader from "react-native-animated-loader";

const Myloader = ({ route, navigation }) => {
  const icons = [
    // "https://www.shareicon.net/data/256x256/2016/05/04/759946_bar_512x512.png",
    //   "",
    // "https://www.shareicon.net/data/256x256/2016/05/04/759908_food_512x512.png",
    // "https://www.shareicon.net/data/256x256/2016/05/04/759956_food_512x512.png",
    // "https://www.shareicon.net/data/256x256/2016/05/04/759954_food_512x512.png",
    // "https://www.shareicon.net/data/256x256/2016/05/04/759906_food_512x512.png",
    // "https://www.shareicon.net/data/256x256/2016/05/04/759921_food_512x512.png",
    // "https://www.shareicon.net/data/256x256/2016/09/23/833977_sign_512x512.png",
    // "https://www.shareicon.net/data/256x256/2016/08/19/816711_service_512x512.png",
    // "https://www.shareicon.net/data/256x256/2015/09/15/101405_beach_512x512.png",
    // "https://www.shareicon.net/data/256x256/2016/09/16/829648_nature_512x512.png",
    //  "https://www.shareicon.net/data/256x256/2015/09/02/94772_sunglasses_512x512.png",
   "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d082a537-9a45-4512-af54-08c87b335298/dbitmng-6fd0d771-09e5-4d1f-9ce3-3751f4e04845.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZDA4MmE1MzctOWE0NS00NTEyLWFmNTQtMDhjODdiMzM1Mjk4XC9kYml0bW5nLTZmZDBkNzcxLTA5ZTUtNGQxZi05Y2UzLTM3NTFmNGUwNDg0NS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.aPhyrbrDC8eDP-vrVldDxd161og3KDSIx4J-3woWyG4"
     //  "",
    //  "",
    //  "",
    //  "",


  ];
    return (
    
      <View style={styles.container}>
        {/* <BouncingPreloader
          icons={[
            require('../assets/test.png'),
           
          ]}
          leftDistance={-100}
          rightDistance={-150}
          speed={2500}
          use
        /> */}
         <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("../assets/loader.json")}
        animationStyle={styles.lottie}
        speed={1}
      />
      </View>
    
    );
};

export default Myloader;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  lottie: {
    width: 300,
    height: 300
  }
});