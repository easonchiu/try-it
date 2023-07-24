/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-07-24 14:39:04
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-07-24 16:35:08
 * @Description:
 */
package main

type Set[T comparable] map[T]bool

func (s *Set[T]) Add(list ...T) {
	for _, item := range list {
		(*s)[item] = true
	}
}

func (s *Set[T]) Remove(list ...T) {
	for _, item := range list {
		delete(*s, item)
	}
}

func (s *Set[T]) Contain(item T) bool {
	_, ok := (*s)[item]
	return ok
}

func (s *Set[T]) Length() int {
	return len(*s)
}

func (s *Set[T]) Empty() bool {
	return s.Length() == 0
}

func NewSet[T comparable](initial ...T) *Set[T] {
	s := make(Set[T])

	for _, item := range initial {
		s.Add(item)
	}

	return &s
}
