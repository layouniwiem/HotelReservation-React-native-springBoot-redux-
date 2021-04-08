import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Checkbox } from 'react-native-paper';

const SearchRoom = ({ route, navigation }) => {
    const [checkedBox, setCheckedBox] = React.useState(false);
    const [checkedBoxCancel, setCheckedBoxCancel] = React.useState(false);
    const [checkedBoxRed, setCheckedBoxRed] = React.useState(false);
    const [checkedBoxBreakfast, setCheckedBoxBreakfast] = React.useState(false);


    const [money, setMoney] = React.useState("TND")

    const [checked, setChecked] = React.useState('first');
    const [checked2, setChecked2] = React.useState('first');
    const [checked3, setChecked3] = React.useState('first');
    const [data, setData] = React.useState(2);

    return (
        <View style={styles.container}>

            <ScrollView style={styles.scrollView}>
                <View style={styles.containerShadow}>

                <View style={styles.buttonCenter}>
                        <TouchableOpacity>
                    
                                <FontAwesome
                                    name="pencil"
                                    color="#A1CAF1"
                                    size={20}
                                />
                              
                            
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.text}
                    >  You search for {data} : adults ,{data}: adults ,{data}: nights</Text>
                    <View style={styles.action2}>
                        <View style={styles.item3}>
                            <Text style={styles.textView}> Check-In-Date</Text>
                        </View>
                        <View style={styles.item2}>
                            <Text  style={styles.textView}> Check-Out-Date</Text>
                        </View>
                    </View>
                   
                  
                </View>
                <View style={styles.containerShadow}>

<View style={styles.buttonCenter}>
        
    </View>

    <Text style={styles.text,{fontWeight:'bold'}}
    >  Set your filters </Text>
    <View style={styles.action3}>
      
        <Checkbox
      status={checkedBox ? 'checked' : 'unchecked'}
      onPress={() => {
        setCheckedBox(!checkedBox);
      }}
    />
    <Text style={styles.textfilter}
    >  no concellation needed </Text>
    </View>
    <View style={styles.action3}>
      
        <Checkbox
      status={checkedBoxRed ? 'checked' : 'unchecked'}
      onPress={() => {
        setCheckedBoxRed(!checkedBoxRed);
      }}
    />
    <Text style={styles.textfilter}
    >  non redufunable </Text>
    </View>
    <View style={styles.action3}>
      
        <Checkbox
      status={checkedBoxBreakfast ? 'checked' : 'unchecked'}
      onPress={() => {
        setCheckedBoxBreakfast(!checkedBoxBreakfast);
      }}
    />
    <Text style={styles.textfilter}
    >  Breakfast included </Text>
    </View>
   
  
</View>
                <View style={styles.containerShadow}>



                    <Text style={styles.text_footer}
                    >  Double or Twin Room </Text>
                    <Text style={styles.text}
                    >  choose your bed </Text>
                    <View style={styles.action}>
                        <RadioButton
                            value="first"
                            status={checked2 === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked2('first')}
                        /><Text style={styles.text}
                        >  <FontAwesome
                                name="bed"
                                color="#05375a"
                                size={30}

                            /> Double Bed</Text>

                    </View>
                    <View style={styles.action}>
                        <RadioButton
                            value="second"
                            status={checked2 === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked2('second')}
                        />
                        <Text style={{ marginTop: 10, color: 'grey' }}>
                            <FontAwesome
                                name="bed"
                                color="#05375a"
                                size={15}

                            /> <FontAwesome
                                name="bed"
                                color="#05375a"
                                size={15}

                            /> 2 single beds</Text>
                    </View>
                    <Text style={styles.sign}
                    >  120 dt </Text>
                    <View style={styles.button}>
                        <TouchableOpacity>
                            <LinearGradient
                                colors={['#A1CAF1', '#30D5C8']}
                                style={styles.signIn}
                            >
                                <Text style={styles.text_header}> 120 {money} </Text>
                                <FontAwesome
                                    name="tag"
                                    color="#fff"
                                    size={20}
                                />
                                <Text>  </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerShadow}>



                    <Text style={styles.text_footer}
                    >  Single Room </Text>
                    <Text style={styles.text}
                    >  choose your bed </Text>
                    <View style={styles.action}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        /><Text style={styles.text}
                        >  <FontAwesome
                                name="bed"
                                color="#05375a"
                                size={30}

                            /> Double Bed</Text>

                    </View>
                    <View style={styles.action}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                        <Text style={{ marginTop: 10, color: 'grey' }}>
                            <FontAwesome
                                name="bed"
                                color="#05375a"
                                size={15}

                            /> <FontAwesome
                                name="bed"
                                color="#05375a"
                                size={15}

                            /> 2 single beds</Text>
                    </View>

                    <Text style={styles.sign}
                    >  100 dt </Text>
                    <View style={styles.button}>
                        <TouchableOpacity>
                            <LinearGradient
                                colors={['#A1CAF1', '#30D5C8']}
                                style={styles.signIn}
                            >
                                <Text style={styles.text_header}> 120 {money} </Text>
                                <FontAwesome
                                    name="tag"
                                    color="#fff"
                                    size={20}
                                />
                                <Text>  </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerShadow}>



                    <Text style={styles.text_footer}
                    >  Triple Room </Text>
                    <Text style={styles.text}
                    >  choose your bed </Text>

                    <View style={styles.action}>
                        <RadioButton
                            value="first"
                            status={checked3 === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked3('first')}
                        /><Text style={styles.text}
                        >  <FontAwesome
                                name="bed"
                                color="#05375a"
                                size={30}

                            /> Double Bed</Text>

                    </View>
                    <View style={styles.action}>
                        <RadioButton
                            value="second"
                            status={checked3 === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked3('second')}
                        />
                        <Text style={{ marginTop: 10, color: '#05375a' }}>
                            <FontAwesome
                                name="bed"
                                color="#05375a"
                                size={15}

                            /> <FontAwesome
                                name="bed"
                                color="#05375a"
                                size={15}

                            /> 2 single beds</Text>
                    </View>
                    <Text style={styles.sign}
                    >  100 dt </Text>
                    <View style={styles.button}>
                        <TouchableOpacity>
                            <LinearGradient
                                colors={['#A1CAF1', '#30D5C8']}
                                style={styles.signIn}
                            >
                                <Text style={styles.text_header}> 120 {money} </Text>
                                <FontAwesome
                                    name="tag"
                                    color="#fff"
                                    size={20}
                                />
                                <Text>  </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default SearchRoom;


