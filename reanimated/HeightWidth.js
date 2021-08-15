import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const HeightWidth = () => {
  const animation = useSharedValue({width: 200, height: 200});

  const animationStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(
        animation.value.width,
        {
          duration: 600,
        },
        () => {
          animation.value = {width: 200, height: 200};
        },
      ),
      height: withTiming(animation.value.height, {
        duration: 600,
      }),
    };
  });
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          animation.value = {width: 300, height: 450};
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
    // width: 200,
    // height: 200,
    backgroundColor: '#631d94',
  },
});
export default HeightWidth;
