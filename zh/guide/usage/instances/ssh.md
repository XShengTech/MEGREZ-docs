# SSH

::: tip 💡 提示
如果您是 Windows 用户，可以使用系统自带的 Powershell/CMD 登录。如果要更好的终端体验推荐下载使用 [Termius](/guide/usage/practice/termius) 工具, 或者使用 [XShell](/guide/usage/practice/xshell) 工具更佳。

如果是 Mac/Linux 用户，可以使用系统自带的 Terminal 完成 SSH 登录。如果要更好的终端体验推荐下载使用 [Termius](/guide/usage/practice/termius) 工具。
:::

开机实例后，复制主机的IP地址、SSH端口与密码

![SSH 信息](/guide/usage/instances/ssh1.webp)

打开终端，输入`ssh root@ip地址 -p 端口`。例如，此时应当输入 `ssh root@11.80.7.31 -p 35748`

![SSH 登录](/guide/usage/instances/ssh2.webp)

输入 `yes` 保存服务器的 SSH 指纹信息

![SSH 指纹](/guide/usage/instances/ssh3.webp)

在此处粘贴刚才复制的密码，并按下回车（终端中密码不会显示出来）

![SSH 输入密码](/guide/usage/instances/ssh4.webp)

显示该界面即登陆成功

![SSH 登录成功](/guide/usage/instances/ssh5.webp)