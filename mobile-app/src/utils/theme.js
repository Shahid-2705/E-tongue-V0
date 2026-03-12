// Dark scientific theme for the mobile app
export const theme = {
  colors: {
    background: "#1a1a1a", // gray-900
    cardBackground: "#2c2c2c", // gray-800
    text: "#ffffff",
    primary: "#10b981", // emerald green
    accent: "#059669", // green-600
    graphVoltammogram: "#3498db", // blue
    graphSpectral: "#1abc9c", // teal
    alertError: "#e74c3c", // red
    alertWarning: "#f1c40f", // amber
    alertSuccess: "#2ecc71", // green
  },
  borderRadius: 12, // rounded-lg
  shadows: {
    card: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  },
  font: {
    system: "System",
    monospace: "Courier",
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
};
