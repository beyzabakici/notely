import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import api from '../api/api';
import CustomButton from '../components/CustomButton';
import NoteCard from '../components/NoteCard';
import SearchArea from '../components/SearchArea';

export default function HomeScreen({navigation}) {
  const [posts, setPost] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      getPost();
    });
    return unsubscribeFocus;
  }, [posts, searchText]);

  const getPost = async () => {
    if (!searchText) {
      try {
        const res = await api.get('/posts');
        setPost(res.data);
      } catch (error) {
        console.log('error: ', error);
      }
    } else {
      try {
        const res = await api.get(`/posts?title_like=${searchText}`);
        console.log('res.data>>>', res.data);
      } catch (error) {
        console.log('error: ', error);
      }
    }
  };

  const renderNoteCard = ({item}) => {
    return (
      <TouchableOpacity
        onLongPress={() =>
          Alert.alert(`${item.title}`, 'Delete this note ?', [
            {
              text: 'okey',
              onPress: () => {
                api.delete(`/posts/${item.id}`);
              },
            },
            {text: 'close', onPress: () => null},
          ])
        }
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
          <Image style={style.photo} source={require('../assets/Photo.png')} />
        </View>
        <SearchArea searchText={val => setSearchText(val)} />
      </View>
      <FlatList
        data={posts}
        renderItem={renderNoteCard}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      <CustomButton
        icon="plus"
        iconPosition="left"
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
