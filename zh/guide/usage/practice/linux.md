# Linux 基础

在 MEGREZ 实例的系统默认为 Linux Ubuntu 发行版，因此熟悉使用基本的 Linux 命令对于训练模型非常有必要。以下为常用必备命令使用介绍：

## 列出文件夹

命令: `ls` (list)

```bash
(base) root@90a257c86206:/root# ls  # 列出当前目录下的文件和文件夹
megrez-tmp  miniconda3

(base) root@90a257c86206:/root# ls -alh  # 列出文件和文件夹的详细信息：权限、文件大小、Owner、Group、创建/更新时间
total 40K
drwx------ 1 root root 4.0K Feb 22 09:08 .
drwxr-xr-x 1 root root  101 Feb 22 09:02 ..
-rw-r--r-- 1 root root 3.6K Jan 15 09:33 .bashrc
drwxr-xr-x 1 root root   33 Jan 15 09:32 .cache
drwxr-xr-x 1 root root   47 Jan 15 09:31 .conda
-rw-r--r-- 1 root root  246 Jan 15 09:28 .condarc
drwxr-xr-x 1 root root   33 Jan 15 09:33 .config
drwxr-xr-x 2 root root   85 Feb 22 09:08 .ipynb_checkpoints
drwxr-xr-x 1 root root   37 Feb 22 09:05 .ipython
drwx------ 1 root root   83 Feb 22 09:02 .jupyter
drwxr-xr-x 1 root root   27 Jan 15 09:32 .local
-rw-r--r-- 1 root root  161 Jul  9  2019 .profile
-rw-r--r-- 1 root root  287 Jan 15 09:31 .tcshrc
-rw-r--r-- 1 root root  165 Jan 15 09:32 .wget-hsts
-rw-r--r-- 1 root root  643 Jan 15 09:31 .xonshrc
-rw-r--r-- 1 root root  454 Jan 15 09:31 .zshrc
drwxr-xr-x 2 root root    6 Feb 22 09:02 megrez-tmp
drwxr-xr-x 1 root root   41 Jan 15 09:31 miniconda3
```

## 新建/切换文件夹

新建命令: `mkdir` (make directory)

切换命令: `cd` (change working directory)