import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vite-pwa/nuxt'
  ],
  pwa: {
    registerType: 'autoUpdate',
    includeAssets: ['icon.png'],
    manifest: {
      display: 'standalone',
      name: 'Nuxt3',
      lang: 'ja',
      short_name: 'Nuxt3',
      description: 'Nuxt3',
      theme_color: '#212121',
      background_color: '#212121',
      icons: [
        {
          src: '/icon.png',
          sizes: 'any',
          type: 'image/png'
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      youTubeApiKey: process.env.YOUTUBE_API_KEY
    }
  }
})
