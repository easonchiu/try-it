<!--
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-06-30 14:29:23
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-06-30 14:54:52
 * @Description: 
-->
## React + Vite + zustand

##### 主要学习一下 `zustand` 的基本用法

1. 不同组件之间，一个调用更新 `store` 的方法，一个展示数据
2. 多个组件使用了同个 `store` 的不同数据，组件 re-render 的情况
3. 异步更新数据

##### 结论：

1. 不同组件，`A` 组件展示数据，`B` 组件更新数据，正常使用
2. 多个组件时，`A` 组件使用 `store` 的 `count`，`B` 组件使用该 `store` 的 `count2`，更新 `count2` 时，`A` 组件没有 re-render，反之同样
3. 可以异步更新，使用方便