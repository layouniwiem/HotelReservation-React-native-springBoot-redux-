import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  
  import { InputAutoSuggest } from 'react-native-autocomplete-search';
    import Autocomplete from 'react-native-autocomplete-input';
const SearchInput =props=>{
  const {data}=props
    return (
        <View style={styles.autocompleteContainer}>
      <InputAutoSuggest
  style={{ flex: 1 }}
  staticData={
    data}
    onDataSelectedChange={data => console.log(data)}
/>
        </View>
      );
}
export default SearchInput;
const styles = StyleSheet.create({
    autocompleteContainer: {
      flex: 1,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 1
    }
  });