import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Reviews from '../screens/Reviews';
import AddReview from '../screens/AddReview';

const Stack = createStackNavigator();

export default function StackNavigationRev() {
  return (
    <Stack.Navigator initialRouteName='Reviews'>
      <Stack.Screen name="Reviews" component={Reviews} options={{
        title: '',
        headerShown: false,
      }} />
      <Stack.Screen name="Add Review" component={AddReview}
        options={{
          title: '',
          headerShown: false,
        }} />
    </Stack.Navigator>
  )
}