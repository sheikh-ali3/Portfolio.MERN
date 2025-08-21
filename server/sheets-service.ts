import { google } from 'googleapis';

const SPREADSHEET_ID = '1rmdBVa-6CO582KXelc8I1bzmR0bcSkcGZR5zKDrBDFo';

// Initialize Google Sheets API
let sheets: any = null;
let isGoogleSheetsEnabled = false;

try {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    
    sheets = google.sheets({ version: 'v4', auth });
    isGoogleSheetsEnabled = true;
    console.log('Google Sheets integration enabled');
  } else {
    console.log('Google Sheets credentials not found. Contact form will work without spreadsheet integration.');
  }
} catch (error) {
  console.error('Error initializing Google Sheets:', error);
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  timestamp?: string;
}

export async function appendToSheet(data: ContactFormData): Promise<void> {
  if (!isGoogleSheetsEnabled || !sheets) {
    console.log('Google Sheets not enabled, skipping spreadsheet save');
    return;
  }

  try {
    const timestamp = new Date().toISOString();
    
    const values = [
      [
        timestamp,
        data.name,
        data.email,
        data.message
      ]
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:D', // Assumes columns: Timestamp, Name, Email, Message
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values,
      },
    });

    console.log('Contact form response added to spreadsheet');
  } catch (error) {
    console.error('Error adding to spreadsheet:', error);
    throw new Error('Failed to save to spreadsheet');
  }
}

// Initialize spreadsheet with headers if needed
export async function initializeSheet(): Promise<void> {
  if (!isGoogleSheetsEnabled || !sheets) {
    console.log('Google Sheets not enabled, skipping initialization');
    return;
  }

  try {
    // Check if the sheet has headers
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!1:1',
    });

    // If no data or first row is empty, add headers
    if (!response.data.values || response.data.values.length === 0 || !response.data.values[0][0]) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Sheet1!1:1',
        valueInputOption: 'RAW',
        requestBody: {
          values: [['Timestamp', 'Name', 'Email', 'Message']],
        },
      });
      console.log('Spreadsheet headers initialized');
    }
  } catch (error) {
    console.error('Error initializing spreadsheet:', error);
    // Don't throw here - we want the app to continue working even if sheet initialization fails
  }
}