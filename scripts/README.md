# Scripts for Equals9 Nuxt Website

This directory contains utility scripts for the Equals9 Nuxt website project.

## Image Downloader

The `image-downloader.js` script helps you download images from the original equals9.com website for use in our Nuxt application.

### How to Use

1. First, install the required dependencies:

```bash
npm install jsdom
```

2. Run the script:

```bash
node scripts/image-downloader.js
```

The script will:
- Connect to equals9.com and its main pages
- Extract all images from each page
- Download them to the `public/images/downloaded` directory
- Organize images by page they were found on

### After Downloading

Once you've downloaded the images, you can:

1. Review them in the `public/images/downloaded` directory
2. Move them to appropriate locations in the `public/images` directory
3. Update the image paths in your components to use these images

## Image Organization

The recommended organization is:

- `public/images/logo/` - Logo files
- `public/images/hero/` - Hero section images
- `public/images/tokenomics/` - Tokenomics related images
- `public/images/gaming/` - Home of Gaming and EqualsSports images
- `public/images/social/` - Social media icons
- `public/images/timeline/` - Timeline event images

## Note

Be mindful of copyright and usage rights when using images from the original website. This script is provided only for the purpose of migrating the existing content to the new Nuxt implementation.
