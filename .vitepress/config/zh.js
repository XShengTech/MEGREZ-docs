import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh',

  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '部署', link: '/deploy/', activeMatch: '/deploy/' },
      { text: '指南',
        activeMatch: '/guide/',
        items: [
          { text: '运维说明', link: '/guide/maintenance/', activeMatch: '/guide/maintenance/' },
          { text: '用户手册', link: '/guide/usage/', activeMatch: '/guide/usage/' },
        ]
      },
      { text: '关于', link: '/about/', activeMatch: '/about/' },
    ],

    sidebar: {
      '/deploy/': [
        {
          text: '部署',
          link: '/deploy/'
        },
        {
          text: '主程序',
          collapsed: false,
          items: [
            { text: '部署', link: '/deploy/megrez/' },
            { text: '配置反向代理', link: '/deploy/megrez/proxy' },

          ],
        },
        {
          text: '被控端',
          collapsed: false,
          items: [
            { text: '检查状态', link: '/deploy/controler/check' },
            { text: '部署', link: '/deploy/controler/' },
          ],
        },
        {
          text: '镜像介绍',
          link: '/deploy/images'
        },
        {
          text: '常见问题',
          link: '/deploy/faq'
        },
      ],
      '/guide/maintenance/': [
        {
          text: '运维说明',
          collapsed: false,
          link: '/guide/maintenance/',
          items: [
            { text: '系统配置', link: '/guide/maintenance/config' },
          ]
        },
        {
          text: '节点管理',
          collapsed: false,
          link: '/guide/maintenance/servers/',
          items: [
            { text: '添加节点', link: '/guide/maintenance/servers/add' },
            { text: '删除节点', link: '/guide/maintenance/servers/delete' },
            { text: '节点状态', link: '/guide/maintenance/servers/status' },
          ]
        },
        {
          text: '实例管理',
          collapsed: false,
          link: '/guide/maintenance/instances/',
          items: [
            { text: '实例状态', link: '/guide/maintenance/instances/status' },
            { text: '实例操作', link: '/guide/maintenance/instances/operate' },
            { text: '调整配置', link: '/guide/maintenance/instances/resume' },
            { text: '删除实例', link: '/guide/maintenance/instances/delete' },
          ]
        },
        {
          text: '用户管理',
          collapsed: false,
          link: '/guide/maintenance/users/',
          items: [
            { text: '用户权限', link: '/guide/maintenance/users/permission' },
            { text: '用户设置', link: '/guide/maintenance/users/settings' },
            { text: '删除用户', link: '/guide/maintenance/users/delete' },
          ]
        },
        {
          text: '镜像管理', 
          collapsed: false,
          link: '/guide/maintenance/images/',
          items: [
            { text: '添加镜像', link: '/guide/maintenance/images/add' },
            { text: '删除镜像', link: '/guide/maintenance/images/delete' },
          ]
        },
      ],
      '/guide/usage/': [
        {
          text: '用户手册',
          link: '/guide/usage/',
          items: [
            { text: '快速开始', link: '/guide/usage/quick-start' },
          ],
        },
        {
          text: '容器实例',
          collapsed: false,
          items: [
            { text: '概要', link: '/guide/usage/instances/' },
            { text: 'SSH', link: '/guide/usage/instances/ssh' },
            { text: '在线 VSCode', link: '/guide/usage/instances/code-server' },
            { text: 'Jupter Notebook', link: '/guide/usage/instances/jupter-lab' },
            { text: '性能监控', link: '/guide/usage/instances/monitor' },
            { text: '升降配置', link: '/guide/usage/instances/resume' },
          ],
        },
        {
          text: '数据管理',
          collapsed: false,
          items: [
            { text: '概要', link: '/guide/usage/data/' },
            { text: '上传数据', link: '/guide/usage/data/upload' },
            { text: '下载数据', link: '/guide/usage/data/download' },
            { text: '扩缩容量', link: '/guide/usage/data/resize' },
          ],
        },
        {
          text: '环境配置',
          collapsed: false,
          items: [
            { text: '概要', link: '/guide/usage/environment/' },
            { text: '镜像', link: '/guide/usage/environment/images' },
            { text: '依赖安装', link: '/guide/usage/environment/dependences' },
            { 
              text: '自定义环境',
              items: [
                { text: 'MiniConda', link: '/guide/usage/environment/custom/miniconda' },
                { text: 'Python 安装', link: '/guide/usage/environment/custom/python' },
                { text: 'CUDA / cuDNN', link: '/guide/usage/environment/custom/cuda-cudnn' },
              ]
            },
          ],
        },
        {
          text: '最佳实践',
          collapsed: true,
          items: [
            { text: 'Linux 基础', link: '/guide/usage/practice/linux' },
            { text: 'VSCode', link: '/guide/usage/practice/vscode' },
            { text: 'XShell', link: '/guide/usage/practice/xshell' },
            { text: 'Termius', link: '/guide/usage/practice/termius' },
            { text: 'Filezilla', link: '/guide/usage/practice/filezilla' },
            { text: '性能调优', link: '/guide/usage/practice/performance' },
          ],
        },
        { text: '常见问题', link: '/guide/usage/faq' },
      ],
      '/about/': [
        {
          text: '关于',
          items: [
            { text: '什么是 MEGREZ？', link: '/about' },
            { text: '联系我们', link: '/about/contact' },
          ],
        }
      ],
    },

    footer: {
      message: '基于 AGPL-v3 许可发布',
      copyright: '版权所有 © 2024-Precent 晓声科技'
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    editLink: {
      pattern: 'https://github.com/XShengTech/MEGREZ-docs/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    }
  },
})