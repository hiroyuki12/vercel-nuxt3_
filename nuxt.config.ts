import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/pwa'
  ],
  /*
   ** @nuxtjs/pwa Configuration
   ** https://github.com/nuxt-community/pwa-module
   */
  manifest: {
    name: 'demo',
    lang: 'ja',
    short_name: 'demo',
    title: 'demo',
    'og:title': 'demo',
    description: 'demoサイトです',
    'og:description': 'demoサイトです',
    theme_color: '#212121',
    background_color: '#212121'
  },
})
