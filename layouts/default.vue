<template>
  <div class="min-h-screen flex flex-col">
    <!-- Componente para SEO e gerenciamento de metadados -->
    <SeoHead />
    
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import SeoHead from '~/components/SeoHead.vue'
// Os componentes Header e Footer são automaticamente importados pelo Nuxt
</script>
