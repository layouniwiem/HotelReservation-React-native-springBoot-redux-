  
import React from 'react';
import { useDispatch } from "react-redux";

import { useState, useEffect } from 'react';

import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    Dimensions,

} from 'react-native';
import { userPostData  } from '../actions/userActions';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
const SignUpScreen= ({navigation})=>{
    const [data, setData]= React.useState({
        email:'',
        password:'',
        confirm_password:'',
        check_textInputChange: false ,
        secureTextEntry: true,
        confirm_secureTextEntry: true

    });
   const  user ={
       email: data.email,
       password:data.password,
       username:data.email
   };
  

   const dispatch = useDispatch();

   // const addUser = (email,username,password) => dispatch(userPostData(email,username,password));
    const handleaddUser = async (e,name) => {
        dispatch(userPostData(user)).then((res) => {
         
            console.log(res);
        
       
          
    
        });
        
      
      };
    const handlePasswordChange= (val)=>{
        setData({
            ...data,
            password:val
        });
    }
    const handleConfirmPasswordChange= (val)=>{
        setData({
            ...data,
            confirm_password:val
        });
    }
    const updateSecureTextEntry=()=>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }
    const updateConfirmSecureTextEntry=()=>{
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        })
        
    }
    const textInputChange=(val)=>{
        if (val.length > 6 ){
            setData({
                ...data,
                email: val,
                check_textInputChange: true 
            });
        }else   {
            setData({
                ...data,
                email: val,
                check_textInputChange: false 

            }); 
        }    


    }
    
    return (
       
        <View style={ styles.container} >
                <View style={ styles.header} >
                <Text  style={styles.text_header}> Register Now !</Text>
        </View>
        <Animatable.View 
        animation="fadeInUp"
        style={ styles.footer} >
                <Text style={styles.text_footer}> Email:</Text>
                <View style={styles.action}>
                    <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20} />
                <TextInput 
                placeholder="Your Email"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
                />
                { data.check_textInputChange ?
                <Animatable.View animation ="bounceIn" >
                    
                    <Feather name='check-circle'
                color ="green" 
                size={20} />
                </Animatable.View>
                
                : null }

               
                </View>
                <Text style={styles.text_footer}> Password:</Text>
                <View style={styles.action}>
                    <FontAwesome 
                    name="lock"
                    color="#05375a"
                    size={20} />
                <TextInput 
                placeholder="Your Password"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=> handlePasswordChange(val)}
                />
                <TouchableOpacity
                onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ?
                <Feather name ="eye-off"
                color="grey"
                size={20} 
                />
                 : <Feather name ="eye"
                color="grey"
                size={20}
                 /> 
                 }
               </TouchableOpacity>
                </View>
                <Text style={styles.text_footer}> Confirm password : </Text>
                <View style={styles.action}>

                    <FontAwesome 
                    name="lock"
                    color="#05375a"
                    size={20}
                     />

                <TextInput 
                placeholder="Confirm Password "
                secureTextEntry={data.confirm_secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
               onChangeText={(val)=> handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity
              onPress={updateConfirmSecureTextEntry}
                >
                    {data.confirm_secureTextEntry ?
                <Feather name ="eye-off"
                color="grey"
                size={20} 
                />
                 : <Feather name ="eye"
                color="grey"
                size={20}
                 /> 
                 }
               </TouchableOpacity>
                </View>
               
                <View style={styles.button } >
                <TouchableOpacity
              onPress={(user)=>
                {handleaddUser(user)
                    handleaddUser(user)
                    navigation.goBack()}
            }
                >
                    <LinearGradient
                    colors={['#002E63','#5D8AA8']}
                    style={styles.signIn}
                    >
                <Text style={ styles.signIn, { 
                     color:'#fff'
                }} > Confirm Password </Text>

                    </LinearGradient>
                  </TouchableOpacity>
                   <TouchableOpacity
                     
                        onPress={() => navigation.goBack()}
                           style={[styles.signIn,{
                               borderColor:'#002E63',
                               borderWidth:1 ,
                               marginTop: 15
                            }]}>
                                <Text style={styles.textSign,{
                                    color:'#002E63'
                                }}> Sign In </Text>
                   </TouchableOpacity>
                </View>

        </Animatable.View>
        </View>
    )
}
export default SignUpScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#002E63'
    },
    header: {
        flex: 2,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });