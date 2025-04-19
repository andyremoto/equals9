# Equals9 Website - Nuxt 3 Version

This is a Nuxt 3 implementation of the [equals9.com](https://equals9.com/) website. The site has been migrated from Webflow to Nuxt for better support for updates and multi-language capabilities.

## Features

- Fully responsive design matching the original website
- Internationalization support via Nuxt i18n module
- Content management using Nuxt Content
- Modern UI with Tailwind CSS
- Fast performance and SEO optimized

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

## Deployment

The application can be deployed to any hosting service that supports Node.js applications. Some recommended options:

- Vercel
- Netlify
- AWS Amplify
- Digital Ocean App Platform

## Document Files

Make sure to add the required document files in the `public/documents` directory:
- White-Paper.pdf
- TOKENOMICS_ENGLISH.pdf

## Internationalization

The website is set up to support multiple languages. The base language is English, but you can add additional languages by:

1. Adding a new locale in `nuxt.config.ts`
2. Creating a corresponding JSON file in the `locales` directory

## Project Structure

- `assets/` - Contains CSS and images used in the application
- `components/` - Vue components used throughout the site
- `layouts/` - Page layouts
- `pages/` - Application pages that follow the Nuxt file-based routing
- `public/` - Static files like documents and favicon
- `locales/` - Translation files for different languages

## Development Notes

- The site uses Tailwind CSS for styling
- All pages are component-based for easy maintenance
- The main sections of the original website have been preserved:
  - Home
  - Tokenomics
  - Home of Gaming
  - Contact
