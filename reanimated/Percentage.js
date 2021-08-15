import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useSharedValue,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

const Percentage = () => {
  const animation = useSharedValue(0);

  const width = useDerivedValue(() => {
    return interpolate(animation.value, [0, 1], [20, 80]);
  });

  const height = useDerivedValue(() => {
    return interpolate(animation.value, [0, 1], [15, 65]);
  });

  const animationStyle = useAnimatedStyle(() => {
    return {
      width: width.value + '%',
      height: height.value + '%',
    };
  });

  const startAnimation = () => {
    animation.value = withTiming(1, {
      duration: 2000,
    });
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

export default Percentage;
