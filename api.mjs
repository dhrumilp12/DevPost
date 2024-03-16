
import fetch from 'node-fetch';


const accessToken = 'EAAAl3-VEidXx_u508N9_fatn419dJHHMzYdHw8KG34vjNewbV27emfuPXxMtCYY';
const inventoryApiUrl = 'https://connect.squareupsandbox.com/v2/inventory/count';
const bookingsApiUrl = 'https://connect.squareupsandbox.com/v2/bookings';

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

const listBookings = async () => {
  try {
    const response = await fetch(bookingsApiUrl, {
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

    const bookingsData = await response.json();
    console.log('Bookings:', bookingsData);
    bookingsData.bookings.forEach(booking => {
      console.log(`Booking ID: ${booking.id}, Status: ${booking.status}, Start: ${booking.start_at}, Location ID: ${booking.location_id}`);
    });
  } catch (error) {
    console.error('There was an error retrieving the bookings:', error.message);
  }
};

// Execute the API calls
const executeApiCalls = async () => {
  await getInventoryItems();  // Fetch inventory counts
  await listBookings();       // List bookings
};

executeApiCalls();
