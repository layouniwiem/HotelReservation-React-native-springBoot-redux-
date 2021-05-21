
import { useDispatch } from 'react-redux'
import React, { useState, useEffect } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
  Picker
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import {
  indexGetAdults
  , indexGetAges
  , indexGetChildrens
  , indexGetEnfant
  ,indexGetRooms
} from '../../actions/indexAction'
import { useSelector } from "react-redux";

const RoomScreen = params => {
  const state = useSelector(state => state.indexData)
  const [adults, setAdults] = React.useState(1);
  const [babies, setBabies] = React.useState(0);
  const [childrens, setChildrens] = React.useState(0);
  const [list, setList] = React.useState([]);
  const [ageList, setAgeList] = React.useState();
 const{agesValues,setAgesValues}=React.useState([]);
  const [ages, setAges] = React.useState([]);
  const[index,setIndex]=React.useState();
  const[roomdetail,setRoomDetail]=React.useState({
    nbadults:1,
    nbbabies:0,
    nbchildrens:0,
    agesList:[],


  });
 
  const handleChange = (nbadults,nbbabies,nbchildrens,agesList) => {
    // const { name, value } = e.target;
    setRoomDetail(roomdetail => ({
        ...roomdetail,
        [nbadults]: nbadults,
        [nbbabies]: nbbabies,
        [nbchildrens]: nbchildrens,
        [agesList]: agesList,
    }));
};
const setNewAge=(index,age)=>{
a=ages;
if (a.length<index)
  a.push(age)
  else 
  a[index]=age;


setAges([...ages, a]);

}
const setNewRoom=(index,room)=>{
  a=room;
  if (a.length<index)
    a.push(room)
    else 
    a[index]=room;
  
  
    setRoomDetail([...roomdetail, a]);
  
  }
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  useEffect(() => {
    
    setNewAge(index,ageList);
    console.log("ageList", ageList);
    console.log("ages", ages);

  }, [ageList]);
  useEffect(() => {
    dispatch(indexGetAdults(adults));

    dispatch(indexGetAges(ages));
    dispatch(indexGetChildrens(childrens));
    dispatch(indexGetEnfant(babies));
    handleChange(adults,babies,childrens,ages)


    // console.log("state", state)
  }, [dispatch, adults, childrens, babies, ages]);
  useEffect(() => {


    console.log("state", state)
  }, [state]);
  let more = '>';
  let less = '<';
  useEffect(() => {
    console.log("roomdetail",roomdetail);

 //   params.setRoomValues(roomdetail)
    dispatch(indexGetRooms(roomdetail))
  
  }, [roomdetail]);


  return (

    <View style={styles.containerShadow}>
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
            <View style={styles.buttonCenter}>
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
          onPress={() => { if (adults > 1) { setAdults(adults - 1) } else { setAdults(1) } }}
        >
          <View style={styles.buttonCenter}>
            <FontAwesome
              name="minus"
              color="#05375a"
              size={20}
              marginRight={10}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.action}>

        <View style={styles.item1}>


          {/* <FontAwesome
            name="baby"
            color="#05375a"
            size={20}
            marginRight={10}
          /> */}
          <MaterialCommunityIcons name="baby" color="#05375a" size={20}    marginRight={10}/>
<MaterialCommunityIcons name="baby" color="#05375a" size={20}     marginRight={10}/>
          {/* <FontAwesome
            name="baby"
            color="#05375a"
            size={20}
            marginRight={10}
          /> */}
        </View>
        <View style={styles.item2}>
          <Text style={styles.text_footer} > {childrens} children(s )
             </Text>
          <Text style={styles.text}>({less}=   12 ans) </Text>
        </View>
        <View style={styles.item3}>
          <TouchableOpacity
            onPress={() => {
              setChildrens(childrens + 1);
              setList([...list, { name: '' }]);

            }}
          >

            <View style={styles.buttonCenter}>
              <FontAwesome
                name="plus"
                color="#05375a"
                size={20}
                marginRight={10}
              />
            </View>
          </TouchableOpacity>
          {list.map((item,index) => {

            return <View >
              <AgeSelectComponent setAgeList={setAgeList} setIndex={setIndex} />
            </View>

          })}

        </View>
        <TouchableOpacity
          onPress={() => {
            if (childrens > 0) {
              setChildrens(childrens - 1)
              const newList = list.splice(1, list.push() - 1);
              setList(newList);
              const newAgeList = ages.splice(1, ages.push() - 1);
              setAges(newAgeList);

            }
          }}
        >
          <View style={styles.buttonCenter}>
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
          <Text style={styles.text_footer} > {babies} Babies
     </Text>
          <Text style={styles.text}>({less}=   3 ans) </Text>
        </View>
        <View style={styles.item3}>
          <TouchableOpacity
            onPress={() => setBabies(babies + 1)}
          >
            <View style={styles.buttonCenter}>
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
          onPress={() => { if (babies > 1) { setBabies(babies - 1) } }}
        >
          <View style={styles.buttonCenter}>
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
  );
};





