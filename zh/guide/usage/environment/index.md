# 概要

::: tip 💡 提示
平台所有镜像的系统版本为Ubuntu，多数为Ubuntu 22.04 ，少数Ubuntu 20.04
:::

系统已打包了[镜像介绍](/deploy/images)中包含的深度学习框架、Python、CUDA 等环境

* 安装其他版本的 Python，参考 [Python安装](/guide/usage/environment/custom/python)
* 安装其他版本的 CUDA，参考 [CUDA / cuDNN](/guide/usage/environment/custom/cuda-cudnn)
* 安装其他版本的深度学习框架，参考 [安装其他框架](/guide/usage/environment/dependences#安装其他框架)

## 推荐使用姿势

1. 如果系统镜像中，有您需要的 PyTorch、TensorFlow、CUDA 等版本，首选平台内置的镜像，并直接在 Conda 的 `base` 环境中安装其他依赖。
2. 如果系统镜像中，没有您需要的 PyTorch、TensorFlow、CUDA 等版本，推荐选择 `Ubuntu 22.04` 镜像，并且使用 [MiniConda](/guide/usage/environment/custom/miniconda) 安装其他版本的深度学习框架。
3. 建议一个实例里面仅有一种深度学习环境，不要混合使用多个环境，以免出现环境变量冲突、系统盘空间不足等问题。同时可以使用实例备注功能，保证实例的环境信息清晰。并且使用此方式，可以有效管理多个任务的运行环境，