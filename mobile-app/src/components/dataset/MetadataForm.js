import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import theme from "../../utils/theme";

const MetadataForm = ({ onSubmit }) => {
  const [herbName, setHerbName] = useState("");
  const [batchId, setBatchId] = useState("");
  const [operatorId, setOperatorId] = useState("");
  const [solvent, setSolvent] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    const metadata = { herbName, batchId, operatorId, solvent, location, notes };
    onSubmit(metadata);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Enter Sample Metadata</Text>
      <TextInput
        style={styles.input}
        placeholder="Herb Name"
        placeholderTextColor={theme.colors.text.secondary}
        value={herbName}
        onChangeText={setHerbName}
      />
      <TextInput
        style={styles.input}
        placeholder="Batch ID"
        placeholderTextColor={theme.colors.text.secondary}
        value={batchId}
        onChangeText={setBatchId}
      />
      <TextInput
        style={styles.input}
        placeholder="Operator ID"
        placeholderTextColor={theme.colors.text.secondary}
        value={operatorId}
        onChangeText={setOperatorId}
      />
      <TextInput
        style={styles.input}
        placeholder="Solvent"
        placeholderTextColor={theme.colors.text.secondary}
        value={solvent}
        onChangeText={setSolvent}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        placeholderTextColor={theme.colors.text.secondary}
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Notes"
        placeholderTextColor={theme.colors.text.secondary}
        value={notes}
        onChangeText={setNotes}
        multiline
      />
      <View style={styles.buttonContainer}>
        <Button title="Save Metadata" color={theme.colors.accents.emerald} onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background.secondary,
    padding: 16,
    margin: 16,
    borderRadius: theme.card.borderRadius,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    ...theme.typography.header,
    marginBottom: 12,
  },
  input: {
    backgroundColor: theme.colors.background.primary,
    color: theme.colors.text.primary,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
  buttonContainer: {
    marginTop: 12,
  },
});

export default MetadataForm;
