import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RoomScreen from './RoomScreen';
import CountryScreen from './CountryScreen';
import RatingsScreen from './RatingsScreen'

import { LinearGradient } from 'expo-linear-gradient';
import moment from "moment";
const SearchtStack = createStackNavigator();

const HomeScreen = ({ route, navigation }) => {
  const [ratingValue, SetRatingValue] = useState(0);
  const [isshowRatingModal, setIsShowRatingModal] = React.useState(false);
  const [roomsValue, SetRoomsValue] = useState(0);
  const [date_CheckIN, setDate_DheckIN] = React.useState("");
  const [mindate, setMindate] = React.useState(null);
  const [date_CheckOut, setDate_DheckOut] = React.useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
  const [isRoomModalVisible, setIsRoomModalVisible] = useState(false);
  const [isCountriesmodalVisible, setCountriesmodalVisible] = useState(false);
  const [isSelectedItem, setSelectedItem] = useState("Turkey");
  const [count, setCount] = useState(0);
  const [isRoomsmodalVisible, setRoomsmodalVisible] = useState(false);
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const hideCountriesPicker = () => {
    setCountriesmodalVisible(false);
  };
  const handleSelectedItem = (item) => {
    setSelectedItem(item.name);
    console.log(item)
  }
  const showCountriesPicker = () => {
    setCountriesmodalVisible(true);


  }
  const showRoomModal = () => {
    setIsRoomModalVisible(true)
  }
  const hideRoomModal = () => {
    setIsRoomModalVisible(false)
  }
  const handleConfirm = (date) => {
    const newDate = moment(new Date(date)).format("YYYY-MM-DD");
    setDate_DheckIN(newDate);
    setMindate(new Date(date));

    hideDatePicker();
  };
  const handleConfirm2 = (date) => {

    const newDate = moment(new Date(date)).format("YYYY-MM-DD");

    setDate_DheckOut(newDate);
    hideDatePicker();
  };


  const [dataSource, setDataSource] = React.useState([
    { name: 'Tunisie', key: "0" }, { name: 'France', key: "1" }, { name: 'Italie', key: "2" }
  ]);
  const [counrtySelected, setCountySelected] = useState('Tunisie');
  return (
    <View style={styles.container} >
      <View style={styles.buttonTonight} >
        <View>
          <TouchableOpacity
            style={styles.placeTonight}

          >

            <LinearGradient
              colors={['#FFA812', '#FFBF00']}
              style={styles.placeTonight}

            >
              <FontAwesome
                name="bullhorn"
                color="#05375a"
                size={23} />
              <Text style={styles.signIn, {
                color: '#fff'
              }} >  I need place Tonight  </Text>


            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => showCountriesPicker()}
      >
        <View style={styles.action}>

          <FontAwesome
            name="map-marker"
            color="#05375a"
            size={20}
            marginRight={10}
          />


          <Text style={styles.text}> Destination
             </Text>

          <Text style={{

            marginTop: 25,
            color: '#05375a',
            fontSize: 12,

            marginLeft: -70,
          }}>
            {counrtySelected}
          </Text>

        </View>
      </TouchableOpacity>

      <View style={styles.action}>

        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => setDatePickerVisibility(true)}
          >
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              value={date_CheckIN}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              minimumDate={new Date()}
            />
            <FontAwesome
              name="calendar"
              color="#05375a"
              size={20}
            />

            <Text style={styles.textInputItem} >
              Check-In-Date
             </Text>
            <Text style={styles.text_footer}> {date_CheckIN}</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => setDatePickerVisibility2(true)}
          >
            <DateTimePickerModal
              isVisible={isDatePickerVisible2}
              value={date_CheckOut}
              onConfirm={handleConfirm2}
              onCancel={hideDatePicker}
              minimumDate={mindate}

            />
            <FontAwesome
              name="calendar"
              color="#05375a"
              size={20} />

            <Text style={styles.textInputItem}>
              Check-Out-Date
             </Text>
            <Text style={styles.text_footer}> {date_CheckOut}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={showRoomModal}
      >
        <View style={styles.action}>

          <FontAwesome
            name="bed"
            color="#05375a"
            size={17} />
          <Text style={styles.text}>Rooms</Text>
          <Text style={styles.text2}> {roomsValue} rooms </Text>



        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>setIsShowRatingModal(true)}
      >
        <View style={styles.action}>

          <FontAwesome
            name="star"
            color="#05375a"
            size={20} />
          <Text style={styles.text}>Ratings</Text>
          <Text style={styles.text2}> {ratingValue} Stars </Text>



        </View>
      </TouchableOpacity>
      <View style={styles.button} >
        <TouchableOpacity
          style={styles.signIn}


        >
          <LinearGradient
            colors={['#002E63', '#5D8AA8']}
            style={styles.signIn}

          >

            <Text style={styles.signIn, {
              color: '#fff'
            }}
            > Search  </Text>

          </LinearGradient>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={isCountriesmodalVisible}
        animationType='slide'

      >
        <CountryScreen setCountySelected={setCountySelected} setCountriesmodalVisible={setCountriesmodalVisible} />

      </Modal>
      <Modal
        transparent={true}
        visible={isshowRatingModal}
        animationType='slide'

      >
        <RatingsScreen setCountySelected={isshowRatingModal} setIsShowRatingModal={setIsShowRatingModal} />

      </Modal>
      <Modal transparent={true}
        visible={isRoomModalVisible}
        animationType='slide'>
        <View style={styles.modalView2}>
          <RoomScreen SetRoomsValue={SetRoomsValue} />


          <View style={styles.Confirm}
          >


            <TouchableOpacity

              onPress={() => {
                setCount(count + 1)
                hideRoomModal()
              }
              }>
              <LinearGradient
                colors={['#002E63', '#5D8AA8']}
                style={styles.Confirmview}
              >
                <Text style={styles.Confirm, {
                  color: '#fff'
                }}
                > Confirm  </Text>

              </LinearGradient>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    </View>



  );
}

const styles = StyleSheet.create({
  modalView: {
    marginTop: '140%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 3,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  container: {
    flex: 1,

  },
  modalView2: {
    flex: 1,
    marginTop: '20%',
    backgroundColor: "white",
    borderRadius: 20,
    paddingBottom: 60,
    paddingTop: 10,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  text: {
    color: 'grey',
    //marginTop: 5,
    paddingLeft: 20,

  },
  text2: {
    color: '#05375a',
    fontSize: 12,
    marginLeft: -49,
    marginTop: 22,

  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    alignItems: 'center',
    marginTop: '48%',
    width: '100%',
    padding:1
  },
  buttonTonight: {
    alignItems: 'flex-start',


  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',

  },
  placeTonight: {

    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    //  borderRadius: 10,
    flexDirection: 'row'
  },
  Confirm: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    //marginBottom:100
  },
  Confirmview: {
    // paddingEnd:1,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 4,
    flexDirection: 'row'
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  text_footer: {
    color: '#05375a',
    fontSize: 12,
    marginLeft: 10,
    marginLeft: 32,

  },
  action: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    paddingBottom: 5,
    height: 50
  },

  item: {
    width: '50%',


  },
  picker: {
    height: '50%',


  },

  textInput: {

    // paddingLeft: 1,
    color: '#05375a',
  },
  textInputItem: {
    //flex:1,
    color: 'grey',

    marginTop: Platform.OS === 'ios' ? 0 : -25,
    paddingLeft: 34,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
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



export default HomeScreen;