import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MetarialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ToolsArea from '../components/ToolsArea';

export default function DetailScreen({ navigation }) {
  const handleBack = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={style.safeArea} >
      <View style={style.area}>
      <View style={style.header}>
        <TouchableOpacity onPress={() => handleBack()}>
          <MetarialIcon name='keyboard-backspace' size={27} color='#2d2d2d' />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntIcon name='check' size={27} color='#6273ED' />
        </TouchableOpacity>
      </View>
      </View>
      <ToolsArea />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeArea:{
    flex: 1,
  },
  area: {
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
});