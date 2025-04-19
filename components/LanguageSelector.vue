<template>
  <div class="language-selector relative">
    <button 
      @click="toggleDropdown" 
      class="flex items-center text-sm hover:text-primary transition-colors"
      :class="{ 'text-primary': isOpen }"
    >
      <span class="mr-1">{{ currentLocale.name }}</span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-4 w-4 transition-transform"
        :class="{ 'rotate-180': isOpen }"
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    <div 
      v-if="isOpen" 
      class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
    >
      <NuxtLink
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
        @click="isOpen = false"
      >
        {{ locale.name }}
      </NuxtLink>
    </div>
    
    <!-- Overlay to close dropdown when clicking outside -->
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-40"
      @click="isOpen = false"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, locales } = useI18n()
const isOpen = ref(false)

const availableLocales = computed(() => {
  return locales.value.filter(l => l.code !== locale.value)
})

const currentLocale = computed(() => {
  return locales.value.find(l => l.code === locale.value)
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

// Close dropdown when clicking escape
const handleEscape = (e) => {
  if (e.key === 'Escape' && isOpen.value) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>
