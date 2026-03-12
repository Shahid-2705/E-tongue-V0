import axios from "axios";

const API_BASE_URL = "http://192.168.1.100:5000"; // Replace with your Node.js server IP & port

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
    if (response.data.token) {
      // Store token in AsyncStorage if needed
      return true;
    }
    return false;
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
    return response.data;
  } catch (err) {
    console.error("Register error:", err);
    throw err;
  }
};

export const logout = async () => {
  // Clear token from AsyncStorage if stored
  return true;
};
