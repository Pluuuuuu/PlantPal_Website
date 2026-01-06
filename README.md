# PlantPal Website

A clean, modern, multi-page website for **PlantPal** - an AI-powered mobile app for beginner gardeners.

## 🌱 About PlantPal

PlantPal is an AI-powered mobile app designed for beginner and urban gardeners who want to grow flowers, vegetables, and fruits in small spaces (balconies, rooftops, tiny backyards). The app offers:

- **Per-plant journal** - Track notes, photos, and care logs
- **CropVision AI** - AI-powered photo diagnosis for plant issues
- **Personalized care plans** - Customized watering & fertilizing schedules
- **Smart reminders** - Never miss a care task
- **Gamification** - Earn points and rewards
- **Marketplace** - Browse seeds and supplies from partner vendors
- **Community feed** - Connect with fellow gardeners

## 📁 Project Structure

```
/project-root
  /html
    index.html          # Home page
    about.html          # About Us page
    services.html       # Services page
    contact.html        # Contact Us page (with form submission)
  /css
    header.css          # Shared header styles
    main.css            # Main stylesheet
    styles.css          # Additional styles
  /api
    send-email.js       # Vercel serverless function for contact form
  /assets
    /images
      logopp.png        # PlantPal logo
      [other images]    # All website images
  package.json          # Dependencies (Resend SDK)
  vercel.json           # Vercel deployment configuration
  EMAIL_SETUP.md        # Email service setup instructions
```

## 🎨 Design Features

- **HTML + CSS + JavaScript** - Clean frontend with serverless backend
- **Responsive Design** - Mobile-first approach
- **Modern UI** - Clean, minimalist design with smooth transitions
- **Color Palette**:
  - Primary: `#0F6761`
  - Secondary: `#208b3a`
  - Accent: `#bbd189`
  - Soft teal: `#b7d9d7` & `#b0cdcb`
  - Background: `#e8ebea`

## 🚀 Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Pluuuuuu/PlantPal_Website.git
   cd PlantPal_Website
   ```

2. Install dependencies (for email functionality):
   ```bash
   npm install
   ```

3. Open any HTML file in your browser:
   - Start with `html/index.html` for the home page
   - All pages are linked via navigation

### Deployment

This website is designed to be deployed on **Vercel**:

1. Push your code to GitHub
2. Import the project in Vercel
3. Set up environment variables (see [EMAIL_SETUP.md](./EMAIL_SETUP.md))
4. Deploy!

The `vercel.json` file configures URL rewrites for clean paths.

## 📄 Pages

- **Home** (`html/index.html`) - Hero section, value proposition, awards, feature table
- **About Us** (`html/about.html`) - Mission, target audience, core values
- **Services** (`html/services.html`) - All PlantPal features and how it works
- **Contact Us** (`html/contact.html`) - Contact form with API integration

## 📧 Contact Form

The contact form uses a serverless API endpoint (`/api/send-email`) powered by the Resend SDK to send emails securely. 

**Setup Instructions**: See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed setup instructions.

**Key Features**:
- Client-side validation
- Server-side email sending via Resend API
- Success/error message handling
- Secure API key management via environment variables

## 🏆 Awards & Recognition

- **Idea Lab** - Park Innovation Award - $1,500 funding
- **Berry Tech Award** - Clyntech Hackathon - $750 prize
- **Best Innovative Product** - Park Innovation

## 🔗 Links

- **Instagram**: [@plantpal.lb](https://www.instagram.com/plantpal.lb?igsh=MTRmanBpbHIweGhqMw==)
- **LinkedIn**: [PlantPal Org](https://www.linkedin.com/in/plantpal-org/)
- **Email**: plantpal.org@gmail.com

## 📝 Technical Notes

- All images should be placed in `/assets/images/`
- Logo file: `logopp.png`
- Contact form uses serverless API endpoint (not `mailto:`)
- All icons are SVG (no external dependencies)
- Environment variable `RESEND_API_KEY` required for email functionality
- See `EMAIL_SETUP.md` for email service configuration

## 👥 Team

Built by a team of 10 with backgrounds in:
- Software Development
- Agricultural Engineering
- AI
- Cybersecurity
- Business

## 📧 Contact

For questions or feedback, contact us at: **plantpal.org@gmail.com**

---

© 2025 PlantPal. All rights reserved.

