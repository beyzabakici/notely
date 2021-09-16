import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../components/Loading';
import {CommonActions} from '@react-navigation/routers';

export default function LoadingScreen({navigation}) {
  useEffect(() => {
    checkIsUsed();
  }, []);

  const checkIsUsed = async () => {
    try {
      const res = await AsyncStorage.getItem('@IS_USED');
      if (!JSON.parse(res)) {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'OnboardingScreen'}],
          }),
        );
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'HomeScreen'}],
          }),
        );
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
