
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
import EVoucher from './EVoucherScreen';
import { useSelector } from "react-redux";
import { Checkbox } from 'react-native-paper';
import EFacture from './EFacture';
const CardScreen = ({ navigation, showIt },params) => {
    const state = useSelector(state => state.currentData);
    const hotels = useSelector(state => state.hotels.data);
    const [checkedBox, setCheckedBox] = React.useState(false);
    const [check, setCheck ]= React.useState(false);
    const [hide, setHide ]= React.useState(false);

    const [checkedBoxCancel, setCheckedBoxCancel] = React.useState(false);
    const [checkedBoxRed, setCheckedBoxRed] = React.useState(false);
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

    const show = showIt;
    console.log("show", showIt)
    const dispatch = useDispatch();

    // const addUser = (email,username,password) => dispatch(userPostData(email,username,password));
    const handleaddUser = async (e, name) => {
        dispatch(userPostData(user)).then((res) => {
            console.log(res);
        });


    };
    // React.useEffect(()=>{
    //     params.setCheckHided(true);
    // },[hide])
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
        (show == true) ? (<View style={styles.container} >
            <View style={styles.header} >
                <Text style={styles.text_header}>Pay easily and safely Now with us !</Text>
            </View>
            <Animatable.View
                animation="fadeInUp"
                style={styles.footer} >
                <View style={styles.action}>
                    <View style={styles.item3}>
                        <View style={styles.action2}>
                            <Checkbox
                                color="#FFBF00"
                                status={checkedBox ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    // if (checkedBoxRed)
                                    setCheckedBox(!checkedBox);
                                    setCheckedBoxRed(checkedBox)
                                    setCheckedBoxCancel(checkedBox)

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
                                    name="cc-paypal"
                                    color="#05375a"
                                    size={30}

                                />   </Text>
                        </View>
                    </View>
                    <View style={styles.item3}>
                        <View style={styles.action2}>
                            <Checkbox
                                color="#FFBF00"
                                status={checkedBoxCancel ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    // if (checkedBoxRed)
                                    setCheckedBox(checkedBoxCancel);
                                    setCheckedBoxRed(checkedBoxCancel)
                                    setCheckedBoxCancel(!checkedBoxCancel)
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
                                    name="cc-visa"
                                    color="#05375a"
                                    size={
                                    
                                    30}

                                />  </Text>
                        </View>
                    </View>

                    <View style={styles.item3}>
                        <View style={styles.action2}>


                            <Checkbox
                                color="#FFBF00"
                                status={checkedBoxRed ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    // if(checkedBox)
                                    setCheckedBoxRed(!checkedBoxRed);
                                    setCheckedBox(checkedBoxRed);
                                    setCheckedBoxCancel(checkedBoxRed)




                                }}
                            />
                            <FontAwesome
                                name="cc-mastercard"
                                color="#05375a"
                                size={30}

                            />
                           
                        </View>
                    </View>
                    </View>
                    <View style={styles.action}>
                        <FontAwesome
                            name="credit-card-alt"
                            color="#05375a"
                            size={20} />
                   
                    
                    <TextInput
                        placeholder="card number"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View animation="bounceIn"  >

                            <Feather name='check-circle'
                                color="green"
                                size={20} />
                        </Animatable.View>

                        : null}

</View>
               
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={30} />
                    <TextInput
                        placeholder="card password "
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather name="eye-off"
                                color="grey"
                                size={20}
                            />
                            : <Feather name="eye"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>


                <View style={styles.button} >

                    <TouchableOpacity

                        onPress={() => {setCheck(true);
                            setHide(true);
                           
}}
                        style={[styles.signIn,{
                            borderColor:'#002E63',
                            borderWidth:1 ,
                            marginTop: 1
                         }]}
                        >
                        <Text style={styles.textSign, {
                            color: '#002E63'
                        }}> Pay Now </Text>
                    </TouchableOpacity>
                  
                </View>
                <EFacture show={check}/>
            </Animatable.View>
        </View>) : ((show == false) ? (
            
              <View style={styles.header} >
                <Text style={styles.text_header}>Here is your E-Voucher!</Text>
               
                 <EVoucher />
            
            </View>
            

        )

            : (
                null
            )))
}
export default CardScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002E63'

    }, item3: {
        width: '33%'
    },
    header: {
        flex: 2,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingTop: 10,
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
        //  marginTop: 5,
        marginBottom: 10,
    },
    text_header: {
        color: '#FFBF00',
        fontWeight: 'bold',
        fontStyle: "italic",
        fontSize: 25
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
    action2: {
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
    }
});