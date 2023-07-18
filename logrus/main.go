/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-07-14 11:12:01
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-07-18 10:09:00
 * @Description:
 */
package main

import (
	"errors"

	"github.com/sirupsen/logrus"
	"gopkg.in/natefinch/lumberjack.v2"
)

func main() {
	logger := logrus.New()
	logger.SetOutput(&lumberjack.Logger{
		Filename:   "log",
		MaxSize:    100,  // 日志文件的最大大小(mb)，超过这个大小后，会自动备份，并创建一个新的日志文件继续写入
		MaxBackups: 3,    // 备份文件的最大数量
		MaxAge:     7,    // 备份文件的最大保存时间
		Compress:   true, // 备份文件是否压缩(gzip)
	})

	logger.SetFormatter(&logrus.JSONFormatter{})

	err := errors.New("what error")
	logger.WithError(err).WithField("key", "value").Error("error info")
}
