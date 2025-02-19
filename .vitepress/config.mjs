import { defineConfig } from 'vitepress'

import { zh } from './config/zh'

export default defineConfig({
  title: "MEGREZ 天权",
  description: "算能聚联开源计算平台",
  lastUpdated: true,
  rewrites: {
    'zh/:rest*': ':rest*'
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    siteTitle: false,
    logo: '/logo-text.webp',

    // outline: {
    //   level: [2, 3]
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XShengTech/MEGREZ' }
    ],
  },

  markdown: {},

  vite: {
    plugins: []
  },


  locales: {
    root: { label: '简体中文', ...zh }
  }
})
