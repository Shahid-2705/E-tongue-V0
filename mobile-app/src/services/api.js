import axios from "axios";

const API_BASE_URL = "http://192.168.1.100:5000"; // Replace with your Node.js server IP & port

export const uploadDataset = async (dataset) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/dataset/upload`, dataset);
    return response.data;
  } catch (err) {
    console.error("Dataset upload error:", err);
    throw err;
  }
};

export const fetchDatasets = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/dataset`);
    return response.data;
  } catch (err) {
    console.error("Fetch datasets error:", err);
    throw err;
  }
};

export const fetchDeviceData = async (deviceId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/device/${deviceId}`);
    return response.data;
  } catch (err) {
    console.error("Fetch device data error:", err);
    throw err;
  }
};
