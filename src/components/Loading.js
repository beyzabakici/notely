import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export default function Loading() {
  return (
    <View style={style.loading}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const style = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
