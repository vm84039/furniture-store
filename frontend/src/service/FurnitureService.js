import { getFurnitureData } from './APIService'; // Import your data fetching function


let furnitureData = []; // Initialize an empty array to store the data

export async function fetchFurnitureData() {
  try {
    if (furnitureData.length === 0) {
      // Fetch data only if it's not already loaded
      furnitureData = await getFurnitureData();
    }
    return furnitureData;
  } catch (error) {
    console.error('Error fetching furniture data:', error);
    throw error;
  }
}