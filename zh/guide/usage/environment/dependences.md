# 依赖安装

MEGREZ 中，在关机后依然保留，包括安装的依赖文件，重启无需再次安装。

## 安装其他框架

```bash
# PyTorch：从 https://pytorch.org/get-started/previous-versions/ 找到合适的版本。
# 注：PyTorch 从 2.6 版本开始，不再支持使用 conda 安装，仅在 PyPi 源发布
# cu121 代表 CUDA 12.1
pip install torch==2.5.1+cu121 torchvision==0.20.1+cu121 torchaudio==2.5.1+cu121 --index-url https://download.pytorch.org/whl/cu121

# TensorFlow: 从 https://pypi.org/project/tensorflow/#history 找到对应版本号。
# TensorFlow 2.x 之后的版本 tensorflow-gpu 和 tensorflow 已经合并
pip install tensorflow==2.18.0
# TensorFlow: 从 https://pypi.org/project/tensorflow-gpu/#history 找到对应版本号。
# TensorFlow 1.x 版本
pip install tensorflow-gpu==1.15.0
```

## Python 依赖安装

```bash
# 使用pip，举例
pip install opencv-python scipy numpy Pillow

# 使用conda，举例
conda install numpy

# 如果不确定包名，通过搜索来查找
pip search xxxx
conda search xxxx

# 如果在用pip时不知道某个依赖有什么版本号，那么以下trick可以查看：随便写一个版本号，pip会报错出所有可安装的版本号
pip install xxx=9.9
```

## 系统依赖安装

```bash
# 以安装zip为例
apt-get update    # 只需要执行一次，不用每次都执行
apt-get install -y zip

# 如果不知道包名
apt-get update    # 只需要执行一次，不用每次都执行
apt-cache search xxxxx
```