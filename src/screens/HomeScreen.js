import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import api from '../api/api';
import CustomButton from '../components/CustomButton';
import NoteCard from '../components/NoteCard';
import SearchArea from '../components/SearchArea';

export default function HomeScreen({navigation}) {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      getPost();
    });
    return unsubscribeFocus;
  }, [navigation, posts]);

  const getPost = async () => {
    try {
      const res = await api.get('/posts');
      setPost(res.data);
    } catch (error) {
      console.log('error: ', error);
    }
  };
  const handleNoteCard = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailScreen', item)}>
        <NoteCard item={item} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={style.area}>
      <View style={style.header}>
        <View style={style.labelArea}>
          <Text style={style.label}>My Notes</Text>
          <View style={style.photo} />
        </View>
        <SearchArea />
      </View>
      <FlatList
        data={posts}
        renderItem={handleNoteCard}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      <CustomButton
        icon="plus"
        iconPosition="front"
        text="Create"
        onPressButton={() => navigation.navigate('DetailScreen', '')}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  area: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f1f1f1',
  },
  label: {
    fontSize: 26,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  photo: {
    backgroundColor: '#66DC8A',
    width: 25,
    height: 25,
    borderRadius: 5,
  },
  labelArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    paddingVertical: 10,
  },
});
