# type

a mini module to analyze variable type（一个用于判断数据类型的模块）

[github][4]

[![npm](https://img.shields.io/badge/node-%3E%3D6.7.0-brightgreen.svg)]() [![Scrutinizer Build](https://img.shields.io/scrutinizer/build/g/filp/whoops.svg?maxAge=2592000)]() [![npm](https://img.shields.io/badge/release-1.0.0-brightgreen.svg)]()  [![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)]()

```javascript
    type('type')        // 'string'
    type([])            // 'array'
    type({})            // 'object'
    type.isArr([])      // true
    type.isStr('type')  // true
```

## 特性

- type本身是一个函数，传入一个变量，可以得到被传入变量的数据类型。
- 同时，type作为一个对象，有很多is***函数用于判断某一变量是否为特定数据类型。

## 使用

传统用法和UMD都需要使用构建后的在dist / type.js文件，构建方法：

```bash
// 第一次使用，需要先安装依赖
npm imstall

// 构建
npm run build

// 如果你想跑一下测试
npm test
```

### 传统用法

```javascript
<script src="type.js"></script>
```

### UMD

>  支持RequireJS、CommonJs等

### ES6

如果你使用ES6的话，使用src / type.js，然后使用import引入模块。

```javascript
import type from 'type'
```
## API

### type(variable)

type本身是一个函数，可以直接调用，返回数据类型。

- variable {any type} 任意类型的变量
- return {String} 数据类型

```javascript
type('type')        // 'string'

type(1)             // 'number'

type(true)          // 'boolean'

type([])            // 'array'

type({})            // 'object'

type(function() {}) // 'function'

type(new Date)      // 'date'

type(/type/)        // 'regexp'

type(new Error)     // 'error'

type(NaN)           // 'nan'
```

甚至传入`undefined`和`null`都可以正确返回，不过用处不大。

```javascript
type(undefined)     // 'undefined'
type(null)          // 'null'
```

### type.is***(variable)

type也是一个对象，它有很多is***函数，用于判断变量是否为特定数据类型。

### type.isUndef(variable)

判断被传入的参数是否为undefined

- variable {any type}  任意类型的变量
- return {Boolean} true，则表示variable是undefined；false，则表示variable不是undefined

```javascript
type.isUndef(undefined)     // true
```

### type.isNull(variable)

判断被传入的参数是否为null

- variable {any type}  任意类型的变量
- return {Boolean} true，则表示variable是null；false，则表示variable不是null

```javascript
type.isUndef(null)     // true
```

### type.isStr(variable)

判断被传入的参数是否为字符串

- variable {any type}  任意类型的变量
- return {Boolean}  true，则表示variable是字符串；false，则表示variable不是字符串

```javascript
type.isStr('type')     // true
```

### type.isNum(variable)

判断被传入的参数是否为数字

- variable {any type}  任意类型的变量
- return {Boolean} true，则表示variable是数字；false，则表示variable不是数字

```javascript
type.isNum(1)     // true
```

### type.isBool(variable)

判断被传入的参数是否为布尔类型

- variable {any type}  任意类型的变量
- return {Boolean} true，则表示variable是布尔类型；false，则表示variable不是布尔类型

```javascript
type.isBool(false)     // true
```

### type.isArr(variable)

判断被传入的参数是否为数组

- variable {any type}  任意类型的变量
- return {Boolean} true，则表示variable是数组；false，则表示variable不是数组

```javascript
type.isArr([])     // true
```

### type.isArrLike(variable)

判断被传入的参数是否为类数组对象

- variable {any type}  任意类型的变量
- return {Boolean} true，则表示variable是类数组对象；false，则表示variable不是类数组对象

```javascript
type.isArrLike([])               // true
type.isArrLike({length : 0})     // true
type.isArrLike($('.node'))       // true
type.isArrLike(document.getElementsByClassName('node'))       // true
(function args() {
    return type.isArrLike(arguments)
})()                             // true

```

### type.isFun(variable)

判断被传入的参数是否为函数

- variable {any type}  任意类型的变量
- return {Boolean} true，则表示variable是函数；false，则表示variable不是函数

```javascript
type.isFun(function(){})     // true
```

### type.isDate(variable)

判断被传入的参数是否为Date类型

- variable {any type}  任意类型的变量
- return {Boolean} true，则表示variable是Date类型；false，则表示variable不是Date类型

```javascript
type.isDate(new Date)     // true
```

### type.isReg(variable)

判断被传入的参数是否为正则类型

- variable {any type}  任意类型的变量
- return {Boolean} true，则表示variable是正则类型；false，则表示variable不是正则类型

```javascript
type.isReg(/type/)     // true
```

### type.isErr(variable)

判断被传入的参数是否为Error类型

- variable {any type}  任意类型的变量
- return {Boolean} true，则表示variable是Error类型；false，则表示variable不是Error类型

```javascript
type.isErr(new Error)     // true
```

### type.isObj(variable)

判断被传入的参数是否为Object对象类型

- variable {any type}  任意类型的变量
- return {Boolean} true，则表示variable是Object对象类型；false，则表示variable不是Object对象类型

```javascript
type.isObj({})     // true
```

### type.isPlainObject(variable)

判断被传入的参数是否为“纯粹”的对象，即指那些用对象直接量、new Object()或者Object.create(null)创建的对象

- variable {any type}  任意类型的变量
- return {Boolean} true，则表示variable是“纯粹”的对象型；false，则表示variable不是“纯粹”的对象

```javascript
type.isPlainObject({length: 0})             // true
type.isPlainObject(Object.create(null))     // true
type.isPlainObject(new Object())            // true
```

## 贡献者

- [chenBright][1]

## 报告问题

- [Issues][2]

## 更新日志

- [更新日志][3]



[1]: https://github.com/chenBright
[2]: https://github.com/chenBright/type/issues
[3]: https://github.com/chenBright/type/blob/master/CHANGELOG.md
[4]: https://github.com/chenBright/type#typeiserrvariable
