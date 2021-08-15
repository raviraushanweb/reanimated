import React from 'react';

import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const Spring = () => {
  const animation = useSharedValue(0);

  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: animation.value,
        },
      ],
    };
  });
  const startAnimation = () => {
    animation.value = withSpring(
      250,
      {
        damping: 10,
        mass: 10,
        stiffness: 100,
      },
      () => {
        animation.value = 0;
      },
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
    width: 100,
    height: 100,
    backgroundColor: '#631d94',
  },
});

export default Spring;
