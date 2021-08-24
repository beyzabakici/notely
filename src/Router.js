import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { OnboardingScreen } from './screens/DetailScreen';
import { DetailScreen } from './screens/DetailScreen';
import { HomeScreen } from './screens/HomeScreen';

const Stack = createStackNavigator();


export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Onboarding Screen" component={OnboardingScreen} />
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen name="Detail Screen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

