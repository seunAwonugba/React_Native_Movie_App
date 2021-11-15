import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Movies } from '../Screens/Movies';
import { SavedMovies } from '../Screens/SavedMovies';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const BottomNav = () =>{
    return(
        <Tab.Navigator
            initialRouteName = "Movies"
            screenOptions={{
                tabBarActiveTintColor: 'red',
                headerShown : false
              }}>
            <Tab.Screen 
                name = "Movies" 
                component = {Movies}
                options= {{
                    tabBarLabel : "Movies",
                    tabBarIcon : ({ color, size }) =>(
                        <Entypo name = "home" size={size} color= {color} />
                    )
                }} />
            <Tab.Screen 
                name = "SavedMovies"
                component = {SavedMovies}
                options={{
                    tabBarLabel: 'Favourites',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="heart" size={size} color= {color} />
                    ),
                  }} />
        </Tab.Navigator>
    )
}