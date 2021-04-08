import React from'react';
import {createStackNavigator }from '@react-navigation/stack';
import SearchResult from './SearchResult';
import  ResultDetail from './ResultDetail';

const SearchtStack = createStackNavigator();

const SearchtStackScreen =({navigation})=>(

    <SearchtStack.Navigator headerMode='none'>
        <SearchtStack.Screen name='SearchResult' component={SearchResult}/>
        <SearchtStack.Screen name='ResultDetail' component={ResultDetail}/>
    </SearchtStack.Navigator>
);
export default SearchtStackScreen;