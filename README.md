# Hello Docker

该项目在 mac 中尝试本地打包 docker image ，并在本地起一个服务
服务内容较为简单，只是一个 go 服务，在 8080 端口请求 `/` 返回 `Hello Eason`

## 安装

1. 安装 golang，可以使用 brew 安装，或者网上看教程安装，项目中使用的是 1.20 版本
2. 安装 docker cli，使用命令 `brew install docker` 即可
3. 安装 Docker Desktop 工具，在 docker 官网中下载

## 打包 image

进入 server 目录，执行 `make docker`
该命令会两步工作

1. 打包 linux 版本 amd64 架构的二进制包，名为 app，存放于 server 目录下
2. 执行 docker build 命令，根据 Dockerfile 生成 image 文件

## 启动

make docker 执行完成后，打开 Docker Desktop，在左侧 `Images` 栏目中可以看到名为 `hello-docker` 的 image 包，`tag` 为 `v1`，名称及 tag 在 Makefile 中

点击该包的 Run，在弹出框的 Optional settings 中对 8080 端口这一栏（Host post）输入一个端口号，输入 `0` 表示让系统自动生成一个可用的端口号

点击左侧 `Containers`，可以看到已经启动的容器，在 `Port(s)` 这一栏能看到外部的端口号，访问本地的该端口号即可看到 `Hello Eason` 的打印字样

**8080端口号为 main.go 这个服务所起的端口号，并在 Dockerfile 的 EXPOSE 配置中暴露出来**

