
import * as React from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  FlatList,
  TouchableOpacity,

} from 'react-native';
import hotels from '../../model/hotels';
import { useSelector } from "react-redux";
import Autocomplete from 'react-native-autocomplete-input';
import { InputAutoSuggest } from 'react-native-autocomplete-search';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux'
import { indexCountry, indexGetCountry } from '../../actions/indexAction';
import { citiesDestGetAll } from '../../actions/cityAction';
 import Myloader from '../Myloader';
 import FontAwesome from 'react-native-vector-icons/FontAwesome';



const CountryScreen = params => {
  const dispatch = useDispatch();

  const stateCities = useSelector(state => state.cities)
  const [films, setFilms] = useState(stateCities.data.countryList.country);
  // For Filtered Data
  const [filteredFilms, setFilteredFilms] = useState(films);
  // For Selected Data
  const [selectedValue, setSelectedValue] = useState({});
 
  // console.log (stateCities.data.cityList.city,"dataaa cities")
  const [isCountriesmodalVisible, setCountriesmodalVisible] = React.useState(false);
  const[showLoader,setShowLoader]= React.useState(false);

  const [showModal, setShowModal] = React.useState();

  const [selectedItem, setSelectedItem] = React.useState();
  const getCitiesDest=(val)=>{try {
      
    console.log("hello fromhandle getCitiesDest"
     );
    
    dispatch(citiesDestGetAll({"countryCode":val})    

    ).then((res) => {
      console.log("res",res)
      setShowLoader(false) 


    })
    setShowLoader(true)
    } catch (e) {
    console.log("error res getCitiesDest",e);
  }}
  
 
  

  const findFilm = (query) => {
    // Method called every time when we change the value of the input
    if (query) {
      // Making a case insensitive regular expression
      const regex = new RegExp(`${query.trim()}`, 'i');
      // Setting the filtered film array according the query
      setFilteredFilms(
          films.filter((film) => film.countryName.search(regex) >= 0)
      );
    } else {
      // If the query is null then return blank
      setFilteredFilms([]);
    }
  };
  const hideCountriesPicker = () => {
    setShowModal(false);
  };
  const handleSelectedItem = (item) => {
    params.setCountySelected(item.countryName);
    getCitiesDest(item.countryCode);
    console.log(item.countryCode)
    setSelectedItem(item.countryName);
    dispatch(indexCountry(item))
    console.log(item);
    params.setCountriesmodalVisible(false);
  }
  const showCountriesPicker = () => {
    setShowModal(true);
  }
  
  return (
    <View style={styles.modalView}>
      {/* <Text> Hello countries </Text> */}
      <View style={styles.autocompleteContainer}>
     <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
    
          defaultValue={
            JSON.stringify(selectedValue) === '{}' ?
            '' :
            selectedValue.countryName
          }
         
          onChangeText={(text) => findFilm(text)}
          placeholder="Enter the city Name"
    
        />
        <View style={styles.descriptionContainer}>
          {films.length > 0 ? (
            <>
              <Text style={styles.infoText}>
                   Selected Data
              </Text>
              <Text style={styles.infoText}>
                {JSON.stringify(selectedValue)}
              </Text>
            </>
          ) : (
            <Text style={styles.infoText}>
                Enter The county Name
            </Text>
          )}
        </View>
      </View>
    </SafeAreaView>
     
      </View> 

      <FlatList
        data={filteredFilms}
        renderItem={({item}) => (
          // For the suggestion view
          <TouchableOpacity
            onPress={() => {
              setSelectedValue(item);

             // setFilteredFilms([]);
              handleSelectedItem(item);
              setShowModal(false)
            }}>
              <View style={styles.action}>
              <FontAwesome
            name="map-marker"
            color="#05375a"
            size={18}
            //  marginTop={20}

            marginRight={10}

          />
            <Text style={styles.text}>
              
                {item.countryName}
            </Text>
            </View>
          </TouchableOpacity>
        )}
        
      />
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
}
export default CountryScreen;
const styles = StyleSheet.create({
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },
  modalView: {


    marginTop: '50%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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

  text: {
    color: '#05375a',
    // marginTop:10,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: "italic"



  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    alignItems: 'flex-end',
    marginTop: '68%',
    paddingLeft: 1,
    paddingRight: 1
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
    // borderRadius: 150,
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
    margin: 2,
    marginTop: 10,

    // borderBottomWidth: 1,
    // borderBottomColor: '#C0C0C0',
    // paddingBottom: 5,
    // height: 50
  },

  item: {
    width: '50%',
  },
  picker: {
    height: '50%',
  },
  textInput: {
    color: '#05375a',
  },
  textInputItem: {
    color: 'grey',
    marginTop: Platform.OS === 'ios' ? 0 : -12,
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
