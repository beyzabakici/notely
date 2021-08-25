import React, { useEffect, useState } from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingScreen from './screens/OnboardingScreen';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();


export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName={used ? OnboardingScreen : HomeScreen}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} /> 
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

