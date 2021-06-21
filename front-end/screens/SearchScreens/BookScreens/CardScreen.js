
import React, {Component} from 'react';
import {
  View,
  UIManager,
  StyleSheet,
} from 'react-native';

import {YellowBox} from 'react-native';
import CardButton from './CardButton'
YellowBox.ignoreWarnings(['Warning: ...']);

UIManager.setLayoutAnimationEnabledExperimental(true);

import{ CreditCardInput } from 'react-native-credit-card-input';

export default class App extends Component {
  _onFocus = field => console.log('focusing', field)

  _onChange = formData => console.log(JSON.stringify(formData, null , ' '))
  render() {
    return (
      <View style={styles.container}>
        <CreditCardInput
          autoFocus
          requireName={true}
          requireCVC={true}
          requirePostalCode={true}
          validColor="black"
          invalidColor="red"
          placeholderColor="darkgray"
          labelStyle={{color: 'black', fontSize: 12}}
          inputStyle={{color: 'black', fontSize: 16}}
          onFocus={this._onFocus}
          onChange={this._onChange}
        />
        <CardButton/>
      </View>
    );
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: 'white',
  },
});













// import React, { PureComponent } from "react";
// import {View, Text, StyleSheet, Alert } from "react-native";
// import CardButton from "./CardButton";
// const handleCardDetails = async () => {
//     try {
//       this.setState({ loading: true });
//       const cardOptions = { 
//         requiredBillingAddressFields: 'full',
//            prefilledInformation: {
//              billingAddress: {
//                name: 'Test Name',
//                line1: 'Test Line 1',
//                line2: '4',
//                city: 'Test City',
//                state: 'Test State',
//                country: 'Test Country',
//                postalCode: '31217'
//              }
//           }
//       };
//       const makePayment = async () => {
//         this.setState({ loading: true });
//         axios({
//           method: "POST",
//           url: `http://192.168.1.10:4000/api/payments/mobile/create?total=AMOUNT_TO_PAY&token=${this.state.token.tokenId}}`        
//         }).then(response => {
//             // YEY! PAYMENT DONE
//             // CHECKOUT YOUR STRIPE DASHBOARD FOR PAYMENTS MADE
//         }).catch(error => this.setState({ loading: false, token: null }));
//      }
//       // GETS YOUR TOKEN FROM STRIPE FOR PAYMENT PROCESS
//       const token = await Stripe.paymentRequestWithCardFormAsync(cardOptions);
//       this.setState({ loading: false, token });
//     } catch(error) {this.setState({ loading: false });}
//   }
 
// export default class CardForm extends PureComponent {
//     state = {
//       loading: false,
//       token: null
//     }

//     render() {
//       return (
//         <View style={styles.container}>
//           <CardButton
//             text="Card Details"
//             loading={this.state.loading}
//             onPress={this.handleCardDetails}
//           />
//           <View style={styles.token}>
//             { token &&
//               <View style={{ display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
//                 <Text style={styles.tokenLabel}>Token: {this.state.token?.tokenId}</Text>
//                  <CardButton
//                   text="Make Payment"
//                   onPress={this.handlePayment}
//                  />      
//               </View>
//             }
//           </View>
//         </View>
//       )
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center'
//     },
//     tokenLabel: {
//       textAlign: 'center',
//       color: '#111',
//       marginBottom: 5,
//       padding: 5
//     }   
//  });
 
// // import React, { useState, useEffect} from 'react'
// // import { useDispatch } from "react-redux";


// // import {
// //     View,
// //     Text,
// //     TouchableOpacity,
// //     TextInput,
// //     Platform,
// //     StyleSheet,
// //     Dimensions,

// // } from 'react-native';
// // import axios  from 'axios';
// // import * as Animatable from 'react-native-animatable';
// // import { LinearGradient } from 'expo-linear-gradient';
// // import FontAwesome from 'react-native-vector-icons/FontAwesome';
// // import Feather from 'react-native-vector-icons/Feather';
// // import EVoucher from './EVoucherScreen';
// // import { useSelector } from "react-redux";
// // import { Checkbox } from 'react-native-paper';
// // import EFacture from './EFacture';
// // import { useNavigation } from '@react-navigation/core';
// // import { PaymentView } from "../../PaymentView ";

// // const CardScreen = ({ showIt },params) => {
// //     const [response, setResponse ] = useState(undefined)
    
