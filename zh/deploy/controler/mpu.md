# 容器 PID 映射 <Badge type="warning" text="实验性" />

::: warning ⚠️ 警告
该特性为实验性功能，可能会造成不可预知的问题，请谨慎使用。
:::

## 问题描述

在容器实例内部使用 `nvidia-smi` 命令时，可能会出现没有显示占用 GPU 的进程的 pid 的情况，这是因为容器内部的进程和宿主机的进程不在同一个命名空间中，导致 `nvidia-smi` 无法获取到容器内部的进程信息。如下图所示

![nvidia-smi](/deploy/controler/mpu-1.webp)

### 相关 Issue

- [NVIDIA/nvidia-docker#179](https://github.com/NVIDIA/nvidia-docker/issues/179)

## 解决办法

::: warning ⚠️ 警告
需要在每一台被控端宿主机上安装此内核模块

内核模块安装支持热加载, 即无需重启即可生效
:::

::: tip 💡 提示
该内核模块目前在以下环境测试通过，其他环境可能需要自测试

- Ubuntu 22.04, kernel 5.15.0-125 x64, docker 27.5.0, NVIDIA driver 550.135
- Ubuntu 22.04, kernel 5.15.0-133 x64, docker 28.0.1, NVIDIA driver 550.135
- Ubuntu 24.04, kernel 6.8.0-55 x64, docker 28.0.1, NVIDIA driver 550.135
- Ubuntu 24.04, kernel 6.8.0-55 x64, docker 28.0.1, NVIDIA driver 570.124.04
:::

::: info 📝 说明
此实现移除了 `cr0` 的注入，以确保内存安全，同时使用 `ftrace` 替代之前的 `kprobes` 实现，以确保内核版本的兼容性。
:::

### 下载源代码

```bash
git clone https://github.com/XShengTech/mpu.git
cd mpu
```

### 编译内核模块

```bash
chmod +x run.sh
./run.sh install
```

### 检查安装

```bash
lsmod | grep mpu
```

有类似下方的返回即可：

```bash
mpu                    20480  0
```

### 卸载内核模块

::: tip 💡 提示
如果需要卸载内核模块，可以执行以下命令
:::

```bash
./run.sh uninstall
```