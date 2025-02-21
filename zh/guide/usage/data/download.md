# 下载数据

## 下载方式

1. [在线 VSCode](/guide/usage/instances/code-server) 下载，优点简单，但是不能下载文件夹，且下载速度慢
2. [Jupter Lab](/guide/usage/instances/jupter-lab) 下载，优点简单，但是不能下载文件夹，且下载速度慢
3. `scp` 命令支持文件和文件夹上传下载，由于是命令行执行，上手难度稍高
4. [FileZilla](/guide/usage/practice/filezilla) 软件支持文件和文件夹，拖拉拽即可上传下载，**推荐使用**
5. [Termius](/guide/usage/practice/termius) 软件支持文件和文件夹，拖拉拽即可上传下载，**推荐使用**
6. [XShell](/guide/usage/practice/xshell) 软件支持管理SSH连接，而且集成了xftp，支持拖拉拽上传下载文件夹/文件，**推荐使用**

## 在线 VSCode 下载数据

选中文件，鼠标右键，点击下载即可

![在线 VSCode 下载数据](/guide/usage/data/download1.webp)

## Jupter Lab 下载数据

选中文件，鼠标右键，点击下载即可

![Jupter Lab 下载数据](/guide/usage/data/download2.webp)

## SCP 命令

::: tip 💡 提示
注意下方指令需要在您**本地**的机器上执行，向本地中拷贝实例中的数据，而不是在实例中执行该命令
:::

复制实例的 IP 地址、SSH 端口与密码

![实例信息](/guide/usage/data/download3.webp)

SSH 的连接命令是 `ssh root@ip地址 -p 端口`。例如此时是 `ssh root@11.80.7.31 -p 38005`

则 SCP 远程拷贝的指令就是 (注意需要在您**本地**的机器上执行)

```bash
scp -rP <端口> root@<ip地址>:/root/megrez-tmp/<文件/文件夹> <本地路径>
```

例如此时是

```bash
scp -rP 38005 root@11.80.7.31:/root/megrez-tmp/<文件/文件夹> <本地路径>
```

![SCP 远程拷贝](/guide/usage/data/download4.webp)

然后输入密码即可

## FileZilla

参考 [FileZilla](/guide/usage/practice/filezilla)

## Termius

参考 [Termius](/guide/usage/practice/termius)

## XShell

参考 [XShell](/guide/usage/practice/xshell)