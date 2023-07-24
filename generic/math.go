/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-07-24 15:40:01
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-07-24 16:30:34
 * @Description:
 */
package main

import (
	"golang.org/x/exp/constraints"
)

// x/exp/ 包中的功能均在实验阶段
func Max[T constraints.Ordered](x, y T) T {
	if x > y {
		return x
	}
	return y
}

// 联合类型，类型约束
type MyFloat interface {
	~float32 | ~float64
}

type MyNumber interface {
	~int | MyFloat
}

func Foo[T MyNumber](val T) {}
