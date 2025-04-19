// organize-images.js
// A script to organize the downloaded images into the structure expected by our images plugin

import fs from 'fs';
import path from 'path';

const rootDir = '/Users/andersonvasconcelos/Desktop/Nuxt/CascadeProjects/windsurf-project/public/images';
const downloadedDir = path.join(rootDir, 'downloaded');

// Define target directories
const dirs = {
  logo: path.join(rootDir, 'logo'),
  hero: path.join(rootDir, 'hero'),
  features: path.join(rootDir, 'features'),
  icons: path.join(rootDir, 'icons'),
  backgrounds: path.join(rootDir, 'backgrounds'),
  gaming: path.join(rootDir, 'gaming'),
  tokenomics: path.join(rootDir, 'tokenomics'),
  social: path.join(rootDir, 'social'),
  timeline: path.join(rootDir, 'timeline')
};

// Ensure all directories exist
Object.values(dirs).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Helper to copy a file to a target directory
function copyFile(source, targetDir, newName = null) {
  const fileName = newName || path.basename(source);
  const targetPath = path.join(targetDir, fileName);
  
  try {
    fs.copyFileSync(source, targetPath);
    console.log(`Copied: ${source} -> ${targetPath}`);
    return targetPath;
  } catch (err) {
    console.error(`Error copying ${source}: ${err.message}`);
    return null;
  }
}

// Helper to find images by partial name
function findImagesByPartialName(directory, partialName) {
  const files = fs.readdirSync(directory);
  return files.filter(file => 
    file.toLowerCase().includes(partialName.toLowerCase()) && 
    ['.jpg', '.jpeg', '.png', '.svg', '.gif', '.webp'].includes(path.extname(file).toLowerCase())
  ).map(file => path.join(directory, file));
}

// Process home page images
const homeDir = path.join(downloadedDir, 'home');
if (fs.existsSync(homeDir)) {
  // Logo
  const logoImages = findImagesByPartialName(homeDir, 'logo');
  if (logoImages.length > 0) {
    copyFile(logoImages[0], dirs.logo, 'equals9-logo.svg');
  }
  
  // Hero images
  const heroImages = findImagesByPartialName(homeDir, 'hero');
  heroImages.forEach((img, i) => {
    copyFile(img, dirs.hero, `home-hero-${i + 1}${path.extname(img)}`);
  });
  
  // Feature images
  const featureImages = findImagesByPartialName(homeDir, 'feature');
  featureImages.forEach((img, i) => {
    copyFile(img, dirs.features, `feature-${i + 1}${path.extname(img)}`);
  });
  
  // Background images
  const bgImages = findImagesByPartialName(homeDir, 'bg');
  bgImages.forEach((img, i) => {
    copyFile(img, dirs.backgrounds, `background-${i + 1}${path.extname(img)}`);
  });
  
  // Social icons
  const socialIcons = [
    ...findImagesByPartialName(homeDir, 'twitter'),
    ...findImagesByPartialName(homeDir, 'telegram'),
    ...findImagesByPartialName(homeDir, 'discord'),
    ...findImagesByPartialName(homeDir, 'youtube'),
    ...findImagesByPartialName(homeDir, 'instagram'),
    ...findImagesByPartialName(homeDir, 'email')
  ];
  
  socialIcons.forEach(icon => {
    const socialType = path.basename(icon).split('.')[0].toLowerCase();
    if (socialType.includes('twitter')) {
      copyFile(icon, dirs.icons, 'twitter.svg');
    } else if (socialType.includes('telegram')) {
      copyFile(icon, dirs.icons, 'telegram.svg');
    } else if (socialType.includes('discord')) {
      copyFile(icon, dirs.icons, 'discord.svg');
    } else if (socialType.includes('youtube')) {
      copyFile(icon, dirs.icons, 'youtube.svg');
    } else if (socialType.includes('instagram')) {
      copyFile(icon, dirs.icons, 'instagram.svg');
    } else if (socialType.includes('email')) {
      copyFile(icon, dirs.icons, 'email.svg');
    }
  });
}

// Process gaming page images
const gamingDir = path.join(downloadedDir, 'home-of-gaming');
if (fs.existsSync(gamingDir)) {
  const gamingImages = fs.readdirSync(gamingDir)
    .filter(file => ['.jpg', '.jpeg', '.png', '.svg', '.gif', '.webp'].includes(path.extname(file).toLowerCase()))
    .map(file => path.join(gamingDir, file));
  
  // Copy gaming images
  gamingImages.forEach((img, i) => {
    if (i === 0) {
      copyFile(img, dirs.gaming, 'platform.jpg');
    } else {
      copyFile(img, dirs.gaming, `game${i}.jpg`);
    }
  });
}

// Process tokenomics page images
const tokenomicsDir = path.join(downloadedDir, 'tokenomics');
if (fs.existsSync(tokenomicsDir)) {
  const tokenomicsImages = fs.readdirSync(tokenomicsDir)
    .filter(file => ['.jpg', '.jpeg', '.png', '.svg', '.gif', '.webp'].includes(path.extname(file).toLowerCase()))
    .map(file => path.join(tokenomicsDir, file));
  
  // Copy tokenomics images
  tokenomicsImages.forEach((img, i) => {
    if (i === 0) {
      copyFile(img, dirs.tokenomics, 'chart.jpg');
    } else if (i === 1) {
      copyFile(img, dirs.tokenomics, 'payment.jpg');
    } else if (i === 2) {
      copyFile(img, dirs.tokenomics, 'staking.jpg');
    } else if (i === 3) {
      copyFile(img, dirs.tokenomics, 'governance.jpg');
    } else {
      copyFile(img, dirs.tokenomics, `tokenomics-${i}.jpg`);
    }
  });
}

// Fallback - copy some basic images to ensure we have something to show
// If we don't have logo, use a feature image as the token
const featureDir = path.join(rootDir, 'features');
if (fs.existsSync(featureDir)) {
  const features = fs.readdirSync(featureDir)
    .filter(file => ['.jpg', '.jpeg', '.png', '.svg', '.gif', '.webp'].includes(path.extname(file).toLowerCase()))
    .map(file => path.join(featureDir, file));
  
  if (features.length > 0) {
    // If we don't have a token image yet, use the first feature
    if (!fs.existsSync(path.join(dirs.logo, 'equals9-token.jpg'))) {
      copyFile(features[0], dirs.logo, 'equals9-token.jpg');
    }
  }
}

console.log('Image organization completed!');
