# 概要

:::warning ⚠️ 警告
实例的系统盘与数据盘一般为本地SSD磁盘，本地数据盘性能好但是无冗余副本，受限于本地磁盘的固有寿命，有概率出现故障，重要的数据请定期备份至本地
:::

## 系统盘与数据盘

* 系统盘：根目录 `/` 及其以下所有路径（特殊路径除外），大小为 30GB，通常为本地盘，性能较快。实例关机后数据不会丢失。
* 数据盘：路径为 `/root/megrez-tmp`，初始大小为 50GB，可扩容，通常为本地盘，性能较快。实例关机后数据不会丢失。
* 公共盘：
  * 路径为 `/root/megrez-mnt`，在开源版下为实例所在[宿主机的本地路径](/guide/maintenance/config.html#mount-dir)，可能为本地盘，也可能为网络盘。
  * 路径为 `/root/megrez-pub`，在商业版下为对象存储网络盘。

## 上传下载数据

* [上传数据](/guide/usage/data/upload)
* [下载数据](/guide/usage/data/download)

## 扩缩容数据盘

* [扩容数据盘](/guide/usage/data/resize)