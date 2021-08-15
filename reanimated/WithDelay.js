import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Animated, {
  withDelay,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const WithDelay = () => {
  const animation = useSharedValue(1);
  const animationStyle = useAnimatedStyle(() => {
    return {
      // opacity:withTiming(animation.value,{
      //   duration:1000
      // },()=>{
      //   animation.value=1
      // })
      opacity: animation.value,
    };
  });

  startAnimation = () => {
    animation.value = withDelay(2000, withTiming(0, {duration: 100}));
  };
  return (
    <View style={styles.container}>
      {/* <TouchableWithoutFeedback onPress={()=>{animation.value=0}}> */}
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

export default WithDelay;
