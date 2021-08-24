import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Icon } from 'react-native-vector-icons/MaterialCommunityIcons';


export default function OnboardingScreen() {
  return (
    <SafeAreaView style={{backgroundColor:'blue'}}>
       <Text>onboardıng</Text>
       <Icon name="rocket" size={30} color="#900" />
    </SafeAreaView>
  );
}
