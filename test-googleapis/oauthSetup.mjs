import { google } from 'googleapis';

const { OAuth2 } = google.auth;

const oauth2Client = new OAuth2(
  'YOUR_CLIENT_ID',
  'YOUR_CLIENT_SECRET',
  'YOUR_REDIRECT_URI' // This must match the URI you set in your Google Developer Console
);

// Generate a URL for the user to visit and authorize your app
export const generateAuthUrl = () => {
  const scopes = [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events',
  ];

  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  });
};

// After the user visits the above URL and authorizes your app, they will be redirected to YOUR_REDIRECT_URI with a code parameter.
// You will exchange that code for tokens here.
export const getTokensWithCode = async (code) => {
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  return tokens;
};

export const oauthClient = oauth2Client;