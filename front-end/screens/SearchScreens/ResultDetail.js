import React, { useRef, useState, useEffect } from 'react';
import MyCarousel from './MyCarrossel';
import hotels from '../../model/hotels'
import {
  View,
  Text,
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,

} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
const ResultDetail = ({ route, navigation }) => {
  const [money, setMoney] = React.useState("TND")

  const { item } = route.params;
  const handleStars = (value) => {
    var stars = []
    console.log(value)
    for (let i = 1; i <= value; i++) {
      stars.push(<FontAwesome
        name="star"
        color="#FFBF00"
        size={20}

      />
      )

    }
    return stars

  }
  return (
    <View>
    <ScrollView style={styles.scrollView}>
      <View style={styles.containerShadow}>

        <View  >

          <View style={styles.containerShadow}>

            <Card>
              <Card.Content>
                <Title style={styles.text_footer}> {item.name} </Title>
                <Text >{handleStars(item.Rating)}</Text>

                <Paragraph style={styles.text, {
                  color: 'grey'
                  , fontStyle: "italic"
                }}><FontAwesome
                    name="map-marker"
                    color="#05375a"
                    size={20}

                  /> {item.adress}</Paragraph>
              </Card.Content>


            </Card>
          </View>
          <View style={styles.containerShadow}>
            <MyCarousel data={item.images} />
          </View>
        </View>
        <View style={styles.containerShadow}>

          <View style={styles.action2}>
            <FontAwesome
              name="stack-exchange"
              color="#05375a"
              size={20}
              marginRight={10}
            />
            <Text style={styles.text, {
              color: '#00CC99'
              , fontStyle: "italic"
            }}> {item.comments} </Text>

          </View>
        </View>
        <View style={styles.containerShadow}>
          <View style={styles.action}>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.textView}>
                {item.desc}
              </Text>

            </ScrollView>
          </View>
        </View>

        <View style={styles.containerShadow}>
          <View style={styles.action3}>
           
            <MapView style={styles.map}
              initialRegion={{
                latitude: item.region.latitude,
                longitude: item.region.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                
              }}
            >              
            <Marker coordinate={{ latitude :  item.region.latitude , longitude :item.region.longitude }} ></Marker>
            </MapView>
        
          </View>
        </View>
        <View style={styles.containerShadow}>



          <Text style={styles.sign}
          > {money}: 250  </Text>


        </View>


      </View>
     
    </ScrollView>
    <View style={styles.button} >
        <TouchableOpacity
          style={styles.signIn}
            onPress={()=>navigation.navigate('SearchRoom')}

        >
          <LinearGradient
            colors={['#002E63', '#5D8AA8']}
            style={styles.signIn}

          >

            <Text style={styles.signIn, {
              color: '#fff',
            }}
            > Search  </Text>

          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResultDetail;

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

    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
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
   // marginTop: -50,
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
    color: '#00CC99',
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
    color: '#05375a',
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
    height: 100,
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
    height: 504
    // Dimensions.get('window')*0.75
  }
});