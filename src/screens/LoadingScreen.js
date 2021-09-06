import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../components/Loading';

export default function LoadingScreen({navigation}) {
  useEffect(() => {
    checkIsUsed();
  }, []);

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
      console.log('Loading error >>', error);
    }
  };

  return (
    <SafeAreaView style={style.area}>
      <Loading />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  area: {
    flex: 1,
  },
});
