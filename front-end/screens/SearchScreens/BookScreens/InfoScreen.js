  
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    Dimensions,
    Modal

} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Checkbox } from 'react-native-paper';
import { inviteePostData } from '../../../actions/reservationAction';
import Myloader from '../../Myloader';
import { useNavigation } from '@react-navigation/native';
const InfoScreen= (params)=>{
    const navigation = useNavigation();
    const roomsDB = useSelector(state => state.roomsDB.data);
const dataIndexx =params.dataIndex
    const [here,SetHere] = React.useState(true )
    const[showLoader,setShowLoader]= React.useState(false);
    const dispatch = useDispatch();
    const stateindexData = useSelector(state => state.indexData)
    const [checkedBox, setCheckedBox] = React.useState(true);
    const [checkedBoxCancel, setCheckedBoxCancel] = React.useState(false);
    const [checkedBoxRed, setCheckedBoxRed] = React.useState(false);
    const [checkedBoxBreakfast, setCheckedBoxBreakfast] = React.useState(false);
    const [data, setData]= React.useState({
        lastName:'',
        firstName:'',
        gender:'male',
        email:'email@email.com',
       
        userName:'',
       
        confirm_password:'',
        check_textInputChange: false ,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        active:true,

    });
   const  user ={
       lastName:data.lastName,
       firstName:data.firstName,
       gender:data.gender,

    
   };

   const [dataSet,setDataSet]= React.useState(false);
   const handleDataSet=()=>{ 
       
    params.setCheck(true);
    

   }
   
// const {dataSet}=false

   // const addUser = (email,username,password) => dispatch(userPostData(email,username,password));
    const handleaddUser = async (e,name) => {
        dispatch(userPostData(user)).then((res) => {   
            console.log(res);
        });
        
      
      };
    const handlePasswordChange= (val)=>{
        setData({
            ...data,
            firstName:val
        });
    }
    const handleLastName= (val)=>{
        setData({
            ...data,
            lastName:val
        });
    }
    const handleFirstName= (val)=>{
        setData({
            ...data,
            firstName:val
        });
    }
    const handlegender= (val)=>{
        console.log(val,"genderrrr");
        setData({
            ...data,
            gender:val
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
                firstName: val,
                check_textInputChange: true 
            });
        }else   {
            setData({
                ...data,
                firstName: val,
                check_textInputChange: false 

            }); 
        }    


    }
    const handleAddInvitee = ( email, firstName, lastName, gender,id_Room) => {
        try {
          console.log("hello handleAddInvitee ", email, firstName, lastName, gender,id_Room );
          
          dispatch(inviteePostData({
            'email': firstName+"@gmail.com",
            'firstName': firstName,
            // 'codeCityTBO': "130452",
             'lastName': lastName,
            "gender":gender,
            "id_Room":id_Room,
          }     
          )
          ).then((res) => {
            setShowLoader(false) 
            console.log("res inviteePostData",res,"inviteePostData")
          })
          setShowLoader(true)    } catch (e) {
          console.log("error",e);
        }
      }
      useEffect(() => {
        console.log("roomsDBbbbbbbbbb",roomsDB,"roomsDBbbbbbbbbbb")
      }, [roomsDB])
    return (
       (here==true)?(
        <View style={ styles.container} >
        <Animatable.View 
        animation="fadeInUp"
        style={ styles.footer} >
             <View style={styles.action2}>
                        <View style={styles.item3}>
                            <View style={styles.action3}>
                                <Checkbox
                                color="#FFBF00"
                                    status={checkedBox ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                       
                                        // if (checkedBoxRed)
                                        setCheckedBox(!checkedBox);
                                        setCheckedBoxRed(checkedBox);
                                        switch (checkedBox){
                                            case false : handlegender("male");break;
                                            case true : handlegender("female");break;
    
                                        }
                                    //     else                                        
                                    //      {setCheckedBox(checkedBox)
                                    //         setCheckedBoxRed(!checkedBoxRed)}

                                    // 
                                   
                                }
                                }
                                />
                                <Text style={styles.text}
                                >
                                    <FontAwesome
                                        name="male"
                                        color="#05375a"
                                        size={30}

                                    />   </Text>
                            </View>
                        </View>


                        <View style={styles.item2}>
                            <View style={styles.action3}>
                                <Checkbox
                                color="#FFBF00"
                                    status={checkedBoxRed ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        // if(checkedBox)
                                       setCheckedBoxRed(!checkedBoxRed);
                                        setCheckedBox(checkedBoxRed);
                                        // switch (checkedBox){
                                        //     case false : handlegender("male");break;
                                        //     case true : handlegender("female");break;
    
                                        // }

                                        // else
                                        // {setCheckedBoxRed(checkedBoxRed)
                                        //     setCheckedBox(!checkedBox);
                                        // };

                                    }}
                                />
                                <FontAwesome
                                    name="female"
                                    color="#05375a"
                                    size={30}

                                />
                                {/* <Text style={styles.textfilter}
                    >  non redufunable </Text> */}
                            </View>
                        </View>
                    </View>
                <Text style={styles.text_footer}> First Name</Text>
                <View style={styles.action}>
                   
                <TextInput 
                placeholder="First Name"
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
                <Text style={styles.text_footer}> Last Name:</Text>
                <View style={styles.action}>
                   
                <TextInput 
                placeholder="Last Name"
                // secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val)=> handleLastName(val)}
                />
               
               
                </View>
               
               
                <View style={styles.button } >
                   <TouchableOpacity
                      style={[styles.signIn,{
                        borderColor:'#002E63',
                        borderWidth:1 ,
                        marginTop: 1
                     }]}
                        onPress={() => {
                            // console.log(roomsDB,"roomsDBroomsDBroomsDBroomsDBroomsDBroomsDBroomsDBroomsDB")
                            (dataIndexx+1 == stateindexData.nbAdult)?(
                                        navigation.navigate('EVoucher')

                                // console.log("last index ",dataIndexx,"stateindexData.nbAdult",stateindexData.nbAdult)
                            ):(                                 console.log(" Not last index ",dataIndexx,"stateindexData.nbAdultttttttttttttttttttttttttttttttttttttt",stateindexData.nbAdult)
                            )
                            handleDataSet();
                          
                            handleAddInvitee ( data.email, data.firstName, data.lastName, data.gender,roomsDB.id) 
                        SetHere(false);
                        
                        }}
                          >
                                
                                <Text style={styles.textSign,{
                                    color:'#002E63'
                                }}> Validate </Text>
                   </TouchableOpacity>
                </View>

        </Animatable.View>
        <Modal
        transparent={true}
        visible={showLoader}
        animationType='slide'

      >
        <Myloader 
        
        />

      </Modal>
        </View>): (
            null

        )
    )
}
export default InfoScreen;

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
        borderRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderColor: '#A1CAF1',
        //borderBottomWidth: 0,
        shadowColor: '#002E63',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 10,
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
        marginTop: 5
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
    },
  
    action2: {
        flexDirection: 'row',
        //  marginTop: 5,
        // marginRight: 10,
        //justifyContent: 'center',

        //marginLeft: 10,
        // borderTopWidth: 1,
        // borderTopColor: '#C0C0C0',
        // borderBottomWidth: 1,
        // borderBottomColor: '#C0C0C0',
        //paddingBottom: 5,
        // height: 40,
    },
    action3: {
        flexDirection: 'row',
        //marginTop: 1,
        //  marginLeft: 25,
        // borderBottomWidth: 1,
        // borderBottomColor: '#C0C0C0',

        // paddingBottom: 5,
        // height: 'auto'
    },
    item1: {
        width: '15%',
    },
    item2: {
        // margin: 5,
        paddingLeft: 10,
        width: '50%',
        borderLeftWidth: 1,
        borderLeftColor: '#002E63',
    },
    item3: {
        paddingLeft: 10,
        width: '50%',
        //  borderLeftWidth: 1,
        //  borderLeftColor: '#C0C0C0',
    },
  });