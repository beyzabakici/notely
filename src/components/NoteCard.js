import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

export default function NoteCard({ item }) {
  const { change_date, content, title } = item;
  return (
    <View style={style.postArea}>
      <View style={style.labelArea}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.date}>{change_date}</Text>
      </View>
      <View style={style.contentArea}>
        <Text style={style.content} numberOfLines={4}>{content}...</Text>
      </View>
    </View>
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
    fontStyle: 'normal'
  },
  date: {
    marginBottom: 5,
    fontFamily: 'roboto',
    fontWeight: '400',
    fontSize: 12,
    fontStyle: 'normal'
  },
  contentArea: {
    marginTop: 5,
  },
  content: {
    fontFamily: 'roboto',
    fontWeight: '400',
    fontSize: 15,
    fontStyle: 'normal'
  },
})