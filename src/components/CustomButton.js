import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomButton({onPressButton, icon, text, iconPosition}) {
  return(
    <TouchableOpacity style={style.area} onPress={() => onPressButton()}>
      {iconPosition === 'front' ? <Icon name={icon} size={23} color='#262626'/> : null}
      <Text style={style.text}>{text}</Text>
      {iconPosition === 'back' ? <Icon name={icon} size={23} color='#262626'/> : null}
    </TouchableOpacity>
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
    borderRadius: 30,
    backgroundColor: '#6273ED',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5,
  }
});