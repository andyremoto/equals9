<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-dark text-white py-16">
      <div class="container-custom">
        <h1 class="text-center mb-8">{{ $t('gaming.title') }}</h1>
        <p class="text-xl text-center max-w-3xl mx-auto">
          {{ $t('gaming.description') }}
        </p>
      </div>
    </section>

    <!-- Gaming Features -->
    <section class="section">
      <div class="container-custom">
        <!-- EqualsSports Overview -->
        <div class="mb-16">
          <h2 class="text-center mb-8">{{ $t('gaming.welcome') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p class="text-lg mb-6">
                {{ $t('gaming.welcome_description_1') }}
              </p>
              <p class="text-lg mb-6">
                {{ $t('gaming.welcome_description_2') }}
              </p>
              <a href="http://equalssport.com/" target="_blank" class="btn btn-primary inline-block">
                {{ $t('general.learn_more') }}
              </a>
            </div>
            <div class="bg-gray-100 rounded-lg p-8 flex items-center justify-center flex-col gap-4">
              <ImageComponent 
                imageKey="gaming"
                subKey="homesports"
                :width="480" 
                :height="270" 
                alt="EqualsSports Platform" 
                customClass="rounded-lg"
              />
              <p class="text-sm text-gray-500 italic">{{ $t('gaming.title') }} - Equalssport</p>
            </div>
          </div>
        </div>

        <!-- Gaming Features Grid -->
        <div class="mb-16">
          <h2 class="text-center mb-8">{{ $t('gaming.features') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Feature 1 -->
            <div class="bg-gray-100 p-6 rounded-lg shadow-md">
              <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-4">{{ $t('gaming.available_games') }}</h3>
              <p class="text-center">
                {{ $t('gaming.game_4_description') }}
              </p>
            </div>
            
            <!-- Feature 2 -->
            <div class="bg-gray-100 p-6 rounded-lg shadow-md">
              <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-4">{{ $t('gaming.feature_2') }}</h3>
              <p class="text-center">
                {{ $t('gaming.feature_2_description') }}
              </p>
            </div>
            
            <!-- Feature 3 -->
            <div class="bg-gray-100 p-6 rounded-lg shadow-md">
              <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-4">{{ $t('gaming.feature_3') }}</h3>
              <p class="text-center">
                {{ $t('gaming.feature_3_description') }}
              </p>
            </div>
          </div>
        </div>
      

        <!-- How It Works -->
        <div class="mb-16">
          <h2 class="text-center mb-8">{{ $t('gaming.start_playing') }}</h2>
          <div class="relative max-w-4xl mx-auto">
            <!-- Step line -->
            <div class="hidden md:block absolute left-0 top-0 w-full h-1 bg-primary/20"></div>
            
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
              <!-- Step 1 -->
              <div class="relative">
                <div class="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary"></div>
                <div class="mt-8 text-center">
                  <div class="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto md:mt-6 mb-4">1</div>
                  <h3 class="text-lg font-bold mb-2">{{ $t('gaming.step_1') }}</h3>
                  <p>{{ $t('gaming.step_1_description') }}</p>
                </div>
              </div>
              
              <!-- Step 2 -->
              <div class="relative">
                <div class="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary"></div>
                <div class="mt-8 text-center">
                  <div class="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto md:mt-6 mb-4">2</div>
                  <h3 class="text-lg font-bold mb-2">{{ $t('gaming.step_3') }}</h3>
                  <p>{{ $t('gaming.step_3_description') }}</p>
                </div>
              </div>
              
              <!-- Step 3 -->
              <div class="relative">
                <div class="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary"></div>
                <div class="mt-8 text-center">
                  <div class="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto md:mt-6 mb-4">3</div>
                  <h3 class="text-lg font-bold mb-2">{{ $t('gaming.step_4') }}</h3>
                  <p>{{ $t('gaming.step_4_description') }}</p>
                </div>
              </div>
              
              <!-- Step 4 -->
              <div class="relative">
                <div class="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary"></div>
                <div class="mt-8 text-center">
                  <div class="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto md:mt-6 mb-4">4</div>
                  <h3 class="text-lg font-bold mb-4">{{ $t('gaming.staking_1') }}</h3>
                  <p>{{ $t('gaming.staking_description') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Staking Section -->
        <div class="mb-16 bg-gray-100 p-8 rounded-lg">
          <h2 class="text-center mb-8">{{ $t('gaming.staking') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="font-bold text-xl mb-4">{{ $t('gaming.staking_1_description') }}</h3>
              <p class="mb-6">
                {{ $t('gaming.staking_1_description') }}
              </p>
              <ul class="list-disc pl-6 space-y-2">
                <li>{{ $t('gaming.start_playing_description') }}</li>
                <li>{{ $t('gaming.step_2') }}</li>
                <li>{{ $t('gaming.step_2_description') }}</li>
                <li>{{ $t('gaming.staking_2_description') }}</li>
                <li>{{ $t('gaming.staking_3_description') }}</li>
              </ul>
              <div class="mt-6">
                <a href="http://equalssport.com/" target="_blank" class="btn btn-primary inline-block">
                  {{ $t('gaming.start_staking') }}
                </a>
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <!-- Placeholder for staking info -->
              <div class="bg-primary/10 p-6 rounded-lg">
                <h4 class="font-bold text-center mb-4">{{ $t('gaming.staking_example') }}</h4>
                <div class="space-y-4">
                  <div class="flex justify-between">
                    <span>{{ $t('gaming.stake_amount') }}:</span>
                    <span class="font-bold">1,000 EQ9</span>
                  </div>
                  <div class="flex justify-between">
                    <span>{{ $t('gaming.staking_period') }}:</span>
                    <span class="font-bold">7 days</span>
                  </div>
                  <div class="flex justify-between">
                    <span>{{ $t('gaming.champion_win_rate') }}:</span>
                    <span class="font-bold">65%</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Potential Earnings:</span>
                    <span class="font-bold text-primary">125-180 EQ9</span>
                  </div>
                </div>
                <div class="mt-4 text-sm text-gray-500 text-center">
                  *Example only, actual earnings vary based on match results
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
      
    </section>
  </div>

</template>

<script setup>
import ImageComponent from '~/components/ImageComponent.vue'
// Home of Gaming page component
</script>
