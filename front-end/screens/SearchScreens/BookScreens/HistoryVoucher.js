
import React, { useRef, useState, useEffect } from 'react';
import { Avatar, Button, Card, Title, Paragraph, Modal } from 'react-native-paper';

import { useDispatch } from "react-redux";
import { roomDBGetDataByReservation, inviteeGetDataByRoom, reservationUpdateData } from '../../../actions/reservationAction';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Myloader from '../../Myloader';


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
import MyQrCode from '../../Qrcode/MyQrCode';
const HistoryVoucher = ({ navigation, route }) => {
    const users = useSelector(state => state.users)
    const [showLoader, setShowLoader] = React.useState(false);

    const [guests, setGuest] = useState(null)
    const roomsDB = useSelector(state => state.roomsDB.roomsByreservation);
    const invitees = useSelector(state => state.invitees.InviteesByRoom);
    const reservations = useSelector(state => state.reservations.data);
    const { item } = route.params;
    console.log("item from HistoryVoucher", item, "item HistoryVoucher")
    const [status, setStatus] = React.useState(" Confirmed  ")
    const state = useSelector(state => state.currentData);
    console.log(state)

    const hotels = useSelector(state => state.hotels.data);
    const [checkedBox, setCheckedBox] = React.useState(false);
    const [checkedBoxCancel, setCheckedBoxCancel] = React.useState(false);
    const [checkedBoxRed, setCheckedBoxRed] = React.useState(false);
    const [checkedBoxBreakfast, setCheckedBoxBreakfast] = React.useState(false);
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

    const dispatch = useDispatch();
    const handleInviteeByRoomGetData = (id) => {

        try {

            console.log("hello handleInviteeByRoomGetData Invitte  ");
            dispatch(inviteeGetDataByRoom(id

            )).then((res) => {
                // setShowLoader(false) 

                console.log("res", res)

                //navigation.navigate('ResultDetail', { res })

            })
            //   setShowLoader(true) 

        } catch (e) {
            console.log("error", e);
        }

    }
    React.useEffect(() => {
        console.log(invitees, "invitees")
        console.log(item, "item of reservtion")

        setGuest(invitees)
    }, [invitees])

    return (

        <View style={styles.container} >
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.textSign}>Here is your E-Voucher!</Text>

            </View>
            <Animatable.View
                animation="fadeInUp"
                style={styles.footer} >
                <View style={styles.action}>
                    <View style={styles.item1}>

                        
                        <Image         style={styles.logo} source={require('../../../assets/test.png')}/>
                        <Text style={styles.textSign}>E-Voucher </Text>

                    </View>
                    <View>
                    <Text style={styles.text_footer}> Book Details:</Text>
                    <Text style={styles.text}>Booked :{
                        item.reservationDate}</Text>
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

                {(roomsDB !== null) ? (
                    <FlatList
                        data={roomsDB}
                        keyExtractor={(item) => console.log(item)
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






            </Animatable.View>
        </View>
    )
}
export default HistoryVoucher;

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
        paddingLeft: 10,
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