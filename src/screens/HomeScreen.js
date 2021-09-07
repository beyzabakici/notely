import React, {useEffect} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../components/CustomButton';
import NoteCard from '../components/NoteCard';
import SearchArea from '../components/SearchArea';
import Loading from '../components/Loading';
import {
  getPostsAsync,
  selectPosts,
  detelePostAsync,
  getQueryPostAsync,
} from '../redux/posts/postsSlice';

export default function HomeScreen({navigation}) {
  const dispatch = useDispatch();

  const posts = useSelector(selectPosts);
  const {queryPost, deletePost, isLoading, error} = useSelector(
    state => state.posts,
  );

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);

  const renderNoteCard = ({item}) => {
    return (
      <TouchableOpacity
        onLongPress={() =>
          Alert.alert(`${item.title}`, 'Delete this note ?', [
            {
              text: 'okey',
              onPress: () => {
                dispatch(detelePostAsync(item));
                if (deletePost.isLoading) {
                  return <Loading />;
                }

                if (deletePost.error) {
                  console.log('Delete Post Error >>', deletePost.error);
                }
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

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.log('Get Posts Error >>', error);
  }

  const renderQueryPost = val => {
    dispatch(getQueryPostAsync(val));
    if (queryPost.isLoading) {
      return <Loading />;
    }

    if (queryPost.error) {
      console.log('Query Post Error >>', queryPost.error);
    }
  };

  return (
    <SafeAreaView style={style.area}>
      <View style={style.header}>
        <View style={style.labelArea}>
          <Text style={style.label}>My Notes</Text>
          <Image style={style.photo} source={require('../assets/Photo.png')} />
        </View>
        <SearchArea searchText={renderQueryPost} />
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
