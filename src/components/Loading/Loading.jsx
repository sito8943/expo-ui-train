import React from "react";

// react-native
import { StyleSheet } from "react-native";

// react-native-animated-loader
import AnimatedLoader from "react-native-animated-loader";

// animation
import loading from "../../assets/animations/loading.json";

const Loading = () => {
  const styles = StyleSheet.create({
    lottie: {
      width: 100,
      height: 100,
    },
  });

  return (
    <AnimatedLoader
      visible={visible}
      overlayColor="rgba(255,255,255,0.75)"
      source={loading}
      animationStyle={styles.lottie}
      speed={1}
    >
      <Text>Doing something...</Text>
    </AnimatedLoader>
  );
};

export default Loading;
