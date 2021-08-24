import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

export default function SearchArea() {
  return(
    <View style={style.area}>
      <Icon name='search' size={23}/>
      <TextInput placeholder='Search anything' size={16} />
    </View>
  );
}

const style = StyleSheet.create({
  area: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 10,
    marginVertical: 10


  }
});