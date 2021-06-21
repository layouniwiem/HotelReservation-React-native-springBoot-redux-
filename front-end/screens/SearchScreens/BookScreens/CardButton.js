import React, { PureComponent } from 'react'
import {
  View,
  Text,
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import {
//   View,
//   Text,
//   TouchableHighlight,
//   ActivityIndicator,
//   Platform,
//   StyleSheet,
// } from 'react-native'
import PropTypes from 'prop-types'
import axios from 'axios';
export default class CardButton extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    disabledText: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    style: PropTypes.any,
    onPress: PropTypes.func.isRequired,
  }

   payment = {
    name: 'Reservation Hotel',
    currency: 'usd',
    // amount on cents *10 => to be on dollar
    amount: 99900,
    quantity: '1',
    cancelUrl: 'http://localhost:4200/cancel',
    successUrl: 'http://localhost:4200/success',
  };
  navigation=useNavigation()
 makePayment = async () => {
    this.setState({ loading: true });
    axios({
      method: "POST",
      url: `http://192.168.1.101:8888/payment`   ,
      body: {
        name: 'Reservation Hotel',
        currency: 'usd',
        // amount on cents *10 => to be on dollar
        amount: 99900,
        quantity: '1',
        cancelUrl: 'http://localhost:4200/cancel',
        successUrl: 'http://localhost:4200/success',
      }   
    }).then(response => {
        // YEY! PAYMENT DONE
        // CHECKOUT YOUR STRIPE DASHBOARD FOR PAYMENTS MADE
        console.log(response)
        
    }).catch(error => this.setState({ loading: false, token: null }));
 }
handlePress = () => {
    console.log("pressed")
    this.setState({ loading: true });
    navigation.navigate('Home');

    axios({
      method: "POST",
      url: `http://192.168.1.10:8888/payment`   ,
      body:payment     
    }).then(response => {
        // YEY! PAYMENT DONE
        // CHECKOUT YOUR STRIPE DASHBOARD FOR PAYMENTS MADE
        console.log(response)
    }).catch(error => this.setState({ loading: false, token: null }));  }


  render() {
    const { text, disabledText, loading, disabled, style, ...rest } = this.props

    return (
       <TouchableOpacity
        style={[styles.button, style]}
        underlayColor="rgba(0,0,0,0.5)"
        onPress={this.handlePress}>
        <Text> pay now</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
    button: {
     padding: 8,
     margin: 10,
     height: Platform.OS === 'ios' ? 35 : 40,
     minWidth: 160,
     overflow: 'hidden',
     borderWidth: 1,
     borderRadius: 4,
     backgroundColor: 'white',
     alignItems: 'center',
    }
 })