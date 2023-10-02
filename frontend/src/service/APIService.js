// APIService.js

import axios from 'axios';

const GETFURNITURE_URL = 'http://localhost:8080/api/furniture/inventory';
const POSTFURNITURE_URL = 'http://localhost:8080/api/furniture/inventory';
const POSTCUSTOMER_URL = 'http://localhost:8080/api/furniture/register';
const LOGINCUSTOMER_URL = 'http://localhost:8080/api/furniture/login';
const POSTORDER_URL = 'http://localhost:8080/api/orders/order';
const GETALLORDERSFORUSER_URL = 'http://localhost:8080/api/orders';



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
// Function to post furniture data (POST request)
export const postOrder = async (formData) => {
  try {
    const response = await axios.post(POSTORDER_URL, formData);
    if (response.status === 201) {
      // Order created successfully
      return { success: true, message: 'Order created successfully' };
    } else {
      // Handle other status codes if needed
      return { success: false, message: 'Error creating order' };
    }
  } catch (error) {
    // Handle API errors
    console.error('Error creating order:', error);
    return { success: false, message: 'Error creating order' };
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
export const getOrdersForUser = async (userId) => {
  try {
    const response = await axios.get(`${GETALLORDERSFORUSER_URL}/user/${userId}`);
    return response.data;
  } catch (error) {
    // Handle error (e.g., show an error message or log the error)
    console.error('Error fetching orders for user:', error);
    throw error;
  }
};