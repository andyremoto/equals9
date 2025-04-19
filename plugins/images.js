export default defineNuxtPlugin((nuxtApp) => {
  const imagePaths = {
    logo: '/images/logo/equals9-logo.svg',
    token: '/images/logo/equals9-token.jpg',
    hero: '/images/backgrounds/background-1.png',
    // DApp images
    equalsSport: '/images/dapps/images/equals-sport.png',
    equalsVenue: '/images/dapps/images/equals-venue.png',
    winningBlock: '/images/features/winning-block.png',
    tokenomics: {
      chart: '/images/tokenomics/chart.jpg',
      payment: '/images/tokenomics/tokenomics-1.jpg',
      staking: '/images/tokenomics/tokenomics-2.jpg',
      governance: '/images/tokenomics/tokenomics-3.jpg',
    },
    gaming: {
      platform: '/images/gaming/platform.jpg',
      game1: '/images/gaming/game1.jpg',
      game2: '/images/gaming/game2.jpg',
      game3: '/images/gaming/game3.jpg',
      game4: '/images/gaming/game4.jpg',
      game5: '/images/gaming/game5.jpg',
      game6: '/images/gaming/game6.jpg',
      homesports: '/images/gaming/homesports.jpeg',
    },
    partners: [],
    timeline: {
      year2019: '/images/timeline/year2019.jpg',
      year2020: '/images/timeline/year2020.jpg',
      year2021: '/images/timeline/year2021.jpg',
      year2022: '/images/timeline/year2022.jpg',
      year2023: '/images/timeline/year2023.jpeg',
      year2024: '/images/timeline/year2024.jpeg',
      year2025: '/images/timeline/year2025.jpg',
    },
    social: {
      twitter: '/images/icons/twitter.svg',
      telegram: '/images/icons/telegram.svg',
      discord: '/images/icons/discord.svg',
      youtube: '/images/icons/youtube.svg',
      instagram: '/images/icons/instagram.svg',
      email: '/images/icons/email.svg'
    }
  }

  return {
    provide: {
      getImagePath: (key, subKey = null) => {
        if (subKey) {
          return imagePaths[key]?.[subKey] || null
        }
        return imagePaths[key] || null
      },
      
      // Utility to handle fallbacks when images haven't been loaded yet
      getImageWithFallback: (key, fallbackText, subKey = null) => {
        const path = subKey ? imagePaths[key]?.[subKey] : imagePaths[key]
        
        // Check if path exists in public directory - for production this should be improved
        // For now we'll just return the path and let the ImageComponent handle fallbacks
        return path || null
      }
    }
  }
})
