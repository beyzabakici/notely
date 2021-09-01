import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View, Dimensions} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign'; //Icon tek bi component olup oradan props ile seçiilebilirdi ?
import MetarialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ToolsArea() {
  const [selected, setSelect] = useState('');

  useEffect(() => {
    setSelect('');
  }, []);

  function handleOnPress(prop) {
    setSelect(prop);
  }

  return (
    <View style={style.area}>
      <TouchableOpacity onPress={() => handleOnPress('music')}>
        <MetarialIcon
          name="music-note-eighth"
          size={27}
          color={selected === 'music' ? '#66DC8A' : '#37474F'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOnPress('picture')}>
        <AntIcon
          name="picture"
          size={27}
          color={selected === 'picture' ? '#66DC8A' : '#37474F'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOnPress('bell')}>
        <MetarialIcon
          name="bell-outline"
          size={27}
          color={selected === 'bell' ? '#66DC8A' : '#37474F'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleOnPress('check')}>
        <AntIcon
          name="checkcircleo"
          size={27}
          color={selected === 'check' ? '#66DC8A' : '#37474F'}
        />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  area: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    height: 59,
    width: Dimensions.get('window').width,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
