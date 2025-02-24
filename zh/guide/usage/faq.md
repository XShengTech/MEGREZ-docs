# 常见问题

[[toc]]

## 系统盘空间不足怎么办？

通常是因为 conda、pip、apt 的安装包缓存导致的，删除即可

```bash
conda clean -y --all  # 删除 conda 缓存
rm -r ~/.cache/pip/*  # 删除 pip 缓存
apt-get clean         # 删除 apt 缓存
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

```bash
ps aux | grep python
```

如果要直接杀死进程，可以运行下面的命令

```bash
ps aux | grep python | grep -v grep | awk '{print $2}' | xargs kill -9
```