<template>
  <div class="logo-component">
    <div v-if="!logoSrc" class="placeholder-logo" :style="{ width: `${width}px`, height: `${height}px` }">
      <span class="logo-text">EQ9</span>
    </div>
    <img v-else :src="logoSrc" :alt="alt" :width="width" :height="height" class="logo-image" />
  </div>
</template>

<script setup>
// Import helpers and plugins
import { computed } from 'vue'
const { $getImagePath } = useNuxtApp()

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: 'Equals9 Logo'
  },
  width: {
    type: [Number, String],
    default: 120
  },
  height: {
    type: [Number, String],
    default: 40
  }
})

// Use the provided src or get it from our images plugin
const logoSrc = computed(() => props.src || $getImagePath('logo'))
</script>

<style scoped>
.logo-component {
  display: inline-block;
}

.placeholder-logo {
  background: linear-gradient(135deg, #0074E4, #003b72);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
}

.logo-image {
  display: block;
  max-width: 100%;
  height: auto;
}

.logo-text {
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.05em;
}
</style>
