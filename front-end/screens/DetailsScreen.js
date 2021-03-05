import { Button, StyleSheet, Text, View } from 'react-native';
import  React ,{useState}  from 'react';


 export default function DetailsScreen({ route, navigation }) {
  const  itemId=55;
  const otherParam ="unkown";
  return (
    <View style={styles.container}>
      <Text>DetailScreen Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100)
          })
        }
        
      />

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
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


