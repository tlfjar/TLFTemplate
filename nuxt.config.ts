import { appDescription, appName } from './constants/index'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-08-21',

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },

    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },
  imports: {
    presets: [
      {
        from: 'vue-starport',
        imports: ['Starport', 'StarportCarrier'],
      },
    ],
  },

  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('Starport'),
    },
  },

  formkit: {
    autoImport: true,
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  site: {
    // production URL. Can also use a .env file or environment variables:
    // `NUXT_PUBLIC_SITE_URL=https://example.com`
    url: 'https://example.com',
    // these are populated by `constants/index.ts`. Change that file instad of hardcoding here.
    name: appName,
    description: appDescription,
    // not needed if you have @nuxtjs/i18n installed
    defaultLocale: 'en',
  },

  devtools: {
    enabled: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
    // Add custom fonts, with further tweaks in `uno.config.ts`
    // Some example custom fonts are included in the `public` folder.
    // If you would rather use Google Fonts, you can use the `@unocss/preset-web-fonts` preset and remove this line and the associated lines in the `uno.config.ts` file.
    '~/assets/css/fonts.css',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  modules: [
    'radix-vue/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/seo',
    '@formkit/nuxt',
  ],
})
