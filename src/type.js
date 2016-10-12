/**
 * type v1.0.0 (https://github.com/chenBright/type)
 * Copyright 2013 chenBright. All Rights Reserved
 * MIT Licensed
 */

let toString = Object.prototype.toString,
  isArray = Array.isArray,
  type = variable => toString.call(variable).slice(8, -1).toLowerCase(),
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
    }
  }

// 将is对象中的方法拷贝到type中
Object.assign(type, is)

export default type
