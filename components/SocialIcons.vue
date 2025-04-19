<template>
  <div class="social-icons flex space-x-4">
    <a 
      v-for="(icon, index) in socialLinks" 
      :key="index" 
      :href="icon.url" 
      target="_blank" 
      rel="noopener noreferrer"
      class="social-icon-link"
      :aria-label="icon.name"
    >
      <div :class="['p-3 rounded-full transition-colors duration-200', bgClass]">
        <img 
          :src="icon.icon" 
          :alt="icon.name" 
          :class="sizeClass"
        />
      </div>
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Get image paths from our plugin
const { $getImagePath } = useNuxtApp()

const props = defineProps({
  // 'default' -> low opacity, 'contact' -> higher opacity
  variant: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'md' // sm, md, lg
  }
})

// Get sizing class based on prop
const sizeClass = computed(() => {
  switch(props.size) {
    case 'sm': return 'h-5 w-5';
    case 'lg': return 'h-7 w-7';
    default: return 'h-6 w-6';
  }
})

// Background class based on variant
const bgClass = computed(() => {
  // Se for solid ou contact, exibe fundo azul sólido
  if (props.variant === 'solid' || props.variant === 'contact') {
    return 'bg-primary hover:bg-primary-dark'
  }
  // Se não, exibe o fundo translúcido padrão (para o footer)
  return 'bg-primary bg-opacity-30 hover:bg-opacity-50'
})

// Social links with actual image paths
const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/tokeneq9',
    icon: $getImagePath('social', 'twitter')
  },
  {
    name: 'Telegram',
    url: 'https://t.me/Equals9BR',
    icon: $getImagePath('social', 'telegram')
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@eq9oficial425',
    icon: $getImagePath('social', 'youtube')
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/equals9',
    icon: $getImagePath('social', 'instagram')
  },
  {
    name: 'Email',
    url: 'mailto:contact@equals9.com',
    icon: $getImagePath('social', 'email')
  }
]
</script>

<style scoped>
.social-icon-link {
  display: inline-flex;
  transition: transform 0.2s ease;
}

.social-icon-link:hover {
  transform: scale(1.1);
}
</style>
