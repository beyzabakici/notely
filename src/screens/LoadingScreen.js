import React, {useEffect} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoadingScreen({navigation}) {
  useEffect(() => {
    checkIsUsed();
  },[]);

  const checkIsUsed = async () => {
    try {
      const res = await AsyncStorage.getItem('@IS_USED');
      if (!JSON.parse(res)) {
        navigation.navigate('OnboardingScreen');
      } else {
        navigation.navigate('HomeScreen');
        const jsonValue = JSON.stringify(true);
        AsyncStorage.setItem('@IS_USED', jsonValue);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <SafeAreaView style={style.area}>
      <ActivityIndicator size="large" />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  area: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