// //       const [ makePayment, setMakePayment ] = useState(false)
// //       const [paymentStatus, setPaymentStatus] = useState('')
  
// //       const cartInfo = {
// //           id: '5eruyt35eggr76476236523t3',
// //           description: 'Hotel Reservation ',
// //           amount: 1
// //       }
// //     const navigation = useNavigation()
// //     const state = useSelector(state => state.currentData);
// //     const hotels = useSelector(state => state.hotels.data);
// //     const [checkedBox, setCheckedBox] = React.useState(false);
// //     const [check, setCheck ]= React.useState(false);
// //     const [hide, setHide ]= React.useState(false);

// //     const [checkedBoxCancel, setCheckedBoxCancel] = React.useState(false);
// //     const [checkedBoxRed, setCheckedBoxRed] = React.useState(false);
// //     const [data, setData] = React.useState({
// //         email: '',
// //         password: '',
// //         userName: '',
// //         roles: '',
// //         confirm_password: '',
// //         check_textInputChange: false,
// //         secureTextEntry: true,
// //         confirm_secureTextEntry: true,
// //         active: true,

// //     });
// //     const user = {
// //         email: data.email,
// //         password: data.password,
// //         userName: data.email,
// //         active: true,
// //         roles: "USER",
// //         active: true,
// //     };
// //   const   [state,setState] = React.useState({
// //         loading: false,
// //         token: null
// //       })
  
// //     const show = showIt;
// //     console.log("show", showIt)
// //     const dispatch = useDispatch();
// //     const handleCardDetails = async () => {
// //         try {
// //           setState({ ...state,loading: true });
// //           const cardOptions = { 
// //             requiredBillingAddressFields: 'full',
// //                prefilledInformation: {
// //                  billingAddress: {
// //                    name: 'Test Name',
// //                    line1: 'Test Line 1',
// //                    line2: '4',
// //                    city: 'Test City',
// //                    state: 'Test State',
// //                    country: 'Test Country',
// //                    postalCode: '31217'
// //                  }
// //               }
// //           };
// //           // GETS YOUR TOKEN FROM STRIPE FOR PAYMENT PROCESS
// //           const token = await.Stripe.paymentRequestWithCardFormAsync(cardOptions);
// //          setState({ ...state,loading: false, token });
// //         } catch(error) {
// //             setState({ ...state,loading: false });
// //         }
        
// //       }
// //     const paymentUI = () => {
// //         console.log('paymentUI')
// //                 if(!makePayment){
        
// //                     return <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, marginTop: 50}}>
// //                             <Text style={{ fontSize: 25, margin: 10}}> Make Payment </Text>
// //                             <Text style={{ fontSize: 16, margin: 10}}> Product Description: {cartInfo.description} </Text>
// //                             <Text style={{ fontSize: 16, margin: 10}}> Payable Amount: {cartInfo.amount} </Text>
        
// //                             <TouchableOpacity style={{ height: 60, width: 300, backgroundColor: '#FF5733', borderRadius: 30, justifyContent: 'center', alignItems: 'center'
// //                                 }}
// //                                 onPress={() => {
// //                                     setMakePayment(true)
// //                                 }}
// //                                 >
// //                                 <Text style={{ color: '#FFF', fontSize: 20}}>
// //                                     Proceed To Pay
// //                                 </Text>
        
// //                             </TouchableOpacity>
        
        
// //                         </View>
        
        
                     
// //                     // show to make payment
// //                 }else{
        
// //                     if(response !== undefined){
// //                         return <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, marginTop: 50}}>
// //                             <Text style={{ fontSize: 25, margin: 10}}> { paymentStatus} </Text>
// //                             <Text style={{ fontSize: 16, margin: 10}}> { response} </Text>
// //                         </View>
        
// //                     }else{
// //                         return <PaymentView onCheckStatus={onCheckStatus} product={cartInfo.description} amount={cartInfo.amount} />
        
// //                     }
                    
// //                 }
        
// //             }
            
// //     // const addUser = (email,username,password) => dispatch(userPostData(email,username,password));
// //     const handleaddUser = async (e, name) => {
// //         dispatch(userPostData(user)).then((res) => {
// //             console.log(res);
// //         });


