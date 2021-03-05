import React,{useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import{
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
        } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SupportScreen from './SupportScreen';
import BookmarkScreen from './BookmarkScreen';
import SettingsScreen from './SettingsScreen'
import {AuthContext} from '../components/context';

// const [isDarkTheme,setIsDarkTheme]=useState(false);
// const toggletheme= () =>{
//     this.setIsDarkTheme(state => ({
//         isDarkTheme: !isDarkTheme
// }));}

export function DrawerContent (props){
    const [isDarkTheme,setIsDarkTheme]=React.useState(false);
const toggletheme=()=>{
    setIsDarkTheme(!isDarkTheme);
}
const {signOut} = React.useContext(AuthContext);

//const paperTheme = useTheme();
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                     <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                        <Avatar.Image source={require('../assets/wiem.jpg')} />
                         <View style={{marginLeft:15 , flexDirection:'column'}}>
                         <Title style={styles.title}>
                              Wiem Layouni
                          </Title>
                          <Caption style={styles.caption}>
                        layouniwiem@gmail.com
                          </Caption>
                         </View>
                         </View>
                         <View style={styles.row}>

                              <View style={styles.section}>
                                  <Paragraph style={[styles.paragraph,styles.caption
                                  ]}>80

                                  </Paragraph>
                                  <Caption style={styles.caption}>
                                      Following

                                  </Caption>

                          </View>
                          <View style={styles.section}>
                                  <Paragraph style={[styles.paragraph,styles.caption
                                  ]}>56

                                  </Paragraph>
                                  <Caption style={styles.caption}>
                                      Followers

                                  </Caption>

                          </View>
                          </View> 
                           
                     </View>
                     <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Bookmarks"
                            onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={()=>{toggletheme()}}>
                            <View style={styles.preference}
                            ><Text>
                                Dark Theme
                            </Text>
                            <View pointerEvents="none">
                            <Switch value={isDarkTheme}/>
                            </View>
                           

                            </View>
                        </TouchableRipple>

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                icon={({color,size})=> (
                    <Icon 
                    name="exit-to-app"
                    color= {color}
                    size={size} 
                    />

                )}
                label="Sign Out"
                onPress={()=>{ 
                    signOut()

                }}>
                </DrawerItem>
            </Drawer.Section>
        </View>

    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });