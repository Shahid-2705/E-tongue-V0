import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import theme from "../../utils/theme";

const SpectralGraph = ({ spectrumData = [], wavelengths = [] }) => {
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: wavelengths.length ? wavelengths.map(w => w.toString()) : spectrumData.map((_, i) => i + 1),
          datasets: [
            {
              data: spectrumData,
              color: () => theme.colors.accents.teal,
            },
          ],
        }}
        width={Dimensions.get("window").width - 32}
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        chartConfig={{
          backgroundColor: theme.colors.background.secondary,
          backgroundGradientFrom: theme.colors.background.secondary,
          backgroundGradientTo: theme.colors.background.secondary,
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(20, 184, 166, ${opacity})`, // teal
          labelColor: () => theme.colors.text.secondary,
          propsForDots: {
            r: "3",
            strokeWidth: "1",
            stroke: theme.colors.accents.teal,
          },
          propsForBackgroundLines: {
            stroke: theme.colors.border,
          },
        }}
        bezier
        style={{
          borderRadius: 12,
        }}
        fromZero
        verticalLabelRotation={30}
        onDataPointClick={({ index, value }) => {
          alert(`Intensity: ${value.toFixed(2)} at wavelength ${wavelengths[index]}nm`);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 12,
    backgroundColor: theme.colors.background.secondary,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default SpectralGraph;
