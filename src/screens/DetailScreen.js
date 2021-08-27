import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MetarialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../api/api';
import ToolsArea from '../components/ToolsArea';

export default function DetailScreen({navigation, route}) {
  const params = route.params;
    
  const currentDate = Date().toString();
  const [ title, setTitle ] = useState(params ? params.title : 'New Note' );
  const [ note, setNote ] = useState(params ? params.content : '');
  const [ date, setDate] = useState(params ? params.change_date : currentDate);
  const [ id, setId ] = useState(params ? params.id : Date.now())

  useEffect(() => {
  },[])


  const handleBack = () => {
    navigation.goBack();
  }

  const submitNote = () =>{
    if(!params){
      api.post('posts',{
        "id": id,
        "title":title,
        "content":note,
        "change_date": date
      })
    } else {
      api.put(`/posts/${id}`,{
        "id": id,
        "title":title,
        "content":note,
        "change_date": date
      })
    }
    navigation.navigate('HomeScreen')
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
            onChangeText={setTitle}
            value={title} />
          <Text style={style.date}> {date} </Text>
          <TextInput 
            style={style.content} 
            value={note}
            onChangeText={setNote} 
            multiline={true}/>
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
  },
  content: {
  }
});