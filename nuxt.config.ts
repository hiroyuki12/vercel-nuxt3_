import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    meta: {
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'NuxtJS' },
    }
  },
  buildModules: [
    '@nuxtjs/pwa'
  ],
  /*
   ** @nuxtjs/pwa Configuration
   ** https://github.com/nuxt-community/pwa-module
   */
  manifest: {
    name: 'Nuxt3',
    lang: 'ja',
    short_name: 'vercel-nuxt3_',
    title: 'Nuxt3',
    'og:title': 'Nuxt3',
    description: 'Nuxt3',
    'og:description': 'Nuxt3',
    theme_color: '#212121',
    background_color: '#212121'
  },
  pwa: {
    icon: false // disables the icon module
  },
})
