<template>
  <header class="bg-dark text-white py-4">
    <div class="container-custom">
      <nav class="flex items-center justify-between">
        <NuxtLink :to="localePath('/')" class="flex items-center">
          <img src="/images/logo/equals9-logo.svg" alt="Equals9" class="h-10" style="filter: brightness(1);">
        </NuxtLink>
        
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink :to="localePath('/')" class="hover:text-primary transition-colors">{{ $t('nav.home') }}</NuxtLink>
          <NuxtLink :to="localePath('/tokenomics')" class="hover:text-primary transition-colors">{{ $t('nav.tokenomics') }}</NuxtLink>
          <NuxtLink :to="localePath('/home-of-gaming')" class="hover:text-primary transition-colors">{{ $t('nav.home_of_gaming') }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="hover:text-primary transition-colors">{{ $t('nav.contact') }}</NuxtLink>
          <NuxtLink :to="localePath('/whitepaper')" class="btn btn-primary">{{ $t('nav.whitepaper') }}</NuxtLink>
          <LanguageSelector />
        </div>
        
        <button class="md:hidden block" @click="toggleMobileMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 py-4 border-t border-gray-700">
        <div class="flex flex-col space-y-4">
          <NuxtLink :to="localePath('/')" class="hover:text-primary transition-colors">{{ $t('nav.home') }}</NuxtLink>
          <NuxtLink :to="localePath('/tokenomics')" class="hover:text-primary transition-colors">{{ $t('nav.tokenomics') }}</NuxtLink>
          <NuxtLink :to="localePath('/home-of-gaming')" class="hover:text-primary transition-colors">{{ $t('nav.home_of_gaming') }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="hover:text-primary transition-colors">{{ $t('nav.contact') }}</NuxtLink>
          <NuxtLink :to="localePath('/whitepaper')" class="btn btn-primary inline-block text-center">{{ $t('nav.whitepaper') }}</NuxtLink>
          <LanguageSelector />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useLocalePath } from '#imports'
import LanguageSelector from './LanguageSelector.vue'

const localePath = useLocalePath()
const mobileMenuOpen = ref(false)

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
