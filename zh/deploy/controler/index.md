# 部署被控端

::: tip 💡 提示
此部分将指导您如何在您的GPU服务器上部署「MEGREZ 天权算能聚联计算平台」的被控端（即节点控制器）。
:::

::: warning ⚠️ 重要
在部署前必须仔细阅读「[检查状态](/deploy/controler/check)」章节，以判断节点是否满足部署要求。
:::

## 安装依赖

### 安装依赖

```bash
sudo apt update && sudo apt install git lxcfs
```

### 安装 docker

```bash
sudo curl -sSL get.docker.com | sh

# 国内用户可以使用以下命令
sudo curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

### 安装 NVIDIA 驱动

::: warning ⚠️ 重要
NVIDIA Driver 请安装版本大于 ≥ 550.135 的版本, 以修复安全问题
:::

[NVIDIA Linux Driver](https://www.nvidia.com/en-us/drivers/unix/)

### 安装 NVIDIA Container Toolkit

::: warning ⚠️ 重要
NVIDIA Container Toolkit 请安装版本大于 ≥ 1.17.3 的版本, 以修复安全问题
:::

```bash
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
  && curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
    sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
    sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
```

```bash
sudo apt-get update && sudo apt-get install -y nvidia-container-toolkit
```

```bash
sudo nvidia-ctk runtime configure --runtime=docker
sudo systemctl restart docker
```

### 验证安装

#### 验证 git

```bash
git --version
```

有类似下方的返回即可：

```bash
git version 2.34.1
```

#### 验证 docker

```bash
docker --version
```

有类似下方的返回即可：

```bash
Docker version 27.5.1, build 9f9e405
```

#### 验证 lxcfs

```bash
systemctl status lxcfs
```

有类似下方的返回即可：

```bash
● lxcfs.service - FUSE filesystem for LXC
     Loaded: loaded (/lib/systemd/system/lxcfs.service; enabled; vendor preset: enabled)
     Active: active (running) since Sat 2024-10-19 15:45:14 UTC; 4 months 0 days ago
       Docs: man:lxcfs(1)
   Main PID: 732 (lxcfs)
      Tasks: 7 (limit: 18625)
     Memory: 2.0M
        CPU: 2h 3min 11.304s
     CGroup: /system.slice/lxcfs.service
             └─732 /usr/bin/lxcfs /var/lib/lxcfs

Notice: journal has been rotated since unit was started, output may be incomplete.
```

如果发现 Active 状态是 `dead`, 输入下面的命令启动 lxcfs, 并且设置开机自启

```bash
sudo systemctl start lxcfs
sudo systemctl enable lxcfs
```

#### 验证 NVIDIA Container Toolkit

```bash
nvidia-ctk --version
```

有类似下方的返回即可：

```bash
NVIDIA Container Toolkit CLI version 1.17.3
commit: cb82e29c75d387992bf59eb6eadf5d96cb6d4747
```

## 配置环境

### 配置 XFS 分区

```bash
sudo mkfs.xfs /dev/sdb    # 例如 /dev/sdb
```

修改 `/etc/fstab` 添加 XFS 分区

> [!IMPORTANT]
> 一定要添加 `prjquota` 参数, `/path/to/docker/data` 修改为 XFS 分区实际挂载路径

```bash
/dev/sdb /path/to/docker/data xfs defaults,prjquota 0 0
```

挂载 XFS 分区

```bash
sudo mount -a
```

### 配置 Docker 存储路径至 XFS 文件系统分区

修改 `/etc/docker/daemon.json` 添加 `data-root` 字段

```json
{
    "data-root": "/path/to/docker/data" // 例如 "/data/docker"
}
```

### 重启 Docker

```bash
sudo systemctl restart docker
```

查看 Docker 状态

```bash
docker info | grep 'Docker Root Dir'
```

返回 `Docker Root Dir: /path/to/docker/data`


### 配置 CDI 设备

::: tip 💡 提示
每次升级 NVIDIA 驱动后都需要重新配置 CDI 设备, 或每次添加新的 GPU 后都需要重新配置 CDI 设备
:::

启用 Docker 的 CDI 特性

```bash
sudo nvidia-ctk runtime configure --runtime=docker --cdi.enabled
systemctl restart docker
```

生成 CDI 设备配置

```bash
sudo nvidia-ctk cdi generate --output=/etc/cdi/nvidia.yaml
```

查看 CDI 设备配置

```bash
nvidia-ctk cdi list
```

有类似下方的返回即可

```bash
INFO[0000] Found 17 CDI devices                         
nvidia.com/gpu=0
nvidia.com/gpu=1
nvidia.com/gpu=2
nvidia.com/gpu=3
nvidia.com/gpu=4
nvidia.com/gpu=5
nvidia.com/gpu=6
nvidia.com/gpu=7
nvidia.com/gpu=GPU-23bb08b6-****-****-****-************
nvidia.com/gpu=GPU-5f996fb2-****-****-****-************
nvidia.com/gpu=GPU-a55f05cc-****-****-****-************
nvidia.com/gpu=GPU-b3d3f52f-****-****-****-************
nvidia.com/gpu=GPU-c8d9b1fb-****-****-****-************
nvidia.com/gpu=GPU-c94df367-****-****-****-************
nvidia.com/gpu=GPU-cddc6468-****-****-****-************
nvidia.com/gpu=GPU-ea606b9e-****-****-****-************
nvidia.com/gpu=all
```

## 下载部署配置

```bash
git clone https://github.com/XShengTech/MEGREZ-Deploy.git

