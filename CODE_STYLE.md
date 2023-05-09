# 开发规范

## 命名规范

### 总原则

- 必须能明确表达出其含义，便于阅读
- 以英文全拼或拼音全拼为首，尽量避免使用拼音
- 除非约定俗成的缩写，否则优先使用全拼
- 禁止英文和拼音混合使用

### 项目命令

- 采用小写, 中线分隔
- ✅nebula-cms | selection-system
- ❌nebula_cms | NebulaCMS / nebulaCms

### 目录命名

- 采用小写, 中线分隔, 有复数时, 采用复数
- ✅loading-page | search-bar
- ❌loading_page | searchBar

### 图片和资源文件命名

- 采用小写, 中线分隔
- ✅loading-page.gif | site-logo.svg | homepage-bg.png
- ❌LoadingPage.gif | siteLog.svg | homepageBg.png | homepage_bg.png

### 路由命名

- 采用小写, 中线分隔
- 尽量不在页面上出现动词
- 尽量使用 path 参数（REST-Ful 风格）
- ✅/loading-page | /users?page=1 | /user/:id
- ❌/loading_page | /Users?page=1 | /user?id=1

### css less 命名规范

- 采用小写, 中线分隔
- 推荐使用缩写属性
- ✅.container / .loading-page / .search-bar
- ❌.Container / .loadingPage / .searchBar

### js ts 变量命名规范

- 采用小写驼峰命名
- 力求语义表达完整清晰，不要嫌名称长
- 常量采用大写, 下划线分隔 (如: `const MAX_COUNT = 10`)
- 方法名，参数名同一采用小写驼峰命名，动词+名词的形式, 如 `getCount()`
- ✅const count = 10 / const MAX_COUNT = 10 / const loadingPage = 10
- ❌const Count = 10 / const MAX-COUNT = 10 / const loading_page = 10
-

### js ts 文件命名

- 采用小写驼峰命名
- 如果是组件可首字大写
- ✅index.tsx / SearchBar.tsx / LoadingPage.tsx
- ❌Index.tsx / searchBar.tsx / loadingPage.tsx

## js ts 编码规范

- 优先 ts
- 优先 ES6+
- 条件判断和循环最多三层
- this 的转换命名为 self
- undefined 判断 `typeof xxx === 'undefined'`

## 附件一 动词表

- add / remove
- get / set
- create / destroy
- start / stop
- open / close
- read / write
- load / save
- begin / end
- backup / restore
- import / export
- split / merge
- attach / detach
- bind / unbind
- lock / unlock
- send / receive
- pack / unpack
- play / pause
