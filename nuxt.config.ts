import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/pwa'
  ],
  pwa: {
    icon: {
      source: '/icon.png',    // このファイルを元に各サイズ毎のアイコン画像を自動生成してくれる
      fileName: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
      targetDir: 'icons',
      plugin: true,
    }
  },
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
  }
})
