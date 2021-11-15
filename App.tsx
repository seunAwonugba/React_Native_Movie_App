import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { BottomNav } from './BottomNavigation/BottomNav';
import { Details } from './Screens/Details';
import { Movies } from './Screens/Movies';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown : false}}>
        <Stack.Screen name = "BottomNav" component =  {BottomNav}/>
        <Stack.Screen name = "Details" component = {Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
