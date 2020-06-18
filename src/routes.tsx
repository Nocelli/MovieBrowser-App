import React from 'react';
import Home from './screens/Home'
import Details from './screens/Details'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" headerMode='none'>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Routes