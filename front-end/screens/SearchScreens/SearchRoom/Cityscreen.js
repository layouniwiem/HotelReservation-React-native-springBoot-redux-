
import * as React from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  FlatList,
  TouchableOpacity,

} from 'react-native';
import { useSelector } from "react-redux";
import Autocomplete from 'react-native-autocomplete-input';
import { InputAutoSuggest } from 'react-native-autocomplete-search';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux'
import { indexGetCountry } from '../../../actions/indexAction';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CityScreen = params => {
  const dispatch = useDispatch();

  const stateCities = useSelector(state => state.citiesDest)
  const [films, setFilms] = useState(stateCities.data.cityList.city);
  // For Filtered Data
  const [filteredFilms, setFilteredFilms] = useState(films);
  // For Selected Data
  const [selectedValue, setSelectedValue] = useState({});
 
  const [isCountriesmodalVisible, setCountriesmodalVisible] = React.useState(false);

  const [showModal, setShowModal] = React.useState();

  const [selectedItem, setSelectedItem] = React.useState();
  React.useEffect(() => {
    console.log("selectedValue",selectedValue)
    dispatch(indexGetCountry(selectedValue));
    
  }, [selectedValue])

  const findFilm = (query) => {
    // Method called every time when we change the value of the input
    if (query) {
      // Making a case insensitive regular expression
      const regex = new RegExp(`${query.trim()}`, 'i');
      // Setting the filtered film array according the query
      setFilteredFilms(
          films.filter((film) => film.cityName.search(regex) >= 0)
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
    params.setCitySelected(item.cityName);
    setSelectedItem(item);
    dispatch(indexGetCountry(item));

    console.log(item,"item");
    params.setCitiesmodalVisible(false);
  }
  const showCountriesPicker = () => {
    setShowModal(true);
  }
  
  return (
    (stateCities.data!==null||stateCities.data.countryList.country)?(
    <View style={styles.modalView}>
      {/* <Text> Hello countries </Text> */}
      <View style={styles.autocompleteContainer}>
     <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          // Data to show in suggestion
          // data={filteredFilms}
          // Default value if you want to set something in input
          defaultValue={
            JSON.stringify(selectedValue) === '{}' ?
            '' :
            selectedValue.cityName
          }
          // Onchange of the text changing the state of the query
          // Which will trigger the findFilm method
          // To show the suggestions
          onChangeText={(text) => findFilm(text)}
          placeholder="Enter the city "
        
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
                Enter The city Name
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
              <MaterialCommunityIcons
            name="city-variant-outline"
            color="#05375a"
            size={18}
            // marginRight={10}
          />
            <Text style={styles.text}>
                {item.cityName}
            </Text>
            </View>
          </TouchableOpacity>
        )}
       
      />
      
    </View>):(
      <View>
        <Text> no data found</Text>
      </View>

    )
  );
}
export default CityScreen;
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


    marginTop: '20%',
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 35,
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
    //  marginTop:2,
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
    //  width:'100%',
    //  borderBottomWidth: 1,
    // borderBottomColor: '#30D5C8',
    //  paddingBottom: 10,
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
