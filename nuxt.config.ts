// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/header.css',
    '~/assets/css/hero.css',
    '~/assets/css/sections.css',
    '~/assets/css/footer.css',
    '~/assets/css/dashboard.css',
    '~/assets/css/diamonds.css',
    '~/assets/css/pricing.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  app: {
    head: {
      title: 'ETHUN CHEATS',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Official website of Ethun Cheats, providing the best Antiban Panel for Free Fire.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Audiowide&family=Teko:wght@300;400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cal+Sans:wght@400;500;600&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:400,700,300' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500;600;700;800&family=Inter:wght@100;200;300;400&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap' },
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js' },
        { src: 'https://unpkg.com/@splinetool/viewer@1.9.96/build/spline-viewer.js', type: 'module' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js' },
        { src: 'https://unpkg.com/aos@2.3.1/dist/aos.js' }
      ],
      htmlAttrs: {
        style: 'scroll-behavior: smooth;'
      }
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase'
  ],
  runtimeConfig: {
    public: {
      adminEmail: process.env.ADMIN_EMAIL
    }
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirectOptions: {
      login: '/admin/login',
      callback: '/auth/callback',
      exclude: ['/', '/pricing', '/diamonds', '/roadmap']
    }
  },
  build: {
    transpile: ['gsap']
  }
})
