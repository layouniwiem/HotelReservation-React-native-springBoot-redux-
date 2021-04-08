import React, { useState } from 'react';
import hotels from '../../model/hotels'
import {
  View,
  Text,
  // Button,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  FlatList,
  StatusBarIOS,
Image
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import Autocomplete from 'react-native-autocomplete-input';
const SearchResult = ({ route, navigation }) => {
const [money,setMoney]=React.useState("TND")
const handleStars=(value)=>{
  var stars=[]
  console.log(value)
  for (let i=1 ;i <= value ; i++){
    stars.push( <FontAwesome
  name="star"
  color="#FFBF00"
  size={20}

/>
)
  
  }
  return stars

}
const [films, setFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [selectedValue, setSelectedValue] = useState({});
  const findFilm = (query) => {
    //method called everytime when we change the value of the input
    if (query) {
      //making a case insensitive regular expression to get similar value from the film json
      const regex = new RegExp(`${query.trim()}`, 'i');
      console.log("searching for name")
      //setting the filtered film array according the query from the input
      setFilteredFilms(films.filter((film) => film.name.search(regex) >= 0));
    } else {
      //if the query is null then return blank
      setFilteredFilms([]);
    }
  };
  React.useEffect(() => {
    // fetch('https://aboutreact.herokuapp.com/getpost.php?offset=1')
    //   .then((res) => res.json())
    //   .then((json) => {
    //     const {results: films} = json;
    const {res}= [];
    //console.log("hotzl",hotels[0])

    
        setFilms(hotels);
        //setting the data in the films state
      // })
      // .catch((e) => {
      //   alert(e);
      // });
      // console.log(films)
  }, []);
  return (
    
    <View  >
      <SafeAreaView>
      <View  >
        <View style={styles.action}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          //data to show in suggestion
          data={filteredFilms}
          //default value if you want to set something in input
          defaultValue={
            JSON.stringify(selectedValue) === '{}' ? '' : selectedValue.title          }
          /*onchange of the text changing the state of the query which will trigger
          the findFilm method to show the suggestions*/
          onChangeText={(text) => findFilm(text)}
          placeholder="Enter the hotel name"
          renderItem={({item}) => (
            //you can change the view you want to show in suggestion from here
            <TouchableOpacity
              onPress={() => {
                setSelectedValue(item);
                setFilteredFilms([]);
              }}>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        </View>
        {/* <View style={styles.descriptionContainer}>
          {films.length > 0 ? (
            <>
              <Text style={styles.infoText}>Selected Data</Text>
              <Text style={styles.infoText}>
                {JSON.stringify(selectedValue)}
              </Text>
            </>
          ) : (
            <Text style={styles.infoText}>Enter The Film Title</Text>
          )}
        </View> */}
      </View>
    </SafeAreaView>
      <View> 
      
      </View>
           
  <FlatList
                data={hotels}
                keyExtractor={(item,index) => item.id}
                renderItem={({ item }) => (
      <TouchableOpacity
        onPress={() => navigation.navigate('ResultDetail',{item})}
      >
        <View style={styles.container}>
          {/* <Text>SearchResult</Text> */}
          <View style={styles.item2}>


            <Card >
              <Card.Content>
                <Title>{item.name}</Title>
                <Paragraph>{item.adress}</Paragraph>
              </Card.Content>
              <Card.Cover source={{uri:item.coverImages}} />
               {/* <Card.Cover source={{uri:item.coverImages}} />  */}
              {/* <Card.Cover source={require(item.coverImages)} /> */}


            </Card>
          </View>

          <View style={styles.item2}>
          <View style={styles.action2}>
<View>
            <Text> {handleStars(item.Rating)}</Text>
            </View>
         
            </View >

            <View style={styles.action2}>
              <FontAwesome
                name="map-marker"
                color="#05375a"
                size={20}
                marginRight={10}
              />
              <Text style={styles.text}> {item.adress} </Text>
            </View>
            <View style={styles.action2}>
              <FontAwesome
                name="stack-exchange"
                color="#05375a"
                size={20}
                marginRight={10}
              />
              <Text style={styles.text}> {item.comments} </Text>
              
              </View>
            <ScrollView style={styles.scrollView, { height: '10%' ,margin:5}}>
              <Text style={styles.textView}>
             {item.desc}
        </Text>
            
            </ScrollView>
           
             <View style={styles.button} >
       
         

            <Text style={styles.signIn}
            > {money}: {item.prix} </Text>

     
      </View>
          </View>
       
        </View>
      </TouchableOpacity>)}
      />
    
    </View>
  );
};


export default SearchResult;

const styles = StyleSheet.create({
  // bigContainer:{   flex: 4,
  //   padding: 16,
  //   marginTop: 40,},
  //smallContainer:{flex: 1,},
  container: {
    //flex: 1,
    padding: 10,
    // height: 250,

    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 11,
    // borderColor: '#05375a',
    // borderWidth: 1,
    // borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    borderBottomRightRadius:50,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    borderRightWidth   :1,
borderRightColor: '#C0C0C0',
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
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
    justifyContent: 'center',
    alignItems: 'center',
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
    // flex:1,
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
   paddingBottom: 40,
    height: 40
  },
  action2: {
    flexDirection: 'row',
    marginTop: 5,
    marginRight: 10,

    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    //paddingBottom: 5,
    height: 25
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
  autocompleteContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 0,
  },
  descriptionContainer: {
   // flex: 1,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
  },
});
