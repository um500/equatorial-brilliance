// Google Sheets API Integration
// Sends form data to Google Apps Script Web App

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxucPtwYVDRkj7ksuCet4XEbP8KLqn-7G9f1vRVdcwCosQ0z3m9ffOZ7xUixW6miOW1/exec';

export interface ContactFormData {
  name: string;
  number: string;
  email: string;
  address: string;
  service: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

/**
 * Submits contact form data to Google Sheets via Apps Script
 */
export const submitContactForm = async (data: ContactFormData): Promise<ApiResponse> => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // With no-cors mode, we can't read the response
    // So we assume success if no error was thrown
    return {
      success: true,
      message: 'Your message has been sent successfully! We will get back to you soon.',
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again or contact us directly.',
    };
  }
};