// //     };
// //     // React.useEffect(()=>{
// //     //     params.setCheckHided(true);
// //     // },[hide])
// //     const handlePasswordChange = (val) => {
// //         setData({
// //             ...data,
// //             password: val
// //         });
// //     }
// //     const handleConfirmPasswordChange = (val) => {
// //         setData({
// //             ...data,
// //             confirm_password: val
// //         });
// //     }
// //     const updateSecureTextEntry = () => {
// //         setData({
// //             ...data,
// //             secureTextEntry: !data.secureTextEntry
// //         })
// //     }
// //     const updateConfirmSecureTextEntry = () => {
// //         setData({
// //             ...data,
// //             confirm_secureTextEntry: !data.confirm_secureTextEntry
// //         })

// //     }
// //     const textInputChange = (val) => {
// //         if (val.length > 6) {
// //             setData({
// //                 ...data,
// //                 email: val,
// //                 check_textInputChange: true
// //             });
// //         } else {
// //             setData({
// //                 ...data,
// //                 email: val,
// //                 check_textInputChange: false

// //             });
// //         }


// //     }
// //     // const paymentUI = () => {
  
// //     //     if(!makePayment){
    
// //     //         return <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, marginTop: 50}}>
// //     //                 <Text style={{ fontSize: 25, margin: 10}}> Make Payment </Text>
// //     //                 <Text style={{ fontSize: 16, margin: 10}}> Product Description: {cartInfo.description} </Text>
// //     //                 <Text style={{ fontSize: 16, margin: 10}}> Payable Amount: {cartInfo.amount} </Text>
    
// //     //                 <TouchableOpacity style={{ height: 60, width: 300, backgroundColor: '#FF5733', borderRadius: 30, justifyContent: 'center', alignItems: 'center'
// //     //                     }}
// //     //                     onPress={() => {
// //     //                         setMakePayment(true)
// //     //                     }}
// //     //                     >
// //     //                     <Text style={{ color: '#FFF', fontSize: 20}}>
// //     //                         Proceed To Pay
// //     //                     </Text>
    
// //     //                 </TouchableOpacity>
    
    
// //     //             </View>
    
    
             
// //     //         // show to make payment
// //     //     }else{
    
// //     //         if(response !== undefined){
// //     //             return <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 300, marginTop: 50}}>
// //     //                 <Text style={{ fontSize: 25, margin: 10}}> { paymentStatus} </Text>
// //     //                 <Text style={{ fontSize: 16, margin: 10}}> { response} </Text>
// //     //             </View>
    
// //     //         }else{
// //     //             return <PaymentView onCheckStatus={onCheckStatus} product={cartInfo.description} amount={cartInfo.amount} />
    
// //     //         }
            
// //     //     }
    
// //     // }

  
// //       const onCheckStatus = async (paymentResponse) => {
// //           setPaymentStatus('Please wait while confirming your payment!')
// //           setResponse(paymentResponse)
  
// //           let jsonResponse = JSON.parse(paymentResponse);
// //           // perform operation to check payment status
  
// //           try {
      
// //               const stripeResponse = await axios.post('http://localhost:8888/payment', {
// //                   email: 'codergogoi@gmail.com',
// //                   product: cartInfo,
// //                   authToken: jsonResponse
// //               })
  
// //               if(stripeResponse){
  
// //                   const { paid } = stripeResponse.data;
// //                   if(paid === true){
// //                       setPaymentStatus('Payment Success')
// //                   }else{
// //                       setPaymentStatus('Payment failed due to some issue')
// //                   }
  
// //               }else{
// //                   setPaymentStatus(' Payment failed due to some issue')
// //               }
  
              
// //           } catch (error) {
              
// //               console.log(error)
// //               setPaymentStatus(' Payment failed due to some issue')
  
// //           }
   
// //       }
// //   return (
// //     <View style={styles.container}>
// //     <CardButton
// //       text="Card Details"
// //       loading={this.state.loading}
// //       onPress={this.handleCardDetails}
// //     />
// //     <View style={styles.token}>
// //       { token &&
// //         <View style={{ display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
// //           <Text style={styles.tokenLabel}>Token: {this.state.token?.tokenId}</Text>
// //            <CardButton
// //             text="Make Payment"
// //             onPress={this.handlePayment}
// //            />      
// //         </View>
// //       }
// //     </View>
// //   </View>
// //   )
      
  
// // //     return (
// // //       (show == true) ? ( 
  
