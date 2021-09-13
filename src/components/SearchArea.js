import React, {useState, useEffect, useCallback} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {debounce} from 'lodash';
import {queryPost} from '../Context/Mutation';

export default function SearchArea() {
  const [text, setText] = useState('');

  const onChangeText = val => {
    setText(val);
    debouncedQueryPost(val);
  };

  const handleQueryPost = e => {
    queryPost(e);
  };

  const debouncedQueryPost = useCallback(debounce(handleQueryPost, 500), []);

  return (
    <View style={style.area}>
      <Icon name="search" size={23} />
      <TextInput
        placeholder="Search anything"
        size={16}
        onChangeText={onChangeText}
        value={text}
        clearButtonMode="always"
      />
    </View>
  );
}

const style = StyleSheet.create({
  area: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#e9e9e9',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
