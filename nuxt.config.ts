export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  googleFonts: {
    families: {
      'JetBrains+Mono': true,
      Inter: '200..700',
      'EB Garamond': {
        wght: '400..800',
        ital: '400..800',
      }
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
