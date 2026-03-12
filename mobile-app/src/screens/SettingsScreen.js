import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, Button, Alert } from "react-native";
import theme from "../utils/theme";

const SettingsScreen = () => {
  const [labMode, setLabMode] = useState(true);

  const toggleLabMode = () => setLabMode(!labMode);

  const handleSignOut = () => {
    // Implement your sign out logic
    Alert.alert("Signed Out", "You have been logged out");
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Lab Mode</Text>
        <Switch
          value={labMode}
          onValueChange={toggleLabMode}
          trackColor={{ false: theme.colors.border, true: theme.colors.accents.emerald }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign Out" color={theme.colors.alerts.red} onPress={handleSignOut} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  label: {
    ...theme.typography.body,
    color: theme.colors.text.primary,
  },
  buttonContainer: {
    marginTop: 24,
  },
});

export default SettingsScreen;
