import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const Opacity = () => {
  const animation = useSharedValue(1);
  const animationStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(
        animation.value,
        {
          duration: 1000,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        },
        () => {
          animation.value = 1;
        },
      ),
    };
  });

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          animation.value = 0;
        }}>
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
    borderRadius: 100,
  },
});

export default Opacity;
