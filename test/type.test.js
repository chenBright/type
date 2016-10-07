let type = require('../src/type'),
    expect = require('chai').expect,
    {
        isUndef,
        isNull,
        isStr,
        isNum,
        isBool,
        isArr,
        isFun,
        isDate,
        isReg,
        isErr,
        isObj
    } = type

describe('type', () => {
    it('\'type\' is string', () => {
        expect(type('')).to.equal('string')
    })
    it('1 is number', () => {
        expect(type(1)).to.equal('number')
    })
    it('true is boolean', () => {
        expect(type(true)).to.equal('boolean')
    })
    it('[type] is array', () => {
        expect(type([])).to.equal('array')
    })
    it('{} is object', () => {
        expect(type({})).to.equal('object')
    })
    it('function(){} is function', () => {
        expect(type(function() {})).to.equal('function')
    })
    it('new Date is date', () => {
        expect(type(new Date)).to.equal('date')
    })
    it('/type/ is regexp', () => {
        expect(type(/type/)).to.equal('regexp')
    })
    it('new Error is error', () => {
        expect(type(new Error)).to.equal('error')
    })
})

describe('is', () => {
    it('undefined is undefined', () => {
        expect(isUndef(undefined)).to.be.ok
    })
    it('null is null', () => {
        expect(isNull(null)).to.be.ok
    })
    it('\'is\' is string', () => {
        expect(isStr('is')).to.be.ok
    })
    it('1 is number', () => {
        expect(isNum(1)).to.be.ok
    })
    it('true is boolean', () => {
        expect(isBool(true)).to.be.ok
    })
    it('[] is array', () => {
        expect(isArr([])).to.be.ok
    })
    it('function(){} is function', () => {
        expect(isFun(function(){})).to.be.ok
    })
    it('new Date is date', () => {
        expect(isDate(new Date)).to.be.ok
    })
    it('/is/ is regExp', () => {
        expect(isReg(/is/)).to.be.ok
    })
    it('new Error is error', () => {
        expect(isErr(new Error)).to.be.ok
    })
    it('{} is object', () => {
        expect(isObj({})).to.be.ok
    })
})
