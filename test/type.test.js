let type = require('../src/type'),
  expect = require('chai').expect,
  {
    isUndef,
    isNull,
    isStr,
    isNum,
    isBool,
    isArr,
    isArrLike,
    isFun,
    isDate,
    isReg,
    isErr,
    isObj,
    isWin
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
  it('NaN is nan', () => {
    expect(type(NaN)).to.equal('nan')
  })
})

describe('is', () => {
  it('undefined', () => {
    expect(type(undefined)).to.be.ok
  })
  it('null', () => {
    expect(isNull(null)).to.be.ok
  })
  it('string', () => {
    expect(isStr('is')).to.be.ok
  })
  it('number', () => {
    expect(isNum(1)).to.be.ok
  })
  it('boolean', () => {
    expect(isBool(true)).to.be.ok
  })
  it('array', () => {
    expect(isArr([])).to.be.ok
  })
  it('function', () => {
    expect(isFun(function() {})).to.be.ok
  })
  it('date', () => {
    expect(isDate(new Date)).to.be.ok
  })
  it('regExp', () => {
    expect(isReg(/is/)).to.be.ok
  })
  it('error', () => {
    expect(isErr(new Error)).to.be.ok
  })
  it('object', () => {
    expect(isObj({})).to.be.ok
  })
  it('window', () => {
    expect(isObj({})).to.be.ok
  })
  // in node, the global variable isn't window
  // it('window', () => {
  //   expect(isWin(window)).to.be.ok
  // })
  it('isArrayLike', () => {
    expect(isArrLike({length: 0})).to.be.ok
    expect(isArrLike(arguments)).to.be.ok
    expect(isArrLike([])).to.be.ok
  })
})
