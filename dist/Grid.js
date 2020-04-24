(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactCellGrid"] = factory(require("react"));
	else
		root["ReactCellGrid"] = factory(root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/Grid.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/lib/Grid.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js!./src/lib/Grid.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".react-cell-grid-container {\n  margin: auto;\n  border: 2px black solid; }\n\n.react-cell-grid-container .react-cell-grid-row div, .react-cell-grid-container .react-cell-grid-header div {\n  border-right: 2px black solid; }\n\n.react-cell-grid-container .react-cell-grid-row div:last-child, .react-cell-grid-container .react-cell-grid-header div:last-child {\n  border: 0; }\n\n.react-cell-grid-row, .react-cell-grid-header {\n  display: flex;\n  border-bottom: 2px black solid; }\n\n.react-cell-grid-header-cell div:first-child {\n  border: 0; }\n\n.react-cell-grid-row:last-child {\n  border: 0; }\n\n.react-cell-grid-row:nth-child(2n) {\n  background-color: lightgray; }\n\n.react-cell-grid-header-cell {\n  text-align: center;\n  position: relative;\n  line-height: 20px; }\n\n/* sort icons */\n.react-cell-grid-sort-icon-container img {\n  height: 20px; }\n\n.react-cell-grid-sort-icon {\n  height: 15px;\n  position: absolute;\n  right: 0;\n  top: 2.5px;\n  cursor: pointer; }\n\n.react-cell-grid-cell {\n  font-size: 12px;\n  display: inline-block; }\n\n.react-cell-grid-data-cell div {\n  margin: 2px 5px;\n  word-wrap: break-word; }\n", "",{"version":3,"sources":["/home/anthony/workspace/perso/react/components/react-grid/src/lib/Grid.scss"],"names":[],"mappings":"AAGA;EACE,YAAY;EACZ,uBAAkD,EAAA;;AAGpD;EACE,6BAAwD,EAAA;;AAG1D;EACE,SAAS,EAAA;;AAGX;EACE,aAAa;EACb,8BAAyD,EAAA;;AAG3D;EACE,SAAS,EAAA;;AAGX;EACE,SAAS,EAAA;;AAGX;EACI,2BAA2B,EAAA;;AAG/B;EACE,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB,EAAA;;AAGnB,eAAA;AACA;EACE,YAAY,EAAA;;AAGd;EACE,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,eAAe,EAAA;;AAGjB;EACE,eAAe;EACf,qBAAqB,EAAA;;AAGvB;EACE,eAAe;EACf,qBAAqB,EAAA","file":"Grid.scss","sourcesContent":["$grid-border-size: 2px;\n$grid-border-color: black;\n\n.react-cell-grid-container {\n  margin: auto;\n  border: $grid-border-size $grid-border-color solid;\n}\n\n.react-cell-grid-container .react-cell-grid-row div, .react-cell-grid-container .react-cell-grid-header div {\n  border-right: $grid-border-size $grid-border-color solid;\n}\n\n.react-cell-grid-container .react-cell-grid-row div:last-child, .react-cell-grid-container .react-cell-grid-header div:last-child {\n  border: 0;\n}\n\n.react-cell-grid-row, .react-cell-grid-header {\n  display: flex;\n  border-bottom: $grid-border-size $grid-border-color solid;\n}\n\n.react-cell-grid-header-cell div:first-child {\n  border: 0;\n}\n\n.react-cell-grid-row:last-child {\n  border: 0;\n}\n\n.react-cell-grid-row:nth-child(2n) {\n    background-color: lightgray;\n}\n\n.react-cell-grid-header-cell {\n  text-align: center;\n  position: relative;\n  line-height: 20px;\n}\n\n/* sort icons */\n.react-cell-grid-sort-icon-container img {\n  height: 20px;\n}\n\n.react-cell-grid-sort-icon {\n  height: 15px;\n  position: absolute;\n  right: 0;\n  top: 2.5px;\n  cursor: pointer;\n}\n\n.react-cell-grid-cell {\n  font-size: 12px;\n  display: inline-block;\n}\n\n.react-cell-grid-data-cell div {\n  margin: 2px 5px;\n  word-wrap: break-word;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n";
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/lib/Grid.scss":
/*!***************************!*\
  !*** ./src/lib/Grid.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../node_modules/sass-loader/dist/cjs.js!./Grid.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/lib/Grid.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/lib/Grid.tsx":
/*!**************************!*\
  !*** ./src/lib/Grid.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/functions */ "./src/lib/utils/functions.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/constants */ "./src/lib/utils/constants.ts");
/* harmony import */ var _assets_sort_up_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/sort-up.svg */ "./src/lib/assets/sort-up.svg");
/* harmony import */ var _assets_sort_down_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/sort-down.svg */ "./src/lib/assets/sort-down.svg");
/* harmony import */ var _assets_sort_both_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/sort-both.svg */ "./src/lib/assets/sort-both.svg");
/* harmony import */ var _models_enums_Sort_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/enums/Sort.enum */ "./src/lib/models/enums/Sort.enum.ts");
/* harmony import */ var _Grid_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Grid.scss */ "./src/lib/Grid.scss");
/* harmony import */ var _Grid_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Grid_scss__WEBPACK_IMPORTED_MODULE_10__);




