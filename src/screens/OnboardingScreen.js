import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';


export default function OnboardingScreen() {
  return (
    <SafeAreaView style={style.area}>
      <Text>
        onboardıng
      </Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  area: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});