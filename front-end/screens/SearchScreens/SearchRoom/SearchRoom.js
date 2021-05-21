import React from 'react';
import {
    View, Text, Button, StyleSheet, ScrollView, FlatList,
    TouchableOpacity
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Checkbox } from 'react-native-paper';
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { getCurrentRooms } from '../../../actions/currentDataActions';
const SearchRoom = ({ route, navigation }) => {
    const rooms = useSelector(state => state.availableRooms.data.hotelRooms.hotelRoom);
    React.useEffect(() => {
        console.log("state rooms", rooms)
        console.log("state rooms")
    }, [rooms]);
    const hotels = useSelector(state => state.hotels.data);
    const index = useSelector(state => state.indexData);

    const [checkedBox, setCheckedBox] = React.useState(false);
    const [checkedBoxCancel, setCheckedBoxCancel] = React.useState(false);
    const [checkedBoxRed, setCheckedBoxRed] = React.useState(false);
    const [checkedBoxBreakfast, setCheckedBoxBreakfast] = React.useState(false);


    const [money, setMoney] = React.useState("  ")
    const [roomType, setRoomType] = React.useState("  ");
    const [bed, setBed] = React.useState("  ")

    const [view, setView] = React.useState("  ")

    const [smoking, setSmoking] = React.useState("")


    // const [checked, setChecked] = React.useState('first');
    // const [checked2, setChecked2] = React.useState('first');
    // const [checked3, setChecked3] = React.useState('first');
    // const [data, setData] = React.useState(2);
    const handleInclusion = (inclusion) => {
        let info=[]; 
        var array = inclusion.split(", ");
        for (let i=0;i<array.length;i++){
           
            info.push(<Text style={styles.text}
                > <FontAwesome
                        name="plus"
                        color="#FFBF00"
                        size={20}

                    /> {array[i]}{"\n"} </Text> )  
                   
            }
            return info;
        }
  
    const handleDescriptionRoom = (roomName) => {
        let info=""; let smoke=""
        let beds=""; let vue="";
        var array = roomName.split(" ");
        //  return array
        // console.log(array)

        setRoomType(array[0]);
        setBed(array[1]);
        setView(array[2])
        setSmoking(array[4]);
        return (
            <View>
                <Text style={styles.text}
                >
                    <FontAwesome
                        name="info"
                        color="#05375a"
                        size={20}

                    /> {array[0]} </Text>
                <Text style={styles.text}
                >
                    <FontAwesome
                        name="bed"
                        color="#05375a"
                        size={20}

                    /> {array[1]} </Text>
                    {(array[2]=="NonSmoking"||array[2]=="nonSmoking"||array[2]=="Nonsmoking")?(
                <Text style={styles.text}
                >
                    <MaterialCommunityIcons name="smoking" color="#05375a" size={20} />

                    {array[2]} </Text>):(
                         <Text style={styles.text}
                         >
                             <MaterialCommunityIcons name="info" color="#05375a" size={20} />
         
                             {array[2]} </Text>)
                    
}

                {(array[3] != null) ? (<Text style={styles.text}
                >   <FontAwesome
                        name="eye"
                        color="#05375a"
                        size={20}

                    /> {array[3]} </Text>) : (
                    <Text style={styles.text}
                    >   <FontAwesome
                            name="eye"
                            color="#05375a"
                            size={20}

                        /> Standart vue </Text>)}
            </View>
        )
    }
    const dispatch = useDispatch();

    const handleSmoke=(bool)=>{
        if (bool==true ){
            return
            "Smoking";

        }
        return "no Smoking"
    }
    const handleTitleRoom = (roomName) => {
        let info=""; let smoke=""
        let beds=""; let vue="";
        var array = roomName.split(",");
        //  return array
        // console.log(array)
        // for (i=0;i<array.length;i++){
        //     switch (array[i]){
        //         case 'non Smoking':
        //             smoke= array[i]; break;
        //             case '':
        //             info= array[i]; break;
        //             case '':
        //             info= array[i]; break;
        //             case '':
        //             info= array[i]; break;
        //     }
        // }
        setRoomType(array[0]);
        setBed(array[1]);
        setView(array[2])
        setSmoking(array[4]);
        return ( (array.length>1)?(
            <Text>
                <Text style={styles.text}
                > <FontAwesome
                        name="info-circle"
                        color="#FFBF00"
                        size={20}

                    /> {array[0]} </Text>
                    {"\n"}
<Text style={styles.text}
                ><FontAwesome
                        name="bed"
                        color="#FFBF00"
                        size={20}

                    />{array[1]} </Text>
                    {"\n"}
                <Text style={styles.text}
                >
                   {(array[2]=="Smoking"|| array[2]=="smoking")? (
                       
                   <MaterialCommunityIcons name="smoking" color="#FFBF00" size={20} />
                   ):((array[2]=="nonSmoking"|| array[2]=="nonsmoking"|| array[2]=="Nonsmoking" || array[2]=="non smoking"|| array[2]=="Non smoking"|| array[2]=="non Smoking"))?
                      <MaterialCommunityIcons name="smoking-off" color="#FFBF00" size={20} /> 
                   :(
                    <MaterialCommunityIcons 
                    name="information-outline" 
                    color="#FFBF00" size={20} 
                    /> 

                   )}{array[2]} </Text>{"\n"}


                {(array[3] != null) ? 
                (<Text style={styles.text}
                ><FontAwesome
                        name="eye"
                        color="#FFBF00"
                        size={20}

                    /> {array[3]} </Text> ) : (
                    <Text style={styles.text}
                    ><FontAwesome
                            name="eye"
                            color="#FFBF00"
                            size={20}

                        /> Standart vue </Text>)}
            </Text>

        ):(
         
            
                                       
               
                <Paragraph style={styles.text}>
                <FontAwesome
                    name="info-circle"
                    color="#FFBF00"
                    size={20}

                />
                {array[0]}  
                </Paragraph>
               
        ))
    }

    return (
        <View style={styles.container}>

            <ScrollView style={styles.scrollView}>

                <View style={styles.containerShadow}>

                    <View style={styles.buttonCenter}>
                        <TouchableOpacity>

                            <FontAwesome
                                name="pencil"
                                color="#002E63"
                                size={20}
                            />


                        </TouchableOpacity>
                    </View>

                    <Text style={styles.text}
                    >  You search for {hotels.noOfRoomsRequested} : rooms ,{index.nbAdult}: adults ,{index.nbChildren + index.nbInfant}: childrens</Text>
                    <View style={styles.action2}>
                        <View style={styles.item3}>
                            <Text style={styles.textView}> Check-In-Date</Text>
                            <Text style={styles.textView}> {hotels.checkInDate}</Text>

                        </View>
                        <View style={styles.item2}>
                            <Text style={styles.textView}> Check-Out-Date</Text>
                            <Text style={styles.textView}> {hotels.checkInDate}</Text>

                        </View>
                    </View>


                </View>
                <View style={styles.containerShadow}>

                    <View style={styles.buttonCenter}>

                    </View>

                    <Text style={styles.text, { fontWeight: 'bold' }}
                    >  Set your filters </Text>
                    <View style={styles.action2}>
                        <View style={styles.item3}>
                            <View style={styles.action3}>
                                <Checkbox
                                color="#FFBF00"
                                    status={checkedBox ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        setCheckedBox(!checkedBox);
                                    }}
                                />
                                <Text style={styles.text}
                                >
                                    <FontAwesome
                                        name="bed"
                                        color="#05375a"
                                        size={30}

                                    />
                                    {money}
                                    <FontAwesome
                                        name="bed"
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
                                        setCheckedBoxRed(!checkedBoxRed);
                                    }}
                                />
                                <FontAwesome
                                    name="bed"
                                    color="#05375a"
                                    size={30}

                                />
                                {/* <Text style={styles.textfilter}
                    >  non redufunable </Text> */}
                            </View>
                        </View>
                    </View>
                    <View style={styles.action3}>

                        <Checkbox
                        color="#FFBF00"
                            status={checkedBoxBreakfast ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setCheckedBoxBreakfast(!checkedBoxBreakfast);
                            }}
                        />
                        <Text style={styles.textfilter}
                        >  Breakfast included </Text>
                    </View>


                </View>
             {  (rooms!=null) ? (
                <FlatList
                    data={rooms}
                    keyExtractor={(item, index) => item.roomIndex}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('RoomDetail', { item });
                                dispatch(getCurrentRooms(item))

                            }}
                        >
                            <View style={styles.containerShadow}>



                                <Text style={styles.text_footer}
                                >  {item.roomTypeName} </Text>
                                {/* <Text style={styles.text}
                    >  choose your bed </Text> */}
                                <View style={styles.action2}>
                                <View style={styles.item3}>

                                    {/* <RadioButton
                            value="first"
                            status={checked2 === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked2('first')}
                    > */}
                                    <Text style={styles.text}
                                    >

                                        {handleTitleRoom(item.roomTypeName)}
                                    </Text>

                                </View>
                                <View style={styles.item3}>

                                
                                {(item.inclusion=="Free WiFi ")?(
                                    
                                    
                                    <Text style={styles.text}
                > <FontAwesome
                        name="wifi"
                        color="#FFBF00"
                        size={20}

                    /> {item.inclusion} </Text>  ):(

                        handleInclusion(item.inclusion)

                           
                    )}                           
                                   </View>
                                   </View>

                                {/* <View style={styles.action}>
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
                    </View> */}

                                {/* (item.roomAdditionalInfo): */}
                                {/* <Card >
                  <Card.Content>
                  <Text style={styles.signIn}>{}</Text>
                    {/* <Paragraph>{item.hotelInfo.hotelAdress}</Paragraph> */}
                                {/* </Card.Content> */}
                                {/* <Card.Cover source={{ uri: item.roomAdditionalInfo.imageURLs.url[0]}} /> */}
                                {/* <Card.Cover source={{uri:item.coverImages}} />  */}
                                {/* <Card.Cover source={require(item.coverImages)} /> */}


                                {/* </Card>  */}
                               
                                <View style={styles.button}>
                                    <TouchableOpacity
                                     onPress={() => {
                                        navigation.navigate('RoomDetail', { item })
                                            dispatch(getCurrentRooms(item));
                                    }}>
                                        <Text>
                                            {/* <Text style={styles.text_header}> 120 {item.roomRate.currency} </Text> */}
                                            <FontAwesome
                                                name="slack"
                                                color="#002E63"
                                                size={20}
                                            />
                                            <Text style={styles.text_header}> Discover  </Text>
                                            </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* <View style={styles.containerShadow}>



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
                        </TouchableOpacity> */}
                            {/* / </View>
                </View> */}
                        </TouchableOpacity>)}
                />):(<View> <Text> no rooms data found  </Text></View>)}
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
        borderBottomWidth: 1,
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
        color: 'grey',
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
        
        // justifyContent: 'center',
        //  marginLeft: '67%',
        // alignItems: 'center',
        // //marginTop: '48%',
       //  width: 150,
        // padding: 3,
        alignItems: 'flex-end',
   // marginTop: '48%',
   position: 'absolute',
   bottom: 0,
   right:0,
    //width: '100%',
    padding: 1
    },
    buttonCenter: {
        ...StyleSheet.absoluteFillObject,
        // top: 10,
        left: 320,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        margin: 2,
        // padding: 2,
        // paddingLeft: 180,
        //backgroundColor: "grey",
        //width: 20,

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
        color: '#002E63',

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
        color: '#002E63',
        fontWeight: 'bold',
        fontSize: 15
    },
    text_footer: {
        color: '#002E63',
        fontSize: 18,

        fontStyle: "italic",
        borderBottomWidth: 1,
        borderBottomColor: '#05375a',
        margin: 10,
        padding: 5
    },
    action: {
        flexDirection: 'row',
        // marginTop: 5,
        // marginRight: 10,

        marginLeft: 10,
        // borderTopWidth: 1,
        // borderTopColor: '#C0C0C0',
        // borderBottomWidth: 1,
        // borderBottomColor: '#C0C0C0',
        //paddingBottom: 5,
        // height: 30,
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
