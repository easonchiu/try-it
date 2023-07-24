/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-07-24 15:48:09
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-07-24 16:39:51
 * @Description:
 */
package main

import (
	"fmt"
	"testing"
)

func TestStack(t *testing.T) {
	s := NewStack[any]()
	s.Push("asdf")
	s.Push(123)

	fmt.Println(s.Pop())
	fmt.Println(s.Pop())
	fmt.Println(s.Pop())
}
