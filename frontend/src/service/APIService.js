// APIService.js

import axios from 'axios';

const GETFURNITURE_URL = 'http://localhost:8080/api/furniture/inventory';
const POSTFURNITURE_URL = 'http://localhost:8080/api/furniture/inventory';
const POSTCUSTOMER_URL = 'http://localhost:8080/api/furniture/register';
const LOGINCUSTOMER_URL = 'http://localhost:8080/api/furniture/login';



// Function to fetch furniture data (GET request)
export const getFurnitureData = async () => {
  try {
    const response = await axios.get(GETFURNITURE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Function to post furniture data (POST request)
export const postFurnitureData = async (formData) => {
  try {
    const response = await axios.post(POSTFURNITURE_URL, formData);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

// Function to post furniture data (POST request)
export const postCustomerData = async (formData) => {
  try {
    const response = await axios.post(POSTCUSTOMER_URL, formData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
export const loginCustomerData = async (formData) => {
  try {
    const response = await fetch(LOGINCUSTOMER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      // If the response status is not OK (e.g., 404, 500), return the status
      return {
        status: response.status,
      };
    }

    const data = await response.json();
    
    // Create an object containing both the data and status
    const result = {
      data: data,
      status: response.status,
    };

    return result; // Return the object with data and status
  } catch (error) {
    // Handle errors here
    console.error('Error:', error);
    throw error;
  }
};