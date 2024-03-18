
import fetch from 'node-fetch';


const accessToken = 'EAAAl3-VEidXx_u508N9_fatn419dJHHMzYdHw8KG34vjNewbV27emfuPXxMtCYY';
const inventoryApiUrl = 'https://connect.squareupsandbox.com/v2/inventory/count';


const getInventoryItems = async () => {
  try {
    const response = await fetch(inventoryApiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const inventoryData = await response.json();
    console.log('Inventory Items:', inventoryData);
  } catch (error) {
    console.error('There was an error retrieving the inventory items:', error.message);
  }
};

// Execute the API calls
export const executeApiCalls = async () => {
  await getInventoryItems();  // Fetch inventory counts

};

executeApiCalls();
