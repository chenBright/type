let toString = Object.prototype.toString,
    isArray = Array.isArray,
    type = variable => toString.call(variable).slice(8, -1).toLowerCase(),
    is = {
        isUndef(variable) {
            return variable === undefined
        },
        isNull(variable) {
            return variable === null
        },
        isStr(variable) {
            return type(variable) === 'string'
        },
        isNum(variable) {
            return type(variable) === 'number'
        },
        isBool(variable) {
            return type(variable) === 'boolean'
        },
        isArr(variable) {
            return isArray(variable)
        },
        isFun(variable) {
            return type(variable) === 'function'
        },
        isDate(variable) {
            return type(variable) === 'date'
        },
        isReg(variable) {
            return type(variable) === 'regexp'
        },
        isErr(variable) {
            return type(variable) === 'error'
        },
        isSym(variable) {
            return type(variable) === 'symbol'
        },
        isObj(variable) {
            return type(variable) === 'object'
        }
    }

Object.assign(type, is)

export default type
