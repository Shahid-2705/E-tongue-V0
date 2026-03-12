import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import theme from "../utils/theme";
import { login } from "../services/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const success = await login(email, password);
      if (success) navigation.replace("DashboardScreen");
      else Alert.alert("Login Failed", "Invalid credentials");
    } catch (err) {
      Alert.alert("Error", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>E-Tongue Herbal Monitor</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={theme.colors.text.secondary}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={theme.colors.text.secondary}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" color={theme.colors.accents.emerald} onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
    justifyContent: "center",
    padding: 24,
  },
  header: {
    ...theme.typography.header,
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    backgroundColor: theme.colors.background.secondary,
    color: theme.colors.text.primary,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
});

export default LoginScreen;
