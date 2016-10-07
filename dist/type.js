(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["type"] = factory();
	else
		root["type"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var toString = Object.prototype.toString,
	    isArray = Array.isArray,
	    type = function type(variable) {
	    return toString.call(variable).slice(8, -1).toLowerCase();
	},
	    is = {
	    isUndef: function isUndef(variable) {
	        return variable === undefined;
	    },
	    isNull: function isNull(variable) {
	        return variable === null;
	    },
	    isStr: function isStr(variable) {
	        return type(variable) === 'string';
	    },
	    isNum: function isNum(variable) {
	        return type(variable) === 'number';
	    },
	    isBool: function isBool(variable) {
	        return type(variable) === 'boolean';
	    },
	    isArr: function isArr(variable) {
	        return isArray(variable);
	    },
	    isFun: function isFun(variable) {
	        return type(variable) === 'function';
	    },
	    isDate: function isDate(variable) {
	        return type(variable) === 'date';
	    },
	    isReg: function isReg(variable) {
	        return type(variable) === 'regexp';
	    },
	    isErr: function isErr(variable) {
	        return type(variable) === 'error';
	    },
	    isSym: function isSym(variable) {
	        return type(variable) === 'symbol';
	    },
	    isObj: function isObj(variable) {
	        return type(variable) === 'object';
	    }
	};
	
	Object.assign(type, is);
	
	exports.default = type;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=type.js.map