
import React, { useRef, useState, useEffect } from 'react';
// import MyCarousel from './../MyCarrossel';
// import hotels from '../../model/hotels'
import{roomDBGetDataByReservation,inviteeGetDataByRoom,reservationUpdateData}from'../../../actions/reservationAction';
import {
  View,
  Text,
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,

} from 'react-native';

import { Avatar, Button, Card, Title, Paragraph, Modal } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import Myloader from '../../Myloader';
import { useNavigation } from '@react-navigation/native';
const HistoriqueDetails = ({ route }) => {
  const [showLoader, setShowLoader] = React.useState(false);

  const [guests, setGuest]=useState(null)
    const dispatch=useDispatch()
    const roomsDB = useSelector(state => state.roomsDB.roomsByreservation);
    const invitees=useSelector(state => state.invitees.InviteesByRoom);
console.log(roomsDB,"rooms")
    const reservations = useSelector(state => state.reservations.data);
    const { item } = route.params;
    console.log(item,"item of reservtion")
    const { item2 } = route.params;
const navigation=useNavigation()
    const handleStartsValue=(value)=>{
        switch (value) {
          case 'ONE_STAR':
            return 1;// code block
            
          case  'TWO_STAR':
            return 2;// code block
            
          case 'THREE_STAR':
            return 3;// code block
            
          case  'FOUR_STAR':
            return  4;// code block
            
          case 'FIVE_STAR':
            return 5;// code block
          
          default:
            return;
            
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
       

      
    
    const handleStars = (value) => {
        var stars = []
        let val=handleStartsValue(value);
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
      const handleInviteeByRoomGetData = (id) => {
      
               try {
                 
                 console.log("hello handleInviteeByRoomGetData Invitte  ");
                 dispatch(inviteeGetDataByRoom( id
                   
                 )).then((res) => {
                   // setShowLoader(false) 
           
                    console.log("res",res)
                  
                   //navigation.navigate('ResultDetail', { res })
           
                 })
               //   setShowLoader(true) 
           
               } catch (e) {
                 console.log("error",e);
               }
              //  return (
                //  ( guests !== null) ?(
                //     <FlatList
                //     data={guests}
                //     keyExtractor={(item, index) => {index
                //         //  handleInviteeByRoomGetData(item.id)
                //     }}
            
                //     renderItem={({ item }) => (
                //       <TouchableOpacity
                //         onPress={() => {
                //           console.log(item.id)
                //           console.log(item,"item roomdb ")
            
                      
            
                //         }}
                //       >
                //         <View >
                //           {/* <Text>SearchResult</Text> */}
                //           {/* <View style={styles.item2}> */}
            
            
                //             <Card >
                //               <Card.Content>
                //               <Text style={styles.textInput}> FirstName: {item.firstName}</Text> 
                //               <Text style={styles.textInput}> LastName: {item.lastName}</Text> 
            
                             
                //               </Card.Content>
                             
            
                //             </Card>
                       
                //         </View>
                //       </TouchableOpacity>
                //       )}
                //   />):(
                //      <View style={styles.action}>
                //           <Text style={styles.textView}>
                //             No Data found
                //           </Text>
            
                      
                //       </View>)

              //  )
             }
             useEffect(()=>{
              console.log(item,"item of reservtion")

            },[item])
            useEffect(()=>{
              console.log(invitees,"invitees")
              console.log(item,"item of reservtion")

              setGuest(invitees)
            },[invitees])
    return (
        <View>
           <View style={styles.containerShadow2}>
            {/* <MyCarousel data={itemadd} /> */}
            <Card >
                  {/* <Card.Content>
                  <Text style={styles.signIn}>{item.hotelInfo.hotelName}</Text>
                    <Paragraph>{item.hotelInfo.hotelAdress}</Paragraph>
                  </Card.Content> */}
<Card.Cover source={{ uri: item.hotelImage }} />                   
  


                </Card>
          </View>
          <View>
      {   (item.status!== "Cancelled")? (<View style={styles.button} >
                <View style={styles.item2}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {
                          console.log("EVoucherHistory")
                          navigation.navigate('EVoucherHistory',{ item })                        }}
                    >
                        <LinearGradient
                            colors={['#002E63', '#5D8AA8']}
                            style={styles.signIn}

                        >
                            <Text style={styles.signIn, {
                                color: '#fff'
                            }} > Get My Voucher  </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.item2}>
                    <TouchableOpacity
                        onPress={() =>{handleCancellation(item.reservation_id,item. hotel_id, item.hotel_Name,item.hotel_Adress,item.hotel_Rating,item.dateCheckIn, 
                          item.dateCheckOut,item.prixTotal, item.nbrRooms, item.typeReservation,"Cancelled",item.reservationDate,item.hotelImage

                        )
                  
                          }
                          }
                        style={[styles.signIn, {
                            borderColor: '#002E63',
                            borderWidth: 1,
                            // marginTop: 5
                        }]}>
                        <Text style={styles.textSign, {
                            color: '#002E63'
                        }}> Cancel Reservation </Text>
                    </TouchableOpacity>
                    </View>
                </View>):(<View style={styles.button} >
               
                   
                        <LinearGradient
                            colors={['#002E63', '#5D8AA8']}
                            style={styles.signIn}

                        >
                            <Text style={styles.signIn, {
                                color: '#fff'
                            }} > your Reservation is Cancelled  </Text>
                        </LinearGradient>
                    </View>)}
        <ScrollView style={styles.scrollView}>
          {/* <View style={styles.containerShadow}> */}
    
         
           
              <View style={styles.containerShadow}>
    
              <Card >
                  <Card.Content>
                  <Text style={styles.textSign}>Booked :<Text style={styles.text}>{item.reservationDate}</Text> </Text> 
                  <Text style={styles.textSign}>{item.hotel_Name}</Text> 
                 
                   <Paragraph style={styles.text}> 
                   <FontAwesome
                    name="map-marker"
                    color="grey"
                    size={13}
                    marginRight={10}
                  /> {item.hotel_Adress} <Text> {handleStars(item.hotel_Rating)}</Text></Paragraph> 
                                              
 {   (item.status=="Booked")?(
<Text>

<Text style={styles.text}> Status Of reservation : </Text>
<Text>{"\n"}</Text>
<FontAwesome
  name="check"
  color="#FFBF00"
  size={20}
  marginRight={10}
/>
<Text style={styles.text}>  {item.status} </Text>


</Text>):null}
{   (item.status=="Cancelled")?(
<Text>
<Text style={styles.text}> Status Of reservation : </Text>
<Text>{"\n"}</Text>
<FontAwesome
  name="times"
  color="red"
  size={20}
  marginRight={10}
/>
<Text style={styles.text}>  {item.status} </Text>
</Text>):null}
{   (item.status=="Confirmed")?(
<Text>

<Text style={styles.text}> Status Of reservation: </Text>
<Text>{"\n"}</Text>
<FontAwesome
  name=" check-double"
  color="green"
  size={20}
  marginRight={10}
/>
<Text style={styles.text}> {item.status} </Text>

</Text>):null}

                  </Card.Content>
                

                </Card>
              </View>
             
           
         
            <View >
              <View >
                {/* <ScrollView style={styles.scrollView}> */}
                { ( roomsDB !== null) ?(
        <FlatList
        data={roomsDB}
        keyExtractor={(item) => item.id 
                }

        renderItem={({ item }) => (
          // <TouchableOpacity
          //   onPress={() => {
          //     console.log(item.id)
          //     console.log(item,"item roomdb ")

          //   //   handleReservationGetData(item.reservation_id)
          //   //   navigation.navigate('HistoriqueDetails', { item })
          //     // dispatch(getCurrentHotel(item)) ;
          //     // handleAddHotelDB(item.hotelInfo.hotelCode,item.hotelInfo.hotelName,item.minHotelPrice.totalPrice,item.hotelInfo.hotelAddress)


          //   }}
          // >
            <View style={styles.containerShadow}>
              {/* <Text>SearchResult</Text> */}
              {/* <View style={styles.item2}> */}


                <Card >
                  <Card.Content>
                  <Text style={styles.textInput}>{item.room_Name}</Text> 
                  <Text style={styles.textView}> Total Price:{item.prixTotal}</Text> 

             

                  </Card.Content>
             

                </Card>
                <Text style={styles.textInput}> Guests Details:</Text> 
           {handleInviteeByRoomGetData(item.id)}
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
                          {/* <Text>SearchResult</Text> */}
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
              </View>
            </View>
    
           
         
        </ScrollView>
       
            </View>
            <Modal
        transparent={true}
        visible={showLoader}
        animationType='slide'

      >
        <Myloader 
        
        />

      </Modal>
        </View>
        
      );
    };

export default HistoriqueDetails;

const styles = StyleSheet.create({
    container: {
      // flex: 5,
      // padding: 10,
      // height: 250,
  
  
      backgroundColor: 'white',
      margin: 11,
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
  // paddingBottom:5,
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
    containerShadow2: {
      justifyContent: 'center',
  // borderRadius:10,
  overflow: 'hidden',
      // borderWidth: 1,
      //  borderRadius: 20,
      // borderColor: '#A1CAF1',
      // borderBottomWidth: 1,
      // shadowColor: '#30D5C8',
      // shadowOffset: { width: 0, height: 2 },
      // shadowOpacity: 0.8,
      // shadowRadius: 2,
      // elevation: 4,
      // borderBottomEndRadius:20,
      borderBottomRightRadius:70,
      borderBottomLeftRadius: 70,
      // marginLeft: 5,
      // marginRight: 5,
      // marginTop: 10,
      // marginBottom: 10,
      // backgroundColor: 'white'
  
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
      marginTop: 10,
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
      marginTop: 10,
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
       justifyContent: 'space-between',
    //  marginTop:10,
      
      // alignItems: 'center',
      flexDirection: 'row',
      
      // marginBottom:20,
       padding:1,
      // bottom: 0,
      
      //  position: 'absolute',
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
    }, signIn:{
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
      marginBottom: 10,

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
      width:334,
      height: 288,
      marginLeft:-24
    },
    scrollView:{
      // marginBottom:90
   height: 305
      // Dimensions.get('window')*0.75
    }
  });
  