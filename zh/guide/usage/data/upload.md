# 上传数据

## 上传方式

1. [在线 VSCode](/guide/usage/instances/code-server) 上传，优点简单，但是上传速度慢
2. [Jupter Lab](/guide/usage/instances/jupter-lab) 上传，优点简单，但是上传速度慢
3. `scp` 命令支持文件和文件夹上传下载，由于是命令行执行，上手难度稍高
4. [FileZilla](/guide/usage/practice/filezilla) 软件支持文件和文件夹，拖拉拽即可上传下载，**推荐使用**
5. [Termius](/guide/usage/practice/termius) 软件支持文件和文件夹，拖拉拽即可上传下载，**推荐使用**
6. [XShell](/guide/usage/practice/xshell) 软件支持管理SSH连接，而且集成了xftp，支持拖拉拽上传下载文件夹/文件，**推荐使用**

## 在线 VSCode 上传数据

将文件或文件夹拖入左侧文件列表所在的区域即可上传

![在线 VSCode 上传数据](/guide/usage/data/upload1.webp)

## Jupter Lab 上传数据

将文件或文件夹拖入左侧文件列表所在的区域即可上传；或点击上方的上传按钮，选择文件上传

![Jupter Lab 上传数据](/guide/usage/data/upload2.webp)

## SCP 远程拷贝

::: tip 💡 提示
注意下方指令需要在您**本地**的机器上执行，向实例中拷贝数据，而不是在实例中执行该命令
:::

复制实例的 IP 地址、SSH 端口与密码

![实例信息](/guide/usage/data/upload3.webp)

SSH 的连接命令是 `ssh root@ip地址 -p 端口`。例如此时是 `ssh root@11.80.7.31 -p 38005`

则 SCP 远程拷贝的指令就是 (注意需要在您**本地**的机器上执行)

```bash
scp -rP <端口> <本地文件/文件夹> root@<ip地址>:/root/megrez-tmp
```

例如此时是

```bash
scp -rP 38005 <本地文件/文件夹> root@11.80.7.31:/root/megrez-tmp
```

![SCP 远程拷贝](/guide/usage/data/upload4.webp)

然后输入密码即可

### 高级使用方法

上面直接scp文件夹的方法，如果小文件多，那么scp速度会非常缓慢。可以使用以下方法拷贝tar流（前提需要本地电脑有tar命令）

```bash
cd <要拷贝的文件夹目录下>
tar cf - * | ssh -p <端口> root@<ip> "cd /root/megrez-tmp && tar xf -"
```

## FileZilla

参考 [FileZilla](/guide/usage/practice/filezilla)

## Termius

参考 [Termius](/guide/usage/practice/termius)

## XShell

参考 [XShell](/guide/usage/practice/xshell)