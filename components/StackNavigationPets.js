import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeLog from '../screens/HomeLog';
import AddPet from '../screens/AddPet';

const Stack = createStackNavigator();

export default function StackNavigationPets() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeLog} options={{
        title: '',
        headerShown: false,
      }} />
      <Stack.Screen name="Add Pet" component={AddPet} options={{
        title: '',
        headerShown: false,
      }} />
    </Stack.Navigator>
  )
}