import React, {useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import NoteCard from '../components/NoteCard';
import SearchArea from '../components/SearchArea';
import useSWR, {useSWRConfig} from 'swr';
import api from '../api/api';

export default function HomeScreen({navigation}) {
  const fetcher = url => api.get(url).then(res => res.data);
  const {mutate} = useSWRConfig();
  const {data: posts, error: swrError} = useSWR('/posts', fetcher, {
    //refreshInterval: 5000,
  });

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      mutate('/posts');
    });
    return unsubscribeFocus;
  }, []);

  if (swrError) {
    return (
      <View>
        <Text>hata</Text>
      </View>
    );
  }

  //TODO:navigation u default oalrak geçirmedi ??
  const renderNoteCard = ({item}) => {
    return <NoteCard item={item} posts={posts} navigation={navigation} />;
  };

  return (
    <SafeAreaView style={style.area}>
      <View style={style.header}>
        <View style={style.labelArea}>
          <Text style={style.label}>My Notes</Text>
          <Image style={style.photo} source={require('../assets/Photo.png')} />
        </View>
        <SearchArea />
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
