
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";


import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    Dimensions,
    Image,

} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Checkbox } from 'react-native-paper';
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import MyQrCode from '../../Qrcode/MyQrCode';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Title, Paragraph, Modal } from 'react-native-paper';
import { inviteeGetDataByRoom } from "../../../actions/reservationAction";

const EVoucher = ({ navigation ,showIt}) => {
    const item = useSelector(state => state.reservations.data);

    const [status, setStatus] = React.useState(" Confirmed  ")
    const state = useSelector(state => state.currentData);
    // console.log(state)
    const roomsDB = useSelector(state => state.roomsDB.data);
    const invitees=useSelector(state => state.invitees.InviteesByRoom);
    const hotels = useSelector(state => state.hotels.data);
    const [checkedBox, setCheckedBox] = React.useState(false);
    const [checkedBoxCancel, setCheckedBoxCancel] = React.useState(false);
    const [checkedBoxRed, setCheckedBoxRed] = React.useState(false);
    const [checkedBoxBreakfast, setCheckedBoxBreakfast] = React.useState(false);
    const [bookedRooms,setBookedRooms]=useState(null)
    const [guests, setGuest]=useState(null)
    const show = true;
    console.log("show", showIt)
    const [data, setData] = React.useState({
        email: '',
        password: '',
        userName: '',
        roles: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        active: true,

    });
    const user = {
        email: data.email,
        password: data.password,
        userName: data.email,
        active: true,
        roles: "USER",
        active: true,
    };
    const handleStars = (value) => {
        var stars = []
        let val = handleStartsValue(value);
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
    // const handleInviteeByRoomGetData = (id) => {
      
    //     try {
          
    //       console.log("hello handleInviteeByRoomGetData Invitte  ");
    //       dispatch(inviteeGetDataByRoom( id
            
    //       )).then((res) => {
    //         // setShowLoader(false) 
    
    //          console.log("res",res)
           
    //         //navigation.navigate('ResultDetail', { res })
    
    //       })
    //     //   setShowLoader(true) 
    
    //     } catch (e) {
    //       console.log("error",e);
    //     }
        
    //   }
    const dispatch = useDispatch();

    // const addUser = (email,username,password) => dispatch(userPostData(email,username,password));
    const handleaddUser = async (e, name) => {
        dispatch(userPostData(user)).then((res) => {
            console.log(res);
        });


    };
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }
    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }
    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        })

    }
    const textInputChange = (val) => {
        if (val.length > 6) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false

            });
        }


    }
    const handleInviteeByRoomGetData = (id) => {
        //  if(roomsDB!==null)
        //     for(let i=0;i<= roomsDB.length;i++)
                try {
                  
                  console.log("hello handleInviteeByRoomGetData Invitte  ");
                  dispatch(inviteeGetDataByRoom( id)).then((res) => {
                    // setShowLoader(false) 
            
                    //  console.log("res",res)
                   
                    //navigation.navigate('ResultDetail', { res })
            
                  })
                //   setShowLoader(true) 
            
                } catch (e) {
                  console.log("error",e);
                }
              }
              const handleCancellation=(id,hotel_id, hotel_Name,hotel_Adress,hotel_Rating,dateCheckIn, 
                dateCheckOut,prixTotal, nbrRooms, typeReservation,status,reservationDate,hotelImage)=>{
                try {
                  navigation.navigate("Notifications")
        
                  console.log("hello handleCancellation " ,id,
                  hotel_id, hotel_Name,hotel_Adress,hotel_Rating,dateCheckIn, 
                  dateCheckOut,prixTotal, nbrRooms, typeReservation,status,reservationDate,hotelImage);
                  dispatch(reservationUpdateData({
                    'reservation_id':id,
                    'hotel_id': hotel_id,
                    'dateCheckIn': dateCheckIn,
                    'dateCheckOut': dateCheckOut,
                    "prixTotal": prixTotal,
                    'nbrRooms': nbrRooms,
                    'typeReservation': typeReservation,
                    'status':"Cancelled",
                    'hotel_Name':hotel_Name,
                    'hotel_Adress':hotel_Adress,
                    'hotel_Rating':hotel_Rating,
                    'reservationDate':reservationDate ,
                    'hotelImage':hotelImage,
            
                  },id)
                  
                  ).then((res) => {
                    setShowLoader(false)
                    console.log("res handleCancellation ", res)
                    // handleAddroomDB(state.hotel.minHotelPrice.totalPrice,item.roomTypeName,item.roomTypeName,reservations.reservation_id)
                  })
                  setShowLoader(true)
            
                } catch (e) {
                  console.log("error", e);
                }
              }
      const handleReservationGetData = (id) => {
     
        
        try {
          
          console.log("hello handleReservationGetData rooms ");
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
      useEffect(()=>{
    //    console.log(reservations.reservation_id,"reservations from Evoucherrrr")
      },[])
    useEffect(()=>{
        setBookedRooms([roomsDB]);
        // handleReservationGetData(reservations.reservation_id)
       console.log(roomsDB,"roomsDBbbbbbbbbbbb from Evoucherrr")
      },[roomsDB])
    useEffect(()=>{
        setGuest(invitees)
        console.log(guests,"guestssssss frommmmmmm Evoucher")

      },[invitees])
    return ((show==true)?

        (<View style={styles.container} >
          
  <View style={styles.action} >
                <View style={styles.item3}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {
                          console.log("Pay It Now ")
                          navigation.navigate('CardScreen')                        }}
                    >
                        <LinearGradient
                            colors={['#002E63', '#5D8AA8']}
                            style={styles.signIn}

                        >
                            <Text style={styles.signIn, {
                                color: '#fff'
                            }} > Pay It Now  </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.item3}>
                    <TouchableOpacity
                     style={[styles.signIn, {
                        borderColor: '#002E63',
                        borderWidth: 1,
                        // marginTop: 5
                    }]}
                        onPress={() =>{handleCancellation(item.reservation_id,item. hotel_id, item.hotel_Name,item.hotel_Adress,item.hotel_Rating,item.dateCheckIn, 
                          item.dateCheckOut,item.prixTotal, item.nbrRooms, item.typeReservation,"Cancelled",item.reservationDate,item.hotelImage

                        )
                  
                          }
                          }
                       >
                        <Text style={styles.textSign, {
                            color: '#002E63'
                        }}> Cancel Reservation </Text>
                    </TouchableOpacity>
                    </View>
                </View>
              

            
            <Animatable.View
                animation="fadeInUp"
                style={styles.footer} >
                <View style={styles.action}>
                    <View style={styles.item1}>

                        
                        <Image  style={styles.logo} source={require('../../../assets/test.png')}/>
                        <Text style={styles.textSign}>E-Voucher </Text>

                    </View>
                    <View>
                    <Text style={styles.text_footer}> Book Details:</Text>
                    <Text style={styles.text}>Booked :{
                        item.reservationDate}</Text>
                                            <Text style={styles.text}>Total Price :{item.prixTotal} </Text>

                    <Text style={styles.text} >
                        Booking Status : 
                   



                        {(item.status == "Booked") ? (
                            <Text>


                                <FontAwesome
                                    name="check"
                                    color="#FFBF00"
                                    size={20}
                                    marginRight={10}
                                />
                                <Text style={styles.text}>{item.status} </Text>


                            </Text>) : null}
                        {(item.status == "Cancelled") ? (
                            <Text>

                                <FontAwesome
                                    name="times"
                                    color="red"
                                    size={20}
                                    marginRight={10}
                                />
                                <Text style={styles.text}>  {item.status} </Text>
                            </Text>) : null}
                        {(item.status == "Confirmed") ? (
                            <Text>


                                <FontAwesome
                                    name=" check-double"
                                    color="green"
                                    size={20}
                                    marginRight={10}
                                />
                                <Text style={styles.text}> {item.status} </Text>

                            </Text>) : null}</Text>
                    </View>
                    {/* <Text style={styles.text}> Total Price :{item.prixTotal} </Text> */}

                </View>
                <View style={styles.action}>
                    <View>
                        <Text style={styles.textSign}>
                            {item.hotel_Name}
                        </Text>
                        <Text style={styles.text} > <FontAwesome
                            name="map-marker"
                            color="grey"
                            size={13}
                            marginRight={10}
                        /> {item.hotel_Adress}</Text>
                        <Text >  {handleStars(item.hotel_Rating)}</Text>

                    </View>

                </View>

                <View style={styles.action}>
                    <View style={styles.item3}>

                        <Text style={styles.textInput}
                        >
                            <FontAwesome
                                name="calendar"
                                color="#05375a"
                                size={20}

                            /> Check-In-Date </Text>




                        <Text style={styles.text}> {item.dateCheckIn}</Text>

                        <Text style={styles.textInput}
                        >
                            <FontAwesome
                                name="calendar"
                                color="#05375a"
                                size={20}

                            /> Check-Out-Date </Text>
                        <Text style={styles.text}> {item.dateCheckOut}</Text>


                    </View>
                    <View style={styles.item2}>
                    <View style={styles.action3}>

                        <Text style={styles.text}
                        >
                            <FontAwesome
                                name="qrcode"
                                color="#05375a"
                                size={20}

                            />   </Text>
                        <MyQrCode />


                        </View>
                        </View>

                </View>





                <Text style={styles.text_footer}
                > Guest Details by Rooms :  </Text>

                {(bookedRooms !== null) ? (
                    <FlatList
                        data={bookedRooms}
                        keyExtractor={(item) => item.id
                        }

                        renderItem={({ item }) => (

                            <View style={styles.containerShadow}>
                                             <View style={styles.action}>


                                        <Text style={styles.text}>{item.room_Name}</Text>
                                   </View>
                                <View style={styles.containerShadow}>
                                <View style={styles.action}>

                                    <Text style={styles.textInput}> Guests Details:</Text>
                                    </View>
                                    {handleInviteeByRoomGetData(item.id)}
                                    {(guests !== null) ? (
                                        <FlatList
                                            data={guests}
                                            keyExtractor={(item, index) => {
                                                console.log(item)
                                            }}

                                            renderItem={({ item }) => (
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        console.log(item.id)
                                                        console.log(item, "item roomdb ")



                                                    }}
                                                >
                                                    <View >
                                                        <View style={styles.action}>

                                                            <View style={styles.item3}>

                                                                <Text style={styles.text}> FirstName: {item.firstName} </Text>
                                                            </View>

                                                            <View style={styles.item3}>

                                                                <Text style={styles.text}> LastName: {item.lastName} </Text>

                                                            </View>

                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                            )}
                                        />) : (
                                        <View style={styles.action}>
                                            <Text style={styles.textView}>
                                                No Data found
                                            </Text>


                                        </View>)}
                                </View>
                                <View>

                                </View>
                            </View>

                        )}
                    />) : (
                    <View style={styles.action2}>
                        <Text style={styles.textView}>
                            No Data found
                        </Text>


                    </View>)
                }






                {/* <Text style={styles.text_footer}> Book Details:</Text>
                <View style={styles.action}>
                    <View>
                        <Text style={styles.text}>
                            {state.hotel.hotelInfo.hotelName}
                        </Text>

                        <Text >  {handleStars(state.hotel.hotelInfo.rating)}</Text>

                    </View>




                </View>
               


                <View style={styles.action}>
                    <View style={styles.item3}>
                        <View style={styles.action2}>

                            <Text style={styles.text}
                            >
                                <FontAwesome
                                    name="calendar"
                                    color="#05375a"
                                    size={20}

                                /> Check-In-Date </Text>

                        </View>


                        <Text style={styles.text}> {hotels.checkInDate}</Text>
                    </View>


                    <View style={styles.item2}>
                        <View style={styles.action2}>

                            <Text style={styles.text}
                            >
                                <FontAwesome
                                    name="calendar"
                                    color="#05375a"
                                    size={20}

                                /> Check-Out-Date </Text>

                        </View>


                        <Text style={styles.text}> {hotels.checkInDate}</Text>
                    </View>

                </View>
                <Text style={styles.text_footer}
                > Guests By Room Details :  </Text>
                 { ( roomsDB !== null) ?(
                <FlatList
        data={roomsDB}
        keyExtractor={(item, index) => { item
                }}

        renderItem={({ item }) => (
        
            <View style={styles.containerShadow}>
             

                <Card >
                  <Card.Content>
                  <Text style={styles.textInput}>{item.room_Name}</Text> 
                  <Text style={styles.textView}> Total Price:{item.prixTotal}</Text> 

             

                  </Card.Content>
             

                </Card>
                <Text style={styles.textInput}> Guests Details:</Text> 
           {handleInviteeByRoomGetData(roomsDB.id)}
          { ( guests !== null) ?(
                    <FlatList
                    data={guests}
                    keyExtractor={(item, index) => {index
                        //  handleInviteeByRoomGetData(item.id)
                    }}
            
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => {
                          console.log(item.id)
                          console.log(item,"item roomdb ")
            
                      
            
                        }}
                      >
                        <View >
                          <View style={styles.action}>
                          
                          <View style={styles.item2}>

                              <Text style={styles.textInput}> FirstName: {item.firstName} </Text> 
                              </View>

                              <View style={styles.item2}>

                              <Text style={styles.textInput}> LastName: {item.lastName} </Text> 
            
                              </View>

                            </View>
                        </View>
                      </TouchableOpacity>
                      )}
                  />):(
                     <View style={styles.action}>
                          <Text style={styles.textView}>
                            No Data found
                          </Text>
            
                      
                      </View>)}
 <View>
                           
                   </View>
            </View>
          // </TouchableOpacity>
          )}
      />):(
         <View style={styles.action2}>
              <Text style={styles.textView}>
                No Data found
              </Text>

          
          </View>)
      }

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
                                                        <MyQrCode />

                        </View>
                    </View>

                </View> */}
                {/* <View style={styles.button} >
                    <TouchableOpacity

                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            borderColor: '#002E63',
                            borderWidth: 1,
                            marginTop: 15
                        }]}>

                        <Text style={styles.textSign, {
                            color: '#002E63'
                        }}> Validate </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button} >
                    <TouchableOpacity

                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            borderColor: '#002E63',
                            borderWidth: 1,
                            marginTop: 15
                        }]}>

                        <Text style={styles.textSign, {
                            color: '#002E63'
                        }}> Cancel Reservation </Text>
                    </TouchableOpacity>
                </View> */}

            </Animatable.View>
        </View>):(null)
    )
}
export default EVoucher;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#002E63'
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
        paddingVertical: 20,
        borderColor: '#A1CAF1',
        //borderBottomWidth: 0,
        shadowColor: '#002E63',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
        // marginLeft: 5,
        // marginRight: 5,
        // marginTop: 5,
        // marginBottom: 5,
    },
    text_header: {
        color: '#FFBF00',
        fontWeight: 'normal',
        fontStyle: "italic",
        fontSize: 18
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
        paddingTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        // flex: 1,
        // marginTop: Platform.OS === 'ios' ? 0 : -12,
        // paddingLeft: 10,
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
        fontWeight: 'bold',
        color: '#05375a'

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
        // marginTop: 10,

        flexDirection: 'row',
        //  marginTop: 5,
        // marginRight: 10,
        //justifyContent: 'center',

        //marginLeft: 10,
        // borderTopWidth: 1,
        // borderTopColor: '#C0C0C0',
        // borderBottomWidth: 1,
        // borderBottomColor: '#C0C0C0',
        // paddingBottom: 5,
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
        width: '30%',
        borderRightWidth: 1,
        borderRightColor: '#002E63',
                justifyContent: 'center',

    },
    item4: {
        width: '70%',
    },
    item2: {
        // margin: 5,
        paddingLeft: 10,
        width: '50%',
        borderLeftWidth: 1,
        borderLeftColor: '#002E63',
    },
    item3: {
        // paddingLeft: 10,
        width: '50%',
        //  borderLeftWidth: 1,
        //  borderLeftColor: '#C0C0C0',
    },
    logo: {
        width: 90,
        height: 60,
        //  resizeMode: "stretch",     
           // borderColor: "red",
        // borderWidth: 5, 
        },
});