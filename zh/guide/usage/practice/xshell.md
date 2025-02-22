# XShell

XShell是 Windows 系统中非常好用的远程管理软件，功能强大方便。

## XShell 安装

XShell 目前对家庭/学校用户免费，企业用户需要购买授权。

访问 [XShell 官网](https://www.xshell.com/zh/free-for-home-school/) 下载最新版本的 XShell。

![XShell 下载](/guide/usage/practice/xshell1.webp)

打开 XShell，点击「Tool」-> 「Change Language」-> 「Chinese Simplified」，将语言改为中文。

![语言设置](/guide/usage/practice/xshell2.webp)

XSFTP 同理修改为中文。

## XShell 使用

实例开机后，获取 SSH 登录信息（实例 IP、SSH 端口、SSH 密码）。

![SSH 信息](/guide/usage/practice/xshell3.webp)

打开 XShell，点击「新建会话」按钮

![新建会话](/guide/usage/practice/xshell4.webp)

分别输入实例 IP、SSH 端口。例如此时主机应该输入 `11.80.7.31`，端口输入 `39352`

![输入实例信息](/guide/usage/practice/xshell5.webp)

点击「连接」按钮，用户名输入 `root`，然后输入 SSH 密码，点击「确定」按钮。

如下图所示，即为连接成功。

![连接成功](/guide/usage/practice/xshell6.webp)

## XShell 传输文件

如果已经配置了SSH登录，那么可以使用 XShell 提供的 XFTP 进行文件传输，方式如下：

![XSFTP](/guide/usage/practice/xshell7.webp)