function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









var logger = {};

var Grid = function Grid(props) {
  // disable logging if debug is not set
  if (props.debug) {
    logger.log = function () {
      var _console;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_console = console).log.apply(_console, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()([_utils_constants__WEBPACK_IMPORTED_MODULE_5__["PREFIX"] + ': '].concat(args)));
    };
  } else {
    logger.log = function () {};
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      ready = _useState2[0],
      setReady = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(props.headers),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      headers = _useState4[0],
      setHeaders = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      isSingleRowHeader = _useState6[0],
      setIsSingleHeader = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(props.data),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      data = _useState8[0],
      setData = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(props.weights ? props.weights : []),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),
      weights = _useState10[0],
      setWeights = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState11, 2),
      weightsSum = _useState12[0],
      setWeightsSum = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(props.defaultSort ? props.defaultSort : {}),
      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState13, 2),
      sort = _useState14[0],
      setSort = _useState14[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // if (sortData) {
    sortData(); // }
  }, [sort]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setHeaders(props.headers);
    setData(props.data);
    setWeights(props.weights ? props.weights : []);
    setSort(props.defaultSort ? props.defaultSort : {});
    setReady(false);
  }, [props]);
  logger.log('Data init: ', data);
  logger.log('Data init: ', props.data);

  var extractValue = function extractValue(cell) {
    if (Object(_utils_functions__WEBPACK_IMPORTED_MODULE_4__["isPrimitive"])(cell)) {
      if (typeof cell === 'string') {
        return String(cell).toLowerCase();
      } else {
        return cell;
      }
    } else {
      if (typeof cell === 'string') {
        return String(cell.value).toLowerCase();
      } else {
        return cell.value;
      }
    }
  };

  var sortData = function sortData() {
    logger.log('sort data: ', sort);

    if (typeof sort.name === 'undefined' || typeof sort.type === 'undefined') {
      return;
    } // get column number


    var index = 0;

    if (isSingleRowHeader) {
      for (var i = 0; i < headers.length; i++) {
        if (headers[i] === sort.name) {
          break;
        }

        index++;
      }
    } else {
      var found = false;

      for (var _i = 0; _i < headers.length; _i++) {
        console.log('length i: ', headers.length);

        for (var j = 0; j < headers[_i][1].length; j++) {
          console.log('length j: ', headers[_i][1].length);

          if (headers[_i][1][j] === sort.name) {
            found = true;
            break;
          }

          index++;
        }

        if (found) break;
      }
    }

    logger.log('column: ', index); // TODO check if index exceeds length

    if (sort.type === _models_enums_Sort_enum__WEBPACK_IMPORTED_MODULE_9__["Sort"].Both) {
      setData([].concat(props.data));
    } else {
      console.log('sort: ', sort.type);
      setData([].concat(props.data).sort(function (a, b) {
        var result;

        if (sort.type === _models_enums_Sort_enum__WEBPACK_IMPORTED_MODULE_9__["Sort"].Asc) {
          result = extractValue(a[index]) > extractValue(b[index]) ? 1 : -1;
        } else {
          result = extractValue(b[index]) > extractValue(a[index]) ? 1 : -1;
        }

        return result;
      }));
    }
  };

  var getWidthFromIndex = function getWidthFromIndex(index) {
    return getWidth(weights[index]);
  };

  var getWidth = function getWidth(weight) {
    return 'calc(' + weight / weightsSum * 100 + '% - 2px';
  };

  logger.log('sort: ', sort);

  var onChangeSort = function onChangeSort(name) {
    if (sort.name === name) {
      setSort(function (oldSort) {
        return Object.assign(Object.assign({}, oldSort), {
          type: (oldSort.type + 1) % 3
        });
      });
    } else {
      logger.log('ASC');
      setSort({
        name: name,
        type: _models_enums_Sort_enum__WEBPACK_IMPORTED_MODULE_9__["Sort"].Asc
      });
    }
  };

  var getSortIcons = function getSortIcons(name) {
    if (!props.sort) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null);
    } else if (!sort || sort.name !== name || sort.type === _models_enums_Sort_enum__WEBPACK_IMPORTED_MODULE_9__["Sort"].Both) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
        className: 'react-cell-grid-sort-icon',
        onClick: function onClick() {
          return onChangeSort(name);
        },
        src: _assets_sort_both_svg__WEBPACK_IMPORTED_MODULE_8__["default"]
      });
    } else if (sort.type === _models_enums_Sort_enum__WEBPACK_IMPORTED_MODULE_9__["Sort"].Asc) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
        className: 'react-cell-grid-sort-icon',
        onClick: function onClick() {
          return onChangeSort(name);
        },
        src: _assets_sort_up_svg__WEBPACK_IMPORTED_MODULE_6__["default"]
      });
    } else {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
        className: 'react-cell-grid-sort-icon',
        onClick: function onClick() {
          return onChangeSort(name);
        },
        src: _assets_sort_down_svg__WEBPACK_IMPORTED_MODULE_7__["default"]
      });
    }
  };

  if (!ready) {
    logger.log('headers: ', headers); // check number of columns

    if (headers == null) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"].HEADER.UNDEFINED_OR_NULL);
    }

    if (headers.length === 0) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"].HEADER.EMPTY);
    }

    var numberColumns = 0; // let isSingleRowHeader = null;

    var _iterator = _createForOfIteratorHelper(headers),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var header = _step.value;
        var isHeaderPrimitive = Object(_utils_functions__WEBPACK_IMPORTED_MODULE_4__["isPrimitive"])(header);

        if (!isHeaderPrimitive && !Array.isArray(header)) {
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"].HEADER.INVALID_FORMAT);
        }

        if (typeof isSingleRowHeader === 'undefined') {
          // isSingleRowHeader = isHeaderPrimitive;
          setIsSingleHeader(isHeaderPrimitive);
        }

        if (isSingleRowHeader !== isHeaderPrimitive) {
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"].HEADER.MIXING_SINGLE_AND_DOUBLE);
        }

        if (isHeaderPrimitive) {
          numberColumns++;
        } else if (Array.isArray(header) && header.length === 2 && Object(_utils_functions__WEBPACK_IMPORTED_MODULE_4__["isPrimitive"])(header[0]) && Array.isArray(header[1])) {
          numberColumns += header[1].length;
        } else {
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"].HEADER.INVALID_FORMAT);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    logger.log('numberColumns: ', numberColumns);
    logger.log('data: ', data);

    if (data == null) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"].DATA.UNDEFINED_OR_NULL);
    }

    if (data.length === 0) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"].DATA.EMPTY);
    }

    var _iterator2 = _createForOfIteratorHelper(data),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var row = _step2.value;

        if (row.length !== numberColumns) {
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"].DATA.LENGTH);
        }

        var _iterator4 = _createForOfIteratorHelper(row),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var cell = _step4.value;

            if (Object(_utils_functions__WEBPACK_IMPORTED_MODULE_4__["isPrimitive"])(cell)) {} else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(cell) === 'object') {
              if (Array.isArray(cell)) {
                return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"].DATA.INVALID_TYPE_CELL);
              } else if (!cell.hasOwnProperty('value')) {
                return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"].DATA.MISSING_VALUE_FIELD);
              }
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      } // headers.length is wrong for double header

    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    if (weights.length === 0) {
      setWeights(Array(numberColumns).fill(0, 0).map(function () {
        return 1;
      }));
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null);
    } else if (weights.length !== numberColumns) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"].WEIGHTS.LENGTH);
    } else {
      var _iterator3 = _createForOfIteratorHelper(weights),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var weight = _step3.value;

          if (typeof weight !== 'number') {
            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, _utils_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"].WEIGHTS.INVALID_FORMAT);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }

    logger.log('weights: ', weights);
    setWeightsSum(weights.reduce(function (total, value) {
      return total + value;
    }));
    logger.log('weightsSum: ', weightsSum);
    setReady(true);
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, logger.log('Refresh rendering Data init: ', data), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: 'react-cell-grid-container'
  }, function () {
    var headersRow = [];
    var result;

    if (Array.isArray(headers[0])) {
      // we have double header format
      var weightIndex = 0;
      var topHeadersRow = [];
      var headersRowTemp = [];

      for (var i = 0; i < headers.length; i++) {
        var _weight = 0;

        for (var j = 0; j < headers[i][1].length; j++) {
          headersRowTemp.push(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
            key: headers[i][1][j] + '_' + i + '_' + j,
            className: 'react-cell-grid-cell react-cell-grid-header-cell',
            style: {
              width: getWidthFromIndex(weightIndex)
            }
          }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, headers[i][1][j]), getSortIcons(headers[i][1][j])));
          _weight += weights[weightIndex++];
        }

        topHeadersRow.push(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          key: headers[i][0] + '_' + i,
          className: 'react-cell-grid-cell react-cell-grid-header-cell',
          style: {
            width: getWidth(_weight)
          }
        }, headers[i][0]));
      }

      result = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        key: 'header_0',
        className: 'react-cell-grid-header'
      }, topHeadersRow), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        key: 'header_1',
        className: 'react-cell-grid-header'
      }, headersRowTemp));
    } else {
      // single header
      for (var _i2 = 0; _i2 < headers.length; _i2++) {
        headersRow.push(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          key: headers[_i2],
          className: 'react-cell-grid-cell react-cell-grid-header-cell',
          style: {
            width: getWidthFromIndex(_i2)
          }
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, headers[_i2]), getSortIcons(headers[_i2])));
      }

      result = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: 'react-cell-grid-header'
      }, headersRow);
    }

    return result;
  }(), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: 'react-cell-grid-rows'
  }, function () {
    logger.log('data rendering');
    var dataRows = [];

    var _loop = function _loop(i) {
      // logger.log('data rendering [', i, ']: ', data[i]);
      dataRows.push(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        key: 'row_' + i,
        className: 'react-cell-grid-row'
      }, function () {
        var dataRow = [];

        for (var j = 0; j < data[i].length; j++) {
          if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(data[i][j]) === 'object') {
            dataRow.push(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
              key: data[i][j].value + '_' + i + '_' + j,
              className: 'react-cell-grid-cell react-cell-grid-data-cell',
              style: {
                width: getWidthFromIndex(j)
              }
            }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
              href: data[i][j]._href
            }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, data[i][j].value))));
          } else {
            dataRow.push(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
              key: data[i][j] + '_' + i + '_' + j,
              className: 'react-cell-grid-cell react-cell-grid-data-cell',
              style: {
                width: getWidthFromIndex(j)
              }
            }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, data[i][j])));
          }
        }

        return dataRow;
      }()));
    };

    for (var i = 0; i < data.length; i++) {
      _loop(i);
    }

    return dataRows;
  }())));
};

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./src/lib/assets/sort-both.svg":
/*!**************************************!*\
  !*** ./src/lib/assets/sort-both.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQwMS45OThweCIgaGVpZ2h0PSI0MDEuOTk4cHgiIHZpZXdCb3g9IjAgMCA0MDEuOTk4IDQwMS45OTgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMS45OTggNDAxLjk5ODsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik03My4wOTIsMTY0LjQ1MmgyNTUuODEzYzQuOTQ5LDAsOS4yMzMtMS44MDcsMTIuODQ4LTUuNDI0YzMuNjEzLTMuNjE2LDUuNDI3LTcuODk4LDUuNDI3LTEyLjg0Nw0KCQkJYzAtNC45NDktMS44MTMtOS4yMjktNS40MjctMTIuODVMMjEzLjg0Niw1LjQyNEMyMTAuMjMyLDEuODEyLDIwNS45NTEsMCwyMDAuOTk5LDBzLTkuMjMzLDEuODEyLTEyLjg1LDUuNDI0TDYwLjI0MiwxMzMuMzMxDQoJCQljLTMuNjE3LDMuNjE3LTUuNDI0LDcuOTAxLTUuNDI0LDEyLjg1YzAsNC45NDgsMS44MDcsOS4yMzEsNS40MjQsMTIuODQ3QzYzLjg2MywxNjIuNjQ1LDY4LjE0NCwxNjQuNDUyLDczLjA5MiwxNjQuNDUyeiIvPg0KCQk8cGF0aCBkPSJNMzI4LjkwNSwyMzcuNTQ5SDczLjA5MmMtNC45NTIsMC05LjIzMywxLjgwOC0xMi44NSw1LjQyMWMtMy42MTcsMy42MTctNS40MjQsNy44OTgtNS40MjQsMTIuODQ3DQoJCQljMCw0Ljk0OSwxLjgwNyw5LjIzMyw1LjQyNCwxMi44NDhMMTg4LjE0OSwzOTYuNTdjMy42MjEsMy42MTcsNy45MDIsNS40MjgsMTIuODUsNS40MjhzOS4yMzMtMS44MTEsMTIuODQ3LTUuNDI4bDEyNy45MDctMTI3LjkwNg0KCQkJYzMuNjEzLTMuNjE0LDUuNDI3LTcuODk4LDUuNDI3LTEyLjg0OGMwLTQuOTQ4LTEuODEzLTkuMjI5LTUuNDI3LTEyLjg0N0MzMzguMTM5LDIzOS4zNTMsMzMzLjg1NCwyMzcuNTQ5LDMyOC45MDUsMjM3LjU0OXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==");

/***/ }),