const styles = StyleSheet.create({
    container: {
        // flex: 5,
        // padding: 10,
        // height: 250,


        // backgroundColor: 'white',
        //margin: 11,
        // borderColor: '#05375a',
        // borderWidth: 1,
        // borderRadius: 10,
        // marginBottom: 10,
        // marginTop: 10,
        // borderBottomRightRadius: 50,
        // borderBottomWidth: 1,
        // borderBottomColor: '#C0C0C0',
        // borderRightWidth: 1,
        // borderRightColor: '#C0C0C0',

    },

    containerShadow: {
        justifyContent: 'center',

        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#A1CAF1',
        borderBottomWidth: 0,
        shadowColor: '#30D5C8',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white'

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




    text: {
        color: '#05375a',
        fontStyle: "italic",

        //  margin: 2
    },
    textView: {
        color: 'grey',
        marginLeft: 7,
        // paddingTop:1
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textfilter: {
        color: 'grey',
       
        marginTop: 10
    },

    button: {
        justifyContent: 'center',
        marginLeft: '67%',
        alignItems: 'center',
        //marginTop: '48%',
        width: 121,
        padding: 3,
    },
    buttonCenter: {
        // justifyContent: 'flex-end',
        alignItems: 'flex-end',
// margin:2,
        padding: 2,
        // paddingLeft: 180,


    },

    modalView2: {
        flex: 2,
        marginTop: '50%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 5,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    sign: {

        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#00CC99',

    }, signIn: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
    },
    plus: {
        width: '100%',
        height: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // borderRadius: 150,
        flexDirection: 'row'
    },
    placeTonight: {

        width: '100%',
        height: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 199,
        paddingLeft: 190,
        flexDirection: 'row'
    },

    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    },
    text_footer: {
        color: '#A1CAF1',
        fontSize: 18,

        fontStyle: "italic",
        borderBottomWidth: 1,
        borderBottomColor: '#A1CAF1',
        margin: 10,
        padding: 5
    },
    action: {
        flexDirection: 'row',
        marginTop: 5,
        marginRight: 10,

        marginLeft: 10,
        // borderTopWidth: 1,
        // borderTopColor: '#C0C0C0',
        // borderBottomWidth: 1,
        // borderBottomColor: '#C0C0C0',
        //paddingBottom: 5,
        height: 30,
    },
    action2: {
        flexDirection: 'row',
        marginTop: 5,
        marginRight: 10,
        //justifyContent: 'center',

        marginLeft: 10,
        // borderTopWidth: 1,
        // borderTopColor: '#C0C0C0',
        // borderBottomWidth: 1,
        // borderBottomColor: '#C0C0C0',
        //paddingBottom: 5,
        height: 40,
    },
    action3: {
        flexDirection: 'row',
        marginTop: 1,
        marginLeft: 25,
        // borderBottomWidth: 1,
        // borderBottomColor: '#C0C0C0',

        paddingBottom: 5,
        height: 'auto'
    },
    item1: {
        width: '15%',
    },
    item2: {
        margin:5,
        paddingLeft: 10,
        width: '50%',
        borderLeftWidth: 1,
        borderLeftColor: '#30D5C8',
    },
    item3: {
        width: '50%',
        //  borderLeftWidth: 1,
        //  borderLeftColor: '#C0C0C0',
    },

    textInput: {

        // paddingLeft: 1,
        color: '#05375a',
    },
    textInputItem: {
        //flex:1,
        color: 'grey',

        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 34,
    },
    map: {
        width: 334,
        height: 288,
        marginLeft: -24
    },
});
