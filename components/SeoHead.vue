<template>
  <!-- Este componente gerencia metadados SEO e ícones -->
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: '/favicon/android-chrome-512x512.png'
  },
  url: {
    type: String,
    default: ''
  }
})

const { t, locale } = useI18n()

// Valores padrão para cada idioma
const defaultTitles = {
  en: 'Equals9 - Blockchain Gaming and Tokenomics Platform',
  pt: 'Equals9 - Plataforma de Jogos Blockchain e Tokenomics',
  es: 'Equals9 - Plataforma de Juegos Blockchain y Tokenomics',
  // Adicione outros idiomas conforme necessário
}

const defaultDescriptions = {
  en: 'Equals9 is a pioneering blockchain gaming platform that offers revolutionary tokenomics and immersive gameplay experiences.',
  pt: 'Equals9 é uma plataforma pioneira de jogos blockchain que oferece tokenomics revolucionária e experiências de jogo imersivas.',
  es: 'Equals9 es una plataforma pionera de juegos blockchain que ofrece tokenomics revolucionaria y experiencias de juego inmersivas.',
  // Adicione outros idiomas conforme necessário
}

// Compute the SEO metadata
const pageTitle = computed(() => props.title || defaultTitles[locale.value] || defaultTitles.en)
const pageDescription = computed(() => props.description || defaultDescriptions[locale.value] || defaultDescriptions.en)
const pageUrl = computed(() => props.url ? props.url : process.client ? window.location.href : '')
const pageImage = computed(() => props.image)

// Define useMeta para SEO
useSeoMeta({
  title: pageTitle,
  ogTitle: pageTitle,
  description: pageDescription,
  ogDescription: pageDescription,
  ogImage: pageImage,
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: pageImage,
  // Adicionar meta tags para PWA
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppStatusBarStyle: 'black-translucent',
})

// Definir favicon e ícones para vários dispositivos
useHead({
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
    { rel: 'manifest', href: '/favicon/site.webmanifest' },
    { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
  ],
  meta: [
    { name: 'msapplication-TileColor', content: '#000000' },
    { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
    { name: 'theme-color', content: '#000000' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'format-detection', content: 'telephone=no' },
  ],
})
</script>
