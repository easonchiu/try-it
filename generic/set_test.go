/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-07-24 14:49:27
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-07-24 15:01:15
 * @Description:
 */
package main

import (
	"testing"
)

func TestSet(t *testing.T) {
	intSet := NewSet[int](1, 2, 3)

	if intSet.Length() != 3 {
		t.Errorf("test length error, need 3, but got %v", intSet.Length())
	}

	intSet.Add(999, 888, 777)
	if !intSet.Contain(999) {
		t.Error("test add/contain error")
	}

	if intSet.Length() != 6 {
		t.Errorf("test length error, need 6, but got %v", intSet.Length())
	}

	intSet.Add(999)
	if intSet.Length() != 6 {
		t.Errorf("test length error, need 6, but got %v", intSet.Length())
	}

	intSet.Remove(333)
	if intSet.Length() != 6 {
		t.Errorf("test length error, need 6, but got %v", intSet.Length())
	}

	intSet.Remove(999)
	if intSet.Length() != 5 {
		t.Errorf("test length error, need 5, but got %v", intSet.Length())
	}
}
