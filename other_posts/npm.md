---
title: "npm"
date: "2023-01-01"
---

vue -V报错:

输入新的源 npm config set registry <https://registry.npmmirror.com>

npm install -g @vue/cli

关闭cmd 再打开cmd 输入:npm cache clean --force

再检测: vue -V

参考 <https://blog.csdn.net/cnoneo/article/details/100667098>

// 常见错误

npm ERR! code EBADPLATFORM

npm ERR! notsup Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

npm ERR! notsup Valid OS: darwin

npm ERR! notsup Valid Arch: any

npm ERR! notsup Actual OS: win32

npm ERR! notsup Actual Arch: x64

npm ERR! A complete log of this run can be found in:

npm ERR! C:\Users\LX\AppData\Roaming\npm-cache_logs\2021-04-21T09_34_26_950Z-debug.log

遇到这样错误信息，先将生成的node_modules文件夹删除，再在命令后面加上 --force重新运行；
npm install --force
如：npm install --force即可；
如果不行，再反复执行上面的步骤。

// 查询源
npm config get registry

// 更换国内源
npm config set registry <https://registry.npmmirror.com>

// 恢复官方源
npm config set registry <https://registry.npmjs.org>

// 删除注册表
npm config delete registry
