import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import HistoriqueDetails from './SearchScreens/SearchRoom/HistoriqueDetails'
import HomeScreen from './SearchScreens/HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import SearchResult from './SearchScreens/SearchResult';
import ResultDetail from './SearchScreens/ResultDetail';
import SearchRoom from './SearchScreens/SearchRoom/SearchRoom'
import RoomDetail from './SearchScreens/SearchRoom/RoomDetail';
import BookScreen from './SearchScreens/BookScreens/BookScreen';
import EVoucherScreen from './SearchScreens/BookScreens/EVoucherScreen';
import HistoryVoucher from './SearchScreens/BookScreens/HistoryVoucher';
import CardScreen from './SearchScreens/BookScreens/CardScreen'
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: '#002E63',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'History',
          tabBarColor: '#5D8AA8',
          tabBarIcon: ({ color }) => (
            <Icon name="bookmarks-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#002E63',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:' Search for Hotel',
   
        headerLeft: () => (
            <Icon.Button name="ios-menu"
             size={25} 
             backgroundColor="#002E63"
              onPress={() => navigation.openDrawer()
              }></Icon.Button>
        )
        }} />
        <HomeStack.Screen name="ResultDetail" component={ResultDetail}
         options={{
        title:'Details ',
   
        headerLeft: () => (
            <Icon.Button name="ios-menu"
             size={25} 
             backgroundColor="#002E63"
              onPress={() => navigation.openDrawer()
              }></Icon.Button>
        )
        }} 
        />
        <HomeStack.Screen name="SearchResult" component={SearchResult}
         options={{
        title:'Result of Search ',
   
        headerLeft: () => (
            <Icon.Button name="ios-menu"
             size={25} 
             backgroundColor="#002E63"
              onPress={() => navigation.openDrawer()
              }></Icon.Button>
        )
        }} 
        />
          <HomeStack.Screen name="SearchRoom" component={SearchRoom}
         options={{
        title:' Searching for Rooms  ',
   
        headerLeft: () => (
            <Icon.Button name="ios-menu"
             size={25} 
             backgroundColor="#002E63"
              onPress={() => navigation.openDrawer()
              }></Icon.Button>
        )
        }} 
        />
        <HomeStack.Screen name="RoomDetail" component={RoomDetail}
         options={{
        title:' Room Detail ',
   
        headerLeft: () => (
            <Icon.Button name="ios-menu"
             size={25} 
             backgroundColor="#002E63"
              onPress={() => navigation.openDrawer()
              }></Icon.Button>
        )
        }} 
        />
           <HomeStack.Screen name="BookScreen" component={BookScreen}
         options={{
        title:' Booking  ',
   
        headerLeft: () => (
            <Icon.Button name="ios-menu"
             size={25} 
             backgroundColor="#002E63"
              onPress={() => navigation.openDrawer()
              }></Icon.Button>
        )
        }} 
        />
         <HomeStack.Screen name="EVoucher" component={EVoucherScreen}
         options={{
        title:' E-Voucher ',
   
        headerLeft: () => (
            <Icon.Button name="ios-menu"
             size={25} 
             backgroundColor="#002E63"
              onPress={() => navigation.openDrawer()
              }></Icon.Button>
        )
        }} 
        />
           <HomeStack.Screen name="CardScreen" component={CardScreen}
         options={{
        title:' Enter your Card Informations ',
   
        headerLeft: () => (
            <Icon.Button name="ios-menu"
             size={25} 
             backgroundColor="#002E63"
              onPress={() => navigation.openDrawer()
              }></Icon.Button>
        )
        }} 
        />
</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#5D8AA8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
                  title:'Reservations History ',

        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#5D8AA8" 
            onPress={() =>
               navigation.openDrawer()}>
                 
               </Icon.Button>
        )
        }} />
        <DetailsStack.Screen name="HistoriqueDetails" component={HistoriqueDetails} options={{
                  title:' Details of Your Reservation ',

        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#5D8AA8" 
            onPress={() =>
               navigation.openDrawer()}>
                 
               </Icon.Button>
        )
        }} />
        <DetailsStack.Screen name="EVoucherHistory" component={HistoryVoucher}
         options={{
        title:' E-Voucher ',
   
        headerLeft: () => (
            <Icon.Button name="ios-menu"
             size={25} 
             backgroundColor="#5D8AA8"
              onPress={() => navigation.openDrawer()
              }></Icon.Button>
        )
        }} 
        />
</DetailsStack.Navigator>
);