# 镜像介绍

## 镜像地址

环境打包镜像有两个发布地址

* [Docker Hub](https://hub.docker.com/r/xshengtech/megrez)
* [阿里云容器镜像服务](https://registry.cn-shanghai.aliyuncs.com/xshengtech/megrez) (仅环境打包镜像, 不包含主程序)

## Tag 标签说明

例如 `xshengtech/megrez:pytorch-2.4.0_cuda-12.1_python-3.12_ubuntu-22.04`

* `pytorch-2.4.0` - PyTorch 版本, 可能是其他深度学习框架
* `cuda-12.1` - CUDA 版本
* `python-3.12` - Python 版本
* `ubuntu-22.04` - Ubuntu 版本

## 镜像列表

::: tip 💡 提示
如果您有其他深度学习框架或特殊版本的打包镜像需求,, 请在 [MEGREZ 打包镜像仓库](https://github.com/XShengTech/MEGREZ-images) 中提交 issue
:::

### PyTorch

| 镜像标签 | PyTorch | CUDA | Python | Ubuntu |
| --- | ------- | ---- | ------ | ------ |
| pytorch-1.8.1_cuda-11.1_python-3.8_ubuntu-20.04 | 1.8.1 | 11.1 | 3.8 | 20.04 |
| pytorch-1.10.2_cuda-11.1_python-3.9_ubuntu-20.04 | 1.10.2 | 11.1 | 3.9 | 20.04 |
| pytorch-1.13.1_cuda-11.7_python-3.10_ubuntu-22.04 | 1.13.1 | 11.7 | 3.10 | 22.04 |
| pytorch-2.0.1_cuda-11.8_python-3.10_ubuntu-22.04 | 2.0.1 | 11.8 | 3.10 | 22.04 |
| pytorch-2.1.2_cuda-12.1_python-3.10_ubuntu-22.04 | 2.1.2 | 12.1 | 3.10 | 22.04 |
| pytorch-2.3.1_cuda-12.1_python-3.11_ubuntu-22.04 | 2.3.1 | 12.1 | 3.11 | 22.04 |
| pytorch-2.4.0_cuda-12.1_python-3.12_ubuntu-22.04 | 2.4.0 | 12.1 | 3.12 | 22.04 |
| pytorch-2.6.0_cuda-12.6_python-3.12_ubuntu-22.04 | 2.6.0 | 12.6 | 3.12 | 22.04 |
| pytorch-2.8.0_cuda-12.8_python-3.12_ubuntu-22.04 | 2.8.0 | 12.8 | 3.12 | 22.04 |

### TensorFlow

### PaddlePaddle

### Ubuntu

| 镜像标签 | 说明 |
| --- | --- |
| ubuntu-22.04 | 仅包含基础环境（MiniConda、CodeServer、Jupter Notebook、性能监控）, 没有安装任何深度学习框架、CUDA/cuDNN 等 |