import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Movies } from '../Screens/Movies';
import { SavedMovies } from '../Screens/SavedMovies';

const Tab = createBottomTabNavigator();

export const BottomNav = () =>{
    return(
        <Tab.Navigator initialRouteName = "Movies">
            <Tab.Screen name = "Movies" component = {Movies} />
            <Tab.Screen name = "SavedMovies" component = {SavedMovies} />
        </Tab.Navigator>
    )
}