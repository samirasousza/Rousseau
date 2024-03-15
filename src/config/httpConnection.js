import axios from 'axios';

// padrão Singleton

export const apiConnection = axios.create({
  baseURL: 'http://10.20.50.119:5000', // Set your base URL
  timeout: 5000, // Set a timeout for requests
  // You can add other configuration options here
});