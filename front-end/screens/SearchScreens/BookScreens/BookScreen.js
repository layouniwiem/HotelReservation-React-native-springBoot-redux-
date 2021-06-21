
import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    Dimensions,

} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import InfoScreen from './InfoScreen';
import CardScreen from './CardScreen';
import { ScrollView } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { useSelector } from "react-redux";
import { Checkbox } from 'react-native-paper';
import { useDispatch } from 'react-redux'
import { roomDBGetDataByReservation } from "../../../actions/reservationAction";
// import {EVoucherScreen} from './EVoucherScreen'
const BookScreen = ({ navigation }) => {
    const state = useSelector(state => state.currentData);
    const hotels = useSelector(state => state.hotels.data);
    const [check, setCheck] = React.useState(false);
    const [lastIndex, setLastIndex] = React.useState(false);

    const [checkHided, setCheckHided] = React.useState(false);
    const dispatch = useDispatch();
    const [checkedBox, setCheckedBox] = React.useState(false);
    const [checked, setChecked] = React.useState();
    const [checkedBoxRed, setCheckedBoxRed] = React.useState(false);
    // console.log(state)
    //     const [data, setData]= React.useState({
    //         email:'',
    //         password:'',
    //         userName:'',
    //         roles:'',
    //         confirm_password:'',
    //         check_textInputChange: false ,
    //         secureTextEntry: true,
    //         confirm_secureTextEntry: true,
    //         active:true,

    //     });
    //    const  user ={
    //        email: data.email,
    //        password:data.password,
    //        userName:data.email,
    //        active:true,
    //        roles:"USER",
    //        active:true,
    //    };




    // const addUser = (email,username,password) => dispatch(userPostData(email,username,password));
    const handleaddUser = async (e, name) => {
        dispatch(userPostData(user)).then((res) => {
            // console.log(res);
        });


    };
    const [list, setList] = React.useState([]);
     const [newlist, setnewList] = React.useState([]);

    const handleInfoScreens = (val) => {
        let a=handleInfos(val);
        setList(a)
    }

    const handleroomDBGetDataByReservation = (id) => {
     
        
        try {
          
          console.log("hello roomDBGetDataByReservation rooms ");
          dispatch(roomDBGetDataByReservation( id
            
          )).then((res) => {
            setShowLoader(false) 
            //  console.log("res",res)
            //navigation.navigate('ResultDetail', { res })
    
          })
          setShowLoader(true) 
    
        } catch (e) {
          console.log("error",e);
        }
      }
    const handleStars = (value) => {
        var stars = []
        let val = handleStartsValue(value);
        // console.log(val)



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
    const handleInfos = (value) => {
        var stars = []
        // let val=handleStartsValue(value);
        // console.log("value", value)



        for (let i = 1; i <= value; i++) {
            stars.push("a");

        }
        return stars

    }

    const handleStartsValue = (value) => {
        switch (value) {
            case 'ONE_STAR':
                return 1;// code block

            case 'TWO_STAR':
                return 2;// code block

            case 'THREE_STAR':
                return 3;// code block

            case 'FOUR_STAR':
                return 4;// code block

            case 'FIVE_STAR':
                return 5;// code block

            default:
                return;

        }
    }
    //   const data=handleInfos(5)
    const stateindexData = useSelector(state => state.indexData)
    const reservations = useSelector(state => state.reservations.data);
    useEffect(() => {
        console.log(reservations)
      
          ,[reservations]});
      
    useEffect(() => {
        console.log(reservations,"reservationsreservationsreservationsreservationsssssssss")
    if(reservations!=null)
        handleroomDBGetDataByReservation  (reservations.reservation_id)     
         handleInfoScreens(stateindexData.nbAdult)}

        )
    return (

        <View style={styles.container} >

            <ScrollView>
                <View style={styles.containerShadow}>
                    <View >
                        <Text style={styles.text_footer}>
                            {state.hotel.hotelInfo.hotelName}
                        </Text>
                        <Text >{handleStars(state.hotel.hotelInfo.rating)}</Text>
                        <Paragraph style={styles.text, {
                            color: 'grey'
                            , fontStyle: "italic"
                        }}>
                            <FontAwesome
                                name="map-marker"
                                color="#05375a"
                                size={20}

                            /> {state.hotel.hotelInfo.hotelAddress}</Paragraph>
                        <View style={styles.action2}>
                            <View style={styles.item3}>
                                <Text style={styles.text}> Check-In-Date</Text>
                                <Text style={styles.text}> {hotels.checkInDate}</Text>

                            </View>
                            <View style={styles.item2}>
                                <Text style={styles.text}> Check-Out-Date</Text>
                                <Text style={styles.text}> {hotels.checkOutDate}</Text>

                            </View>
                        </View>
                    </View></View>
                {/* <InfoScreen setCheck={setCheck}/>
                */}


                {/* {handleInfoScreens(3)} */}
                {list.map((item, index) => {
                    return <InfoScreen setCheck={setCheck} dataIndex={index} setLastIndex={setLastIndex}/>
                })}






                {/* {( lastIndex == false ) ?
                    <View style={styles.containerShadow}>
                        <View style={styles.action2}>
                            <View style={styles.item3}>
                                <View style={styles.action2}>
                                    <Checkbox
                                        color="#FFBF00"
                                        status={checkedBox ? 'checked' : 'unchecked'}
                                        onPress={() => {
                                            // if (checkedBoxRed)
                                            setCheckedBox(!checkedBox);
                                            setCheckedBoxRed(checkedBox)
                                            setChecked(!checkedBox)
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
                                            name="credit-card"
                                            color="#05375a"
                                            size={30}

                                        /> On Ligne  </Text>
                                </View>
                            </View>


                            <View style={styles.item2}>
                                <View style={styles.action2}>


                                    <Checkbox
                                        color="#FFBF00"
                                        status={checkedBoxRed ? 'checked' : 'unchecked'}
                                        onPress={() => {
                                            // if(checkedBox)
                                            setCheckedBoxRed(!checkedBoxRed);
                                            setCheckedBox(checkedBoxRed);
                                            setChecked(checkedBoxRed);




                                        }}
                                    />
                                    <FontAwesome
                                        name="money"
                                        color="#05375a"
                                        size={30}

                                    />
                                    <Text
                                    >  On Arrival </Text>
                                </View>
                            </View>
                        </View>
                    </View> : (null)} */}
                {/* <CardScreen showIt={checked} setCheckHided={setCheckHided} /> */}
                {/* <EVoucherScreen showIt={checked} setCheckHided={setCheckHided} /> */}

            </ScrollView>
          
        </View>
    )
}
export default BookScreen;

const { height } = Dimensions.get("screen");
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
    }, textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    item3: {
        width: '50%'
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    }, signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
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
    }, action2: {
        flexDirection: 'row',
        marginTop: 10,


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
        // marginTop: 5,
        // paddingBottom: 5,

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
    containerShadow: {
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#A1CAF1',
        //borderBottomWidth: 0,
        shadowColor: '#30D5C8',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        paddingLeft: 5

    },
    containerShadowAll: {

        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,

    },
    //   action: {
    //     flexDirection: 'row',
    //     marginTop: 5,
    //     marginRight: 10,

    //     marginLeft: 10,
    //     // borderTopWidth: 1,
    //     // borderTopColor: '#C0C0C0',
    //     // borderBottomWidth: 1,
    //     // borderBottomColor: '#C0C0C0',
    //     //paddingBottom: 5,
    //     height: 100,
    //   },

});