import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CreateButton() {
  return(
    <View style={style.area}>
      <Icon name='plus' size={23} />
      <Text style={style.text}>Create</Text>
    </View>
  );
}

const style = StyleSheet.create({
  area: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    right: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 129,
    height: 52,
    borderRadius: 30,
    backgroundColor: '#6273ED',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
  }
});