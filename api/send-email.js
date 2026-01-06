// Vercel Serverless Function to send emails
// This function sends emails using Resend SDK
// IMPORTANT: Never hardcode API keys! Always use environment variables.

import { Resend } from 'resend';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Get API key from environment variables (NEVER hardcode!)
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY environment variable is not set');
      return res.status(500).json({ 
        error: 'Email service not configured. Please contact the administrator.' 
      });
    }

    // Initialize Resend with API key from environment variable
    const resend = new Resend(resendApiKey);

    // Send email using Resend SDK
    const { data, error } = await resend.emails.send({
      from: 'PlantPal Contact Form <onboarding@resend.dev>',
      to: 'plantpal.org@gmail.com',
      replyTo: email,
      subject: `Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(500).json({ 
        error: 'Failed to send email. Please try again later.' 
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send message. Please try again later.' 
    });
  }
}

