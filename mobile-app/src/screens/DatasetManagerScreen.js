import React, { useState } from "react";
import { ScrollView, View, Button, StyleSheet, Alert } from "react-native";
import DataPreview from "../components/dataset/DataPreview";
import MetadataForm from "../components/dataset/MetadataForm";
import theme from "../utils/theme";
import { uploadDataset } from "../services/api";
import { useESP32Data } from "../hooks/useESP32Data";

const DatasetManagerScreen = () => {
  const { ph, moisture, voltageData, spectrumData, wavelengths } = useESP32Data();
  const [metadata, setMetadata] = useState({});

  const handleMetadataSubmit = async (data) => {
    setMetadata(data);
    const payload = {
      ...data,
      ph,
      moisture,
      voltageData,
      spectrumData,
      wavelengths,
    };
    try {
      await uploadDataset(payload);
      Alert.alert("Success", "Dataset uploaded successfully");
    } catch (err) {
      Alert.alert("Error", "Failed to upload dataset");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <DataPreview voltageData={voltageData} spectrumData={spectrumData} ph={ph} moisture={moisture} />
      <MetadataForm onSubmit={handleMetadataSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
});

export default DatasetManagerScreen;
