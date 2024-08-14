import splashScreen from './components/splashscreen/splashscreen'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
  modules: [
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-typed-router',
    '@nuxt/icon',
    '@nuxt/eslint',
  ],

  experimental: {
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@/assets/styles/main.scss',
  ],

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  app: {
    rootAttrs: {
      id: '__furnihub',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  
  devtools: {
    enabled: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  fonts: {
    families: [
      { name: 'Roboto', provider: 'google' },
    ],
  },
  icon: {
    provider: 'iconify',
    componentName: 'NuxtIcon',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_variables.scss" as *;',
        },
      },
    },
  },
})
