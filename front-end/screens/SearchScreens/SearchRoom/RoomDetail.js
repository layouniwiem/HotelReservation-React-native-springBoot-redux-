import React, { useRef, useState, useEffect } from 'react';
import MyCarousel from '../MyCarrossel';


import {
  View,
  Text,
  Dimensions,
  Platform,
  StyleSheet,
  // TouchableOpacity

} from 'react-native';
 import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card, Title, Paragraph, Modal } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import Myloader from '../../Myloader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { reservationPostData } from '../../../actions/reservationAction';
import { roomDBPostData } from '../../../actions/reservationAction';
import { FlatList } from 'react-native';
import moment from 'moment';


const RoomDetail = ({ route, navigation }) => {
  const state = useSelector(state => state.currentData);

  const dispatch = useDispatch();
  const hotels = useSelector(state => state.hotels.data);
  console.log("hotellllllllls",hotels,"hotels");
  const hotelDB = useSelector(state => state.hotelDB.data);
  const roomDB = useSelector(state => state.roomsDB.data);
  const reservations = useSelector(state => state.reservations.data);
  // const index = useSelector(state => state.indexData.data);
  const index = useSelector(state => state.indexData)

  const [money, setMoney] = React.useState(null)
  const [showLoader, setShowLoader] = React.useState(false);
  const { item } = route.params;
  console.log("itemmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm \n",item, "item")
  const handlefareRoom = (roomName,day) => {
    let info = ""; let smoke = ""
    let beds = ""; let vue = "";
    var array = roomName.split(",");

    return ((array.length > 1) ? (
      <Text>
        <Text style={styles.text}
        > <FontAwesome
            name="calendar-check-o"
            color="#FFBF00"
            size={20}

          /> day:{day} 
          </Text>
        {"\n"} </Text>):(<Paragraph style={styles.text}>
        <FontAwesome
          name="info-circle"
          color="#FFBF00"
          size={20}
        />
        {array[0]}
      </Paragraph>))
        }
  const handleCancellation = (resultIndex, sessionId, roomIndex, responseTime) => {


    try {

      console.log("hello handleCancellation ");
      dispatch(CancellationGetAll({
        'resultIndex': resultIndex,
        'sessionId': sessionId,
        'roomIndex': roomIndex,
        "responseTime": "21",

      })).then((res) => {
        setShowLoader(false)

        console.log("res handleCancellation", res)

        //navigation.navigate('ResultDetail', { res })

      })
      setShowLoader(true)

    } catch (e) {
      console.log("error", e);
    }
  }
  const handleInclusion = (inclusion) => {
    let info = [];
    var array = inclusion.split(", ");
    for (let i = 0; i < array.length; i++) {

      info.push(<Text style={styles.text}
      > <FontAwesome
          name="plus"
          color="#FFBF00"
          size={20}
        /> {array[i]}{"\n"} </Text>)
    }
    return info;
  }

  const handleAddroomDB = (prixTotal, room_Type, room_Name, reservation_id) => {

    try {

      console.log("hello handleAddroomDB ", prixTotal, room_Type, room_Name, reservation_id);

      dispatch(roomDBPostData({
        'prixTotal': prixTotal,
        'room_Type': room_Type,
        'room_Name': room_Name,
        "reservation_id": reservation_id,
      })).then((res) => {
        console.log(res)
        setShowLoader(false)
      })
      setShowLoader(true)
    } catch (e) {
      console.log("error", e);
    }
  }
  const handleAddreservation = (hotel_id, hotel_Name,hotel_Adress,hotel_Rating,dateCheckIn, dateCheckOut,prixTotal, nbrRooms, typeReservation,status,reservationDate,hotelImage) => {
    try {
      // console.log("hello handleAddreservation " ,
      // hotel_id, hotel_Name,hotel_Adress,hotel_Rating,dateCheckIn, 
      // dateCheckOut,prixTotal, nbrRooms, typeReservation,status,reservationDate,hotelImage);
      dispatch(reservationPostData({
        'hotel_id': hotel_id,
        'dateCheckIn': dateCheckIn,
        'dateCheckOut': dateCheckOut,
        "prixTotal": prixTotal,
        'nbrRooms': nbrRooms,
        'typeReservation': typeReservation,
        'status':status,
        'hotel_Name':hotel_Name,
        'hotel_Adress':hotel_Adress,
        'hotel_Rating':hotel_Rating,
        'reservationDate': moment(new Date()).format('MMMM Do YYYY, h:mm:ss a'),
        'hotelImage':hotelImage,

      })
      ).then((res) => {
        handleAddroomDB(state.hotel.minHotelPrice.totalPrice,item.roomTypeName,item.roomTypeName,res.data.reservation_id)

        console.log("res handleAddreservation ", res)
        console.log("reservations",reservations)
        setShowLoader(false)

      }).error((err)=> {
        console.log(err)
      })
      setShowLoader(true)

    } catch (e) {
      console.log("error", e);
    }
  }
  const handleTitleRoom = (roomName) => {
    let info = ""; let smoke = ""
    let beds = ""; let vue = "";
    var array = roomName.split(",");
// React.useEffect(()=>{
// setMoney(hotelDB)
// },[hotelDB])
    return ((array.length > 1) ? (
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
          {(array[2] == "Smoking" || array[2] == "smoking") ? (

            <MaterialCommunityIcons name="smoking" color="#FFBF00" size={20} />
          ) : ((array[2] == "nonSmoking" || array[2] == "nonsmoking" || array[2] == "Nonsmoking" || array[2] == "non smoking" || array[2] == "Non smoking" || array[2] == "non Smoking")) ?
            <MaterialCommunityIcons name="smoking-off" color="#FFBF00" size={20} />
            : (
              <MaterialCommunityIcons
                name="information-outline"
                color="#FFBF00" size={20}
              />
            )}{array[2]} </Text>{"\n"}
        {(array[3] !== null) ?
          (<Text style={styles.text}
          ><FontAwesome
              name="eye"
              color="#FFBF00"
              size={20}
            /> {array[3]} </Text>) : (
            <Text style={styles.text}
            ><FontAwesome
                name="eye"
                color="#FFBF00"
                size={20}
              /> Standart vue </Text>)}
      </Text>
    ) : (
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
  
  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);
  useEffect(() => {
    console.log(reservations,"hshghzggbxbvxxxxxxxxxxx")
    //   dispatch(handleCancellation(roomsAvailability.index,hotels.sessionId, item.roomIndex));

  },[reservations])
  useEffect(() => {
    // console.log(item, "item")
  }, [item])
  useEffect(() => {
    console.log("hotelDB",hotelDB)
setMoney(hotelDB)
     console.log(hotelDB,"hotelDBhotelDBhotelDBhotelDBhotelDBhotelDBhotelDBhotelDBhotelDB")
  }, [hotelDB])
  return (
    <View>
      <ScrollView >
        {/* <View style={styles.containerShadow}> */}

        <View  >

          <View style={styles.containerShadow}>

            <Card>
              <Card.Content>
                <Title style={styles.text_footer}> {item.roomTypeName} </Title>
              </Card.Content>
            </Card>
          </View>
          <View style={styles.containerShadow}>
            {(item.roomAdditionalInfo !== null) ? (

              <MyCarousel data={item.roomAdditionalInfo.imageURLs.url} />) : (
              <Title style={styles.text_footer}> no Pictures </Title>)}
          </View>
          <View style={styles.containerShadow}>
            <View style={styles.action}>
              <View style={styles.action2}>
                <View style={styles.item2}>
                  <Text style={styles.text}
                  >

                    {handleTitleRoom(item.roomTypeName)}
                    {"\n"}
                  </Text>

                </View>
                <View style={styles.item2}>


                  {(item.inclusion == "Free WiFi ") ? (


                    <Text style={styles.text}
                    > <FontAwesome
                        name="wifi"
                        color="#FFBF00"
                        size={20}

                      /> {item.inclusion} </Text>) : (

                    handleInclusion(item.inclusion)


                  )}
                </View>
              </View>
            </View>

          </View>
          <View style={styles.containerShadow}>
          <View style={styles.action2}>
            <View style={styles.item2}>

              <Text style={styles.text_footer}>Total Price:   </Text>
             {/* <Text>{"\n"}</Text>  */}
              <Text style={styles.text_header }>  {item.roomRate.totalFare} </Text>
              </View> 
            <View style={styles.item2} >
              <Text style={styles.text_footer2}>
                Room Tax:  { }
                <Text style={styles.text_header3}>
                 {item.roomRate.roomTax } { }
              </Text>
              </Text>
              

              <Text style={styles.text_footer2}>Room Price:<Text style={styles.text_header3}> {item.roomRate.roomFare}  </Text>
              
              
              </Text></View>
              </View> 
              <Text style={styles.text_footer }>  Days Prices:</Text>
              <View style={styles.action2}>
              

        <FlatList
          data={item.roomRate.dayRates.dayRate}
          keyExtractor={(item, index) => item.date}
          renderItem={({ item ,index}) => (

            <View >



              


              <Text style={styles.text_header2}
              > <Text style={styles.text_header}
              > Day {index+1}:</Text> {item.baseFare} </Text>



            </View>
          )}
        />
        </View>

            

          </View>

          <View style={styles.containerShadowfinal}>
           
          <View style={styles.action}>
            <ScrollView>
              <Paragraph style={styles.text}>
                {item.amenities}
              </Paragraph>
              </ScrollView>
            </View>
</View>

    </View>
        
     
    </ScrollView >
    <View style={styles.button} >
        <TouchableOpacity
          style={styles.signIn}
            onPress={()=>{
                handleAddreservation(hotelDB.id,hotelDB.hotelName,
                  hotelDB.adress,hotelDB.rating ,hotels.checkInDate,
                   hotels.checkOutDate, item.roomRate.totalFare ,index.nbrRooms, item.mealType
                  , "Booked","",hotelDB.image);        
              navigation.navigate('BookScreen');
              }}

        >
          <LinearGradient
            colors={['#002E63', '#5D8AA8']}
            style={styles.signIn}

          >

            <Text style={styles.signIn, {
              color: '#fff',
            }}
            > Book Now </Text>

          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        visible={showLoader}
        animationType='slide'

      >
        <Myloader 
        
        />

      </Modal>
    </View >
  );
};

export default RoomDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 11,
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

  },
  containerShadowfinal: {
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#A1CAF1',
    shadowColor: '#30D5C8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 50,
    backgroundColor: 'white',

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
    marginBottom: 50,

  },

  text: {
    color: 'grey',
    margin: 2
  },
  textView: {
    color: 'grey',
    marginLeft: 7
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  textStar: {
    color: '#FFBF00',
    marginTop: 5
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {

    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 1

  },
  buttonCenter: {
    paddingTop: 15,
    paddingRight: 1,
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

  text_header : {
    // marginTop:3,
    color: 'grey',
    // fontWeight: 'bold',
    fontSize: 18
  },
  text_header3: {
    marginTop:3,
    color: 'grey',
    // fontWeight: 'bold',
    fontSize: 12
  },
  text_header2: {
    marginTop:3,
    color: '#FFBF00',
    // fontWeight: 'bold',
    fontSize: 15
  },
  
  text_footer : {
    color: '#002E63',
    fontSize: 18,
    fontStyle: "italic"
  },
  text_footer2: {
    color: '#002E63',
    fontSize: 18,
    fontStyle: "italic"
  },
  action: {
    flexDirection: 'row',
    margin: 10,
    height: 110,
  },
  action2: {
    flexDirection: 'row',
    // marginTop: 5,
    marginRight: 10,
    marginLeft: 10,
    // height: 40,
  },
  action3: {
    flexDirection: 'row',
    marginTop: 1,
    marginLeft: 25,
    paddingBottom: 5,
    height: 290
  },
  item1: {
    width: '15%',
  },
  item2: {
    width: '50%',
  },
  item3: {
    width: '20%',
  },

  textInput: {
    color: '#05375a',
  },
  textInputItem: {
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
