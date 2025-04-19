<template>
  <div class="image-component">
    <img 
      v-if="finalSrc" 
      :src="finalSrc" 
      :alt="alt" 
      :width="width" 
      :height="height"
      class="image"
      :class="customClass"
      @error="handleImageError"
    />
    <div 
      v-else
      class="placeholder-image"
      :class="customClass"
      :style="{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '200px',
        backgroundColor: backgroundColor || '#e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.5rem'
      }"
    >
      <div class="text-center p-4">
        <div v-if="placeholderText" class="font-medium text-gray-500">{{ placeholderText }}</div>
        <div v-else-if="alt" class="font-medium text-gray-500">{{ alt }}</div>
        <div v-else class="font-medium text-gray-500">Image</div>
        <div v-if="width && height" class="text-sm text-gray-400 mt-1">{{ width }}×{{ height }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

// Get access to the images plugin
const { $getImagePath } = useNuxtApp()

const props = defineProps({
  // Source can be a direct URL or an image key from our plugin
  src: {
    type: String,
    default: ''
  },
  // Image key for the images plugin
  imageKey: {
    type: String,
    default: ''
  },
  // Optional subKey for nested images in the plugin
  subKey: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: 'Image'
  },
  width: {
    type: [Number, String],
    default: null
  },
  height: {
    type: [Number, String],
    default: null
  },
  placeholderText: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    default: ''
  },
  customClass: {
    type: String,
    default: ''
  }
})

// Track if the image failed to load
const imageError = ref(false)

// Get the image source from either direct URL or from our images plugin
const finalSrc = computed(() => {
  if (imageError.value) return ''
  
  // If we have a direct src, use that first
  if (props.src) return props.src
  
  // Otherwise try to get the image from our plugin
  if (props.imageKey) {
    return props.subKey ? 
      $getImagePath(props.imageKey, props.subKey) : 
      $getImagePath(props.imageKey)
  }
  
  // No valid source
  return ''
})

// Handle image loading errors
function handleImageError() {
  console.warn(`Failed to load image: ${finalSrc.value}`)
  imageError.value = true
}
</script>

<style scoped>
.image {
  display: block;
  max-width: 100%;
  height: auto;
}

.placeholder-image {
  overflow: hidden;
}
</style>
