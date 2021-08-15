import React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  withDecay,
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

const Sequence = () => {
  const x = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = x.value;
    },
    onActive: (event, context) => {
      x.value = context.startX + event.translationX;
    },

    onEnd: event => {
      x.value = withDecay({
        velocity: event.velocityX,
        clamp: [0, 250],
      });
    },
  });
  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
      ],
    };
  });
  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.box, animationStyle]} />
    </PanGestureHandler>
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
export default Sequence;
