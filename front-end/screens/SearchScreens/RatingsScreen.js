
import * as React from 'react';
import {
    Text,
    View,
    Modal,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Stars = ({ count }) => {
  //  const [counter, setCounter] = React.useState(0);
    var tab=[];
    for (let i = 0 ; i < count ; i++) {
           tab.push( <FontAwesome
            name="map-marker"
            color="#05375a"
            size={20}
            marginRight={10}
        />)     
       return tab;

    }
    return (
        <View>
           {tab}
        </View>
    )
    

};

const aloo=()=>{
    return('aloo');
}

const RatingsScreen = params => {
    const [dataSource, setDataSource] = React.useState([
        { key: 0 }, { key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, , { key: 5 }
    ]);
    const [counter, setCounter] = React.useState(0)

    const [isshowRatingModal, setIsShowRatingModal] = React.useState(true);

    const [selectedItem, setSelectedItem] = React.useState();
    const hideCountriesPicker = () => {
        setShowModal(false);
    };
    const handleSelectedItem = (item) => {
        params.setSelectedItem(item);
       // setSelectedItem(item);
        console.log(item);
        params.setIsShowRatingModal(false);
    }
    const showCountriesPicker = () => {
        setShowModal(true);
    }
    return (
        <View style={styles.modalView}>
            <Text> Hello Ratings </Text>
            <FlatList
                data={dataSource}
                renderItem={({ item }) => (
                    <TouchableOpacity

                        onPress={() => {
                            handleSelectedItem(item.key);
                            setShowModal(false)

                        }

                        }
                    >
                        {/* <Stars setCounter={item.key} /> */}
                        <Text>{item.key}</Text>
                    </TouchableOpacity>)

                }
            />
        </View>
    );
}

export default RatingsScreen;

const styles = StyleSheet.create({
    modalView: {
        marginTop: '140%',
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
        color: 'grey',
        marginTop: 5,
        paddingLeft: 20,

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
