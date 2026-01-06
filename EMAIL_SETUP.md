# Email Setup Guide

The contact form now uses a serverless function to send emails using the Resend SDK.

## Setup Instructions

1. **Get your Resend API Key**
   - Sign up for a free account at [Resend](https://resend.com)
   - Get your API key from the dashboard (it starts with `re_`)

2. **Add Environment Variable in Vercel**
   - Go to your Vercel project dashboard
   - Navigate to **Settings** → **Environment Variables**
   - Add a new environment variable:
     - **Name**: `RESEND_API_KEY`
     - **Value**: Your Resend API key (e.g., `re_e3mbG6tE_DKJGDA6WvqLSjD9uZMTKjnvi`)
     - **Environment**: Production, Preview, and Development (select all)
   - Click **Save**

3. **Deploy**
   - After adding the environment variable, redeploy your site
   - Vercel will automatically install the Resend package from `package.json`

## Security Notes

⚠️ **IMPORTANT**: Never commit your API key to Git or hardcode it in the code!
- The API key is stored securely in Vercel environment variables
- The code reads the key from `process.env.RESEND_API_KEY`
- Your API key is never exposed in the client-side code

## Testing

After setting up:
1. Deploy your changes to Vercel
2. Test the contact form on your live site
3. Check that emails are being received at `plantpal.org@gmail.com`
4. Check Vercel function logs if emails aren't being sent

## Troubleshooting

- **Emails not sending?**
  - Verify `RESEND_API_KEY` is set in Vercel environment variables
  - Check Vercel function logs for errors
  - Make sure you've redeployed after adding the environment variable

- **API key not working?**
  - Verify the key is correct (starts with `re_`)
  - Make sure the key is set for all environments (Production, Preview, Development)

- **Still having issues?**
  - Check Resend dashboard for API usage and limits
  - Verify your Resend account is active

