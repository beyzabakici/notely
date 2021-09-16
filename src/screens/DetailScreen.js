import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MetarialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../components/Loading';
import ToolsArea from '../components/ToolsArea';
import {addPostAsync, updatePostAsync} from '../redux/posts/postsSlice';

export default function DetailScreen({navigation, route}) {
  const params = route.params;
  const dispatch = useDispatch();
  const {addPost, updatePost} = useSelector(state => state.posts);
  const [duplicateBack, setDuplicateBack] = useState();
  const currentDate = Date().toString();
  const [title, setTitle] = useState(params ? params.title : 'New Note');
  const [note, setNote] = useState(params ? params.content : '');
  const date = params ? params.change_date : currentDate;
  const id = params ? params.id : Date.now();

  const handleBackButton = () => {
    if (!duplicateBack) {
      setDuplicateBack(true);
      navigation.goBack();
    }
    return;
  };

  const submitNote = async e => {
    if (!params) {
      await dispatch(
        addPostAsync({
          id: id,
          title: title,
          content: note,
          change_date: date,
        }),
      );

      if (addPost.isLoading) {
        return <Loading />;
      }

      if (addPost.error) {
        console.log('Add Post Error >>', addPost.error);
      }
    } else {
      await dispatch(
        updatePostAsync({
          id: id,
          title: title,
          content: note,
          change_date: date,
        }),
      );
      if (updatePost.isLoading) {
        return <Loading />;
      }

      if (updatePost.error) {
        console.log('Add Post Error >>', updatePost.error);
      }
    }
    navigation.navigate('HomeScreen');
  };

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.area}>
        <View style={style.header}>
          <TouchableOpacity onPress={handleBackButton}>
            <MetarialIcon name="keyboard-backspace" size={27} color="#2d2d2d" />
          </TouchableOpacity>
          <TouchableOpacity onPress={submitNote}>
            <AntIcon name="check" size={27} color="#6273ED" />
          </TouchableOpacity>
        </View>
        <View style={style.noteArea}>
          <TextInput
            style={style.title}
            onChangeText={setTitle}
            value={title}
            multiline={true}
          />
          <Text style={style.date}> {date} </Text>
          <TextInput
            style={style.content}
            value={note}
            onChangeText={setNote}
            multiline={true}
          />
        </View>
      </View>
      <ToolsArea />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeArea: {
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
    marginTop: 10,
  },
  date: {
    marginTop: 10,
  },
});
