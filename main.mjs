// main.mjs
import { generateAuthUrl, getTokensWithCode } from './test-googleapis/oauthSetup.mjs';
import { listEvents } from './test-googleapis/apiGoogle.mjs';
import { executeApiCalls } from './apiSquare.mjs';

// This function is an example of how you might handle the OAuth 2.0 authorization flow.
// In a real application, you'd probably have some web server handling redirects.
const authorizeApp = async () => {
  console.log('Please authorize the application.');
  const authUrl = getAuthUrl();
  console.log(`Visit this URL to authorize: ${authUrl}`);

  // After visiting the URL, the user will get an authorization code. In a real scenario,
  // the code would be part of the query parameters in a redirect URL.
  // For demonstration, you can paste the code below as if you've got it from the redirect.
  const code = 'AUTHORIZATION_CODE_FROM_GOOGLE'; // Replace with the actual code

  try {
    const tokens = await getTokensWithCode(code);
    console.log('Successfully authorized the application!', tokens);
  } catch (error) {
    console.error('Error during authorization:', error);
  }
};

// List the events from the Google Calendar
const showGoogleCalendarEvents = async () => {
  try {
    const events = await listEvents();
    console.log('Google Calendar Events:', events);
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

// Execute the functions you've defined. This is just an example sequence.
const main = async () => {
  // Uncomment the next line to initiate the OAuth flow
  // await authorizeApp();
  
  // After successful authorization, you can list Google Calendar events
  // await showGoogleCalendarEvents();

  // Run Square API calls
  await executeApiCalls();
};

main();
