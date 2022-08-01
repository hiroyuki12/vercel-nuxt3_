import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/pwa'
  ],
  /*
   ** @nuxtjs/pwa Configuration
   ** https://github.com/nuxt-community/pwa-module
   */
  manifest: {
    display: 'standalone',
    name: 'Nuxt3',
    lang: 'ja',
    short_name: 'Nuxt3',
    title: 'Nuxt3',
    description: 'Nuxt3',
    theme_color: '#212121',
    background_color: '#212121'
  },
})
