<template>
  <footer class="bg-dark text-white py-10">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Coluna 1: Logo e Descrição -->
        <div class="flex flex-col h-full justify-between">
          <div>
            <div class="mb-4">
              <img src="/images/logo/equals9-logo.svg" alt="Equals9" class="h-10" style="filter: brightness(1);">
            </div>
            <p class="text-gray-300 mb-6">
              {{ $t('footer.description') }}
            </p>
          </div>
          <!-- Ícones Sociais alinhados ao pé da coluna para simetria -->
          <div class="mt-4">
            <SocialIcons />
          </div>
        </div>
        
        <!-- Coluna 2: Links Rápidos em duas colunas -->
        <div class="flex flex-col h-full">
          <h3 class="text-xl font-bold mb-3">{{ $t('footer.quick_links') }}</h3>
          <div class="grid grid-cols-2 gap-x-4">
            <!-- Primeira coluna de links -->
            <ul class="space-y-2">
              <li><NuxtLink :to="localePath('/')" class="text-gray-300 hover:text-white">Home</NuxtLink></li>
              <li><NuxtLink :to="localePath('/tokenomics')" class="text-gray-300 hover:text-white">Tokenomics</NuxtLink></li>
              <li><NuxtLink :to="localePath('/whitepaper')" class="text-gray-300 hover:text-white">{{ $t('nav.whitepaper') }}</NuxtLink></li>
            </ul>
            <!-- Segunda coluna de links -->
            <ul class="space-y-2">
              <li><NuxtLink :to="localePath('/home-of-gaming')" class="text-gray-300 hover:text-white">Home of Gaming</NuxtLink></li>
              <li><NuxtLink :to="localePath('/contact')" class="text-gray-300 hover:text-white">Contact</NuxtLink></li>
            </ul>
          </div>
        </div>
        
        <!-- Coluna 3: Contato -->
        <div class="flex flex-col h-full">
          <h3 class="text-xl font-bold mb-3">{{ $t('footer.contact_us') }}</h3>
          <ul class="space-y-3">
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:contato@equals9.com" class="text-gray-300 hover:text-white">{{ $t('footer.email_us') }}: contato@equals9.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="border-t border-gray-700 mt-10 pt-8 text-center text-gray-300">
        <p>&copy; {{ new Date().getFullYear() }} Equals9. {{ $t('general.all_rights_reserved') }}.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SocialIcons from './SocialIcons.vue'
import { useLocalePath } from '#imports'

const localePath = useLocalePath()
</script>

<style scoped>
/* Estilos para melhorar a simetria */
.footer-column {
  display: flex;
  flex-direction: column;
}
</style>
