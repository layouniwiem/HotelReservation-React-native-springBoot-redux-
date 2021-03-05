import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import  {useState}  from 'react';
import  React from 'react';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { DrawerContent } from './screens/DrawerContent';
import SupportScreen from './screens/SupportScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import SettingsScreen from './screens/SettingsScreen'
import RootStackScreen from './screens/RootStackScreen';
import { useEffect } from 'react';
 import {AuthContext }from './components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginReducer from './reducers/authReducer';
import store from './store/store';
import {Provider} from 'react-redux';
const Tab = createMaterialBottomTabNavigator();
//const AuthContext = React.createContext();




const Drawer = createDrawerNavigator();

 export default function App() {
  // const[isLoading,setIsLoading]= React.useState(true);
  // const[userToken,setUserToken]= React.useState(null);
  const initialLoginState ={
    isLoading: true ,
    userName: null,
    userToken: null,
  };
  
  const [loginState, dispatch]=React.useReducer(loginReducer,initialLoginState);

  const authContext = React.useMemo(()=>({

    signIn: async (foundUser) => {
      // setUserToken('ok');
      // setIsLoading(false);

     

     
     const  userToken = String(foundUser[0].userToken);
     const  userName = String(foundUser[0].userName);
     const  password = String(foundUser[0].password);



     
          try {
            userToken ='okToken';

            await AsyncStorage.setItem('userToken',userToken);
          } catch (e) {
            console.log(e);
          }
       
           console.log('user token: ', userToken);

      dispatch({
        type: 'LOGIN',
        id: userName,
        token: userToken
      });
    },
    signOut: async () =>{ 
      // setUserToken(null);
      // setIsLoading(false);
      try {
         await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' })


    },
    signUp: ()=>{
      // setUserToken('ok');
      // setIsLoading(false);
      
   
    }
  }),[]);
   const [auth, setAuth]= useState(false);
   useEffect(() => {
     setTimeout(async()=>{
       let userToken ;
       userToken = null;
      // setIsLoading(false);
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.log(e);
      }
    //  console.log('user token: ', userToken);

      dispatch({ type: 'RETREIVE_TOKEN' , token: userToken})
     }, 1000);
     
   }, []);
   if ( loginState.isLoading ) {
     return (
        <View style={{flex:1, 
     justifyContent:'center' ,
     alignItems:'center' }}>
     <ActivityIndicator size="large" />
   </View>
   );
    
   }

  return (
    <Provider store={store}>
     <AuthContext.Provider value={authContext}  >
       
    <NavigationContainer>
        
      { loginState.userToken !== null ? (
             
       <Drawer.Navigator drawerContent={props =>
         <DrawerContent  {...props}/>
        }>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="SupportScreen" component={SupportScreen} /> 
       <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} /> 
       <Drawer.Screen name="SettingsScreen" component={SettingsScreen} /> 

      </Drawer.Navigator>  
      
     )
     :
         <RootStackScreen/>
     
     

             
     
     
      }
    </NavigationContainer>
    </AuthContext.Provider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1, 
     alignItems: 'center',
      justifyContent: 'center' }
  

});

 
