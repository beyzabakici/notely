import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MetarialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
          <Icon name='check' size={27} color='#6273ED' />
        </TouchableOpacity>
      </View>
      </View>
      <View style={style.toolsArea}>
      <TouchableOpacity>
          <MetarialIcon name='music-note-eighth' size={27} color='#37474F' />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name='picture' size={27} color='#37474F' />
        </TouchableOpacity>
        <TouchableOpacity>
          <MetarialIcon name='bell-outline' size={27} color='#37474F' />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name='checkcircleo' size={27} color='#37474F' />
        </TouchableOpacity>
      </View>
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
  toolsArea: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    height: 59,
    width: Dimensions.get('window').width,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  }
});