import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Details } from './Screens/Details';
import { Movies } from './Screens/Movies';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Movies" screenOptions = {{headerShown : false}}>
        <Stack.Screen name = "Movies" component = {Movies} />
        <Stack.Screen name = "Details" component = {Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
