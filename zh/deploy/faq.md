# 常见问题

## 配置 Docker 镜像加速

修改 `/etc/docker/daemon.json` 添加 `registry-mirrors` 字段。示例为 1Panel 的镜像加速地址, 可根据实际情况修改。

```json
{
    "registry-mirrors": ["https://docker.1panelproxy.com"]
}
```


## 在 Ubuntu 24.04 系统部署的被控端, 监控显示的核心数有问题

::: tip 💡 提示
重启 lxcfs 前, 请先关闭该节点上的所有容器, 否则可能造成未知错误
:::

Ubuntu 24.04 的 lxcfs 服务添加 `--enable-cfs` 特性

```bash
vim /usr/lib/systemd/system/lxcfs.service
```

修改高亮行

```ini:line-numbers
[Unit]
Description=FUSE filesystem for LXC
ConditionVirtualization=!container
Before=lxc.service
Documentation=man:lxcfs(1)

[Service]
ExecStart=/usr/bin/lxcfs /var/lib/lxcfs # [!code --]
ExecStart=/usr/bin/lxcfs /var/lib/lxcfs --enable-cfs # [!code ++]
KillMode=process
Restart=on-failure
ExecStopPost=-/bin/fusermount -u /var/lib/lxcfs
Delegate=yes
ExecReload=/bin/kill -USR1 $MAINPID

[Install]
WantedBy=multi-user.target
```


重启 lxcfs 服务

```bash
systemctl daemon-reload
service lxcfs restart
```


## 实例运行一段时间后, 运行 `nvidia-smi` 报错 `Failed to initialize NVML: Unknown Error`

:::tip 💡 提示
在使用 v0.1.0 之前的版本, 可能会出现这个问题。如果在使用 v0.1.0 之后的版本, 在输入下方命令后仍然出现这个问题, 请在 [XShengTech/gpu-docker-api](https://github.com/XShengTech/gpu-docker-api/issues) 仓库提交 issue
:::

* 相关问题: [NVIDIA/nvidia-container-toolkit#48](https://github.com/NVIDIA/nvidia-container-toolkit/issues/48)

在节点服务器上执行以下命令

```bash
sudo nvidia-ctk system create-dev-char-symlinks --create-all
```