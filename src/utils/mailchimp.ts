
export const subscribeToNewsletter = async (email: string) => {
  // Replace with your actual Mailchimp form action URL
  const MAILCHIMP_URL = "https://gmail.us21.list-manage.com/subscribe/post?u=YOUR_U&id=YOUR_ID";
  
  if (!email || !email.includes('@')) {
    throw new Error('Please provide a valid email address');
  }

  try {
    const formData = new FormData();
    formData.append('EMAIL', email);
    // Add subscription preferences for notifications
    formData.append('group[1234][1]', '1'); // Enable email notifications
    formData.append('FNAME', ''); // Optional: First name field
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
