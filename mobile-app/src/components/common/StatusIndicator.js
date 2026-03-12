import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../../utils/theme";

const StatusIndicator = ({ label, status }) => {
  let bgColor;
  switch (status) {
    case "ok":
      bgColor = theme.colors.accents.emerald;
      break;
    case "warning":
      bgColor = theme.colors.accents.alertAmber;
      break;
    case "error":
      bgColor = theme.colors.accents.alertRed;
      break;
    default:
      bgColor = theme.colors.border;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.dot, { backgroundColor: bgColor }]} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  label: {
    ...theme.typography.body,
    color: theme.colors.text.primary,
  },
});

export default StatusIndicator;
