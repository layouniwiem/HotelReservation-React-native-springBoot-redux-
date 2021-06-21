import * as React from 'react';

/*
 * See https://github.com/eddyoc/react-native-custom-qr-codes-expo
 *
 * This library does not work on Expo Web but does work on iOS and Android.
 * The linearGradient option doesn't seem to work.
 */
import { QRCode as CustomQRCode } from 'react-native-custom-qr-codes-expo';
import { Text, View, StyleSheet } from 'react-native';

export default function CustomQRCodes() {
  return (
    <>
    <View style={styles.container}>
      <CustomQRCode
        // codeStyle="circle"
        linearGradient={['#5D8AA8','black']}
        size={100}
        content="QR code with circles"
      />
      {/* <CustomQRCode
        backgroundImage={require('../assets/colours.png')}
        content="QR code with background image"
      /> */}
       </View>
    </>
   
  );
}

const styles = StyleSheet.create({
    container: {
    //    flex: 1,
      justifyContent: 'space-around',
      padding: 5,
    //   paddingBottom: 10,
  
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
      // height:100,
      // width:100
    },
  });
  
