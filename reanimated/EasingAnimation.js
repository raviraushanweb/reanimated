import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const EasingAnimation = () => {
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
    animation.value = withTiming(
      300,
      {
        duration: 2000,
        // easing : Easing.bounce
        // easing : Easing.bezier(.02,.01,1,.55)
        easing: Easing.circle,
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

export default EasingAnimation;
