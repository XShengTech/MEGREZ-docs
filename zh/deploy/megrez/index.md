# 部署主程序

::: tip 💡 提示
此部分将指导您如何在您的服务器上部署「MEGREZ 天权算能聚联计算平台」的主程序（又名主控端、控制端）。
:::

## 安装依赖

### 安装基础依赖

```bash
sudo apt update && sudo apt install git
```

### 安装 docker

```bash
sudo curl -sSL get.docker.com | sh

# 国内用户可以使用以下命令
sudo curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
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

## 下载部署配置

```bash
git clone https://github.com/XShengTech/MEGREZ-Deploy.git

# 国内用户可以使用以下命令
git clone https://openi.pcl.ac.cn/XShengTech/MEGREZ-Deploy.git

cd MEGREZ-Deploy/megrez
```

## 启动主程序

::: tip 💡 提示
如果出现拉取镜像错误, 请参考 [配置 Docker 镜像代理]()
:::

运行下方命令

```bash
docker compose up -d
```

有类似下方的返回即可：

```bash
WARN[0000] MEGREZ-Deploy/megrez/docker-compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
[+] Running 4/4
 ✔ Network megrez-network     Created               0.1s 
 ✔ Container megrez-redis     Started               0.3s 
 ✔ Container megrez-postgres  Started               0.3s 
 ✔ Container megrez           Started               0.4s
```

## 访问网页

使用现代浏览器访问 `http://主机ip:34567` 即可看到 MEGREZ 主程序页面。

::: warning 📌 提醒
请修改默认用户名和密码，以保证系统安全。
:::

默认用户名: admin
默认密码: admin123456

打开网页后, UI 渲染效果如下

![MEGREZ UI](/deploy/megrez/demo1.webp)

登陆后, 效果和下面类似

![MEGREZ UI](/deploy/megrez/demo2.webp)

## 下一步

::: tip 🌈 Congratulations 🎉
恭喜你，成功安装 「MEGREZ 天权算能聚联计算平台」
:::

* [配置反向代理](/deploy/megrez/proxy)
* [部署被控端](/deploy/controler/)
* [节点管理]()
* [镜像管理]()