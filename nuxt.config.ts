// https://nuxt.com/docs/api/configuration/nuxt-config
import { join } from 'path'
export default defineNuxtConfig({
  modules: [
    'nuxt-delay-hydration',
    '@vite-pwa/nuxt'
  ],
  app: {
    head: {
      title: 'sharetime.zone',
      charset: 'utf-8',
      meta: [
        { name: 'description', content: 'Share time in different timezones easily' },
        { hid: 'og:title', property: 'og:title', content: 'Your OG Title' },
        { hid: 'og:description', property: 'og:description', content: 'Your OG Description' },
        { hid: 'og:image', property: 'og:image', content: 'https://sharetime-zone.vercel.app/og-image.jpg' },
        { hid: 'og:url', property: 'og:url', content: 'hhttps://sharetime-zone.vercel.app' },
        { hid: 'og:type', property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },
  srcDir: 'src',
  alias: {
    '~bulma': 'node_modules/bulma'
  },
  css: [
    '@/styles/fonts.css',
    '@/styles/app.scss'
  ],
  nitro: {
    preset: 'static'
  },
  pwa: {
    manifestFilename: 'site.webmanifest',
    injectRegister: 'script',
    injectManifest: {
      swDest: join(__dirname, 'dist', 'sw.js')
    },
    registerWebManifestInRouteRules: true,
    writePlugin: true
  },
  delayHydration: {
    // debug: process.env.NODE_ENV === 'development',
    mode: 'mount'
  }
})