/***/ "./src/lib/assets/sort-down.svg":
/*!**************************************!*\
  !*** ./src/lib/assets/sort-down.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQwMS45OThweCIgaGVpZ2h0PSI0MDEuOTk4cHgiIHZpZXdCb3g9IjAgMCA0MDEuOTk4IDQwMS45OTgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMS45OTggNDAxLjk5ODsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCQ0KCQk8cGF0aCBkPSJNMzI4LjkwNSwyMzcuNTQ5SDczLjA5MmMtNC45NTIsMC05LjIzMywxLjgwOC0xMi44NSw1LjQyMWMtMy42MTcsMy42MTctNS40MjQsNy44OTgtNS40MjQsMTIuODQ3DQoJCQljMCw0Ljk0OSwxLjgwNyw5LjIzMyw1LjQyNCwxMi44NDhMMTg4LjE0OSwzOTYuNTdjMy42MjEsMy42MTcsNy45MDIsNS40MjgsMTIuODUsNS40MjhzOS4yMzMtMS44MTEsMTIuODQ3LTUuNDI4bDEyNy45MDctMTI3LjkwNg0KCQkJYzMuNjEzLTMuNjE0LDUuNDI3LTcuODk4LDUuNDI3LTEyLjg0OGMwLTQuOTQ4LTEuODEzLTkuMjI5LTUuNDI3LTEyLjg0N0MzMzguMTM5LDIzOS4zNTMsMzMzLjg1NCwyMzcuNTQ5LDMyOC45MDUsMjM3LjU0OXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==");

/***/ }),

