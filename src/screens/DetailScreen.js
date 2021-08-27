import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MetarialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../api/api';
import ToolsArea from '../components/ToolsArea';

export default function DetailScreen({params}) {
  const { change_date, content, title } = params;

  console.log('Detail>>>',title)
    
  const currentDate = Date().toString();
  const [text, onChangeText] = React.useState('New Note');
  const [ note, setNote ] = useState({
    postId: null,
    postTitle: '',
    postContent: '',
    change_date: ''    
  });

  const handleBack = () => {
    params.navigation.goBack();
  }

  const submitNote = () =>{
    // api.post('posts',{
    //   "change_date": currentDate,
    //   "title":title,
    // })
  }

  return (
    <SafeAreaView style={style.safeArea} >
      <View style={style.area}>
      <View style={style.header}>
        <TouchableOpacity onPress={() => handleBack()}>
          <MetarialIcon name='keyboard-backspace' size={27} color='#2d2d2d' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => submitNote()}>
          <AntIcon name='check' size={27} color='#6273ED' />
        </TouchableOpacity>
      </View>
        <View style={style.noteArea}>
          <TextInput 
            style={style.title} 
            onChangeText={onChangeText}
            value={note.postTitle !== '' ? note.postTitle : text }/>
          <Text style={style.date}>{note.change_date !== '' ? note.change_date :currentDate}</Text>
          <TextInput value={note.postContent !== '' ? note.postContent : ''} />
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
  noteArea: {
    justifyContent: 'space-evenly',
    padding: 10,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'normal',
    paddingStart: 0,
  }
});