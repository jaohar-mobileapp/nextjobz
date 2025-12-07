import axios from "axios";
import { Platform } from "react-native";

// Base URL for backend API
const baseURL = Platform.OS === "android"
  ? "http://192.168.0.81:5000/api" // your MacBook Pro IP
  : "http://localhost:5000/api";    // iOS simulator can use localhost

// Create Axios instance
const api = axios.create({
  baseURL,
});

export default api;
