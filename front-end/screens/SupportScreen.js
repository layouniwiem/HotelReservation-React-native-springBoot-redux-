
import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useDispatch } from "react-redux";
import { userGetAll, userDeleteData,userGetData } from '../actions/userActions';
import { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SupportScreen = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({

    data: [],
  });
  const [datail,SetDetail]=useState({
    data:[ ]
    // username:"",
    // email:"",
    // password:"",
  })
  const deleteCurrent = (key) => dispatch(userDeleteData(key));
  const userGetCurrent = (key) => {
    dispatch(userGetData(key)).then((res)=> {
      if (res){
        SetDetail({username: res.data.email})
        //console.log( res.data);
      }
      
    
  });

 }

  useEffect(() => {
    dispatch(userGetAll()).then((res) => {
      if (res) {
        console.log(res.data)
        setState({
          data: res.data,
        });
      }

    });

  },
    [
    //state.data
    ]
   
  );



  return (

    <View style={styles.container}>
      <Text>Support Screen</Text>
      <Button
        title="Click Here"
        onPress={() => alert('Button Clicked!')}
      />
      <FlatList
        data={state.data}
        keyExtractor={(item, index) => item.id}

        renderItem={

          ({ item }) => (
            
            <View style={styles.action}>
              <View style={styles.item2}>
                <Text> Email:</Text>
                <Text>{item.email}:</Text>
              </View>
              <View style={styles.item2}>


                <Text> Username:</Text>
                <Text>{item.userName
                }</Text>
              </View>
              <View style={styles.item3}>
                <TouchableOpacity
                  onPress={() => {
                   const res= userGetCurrent(item.id)
                    console.log("deleted", item.id,res.data)
                  }
                  } >


                  <FontAwesome
                    name="angle-right"
                    color="#05375a"
                    size={20} />

                </TouchableOpacity>
              </View>
              <View style={styles.item3}>
                <TouchableOpacity
                  onPress={() => {
                    deleteCurrent(item.id)
                    console.log("deleted", item.id)
                  }
                  } >


                  <FontAwesome
                    name="trash"
                    color="#05375a"
                    size={30} />

                </TouchableOpacity>
              </View>
            </View>
          )

        }
      />
      <View>
        <Text>{datail.username} </Text>
      </View>
    </View>
  );
};
export default
  SupportScreen;
const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    justifyContent: 'center'
  },
  signIn: {

    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',

  }, action: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,

    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    paddingBottom: 5,
    height: 50
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
  item1: {
    width: '15%',
  },
  item2: {
    width: '40%',
  },
  item3: {
    width: '10%',
  },
});