import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import {mutate} from 'swr';
import {deletePost} from '../Context/Mutation';

export default function NoteCard({item, posts, navigation}) {
  const {change_date, content, title} = item;

  const handleOnLongPress = () => {
    Alert.alert(`${item.title}`, 'Delete this note ?', [
      {
        text: 'okey',
        onPress: () => {
          mutate('/posts', deletePost(item, posts), false);
        },
      },
      {text: 'close', onPress: () => null},
    ]);
  };

  return (
    <TouchableOpacity
      style={style.postArea}
      onLongPress={handleOnLongPress}
      onPress={() => navigation.navigate('DetailScreen', item)}>
      <View style={style.labelArea}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.date}>{change_date}</Text>
      </View>
      <View style={style.contentArea}>
        <Text style={style.content} numberOfLines={4} ellipsizeMode={'tail'}>
          {content}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  postArea: {
    padding: 20,
    marginVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 7,
  },
  labelArea: {
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  title: {
    fontFamily: 'roboto',
    fontWeight: 'bold',
    fontSize: 16,
    fontStyle: 'normal',
  },
  date: {
    marginBottom: 5,
    fontFamily: 'roboto',
    fontWeight: '400',
    fontSize: 12,
    fontStyle: 'normal',
  },
  contentArea: {
    marginTop: 5,
  },
  content: {
    fontFamily: 'roboto',
    fontWeight: '400',
    fontSize: 15,
    fontStyle: 'normal',
  },
});
