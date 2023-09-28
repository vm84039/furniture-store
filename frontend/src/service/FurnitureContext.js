import React, { createContext, useContext, useState, useEffect } from 'react';
import { getFurnitureData } from '../service/APIService';

const FurnitureContext = createContext();

export const FurnitureProvider = ({ children }) => {
  const [furnitureData, setFurnitureData] = useState([]);

  useEffect(() => {
    // Fetch data using the imported function and update the state
    getFurnitureData()
      .then((data) => {
        setFurnitureData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <FurnitureContext.Provider value={furnitureData}>
      {children}
    </FurnitureContext.Provider>
  );
};

export const useFurnitureData = () => {
  return useContext(FurnitureContext);
};
