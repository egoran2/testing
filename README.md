# 🌍 EU Residency Pro - Multilingual Landing Page

A high-converting multilingual landing page for EU residency permit services targeting Russian-speaking IT professionals and partners.

## 🎯 Overview

This project implements a complete Jamstack solution for a company helping Russian-speaking IT professionals obtain EU residency permits (focusing on Czechia). The site features dual audiences: individual clients and business partners.

## ✨ Features

### 🌐 Multilingual Support
- **English** (`/en`) - International audience
- **Russian** (`/ru`) - Primary target audience
- **Czech** (`/cs`) - Local market focus
- Full internationalization with next-intl
- Proper locale detection and routing

### 🎨 Design & UX
- **Blue-gold color palette** (trust + premium)
- **AIDA framework** implementation
- **Mobile-first** responsive design
- **Micro-animations** with Framer Motion
- **Clean, professional** layout

### 📄 Page Structure
- **Landing Page**: Hero, benefits, process, testimonials, quiz CTA
- **Partners Page**: White-label and referral programs
- **Articles Page**: SEO-optimized content hub
- **Quiz Page**: Interactive eligibility assessment
- **Contact Page**: Lead generation forms

### 🔧 Technical Features
- **Jamstack Architecture**: Next.js + Static Generation
- **Headless CMS**: Netlify CMS for content management
- **SEO Optimized**: Meta tags, structured data, performance
- **Interactive Elements**: Quiz, forms, CTAs
- **Trust Elements**: Legal info, testimonials, reviews

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌍 Available Routes

### Client Routes
- `/en` - English landing page
- `/ru` - Russian landing page (Русский)
- `/cs` - Czech landing page (Čeština)

### Additional Pages
- `/[locale]/partners` - Partner program
- `/[locale]/articles` - Articles hub
- `/[locale]/quiz` - Eligibility quiz
- `/[locale]/contact` - Contact form

### Admin
- `/admin` - Netlify CMS interface

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **CMS**: Netlify CMS
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/          # Localized routes
│   │   ├── page.tsx       # Landing page
│   │   ├── partners/      # Partner program
│   │   ├── articles/      # Articles hub
│   │   ├── quiz/          # Eligibility quiz
│   │   └── contact/       # Contact form
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
├── i18n/                  # Internationalization config
├── lib/                   # Utilities
└── middleware.ts          # Route middleware

messages/                  # Translation files
├── en.json               # English translations
├── ru.json               # Russian translations
└── cs.json               # Czech translations

public/
├── admin/                # Netlify CMS
└── *.svg                 # Static assets
```

## 🎯 Conversion Strategy

### AIDA Implementation
1. **Attention**: Compelling multilingual headlines
2. **Interest**: Clear benefits for IT professionals
3. **Desire**: Success stories and trust elements
4. **Action**: Strategic CTAs and lead magnets

### Trust Building
- Legal compliance messaging
- Professional testimonials
- Clear process explanation
- Transparent pricing and timelines

## 🔧 Configuration

### Environment Variables
```env
# Add these for production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NETLIFY_SITE_ID=your-site-id
```

### Netlify CMS Setup
1. Deploy to Netlify
2. Enable Netlify Identity
3. Configure authentication in `/admin`
4. Invite content editors

## 📊 Performance

- **Static Generation**: Fast loading times
- **Mobile Optimized**: Responsive design
- **SEO Ready**: Meta tags and structured data
- **Accessibility**: WCAG compliant

## 🚀 Deployment

### Recommended Platforms
- **Netlify** (recommended for CMS integration)
- **Vercel** (excellent Next.js support)
- **GitHub Pages** (with GitHub Actions)

### Build Commands
```bash
# Build command
npm run build

# Output directory
out/
```

## 🎨 Customization

### Colors (Tailwind Config)
```javascript
colors: {
  primary: {
    50: '#eff6ff',   // Light blue
    500: '#3b82f6',  // Main blue
    900: '#1e3a8a'   // Dark blue
  },
  accent: {
    500: '#f59e0b',  // Gold
    600: '#d97706'   // Dark gold
  }
}
```

### Fonts
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

## 📈 Analytics & Tracking

Ready for integration with:
- Google Analytics 4
- Plausible Analytics
- Facebook Pixel
- LinkedIn Insight Tag

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test all locales
5. Submit pull request

## 📄 License

MIT License - see LICENSE file for details.

---

**Built with ❤️ for the Russian-speaking IT community seeking EU residency**