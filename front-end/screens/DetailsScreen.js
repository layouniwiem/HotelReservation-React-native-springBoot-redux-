import React, { useRef, useState, useEffect } from 'react';
// import hotels from '../../model/hotels'

import {
  View,
  Text,
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,

} from 'react-native';
import { reservationGetAll } from '../actions/reservationAction'
import { roomDBGetDataByReservation, inviteeGetDataByRoom } from '../actions/reservationAction';

import { Avatar, Button, Card, Title, Paragraph, Modal } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import Myloader from './Myloader';
import { FlatList } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const dispatch = useDispatch();

  const reservations = useSelector(state => state.reservations.data);
  const hotels = useSelector(state => state.hotels.data);
  const [showLoader, setShowLoader] = React.useState(false);

  // const { item } = route.params;
  const [films, setFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([reservations]);
  const [selectedValue, setSelectedValue] = useState({});
  const findFilm = (query) => {
    //method called everytime when we change the value of the input
    if (query) {
      //making a case insensitive regular expression to get similar value from the film json
      const regex = new RegExp(`${query.trim()}`, 'i');
      console.log("searching for name")
      //setting the filtered film array according the query from the input
      setFilteredFilms(films.filter((film) => film.hotelName.search(regex) >= 0));
    } else {
      //if the query is null then return blank
      setFilteredFilms([]);
    }
  };

  const handleReservationGetAll = () => {


    try {

      console.log("hello handleReservationGetAll ");
      dispatch(reservationGetAll({

      })).then((res) => {
        setShowLoader(false)

        console.log("res", res)

        //navigation.navigate('ResultDetail', { res })

      })
      setShowLoader(true)

    } catch (e) {
      console.log("error", e);
    }
  }
  const handleInviteeByRoomGetData = (id) => {
    //  if(roomsDB!==null)
    //     for(let i=0;i<= roomsDB.length;i++)
    try {

      console.log("hello handleInviteeByRoomGetData Invitte  ");
      dispatch(inviteeGetDataByRoom(id)).then((res) => {
        // setShowLoader(false) 

        console.log("res", res)

        //navigation.navigate('ResultDetail', { res })

      })
      //   setShowLoader(true) 

    } catch (e) {
      console.log("error", e);
    }
  }
  const handleReservationGetData = (id) => {


    try {

      console.log("hello handleReservationGetData rooms ");
      dispatch(roomDBGetDataByReservation(id

      )).then((res) => {
        setShowLoader(false)
        console.log("res", res)
        //navigation.navigate('ResultDetail', { res })

      })
      setShowLoader(true)

    } catch (e) {
      console.log("error", e);
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
  const handleDate = (inclusion) => {
    let info = [];
    if(inclusion!== null){
    var array = inclusion.split(" ");}
    for (let i = 0; i < array.length; i++) {

      info.push(<Text style={styles.text}
      > {array[i]} </Text>)
    }
    return info[0];
  }
  useEffect(() => {
    handleReservationGetAll()

  }, [])
  useEffect(() => {

    setFilteredFilms(reservations)
  }, [reservations])
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




  return (
    <View>
      <ScrollView style={styles.scrollView}>

        <View  >



        </View>
        {(reservations !== null && filteredFilms !== null) ? (
          <FlatList
            data={filteredFilms}
            keyExtractor={(item, index) => console.log(item)}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  console.log(item.id)
                  handleReservationGetData(item.reservation_id)
                  navigation.navigate('HistoriqueDetails', { item })
                  // dispatch(getCurrentHotel(item)) ;
                  // handleAddHotelDB(item.hotelInfo.hotelCode,item.hotelInfo.hotelName,item.minHotelPrice.totalPrice,item.hotelInfo.hotelAddress)


                }}
              >
                <View style={styles.containerShadow}>
                  {/* <Text>SearchResult</Text> */}
                  <View style={styles.action2}>

                    <View style={styles.item2}>


                      <Card >
                        <Card.Content>
            
                          <Card.Cover source={{ uri: item.hotelImage }} />


                        </Card.Content>
                 

                      </Card>
                    </View>

                    <View style={styles.item2}>
                      <Text style={styles.textSign}>{item.hotel_Name}</Text>
                      <Text> {handleStars(item.hotel_Rating)}</Text>
                      <Paragraph style={styles.text}>
                        <FontAwesome
                          name="map-marker"
                          color="grey"
                          size={13}
                          marginRight={10}
                        /> {item.hotel_Adress} </Paragraph>
                      <Text style={styles.text}>Booking Date :<Text style={styles.text}>{item.reservationDate}</Text> </Text>


                      {/*                  
                   <Text style={styles.text}>Number of Rooms: {item.nbrRooms +1} </Text> */}

                      {/* <Text style={styles.text}>Rooms Types:{item.mealType} </Text>
<Text style={styles.text}> {item.typeReservation} </Text> */}






                      {(item.status == "Booked") ? (
                        <Text>
                          <FontAwesome
                            name="check"
                            color="#FFBF00"
                            size={20}
                            marginRight={10}
                          /><Text style={styles.text}> {item.status} </Text>
                        </Text>) : null}
                      {(item.status == "Cancelled") ? (
                        <Text>
                          <FontAwesome
                            name="times"
                            color="red"
                            size={20}
                            marginRight={10}
                          /><Text style={styles.text}> {item.status} </Text>
                        </Text>) : null}
                      {(item.status == "Confirmed") ? (
                        <Text>
                          <FontAwesome
                            name=" check-double"
                            color="red"
                            size={20}
                            marginRight={10}
                          /><Text style={styles.text}> {item.status} </Text>
                        </Text>) : null}

                      <Text style={styles.text}>From: {handleDate(item.dateCheckIn)} </Text>

                      <Text style={styles.text}>To: {handleDate(item.dateCheckOut)} </Text>

                    </View>
                  </View>

                  {/* <Text style={styles.textSign}> Reservation Details </Text> */}

                  <View style={styles.action2}>






                  </View>

                </View>
              </TouchableOpacity>)}
          />) : (
          <View style={styles.action}>
            <Text style={styles.textView}>
              No Data found
            </Text>


          </View>)
        }
        {/* <View style={styles.containerShadow}>
          <View style={styles.action}>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.textView}>
                {}
              </Text>

            </ScrollView>
          </View>
        </View> */}






      </ScrollView>

      <Modal
        transparent={true}
        visible={showLoader}
        animationType='slide'

      >
        <Myloader

        />

      </Modal>
      {/* <View style={styles.button} >
        <TouchableOpacity
          style={styles.signIn}
            onPress={()=>{
          // handleSearchRoomAvailability(item.resultIndex,hotels.sessionId,item.hotelInfo.hotelCode,"21")

              }}

        >
          <LinearGradient
            colors={['#002E63', '#5D8AA8']}
            style={styles.signIn}

          >

            <Text style={styles.signIn, {
              color: '#fff',
            }}
            > Show Rooms  </Text>

          </LinearGradient>
        </TouchableOpacity>
      </View> */}
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 5,
    // padding: 10,
    // height: 250,


    backgroundColor: 'white',
    margin: 5,
    // borderColor: '#05375a',
    // borderWidth: 1,
    // borderRadius: 10,
    // marginBottom: 10,
    // marginTop: 10,
    borderBottomRightRadius: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    borderRightWidth: 1,
    borderRightColor: '#C0C0C0',

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
    margin: 5,
    // marginBottom: 10,
    backgroundColor: 'white'

  },
  containerShadowfinal: {
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
    marginTop: 5,
    marginBottom: 50,
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
    marginTop: 5,
    marginBottom: 10,

  },




  text: {
    color: 'grey',
    margin: 2
  },
  textView: {
    color: 'grey',
    marginLeft: 7
  },

  textStar: {
    color: '#FFBF00',
    marginTop: 5
  },
  textSign: {
    fontSize: 16,
    fontStyle: "italic",
    color: '#002E63',

  },
  button: {
    alignItems: 'center',
    // marginTop: '48%',
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 1
  },
  buttonCenter: {

    paddingTop: 15,
    paddingRight: 1,


  },

  modalView2: {
    flex: 2,
    // marginTop: '50%',
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 5,
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
    //   shadowColor: "#000",
    //   shadowOffset: {
    //     width: 0,
    //     height: 1,
    //   },
    //   shadowOpacity: 0.25,
    //   shadowRadius: 3.84,

    //   elevation: 2,
    // //  flexDirection: 'row',
    //  // backgroundColor: '#C0C0C0'
  }, signIn: {
    width: '100%',
    // height: 40,
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
    fontSize: 30
  },
  text_footer: {
    color: '#002E63',
    fontSize: 18,
    fontStyle: "italic"
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
    // height: 100,
  },
  action2: {
    flexDirection: 'row',
    marginTop: 2,
    marginBottom: 2,

    marginRight: 10,
    //justifyContent: 'center',

    marginLeft: 10,
    // borderTopWidth: 1,
    // borderTopColor: '#C0C0C0',
    // borderBottomWidth: 1,
    // borderBottomColor: '#C0C0C0',
    //paddingBottom: 5,
    // height: 40,
  },
  action3: {
    flexDirection: 'row',
    marginTop: 1,
    marginLeft: 25,
    // borderBottomWidth: 1,
    // borderBottomColor: '#C0C0C0',

    paddingBottom: 5,
    height: 290
  },
  item1: {
    width: '50%',
    borderRightWidth: 1,
    borderRightColor: '#C0C0C0',
  },
  item2: {
    width: '50%',
  },
  item3: {
    width: '20%',
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
  // const styles = StyleSheet.create({

  //   container: {
  //     // flex: 5,
  //     // padding: 10,
  //     // height: 250,


  //     backgroundColor: 'white',
  //     margin: 11,
  //     // borderColor: '#05375a',
  //     // borderWidth: 1,
  //     // borderRadius: 10,
  //     // marginBottom: 10,
  //     // marginTop: 10,
  //     borderBottomRightRadius: 50,
  //     borderBottomWidth: 1,
  //     borderBottomColor: '#C0C0C0',
  //     borderRightWidth: 1,
  //     borderRightColor: '#C0C0C0',

  //   },

  //   containerShadow: {
  //     justifyContent: 'center',

  //     borderWidth: 1,
  //     borderRadius: 2,
  //     borderColor: '#A1CAF1',
  //     borderBottomWidth: 1,
  //     shadowColor: '#30D5C8',
  //     shadowOffset: { width: 0, height: 2 },
  //     shadowOpacity: 0.8,
  //     shadowRadius: 2,
  //     elevation: 4,
  //     marginLeft: 5,
  //     marginRight: 5,
  //     marginTop: 10,
  //     marginBottom: 10,
  //     backgroundColor: 'white'

  //   },
  //   containerShadowfinal: {
  //     justifyContent: 'center',

  //     borderWidth: 1,
  //     borderRadius: 2,
  //     borderColor: '#A1CAF1',
  //     borderBottomWidth: 1,
  //     shadowColor: '#30D5C8',
  //     shadowOffset: { width: 0, height: 2 },
  //     shadowOpacity: 0.8,
  //     shadowRadius: 2,
  //     elevation: 4,
  //     marginLeft: 5,
  //     marginRight: 5,
  //     marginTop: 10,
  //     marginBottom: 50,
  //     backgroundColor: 'white'

  //   },
  //   containerShadowAll: {

  //     borderWidth: 1,
  //     borderRadius: 2,
  //     borderColor: '#ddd',
  //     borderBottomWidth: 0,
  //     shadowColor: '#000',
  //     shadowOffset: { width: 0, height: 2 },
  //     shadowOpacity: 0.8,
  //     shadowRadius: 2,
  //     elevation: 1,
  //     marginLeft: 5,
  //     marginRight: 5,
  //     marginTop: 10,
  //     marginBottom: 10,

  //   },




  //   text: {
  //     color: 'grey',
  //     margin: 2
  //   },
  //   textView: {
  //     color: 'grey',
  //     marginLeft: 7
  //   },
  //   textSign: {
  //     fontSize: 18,
  //     fontWeight: 'bold'
  //   },
  //   textStar: {
  //     color: '#FFBF00',
  //     marginTop: 5
  //   },
  //   textSign: {
  //     fontSize: 18,
  //     fontWeight: 'bold'
  //   },
  //   button: {
  //     //alignItems: 'center',
  //     // marginTop: '48%',
  //     position: 'absolute',
  //     bottom: 0,
  //     right:0,
  //     padding:1,
  //     alignSelf:'flex-end'
  //   },
  //   buttonCenter: {

  //     paddingTop: 15,
  //     paddingRight: 1,


  //   },

  //   modalView2: {
  //     flex: 2,
  //     marginTop: '50%',
  //     backgroundColor: "white",
  //     borderRadius: 20,
  //     padding: 5,
  //     alignItems: "center",
  //     shadowColor: "#000",
  //     shadowOffset: {
  //       width: 0,
  //       height: 2
  //     }
  //   },
  //   sign: {

  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     borderRadius: 10,
  //     fontWeight: 'bold',
  //     fontSize: 20,
  //     color: '#002E63',
  //     //   shadowColor: "#000",
  //     //   shadowOffset: {
  //     //     width: 0,
  //     //     height: 1,
  //     //   },
  //     //   shadowOpacity: 0.25,
  //     //   shadowRadius: 3.84,

  //     //   elevation: 2,
  //     // //  flexDirection: 'row',
  //     //  // backgroundColor: '#C0C0C0'
  //   }, signIn:{
  //   width: '100%',
  //   height: 40,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 5,
  //   flexDirection: 'row',
  //   },
  //   plus: {
  //     width: '100%',
  //     height: 40,
  //     justifyContent: 'flex-start',
  //     alignItems: 'center',
  //     // borderRadius: 150,
  //     flexDirection: 'row'
  //   },
  //   placeTonight: {

  //     width: '100%',
  //     height: 40,
  //     justifyContent: 'flex-start',
  //     alignItems: 'center',
  //     paddingBottom: 199,
  //     paddingLeft: 190,
  //     flexDirection: 'row'
  //   },

  //   text_header: {
  //     color: '#fff',
  //     fontWeight: 'bold',
  //     fontSize: 30
  //   },
  //   text_footer: {
  //     color: '#002E63',
  //     fontSize: 18,
  //     fontStyle: "italic"
  //   },
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
  //   action2: {
  //     flexDirection: 'row',
  //     marginTop: 5,
  //     marginRight: 10,
  //     //justifyContent: 'center',

  //     marginLeft: 10,
  //     // borderTopWidth: 1,
  //     // borderTopColor: '#C0C0C0',
  //     // borderBottomWidth: 1,
  //     // borderBottomColor: '#C0C0C0',
  //     //paddingBottom: 5,
  //     height: 40,
  //   },
  //   action3: {
  //     flexDirection: 'row',
  //     marginTop: 1,
  //     marginLeft: 25,
  //     // borderBottomWidth: 1,
  //     // borderBottomColor: '#C0C0C0',

  //     paddingBottom: 5,
  //     height: 290
  //   },
  //   item1: {
  //     width: '15%',
  //   },
  //   item2: {
  //     width: '50%',
  //   },
  //   item3: {
  //     width: '20%',
  //   },

  //   textInput: {

  //     // paddingLeft: 1,
  //     color: '#05375a',
  //   },
  //   textInputItem: {
  //     //flex:1,
  //     color: 'grey',

  //     marginTop: Platform.OS === 'ios' ? 0 : -12,
  //     paddingLeft: 34,
  //   },
  //   map: {
  //     width:334,
  //     height: 288,
  //     marginLeft:-24
  //   },
  //   scrollView:{
  //    // height: 504
  //     // Dimensions.get('window')*0.75
  //   }
  // });
