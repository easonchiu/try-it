/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-07-14 11:12:01
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-07-24 16:50:23
 * @Description:
 */
package main

import (
	"errors"
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

func NewStack[T any]() *Stack[T] {
	return new(Stack[T])
}
