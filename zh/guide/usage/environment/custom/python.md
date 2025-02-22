# Python

## 安装其他版本 Python

::: tip 💡 提示
在所有镜像中，均带有 MiniConda
:::

```bash
# 创建一个名为 py38 的虚拟环境，使用的 Python 版本为 3.8
conda create -n py38 python=3.8

# 更新bashrc中的环境变量
conda init bash && source /root/.bashrc

# 切换到创建的虚拟环境：py38
conda activate py38
```