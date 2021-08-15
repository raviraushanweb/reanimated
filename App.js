import {Constants} from 'react-native-unimodules';

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {COLORS, FONTS, SIZES, icons} from './constants/index';

import ReanimatedIndex from './reanimated/ReanimatedIndex';

const App = () => {
  return (
    <>
      <ReanimatedIndex />
    </>
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
