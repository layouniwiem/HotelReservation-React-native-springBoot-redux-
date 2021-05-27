import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

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
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
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
        title:' Search Hotel',
   
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
        title:'Result Search ',
   
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
        title:'Result Search ',
   
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
        title:' SearchRoom ',
   
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
        title:' RoomDetail ',
   
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
        title:' BookScreen ',
   
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
</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" 
            onPress={() =>
               navigation.openDrawer()}>
                 
               </Icon.Button>
        )
        }} />
</DetailsStack.Navigator>
);