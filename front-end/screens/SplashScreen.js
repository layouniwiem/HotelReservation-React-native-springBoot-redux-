
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import SignInScreen from './SignInScreen';
const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <Animatable.View
                style={styles.header2}
                animation='fadeInRightBig'
            >

            </Animatable.View>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duration={2500}
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
                {/* <Text> Header</Text> */}
            </View>
            <Animatable.View
                style={styles.footer}
                animation='fadeInLeftBig'
            >
                <Text style={styles.title}>Stay Connected       With EveryOne </Text>
                <Text style={styles.text}> Sign in with account </Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                        <LinearGradient
                            colors={['#002E63', '#5D8AA8']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}> Get Started</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color="#fff"
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}
export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#848482',

    },
    header: {
        flex: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 0,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    footer: {
        flex: 20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 200,
        paddingVertical: 50,
        paddingHorizontal: 30
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
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});