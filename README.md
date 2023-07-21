<!--
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-07-21 18:08:19
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-07-21 18:49:05
 * @Description: 
-->
## 对比方案 Linaria VS Styled-components

### Styled-components
 - Star 数量 39k+
 - 迭代时长 7年+
 - Version 330+

### Linaria
 - Star 数量 10k+
 - 迭代时长 6年+
 - Version 140+

## 特点

### Styled-components
 1. 无需关心样式命名
 2. 组件与样式内聚，即组件自带了样式，无需className连接
 3. 组件可以通过类似继承的方式扩展新的组件
 4. 组件样式可以拿到props，针对其属性做变化，相对传统用classnames扩展样式名，要直观
 5. 在运行时将样式抽离到头部的style标签中，故打包后js较大，css文件可能几乎没有
   
### Linaria
 1. 包含2种方案，一种类似`Styled-components`的，功能差不多
 2. 另一种方案为`atomic`方案，即标签会引入多个样式，每个样式对应一条css，不同标签的同属性css会共用
 3. 在编译时会抽离样式自动生成css文件，故打包后js不会包含样式，用户访问时会额外请求css文件

## 上手难度
 - `Styled-components`风格上转变较大，中大型项目可能要有更多的前期考虑，如何容易管理、容易扩展以及如何组件共用等问题，难度较高
 - `Linaria`的`atomic`方案，对于传统方案转变的话，代价较小，因为不封装成组件的话，也不太需要考虑共用的问题，难度较低

#### 如果考虑团队开发的话，我可能更偏向于`Linaria`的`atomic`方案，只是目前遇到一个小问题，我将全部样式导出，但有一条未在组件上使用，打包后这条属性照样会在打包文件中，更好的做法是将其删除，不然的话在迭代开发过程中，难免会产生一些无用的样式