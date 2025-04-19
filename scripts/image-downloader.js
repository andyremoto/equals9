// Image Downloader Script for Equals9
// This script can be used to download images from the original equals9.com website

import fs from 'fs';
import path from 'path';
import https from 'https';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';

// Get current directory (equivalent to __dirname in CommonJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create directory if it doesn't exist
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    console.log(`Created directory: ${directory}`);
  }
}

// Download image from URL
function downloadImage(url, targetPath) {
  return new Promise((resolve, reject) => {
    // Skip if file already exists
    if (fs.existsSync(targetPath)) {
      console.log(`File already exists: ${targetPath}`);
      return resolve();
    }

    // Make sure the directory exists
    ensureDirectoryExists(path.dirname(targetPath));

    // Create file stream
    const file = fs.createWriteStream(targetPath);
    
    // Download the image
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${url} (Status: ${response.statusCode})`));
        return;
      }

      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${url} to ${targetPath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(targetPath, () => {}); // Delete the file if there was an error
      reject(err);
    });
  });
}

// Extract images from HTML
async function extractImagesFromUrl(url, outputDir) {
  try {
    // Get HTML content
    const html = await new Promise((resolve, reject) => {
      https.get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to fetch page: ${url} (Status: ${response.statusCode})`));
          return;
        }

        let data = '';
        response.on('data', (chunk) => {
          data += chunk;
        });
        response.on('end', () => {
          resolve(data);
        });
      }).on('error', reject);
    });

    // Parse HTML
    const dom = new JSDOM(html, { url, resources: 'usable' });
    const document = dom.window.document;
    
    // Find all images from img tags
    const images = document.querySelectorAll('img');
    console.log(`Found ${images.length} img elements on ${url}`);
    
    // Collection to store all image URLs
    const imageUrls = new Set();
    
    // Process image elements
    images.forEach((img) => {
      const src = img.getAttribute('src');
      if (src) {
        // Create full URL if it's a relative path
        const fullUrl = src.startsWith('http') ? src : new URL(src, url).href;
        imageUrls.add(fullUrl);
      }
      
      // Also check srcset attribute
      const srcset = img.getAttribute('srcset');
      if (srcset) {
        const srcsetUrls = srcset.split(',').map(s => s.trim().split(' ')[0]);
        srcsetUrls.forEach(srcUrl => {
          if (srcUrl) {
            const fullUrl = srcUrl.startsWith('http') ? srcUrl : new URL(srcUrl, url).href;
            imageUrls.add(fullUrl);
          }
        });
      }
    });
    
    // Extract background images from style attributes and CSS
    const elementsWithStyle = document.querySelectorAll('[style*="background"]');
    console.log(`Found ${elementsWithStyle.length} elements with background styles`);
    
    elementsWithStyle.forEach(el => {
      const style = el.getAttribute('style');
      if (style) {
        const urlMatch = style.match(/url\(['"]?([^'"\)]+)['"]?\)/);
        if (urlMatch && urlMatch[1]) {
          const bgUrl = urlMatch[1];
          const fullUrl = bgUrl.startsWith('http') ? bgUrl : new URL(bgUrl, url).href;
          imageUrls.add(fullUrl);
        }
      }
    });
    
    // Look for CSS link tags and extract background images
    const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
    for (const stylesheet of styleSheets) {
      const href = stylesheet.getAttribute('href');
      if (href) {
        try {
          const cssUrl = href.startsWith('http') ? href : new URL(href, url).href;
          const cssResponse = await new Promise((resolve, reject) => {
            https.get(cssUrl, (response) => {
              if (response.statusCode !== 200) {
                reject(new Error(`Failed to fetch CSS: ${cssUrl}`));
                return;
              }
              
              let data = '';
              response.on('data', (chunk) => {
                data += chunk;
              });
              response.on('end', () => {
                resolve(data);
              });
            }).on('error', reject);
          });
          
          const bgUrlMatches = cssResponse.match(/url\(['"]?([^'"\)]+)['"]?\)/g) || [];
          bgUrlMatches.forEach(match => {
            const urlMatch = match.match(/url\(['"]?([^'"\)]+)['"]?\)/);
            if (urlMatch && urlMatch[1]) {
              const bgUrl = urlMatch[1];
              if (!bgUrl.startsWith('data:')) { // Skip data URIs
                const fullUrl = bgUrl.startsWith('http') ? bgUrl : new URL(bgUrl, cssUrl).href;
                imageUrls.add(fullUrl);
              }
            }
          });
        } catch (error) {
          console.warn(`Error processing CSS file ${href}:`, error.message);
        }
      }
    }
    
    console.log(`Total unique image URLs found: ${imageUrls.size}`);
    
    // Download each image
    const downloads = [];
    Array.from(imageUrls).forEach((imageUrl, index) => {
      if (!imageUrl || imageUrl.startsWith('data:')) return; // Skip data URIs
      
      try {
        // Generate filename
        const filename = `image_${index}_${path.basename(imageUrl).split('?')[0] || 'image.jpg'}`;
        const targetPath = path.join(outputDir, filename);
        
        downloads.push(downloadImage(imageUrl, targetPath).catch(err => {
          console.warn(`Failed to download ${imageUrl}: ${err.message}`);
        }));
      } catch (error) {
        console.warn(`Error processing URL ${imageUrl}:`, error.message);
      }
    });
    
    await Promise.all(downloads);
    console.log(`Completed downloading images from ${url}`);
    
    return true;
  } catch (error) {
    console.error(`Error extracting images from ${url}:`, error);
    return false;
  }
}

// Main function
async function main() {
  const baseUrl = 'https://equals9.com';
  const outputDir = path.join(__dirname, '..', 'public', 'images', 'downloaded');
  
  // Ensure output directory exists
  ensureDirectoryExists(outputDir);
  
  // Pages to scrape
  const pages = [
    '/',
    '/tokenomics',
    '/home-of-gaming',
    '/contact'
  ];
  
  // Download images from each page
  for (const page of pages) {
    const pageUrl = baseUrl + page;
    const pageOutputDir = path.join(outputDir, page.replace(/^\//g, '').replace(/\/+/g, '_') || 'home');
    
    console.log(`Processing page: ${pageUrl}`);
    await extractImagesFromUrl(pageUrl, pageOutputDir);
  }
  
  console.log('All downloads completed!');
}

// Run the script
main().catch(console.error);

export {
  downloadImage,
  extractImagesFromUrl,
  ensureDirectoryExists
};
