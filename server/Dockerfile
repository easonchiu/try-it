# 拉取镜像 golang 1.20
FROM golang:1.20

# 创建容器内的工作目录
# WORKDIR /usr/src/app

# 将当前工作目录的东西全部拷贝到容器的 WORKDIR 目录中
COPY ./app /usr/local/bin/app

# 在容器中执行命令
# 1. 下载依赖 2. 打包 go 代码，生成名为 app 的二进制包，放到容器的 /usr/local/bin 目录下
# RUN go mod download && go mod verify && go build -v -o /usr/local/bin/app ./...

# 执行命令 app，因为 app 在 bin 目录中，所以能直接执行启动二进制包
CMD ["app"]

# 暴露 8080 & 9000 端口
EXPOSE 8080 9000
