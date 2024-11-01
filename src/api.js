// src/api.js
import axios from "axios";

// Konfigurasi base URL API
const API = axios.create({
  baseURL: "https://api-doc-tht.nutech-integrasi.com/",
});

// Fungsi untuk setiap endpoint
export const registerUser = (userData) => API.post("/registration", userData);
export const loginUser = (userData) => API.post("/login", userData);
export const getUserProfile = (token) =>
  API.get("/profile", { headers: { Authorization: `Bearer ${token}` } });
export const updateUserProfile = (token, profileData) =>
  API.put("/profile/update", profileData, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const topUpBalance = (amount) =>
  API.post("/topup", { amount });
export const makePayment = (paymentData) =>
  API.post("/transaction", paymentData);
export const getTransactionHistory = (offset = 0, limit = 5) =>
  API.get(`/history?offset=${offset}&limit=${limit}`);
