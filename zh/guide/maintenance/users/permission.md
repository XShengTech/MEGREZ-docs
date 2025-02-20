# 用户权限

## 权限设置

进入用户管理面板, 点击用户右侧的编辑按钮

![用户编辑按钮](/guide/maintenance/users/permission1.webp)

进入用户编辑对话框, 即可编辑用户权限

![用户编辑对话框](/guide/maintenance/users/permission2.webp)

编辑后点击保存按钮即可

![用户编辑对话框](/guide/maintenance/users/permission6.webp)


## 快速审核受限用户

在用户管理面板中, 点击 受限用户的权限 Tag, 即可快速审核受限用户

![快速审核受限用户](/guide/maintenance/users/permission3.webp)

![快速审核结果](/guide/maintenance/users/permission4.webp)

## 权限解释

| 权限      | 说明                                                                                                               |
| --------- | ----------------------------------------------------------------------------------------------------------------- |
| 受限用户   | 受限用户无法进行任何活动。当[系统配置项 `system.verify`](/guide/maintenance/config#verify) 为 `true` 时, 用户注册后, 默认为受限用户                               |
| 普通用户   | 普通用户可以创建和管理自己的实例, 但无法访问其他用户的实例。当[系统配置项 `system.verify`](/guide/maintenance/config#verify) 为 `false` 时, 用户注册后, 默认为普通用户 |
| 管理员    | 管理员可以访问所有用户的实例, 但无法操作实例。管理员可以创建和管理自己的实例, 无法删除其他用户的实例                              |
| 超级管理员 | 超级管理员可以访问所有用户的实例, 也可以操作实例。超级管理员可以创建和管理自己的实例, 也可以删除其他用户的实例                    |