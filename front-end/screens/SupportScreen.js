  
import React from 'react';
import { View, Text, Button, ListItem,StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import store from '../store/store';
import {Provider, connect } from 'react-redux';
import { userGetAll } from '../actions/userActions';
import { useState,useEffect,useCallback } from 'react';
import { State } from 'react-native-gesture-handler';

const SupportScreen = (props) => {

const dispatch = useDispatch();
//const [users,setUsers]= useSelector(state => state.state);
const [state, setState] = useState({
  
  data: [],
});
// dispatch(userGetAll()).then((res) => {
//   if (res) {
//     setState({
//       data: res.data,
//     });}
    const getRecentSheetsCallback = useCallback(() => {
      console.log("wtf");
      userGetAll() ;
    // console.log(store.getState() ); 
  })
  useEffect(() => {
    // dispatch(userGetAll()).then((res) => {
    //   if (res) {
    //     setState({
    //       data: res.data,
    //     });}
    // });
    setUsers(getRecentSheetsCallback());
    console.log(users)
  }, [users]);


// useEffect(()=>{
//   setUsers(getttingData);
// },[users])
//const  getusers =()=> dispatch(userGetAll());
    return (
      
      <View style={styles.container}>
        <Text>Support Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
        <FlatList
        data= {users}
        keyExtractor={(item,index)=>
          item.key.toString()}
          renderItem={
            ({item}) =>(           
              <Text>{item.username}</Text>
           )           
          }    
        />
      </View>
    );
};
export default 
SupportScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});