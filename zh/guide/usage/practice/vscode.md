# VSCode

:::tip 💡 提示
推荐使用[在线 VSCode](/guide/usage/instances/code-server)，和远程 VSCode 连接实例的体验一致，而且无需担心网络波动可能带来的一系列问题
:::

::: warning ⚠️ 警告
如果使用VSCode直接执行或开终端执行训练程序，请在调试完成后最后通过screen/tmux工具开守护进程，确保程序不受SSH连接中断影响程序执行！
:::

官方文档: [Remote SSH](https://code.visualstudio.com/docs/remote/ssh-tutorial)

MEGREZ 使用方法：

在进行操作前，需要先安装好 VSCode，此外还需要

1. 在 MEGREZ 上创建好实例，并开机，获取到 SSH 登录信息（实例 IP、SSH 端口、SSH 密码）
2. 本地安装 VSCode 远程开发插件（需配置Remote-SSH）

## 登录 MEGREZ 选择开机的实例

获取SSH登录信息

![SSH 信息](/guide/usage/practice/vscode1.webp)

## 本地 VSCode 配置 Remote-SSH

如果您本地VSCode开发工具已安装Remote-SSH，可跳过此步骤，直接参考 [步骤3](#ssh-连接并登录-megrez-创建的实例)

打开本地的 VSCode 插件菜单，在扩展程序中搜素 `Remote-SSH` 并安装

![Remote-SSH 安装](/guide/usage/practice/vscode2.webp)

## SSH 连接并登录 MEGREZ 创建的实例

![Remote-SSH 连接](/guide/usage/practice/vscode3.webp)

输入 `ssh root@<ip地址> -p <端口>`。例如，此时应当输入 `ssh root@11.80.7.31 -p 39352`

回车后会弹出以下自定义 SSH config 文件的弹窗，不需要，直接回车即可。

![自定义 SSH config](/guide/usage/practice/vscode4.webp)

连接 MEGREZ 实例

![Remote-SSH 连接方法](/guide/usage/practice/vscode5.webp)

输入密码，等待SSH登录完成。

![SSH 输入密码](/guide/usage/practice/vscode6.webp)

连接成功后，VSCode 会自动打开一个新的窗口，左下角会显示绿色的 `SSH: <ip地址>` 字样，表示已经成功连接到 MEGREZ 实例。

图示代码已经上传到实例 `/root/megrez-tmp` 目录中。如您还未上传资源，您可以参考[上传数据](/guide/usage/data/upload)章节内容上传代码

![VSCode 连接成功](/guide/usage/practice/vscode7.webp)

## VSCode 插件推荐

* Python 插件
* Pylance 插件
* indent-rainbow 插件
* Code Runner 插件