# 国内用户可以使用以下命令
git clone https://openi.pcl.ac.cn/XShengTech/MEGREZ-Deploy.git

cd MEGREZ-Deploy/controler
```

修改 `docker-compose.yml` 文件中的 `gpu-docker-api` 的 `environment` 字段的 `APIKEY` 为任意字符串

::: tip 💡 建议
建议每个 GPU 节点的 `APIKEY` 不一致, 并且将长度设置为 32 位以上
:::

```yaml:line-numbers=35 {10}
...
  gpu-docker-api:
    hostname: gpu-docker-api
    image: xshengtech/gpu-docker-api:latest
    container_name: gpu-docker-api
    restart: unless-stopped
    network_mode: host
    runtime: nvidia
    environment:
      - APIKEY=CHANGETHIS # [!code focus]
    deploy:
...
```
修改 `docker-compose.yml` 文件中的 `gpu-docker-api` 的 `volumes` 字段的 `PATH_TO_DOCKER_STORAGE` 为 Docker 存储路径, 即 /etc/docker/daemon.json 中的 data-root 字段

```yaml:line-numbers=35 {21}
...
  gpu-docker-api:
    hostname: gpu-docker-api
    image: xshengtech/gpu-docker-api:latest
    container_name: gpu-docker-api
    restart: unless-stopped
    network_mode: host
    runtime: nvidia
    environment:
      - APIKEY=CHANGETHIS
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [ gpu ]
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /etc/localtime:/etc/localtime:ro
      - PATH_TO_DOCKER_STORAGE:PATH_TO_DOCKER_STORAGE # [!code focus]
      - gpu-docker-api-data:/data/merges
...
```


## 启动被控端

::: tip 💡 提示
如果出现拉取镜像错误, 请参考 [配置 Docker 镜像代理]()
:::

```bash
docker compose up -d
```

有类似下方的返回即可：

```bash
WARN[0000] MEGREZ-Deploy/controler/docker-compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
[+] Running 3/3 
 ✔ Network etcd-net  Creating                        0.1s 
 ✔ Container gpu-docker-api  Started                 0.1s 
 ✔ Container etcd            Started                 0.3s  
```

## 拉取镜像

::: tip 💡 提示
镜像介绍请参考 [镜像介绍](/deploy/images) 章节
:::

```bash
docker pull ubuntu:22.04 # 这个必须拉取，否则数据盘扩容/缩容功能无法使用

# 下面的是打包好的镜像，可以直接使用
docker pull xshengtech/megrez:pytorch-1.8.1_cuda-11.1_python-3.8_ubuntu-20.04
docker pull xshengtech/megrez:pytorch-1.10.2_cuda-11.1_python-3.9_ubuntu-20.04
docker pull xshengtech/megrez:pytorch-1.13.1_cuda-11.7_python-3.10_ubuntu-22.04
docker pull xshengtech/megrez:pytorch-2.0.1_cuda-11.8_python-3.10_ubuntu-22.04
docker pull xshengtech/megrez:pytorch-2.1.2_cuda-12.1_python-3.10_ubuntu-22.04
docker pull xshengtech/megrez:pytorch-2.3.1_cuda-12.1_python-3.11_ubuntu-22.04
docker pull xshengtech/megrez:pytorch-2.4.0_cuda-12.1_python-3.12_ubuntu-22.04
docker pull xshengtech/megrez:ubuntu-22.04
```

## 下一步

* [容器 PID 映射](/deploy/controler/mpu)
* [运维说明](/guide/maintenance/)
* [镜像介绍](/deploy/images)
* [常见问题](/deploy/faq)