
import React from 'react';
import { useDispatch } from "react-redux";


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
import { Checkbox } from 'react-native-paper';
import { useSelector } from "react-redux";
import EVoucher from './EVoucherScreen';
import moment from "moment";

const EFacture = ({ navigation, show }) => {
    const [date_CheckIN, setDate_DheckIN] = React.useState(moment(new Date()).format("YYYY-MM-DD"));
    const [card, setcard] = React.useState("00 000 0000 0000");

    const [status, setStatus] = React.useState(" Confirmed  ")
    const state = useSelector(state => state.currentData);
    console.log(state)

    const hotels = useSelector(state => state.hotels.data);
    const [checked, setChecked] = React.useState(false);
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

    return (
        (show == true) ?(
            <View style={styles.containerShadowAll} >
<Text  style={styles.textSign}> Transaction Details</Text>
        <View style={styles.containerShadowAll} >

            <View style={styles.containerShadow}>
                <Text style={styles.text_footer}>{state.hotel.hotelInfo.hotelName}</Text>
                <Text style={styles.text_footer}> Total Transaction Price :</Text>
                <Text style={styles.text}> 500 TND </Text>

            </View>
            <View style={styles.action}>


                <Text style={styles.text_footer}
                >
                     Transaction-Date </Text>
                <Text style={styles.text}>{date_CheckIN}</Text>
            </View>
            <View style={styles.action}>


<Text style={styles.text_footer}
>  Card Number </Text>
<Text style={styles.text}>{card}</Text>
</View>
<View style={styles.signIn}><Text style={styles.text2}> WorldSoft Group E-payement Solution </Text></View>

{/* <Text style={styles.text_footer}>
    Secured By WorldSoft Group 
</Text> */}</View>
<View style={styles.signIn}>
                <Text style={styles.text_header}>Here is your E-Voucher!</Text>
                </View>
           <EVoucher/>
        </View>
      
       ):(null)
    )
}
export default EFacture;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#002E63'
    }, text: {
        color: 'grey',
       // margin: 2,
        margin:12,

    },
    text2: {
        marginLeft:2,
        color: '#A1CAF1',
        // justifyContent: 'center',
        // alignItems: 'center',

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
    }, containerShadow: {
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
        paddingLeft:5
    
      },
      containerShadowAll: {
    
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#A1CAF1',
        borderBottomWidth: 0,
        shadowColor: '#30D5C8',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        
        // marginLeft: 5,
        // marginRight: 5,
        marginTop: 30,
        marginBottom: 1,
    
      },
    text_header: {
        color: '#FFBF00',
        fontWeight: 'normal',
        fontStyle: "italic",
        fontSize: 18
    },
    text_footer: {
        margin:10,
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
        fontSize: 28,
        fontWeight: 'bold',
        color:'black',
        marginRight:15
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