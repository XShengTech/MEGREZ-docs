import { defineConfig } from 'vitepress'

import { zh } from './config/zh'

export default defineConfig({
  title: "MEGREZ 天权 - 文档",
  description: "算能聚联开源计算平台",
  lastUpdated: true,
  rewrites: {
    'zh/:rest*': ':rest*'
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  cleanUrls: true,
  themeConfig: {
    siteTitle: false,
    logo: '/logo-text.webp',

    // outline: {
    //   level: [2, 3]
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XShengTech/MEGREZ' }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: 'HFLGG2M13C',
        apiKey: '39de5daf18af75969515043a1f1cc895',
        indexName: 'MEGREZ',
        locales: {
          zh: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
    }
  },

  markdown: {},

  vite: {
    plugins: []
  },


  locales: {
    root: { label: '简体中文', ...zh }
  }
})
