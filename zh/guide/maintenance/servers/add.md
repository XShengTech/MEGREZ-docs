# 添加节点

## 进入面板

点击添加节点按钮

![添加节点按钮](/guide/maintenance/servers/add1.webp)

## 填写相关信息

::: tip 💡 提示
后续CPU、内存、数据盘、GPU 类型、GPU 数量、驱动版本、CUDA 版本等将会自动获取, 正在开发中
:::

* `名称`: 节点名称, 可以随意填写
* `IP`: 节点 IP 地址
* `端口`: 节点端口, 默认 2378
* `APIKEY`: 节点 APIKEY, 即[被控端的 APIKEY](/deploy/controler/#下载部署配置)
* `CPU`: 每张 GPU 分配的 CPU 核心数。建议设置为 `总 CPU 逻辑核心数 / GPU 数量 - 1 (如无余数就减1)`
* `内存`: 每张 GPU 分配的内存大小。建议设置为 `总内存 / GPU 数量`
* `数据盘`: 总数据盘大小。
* `GPU 类型`: GPU 类型, 填写被控端对应的 GPU 型号
* `GPU 数量`: GPU 数量, 填写被控端对应的 GPU 数量
* `驱动版本`: 驱动版本, 填写被控端对应的驱动版本, 即 `nvidia-smi` 命令输出的驱动版本
* `CUDA`: CUDA 版本, 填写被控端对应的 CUDA 版本, 即 `nvidia-smi` 命令输出的 CUDA 版本

![添加节点](/guide/maintenance/servers/add2.webp)

填写完后点击添加按钮即可

![添加完成](/guide/maintenance/servers/add3.webp)