/***/ "./src/lib/assets/sort-up.svg":
/*!************************************!*\
  !*** ./src/lib/assets/sort-up.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjQwMS45OThweCIgaGVpZ2h0PSI0MDEuOTk4cHgiIHZpZXdCb3g9IjAgMCA0MDEuOTk4IDQwMS45OTgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMS45OTggNDAxLjk5ODsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik03My4wOTIsMTY0LjQ1MmgyNTUuODEzYzQuOTQ5LDAsOS4yMzMtMS44MDcsMTIuODQ4LTUuNDI0YzMuNjEzLTMuNjE2LDUuNDI3LTcuODk4LDUuNDI3LTEyLjg0Nw0KCQkJYzAtNC45NDktMS44MTMtOS4yMjktNS40MjctMTIuODVMMjEzLjg0Niw1LjQyNEMyMTAuMjMyLDEuODEyLDIwNS45NTEsMCwyMDAuOTk5LDBzLTkuMjMzLDEuODEyLTEyLjg1LDUuNDI0TDYwLjI0MiwxMzMuMzMxDQoJCQljLTMuNjE3LDMuNjE3LTUuNDI0LDcuOTAxLTUuNDI0LDEyLjg1YzAsNC45NDgsMS44MDcsOS4yMzEsNS40MjQsMTIuODQ3QzYzLjg2MywxNjIuNjQ1LDY4LjE0NCwxNjQuNDUyLDczLjA5MiwxNjQuNDUyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");

/***/ }),

