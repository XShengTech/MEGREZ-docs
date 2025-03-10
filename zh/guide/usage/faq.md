---
outline: 2
markdown:
  toc:
    level:
      - 2
---

# 常见问题

[[toc]]

## 系统盘空间不足怎么办？

通常是因为 conda、pip、apt 的安装包缓存导致的，删除即可

```bash
conda clean -y --all  # 删除 conda 缓存
rm -r ~/.cache/pip/*  # 删除 pip 缓存
apt-get clean         # 删除 apt 缓存
```

也有可能是因为其他包(如 HuggingFace)的缓存导致的, 可通过下面这个命令查看当前目录下每个目录的大小

```bash
du -h --max-depth=1 --exclude="*proc*"
```

如对用户缓存目录 `/root/.cache` 返回结果如下

::: tip 💡 提示
结果会包含数据盘的大小，可以忽略
:::

```bash
0       ./conda
0       ./conda-anaconda-tos
4.0K    ./Microsoft
269M    ./pip
278M    ./torch
56K     ./matplotlib
11G     ./huggingface
0       ./code-server
11G     .
```

## HuggingFace 缓存占用空间过大怎么办？

使用 HuggingFace 包时，可以使用下面环境变量来设置缓存目录

::: tip 💡 提示
需要在运行代码前设置

或者在 `~/.bashrc` 或 `~/.bash_profile` 中设置
:::

```bash
export HF_HOME=/root/megrez-tmp/huggingface
```

## Code-Server（在线 VSCode）无法访问

Code-Server 服务没启动。通过 SSH 连接上实例后，执行以下命令重启服务

```
service code-server restart
```

## Jupter-Lab无法访问

Jupter-Lab 服务没启动。通过 SSH 连接上实例后，执行以下命令重启服务

::: tip 💡 提示
如执行以下命令后仍然无法访问，请尝试检查 conda 的 base 环境是否有依赖错误
:::

```
service jupyter restart
```

## 性能监控无法访问

Granfana 服务没启动。通过 SSH 连接上实例后，执行以下命令重启服务

```
service grafana-server restart
```

## `nvidia-smi` 没有显示占用 GPU 的进程的 pid 怎么办

::: tip 💡 提示
如果您是系统管理员，可尝试此特性 [容器 PID 映射](/deploy/controler/mpu)
:::

```bash
ps aux | grep python
```

如果要直接杀死进程，可以运行下面的命令

```bash
ps aux | grep python | grep -v grep | awk '{print $2}' | xargs kill -9
```