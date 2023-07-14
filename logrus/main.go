/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-07-14 11:12:01
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-07-14 19:12:07
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
		MaxSize:    100, // megabytes
		MaxBackups: 3,
		MaxAge:     7,
		Compress:   true, // disabled by default
	})

	logger.SetFormatter(&logrus.JSONFormatter{})

	err := errors.New("what error")
	logger.WithError(err).WithField("key", "value").Error("error info")
}
