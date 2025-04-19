<template>
  <div class="dapps-showcase">
    <h2 class="text-3xl font-bold text-center mb-12">{{ $t('home.dapps') }}</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1440px] mx-auto">
      <!-- EqualsSports -->
      <div class="dapp-card bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="h-40 bg-gray-100 overflow-hidden flex items-center justify-center p-0">
          <img 
            src="/images/features/equals-sport.png" 
            alt="EqualsSports" 
            class="dapp-image"
            loading="eager"
            decoding="async"
          />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">{{ $t('home.equals_sports') }}</h3>
          <p class="text-gray-700 mb-4">
            {{ $t('home.choose_game_description') }}
          </p>
          <a href="http://equalssport.com/" target="_blank" class="btn-link">
            {{ $t('general.learn_more') }}
          </a>
        </div>
      </div>
      
      <!-- EqualsVenue -->
      <div class="dapp-card bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="h-40 bg-gray-100 overflow-hidden flex items-center justify-center p-0">
          <img 
            src="/images/features/equals-venue.png" 
            alt="EqualsVenue" 
            class="dapp-image"
            loading="eager"
            decoding="async"
          />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">{{ $t('home.equals_venue_title') }}</h3>
          <p class="text-gray-700 mb-4">
            {{ $t('home.equals_venue_description') }}
          </p>
          <a href="#" target="_blank" class="btn-link">
            {{ $t('general.learn_more') }}
          </a>
        </div>
      </div>
      
      <!-- Winning Block -->
      <div class="dapp-card bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="h-40 bg-gray-100 overflow-hidden flex items-center justify-center p-0">
          <img 
            src="/images/features/winning-block.png" 
            alt="The Winning Block" 
            class="dapp-image"
            loading="eager"
            decoding="async"
          />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">{{ $t('home.winning_block_title') }}</h3>
          <p class="text-gray-700 mb-4">
            {{ $t('home.winning_block_description') }}
          </p>
          <a href="https://saibamais.blocopremiado.com/" target="_blank" class="btn-link">
            {{ $t('general.learn_more') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No Nuxt 3, o composable useLocalePath já está disponível globalmente
const localePath = useLocalePath()

// Get the image path function from the plugin
const { $getImagePath } = useNuxtApp();

// Wrapper function to make it easier to use in the template
function getImagePath(key, subKey = null) {
  return subKey ? $getImagePath(key, subKey) : $getImagePath(key);
}
</script>

<style scoped>
.dapp-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.dapp-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.dapp-card img {
  image-rendering: -webkit-optimize-contrast; /* For Chrome/Safari */
  image-rendering: crisp-edges; /* For Firefox */
  -ms-interpolation-mode: nearest-neighbor; /* For IE */
  backface-visibility: hidden; /* Prevents jagged edges during transitions */
}

.dapp-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 16/9;
}

.btn-link {
  display: inline-block;
  color: var(--color-primary, #0074e4);
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid currentColor;
  transition: all 0.2s ease;
}

.btn-link:hover {
  opacity: 0.8;
}

/* Better image containers */
.h-40.bg-gray-100 {
  border-bottom: 1px solid rgba(0,0,0,0.05);
}
</style>
