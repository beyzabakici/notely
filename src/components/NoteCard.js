import React from 'react';
import { View, StyleSheet, Dimensions, Text} from 'react-native';

export default function NoteCard(item) {
  console.log('notecard >',item);
  return(
    <View style={style.postArea}>
      <View stylw={style.labelArea}>
        <Text>{label}</Text>
        <Text>{date}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  postArea: {
    width: Dimensions.get('window').width,
    margin: 20,
    backgroundColor: '#fff'
  },
  labelArea: {
    textDecorationLine: 'underline',
  }
})