const initialList = [

];

const AgeSelectComponent = params => {
  const [selectedValue, setSelectedValue] = useState("0");
  useEffect(() => {
    if (selectedValue!=0)
    params.setAgeList(selectedValue);

    console.log(" age of child set selectedValue", selectedValue);

  }, [selectedValue]);
  // useEffect(() => {


  //   }, []);


  return (
    <View style={styles.containerPicker}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 40, width: 150 }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue)
       params.setIndex(itemIndex)}}
      >
        <Picker.Item label=" ans" value="0" />

        <Picker.Item label="4 ans" value="4" />
        <Picker.Item label="5 ans" value="5" />
        <Picker.Item label="6 ans" value="6" />
        <Picker.Item label="7 ans" value="7" />
        <Picker.Item label="8 ans" value="8" />
        <Picker.Item label="9 ans" value="9" />
        <Picker.Item label="10 ans" value="10" />
        <Picker.Item label="11 ans" value="11" />
        <Picker.Item label="12 ans" value="12" />
      </Picker>
    </View>)




}


const Rooms = params => {
  const [count, setCount] = useState(1);
  const [list, setList] = React.useState(initialList);
  const{roomValues,setRoomValues}=React.useState();

  function handleAdd() {
    const newValue = count + 1;
    setCount(newValue);
    params.SetRoomsValue(newValue);
    setList([...list, { name: '', id: 'ar' }]);

  }

  function handleDropItem() {
    const newValue = count - 1;
    setCount(newValue);
    params.SetRoomsValue(newValue);
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
          {list.map((item,index) => {
            return <RoomScreen />
          })}
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
    borderColor: '#05375a',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,

  },
  containerPicker: {
    marginRight: 10,
    alignItems: "center"
  }, containerShadow: {
    justifyContent: 'center',

    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#A1CAF1',
    borderBottomWidth: 0,
    shadowColor: '#30D5C8',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white'

  },

  text: {
    color: 'grey',
    marginTop: 5
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    marginTop: '68%',
    paddingLeft: 1,
    paddingRight: 1,
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
    marginRight: 10,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    paddingBottom: 5,
    height: 'auto',
  },
  action2: {
    flexDirection: 'row',
    // marginTop: 10,
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

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   Modal,
//   FlatList,
//   Picker
// } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import { LinearGradient } from 'expo-linear-gradient';
// import { ScrollView } from 'react-native-gesture-handler';
// const RoomScreen = params => {
//   let more = '>';
//   let less = '<';
//   const [data, setData] = React.useState({
//     adults: 1,
//     babies: 0,
//     childrens: 0,
//     selectedValue: ageList,

//   });

//   const [adults, setAdults] = React.useState(1);
//   const [babies, setBabies] = React.useState(0);
//   const [childrens, setChildrens] = React.useState(0);
//   const [list, setList] = React.useState([]);
//   const [ageList, setAgeList] = React.useState([]);
//   // React.useEffect(() => {
//   //   params.setRooms(data);
//   //   // params.setAgeList(ageList);


//   // }, [data])
//   return (

//     <View style={styles.containerShadow}>
//       <View style={styles.action}>
//         <View style={styles.item1}>

//           <FontAwesome
//             name="male"
//             color="#05375a"
//             size={20}
//             marginRight={10}
//           />
//           <FontAwesome
//             name="female"
//             color="#05375a"
//             size={20}
//             marginRight={10}
//           />
//         </View>
//         <View style={styles.item2}>
//           <Text style={styles.text_footer} > {adults} Adults
//              </Text>
//           <Text style={styles.text}>( {more}12 ans )
//              </Text>
//         </View>
//         <View style={styles.item3}>
//           <TouchableOpacity
//             onPress={() => {
//               setAdults(adults + 1)
//               //data.adults=adults
//               setData(...data)}}


//           >
//             <View style={styles.buttonCenter}>
//               <FontAwesome
//                 name="plus"
//                 color="#05375a"
//                 size={20}
//                 marginRight={10}
//               />
//             </View>
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity
//           onPress={() => {
//             if (adults > 1) {
//               setAdults(adults - 1)
//             } else {
//               setAdults(1)
//             }
//             data.adults=adults
//             setData(...data) }
//         }
//         >
//           <View style={styles.buttonCenter}>
//             <FontAwesome
//               name="minus"
//               color="#05375a"
//               size={20}
//               marginRight={10}
//             />
//           </View>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.action}>

//         <View style={styles.item1}>


//           <FontAwesome
//             name="baby"
//             color="#05375a"
//             size={20}
//             marginRight={10}
//           />
//           <FontAwesome
//             name="baby"
//             color="#05375a"
//             size={20}
//             marginRight={10}
//           />
//         </View>
//         <View style={styles.item2}>
//           <Text style={styles.text_footer} > {childrens} children(s )
//              </Text>
//           <Text style={styles.text}>({less}=   12 ans) </Text>
//         </View>
//         <View style={styles.item3}>
//           <TouchableOpacity
//             onPress={() => {
//               setChildrens(childrens + 1);
//               setList([...list, { name: '' }]);
//               data.childrens=childrens
//               setData(...data)
//             }}
//           >

//             <View style={styles.buttonCenter}>
//               <FontAwesome
//                 name="plus"
//                 color="#05375a"
//                 size={20}
//                 marginRight={10}
//               />
//             </View>
//           </TouchableOpacity>
//           {list.map((item) => {
//             return <View >
//               <AgeSelectComponent setAgeList={setAgeList}/>
//             </View>
//           })}

//         </View>
//         <TouchableOpacity
//           onPress={() => {
//             if (childrens > 0) {
//               setChildrens(childrens - 1)
//               const newList = list.splice(1, list.push() - 1);

//               setList(newList);
//               data.childrens=childrens
//               setData(...data)
//             }
//           }}
//         >
//           <View style={styles.buttonCenter}>
//             <FontAwesome
//               name="minus"
//               color="#05375a"
//               size={20}
//               marginRight={10}
//             />
//           </View>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.action2}>

//         <View style={styles.item1}>

//           <FontAwesome
//             name="child"
//             color="#05375a"
//             size={20}
//             marginRight={10}
//           />
//           <FontAwesome
//             name="child"
//             color="#05375a"
//             size={20}
//             marginRight={10}
//           />
//         </View>
//         <View style={styles.item2}>
//           <Text style={styles.text_footer} > {babies} Babies
//      </Text>
//           <Text style={styles.text}>({less}=   3 ans) </Text>
//         </View>
//         <View style={styles.item3}>
//           <TouchableOpacity
//             onPress={() => {
//               setBabies(babies + 1)
//               data.babies=babies
//               setData(...data)
//             }}
//           >
//             <View style={styles.buttonCenter}>
//               <FontAwesome
//                 name="plus"
//                 color="#05375a"
//                 size={20}
//                 marginRight={10}
//               />
//             </View>
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity
//           onPress={() => {
//              if (babies > 1) {
//                 setBabies(babies - 1)
//                 data.babies=babies
//               setData(...data)
//               } }}
//         >
//           <View style={styles.buttonCenter}>
//             <FontAwesome
//               name="minus"
//               color="#05375a"
//               size={20}
//               marginRight={10}
//             />
//           </View>
//         </TouchableOpacity>
//       </View>

//     </View>
//   );
// };





// const initialList = [

// ];

// const AgeSelectComponent = params => {
//   const [selectedValue, setSelectedValue] = useState("");
//   const [listOfAges, setListOfAges] = useState([]);

//   return (
//     <View style={styles.containerPicker}>
//       <Picker
//         selectedValue={selectedValue}
//         style={{ height: 40, width: 150 }}
//         onValueChange={(itemValue, itemIndex) => {
//           setSelectedValue(itemValue)
//           //listOfAges.push(itemValue);
//            setListOfAges([...listOfAges, itemValue])
//            params.setAgeList(listOfAges);
//           console.log("from parent" ,listOfAges)

//         }}
//       >
//         <Picker.Item label="4 ans" value="4" />
//         <Picker.Item label="5 ans" value="5" />
//         <Picker.Item label="6 ans" value="6" />
//         <Picker.Item label="7 ans" value="7" />
//         <Picker.Item label="8 ans" value="8" />
//         <Picker.Item label="9 ans" value="9" />
//         <Picker.Item label="10 ans" value="10" />
//         <Picker.Item label="11 ans" value="11" />
//         <Picker.Item label="12 ans" value="12" />
//       </Picker>
//     </View>)




// }


// const Rooms = params => {
//   const [count, setCount] = useState(1);
//   const [data, setData] = React.useState({
//     adults: 1,
//     babies: 0,
//     childrens: 0,
//     selectedValue: [],

//   });
//   const getDataFromChild=(val)=>{
//     console.log("fromchild RoomsScreen")
//     data.adults=val.adults;
//     data.babies=val.babies;
//     data.childrens=val.childrens;
//     data.selectedValue=val.selectedValue;
//     setRooms(...data)

//   }
//   const [list, setList] = React.useState(initialList);
//   // React.useEffect(() => {
//   //   params.setRooms(data);
//   //   // params.setAgeList();

//   // }, [])

//   function handleAdd() {
//     const newValue = count + 1;
//     setCount(newValue);
//     params.SetRoomsValue(newValue);
//     setList([...list, { name: '', id: 'ar' }]);
// params.setRooms(data);
//   }

//   function handleDropItem() {
//     const newValue = count - 1;
//     setCount(newValue);
//     params.SetRoomsValue(newValue);
//     const newList = list.splice(1, list.push() - 1);
//     setList(newList);
//     params.setRooms(data);

//   }
//   return (

//     <View>

//       <View style={styles.action3}>

//         <View style={styles.item2}>
//           <TouchableOpacity
//             onPress={() => {
//               handleAdd()

//               console.log('new RomeScreen')
//             }}
//           >
//             <View style={styles.Button, { paddingLeft: 25 }}>
//               <Text style={{ color: '#05375a' }}>Add a Room</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.item2}>
//           <TouchableOpacity
//             onPress={() => {
//               handleDropItem()

//               console.log('new RomeScreen')
//             }}
//           >
//             <View style={styles.Button, { paddingLeft: 25 }}>
//               <Text style={{ color: '#05375a' }}>Delete a Room</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View>
//         <ScrollView>
//           <RoomScreen setData={getDataFromChild} />
//           {list.map((item) => {
//             return <RoomScreen setData={getDataFromChild}  />
//           })}
//         </ScrollView>
//       </View>
//     </View>
//   )
// }
// export default Rooms;

// const styles = StyleSheet.create({
//   container: {
//     flex: 0,
//     padding: 2,
//     borderColor: '#05375a',
//     borderWidth: 1,
//     borderRadius: 10,
//     marginBottom: 10,

//   },
//   containerPicker: {
//     marginRight: 10,
//     alignItems: "center"
//   }, containerShadow: {
//     justifyContent: 'center',

//     borderWidth: 1,
//     borderRadius: 10,
//     borderColor: '#A1CAF1',
//     borderBottomWidth: 0,
//     shadowColor: '#30D5C8',
//     shadowOffset: { width: 2, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 4,
//     marginLeft: 5,
//     marginRight: 5,
//     marginTop: 10,
//     marginBottom: 10,
//     backgroundColor: 'white'

//   },

//   text: {
//     color: 'grey',
//     marginTop: 5
//   },
//   textSign: {
//     fontSize: 18,
//     fontWeight: 'bold'
//   },
//   button: {
//     marginTop: '68%',
//     paddingLeft: 1,
//     paddingRight: 1,
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
//   signIn: {
//     width: 150,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     flexDirection: 'row',
//     backgroundColor: '#C0C0C0'
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
//     color: '#05375a',
//     fontSize: 18
//   },
//   action: {
//     flexDirection: 'row',
//     marginRight: 10,
//     marginLeft: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#C0C0C0',
//     paddingBottom: 5,
//     height: 'auto',
//   },
//   action2: {
//     flexDirection: 'row',
//     // marginTop: 10,
//     marginLeft: 10,
//     // borderBottomWidth: 1,
//     // borderBottomColor: '#C0C0C0',
//     paddingBottom: 5,
//     height: 50
//   },
//   action3: {
//     flexDirection: 'row',
//     marginTop: 1,
//     marginLeft: 25,
//     // borderBottomWidth: 1,
//     // borderBottomColor: '#C0C0C0',

//     paddingBottom: 5,
//     height: 20
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
// });
