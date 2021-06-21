import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent';
import SupportScreen from './screens/SupportScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import SettingsScreen from './screens/SettingsScreen'
import RootStackScreen from './screens/RootStackScreen';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from './store/store';
import { Provider } from 'react-redux';
import { citiesGetAll,citiesDestGetAll } from './actions/cityAction';



console.disableYellowBox = true;
const Drawer = createDrawerNavigator();

 const App =() =>{
 

  return (
    
    <Provider store={store}>

        <Applic/>
    </Provider>
  );
}
const Applic=()=>{
//   const state = store.getState();
//   const authToken = state.userToken;  
//  // console.log("userToken from App.js",user.userToken)
const dispatch = useDispatch();

  const [isloggedin,setLogged] = useState(false)
  const detectLogin= async ()=>{
     const token = await AsyncStorage.getItem('userToken');
   

    //  console.log(token)
     if(token){
         setLogged(true)
     }else{
         setLogged(false)
     }
  }
  const getCities=()=>{try {
      
    console.log("hello fromhandle getCities"
     );
    
    dispatch(citiesGetAll()    

    ).then((res) => {
      // console.log("res",res)


    })
    } catch (e) {
    console.log("error res countries",e);
  }}
  const getCitiesDest=()=>{try {
      
    console.log("hello fromhandle getCitiesDest"
     );
    
    dispatch(citiesDestGetAll()    

    ).then((res) => {
      // console.log("res",res)


    })
    } catch (e) {
    console.log("error res getCitiesDest",e);
  }}
  
 useEffect(()=>{
    detectLogin()
 })
 useEffect(()=>{
  getCities();
})
 const state = useSelector(state => state.users)
//  console.log("state.userToken ",state.userToken)

return(
  <NavigationContainer>

  {
  (state.userToken !== null ||isloggedin==true ) ? (  

   <Drawer.Navigator drawerContent={props =>
     <DrawerContent  {...props} />
   }>
     <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
     <Drawer.Screen name="SupportScreen" component={SupportScreen} />
     <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
     <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
   </Drawer.Navigator>
   ) 
    : 
   <RootStackScreen />  

   }  
</NavigationContainer>
)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }


});


export default App;