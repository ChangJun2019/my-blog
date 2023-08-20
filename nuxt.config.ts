// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({

  extends: ['@nuxt-themes/typography'],

  // https://nuxt.com/docs/getting-started/configuration
  runtimeConfig: {
    // https://github.com/harlan-zw/nuxt-simple-sitemap#set-site-url-required-when-prerendering
    public: {
      siteUrl: 'https://52chinaweb.com',
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hans',
      },
      title: 'Chang Jun',
      meta: [
        { name: 'author', content: 'ChangJun' },
        { name: 'description', content: 'ChangJun\'s Blog' },
        { name: 'og:title', content: 'ChangJun\'s Blog' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://52chinaweb.com/' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://192960944.r.cdn36.com', crossorigin: '' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/blog-apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/blog-favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/blog-favicon-16x16.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://192960944.r.cdn36.com/chinesefonts1/packages/lxgwwenkai/dist/LXGWWenKai-Regular/result.css', as: 'style' },
      ],
      script: [
        { 'src': 'https://umami.52chinaweb.com/script.js', 'async': true, 'data-website-id': 'ee1faa71-851b-470b-a5d4-5b11c648ce50' },
      ],
    },
  },

  experimental: {
    payloadExtraction: true,
  },

  debug: false,
  nitro: {
    prerender: {
      routes: ['/feed.xml', '/feed.json', '/feed.atom'],
    },
  },

  // https://github.com/harlan-zw/nuxt-simple-sitemap/blob/main/src/module.ts
  sitemap: {
    discoverImages: false,
  },

  // https://github.com/harlan-zw/nuxt-simple-robots/blob/main/src/module.ts
  robots: {},

  modules: [
    '@vue-macros/nuxt',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxthq/ui',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
    '@nuxt/devtools',
  ],

  css: [
    '@/style/var.css',
    '@/style/global.css',
  ],

  // https://vue-macros.sxzz.moe/guide/configurations.html
  macros: {},

  // https://color-mode.nuxtjs.org/
  colorMode: {
    preference: 'system',
    classSuffix: '',
  },

  devtools: {
    // https://github.com/nuxt/devtools/blob/main/packages/devtools-kit/src/_types/module-options.ts
    enabled: true,
  },

  // https://content.nuxtjs.org/api/configuration
  content: {

    documentDriven: {
      layoutFallbacks: ['content'],
    },

    navigation: {
      fields: ['title', 'date', 'duration', 'cover'],
    },

    highlight: {
      theme: {
        dark: 'vitesse-dark',
        default: 'vitesse-light',
      },
      preload: [],
    },
  },
})
