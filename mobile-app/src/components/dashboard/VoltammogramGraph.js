import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import theme from "../../utils/theme";

const VoltammogramGraph = ({ voltageData = [], labels = [] }) => {
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: labels.length ? labels : voltageData.map((_, i) => i + 1),
          datasets: [
            {
              data: voltageData,
              color: () => theme.colors.accents.blue,
            },
          ],
        }}
        width={Dimensions.get("window").width - 32}
        height={220}
        yAxisLabel=""
        yAxisSuffix="V"
        chartConfig={{
          backgroundColor: theme.colors.background.secondary,
          backgroundGradientFrom: theme.colors.background.secondary,
          backgroundGradientTo: theme.colors.background.secondary,
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`, // blue
          labelColor: () => theme.colors.text.secondary,
          propsForDots: {
            r: "3",
            strokeWidth: "1",
            stroke: theme.colors.accents.blue,
          },
          propsForBackgroundLines: {
            stroke: theme.colors.border,
          },
        }}
        bezier
        style={{
          borderRadius: theme.card.borderRadius,
        }}
        fromZero
        verticalLabelRotation={30}
        onDataPointClick={({ index, value }) => {
          alert(`Voltage: ${value.toFixed(2)}V at point ${index + 1}`);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: theme.card.borderRadius,
    backgroundColor: theme.colors.background.secondary,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default VoltammogramGraph;
