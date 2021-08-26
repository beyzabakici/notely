import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import SearchArea from '../components/SearchArea';

export default function HomeScreen({ navigation }) {
  
  return (
    <SafeAreaView style={style.area}>
      <View style={style.header}>
        <View style={style.labelArea}>
          <Text style={style.label}>My Notes</Text>
          <View style={style.photo}></View>
        </View>
      </View>
      <SearchArea />
      <CustomButton icon='plus' iconPosition='front' text='Create' onPressButton={() => navigation.navigate('DetailScreen')} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  area: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f1f1f1'
  },
  label: {
    fontSize: 26,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'normal'
  },
  photo: {
    backgroundColor: '#66DC8A',
    width: 25,
    height: 25,
    borderRadius: 5
  },
  labelArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    paddingVertical: 10,

  }
})