// // //   (<View style={styles.container}>
// // //               {paymentUI()}
// // //           </View>)
// // //     // <View style={styles.container} >
// // // //             <View style={styles.header} >
// // // //                 <Text style={styles.text_header}>Pay easily and safely Now with us !</Text>
// // // //             </View>
// // // //             <Animatable.View
// // // //                 animation="fadeInUp"
// // // //                 style={styles.footer} >
// // // //                 <View style={styles.action}>
// // // //                     <View style={styles.item3}>
// // // //                         <View style={styles.action2}>
// // // //                             <Checkbox
// // // //                                 color="#FFBF00"
// // // //                                 status={checkedBox ? 'checked' : 'unchecked'}
// // // //                                 onPress={() => {
// // // //                                     // if (checkedBoxRed)
// // // //                                     setCheckedBox(!checkedBox);
// // // //                                     setCheckedBoxRed(checkedBox)
// // // //                                     setCheckedBoxCancel(checkedBox)

// // // //                                     //     else                                        
// // // //                                     //      {setCheckedBox(checkedBox)
// // // //                                     //         setCheckedBoxRed(!checkedBoxRed)}

// // // //                                     // 
// // // //                                 }
// // // //                                 }
// // // //                             />
// // // //                             <Text style={styles.text}
// // // //                             >


// // // //                                 <FontAwesome
// // // //                                     name="cc-paypal"
// // // //                                     color="#05375a"
// // // //                                     size={30}

// // // //                                 />   </Text>
// // // //                         </View>
// // // //                     </View>
// // // //                     <View style={styles.item3}>
// // // //                         <View style={styles.action2}>
// // // //                             <Checkbox
// // // //                                 color="#FFBF00"
// // // //                                 status={checkedBoxCancel ? 'checked' : 'unchecked'}
// // // //                                 onPress={() => {
// // // //                                     // if (checkedBoxRed)
// // // //                                     setCheckedBox(checkedBoxCancel);
// // // //                                     setCheckedBoxRed(checkedBoxCancel)
// // // //                                     setCheckedBoxCancel(!checkedBoxCancel)
// // // //                                     //     else                                        
// // // //                                     //      {setCheckedBox(checkedBox)
// // // //                                     //         setCheckedBoxRed(!checkedBoxRed)}

// // // //                                     // 
// // // //                                 }
// // // //                                 }
// // // //                             />
// // // //                             <Text style={styles.text}
// // // //                             >


// // // //                                 <FontAwesome
// // // //                                     name="cc-visa"
// // // //                                     color="#05375a"
// // // //                                     size={
                                    
// // // //                                     30}

// // // //                                 />  </Text>
// // // //                         </View>
// // // //                     </View>

// // // //                     <View style={styles.item3}>
// // // //                         <View style={styles.action2}>


// // // //                             <Checkbox
// // // //                                 color="#FFBF00"
// // // //                                 status={checkedBoxRed ? 'checked' : 'unchecked'}
// // // //                                 onPress={() => {
// // // //                                     // if(checkedBox)
// // // //                                     setCheckedBoxRed(!checkedBoxRed);
// // // //                                     setCheckedBox(checkedBoxRed);
// // // //                                     setCheckedBoxCancel(checkedBoxRed)




// // // //                                 }}
// // // //                             />
// // // //                             <FontAwesome
// // // //                                 name="cc-mastercard"
// // // //                                 color="#05375a"
// // // //                                 size={30}

// // // //                             />
                           
// // // //                         </View>
// // // //                     </View>
// // // //                     </View>
// // // //                     <View style={styles.action}>
// // // //                         <FontAwesome
// // // //                             name="credit-card-alt"
// // // //                             color="#05375a"
// // // //                             size={20} />
                   
                    
// // // //                     <TextInput
// // // //                         placeholder="card number"
// // // //                         style={styles.textInput}
// // // //                         autoCapitalize="none"
// // // //                         onChangeText={(val) => textInputChange(val)}
// // // //                     />
// // // //                     {data.check_textInputChange ?
// // // //                         <Animatable.View animation="bounceIn"  >

// // // //                             <Feather name='check-circle'
// // // //                                 color="green"
// // // //                                 size={20} />
// // // //                         </Animatable.View>

// // // //                         : null}

// // // // </View>
               
