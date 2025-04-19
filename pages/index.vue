<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-dark text-white py-16 md:py-24 hero-section">
      <div class="container-custom" style="position: relative;">
        <!-- Light points and trails -->
        <div class="light-point-1"></div>
        <div class="light-point-2"></div>
        <div class="light-point-3"></div>
        <div class="light-point-4"></div>
        <div class="grid grid-cols-2 gap-4 sm:gap-8 items-stretch hero-grid">
          <div class="hero-text-column flex flex-col justify-between">
            <div>
              <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ $t('home.hero_title') }}</h1>
              <p class="text-xl mb-8">
                {{ $t('home.hero_description') }}
              </p>
            </div>
            <div class="flex flex-row gap-2 hero-buttons">
              <NuxtLink :to="localePath('/whitepaper')" class="btn btn-primary text-center">
                {{ $t('nav.whitepaper') }}
              </NuxtLink>
              <NuxtLink :to="localePath('/tokenomics')" class="btn bg-white text-dark hover:bg-gray-100 text-center" style="filter: brightness(1);">
                {{ $t('nav.tokenomics') }}
              </NuxtLink>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <div class="w-full max-w-xs mx-auto" style="position: relative;">
              <!-- Explicit golden background glow -->
              <div style="position: absolute; top: -20px; left: -20px; right: -20px; bottom: -20px; background: radial-gradient(circle, rgba(203,213,225,0.25) 0%, rgba(148,163,184,0.08) 70%, rgba(0,0,0,0) 100%); filter: blur(15px); border-radius: 50%;"></div>
              
              <!-- Explicit bottom reflection (silver) -->
              <div style="position: absolute; bottom: -30px; left: 25%; right: 25%; height: 60px; background: radial-gradient(ellipse at center, rgba(203,213,225,0.3) 0%, rgba(148,163,184,0.1) 60%, rgba(0,0,0,0) 100%); filter: blur(10px);"></div>
              
              <!-- Image with silver shadow -->
              <div style="position: relative; border-radius: 0.5rem; overflow: hidden; box-shadow: 0 10px 25px 10px rgba(148,163,184,0.25), 0 4px 10px rgba(148,163,184,0.15), 0 0 15px rgba(203,213,225,0.1) inset;">
                <div class="infinity-mirror-container" style="position: relative; width: 100%; height: 100%; overflow: visible;">
                  <!-- Original image -->                  
                  <img 
                    src="/images/equals9hero.png" 
                    alt="Equals9 - Where dreams become goals" 
                    class="main-image"
                    style="width: 100%; height: auto; object-fit: contain; position: relative; z-index: 10;"
                  />
                  
                  <!-- Infinity mirrors effect with multiple reflections getting smaller -->                  
                  <div class="infinity-reflection-1"></div>
                  <div class="infinity-reflection-2"></div>
                  <div class="infinity-reflection-3"></div>
                  <div class="infinity-reflection-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DApps Section -->
    <section class="section">
      <div class="container-custom">
        <div class="mb-20">
          <DAppsShowcase />
        </div>

        <!-- Number 9 Section -->
        <div class="mb-16">
          <h2 class="text-center mb-8">{{ $t('home.number_9') }}</h2>
          <p class="text-lg text-center max-w-3xl mx-auto mb-8">
            {{ $t('home.number_9_description') }}
          </p>
        </div>

        <!-- EqualsSports Section -->
        <div class="bg-gray-100 py-12 px-4 rounded-xl mb-16">
          <h3 class="text-center mb-8">{{ $t('home.equals_sports') }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Game Card 1 -->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="font-bold text-xl mb-4">{{ $t('home.choose_game') }}</h3>
              <p class="mb-4">
                {{ $t('home.choose_game_description') }}
              </p>
          
            </div>
            
            <!-- Game Card 2 -->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="font-bold text-xl mb-4">{{ $t('home.head_to_head') }}</h3>
              <p class="mb-4">
                {{ $t('home.head_to_head_description') }}
              </p>
            
            </div>
            
            <!-- Game Card 3 -->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="font-bold text-xl mb-4">{{ $t('home.global_ranking') }}</h3>
              <p class="mb-4">
                {{ $t('home.global_ranking_description') }}
              </p>
          
            </div>
          </div>
          
          <!-- Staking Section -->
          <div class="mt-12 bg-primary/10 p-6 rounded-lg">
            <h3 class="font-bold text-xl mb-4">{{ $t('home.staking') }}</h3>
            <p class="mb-4">
              {{ $t('home.staking_description') }}
            </p>
            <a href="http://equalssport.com/" target="_blank" class="btn btn-primary inline-block">
              {{ $t('home.go_to_equalssport') }}
            </a>
          </div>
        </div>

        <!-- We Keep Building Section -->
        <div class="mb-16">
          <h2 class="text-center mb-8">{{ $t('home.keep_building') }}</h2>
          
          <!-- Imagem de destaque -->
          <div class="mb-10 text-center">
            <img 
              src="/images/features/Talento-movimento.png" 
              alt="Talento em movimento" 
              class="max-w-3xl mx-auto rounded-lg w-full h-auto"
            />
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- EqualsBank -->
            <div class="bg-gray-100 p-6 rounded-lg shadow-md">
              <div class="flex flex-col items-center gap-4">
                <div class="mb-4">
                  <img 
                    src="/images/logo/image_16_equals_bank.svg" 
                    alt="EqualsBank Logo" 
                    class="h-9 w-auto max-w-[150px]"
                    style="max-height: 40px;"
                  />
                </div>
                <p class="mb-4 text-gray-700">
                  {{ $t('home.digital_money') }}
                </p>
              </div>
            </div>
            
            <!-- EqualsMusic -->
            <div class="bg-gray-100 p-6 rounded-lg shadow-md">
              <div class="flex flex-col items-center gap-4">
                <div class="mb-4">
                  <img 
                    src="/images/logo/image_20_equals_musice 12.51.39.svg" 
                    alt="EqualsMusic Logo" 
                    class="h-14 w-auto max-w-[180px]"
                    style="max-height: 60px;"
                  />
                </div>
                <p class="mb-4 text-gray-700">
                  {{ $t('home.music_nft') }}
                </p>
              </div>
            </div>
          </div>
          
          <!-- EqualsVenue -->
          <div class="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <div class="flex flex-col items-center gap-4">
              <div class="mb-4">
                <img 
                  src="/images/logo/image_24_equals_venue.svg" 
                  alt="EqualsVenue Logo" 
                  class="h-14 w-auto max-w-[180px]"
                  style="max-height: 60px;"
                />
              </div>
              <p class="mb-4 text-gray-700">
                {{ $t('home.payment_revolution') }}
              </p>
              <a href="http://equalsvenue.com.br/" target="_blank" class="btn btn-primary inline-block">
                {{ $t('home.go_to_equalsvenue') }}
              </a>
            </div>
          </div>
        </div>

        <!-- Signed, Sealed, Delivered Section -->
        <div class="mb-16">
          <h2 class="text-center mb-8">{{ $t('home.signed_sealed') }}</h2>
          <p class="text-lg text-center max-w-3xl mx-auto mb-8">
            {{ $t('home.signed_sealed_description') }}
          </p>
          
          <!-- Timeline Section with our new component -->
          <Timeline />
        </div>

        <!-- Community Section -->
        <div>
          <h2 class="text-center mb-8">{{ $t('home.growing_community') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div class="bg-gray-100 p-6 rounded-lg">
              <div class="text-4xl font-bold text-primary mb-2">1000+</div>
              <div class="text-lg">{{ $t('home.active_users') }}</div>
            </div>
            <div class="bg-gray-100 p-6 rounded-lg">
              <div class="text-4xl font-bold text-primary mb-2">10+</div>
              <div class="text-lg">{{ $t('home.supported_games') }}</div>
            </div>
            <div class="bg-gray-100 p-6 rounded-lg">
              <div class="text-4xl font-bold text-primary mb-2">5+</div>
              <div class="text-lg">{{ $t('home.countries') }}</div>
            </div>
          </div>
          
          <div class="text-center mt-12">
            <a href="#" class="btn btn-primary inline-block">
              {{ $t('home.join_community') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ImageComponent from '~/components/ImageComponent.vue'
import DAppsShowcase from '~/components/DAppsShowcase.vue'
import Timeline from '~/components/Timeline.vue'



// Home page component
</script>

<style>
/* Main image with subtle fade */
.main-image {
  animation: fadeInOut 4s infinite alternate;
}

/* Infinity mirror container */
.infinity-mirror-container {
  position: relative;
  display: flex;
  align-items: center;
  overflow: visible;
  perspective: 800px;
}

/* First reflection - 90% size */
.infinity-reflection-1 {
  position: absolute;
  left: 95%; 
  top: 5%;
  width: 90%;
  height: 90%;
  background-image: url('/images/equals9hero.png');
  background-position: left center;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.7;
  filter: saturate(0.95) brightness(1.05) contrast(0.95);
  z-index: 9;
  animation: infinityPulse1 10s infinite alternate ease-in-out;
}

/* Second reflection - 80% size */
.infinity-reflection-2 {
  position: absolute;
  left: 185%; 
  top: 10%;
  width: 80%;
  height: 80%;
  background-image: url('/images/equals9hero.png');
  background-position: left center;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.5;
  filter: saturate(0.9) brightness(1.1) contrast(0.9);
  z-index: 8;
  animation: infinityPulse2 10s infinite alternate ease-in-out;
}

/* Third reflection - 70% size */
.infinity-reflection-3 {
  position: absolute;
  left: 265%; 
  top: 15%;
  width: 70%;
  height: 70%;
  background-image: url('/images/equals9hero.png');
  background-position: left center;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.3;
  filter: saturate(0.85) brightness(1.15) contrast(0.85);
  z-index: 7;
  animation: infinityPulse3 10s infinite alternate ease-in-out;
}

/* Fourth reflection - 60% size */
.infinity-reflection-4 {
  position: absolute;
  left: 335%; 
  top: 20%;
  width: 60%;
  height: 60%;
  background-image: url('/images/equals9hero.png');
  background-position: left center;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.2;
  filter: saturate(0.8) brightness(1.2) contrast(0.8);
  z-index: 6;
  animation: infinityPulse4 10s infinite alternate ease-in-out;
}

/* Basic fade animation */
@keyframes fadeInOut {
  0% { opacity: 0.8; transform: scale(0.99); }
  100% { opacity: 1; transform: scale(1); }
}

/* Infinity mirror animations */
@keyframes infinityPulse1 {
  0% { opacity: 0.65; transform: translateZ(-5px); }
  100% { opacity: 0.75; transform: translateZ(-10px); }
}

@keyframes infinityPulse2 {
  0% { opacity: 0.45; transform: translateZ(-15px); }
  100% { opacity: 0.55; transform: translateZ(-20px); }
}

@keyframes infinityPulse3 {
  0% { opacity: 0.25; transform: translateZ(-25px); }
  100% { opacity: 0.35; transform: translateZ(-30px); }
}

@keyframes infinityPulse4 {
  0% { opacity: 0.15; transform: translateZ(-35px); }
  100% { opacity: 0.25; transform: translateZ(-40px); }
}
/* Light trails effect (rastro de luz) */
.hero-section {
  position: relative;
  overflow: hidden;
}

/* Mobile responsive adjustments for light trails */
@media (max-width: 767px) {
  /* Hide all trails on mobile, keep only the light points */
  .hero-section::before,
  .hero-section::after,
  .hero-section .container-custom::before,
  .hero-section .container-custom::after {
    display: none !important;
  }
  
  /* Position light points at top area */
  .light-point-1 {
    top: 10% !important;
    width: 3px !important;
    height: 3px !important;
  }
  .light-point-2 {
    top: 5% !important;
    width: 3px !important;
    height: 3px !important;
  }
  .light-point-3 {
    top: 15% !important;
    width: 3px !important;
    height: 3px !important;
  }
  .light-point-4 {
    top: 8% !important;
    width: 3px !important;
    height: 3px !important;
  }
  
  /* Adjust text sizing for mobile */
  h1.text-4xl {
    font-size: 1.1rem !important;
    margin-bottom: 0.5rem !important;
    line-height: 1.3 !important;
  }
  p.text-xl {
    font-size: 0.75rem !important;
    margin-bottom: 0.75rem !important;
    line-height: 1.2 !important;
  }
  .btn {
    padding: 0.25rem 0.35rem !important;
    font-size: 0.65rem !important;
    min-height: auto !important;
    white-space: nowrap !important;
    letter-spacing: -0.01em !important;
  }
}

/* Light trail container - connected to light points */
.hero-section::before,
.hero-section::after,
.light-trail-1,
.light-trail-2,
.light-trail-3 {
  content: '';
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, 
    rgba(255,255,255,0.9) 0%, 
    rgba(203,213,225,0.5) 60%, 
    rgba(203,213,225,0) 100%);
  width: clamp(40px, 10vw, 80px);
  opacity: 0;
  z-index: 1;
  box-shadow: 0 0 8px rgba(255,255,255,0.5);
  filter: blur(0.5px);
  will-change: transform, opacity;
  pointer-events: none;
  transform-origin: left center;
}

/* Light points */
.light-point-1,
.light-point-2,
.light-point-3,
.light-point-4 {
  content: '';
  position: absolute;
  width: clamp(2px, 0.5vw, 4px);
  height: clamp(2px, 0.5vw, 4px);
  background: rgba(255,255,255,0.95);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 10px 2px rgba(255,255,255,0.8);
  opacity: 0;
  will-change: transform, opacity;
  pointer-events: none;
  left: 0;
}

.hero-section::before {
  top: 25%;
  animation: lightTrail1 12s cubic-bezier(0.34, 0.17, 0.52, 0.83) infinite;
  transform-origin: 0 0;
}

.light-point-1 {
  top: 25%;
  animation: lightPoint1 12s cubic-bezier(0.34, 0.17, 0.52, 0.83) infinite;
}

.hero-section::after {
  top: 45%;
  animation: lightTrail2 15s cubic-bezier(0.34, 0.17, 0.52, 0.83) infinite;
  animation-delay: 5s;
  transform-origin: 0 0;
}

/* Additional light trails using pseudo elements on the container */
.light-point-2 {
  top: 45%;
  animation: lightPoint2 15s cubic-bezier(0.34, 0.17, 0.52, 0.83) infinite;
  animation-delay: 5s;
}

.hero-section .container-custom::before {
  top: 35%;
  animation: lightTrail3 10s cubic-bezier(0.34, 0.17, 0.52, 0.83) infinite;
  animation-delay: 3s;
  transform-origin: 0 0;
}

.light-point-3 {
  top: 35%;
  animation: lightPoint3 10s cubic-bezier(0.34, 0.17, 0.52, 0.83) infinite;
  animation-delay: 3s;
}

.light-point-4 {
  top: 15%;
  animation: lightPoint4 8s cubic-bezier(0.34, 0.17, 0.52, 0.83) infinite;
  animation-delay: 6s;
}

.hero-section .container-custom::after {
  top: 15%;
  animation: lightTrail4 8s cubic-bezier(0.34, 0.17, 0.52, 0.83) infinite;
  animation-delay: 6s;
  transform-origin: 0 0;
}

@keyframes lightPoint1 {
  0% {
    transform: translateX(-20px) translateY(0px);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  15% {
    transform: translateX(clamp(50px, 15vw, 150px)) translateY(clamp(10px, 5vw, 20px)) rotate(10deg);
  }
  30% {
    transform: translateX(clamp(100px, 30vw, 250px)) translateY(clamp(-8px, -3vw, -15px)) rotate(-10deg);
  }
  45% {
    transform: translateX(clamp(150px, 40vw, 350px)) translateY(clamp(15px, 5vw, 25px)) rotate(15deg);
  }
  60% {
    transform: translateX(clamp(200px, 50vw, 450px)) translateY(clamp(-12px, -4vw, -20px)) rotate(-15deg);
  }
  75% {
    transform: translateX(clamp(250px, 60vw, 550px)) translateY(clamp(8px, 3vw, 15px)) rotate(10deg);
  }
  90% {
    transform: translateX(clamp(300px, 70vw, 650px)) translateY(clamp(-6px, -2vw, -10px)) rotate(-5deg);
    opacity: 0.8;
  }
  100% {
    transform: translateX(clamp(350px, 80vw, 750px)) translateY(0);
    opacity: 0;
  }
}

@keyframes lightTrail1 {
  0% {
    transform: translate(-20px, 0px);
    opacity: 0;
  }
  5% {
    opacity: 0.6;
  }
  15% {
    transform: translate(clamp(50px, 15vw, 150px), clamp(10px, 5vw, 20px)) rotate(10deg);
  }
  30% {
    transform: translate(clamp(100px, 30vw, 250px), clamp(-8px, -3vw, -15px)) rotate(-10deg);
  }
  45% {
    transform: translate(clamp(150px, 40vw, 350px), clamp(15px, 5vw, 25px)) rotate(15deg);
  }
  60% {
    transform: translate(clamp(200px, 50vw, 450px), clamp(-12px, -4vw, -20px)) rotate(-15deg);
  }
  75% {
    transform: translate(clamp(250px, 60vw, 550px), clamp(8px, 3vw, 15px)) rotate(10deg);
  }
  90% {
    transform: translate(clamp(300px, 70vw, 650px), clamp(-6px, -2vw, -10px)) rotate(-5deg);
    opacity: 0.3;
  }
  100% {
    transform: translate(clamp(350px, 80vw, 750px), 0px);
    opacity: 0;
  }
}

@keyframes lightPoint2 {
  0% {
    transform: translateX(-20px) translateY(0px);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  20% {
    transform: translateX(clamp(80px, 20vw, 180px)) translateY(clamp(-15px, -5vw, -25px)) rotate(-10deg);
  }
  35% {
    transform: translateX(clamp(140px, 35vw, 300px)) translateY(clamp(12px, 4vw, 20px)) rotate(15deg);
  }
  50% {
    transform: translateX(clamp(200px, 45vw, 400px)) translateY(clamp(-18px, -6vw, -30px)) rotate(-20deg);
  }
  65% {
    transform: translateX(clamp(260px, 55vw, 500px)) translateY(clamp(15px, 5vw, 25px)) rotate(15deg);
  }
  80% {
    transform: translateX(clamp(320px, 65vw, 600px)) translateY(clamp(-10px, -3vw, -15px)) rotate(-10deg);
  }
  95% {
    transform: translateX(clamp(380px, 75vw, 700px)) translateY(clamp(6px, 2vw, 10px)) rotate(5deg);
    opacity: 0.8;
  }
  100% {
    transform: translateX(clamp(420px, 85vw, 800px)) translateY(0);
    opacity: 0;
  }
}

@keyframes lightTrail2 {
  0% {
    transform: translate(-20px, 0px);
    opacity: 0;
  }
  5% {
    opacity: 0.6;
  }
  20% {
    transform: translate(clamp(80px, 20vw, 180px), clamp(-15px, -5vw, -25px)) rotate(-10deg);
  }
  35% {
    transform: translate(clamp(140px, 35vw, 300px), clamp(12px, 4vw, 20px)) rotate(15deg);
  }
  50% {
    transform: translate(clamp(200px, 45vw, 400px), clamp(-18px, -6vw, -30px)) rotate(-20deg);
  }
  65% {
    transform: translate(clamp(260px, 55vw, 500px), clamp(15px, 5vw, 25px)) rotate(15deg);
  }
  80% {
    transform: translate(clamp(320px, 65vw, 600px), clamp(-10px, -3vw, -15px)) rotate(-10deg);
    opacity: 0.3;
  }
  95% {
    transform: translate(clamp(380px, 75vw, 700px), clamp(6px, 2vw, 10px)) rotate(5deg);
    opacity: 0.2;
  }
  100% {
    transform: translate(clamp(420px, 85vw, 800px), 0px);
    opacity: 0;
  }
}

@keyframes lightPoint3 {
  0% {
    transform: translateX(-20px) translateY(0px);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  17% {
    transform: translateX(clamp(60px, 17vw, 170px)) translateY(clamp(15px, 5vw, 30px)) rotate(12deg);
  }
  34% {
    transform: translateX(clamp(120px, 34vw, 280px)) translateY(clamp(-10px, -3vw, -20px)) rotate(-15deg);
  }
  51% {
    transform: translateX(clamp(180px, 42vw, 380px)) translateY(clamp(15px, 4vw, 25px)) rotate(20deg);
  }
  68% {
    transform: translateX(clamp(240px, 52vw, 480px)) translateY(clamp(-15px, -4vw, -25px)) rotate(-20deg);
  }
  85% {
    transform: translateX(clamp(300px, 62vw, 580px)) translateY(clamp(8px, 3vw, 15px)) rotate(10deg);
  }
  95% {
    transform: translateX(clamp(360px, 72vw, 680px)) translateY(clamp(-6px, -2vw, -10px)) rotate(-5deg);
    opacity: 0.8;
  }
  100% {
    transform: translateX(clamp(400px, 80vw, 750px)) translateY(0);
    opacity: 0;
  }
}

@keyframes lightTrail3 {
  0% {
    transform: translate(-20px, 0px);
    opacity: 0;
  }
  5% {
    opacity: 0.6;
  }
  17% {
    transform: translate(clamp(60px, 17vw, 170px), clamp(15px, 5vw, 30px)) rotate(12deg);
  }
  34% {
    transform: translate(clamp(120px, 34vw, 280px), clamp(-10px, -3vw, -20px)) rotate(-15deg);
  }
  51% {
    transform: translate(clamp(180px, 42vw, 380px), clamp(15px, 4vw, 25px)) rotate(20deg);
  }
  68% {
    transform: translate(clamp(240px, 52vw, 480px), clamp(-15px, -4vw, -25px)) rotate(-20deg);
  }
  85% {
    transform: translate(clamp(300px, 62vw, 580px), clamp(8px, 3vw, 15px)) rotate(10deg);
    opacity: 0.3;
  }
  95% {
    transform: translate(clamp(360px, 72vw, 680px), clamp(-6px, -2vw, -10px)) rotate(-5deg);
    opacity: 0.2;
  }
  100% {
    transform: translate(clamp(400px, 80vw, 750px), 0px);
    opacity: 0;
  }
}

@keyframes lightPoint4 {
  0% {
    transform: translateX(-20px) translateY(0px);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  14% {
    transform: translateX(clamp(50px, 15vw, 150px)) translateY(clamp(-12px, -4vw, -22px)) rotate(-15deg);
  }
  28% {
    transform: translateX(clamp(100px, 25vw, 250px)) translateY(clamp(10px, 3vw, 18px)) rotate(12deg);
  }
  42% {
    transform: translateX(clamp(150px, 35vw, 350px)) translateY(clamp(-15px, -5vw, -28px)) rotate(-20deg);
  }
  56% {
    transform: translateX(clamp(200px, 45vw, 450px)) translateY(clamp(14px, 4vw, 24px)) rotate(18deg);
  }
  70% {
    transform: translateX(clamp(250px, 55vw, 550px)) translateY(clamp(-10px, -3vw, -18px)) rotate(-15deg);
  }
  84% {
    transform: translateX(clamp(300px, 65vw, 650px)) translateY(clamp(8px, 2vw, 12px)) rotate(8deg);
  }
  95% {
    transform: translateX(clamp(350px, 75vw, 700px)) translateY(clamp(-5px, -1vw, -8px)) rotate(-5deg);
    opacity: 0.8;
  }
  100% {
    transform: translateX(clamp(380px, 80vw, 750px)) translateY(0);
    opacity: 0;
  }
}

@keyframes lightTrail4 {
  0% {
    transform: translate(-20px, 0px);
    opacity: 0;
  }
  5% {
    opacity: 0.6;
  }
  14% {
    transform: translate(clamp(50px, 15vw, 150px), clamp(-12px, -4vw, -22px)) rotate(-15deg);
  }
  28% {
    transform: translate(clamp(100px, 25vw, 250px), clamp(10px, 3vw, 18px)) rotate(12deg);
  }
  42% {
    transform: translate(clamp(150px, 35vw, 350px), clamp(-15px, -5vw, -28px)) rotate(-20deg);
  }
  56% {
    transform: translate(clamp(200px, 45vw, 450px), clamp(14px, 4vw, 24px)) rotate(18deg);
  }
  70% {
    transform: translate(clamp(250px, 55vw, 550px), clamp(-10px, -3vw, -18px)) rotate(-15deg);
  }
  84% {
    transform: translate(clamp(300px, 65vw, 650px), clamp(8px, 2vw, 12px)) rotate(8deg);
    opacity: 0.3;
  }
  95% {
    transform: translate(clamp(350px, 75vw, 700px), clamp(-5px, -1vw, -8px)) rotate(-5deg);
    opacity: 0.2;
  }
  100% {
    transform: translate(clamp(380px, 80vw, 750px), 0px);
    opacity: 0;
  }
}

/* Keyframe already defined above */

/* Keyframe already defined above */
</style>
