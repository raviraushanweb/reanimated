import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

import CircularBar from './CircularBar';
import DragList from './DragList';
import Opacity from './Opacity';
import Translate from './Translate';
import Scale from './Scale';
import HeightWidth from './HeightWidth';
import AbsolutePosition from './AbsolutePosition';
import ColorInterpolate from './ColorInterpolate';
import Rotation from './Rotation';
import Percentage from './Percentage';
import EasingAnimation from './EasingAnimation';
import Spring from './Spring';
import Decay from './Decay';
import Repeat from './Repeat';
import CancelAnimation from './CancelAnimation';
import Sequence from './Sequence';
import PanGesture from './PanGesture';
import WIthTimingPosition from './WIthTimingPosition';
import WithDelay from './WithDelay';

const ReanimatedIndex = () => {
  return (
    <View style={styles.container}>
      <Opacity />
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

export default ReanimatedIndex;
