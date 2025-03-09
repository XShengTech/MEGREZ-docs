import { defineConfig } from 'vitepress'

import { zh } from './config/zh'
// import { en } from './config/en'

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
  cleanUrls: false,
  themeConfig: {
    siteTitle: false,
    logo: '/logo-text.webp',

    // outline: {
    //   level: [2, 3]
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XShengTech/MEGREZ' },
      { 
        icon: {
          svg: '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g><title>Layer 1</title><g stroke="null"><path stroke="null" fill="#00D6B9" d="m3.03084,1.81732c0,0.50632 3.54423,1.77212 7.46567,8.4778c0,0 2.11844,-2.20907 3.16703,-2.9083c0.75948,-0.50632 1.37314,-0.67442 1.37314,-0.67442c0,-1.27187 -2.13262,-4.89509 -2.89209,-4.89509l-9.11374,0z"/><path stroke="null" fill="#163C9A" d="m19.99252,7.13367c-0.50632,-0.33771 -1.84806,-0.89669 -3.29107,-0.75948a7.56694,7.56694 0 0 0 -1.66478,0.33822s-0.61366,0.1681 -1.37314,0.67442c-1.04808,0.69872 -3.16703,2.9083 -3.16703,2.9083c-0.72302,0.70733 -1.54427,1.38326 -2.65564,1.90173c0,0 3.54423,1.51896 5.82267,1.51896c2.56349,0 3.54423,-1.77212 3.54423,-1.77212c0.75948,-1.67338 1.77212,-3.54423 2.78475,-4.81003z"/><path stroke="null" fill="#3370FF" d="m-0.00707,6.62735l0,8.60742c0,0.50632 3.03791,2.78475 7.59478,2.78475c5.06319,0 8.63274,-3.90119 9.62006,-6.07583c0,0 -0.98074,1.77212 -3.54423,1.77212c-2.27844,0 -5.82267,-1.51896 -5.82267,-1.51896c-2.59083,-1.13365 -5.07838,-3.33006 -6.53455,-4.61611c-0.82024,-0.72404 -1.31339,-1.15947 -1.31339,-0.9534z"/></g></g></svg>'
        },
        link: 'https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=162v2304-4020-4c0a-af96-2b3caa5d4da6'
      },
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

  markdown: {
    toc: {
      level: [ 2 ],
    }
  },

  vite: {
    plugins: []
  },


  locales: {
    root: { label: '简体中文', ...zh },
    // en: { label: 'English', ...en }
  }
})
