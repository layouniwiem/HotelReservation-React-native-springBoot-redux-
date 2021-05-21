  
import React from 'react';
import { useDispatch } from "react-redux";


import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    Dimensions,

} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Checkbox } from 'react-native-paper';
import { useSelector } from "react-redux";

const EVoucher= ({navigation})=>{
    const [status, setStatus] = React.useState(" Confirmed  ")
    const state = useSelector(state => state.currentData);
    console.log(state)

    const hotels = useSelector(state => state.hotels.data);
    const [checkedBox, setCheckedBox] = React.useState(false);
    const [checkedBoxCancel, setCheckedBoxCancel] = React.useState(false);
    const [checkedBoxRed, setCheckedBoxRed] = React.useState(false);
    const [checkedBoxBreakfast, setCheckedBoxBreakfast] = React.useState(false);
    const [data, setData]= React.useState({
        email:'',
        password:'',
        userName:'',
        roles:'',
        confirm_password:'',
        check_textInputChange: false ,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        active:true,

    });
   const  user ={
       email: data.email,
       password:data.password,
       userName:data.email,
       active:true,
       roles:"USER",
       active:true,
   };
   const handleStars = (value) => {
    var stars = []
    let val=handleStartsValue(value);
    console.log(val)

    

    for (let i = 1; i <= val; i++) {
      stars.push(<FontAwesome
        name="star"
        color="#FFBF00"
        size={20}

      />
      )

    }
    return stars

  }
  const handleStartsValue=(value)=>{
    switch (value) {
      case 'ONE_STAR':
        return 1;// code block
        
      case  'TWO_STAR':
        return 2;// code block
        
      case 'THREE_STAR':
        return 3;// code block
        
      case  'FOUR_STAR':
        return  4;// code block
        
      case 'FIVE_STAR':
        return 5;// code block
      
      default:
        return;
        
    }  
  }

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
             
            
 
        <Animatable.View 
        animation="fadeInUp"
        style={ styles.footer} >
             <Text style={styles.text_footer}> Book Details:</Text>
                <View style={styles.action}>
                    <View>
                <Text style={styles.text}>
 {state.hotel.hotelInfo.hotelName}
</Text> 

<Text >  {handleStars(state.hotel.hotelInfo.rating)}</Text>

</View>        
                
              

               
                </View>
                {/* <Text style={styles.text_footer}> Booking Account :</Text>
                <View style={styles.action}>
                   
               
               
                </View> */}
               
               
             <View style={styles.action}>
                        <View style={styles.item3}>
                            <View style={styles.action2}>
                                
                                <Text style={styles.text}
                                >
                                    <FontAwesome
                                        name="calendar"
                                        color="#05375a"
                                        size={20}

                                    />  Check-In-Date </Text>
                                       
                            </View>
                            

<Text  style={styles.text}> {hotels.checkInDate}</Text>
                        </View>


                        <View style={styles.item2}>
                        <View style={styles.action2}>
                                
                                <Text style={styles.text}
                                >
                                    <FontAwesome
                                        name="calendar"
                                        color="#05375a"
                                        size={20}

                                    />    Check-Out-Date</Text>
                                     
                            </View>
                        

                            <Text  style={styles.text}> {hotels.checkInDate}</Text>
                        </View>
                        
                    </View>
                    <Text style={styles.text_footer}
                                >Guest Details :  </Text>
                    <View style={styles.action}>
                    <Text style={styles.text}
                                >foulen  </Text> 
                                
                            </View>

                            <View style={styles.action}>
                        <View style={styles.item3}>
                            <View style={styles.action2}>
                                
                                <Text style={styles.text_footer}
                                ><FontAwesome
                                        name="user-circle-o"
                                        color="#05375a"
                                        size={20}

                                    />Booking Account  </Text>
                            

                            </View>
                            <Text style={styles.text_header}> {status}</Text>
                        </View>


                        <View style={styles.item2}>
                        <View style={styles.action2}>
                                
                                <Text style={styles.text}
                                >
                                    <FontAwesome
                                        name="qrcode"
                                        color="#05375a"
                                        size={20}

                                    />   </Text>
                            </View>
                        </View>
                        
                    </View>
                <View style={styles.button } >
                   <TouchableOpacity
                     
                        onPress={() => navigation.goBack()}
                           style={[styles.signIn,{
                               borderColor:'#002E63',
                               borderWidth:1 ,
                               marginTop: 15
                            }]}>
                                
                                <Text style={styles.textSign,{
                                    color:'#002E63'
                                }}> Validate </Text>
                   </TouchableOpacity>
                </View>

        </Animatable.View>
        </View>
    )
}
export default EVoucher;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#002E63'
    }, text: {
        color: 'grey',
        margin: 2
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
        color: '#FFBF00',
        fontWeight: 'normal',
        fontStyle: "italic",
        fontSize: 14
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    text_footer2: {
        color: 'green',
        fontSize: 14
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
        marginTop: 10,

        flexDirection: 'row',
        //  marginTop: 5,
        // marginRight: 10,
        //justifyContent: 'center',

        //marginLeft: 10,
        // borderTopWidth: 1,
        // borderTopColor: '#C0C0C0',
        // borderBottomWidth: 1,
        // borderBottomColor: '#C0C0C0',
        paddingBottom: 5,
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