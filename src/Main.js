import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Splash';
import Home from './Home';

const Stack= createStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
              <Stack.Screen 
              name="Home" 
              component={Home}
              options={{headerShown: false}} name="Home" component={Home}
              />
              <Stack.Screen name="Sobre" component={Splash} 
              options={{headerShown: false}} name="Splash" component={Splash}
              />
            </Stack.Navigator>
        </NavigationContainer>
    );
  }
  