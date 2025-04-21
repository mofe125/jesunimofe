
export const subscribeToNewsletter = async (email: string) => {
  const MAILCHIMP_URL = "https://gmail.us21.list-manage.com/subscribe/post?u=YOUR_U&id=YOUR_ID";
  
  try {
    const formData = new FormData();
    formData.append('EMAIL', email);
    formData.append('email', 'jhenryadelegan@gmail.com'); // Added the new email

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
