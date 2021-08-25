import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MetarialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../api';
import ToolsArea from '../components/ToolsArea';

export default function DetailScreen({ navigation, postId }) {
    
  const currentDate = Date().toString();
  const [title, onChangeTitle] = React.useState('New Note');
  const [ note, setNote ] = useState({
    postId: null,
    postTitle: '',
    postContent: '',
    change_date: ''    
  });

  useEffect(() => {
    axios.get('http://localhost:3000/posts/0')
    .then((data) => {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, []);

  const handleSetNote = () => {

  }

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
        <View style={style.noteArea}>
          <TextInput 
            style={style.title} 
            onChangeText={onChangeTitle}
            value={note.postTitle !== '' ? note.postTitle : title}/>
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