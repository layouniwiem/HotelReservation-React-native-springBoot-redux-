import { Button, StyleSheet, Text, View } from 'react-native';
import  React ,{useState}  from 'react';


 export default function DetailsScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Text>ExploreScreen</Text>
      <Button
        title="Click Here"
        onPress={() => alert('Button Clicked!')}
      />
    </View>
 

  );
}
const styles = StyleSheet.create({
  container: {
     flex: 1, 
     alignItems: 'center', 
     justifyContent: 'center' }
  

});


