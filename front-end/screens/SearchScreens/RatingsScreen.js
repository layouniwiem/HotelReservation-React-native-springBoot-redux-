
import * as React from 'react';
import {
    Text,
    View,
    Modal,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { concat } from 'react-native-reanimated';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const initialList = [

];
//const [tab,setTab] = React.useState([]);
const tab1 = [<FontAwesome
    name="star"
    color="#05375a"
    size={20}
// marginRight={10}
/>];
const tab = [];

const Stars = (props) => {
    const { data } = props
    //  const [counter, setCounter] = React.useState(0);
    // const [selectedItem, setSelectedItem] = React.useState();
    // const [list, setList] = React.useState(initialList);
    console.log(data);

    //    setTab (...tab,<FontAwesome
    //     name="star"
    //     color="#05375a"
    //     size={20}

    // />)
    tab.push(<FontAwesome
        name="star"
        color="#05375a"
        size={20}

    />)




    return (
        //console.log("hello from tab ")
        <View>
            <Text>
                {tab}

            </Text>

        </View>



    );





};



const RatingsScreen = params => {
    const [dataSource, setDataSource] = React.useState([
        {
            key: 1, data: [<FontAwesome
                name="star"
                color="#05375a"
                size={20}

            />]
        }, {
            key: 2, data: [<FontAwesome
                name="star"
                color="#05375a"
                size={20}

            />, <FontAwesome
                name="star"
                color="#05375a"
                size={20}

            />]
        }, {
            key: 3, data: [<FontAwesome
                name="star"
                color="#05375a"
                size={20}

            />,
            <FontAwesome
                name="star"
                color="#05375a"
                size={20}

            />,
            <FontAwesome
                name="star"
                color="#05375a"
                size={20}

            />]
        }, {
            key: 4, data: [<FontAwesome
                name="star"
                color="#05375a"
                size={20}

            />, <FontAwesome
                name="star"
                color="#05375a"
                size={20}

            />, <FontAwesome
                name="star"
                color="#05375a"
                size={20}

            />, <FontAwesome
                name="star"
                color="#05375a"
                size={20}

            />]
        }
        , {
            key: 5, data: [<FontAwesome
                name="star"
                color="#05375a"
                size={20}

            />, <FontAwesome
                name="star"
                color="#05375a"
                size={20}

            />, <FontAwesome
                name="star"
                color="#05375a"
                size={20}

            />, <FontAwesome
                name="star"
                color="#05375a"
                size={20}

            />, <FontAwesome
                name="star"
                color="#05375a"
                size={20}

            />
            ]
        }
    ]);
    const [counter, setCounter] = React.useState(0)

    const [isshowRatingModal, setIsShowRatingModal] = React.useState(true);
    const [ratingValue, SetRatingValue] = React.useState("All");

    const [selectedItem, setSelectedItem] = React.useState();
    const hideCountriesPicker = () => {
        setShowModal(false);
    };
    const handleSelectedItem = (item) => {
        params.SetRatingValue(item.key);
        // setSelectedItem(item);
        console.log(item.key);
        params.setIsShowRatingModal(false);
    }
    const showCountriesPicker = () => {
        setShowModal(true);
    }

    return (
        <View style={styles.modalView}>
            <TouchableOpacity
                onPress={() => {
                    params.setIsShowRatingModal(false);
                    handleSelectedItem("All");

                }}
            >
                <Text> All </Text>
            </TouchableOpacity>


            <FlatList
                data={dataSource}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <TouchableOpacity

                        onPress={() => {
                            handleSelectedItem(item);
                            // setIsShowRatingModal(false)

                        }

                        }
                    >
                        <View>
                            {/* <Stars data={item.key} /> */}
                            <Text> {item.data} </Text>
                        </View>

                    </TouchableOpacity>)

                }
            />
        </View>
    );
}

export default RatingsScreen;

const styles = StyleSheet.create({
    modalView: {
        marginTop: '85%',
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
