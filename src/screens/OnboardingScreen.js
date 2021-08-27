import React, { useEffect} from 'react'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import CustomButton from '../components/CustomButton';



export default function OnboardingScreen({ navigation }) {
  
  useEffect(() => {
    const jsonValue = JSON.stringify(true)
      AsyncStorage.setItem('@IS_USED', jsonValue);
  })

  return (
    <SafeAreaView style={style.area}>
      <View style={style.labelArea}>
        <Text style={style.label}>Notely</Text>
        <Text style={style.content}>Capture what’s on your mind & get a reminder later at the right place or time. You can also add voice memo & other features</Text>
      </View>
      <CustomButton 
        icon='arrow-right' 
        iconPosition='back' text="Let's Start" 
        onPressButton={() => {navigation.navigate('HomeScreen') }} 
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  area: {
    flex: 1,
  },
  labelArea: {
    paddingTop: 116,
    paddingStart: 20,
  },
  label: {
    fontSize: 26,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'normal'
  },
  content: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontStyle: 'normal'

  }
});