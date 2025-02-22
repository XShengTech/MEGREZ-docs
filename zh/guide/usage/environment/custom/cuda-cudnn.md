# CUDA / cuDNN

::: tip 💡 提示
如果没有二次编译代码的需求，正常情况下不需要单独安装CUDA/cuDNN，因为框架都内置了编译好的CUDA，框架版本和CUDA版本是对应的，只需要关注框架版本即可，无需独立关注CUDA版本。
:::

## 查询默认 CUDA/cuDNN版本

::: tip 💡 提示
通过 `nvidia-smi` 命令查看到的CUDA版本只是驱动支持的最高cuda版本参数，不代表实例中安装的是该版本CUDA。
:::

### 查看CUDA版本

终端中执行查看默认镜像自带的CUDA版本（安装目录为/usr/local/）：

```bash
# 查询平台内置镜像中的cuda版本
nvcc -V
```

有类似如下输出：

```bash
nvcc: NVIDIA (R) Cuda compiler driver
Copyright (c) 2005-2023 NVIDIA Corporation
Built on Mon_Apr__3_17:16:06_PDT_2023
Cuda compilation tools, release 12.1, V12.1.105
Build cuda_12.1.r12.1/compiler.32688072_0
```

代表CUDA版本为12.1

### 查看cuDNN版本

```bash
apt list --installed | grep cudnn
```

有类似如下输出：

```bash
libcudnn8-dev/now 8.9.0.131-1+cuda12.1 amd64 [installed,local]
libcudnn8/now 8.9.0.131-1+cuda12.1 amd64 [installed,local]
```

代表cuDNN版本为8.9.0

如果是通过 `pip install` 安装的深度学习框架，cuDNN版本可以通过以下命令查看：

```bash
pip list | grep cudnn
```

如果是通过 `conda install` 安装的深度学习框架，cuDNN版本可以通过以下命令查看：

```bash
conda list cudnn
```

## 安装其他版本的 CUDA/cuDNN

### 方法一：使用 conda 安装

* 优点: 简单
* 缺点: 仅限 CUDA 11.8 之前的版本, 且一般不会带头文件，如果需要做编译，则需要照方法二安装

方法：

```bash
conda install cudatoolkit=12.1
conda install cudnn=8.9.0
```

如果不知道版本号，可以用下面命令搜索

```bash
conda search cudatoolkit
```

### 方法二：使用 apt 安装

安装 CUDA

```bash
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-keyring_1.1-1_all.deb
sudo dpkg -i cuda-keyring_1.1-1_all.deb
apt-get update
```

搜索可用版本

```bash
apt search cuda-toolkit
```

返回类似如下结果

```bash
cuda-toolkit/unknown 12.8.0-1 amd64
  CUDA Toolkit meta-package

cuda-toolkit-11-7/unknown 11.7.1-1 amd64
  CUDA Toolkit 11.7 meta-package

cuda-toolkit-11-7-config-common/unknown 11.7.99-1 all
  Common config package for CUDA Toolkit 11.7.

cuda-toolkit-11-8/unknown 11.8.0-1 amd64
  CUDA Toolkit 11.8 meta-package

cuda-toolkit-11-8-config-common/unknown 11.8.89-1 all
  Common config package for CUDA Toolkit 11.8.

cuda-toolkit-11-config-common/unknown 11.8.89-1 all
  Common config package for CUDA Toolkit 11.

cuda-toolkit-12/unknown 12.8.0-1 amd64
  CUDA Toolkit 12 meta-package

cuda-toolkit-12-0/unknown 12.0.1-1 amd64
  CUDA Toolkit 12.0 meta-package

cuda-toolkit-12-0-config-common/unknown 12.0.146-1 all
  Common config package for CUDA Toolkit 12.0.
```

安装 CUDA

::: tip 💡 提示
注意 CUDA 版本不可高于驱动支持的版本
:::

```bash
apt install cuda-toolkit-12-4
```

查找 cuDNN 版本

```bash
apt search cudnn
```

返回类似如下结果

```bash
cudnn/unknown 9.7.1-1 amd64
  NVIDIA CUDA Deep Neural Network library (cuDNN)

cudnn9/unknown 9.7.1-1 amd64
  NVIDIA CUDA Deep Neural Network library (cuDNN)

cudnn9-cuda-11/unknown 9.7.1.26-1 amd64
  NVIDIA cuDNN for CUDA 11

cudnn9-cuda-12/unknown 9.7.1.26-1 amd64
  NVIDIA cuDNN for CUDA 12

libcudnn8/unknown,unknown 8.9.7.29-1+cuda12.2 amd64
  cuDNN runtime libraries

libcudnn8-dev/unknown,unknown 8.9.7.29-1+cuda12.2 amd64
  cuDNN development libraries and headers
```

安装 cuDNN

```bash
apt install cudnn9-cuda-12
```