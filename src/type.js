/**
 * type v1.0.0 (https://github.com/chenBright/type)
 * Copyright 2013 chenBright. All Rights Reserved
 * MIT Licensed
 */

let toString = Object.prototype.toString,
  isArray = Array.isArray,
  type = variable => {
    let type = toString.call(variable).slice(8, -1).toLowerCase()
      // 传入isNaN参数只要不是数字，就会返回true
      // 在NaN上调用toString会返回[Object NaN]
      // 当两者都确定时，就可以确定是NaN
    if (isNaN(variable) && type === 'number') {
      return 'nan'
    }
    return type
  },
  is = {
    // 判断是否为undefined
    isUndef(variable) {
      return variable === undefined
    },
    // 判断是否为null
    isNull(variable) {
      return variable === null
    },
    // 判断是否为字符串
    isStr(variable) {
      return type(variable) === 'string'
    },
    // 判断是否为数字
    isNum(variable) {
      return type(variable) === 'number'
    },
    // 判断是否为布尔类型
    isBool(variable) {
      return type(variable) === 'boolean'
    },
    // 判断是否为数组
    isArr(variable) {
      return isArray(variable)
    },
    // 判断是否为类数组对象
    // 参考jQuery中isArrayLike的实现
    isArrLike(variable) {
      // 如果obj非null、undefined等，有length属性，则length等于obj.length
      // 否则，length为false
      var length = !!variable && 'length' in variable && variable.length,
        objType = type(variable)
      if (objType === 'function' || objType === 'window') {
        return false
      }
      // obj本身是数组，则返回true
      // obj不是数组，但有length属性且为0，例如{length : 0}，则返回true
      // obj不是数组,但有length属性且为整数数值，obj[length - 1]存在，则返回true
      return objType === 'array' || length === 0 ||
        typeof length === "number" && length > 0 && (length - 1) in variable
    },
    // 判断是否为函数
    isFun(variable) {
      return type(variable) === 'function'
    },
    // 判断是否为日期
    isDate(variable) {
      return type(variable) === 'date'
    },
    // 判断是否为正则
    isReg(variable) {
      return type(variable) === 'regexp'
    },
    // 判断是否为Error类型
    isErr(variable) {
      return type(variable) === 'error'
    },
    // 判断是否为Symbol类型
    isSym(variable) {
      return type(variable) === 'symbol'
    },
    // 判断是否为Object类型
    isObj(variable) {
      return type(variable) === 'object'
    },
    // 判断是否为window对象
    isWin(variable) {
      return type(variable) === 'window'
    }
  }

// 将is对象中的方法拷贝到type中
Object.assign(type, is)

export default type
