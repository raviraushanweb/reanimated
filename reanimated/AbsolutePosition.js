import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  View,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const AbsolutePosition = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const animation = useSharedValue({top: 0, left: 0});

  const animationStyle = useAnimatedStyle(() => {
    return {
      top: withTiming(animation.value.top, {
        duration: 1000,
      }),
      left: withTiming(animation.value.left, {
        duration: 800,
      }),
    };
  });
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          animation.value = {top: height - 150, left: width - 150};
        }}>
        <Animated.View style={[styles.box, animationStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  ontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    position: 'absolute',
    width: 150,
    height: 150,
    backgroundColor: '#631d94',
  },
});

export default AbsolutePosition;
