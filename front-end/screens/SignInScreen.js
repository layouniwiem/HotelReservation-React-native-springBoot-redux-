
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert,
    Dimensions,

} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../components/context';
import Users from '../model/users';
import { useDispatch } from "react-redux";
import { login } from '../actions/userActions';

const SignInScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const [data, setData] = React.useState({
        userName: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        IsValidPassword: true,
        userToken:''
    });
    //    const { signIn } = React.useContext(AuthContext);


    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                IsValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                IsValidPassword: false

            });
        }

    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }
    const textInputChange = (val) => {
        if (val.length >= 4) {
            setData({
                ...data,
                userName: val,
                check_textInputChange: true,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                userName: val,
                check_textInputChange: false,
                isValidUser: false,


            });
        }


    }
    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            })
        } else {
            setData({
                ...data,
                isValidUser: false
            })
        }
    }
    const handleValidPassword = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                IsValidPassword: true
            });
        } else {
            setData({
                ...data,
                IsValidPassword: false
            })
        }
    }
    const loginHandle = (userName, password) => {
        // const foundUser= Users.filter(item =>{
        //     return userName== item.userName && password == item.password ;
        // });

        if (userName.length == 0 || password.length == 0) {
            Alert.alert('Wrong Input!', 'Username or password field can not be empty', [
                { text: 'Okay' }
            ]);
            return;
        }
        // if (foundUser.length==0){
        //     Alert.alert('Invalid User!','Username or password is incorrect',[
        //         {text:'Okay'}
        //     ]);
        //     return;
        // }

        try {
           dispatch(login({'username':userName ,'password': password})).then((res) => {
            setData({
                ...data,
                userToken: res.data.jwt
            })
            console.log("userToken",data.userToken)

            })

        } catch (e) {
            console.log(e);
        }
    }
    // const loginUser=(userName,password)=>{
    //     if ()

    // }
    return (
        <View style={styles.container} >
            <StatusBar backgroundColor="#05375a" barStyle="Light-content" />
            <View style={styles.header} >
                <Text style={styles.text_header}> Welcome !</Text>
            </View>
            <Animatable.View
                animation="fadeInUp"
                style={styles.footer} >
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
                        onEndEditing={
                            (e) => { handleValidUser(e.nativeEvent.text) }
                        }
                    />
                    {data.check_textInputChange ?
                        <Animatable.View animation="bounceIn" >

                            <Feather name='check-circle'
                                color="green"
                                size={20} />
                        </Animatable.View>

                        : null}

                </View>
                {data.isValidUser ? null :

                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}> Username must be 4  characteres long. </Text>
                    </Animatable.View>
                }
                <Text style={styles.text_footer}> password:</Text>
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
                        onChangeText={(val) => handlePasswordChange(val)}
                        onEndEditing={
                            (e) => { handleValidPassword(e.nativeEvent.text) }
                        }
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
                {data.IsValidPassword ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}> Password must be 8 characteres long. </Text>
                    </Animatable.View>
                }
                <View style={styles.button} >
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {
                            loginHandle(data.userName, data.password)
                        }}
                    >
                        <LinearGradient
                            colors={['#002E63', '#5D8AA8']}
                            style={styles.signIn}

                        >
                            <Text style={styles.signIn, {
                                color: '#fff'
                            }} > Sign In </Text>

                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('SignUpScreen')}
                        style={[styles.signIn, {
                            borderColor: '#002E63',
                            borderWidth: 1,
                            marginTop: 15
                        }]}>
                        <Text style={styles.textSign, {
                            color: '#002E63'
                        }}> Sign Up </Text>
                    </TouchableOpacity>
                </View>

            </Animatable.View>
        </View>
    )
}
export default SignInScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002E63'
    },
    //   header: {
    //       flex: 2,
    //       justifyContent: 'center',
    //       alignItems: 'center'
    //   },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,

    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
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
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
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
    }

});