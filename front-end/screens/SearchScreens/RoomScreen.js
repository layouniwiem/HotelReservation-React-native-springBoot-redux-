import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Modal
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
const RoomScreen = () => {
  let more = '>';
  let less = '<';

  const [count, setCount] = useState(1);

  const [adults, setAdults] = React.useState(0);
  const [babies, setBabies] = React.useState(0);

  return (

    <View style={styles.container}>
      <View style={styles.action}>
        <View style={styles.item1}>

          <FontAwesome
            name="male"
            color="#05375a"
            size={20}
            marginRight={10}
          />
          <FontAwesome
            name="female"
            color="#05375a"
            size={20}
            marginRight={10}
          />
        </View>
        <View style={styles.item2}>
          <Text style={styles.text_footer} > {adults} Adults
             </Text>
          <Text style={styles.text}>( {more}12 ans )
             </Text>
        </View>
        <View style={styles.item3}>
          <TouchableOpacity
            onPress={() => setAdults(adults + 1)}


          >
            <View style={styles.Button}>
              <FontAwesome
                name="plus"
                color="#05375a"
                size={20}
                marginRight={10}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setAdults(adults - 1)}
        >
          <View style={styles.Button}>
            <FontAwesome
              name="minus"
              color="#05375a"
              size={20}
              marginRight={10}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.action2}>

        <View style={styles.item1}>

          <FontAwesome
            name="child"
            color="#05375a"
            size={20}
            marginRight={10}
          />
          <FontAwesome
            name="child"
            color="#05375a"
            size={20}
            marginRight={10}
          />
        </View>
        <View style={styles.item2}>
          <Text style={styles.text_footer} > {babies} children(s )
             </Text>
          <Text style={styles.text}>({less}=   12 ans) </Text>
        </View>
        <View style={styles.item3}>
          <TouchableOpacity
            onPress={() => setBabies(babies + 1)}
          >
            <View style={styles.Button}>
              <FontAwesome
                name="plus"
                color="#05375a"
                size={20}
                marginRight={10}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setBabies(babies - 1)}
        >
          <View style={styles.Button}>
            <FontAwesome
              name="minus"
              color="#05375a"
              size={20}
              marginRight={10}
            />
          </View>
        </TouchableOpacity>
      </View>


    </View>
    // </Modal>
  );
};

// const rooms=()




const initialList = [

];

const Rooms = () => {
  const [count, setCount] = useState(0);

  const [list, setList] = React.useState(initialList);




  function handleAdd() {
  
    setList([...list, { name: '', id: 'ar' }]);
  }

  function handleDropItem() {
    const newList = list.splice(1, list.push() - 1);
    setList(newList);

  }
  return (

    <View>

      <View style={styles.action3}>

        <View style={styles.item2}>
          <TouchableOpacity
            onPress={() => {
              handleAdd()

              console.log('new RomeScreen')
            }}
          >
            <View style={styles.Button, { paddingLeft: 25 }}>
              <Text style={{ color: '#05375a' }}>Add a Room</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.item2}>
          <TouchableOpacity
            onPress={() => {
              handleDropItem()

              console.log('new RomeScreen')
            }}
          >
            <View style={styles.Button, { paddingLeft: 25 }}>
              <Text style={{ color: '#05375a' }}>Delete a Room</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ScrollView>
          <RoomScreen />
          {list.map((item) => {
            return <RoomScreen />

          })}
          {/* {/* </View> */}
        </ScrollView>
      </View>
    </View>


  )
}
export default Rooms;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    padding: 2,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 10
    // borderBottomWidth: 2,
    // borderBottomColor: 'black',

  },

  text: {
    color: 'grey',
    marginTop: 5,


  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    //alignItems: 'flex-end',
    marginTop: '68%',
    paddingLeft: 1,
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
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#C0C0C0'
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
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    paddingBottom: 5,
    height: 50
  },
  action2: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#C0C0C0',
    paddingBottom: 5,
    height: 50
  },
  action3: {
    flexDirection: 'row',
    marginTop: 1,
    marginLeft: 25,
    // borderBottomWidth: 1,
    // borderBottomColor: '#C0C0C0',

    paddingBottom: 5,
    height: 20
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
});
