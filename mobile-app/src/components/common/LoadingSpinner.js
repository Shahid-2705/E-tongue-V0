import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import theme from "../../utils/theme";

const LoadingSpinner = ({ size = "large" }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={theme.colors.accents.emerald} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background.primary,
  },
});

export default LoadingSpinner;
