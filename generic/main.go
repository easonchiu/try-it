/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-07-14 11:12:01
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-07-14 11:44:10
 * @Description:
 */
package main

import (
	"errors"
	"fmt"
)

type Stack[T any] []T

func (s *Stack[T]) Push(value T) {
	*s = append(*s, value)
}

func (s *Stack[T]) Pop() (T, error) {
	var value T
	if len(*s) == 0 {
		return value, errors.New("stack is empty")
	}
	value = (*s)[len(*s)-1]
	*s = (*s)[:len(*s)-1]
	return value, nil
}

func MyPrint[T any](val T) {
	fmt.Println(val)
}

func Split[T []any, U int](slice T, start U) (res T) {
	return slice[start:]
}

func main() {
	// int
	var intStack Stack[int]

	intStack.Push(1)
	intStack.Push(2)
	intStack.Push(3)

	res, _ := intStack.Pop()
	fmt.Println(res == 0)

	// string
	var strStack Stack[string]

	strStack.Push("aaa")
	strStack.Push("bbb")
	strStack.Push("ccc")

	res2, _ := strStack.Pop()
	fmt.Println(res2 == "??")

	// print
	MyPrint("aa")
	MyPrint(1234)
}