/***/ "./src/lib/models/enums/Sort.enum.ts":
/*!*******************************************!*\
  !*** ./src/lib/models/enums/Sort.enum.ts ***!
  \*******************************************/
/*! exports provided: Sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
var Sort;

(function (Sort) {
  Sort[Sort["Both"] = 0] = "Both";
  Sort[Sort["Asc"] = 1] = "Asc";
  Sort[Sort["Desc"] = 2] = "Desc";
})(Sort || (Sort = {}));

;

/***/ }),

/***/ "./src/lib/utils/constants.ts":
/*!************************************!*\
  !*** ./src/lib/utils/constants.ts ***!
  \************************************/
/*! exports provided: ERRORS, PREFIX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERRORS", function() { return ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREFIX", function() { return PREFIX; });
var ERRORS = {
  HEADER: {
    UNDEFINED_OR_NULL: 'You haven\'t sent any header',
    EMPTY: 'You have sent empty headers',
    MIXING_SINGLE_AND_DOUBLE: 'You can\'t mix single and double row headers',
    INVALID_FORMAT: 'Format of the header is invalid'
  },
  DATA: {
    UNDEFINED_OR_NULL: 'You haven\'t sent any data',
    EMPTY: 'You have sent empty data',
    LENGTH: 'Problem with the data length, it doesn\'t match the headers',
    INVALID_TYPE_CELL: 'The data cell is neither a Primitive nor an object',
    MISSING_VALUE_FIELD: 'The data cell is neither a Primitive nor an object'
  },
  WEIGHTS: {
    LENGTH: 'Problem with the weights length, it doesn\'t match the headers',
    INVALID_FORMAT: 'The weights has invalid format, it should be an array of numbers (int or float)'
  }
};
var PREFIX = 'react-cell-grid';


/***/ }),

/***/ "./src/lib/utils/functions.ts":
/*!************************************!*\
  !*** ./src/lib/utils/functions.ts ***!
  \************************************/
/*! exports provided: isPrimitive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Checks whether the variable is primitive or not
 *
 * @param {any} value value we want to check
 * @returns {boolean} true if variable is primitive false otherwise
 */
function isPrimitive(value) {
  return ['string', 'number', 'boolean'].includes(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value));
}



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=Grid.js.map