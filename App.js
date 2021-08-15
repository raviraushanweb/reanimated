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
import Opacity from './reanimated/Opacity';
import Translate from './reanimated/Translate';
import Scale from './reanimated/Scale';
import HeightWidth from './reanimated/HeightWidth';
import AbsolutePosition from './reanimated/AbsolutePosition';
import ColorInterpolate from './reanimated/ColorInterpolate';
import Rotation from './reanimated/Rotation';
import Percentage from './reanimated/Percentage';
import EasingAnimation from './reanimated/EasingAnimation';
import Spring from './reanimated/Spring';
import Decay from './reanimated/Decay';
import Repeat from './reanimated/Repeat';
import CancelAnimation from './reanimated/CancelAnimation';
import Sequence from './reanimated/Sequence';
import PanGesture from './reanimated/PanGesture';
import WIthTimingPosition from './reanimated/WIthTimingPosition';
import WithDelay from './reanimated/WithDelay';

const App = () => {
  return (
    <View style={styles.container}>
      <Decay />
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
