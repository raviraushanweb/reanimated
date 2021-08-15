import React from 'react';

import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  withRepeat,
  useSharedValue,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

const Repeat = () => {
  const animation = useSharedValue(0);

  const rotation = useDerivedValue(() => {
    return interpolate(animation.value, [0, 360], [0, 360]);
  });

  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: rotation.value + 'deg',
        },
      ],
    };
  });
  const startAnimation = () => {
    animation.value = withRepeat(
      withTiming(90, {
        duration: 1200,
      }),
      -1,
    );
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animationStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: '#631d94',
  },
});

export default Repeat;
