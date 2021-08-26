import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingScreen from './screens/OnboardingScreen';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
import wait from 'waait';

const Stack = createStackNavigator();

export default function Router() {
  const [initialPage, setInitialPage] = useState('');

  useEffect(() => {
    checkIsUsed();
  }, [])

  const checkIsUsed = async () => {
    try {
      const res = await AsyncStorage.getItem('@IS_USED');
      console.log(res);
      if(res === null || res === false){
        setInitialPage('OnboardingScreen');
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={initialPage}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

