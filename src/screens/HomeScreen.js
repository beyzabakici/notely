import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import api from '../api/api';
import CustomButton from '../components/CustomButton';
import NoteCard from '../components/NoteCard';
import SearchArea from '../components/SearchArea';

export default function HomeScreen({ navigation }) {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    getPost();
  }, [])

  const getPost = async () => {
    try {
      const res = await axios.get('http://10.0.2.2:3000/posts');
      setPost(res.data); 
    } catch (error) {
      console.log(error)
    }
  } 
  const handlePostCard = ({item}) => {
   <TouchableOpacity>
      <NoteCard item={item} />
    </TouchableOpacity>
  }

  return (
    <SafeAreaView style={style.area}>
      <View style={style.header}>
        <View style={style.labelArea}>
          <Text style={style.label}>My Notes</Text>
          <View style={style.photo}></View>
        </View>
        <FlatList 
         data={posts}
         renderItem={handlePostCard}
         keyExtractor={item => item.id}
        />
      </View>
      <SearchArea />
      <CustomButton icon='plus' iconPosition='front' text='Create' onPressButton={() => navigation.navigate('DetailScreen')} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  area: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f1f1f1'
  },
  label: {
    fontSize: 26,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'normal'
  },
  photo: {
    backgroundColor: '#66DC8A',
    width: 25,
    height: 25,
    borderRadius: 5
  },
  labelArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    paddingVertical: 10,

  }
})