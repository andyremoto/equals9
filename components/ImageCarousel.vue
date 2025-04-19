<template>
  <div class="carousel-container">
    <!-- Navigation Arrows -->
    <button 
      @click="prevSlide" 
      class="nav-button prev"
      aria-label="Previous slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <!-- Carousel Slides -->
    <div class="carousel-slides" ref="slidesContainer">
      <div 
        v-for="(slide, index) in slides" 
        :key="index" 
        :class="['carousel-slide', { 'active': currentSlide === index }]"
        :style="{ transform: `translateX(${100 * (index - currentSlide)}%)` }"
      >
        <div class="slide-content grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="slide-text">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ slide.title }}</h2>
            <p class="text-lg mb-6">{{ slide.description }}</p>
            <div v-if="slide.buttonText" class="mt-4">
              <a :href="slide.buttonLink" target="_blank" class="btn btn-primary">
                {{ slide.buttonText }}
              </a>
            </div>
          </div>
          <div class="slide-image">
            <img 
              :src="slide.imageSrc" 
              :alt="slide.title"
              class="rounded-lg shadow-lg max-h-80 w-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
    
    <button 
      @click="nextSlide" 
      class="nav-button next"
      aria-label="Next slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
    
    <!-- Indicators -->
    <div class="indicators">
      <button 
        v-for="(slide, index) in slides" 
        :key="`dot-${index}`"
        :class="['indicator-dot', { 'active': currentSlide === index }]"
        @click="goToSlide(index)"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Define props
const props = defineProps({
  slides: {
    type: Array,
    required: true,
    default: () => []
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 5000 // 5 seconds
  }
});

// Current slide index
const currentSlide = ref(0);
let autoplayInterval = null;

// Navigation methods
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + props.slides.length) % props.slides.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

// Set up autoplay
onMounted(() => {
  if (props.autoplay && props.slides.length > 1) {
    startAutoplay();
  }
});

// Clean up on component unmount
onBeforeUnmount(() => {
  stopAutoplay();
});

// Autoplay control
const startAutoplay = () => {
  stopAutoplay(); // Clear any existing interval
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, props.interval);
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
};

// Touch/swipe handling for mobile
const slidesContainer = ref(null);
let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX;
};

const handleTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
};

const handleSwipe = () => {
  // Detect swipe direction (minimum 50px move for a swipe)
  if (touchEndX < touchStartX - 50) {
    nextSlide(); // Swipe left
  }
  if (touchEndX > touchStartX + 50) {
    prevSlide(); // Swipe right
  }
};

// Add touch event listeners
onMounted(() => {
  const container = slidesContainer.value;
  if (container) {
    container.addEventListener('touchstart', handleTouchStart, false);
    container.addEventListener('touchend', handleTouchEnd, false);
  }
});

// Clean up touch event listeners
onBeforeUnmount(() => {
  const container = slidesContainer.value;
  if (container) {
    container.removeEventListener('touchstart', handleTouchStart, false);
    container.removeEventListener('touchend', handleTouchEnd, false);
  }
});
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
}

.carousel-slides {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 300px;
}

.carousel-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  padding: 1rem;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.indicators {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.indicator-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator-dot.active {
  background-color: var(--color-primary, #0074e4);
  transform: scale(1.2);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .slide-content {
    flex-direction: column-reverse;
  }
  
  .carousel-slide {
    padding: 1rem 3rem;
  }
}
</style>
