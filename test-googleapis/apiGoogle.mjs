import { google } from 'googleapis';

const { OAuth2 } = google.auth;

// Replace these with your Google API credentials
const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';
const refreshToken = 'YOUR_REFRESH_TOKEN';

const oauth2Client = new OAuth2(clientId, clientSecret);
oauth2Client.setCredentials({ refresh_token: refreshToken });

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

export const listEvents = async () => {
  try {
    const res = await calendar.events.list({
      calendarId: 'primary', // Use 'primary' for the primary calendar or specify a different calendar ID
      timeMin: (new Date()).toISOString(), // List events starting from now
      maxResults: 10, // Adjust as needed
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = res.data.items;
    if (events.length) {
      console.log('Upcoming events:');
      events.forEach((event) => {
        const start = event.start.dateTime || event.start.date;
        console.log(`${start} - ${event.summary}`);
      });
    } else {
      console.log('No upcoming events found.');
    }
  } catch (error) {
    console.error('Error listing events:', error.message);
  }
};

listEvents();
