import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import theme from "../../utils/theme";

const DataPreview = ({ voltageData = [], spectrumData = [], ph, moisture }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Live Data Preview</Text>
      <ScrollView horizontal style={styles.scrollContainer}>
        <View style={styles.dataBlock}>
          <Text style={styles.label}>Voltage Data (V):</Text>
          <Text style={styles.value}>{voltageData.join(", ")}</Text>
        </View>
        <View style={styles.dataBlock}>
          <Text style={styles.label}>Spectrum Data:</Text>
          <Text style={styles.value}>{spectrumData.join(", ")}</Text>
        </View>
        <View style={styles.dataBlock}>
          <Text style={styles.label}>pH:</Text>
          <Text style={styles.value}>{ph}</Text>
        </View>
        <View style={styles.dataBlock}>
          <Text style={styles.label}>Moisture (%):</Text>
          <Text style={styles.value}>{moisture}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background.secondary,
    padding: 12,
    margin: 16,
    borderRadius: theme.card.borderRadius,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    ...theme.typography.header,
    marginBottom: 8,
  },
  scrollContainer: {
    flexDirection: "row",
  },
  dataBlock: {
    marginRight: 24,
  },
  label: {
    ...theme.typography.label,
  },
  value: {
    ...theme.typography.body,
  },
});

export default DataPreview;