// // // //                 <View style={styles.action}>
// // // //                     <FontAwesome
// // // //                         name="lock"
// // // //                         color="#05375a"
// // // //                         size={30} />
// // // //                     <TextInput
// // // //                         placeholder="card password "
// // // //                         secureTextEntry={data.secureTextEntry ? true : false}
// // // //                         style={styles.textInput}
// // // //                         autoCapitalize="none"
// // // //                         onChangeText={(val) => handlePasswordChange(val)}
// // // //                     />
// // // //                     <TouchableOpacity
// // // //                         onPress={updateSecureTextEntry}
// // // //                     >
// // // //                         {data.secureTextEntry ?
// // // //                             <Feather name="eye-off"
// // // //                                 color="grey"
// // // //                                 size={20}
// // // //                             />
// // // //                             : <Feather name="eye"
// // // //                                 color="grey"
// // // //                                 size={20}
// // // //                             />
// // // //                         }
// // // //                     </TouchableOpacity>
// // // //                 </View>


// // // //                 <View style={styles.button} >

// // // //                     <TouchableOpacity

// // // //                         onPress={() => {
// // // //                             navigation.navigate('EVoucher');
// // // //                             setCheck(true);
// // // //                             setHide(true);
                           
// // // // }}
// // // //                         style={[styles.signIn,{
// // // //                             borderColor:'#002E63',
// // // //                             borderWidth:1 ,
// // // //                             marginTop: 1
// // // //                          }]}
// // // //                         >
// // // //                         <Text style={styles.textSign, {
// // // //                             color: '#002E63'
// // // //                         }}> Pay Now </Text>
// // // //                     </TouchableOpacity>
                  
// // // //                 </View>
// // // //                 <EFacture show={check}/>
// // // //             </Animatable.View>
// // // //         </View>) : ((show == false) ? (
            
// // // //               <View style={styles.header} >
// // // //                 <Text style={styles.text_header}>Here is your E-Voucher!</Text>
               
// // // //                  <EVoucher />
            
// // // //             </View>
            

// // //         )

// // //             : (
// // //                 null
// // //             ))
// // }
// // export default CardScreen;

// // const { height } = Dimensions.get("screen");
// // const height_logo = height * 0.28;

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         justifyContent: 'center',
// //         alignItems: 'center'
// //       },
// //       tokenLabel: {
// //         textAlign: 'center',
// //         color: '#111',
// //         marginBottom: 5,
// //         padding: 5
// //       }   , item3: {
// //         width: '33%'
// //     },
// //     header: {
// //         flex: 2,
// //         justifyContent: 'flex-end',
// //         paddingHorizontal: 20,
// //         paddingTop: 10,
// //         paddingBottom: 50
// //     },
// //     footer: {
// //         flex: Platform.OS === 'ios' ? 3 : 5,
// //         backgroundColor: '#fff',
// //         borderRadius: 10,
// //         borderTopRightRadius: 10,
// //         paddingHorizontal: 20,
// //         paddingVertical: 30,
// //         borderColor: '#A1CAF1',
// //         //borderBottomWidth: 0,
// //         shadowColor: '#002E63',
// //         shadowOffset: { width: 0, height: 2 },
// //         shadowOpacity: 0.8,
// //         shadowRadius: 2,
// //         elevation: 4,
// //         marginLeft: 5,
// //         marginRight: 5,
// //         //  marginTop: 5,
// //         marginBottom: 10,
// //     },
// //     text_header: {
// //         color: '#FFBF00',
// //         fontWeight: 'bold',
// //         fontStyle: "italic",
// //         fontSize: 25
// //     },
// //     text_footer: {
// //         color: '#05375a',
// //         fontSize: 18
// //     },
// //     action: {
// //         flexDirection: 'row',
// //         marginTop: 10,
// //         borderBottomWidth: 1,
// //         borderBottomColor: '#f2f2f2',
// //         paddingBottom: 5
// //     },
// //     action2: {
// //         flexDirection: 'row',
// //         marginTop: 10,
     
// //         paddingBottom: 5
// //     },
// //     textInput: {
// //         flex: 1,
// //         marginTop: Platform.OS === 'ios' ? 0 : -12,
// //         paddingLeft: 10,
// //         color: '#05375a',
// //     },
// //     button: {
// //         alignItems: 'center',
// //         marginTop: 5
// //     },
// //     signIn: {
// //         width: '100%',
// //         height: 50,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         borderRadius: 10
// //     },
// //     textSign: {
// //         fontSize: 18,
// //         fontWeight: 'bold'
// //     },
// //     textPrivate: {
// //         flexDirection: 'row',
// //         flexWrap: 'wrap',
// //         marginTop: 20
// //     },
// //     color_textPrivate: {
// //         color: 'grey'
// //     }
// // });