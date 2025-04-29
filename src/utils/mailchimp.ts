
// You should replace this with your actual Mailchimp URL
const MAILCHIMP_URL = "https://gmail.us21.list-manage.com/subscribe/post?u=YOUR_U&id=YOUR_ID";

export interface SubscriberData {
  email: string;
  firstName?: string;
  lastName?: string;
}

export const subscribeToNewsletter = async (email: string, firstName?: string, lastName?: string) => {
  if (!email || !email.includes('@')) {
    throw new Error('Please provide a valid email address');
  }

  try {
    const formData = new FormData();
    formData.append('EMAIL', email);
    
    if (firstName) {
      formData.append('FNAME', firstName);
    }
    
    if (lastName) {
      formData.append('LNAME', lastName);
    }
    
    // Add subscription preferences for notifications
    formData.append('group[1234][1]', '1'); // Enable email notifications
    formData.append('b_YOUR_U_YOUR_ID', ''); // Required by Mailchimp

    const response = await fetch(MAILCHIMP_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    });

    return true;
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    throw new Error('Failed to subscribe to newsletter');
  }
};

// Function to fetch all subscribers (this would be implemented with your actual backend)
export const getSubscribers = async (): Promise<SubscriberData[]> => {
  // In a real implementation, this would fetch subscribers from your database or Mailchimp API
  // For demo purposes, returning a mock response
  console.log('Fetching subscribers...');
  return [
    { email: 'subscriber1@example.com', firstName: 'John', lastName: 'Doe' },
    { email: 'subscriber2@example.com', firstName: 'Jane', lastName: 'Smith' }
  ];
};
