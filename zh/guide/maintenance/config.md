# 系统配置

在 `MEGREZ-Deploy/megrez` 目录下有一个 `config.yml` 文件，里面是系统的配置文件。

## 默认配置

默认配置文件如下：

```yaml:line-numbers
http:
  host: 0.0.0.0
  port: 34567
database:
  host: megrez-postgres
  port: 5432
  username: XshengTechMEGREZ
  password: XshengTechMEGREZ
  database: XshengTechMEGREZ
redis:
  host: megrez-redis
  port: 6379
smtp:
  host:
  port:
  user:
  password:
  ssl: false
system:
  base_url: 
  verify: false
  mount_dir: 

```

以下是各个配置项的说明：

## http

> Web 端服务相关配置

### `host`

监听的主机地址。默认是 `0.0.0.0`

### `port`

监听的端口。默认是 `34567`

## database

> Postgres 数据库相关配置

::: tip 💡 提示
目前仅支持 Postgres 数据库

可配置远程数据库, 配置后建议修改 `docker-compose.yml`, 停止本地的 Postgres 数据库服务
:::

### `host`

数据库的主机地址。默认是 `megrez-postgres`

### `port`

数据库的端口。默认是 `5432`

### `username`

数据库的用户名。默认是 `XshengTechMEGREZ`

### `password`

数据库的密码。默认是 `XshengTechMEGREZ`

### `database`

数据库的名称。默认是 `XshengTechMEGREZ`

## redis

> Redis 相关配置

::: tip 💡 提示
可配置远程Redis, 配置后建议修改 `docker-compose.yml`, 停止本地的 Redis 服务
:::

### `host`

Redis 的主机地址。默认是 `megrez-redis`

### `port`

Redis 的端口。默认是 `6379`

## smtp

> SMTP 邮件服务相关配置

### `host`

SMTP 邮件服务的主机地址。默认是空

### `port`

SMTP 邮件服务的端口。默认是空

### `user`

SMTP 邮件服务的邮箱账户。默认是空

### `password`

SMTP 邮件服务的邮箱密码（在大部分平台上是授权码）。默认是空

### `ssl`

是否开启 TLS 加密。默认是 `false`

## system

> 系统相关配置

### `base_url`

系统的基础 URL, 用于生成链接。默认是空

### `verify`

是否开启用户注册验证, 开启后用户注册后需要管理员审核才能登录。默认是 `false`

### `mount_dir`

数据挂载目录, 需要是被控端（即节点服务器）上的路径, 该路径会被挂载至实例中的`/root/megrez-pub`。默认为空, 即不挂载

### `salt`

:::warning ⚠️ 警告
请勿随意修改, 否则会导致用户密码无法登录
:::

加密盐, 为空的话, 在会自动生成一个随机的盐。默认为空。

