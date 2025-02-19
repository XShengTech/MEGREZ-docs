# 部署

::: tip 💡 提示
此部分将指导您如何部署您的 MEGREZ
:::

## 名词解释

- **主程序**: 即 [MEGREZ](https://github.com/XShengTech/MEGREZ) 代码库构建的二进制可执行程序, 主要为前端 UI 界面、后端业务处理、控制端(控制被控端的程序) 三部分组成
- **被控端**: 即 [被控制端](https://github.com/XShengTech/gpu-docker-api) 代码库构建的二进制可执行程序, 通过主程序控制的带有多 GPU 的节点（或终端）, 仅限 Linux 系统