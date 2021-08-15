import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const WIthTimingPosition = () => {
  const animation = useSharedValue(1);

  const startAnimation = () => {
    animation.value = withTiming(0, {
      duration: 2000,
    });
  };
  const animationStyle = useAnimatedStyle(() => {
    return {
      opacity: animation.value,
      // opacity:withTiming(animation.value,{
      //   duration:2000
      // })
    };
  });
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={
          startAnimation
          // animation.value = withTiming(0,{
          //   duration:2000
          // })
        }>
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

export default WIthTimingPosition;
