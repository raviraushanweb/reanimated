import {Constants} from 'react-native-unimodules';

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {COLORS, FONTS, SIZES, icons} from './constants/index';

import Screen from './Screen';
import CircularBar from './reanimated/CircularBar';
import DragList from './reanimated/DragList';
import Music from './helpers/Music';

const App = () => {
  return (
    <View style={styles.container}>
      <Music />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    width: '100%',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
});

export default App;
