import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import SensorCards from "../components/dashboard/SensorCards";
import VoltammogramGraph from "../components/dashboard/VoltammogramGraph";
import SpectralGraph from "../components/dashboard/SpectralGraph";
import theme from "../utils/theme";
import { useESP32Data } from "../hooks/useESP32Data";

const DashboardScreen = () => {
  const { ph, moisture, voltageData, spectrumData, wavelengths } = useESP32Data();

  return (
    <ScrollView style={styles.container}>
      <SensorCards ph={ph} moisture={moisture} />
      <VoltammogramGraph voltageData={voltageData} />
      <SpectralGraph spectrumData={spectrumData} wavelengths={wavelengths} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
});

export default DashboardScreen;
