/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(8);
var isBuffer = __webpack_require__(34);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(19)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(36);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(9);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(9);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * Vue.js v2.4.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(val);
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;
var tip = noop;
var formatComponentName = (null); // work around flow check

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefix has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this) : parentVal
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn.call(this, parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (parentVal, childVal) {
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options) {
  var inject = options.inject;
  if (Array.isArray(inject)) {
    var normalized = options.inject = {};
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = inject[i];
    }
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeInject(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (process.env.NODE_ENV !== 'production') {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    valid = typeof value === expectedType.toLowerCase();
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        (last).text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (comp.__esModule && comp.default) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                process.env.NODE_ENV !== 'production'
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      child.data && child.data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listensers hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data && parentVnode.data.attrs;
  vm.$listeners = listeners;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function checkOptionType (vm, name) {
  var option = vm.$options[name];
  if (!isPlainObject(option)) {
    warn(
      ("component option \"" + name + "\" should be an object."),
      vm
    );
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      if (isReservedAttribute(key) || config.isReservedAttr(key)) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  process.env.NODE_ENV !== 'production' && checkOptionType(vm, 'computed');
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  process.env.NODE_ENV !== 'production' && checkOptionType(vm, 'methods');
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  process.env.NODE_ENV !== 'production' && checkOptionType(vm, 'watch');
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (process.env.NODE_ENV !== 'production' && !source) {
        warn(("Injection \"" + key + "\" not found"), vm);
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || {});
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (process.env.NODE_ENV !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && process.env.NODE_ENV !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(ours, existing) : ours;
      }
    }
  }
  return data
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, null, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners, null, true);
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
  Vue.prototype._g = bindObjectListeners;
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp, Array];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.4.2';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if (process.env.NODE_ENV !== 'production' &&
              typeof console !== 'undefined' &&
              !bailed
            ) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;



function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

/*  */

/**
 * Cross-platform code generation for component v-model
 */


/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */


/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var str;
var index$1;

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likley wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$options._renderChildren;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if (process.env.NODE_ENV !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue$3);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4), __webpack_require__(15)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(37);
var buildURL = __webpack_require__(39);
var parseHeaders = __webpack_require__(40);
var isURLSameOrigin = __webpack_require__(41);
var createError = __webpack_require__(10);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(42);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(43);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(38);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fileUpload_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fileUpload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fileUpload_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d7d684d_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_fileUpload_vue__ = __webpack_require__(84);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(81)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fileUpload_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d7d684d_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_fileUpload_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\manager\\fileUpload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fileUpload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d7d684d", Component.options)
  } else {
    hotAPI.reload("data-v-0d7d684d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(16);

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__(22);

var _router2 = _interopRequireDefault(_router);

__webpack_require__(86);

__webpack_require__(87);

__webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 引用样式
// css
// js

// 引入vue
var vm = new _vue2.default({
    el: '#app',
    // 实例的模板的几种方式之一
    router: _router2.default,
    render: function render(createElement) {
        // return createElement (组件对象)
        // App组件中的模板最终会替换 index.blade.php 中的 #app 这个原色
        return createElement(_App2.default);
    }
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bd787394_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(21);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(17)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bd787394_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bd787394", Component.options)
  } else {
    hotAPI.reload("data-v-bd787394", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("8aef077a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bd787394\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bd787394\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('router-view')], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bd787394", esExports)
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(23);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _admin = __webpack_require__(24);

var _admin2 = _interopRequireDefault(_admin);

var _welcome = __webpack_require__(29);

var _welcome2 = _interopRequireDefault(_welcome);

var _index = __webpack_require__(52);

var _index2 = _interopRequireDefault(_index);

var _login = __webpack_require__(57);

var _login2 = _interopRequireDefault(_login);

var _showlist = __webpack_require__(62);

var _showlist2 = _interopRequireDefault(_showlist);

var _index3 = __webpack_require__(67);

var _index4 = _interopRequireDefault(_index3);

var _info = __webpack_require__(72);

var _info2 = _interopRequireDefault(_info);

var _add = __webpack_require__(77);

var _add2 = _interopRequireDefault(_add);

var _fileUpload = __webpack_require__(13);

var _fileUpload2 = _interopRequireDefault(_fileUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 2.Vue.use()
_vue2.default.use(_vueRouter2.default);

// 3.配置路由
/*
*  这里来进行路由配置
*  1.引入包
*  2.Vue.use
*  3.配置路由
*  4.将 new 出的路由实例，关联 new Vue({router:路由实例})
* */
// 1.引包
var router = new _vueRouter2.default({
    routes: [
    // {name:'',path:'',component: A}
    // 这里rediret 表示跳转，如果地址栏中锚点值是 #/ 就立即自动跳转到#/admin

    { path: '/', redirect: { name: 'welcome' } }, { name: 'admin', path: '/admin', component: _admin2.default,
        children: [
        // 如果children 中的组件呈现到页面中，那么Admin 组件也一定呈现知道页面上
        { name: 'index', path: '/index', component: _index2.default,
            children: [{ name: 'welcome', path: '/welcome', component: _welcome2.default }]
        },
        // manager 用户
        { name: 'login', path: '/login', component: _login2.default }, { name: 'user', path: '/manager', component: _index4.default,
            children: [{ name: 'managerShowList', path: '/manager/showlist', component: _showlist2.default }, { name: 'managerInfo', path: '/manager/info', component: _info2.default }, { name: 'managerAdd', path: '/manager/add', component: _add2.default,
                children: [{ name: 'fileUpload', path: '/file', component: _fileUpload2.default }]
            }] }]
    }]
});

// 暴露router
exports.default = router;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/**
  * vue-router v2.7.0
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also regiseter instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (index$1(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (index$1(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var normalizedPath = normalizePath(path, parent);
  var pathToRegexpOptions = route.pathToRegexpOptions || {};

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = index(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = {};
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
        offset = normalizeOffset(offset);
        position = getElementPosition(el, offset);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (resolvedDef.__esModule && resolvedDef.default) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      var current = this$1.current;
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  window.location.replace((base + "#" + path));
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.7.0';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_admin_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_admin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_admin_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c5693198_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_admin_vue__ = __webpack_require__(28);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(25)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_admin_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c5693198_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_admin_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\index\\admin.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] admin.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c5693198", Component.options)
  } else {
    hotAPI.reload("data-v-c5693198", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2f6b892d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c5693198\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./admin.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c5693198\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./admin.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('router-view')
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c5693198", esExports)
  }
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_welcome_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_welcome_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_welcome_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_586882f2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_welcome_vue__ = __webpack_require__(51);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(30)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_welcome_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_586882f2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_welcome_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\index\\welcome.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] welcome.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-586882f2", Component.options)
  } else {
    hotAPI.reload("data-v-586882f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("76baae9a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-586882f2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./welcome.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-586882f2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./welcome.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {};
    },

    methods: {},
    created: function created() {
        (0, _axios2.default)({
            url: '/admin/index/getServerMessage',
            type: 'get',
            params: {}
        }).then(function (res) {
            console.log(res['data']);
        });
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(8);
var Axios = __webpack_require__(35);
var defaults = __webpack_require__(6);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(12);
axios.CancelToken = __webpack_require__(49);
axios.isCancel = __webpack_require__(11);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(50);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(6);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(44);
var dispatchRequest = __webpack_require__(45);
var isAbsoluteURL = __webpack_require__(47);
var combineURLs = __webpack_require__(48);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(10);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(46);
var isCancel = __webpack_require__(11);
var defaults = __webpack_require__(6);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(12);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-container"
  }, [_c('p', {
    staticClass: "f-20 text-success"
  }, [_vm._v("欢迎使用H-ui.admin "), _c('span', {
    staticClass: "f-14"
  }, [_vm._v("v3.0")]), _vm._v("后台模版！")]), _vm._v(" "), _c('p', [_vm._v("登录次数：18 ")]), _vm._v(" "), _c('p', [_vm._v("上次登录IP：222.35.131.79.1  上次登录时间：2014-6-14 11:19:55")]), _vm._v(" "), _c('table', {
    staticClass: "table table-border table-bordered table-bg"
  }, [_c('thead', [_c('tr', [_c('th', {
    attrs: {
      "colspan": "7",
      "scope": "col"
    }
  }, [_vm._v("信息统计")])]), _vm._v(" "), _c('tr', {
    staticClass: "text-c"
  }, [_c('th', [_vm._v("统计")]), _vm._v(" "), _c('th', [_vm._v("资讯库")]), _vm._v(" "), _c('th', [_vm._v("图片库")]), _vm._v(" "), _c('th', [_vm._v("产品库")]), _vm._v(" "), _c('th', [_vm._v("用户")]), _vm._v(" "), _c('th', [_vm._v("管理员")])])]), _vm._v(" "), _c('tbody', [_c('tr', {
    staticClass: "text-c"
  }, [_c('td', [_vm._v("总数")]), _vm._v(" "), _c('td', [_vm._v("92")]), _vm._v(" "), _c('td', [_vm._v("9")]), _vm._v(" "), _c('td', [_vm._v("0")]), _vm._v(" "), _c('td', [_vm._v("8")]), _vm._v(" "), _c('td', [_vm._v("20")])]), _vm._v(" "), _c('tr', {
    staticClass: "text-c"
  }, [_c('td', [_vm._v("今日")]), _vm._v(" "), _c('td', [_vm._v("0")]), _vm._v(" "), _c('td', [_vm._v("0")]), _vm._v(" "), _c('td', [_vm._v("0")]), _vm._v(" "), _c('td', [_vm._v("0")]), _vm._v(" "), _c('td', [_vm._v("0")])]), _vm._v(" "), _c('tr', {
    staticClass: "text-c"
  }, [_c('td', [_vm._v("昨日")]), _vm._v(" "), _c('td', [_vm._v("0")]), _vm._v(" "), _c('td', [_vm._v("0")]), _vm._v(" "), _c('td', [_vm._v("0")]), _vm._v(" "), _c('td', [_vm._v("0")]), _vm._v(" "), _c('td', [_vm._v("0")])]), _vm._v(" "), _c('tr', {
    staticClass: "text-c"
  }, [_c('td', [_vm._v("本周")]), _vm._v(" "), _c('td', [_vm._v("2")]), _vm._v(" "), _c('td', [_vm._v("0")]), _vm._v(" "), _c('td', [_vm._v("0")]), _vm._v(" "), _c('td', [_vm._v("0")]), _vm._v(" "), _c('td', [_vm._v("0")])]), _vm._v(" "), _c('tr', {
    staticClass: "text-c"
  }, [_c('td', [_vm._v("本月")]), _vm._v(" "), _c('td', [_vm._v("2")]), _vm._v(" "), _c('td', [_vm._v("0")]), _vm._v(" "), _c('td', [_vm._v("0")]), _vm._v(" "), _c('td', [_vm._v("0")]), _vm._v(" "), _c('td', [_vm._v("0")])])])]), _vm._v(" "), _c('table', {
    staticClass: "table table-border table-bordered table-bg mt-20"
  }, [_c('thead', [_c('tr', [_c('th', {
    attrs: {
      "colspan": "2",
      "scope": "col"
    }
  }, [_vm._v("服务器信息")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('th', {
    attrs: {
      "width": "30%"
    }
  }, [_vm._v("服务器计算机名")]), _vm._v(" "), _c('td', [_c('span', {
    attrs: {
      "id": "lbServerName"
    }
  }, [_vm._v("http://127.0.0.1/")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("服务器IP地址")]), _vm._v(" "), _c('td', [_vm._v("192.168.1.1")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("服务器域名")]), _vm._v(" "), _c('td', [_vm._v("www.h-ui.net")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("服务器端口 ")]), _vm._v(" "), _c('td', [_vm._v("80")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("服务器IIS版本 ")]), _vm._v(" "), _c('td', [_vm._v("Microsoft-IIS/6.0")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("本文件所在文件夹 ")]), _vm._v(" "), _c('td', [_vm._v("D:\\WebSite\\HanXiPuTai.com\\XinYiCMS.Web\\")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("服务器操作系统 ")]), _vm._v(" "), _c('td', [_vm._v("Microsoft Windows NT 5.2.3790 Service Pack 2")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("系统所在文件夹 ")]), _vm._v(" "), _c('td', [_vm._v("C:\\WINDOWS\\system32")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("服务器脚本超时时间 ")]), _vm._v(" "), _c('td', [_vm._v("30000秒")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("服务器的语言种类 ")]), _vm._v(" "), _c('td', [_vm._v("Chinese (People's Republic of China)")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(".NET Framework 版本 ")]), _vm._v(" "), _c('td', [_vm._v("2.050727.3655")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("服务器当前时间 ")]), _vm._v(" "), _c('td', [_vm._v("2014-6-14 12:06:23")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("服务器IE版本 ")]), _vm._v(" "), _c('td', [_vm._v("6.0000")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("服务器上次启动到现在已运行 ")]), _vm._v(" "), _c('td', [_vm._v("7210分钟")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("逻辑驱动器 ")]), _vm._v(" "), _c('td', [_vm._v("C:\\D:\\")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("CPU 总数 ")]), _vm._v(" "), _c('td', [_vm._v("4")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("CPU 类型 ")]), _vm._v(" "), _c('td', [_vm._v("x86 Family 6 Model 42 Stepping 1, GenuineIntel")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("虚拟内存 ")]), _vm._v(" "), _c('td', [_vm._v("52480M")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("当前程序占用内存 ")]), _vm._v(" "), _c('td', [_vm._v("3.29M")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Asp.net所占内存 ")]), _vm._v(" "), _c('td', [_vm._v("51.46M")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("当前Session数量 ")]), _vm._v(" "), _c('td', [_vm._v("8")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("当前SessionID ")]), _vm._v(" "), _c('td', [_vm._v("gznhpwmp34004345jz2q3l45")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("当前系统用户名 ")]), _vm._v(" "), _c('td', [_vm._v("NETWORK SERVICE")])])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-586882f2", esExports)
  }
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6bdc1337_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(56);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(53)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6bdc1337_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6bdc1337", Component.options)
  } else {
    hotAPI.reload("data-v-6bdc1337", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("8aca416e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6bdc1337\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6bdc1337\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {};
    },

    methods: {
        userInfo: function userInfo(title, url, w, h) {
            layer_show(title, url, w, h);
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('header', {
    staticClass: "navbar-wrapper"
  }, [_c('div', {
    staticClass: "navbar navbar-fixed-top"
  }, [_c('div', {
    staticClass: "container-fluid cl"
  }, [_c('a', {
    staticClass: "logo navbar-logo f-l mr-10 hidden-xs",
    attrs: {
      "href": "/aboutHui.shtml"
    }
  }, [_vm._v("H-ui.admin")]), _vm._v(" "), _c('a', {
    staticClass: "logo navbar-logo-m f-l mr-10 visible-xs",
    attrs: {
      "href": "/aboutHui.shtml"
    }
  }, [_vm._v("H-ui")]), _vm._v(" "), _c('span', {
    staticClass: "logo navbar-slogan f-l mr-10 hidden-xs"
  }, [_vm._v("v3.0")]), _vm._v(" "), _c('a', {
    staticClass: "nav-toggle Hui-iconfont visible-xs",
    attrs: {
      "aria-hidden": "false",
      "href": "javascript:;"
    }
  }, [_vm._v("")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('nav', {
    staticClass: "nav navbar-nav navbar-userbar hidden-xs",
    attrs: {
      "id": "Hui-userbar"
    }
  }, [_c('ul', {
    staticClass: "cl"
  }, [_c('li', [_vm._v("超级管理员")]), _vm._v(" "), _c('li', {
    staticClass: "dropDown dropDown_hover"
  }, [_vm._m(1), _vm._v(" "), _c('ul', {
    staticClass: "dropDown-menu menu radius box-shadow"
  }, [_c('li', [_c('a', {
    on: {
      "click": function($event) {
        _vm.userInfo('个人信息', '/admin/index/index#/manager/info', 800, 500)
      }
    }
  }, [_vm._v("个人信息")])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3)])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5)])])])])]), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7), _vm._v(" "), _c('section', {
    staticClass: "Hui-article-box"
  }, [_vm._m(8), _vm._v(" "), _c('div', {
    staticClass: "Hui-article",
    attrs: {
      "id": "iframe_box"
    }
  }, [_c('div', {
    staticClass: "show_iframe"
  }, [_c('div', {
    staticClass: "loading",
    staticStyle: {
      "display": "none"
    }
  }), _vm._v(" "), _c('router-view')], 1)])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "nav navbar-nav"
  }, [_c('ul', {
    staticClass: "cl"
  }, [_c('li', {
    staticClass: "dropDown dropDown_hover"
  }, [_c('a', {
    staticClass: "dropDown_A",
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")]), _vm._v(" 新增 "), _c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")])]), _vm._v(" "), _c('ul', {
    staticClass: "dropDown-menu menu radius box-shadow"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "javascript:;",
      "onclick": "article_add('添加资讯','article-add.html')"
    }
  }, [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")]), _vm._v(" 资讯")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:;",
      "onclick": "picture_add('添加资讯','picture-add.html')"
    }
  }, [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")]), _vm._v(" 图片")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:;",
      "onclick": "product_add('添加资讯','product-add.html')"
    }
  }, [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")]), _vm._v(" 产品")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:;",
      "onclick": "member_add('添加用户','member-add.html','','510')"
    }
  }, [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")]), _vm._v(" 用户")])])])])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "dropDown_A",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("admin "), _c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("切换账户")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("退出")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    attrs: {
      "id": "Hui-msg"
    }
  }, [_c('a', {
    attrs: {
      "href": "#",
      "title": "消息"
    }
  }, [_c('span', {
    staticClass: "badge badge-danger"
  }, [_vm._v("1")]), _c('i', {
    staticClass: "Hui-iconfont",
    staticStyle: {
      "font-size": "18px"
    }
  }, [_vm._v("")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "dropDown right dropDown_hover",
    attrs: {
      "id": "Hui-skin"
    }
  }, [_c('a', {
    staticClass: "dropDown_A",
    attrs: {
      "href": "javascript:;",
      "title": "换肤"
    }
  }, [_c('i', {
    staticClass: "Hui-iconfont",
    staticStyle: {
      "font-size": "18px"
    }
  }, [_vm._v("")])]), _vm._v(" "), _c('ul', {
    staticClass: "dropDown-menu menu radius box-shadow"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "javascript:;",
      "data-val": "default",
      "title": "默认（黑色）"
    }
  }, [_vm._v("默认（黑色）")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:;",
      "data-val": "blue",
      "title": "蓝色"
    }
  }, [_vm._v("蓝色")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:;",
      "data-val": "green",
      "title": "绿色"
    }
  }, [_vm._v("绿色")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:;",
      "data-val": "red",
      "title": "红色"
    }
  }, [_vm._v("红色")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:;",
      "data-val": "yellow",
      "title": "黄色"
    }
  }, [_vm._v("黄色")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "javascript:;",
      "data-val": "orange",
      "title": "橙色"
    }
  }, [_vm._v("橙色")])])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('aside', {
    staticClass: "Hui-aside"
  }, [_c('div', {
    staticClass: "menu_dropdown bk_2"
  }, [_c('dl', {
    attrs: {
      "id": "menu-article"
    }
  }, [_c('dt', [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")]), _vm._v(" 资讯管理"), _c('i', {
    staticClass: "Hui-iconfont menu_dropdown-arrow"
  }, [_vm._v("")])]), _vm._v(" "), _c('dd', [_c('ul', [_c('li', [_c('a', {
    attrs: {
      "data-href": "article-list.html",
      "data-title": "资讯管理",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("资讯管理")])])])])]), _vm._v(" "), _c('dl', {
    attrs: {
      "id": "menu-picture"
    }
  }, [_c('dt', [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")]), _vm._v(" 图片管理"), _c('i', {
    staticClass: "Hui-iconfont menu_dropdown-arrow"
  }, [_vm._v("")])]), _vm._v(" "), _c('dd', [_c('ul', [_c('li', [_c('a', {
    attrs: {
      "data-href": "picture-list.html",
      "data-title": "图片管理",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("图片管理")])])])])]), _vm._v(" "), _c('dl', {
    attrs: {
      "id": "menu-product"
    }
  }, [_c('dt', [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")]), _vm._v(" 产品管理"), _c('i', {
    staticClass: "Hui-iconfont menu_dropdown-arrow"
  }, [_vm._v("")])]), _vm._v(" "), _c('dd', [_c('ul', [_c('li', [_c('a', {
    attrs: {
      "data-href": "product-brand.html",
      "data-title": "品牌管理",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("品牌管理")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "product-category.html",
      "data-title": "分类管理",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("分类管理")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "product-list.html",
      "data-title": "产品管理",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("产品管理")])])])])]), _vm._v(" "), _c('dl', {
    attrs: {
      "id": "menu-comments"
    }
  }, [_c('dt', [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")]), _vm._v(" 评论管理"), _c('i', {
    staticClass: "Hui-iconfont menu_dropdown-arrow"
  }, [_vm._v("")])]), _vm._v(" "), _c('dd', [_c('ul', [_c('li', [_c('a', {
    attrs: {
      "data-href": "http://h-ui.duoshuo.com/admin/",
      "data-title": "评论列表",
      "href": "javascript:;"
    }
  }, [_vm._v("评论列表")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "feedback-list.html",
      "data-title": "意见反馈",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("意见反馈")])])])])]), _vm._v(" "), _c('dl', {
    attrs: {
      "id": "menu-member"
    }
  }, [_c('dt', [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")]), _vm._v(" 会员管理"), _c('i', {
    staticClass: "Hui-iconfont menu_dropdown-arrow"
  }, [_vm._v("")])]), _vm._v(" "), _c('dd', [_c('ul', [_c('li', [_c('a', {
    attrs: {
      "data-href": "member-list.html",
      "data-title": "会员列表",
      "href": "javascript:;"
    }
  }, [_vm._v("会员列表")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "member-del.html",
      "data-title": "删除的会员",
      "href": "javascript:;"
    }
  }, [_vm._v("删除的会员")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "member-level.html",
      "data-title": "等级管理",
      "href": "javascript:;"
    }
  }, [_vm._v("等级管理")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "member-scoreoperation.html",
      "data-title": "积分管理",
      "href": "javascript:;"
    }
  }, [_vm._v("积分管理")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "member-record-browse.html",
      "data-title": "浏览记录",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("浏览记录")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "member-record-download.html",
      "data-title": "下载记录",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("下载记录")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "member-record-share.html",
      "data-title": "分享记录",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("分享记录")])])])])]), _vm._v(" "), _c('dl', {
    attrs: {
      "id": "menu-admin"
    }
  }, [_c('dt', [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")]), _vm._v(" 管理员管理"), _c('i', {
    staticClass: "Hui-iconfont menu_dropdown-arrow"
  }, [_vm._v("")])]), _vm._v(" "), _c('dd', [_c('ul', [_c('li', [_c('a', {
    attrs: {
      "router-link": "/admin/index/index#/",
      "data-title": "角色管理",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("角色管理")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "admin-permission.html",
      "data-title": "权限管理",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("权限管理")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "/admin/index/index#/manager/showlist",
      "data-title": "管理员列表",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("管理员列表")])])])])]), _vm._v(" "), _c('dl', {
    attrs: {
      "id": "menu-tongji"
    }
  }, [_c('dt', [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")]), _vm._v(" 系统统计"), _c('i', {
    staticClass: "Hui-iconfont menu_dropdown-arrow"
  }, [_vm._v("")])]), _vm._v(" "), _c('dd', [_c('ul', [_c('li', [_c('a', {
    attrs: {
      "data-href": "charts-1.html",
      "data-title": "折线图",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("折线图")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "charts-2.html",
      "data-title": "时间轴折线图",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("时间轴折线图")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "charts-3.html",
      "data-title": "区域图",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("区域图")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "charts-4.html",
      "data-title": "柱状图",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("柱状图")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "charts-5.html",
      "data-title": "饼状图",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("饼状图")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "charts-6.html",
      "data-title": "3D柱状图",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("3D柱状图")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "charts-7.html",
      "data-title": "3D饼状图",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("3D饼状图")])])])])]), _vm._v(" "), _c('dl', {
    attrs: {
      "id": "menu-system"
    }
  }, [_c('dt', [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")]), _vm._v(" 系统管理"), _c('i', {
    staticClass: "Hui-iconfont menu_dropdown-arrow"
  }, [_vm._v("")])]), _vm._v(" "), _c('dd', [_c('ul', [_c('li', [_c('a', {
    attrs: {
      "data-href": "system-base.html",
      "data-title": "系统设置",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("系统设置")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "system-category.html",
      "data-title": "栏目管理",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("栏目管理")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "system-data.html",
      "data-title": "数据字典",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("数据字典")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "system-shielding.html",
      "data-title": "屏蔽词",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("屏蔽词")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "data-href": "system-log.html",
      "data-title": "系统日志",
      "href": "javascript:void(0)"
    }
  }, [_vm._v("系统日志")])])])])])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dislpayArrow hidden-xs"
  }, [_c('a', {
    staticClass: "pngfix",
    attrs: {
      "href": "javascript:void(0);",
      "onClick": "displaynavbar(this)"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Hui-tabNav hidden-xs",
    attrs: {
      "id": "Hui-tabNav"
    }
  }, [_c('div', {
    staticClass: "Hui-tabNav-wp"
  }, [_c('ul', {
    staticClass: "acrossTab cl",
    attrs: {
      "id": "min_title_list"
    }
  }, [_c('li', {
    staticClass: "active"
  }, [_c('span', {
    attrs: {
      "title": "我的桌面",
      "data-href": "welcome.html"
    }
  }, [_vm._v("我的桌面")]), _vm._v(" "), _c('em')])])]), _vm._v(" "), _c('div', {
    staticClass: "Hui-tabNav-more btn-group"
  }, [_c('a', {
    staticClass: "btn radius btn-default size-S",
    attrs: {
      "id": "js-tabNav-prev",
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")])]), _c('a', {
    staticClass: "btn radius btn-default size-S",
    attrs: {
      "id": "js-tabNav-next",
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6bdc1337", esExports)
  }
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26fdbce9_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_login_vue__ = __webpack_require__(61);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(58)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26fdbce9_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_login_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\manager\\login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26fdbce9", Component.options)
  } else {
    hotAPI.reload("data-v-26fdbce9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("e690add0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-26fdbce9\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-26fdbce9\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('input', {
    attrs: {
      "type": "hidden",
      "id": "TenantId",
      "name": "TenantId",
      "value": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "header"
  }), _vm._v(" "), _c('div', {
    staticClass: "loginWraper"
  }, [_c('div', {
    staticClass: "loginBox",
    attrs: {
      "id": "loginform"
    }
  }, [_c('form', {
    staticClass: "form form-horizontal",
    attrs: {
      "action": "index.html",
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "row cl"
  }, [_c('label', {
    staticClass: "form-label col-xs-3"
  }, [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")])]), _vm._v(" "), _c('div', {
    staticClass: "formControls col-xs-8"
  }, [_c('input', {
    staticClass: "input-text size-L",
    attrs: {
      "id": "username",
      "name": "username",
      "type": "text",
      "placeholder": "账户"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row cl"
  }, [_c('label', {
    staticClass: "form-label col-xs-3"
  }, [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")])]), _vm._v(" "), _c('div', {
    staticClass: "formControls col-xs-8"
  }, [_c('input', {
    staticClass: "input-text size-L",
    attrs: {
      "id": "password",
      "name": "password",
      "type": "password",
      "placeholder": "密码"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row cl"
  }, [_c('div', {
    staticClass: "formControls col-xs-8 col-xs-offset-3"
  }, [_c('input', {
    staticClass: "input-text size-L",
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "text",
      "placeholder": "验证码",
      "onblur": "if(this.value==''){this.value='验证码:'}",
      "onclick": "if(this.value=='验证码:'){this.value='';}",
      "value": "验证码:"
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": ""
    }
  }), _vm._v(" "), _c('a', {
    attrs: {
      "id": "kanbuq",
      "href": "javascript:;"
    }
  }, [_vm._v("看不清，换一张")])])]), _vm._v(" "), _c('div', {
    staticClass: "row cl"
  }, [_c('div', {
    staticClass: "formControls col-xs-8 col-xs-offset-3"
  }, [_c('label', {
    attrs: {
      "for": "online"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "online",
      "id": "online",
      "value": ""
    }
  }), _vm._v("\n                            使我保持登录状态")])])]), _vm._v(" "), _c('div', {
    staticClass: "row cl"
  }, [_c('div', {
    staticClass: "formControls col-xs-8 col-xs-offset-3"
  }, [_c('input', {
    staticClass: "btn btn-success radius size-L",
    staticStyle: {
      "width": "100px",
      "text-align": "center",
      "margin-right": "10px"
    },
    attrs: {
      "name": "",
      "type": "submit",
      "value": "登  录"
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "btn btn-default radius size-L",
    staticStyle: {
      "width": "100px",
      "text-align": "center"
    },
    attrs: {
      "name": "",
      "type": "reset",
      "value": "取  消"
    }
  })])])])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-26fdbce9", esExports)
  }
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_showlist_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_showlist_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_showlist_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a11f3c6a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_showlist_vue__ = __webpack_require__(66);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(63)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_showlist_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a11f3c6a_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_showlist_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\manager\\showlist.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] showlist.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a11f3c6a", Component.options)
  } else {
    hotAPI.reload("data-v-a11f3c6a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("f3d1c622", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a11f3c6a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./showlist.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a11f3c6a\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./showlist.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            managers: []
        };
    },

    methods: {
        managerAdd: function managerAdd(title, url, w, h) {
            //console.log(url)
            layer_show(title, url, w, h);
        }
    },
    created: function created() {
        var _this = this;

        // 发送异步请求，获取管理员列表信息
        (0, _axios2.default)({
            url: '/admin/manager/showlist',
            method: 'get',
            params: {}
        }).then(function (res) {
            console.log(res);
            if (res['data']['result']) {
                _this.managers = res['data']['data'];
            }
        });
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "page-container"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "cl pd-5 bg-1 bk-gray mt-20"
  }, [_c('span', {
    staticClass: "l"
  }, [_vm._m(2), _vm._v(" "), _c('a', {
    staticClass: "btn btn-primary radius",
    on: {
      "click": function($event) {
        _vm.managerAdd('添加管理员', '/admin/index/index#/manager/add', 800, 500)
      }
    }
  }, [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")]), _vm._v(" 添加管理员")])]), _vm._v(" "), _vm._m(3)]), _vm._v(" "), _c('table', {
    staticClass: "table table-border table-bordered table-bg"
  }, [_vm._m(4), _vm._v(" "), _c('tbody', _vm._l((_vm.managers), function(manager) {
    return _c('tr', {
      staticClass: "text-c"
    }, [_vm._m(5, true), _vm._v(" "), _c('td', [_vm._v(_vm._s(manager.mg_id))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(manager.username))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(manager.mg_phone))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(manager.mg_email))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(manager.mg_role_ids))]), _vm._v(" "), _c('td', [_vm._v("2014-6-11 11:11:42")]), _vm._v(" "), _vm._m(6, true), _vm._v(" "), _vm._m(7, true)])
  }))])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "breadcrumb"
  }, [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")]), _vm._v(" 首页 "), _c('span', {
    staticClass: "c-gray en"
  }, [_vm._v(">")]), _vm._v(" 管理员管理 "), _c('span', {
    staticClass: "c-gray en"
  }, [_vm._v(">")]), _vm._v(" 管理员列表 "), _c('a', {
    staticClass: "btn btn-success radius r",
    staticStyle: {
      "line-height": "1.6em",
      "margin-top": "3px"
    },
    attrs: {
      "href": "javascript:location.replace(location.href);",
      "title": "刷新"
    }
  }, [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "text-c"
  }, [_vm._v(" 日期范围：\r\n            "), _c('input', {
    staticClass: "input-text Wdate",
    staticStyle: {
      "width": "120px"
    },
    attrs: {
      "type": "text",
      "onfocus": "WdatePicker({ maxDate:'#F{$dp.$D(\\'datemax\\')||\\'%y-%M-%d\\'}' })",
      "id": "datemin"
    }
  }), _vm._v("\r\n            -\r\n            "), _c('input', {
    staticClass: "input-text Wdate",
    staticStyle: {
      "width": "120px"
    },
    attrs: {
      "type": "text",
      "onfocus": "WdatePicker({ minDate:'#F{$dp.$D(\\'datemin\\')}',maxDate:'%y-%M-%d' })",
      "id": "datemax"
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "input-text",
    staticStyle: {
      "width": "250px"
    },
    attrs: {
      "type": "text",
      "placeholder": "输入管理员名称",
      "id": "searchKeyWord",
      "name": ""
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "id": "search",
      "name": ""
    }
  }, [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")]), _vm._v(" 搜用户")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "btn btn-danger radius",
    attrs: {
      "href": "javascript:;",
      "onclick": "datadel()"
    }
  }, [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")]), _vm._v(" 批量删除")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "r"
  }, [_vm._v("共有数据："), _c('strong', [_vm._v("54")]), _vm._v(" 条")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', {
    attrs: {
      "scope": "col",
      "colspan": "9"
    }
  }, [_vm._v("员工列表")])]), _vm._v(" "), _c('tr', {
    staticClass: "text-c"
  }, [_c('th', {
    attrs: {
      "width": "25"
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "",
      "value": ""
    }
  })]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "40"
    }
  }, [_vm._v("ID")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("登录名")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "90"
    }
  }, [_vm._v("手机")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "150"
    }
  }, [_vm._v("邮箱")]), _vm._v(" "), _c('th', [_vm._v("角色")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "130"
    }
  }, [_vm._v("加入时间")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("是否已启用")]), _vm._v(" "), _c('th', {
    attrs: {
      "width": "100"
    }
  }, [_vm._v("操作")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', [_c('input', {
    attrs: {
      "type": "checkbox",
      "value": "1",
      "name": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "td-status"
  }, [_c('span', {
    staticClass: "label label-success radius"
  }, [_vm._v("已启用")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "td-manage"
  }, [_c('a', {
    staticStyle: {
      "text-decoration": "none"
    },
    attrs: {
      "onClick": "admin_stop(this,'10001')",
      "href": "javascript:;",
      "title": "停用"
    }
  }, [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")])]), _vm._v(" "), _c('a', {
    staticClass: "ml-5",
    staticStyle: {
      "text-decoration": "none"
    },
    attrs: {
      "title": "编辑",
      "href": "javascript:;",
      "onclick": "admin_edit('管理员编辑','admin-add.html','1','800','500')"
    }
  }, [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")])]), _vm._v(" "), _c('a', {
    staticClass: "ml-5",
    staticStyle: {
      "text-decoration": "none"
    },
    attrs: {
      "title": "删除",
      "href": "javascript:;",
      "onclick": "admin_del(this,'1')"
    }
  }, [_c('i', {
    staticClass: "Hui-iconfont"
  }, [_vm._v("")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a11f3c6a", esExports)
  }
}

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d5619d2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(71);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(68)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d5619d2_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\manager\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d5619d2", Component.options)
  } else {
    hotAPI.reload("data-v-5d5619d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7e3b12be", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d5619d2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d5619d2\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('router-view')
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5d5619d2", esExports)
  }
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_info_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_info_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_info_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_345ee844_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_info_vue__ = __webpack_require__(76);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(73)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_info_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_345ee844_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_info_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\manager\\info.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] info.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-345ee844", Component.options)
  } else {
    hotAPI.reload("data-v-345ee844", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("d40ceb50", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-345ee844\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./info.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-345ee844\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./info.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "cl pd-20",
    staticStyle: {
      "background-color": "#5bacb6"
    }
  }, [_c('img', {
    staticClass: "avatar size-XL l",
    attrs: {
      "src": ""
    }
  }), _vm._v(" "), _c('dl', {
    staticStyle: {
      "margin-left": "80px",
      "color": "#fff"
    }
  }, [_c('dt', [_c('span', {
    staticClass: "f-18"
  }, [_vm._v("张三")]), _vm._v(" "), _c('span', {
    staticClass: "pl-10 f-12"
  }, [_vm._v("余额：40")])]), _vm._v(" "), _c('dd', {
    staticClass: "pt-10 f-12",
    staticStyle: {
      "margin-left": "0"
    }
  }, [_vm._v("这家伙很懒，什么也没有留下")])])]), _vm._v(" "), _c('div', {
    staticClass: "pd-20"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('tbody', [_c('tr', [_c('th', {
    staticClass: "text-r",
    attrs: {
      "width": "80"
    }
  }, [_vm._v("性别：")]), _vm._v(" "), _c('td', [_vm._v("男")])]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "text-r"
  }, [_vm._v("手机：")]), _vm._v(" "), _c('td', [_vm._v("13000000000")])]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "text-r"
  }, [_vm._v("邮箱：")]), _vm._v(" "), _c('td', [_vm._v("admin@mail.com")])]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "text-r"
  }, [_vm._v("地址：")]), _vm._v(" "), _c('td', [_vm._v("北京市 海淀区")])]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "text-r"
  }, [_vm._v("注册时间：")]), _vm._v(" "), _c('td', [_vm._v("2014.12.20")])]), _vm._v(" "), _c('tr', [_c('th', {
    staticClass: "text-r"
  }, [_vm._v("积分：")]), _vm._v(" "), _c('td', [_vm._v("330")])])])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-345ee844", esExports)
  }
}

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3628a421_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_add_vue__ = __webpack_require__(85);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(78)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_add_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3628a421_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_add_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\manager\\add.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] add.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3628a421", Component.options)
  } else {
    hotAPI.reload("data-v-3628a421", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("10c39bf8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3628a421\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./add.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3628a421\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./add.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n#fileUp {\n    width: 200px;\n    height: 150px;\n}\n", ""]);

// exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fileUpload = __webpack_require__(13);

var _fileUpload2 = _interopRequireDefault(_fileUpload);

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
    name: 'aaa',
    data: function data() {
        return {
            formDate: [function (username) {
                return '';
            }, function (password) {
                return '';
            }, function (password2) {
                return '';
            }, function (picValue) {
                return '';
            }],
            personInfo: {
                photoUrl: ""
            }
        };
    },

    components: {
        VueImgInputer: _fileUpload2.default
    },
    methods: {
        formSubmit: function formSubmit() {
            var form = document.querySelector("#form-admin-add");
        }
    }
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3efc894c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d7d684d\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./fileUpload.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d7d684d\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./fileUpload.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.img-inputer {\n    position: relative;\n    display: inline-block;\n    width: 260px;\n    height: 150px;\n    border-radius: 5px;\n    background: #f0f0f0;\n    box-shadow: 0 1px 6px rgba(0,0,0,0.117647), 0 1px 4px rgba(0,0,0,0.117647);\n    transition: .3s cubic-bezier(0.4,0,0.2,1);\n}\n.img-inputer--small {\n    width: 160px;\n    height: 100px;\n}\n.img-inputer--small .img-inputer__placeholder {\n    font-size: 12px;\n    top: 65%;\n}\n.img-inputer--small .img-inputer__icon {\n    font-size: 28px !important;\n    top: 38%;\n}\n.img-inputer--large {\n    width: 460px;\n    height: 250px;\n}\n.img-inputer:hover {\n    transform: scale(1.015);\n    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);\n}\n.img-inputer.nhe:hover {\n    transform: scale(1);\n    box-shadow: 0 1px 6px rgba(0,0,0,0.117647), 0 1px 4px rgba(0,0,0,0.117647);\n}\n.img-inputer--light {\n    background: #fbfdff;\n    border: 1px solid #97a8be;\n    box-shadow: none;\n}\n.img-inputer--light .img-inputer__icon {\n    color: #97a8be;\n}\n.img-inputer--light:hover {\n    transform: scale(1);\n    box-shadow: none;\n    border-color: #20a0ff;\n}\n.img-inputer__icon {\n    position: absolute;\n    font-size: 34px !important;\n    left: 50%;\n    top: 40%;\n    color: #757575;\n    transform: translate(-50%,-50%);\n}\n.img-inputer__placeholder {\n    position: absolute;\n    margin: 0;\n    font-size: 14px;\n    width: 100%;\n    color: #aaa;\n    top: 62%;\n    text-align: center;\n}\n.img-inputer__preview-box {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border-radius: 5px;\n    overflow: hidden;\n    background: #333;\n}\n.img-inputer__preview-img {\n    position: relative;\n    top: 0;\n    z-index: 2;\n    width: 100%;\n}\n.img-inputer__label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 10;\n    cursor: pointer;\n    margin-bottom: 0;\n}\n.img-inputer__label:hover ~ .img-inputer__mask {\n    display: block;\n}\n.img-inputer__inputer {\n    position: absolute;\n    left: -9999px;\n}\n.img-inputer__mask {\n    display: none;\n    position: absolute;\n    z-index: 9;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 5px;\n    text-align: center;\n    background: rgba(0,0,0,0.22);\n}\n.img-inputer__file-name {\n    color: white;\n    font-size: 13px;\n    padding-top: 10px;\n    margin: 0;\n    display: inline-block;\n    max-width: 90%;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n.img-inputer__change {\n    position: absolute;\n    bottom: 0;\n    margin: 0;\n    font-size: 12px;\n    border-radius: 0 0 5px 5px;\n    background: rgba(0,0,0,0.7);\n    text-align: center;\n    color: white;\n    width: 100%;\n    padding: 9px 0;\n}\n.img-inputer__err {\n    color: #e55;\n    font-size: 12px;\n    position: absolute;\n    bottom: -28px;\n    width: 100%;\n}\n.vip-fade-enter-active,\n.vip-fade-leave-active {\n    transition: .15s cubic-bezier(0.4,0.0,0.2,1);\n    will-change: trnsform;\n}\n.vip-fade-enter,\n.vip-fade-leave-active {\n    opacity: 0;\n    transform: translateX(30%);\n}\n\n", ""]);

// exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable */
exports.default = {
    name: 'vue-img-inputer',
    props: {
        type: {
            default: 'img',
            type: String
        },
        // 默认情况下可能会导致选择框弹出慢的问题，请针对具体化图片类型即可解决
        accept: {
            default: 'image/*,video/*;',
            type: String
        },
        capture: {
            default: true,
            type: Boolean
        },
        id: {
            default: '',
            type: String
        },
        onChange: {
            default: null,
            type: Function
        },
        readonly: {
            type: Boolean,
            default: false
        },
        readonlyTipText: {
            default: '不可更改',
            type: String
        },
        bottomText: {
            default: '点击或拖拽图片以修改',
            type: String
        },
        placeholder: {
            default: '点击或拖拽选择图片',
            type: String
        },
        value: {
            default: undefined
        },
        icon: {
            default: '',
            type: String
        },
        customerIcon: {
            default: '',
            type: String
        },
        maxSize: {
            default: 2048,
            type: Number
        },
        size: {
            default: '',
            type: String
        },
        imgSrc: {
            default: '',
            type: String
        },
        nhe: {
            type: Boolean,
            default: false
        },
        noMask: {
            type: Boolean,
            default: false
        },
        theme: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: 'file'
        }

    },
    data: function data() {
        return {
            inputId: '',
            file: [],
            dataUrl: '',
            fileName: '',
            errText: ''
        };
    },

    computed: {
        imgSelected: function imgSelected() {
            return !!this.dataUrl || !!this.fileName;
        },
        sizeHumanRead: function sizeHumanRead() {
            var rst = 0;
            if (this.maxSize < 1024) {
                rst = this.maxSize + 'K';
            } else {
                rst = (this.maxSize / 1024).toFixed(this.maxSize % 1024 > 0 ? 2 : 0) + 'M';
            }
            return rst;
        },
        sizeClass: function sizeClass() {
            if (this.size) {
                return 'img-inputer--' + this.size;
            }
        },
        themeClass: function themeClass() {
            return 'img-inputer--' + this.theme;
        },
        ICON: function ICON() {
            var rst = '';
            if (this.icon) {
                rst = this.icon;
            } else {
                rst = this.theme == 'light' ? 'img' : 'clip';
            }
            return rst;
        },
        iconUnicode: function iconUnicode() {
            var iconMap = {
                img: '&#xe624;',
                clip: '&#xe62d;',
                img2: '&#xe62f;'
            };
            return this.customerIcon || iconMap[this.ICON];
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.inputId = this.id || this.gengerateID();
        if (this.imgSrc) {
            this.dataUrl = this.imgSrc;
        }
        // 阻止浏览器默认的拖拽时事件
        ['dragleave', 'drop', 'dragenter', 'dragover'].forEach(function (e) {
            _this.preventDefaultEvent(e);
        });
        // 绑定拖拽时间
        this.addDropSupport();
    },

    methods: {
        preventDefaultEvent: function preventDefaultEvent(eventName) {
            document.addEventListener(eventName, function (e) {
                e.preventDefault();
            }, false);
        },
        addDropSupport: function addDropSupport() {
            var _this2 = this;

            var BOX = this.$refs.box;
            BOX.addEventListener('drop', function (e) {
                e.preventDefault();
                if (_this2.readonly) return false;
                _this2.errText = '';
                var fileList = e.dataTransfer.files;

                if (fileList.length === 0) {
                    return false;
                }
                /**
                 * TODO
                 * 未来打算支持多文件
                 * Intend to support muti-file
                 */
                if (fileList.length > 1) {
                    _this2.errText = '暂不支持多文件';
                    return false;
                }
                _this2.handleFileChange(fileList);
            });
        },
        gengerateID: function gengerateID() {
            var nonstr = Math.random().toString(36).substring(3, 8);
            if (!document.getElementById(nonstr)) {
                return nonstr;
            } else {
                return this.gengerateID();
            }
        },
        handleFileChange: function handleFileChange(e) {
            if (typeof e.target === 'undefined') this.file = e[0];else this.file = e.target.files[0];

            this.errText = '';
            var size = Math.floor(this.file.size / 1024);
            if (size > this.maxSize) {
                this.errText = '\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7' + this.sizeHumanRead;
                return false;
            }

            // 双向绑定
            this.$emit('input', this.file);

            // 文件选择回调 && 两种绑定方式
            this.onChange && this.onChange(this.file, this.file.name);
            this.$emit('onChange', this.file, this.file.name);

            this.imgPreview(this.file);

            this.fileName = this.file.name;

            this.resetInput();

            console.log(e);
        },
        imgPreview: function imgPreview(file) {
            var self = this;

            if (!file || !window.FileReader) return;

            if (/^image/.test(file.type)) {
                var reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onloadend = function () {
                    self.dataUrl = this.result;
                };
            }
        },
        resetInput: function resetInput() {
            var input = document.getElementById(this.inputId);
            var form = document.createElement('form');

            document.body.appendChild(form);

            var parentNode = input.parentNode;
            // 判断input 是否为最后一个节点
            var isLastNode = parentNode.lastChild === input;
            var nextSibling = void 0;
            // 如果后面还有节点，则记录下一个node，做位置标志
            // 如果本身已经是最后一个节点，则直接通过parentNode appendChild即可
            if (!isLastNode) {
                nextSibling = input.nextSibling;
            }

            form.appendChild(input);
            form.reset();

            isLastNode ? parentNode.appendChild(input) : parentNode.insertBefore(input, nextSibling);

            document.body.removeChild(form);
        }
    },
    watch: {
        imgSrc: function imgSrc(newval, oldval) {
            if (newval) {
                this.dataUrl = newval;
            }
        },
        value: function value(newval, oldval) {
            // 重置逻辑
            if (oldval && !newval) {
                this.file = [];
                this.dataUrl = '';
                this.errText = '';
                this.fileName = '';
            }
        }
    }
};

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "box",
    staticClass: "img-inputer",
    class: [_vm.themeClass, _vm.sizeClass, _vm.nhe ? 'nhe' : '' ]
  }, [_c('i', {
    staticClass: "iconfont img-inputer__icon",
    domProps: {
      "innerHTML": _vm._s(_vm.iconUnicode)
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "img-inputer__placeholder"
  }, [_vm._v(_vm._s(_vm.placeholder))]), _vm._v(" "), (_vm.imgSelected) ? _c('div', {
    staticClass: "img-inputer__preview-box"
  }, [_c('img', {
    staticClass: "img-inputer__preview-img",
    attrs: {
      "src": _vm.dataUrl
    }
  })]) : _vm._e(), _vm._v(" "), _c('label', {
    staticClass: "img-inputer__label",
    attrs: {
      "for": _vm.readonly ? '' : _vm.inputId
    }
  }), _vm._v(" "), (_vm.imgSelected && !_vm.noMask) ? _c('div', {
    staticClass: "img-inputer__mask"
  }, [_c('p', {
    staticClass: "img-inputer__file-name"
  }, [_vm._v(_vm._s(_vm.fileName))]), _vm._v(" "), (_vm.readonly) ? _c('p', {
    staticClass: "img-inputer__change"
  }, [_vm._v(_vm._s(_vm.readonlyTipText))]) : _c('p', {
    staticClass: "img-inputer__change"
  }, [_vm._v(_vm._s(_vm.bottomText))])]) : _vm._e(), _vm._v(" "), (_vm.capture) ? _c('input', {
    ref: "inputer",
    staticClass: "img-inputer__inputer",
    attrs: {
      "type": "file",
      "name": _vm.name,
      "id": _vm.inputId,
      "accept": _vm.accept,
      "capture": "video"
    },
    on: {
      "change": _vm.handleFileChange
    }
  }) : _c('input', {
    ref: "inputer",
    staticClass: "img-inputer__inputer",
    attrs: {
      "type": "file",
      "name": _vm.name,
      "id": _vm.inputId,
      "accept": _vm.accept
    },
    on: {
      "change": _vm.handleFileChange
    }
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "vip-fade"
    }
  }, [(_vm.errText.length) ? _c('div', {
    staticClass: "img-inputer__err"
  }, [_vm._v(_vm._s(_vm.errText))]) : _vm._e()])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0d7d684d", esExports)
  }
}

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('article', {
    staticClass: "page-container"
  }, [_c('form', {
    staticClass: "form form-horizontal",
    attrs: {
      "id": "form-admin-add",
      "enctype": "multipart/form-data",
      "method": "post",
      "action": "/admin/manager/add"
    }
  }, [_c('div', {
    staticClass: "row cl"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "formControls col-xs-8 col-sm-9"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.username),
      expression: "formData.username"
    }],
    staticClass: "input-text",
    attrs: {
      "type": "text",
      "placeholder": "用户名",
      "id": "adminName",
      "name": "adminName"
    },
    domProps: {
      "value": (_vm.formData.username)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.username = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row cl"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "formControls col-xs-8 col-sm-9"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.password),
      expression: "formData.password"
    }],
    staticClass: "input-text",
    attrs: {
      "type": "password",
      "autocomplete": "off",
      "value": "",
      "placeholder": "密码",
      "id": "password",
      "name": "password"
    },
    domProps: {
      "value": (_vm.formData.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.password = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row cl"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "formControls col-xs-8 col-sm-9"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formData.password2),
      expression: "formData.password2"
    }],
    staticClass: "input-text",
    attrs: {
      "type": "password",
      "autocomplete": "off",
      "placeholder": "确认新密码",
      "id": "password2",
      "name": "password2"
    },
    domProps: {
      "value": (_vm.formData.password2)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formData.password2 = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row cl"
  }, [_vm._m(3), _vm._v(" "), _c('VueImgInputer', {
    attrs: {
      "id": "fileUp",
      "theme": "light"
    },
    model: {
      value: (_vm.formData.picValue),
      callback: function($$v) {
        _vm.formData.picValue = $$v
      },
      expression: "formData.picValue"
    }
  })], 1), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7), _vm._v(" "), _vm._m(8), _vm._v(" "), _c('div', {
    staticClass: "row cl"
  }, [_c('div', {
    staticClass: "col-xs-8 col-sm-9 col-xs-offset-4 col-sm-offset-3"
  }, [_c('input', {
    staticClass: "btn btn-primary radius",
    staticStyle: {
      "width": "150px"
    },
    attrs: {
      "type": "button",
      "vaule": " 添  加 "
    },
    on: {
      "click": function($event) {
        _vm.formSubmit()
      }
    }
  })])])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "form-label col-xs-4 col-sm-3"
  }, [_c('span', {
    staticClass: "c-red"
  }, [_vm._v("*")]), _vm._v("管理员：")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "form-label col-xs-4 col-sm-3"
  }, [_c('span', {
    staticClass: "c-red"
  }, [_vm._v("*")]), _vm._v("初始密码：")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "form-label col-xs-4 col-sm-3"
  }, [_c('span', {
    staticClass: "c-red"
  }, [_vm._v("*")]), _vm._v("确认密码：")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "form-label col-xs-4 col-sm-3"
  }, [_c('span', {
    staticClass: "c-red"
  }, [_vm._v("*")]), _vm._v("头像：")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row cl"
  }, [_c('label', {
    staticClass: "form-label col-xs-4 col-sm-3"
  }, [_c('span', {
    staticClass: "c-red"
  }, [_vm._v("*")]), _vm._v("性别：")]), _vm._v(" "), _c('div', {
    staticClass: "formControls col-xs-8 col-sm-9 skin-minimal"
  }, [_c('div', {
    staticClass: "radio-box"
  }, [_c('input', {
    attrs: {
      "name": "sex",
      "type": "radio",
      "id": "sex-1",
      "checked": ""
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "sex-1"
    }
  }, [_vm._v("男")])]), _vm._v(" "), _c('div', {
    staticClass: "radio-box"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "id": "sex-2",
      "name": "sex"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "sex-2"
    }
  }, [_vm._v("女")])])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row cl"
  }, [_c('label', {
    staticClass: "form-label col-xs-4 col-sm-3"
  }, [_c('span', {
    staticClass: "c-red"
  }, [_vm._v("*")]), _vm._v("手机：")]), _vm._v(" "), _c('div', {
    staticClass: "formControls col-xs-8 col-sm-9"
  }, [_c('input', {
    staticClass: "input-text",
    attrs: {
      "type": "text",
      "value": "",
      "placeholder": "",
      "id": "phone",
      "name": "phone"
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row cl"
  }, [_c('label', {
    staticClass: "form-label col-xs-4 col-sm-3"
  }, [_c('span', {
    staticClass: "c-red"
  }, [_vm._v("*")]), _vm._v("邮箱：")]), _vm._v(" "), _c('div', {
    staticClass: "formControls col-xs-8 col-sm-9"
  }, [_c('input', {
    staticClass: "input-text",
    attrs: {
      "type": "text",
      "placeholder": "@",
      "name": "email",
      "id": "email"
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row cl"
  }, [_c('label', {
    staticClass: "form-label col-xs-4 col-sm-3"
  }, [_vm._v("角色：")]), _vm._v(" "), _c('div', {
    staticClass: "formControls col-xs-8 col-sm-9"
  }, [_c('span', {
    staticClass: "select-box",
    staticStyle: {
      "width": "150px"
    }
  }, [_c('select', {
    staticClass: "select",
    attrs: {
      "name": "adminRole",
      "size": "1"
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v("超级管理员")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("总编")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("栏目主辑")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("栏目编辑")])])])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row cl"
  }, [_c('label', {
    staticClass: "form-label col-xs-4 col-sm-3"
  }, [_vm._v("备注：")]), _vm._v(" "), _c('div', {
    staticClass: "formControls col-xs-8 col-sm-9"
  }, [_c('textarea', {
    staticClass: "textarea",
    attrs: {
      "name": "",
      "cols": "",
      "rows": "",
      "placeholder": "说点什么...100个字符以内",
      "dragonfly": "true",
      "onKeyUp": "$.Huitextarealength(this,100)"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "textarea-numberbar"
  }, [_c('em', {
    staticClass: "textarea-length"
  }, [_vm._v("0")]), _vm._v("/100")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3628a421", esExports)
  }
}

/***/ }),
/* 86 */
/***/ (function(module, exports) {

/*!
 * UEditor
 * version: ueditor
 * build: Wed Aug 10 2016 11:06:03 GMT+0800 (CST)
 */

!function(){function getListener(a,b,c){var d;return b=b.toLowerCase(),(d=a.__allListeners||c&&(a.__allListeners={}))&&(d[b]||c&&(d[b]=[]))}function getDomNode(a,b,c,d,e,f){var g,h=d&&a[b];for(!h&&(h=a[c]);!h&&(g=(g||a).parentNode);){if("BODY"==g.tagName||f&&!f(g))return null;h=g[c]}return h&&e&&!e(h)?getDomNode(h,b,c,!1,e):h}UEDITOR_CONFIG=window.UEDITOR_CONFIG||{};var baidu=window.baidu||{};window.baidu=baidu,window.UE=baidu.editor=window.UE||{},UE.plugins={},UE.commands={},UE.instants={},UE.I18N={},UE._customizeUI={},UE.version="1.4.3";var dom=UE.dom={},browser=UE.browser=function(){var a=navigator.userAgent.toLowerCase(),b=window.opera,c={ie:/(msie\s|trident.*rv:)([\w.]+)/.test(a),opera:!!b&&b.version,webkit:a.indexOf(" applewebkit/")>-1,mac:a.indexOf("macintosh")>-1,quirks:"BackCompat"==document.compatMode};c.gecko="Gecko"==navigator.product&&!c.webkit&&!c.opera&&!c.ie;var d=0;if(c.ie){var e=a.match(/(?:msie\s([\w.]+))/),f=a.match(/(?:trident.*rv:([\w.]+))/);d=e&&f&&e[1]&&f[1]?Math.max(1*e[1],1*f[1]):e&&e[1]?1*e[1]:f&&f[1]?1*f[1]:0,c.ie11Compat=11==document.documentMode,c.ie9Compat=9==document.documentMode,c.ie8=!!document.documentMode,c.ie8Compat=8==document.documentMode,c.ie7Compat=7==d&&!document.documentMode||7==document.documentMode,c.ie6Compat=d<7||c.quirks,c.ie9above=d>8,c.ie9below=d<9,c.ie11above=d>10,c.ie11below=d<11}if(c.gecko){var g=a.match(/rv:([\d\.]+)/);g&&(g=g[1].split("."),d=1e4*g[0]+100*(g[1]||0)+1*(g[2]||0))}return/chrome\/(\d+\.\d)/i.test(a)&&(c.chrome=+RegExp.$1),/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(a)&&!/chrome/i.test(a)&&(c.safari=+(RegExp.$1||RegExp.$2)),c.opera&&(d=parseFloat(b.version())),c.webkit&&(d=parseFloat(a.match(/ applewebkit\/(\d+)/)[1])),c.version=d,c.isCompatible=!c.mobile&&(c.ie&&d>=6||c.gecko&&d>=10801||c.opera&&d>=9.5||c.air&&d>=1||c.webkit&&d>=522||!1),c}(),ie=browser.ie,webkit=browser.webkit,gecko=browser.gecko,opera=browser.opera,utils=UE.utils={each:function(a,b,c){if(null!=a)if(a.length===+a.length){for(var d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d,a)===!1)return!1}else for(var f in a)if(a.hasOwnProperty(f)&&b.call(c,a[f],f,a)===!1)return!1},makeInstance:function(a){var b=new Function;return b.prototype=a,a=new b,b.prototype=null,a},extend:function(a,b,c){if(b)for(var d in b)c&&a.hasOwnProperty(d)||(a[d]=b[d]);return a},extend2:function(a){for(var b=arguments,c=1;c<b.length;c++){var d=b[c];for(var e in d)a.hasOwnProperty(e)||(a[e]=d[e])}return a},inherits:function(a,b){var c=a.prototype,d=utils.makeInstance(b.prototype);return utils.extend(d,c,!0),a.prototype=d,d.constructor=a},bind:function(a,b){return function(){return a.apply(b,arguments)}},defer:function(a,b,c){var d;return function(){c&&clearTimeout(d),d=setTimeout(a,b)}},indexOf:function(a,b,c){var d=-1;return c=this.isNumber(c)?c:0,this.each(a,function(a,e){if(e>=c&&a===b)return d=e,!1}),d},removeItem:function(a,b){for(var c=0,d=a.length;c<d;c++)a[c]===b&&(a.splice(c,1),c--)},trim:function(a){return a.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g,"")},listToMap:function(a){if(!a)return{};a=utils.isArray(a)?a:a.split(",");for(var b,c=0,d={};b=a[c++];)d[b.toUpperCase()]=d[b]=1;return d},unhtml:function(a,b){return a?a.replace(b||/[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\d+);)?/g,function(a,b){return b?a:{"<":"&lt;","&":"&amp;",'"':"&quot;",">":"&gt;","'":"&#39;"}[a]}):""},unhtmlForUrl:function(a,b){return a?a.replace(b||/[<">']/g,function(a){return{"<":"&lt;","&":"&amp;",'"':"&quot;",">":"&gt;","'":"&#39;"}[a]}):""},html:function(a){return a?a.replace(/&((g|l|quo)t|amp|#39|nbsp);/g,function(a){return{"&lt;":"<","&amp;":"&","&quot;":'"',"&gt;":">","&#39;":"'","&nbsp;":" "}[a]}):""},cssStyleToDomStyle:function(){var a=document.createElement("div").style,b={"float":void 0!=a.cssFloat?"cssFloat":void 0!=a.styleFloat?"styleFloat":"float"};return function(a){return b[a]||(b[a]=a.toLowerCase().replace(/-./g,function(a){return a.charAt(1).toUpperCase()}))}}(),loadFile:function(){function a(a,c){try{for(var d,e=0;d=b[e++];)if(d.doc===a&&d.url==(c.src||c.href))return d}catch(f){return null}}var b=[];return function(c,d,e){var f=a(c,d);if(f)return void(f.ready?e&&e():f.funs.push(e));if(b.push({doc:c,url:d.src||d.href,funs:[e]}),!c.body){var g=[];for(var h in d)"tag"!=h&&g.push(h+'="'+d[h]+'"');return void c.write("<"+d.tag+" "+g.join(" ")+" ></"+d.tag+">")}if(!d.id||!c.getElementById(d.id)){var i=c.createElement(d.tag);delete d.tag;for(var h in d)i.setAttribute(h,d[h]);i.onload=i.onreadystatechange=function(){if(!this.readyState||/loaded|complete/.test(this.readyState)){if(f=a(c,d),f.funs.length>0){f.ready=1;for(var b;b=f.funs.pop();)b()}i.onload=i.onreadystatechange=null}},i.onerror=function(){throw Error("The load "+(d.href||d.src)+" fails,check the url settings of file ueditor.config.js ")},c.getElementsByTagName("head")[0].appendChild(i)}}}(),isEmptyObject:function(a){if(null==a)return!0;if(this.isArray(a)||this.isString(a))return 0===a.length;for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},fixColor:function(a,b){if(/color/i.test(a)&&/rgba?/.test(b)){var c=b.split(",");if(c.length>3)return"";b="#";for(var d,e=0;d=c[e++];)d=parseInt(d.replace(/[^\d]/gi,""),10).toString(16),b+=1==d.length?"0"+d:d;b=b.toUpperCase()}return b},optCss:function(a){function b(a,b){if(!a)return"";var c=a.top,d=a.bottom,e=a.left,f=a.right,g="";if(c&&e&&d&&f)g+=";"+b+":"+(c==d&&d==e&&e==f?c:c==d&&e==f?c+" "+e:e==f?c+" "+e+" "+d:c+" "+f+" "+d+" "+e)+";";else for(var h in a)g+=";"+b+"-"+h+":"+a[h]+";";return g}var c,d;return a=a.replace(/(padding|margin|border)\-([^:]+):([^;]+);?/gi,function(a,b,e,f){if(1==f.split(" ").length)switch(b){case"padding":return!c&&(c={}),c[e]=f,"";case"margin":return!d&&(d={}),d[e]=f,"";case"border":return"initial"==f?"":a}return a}),a+=b(c,"padding")+b(d,"margin"),a.replace(/^[ \n\r\t;]*|[ \n\r\t]*$/,"").replace(/;([ \n\r\t]+)|\1;/g,";").replace(/(&((l|g)t|quot|#39))?;{2,}/g,function(a,b){return b?b+";;":";"})},clone:function(a,b){var c;b=b||{};for(var d in a)a.hasOwnProperty(d)&&(c=a[d],"object"==typeof c?(b[d]=utils.isArray(c)?[]:{},utils.clone(a[d],b[d])):b[d]=c);return b},transUnitToPx:function(a){if(!/(pt|cm)/.test(a))return a;var b;switch(a.replace(/([\d.]+)(\w+)/,function(c,d,e){a=d,b=e}),b){case"cm":a=25*parseFloat(a);break;case"pt":a=Math.round(96*parseFloat(a)/72)}return a+(a?"px":"")},domReady:function(){function a(a){a.isReady=!0;for(var c;c=b.pop();c());}var b=[];return function(c,d){d=d||window;var e=d.document;c&&b.push(c),"complete"===e.readyState?a(e):(e.isReady&&a(e),browser.ie&&11!=browser.version?(!function(){if(!e.isReady){try{e.documentElement.doScroll("left")}catch(b){return void setTimeout(arguments.callee,0)}a(e)}}(),d.attachEvent("onload",function(){a(e)})):(e.addEventListener("DOMContentLoaded",function(){e.removeEventListener("DOMContentLoaded",arguments.callee,!1),a(e)},!1),d.addEventListener("load",function(){a(e)},!1)))}}(),cssRule:browser.ie&&11!=browser.version?function(a,b,c){var d,e;if(void 0===b||b&&b.nodeType&&9==b.nodeType){if(c=b&&b.nodeType&&9==b.nodeType?b:c||document,d=c.indexList||(c.indexList={}),e=d[a],void 0!==e)return c.styleSheets[e].cssText}else{if(c=c||document,d=c.indexList||(c.indexList={}),e=d[a],""===b)return void 0!==e&&(c.styleSheets[e].cssText="",delete d[a],!0);void 0!==e?sheetStyle=c.styleSheets[e]:(sheetStyle=c.createStyleSheet("",e=c.styleSheets.length),d[a]=e),sheetStyle.cssText=b}}:function(a,b,c){var d;return void 0===b||b&&b.nodeType&&9==b.nodeType?(c=b&&b.nodeType&&9==b.nodeType?b:c||document,d=c.getElementById(a),d?d.innerHTML:void 0):(c=c||document,d=c.getElementById(a),""===b?!!d&&(d.parentNode.removeChild(d),!0):void(d?d.innerHTML=b:(d=c.createElement("style"),d.id=a,d.innerHTML=b,c.getElementsByTagName("head")[0].appendChild(d))))},sort:function(a,b){b=b||function(a,b){return a.localeCompare(b)};for(var c=0,d=a.length;c<d;c++)for(var e=c,f=a.length;e<f;e++)if(b(a[c],a[e])>0){var g=a[c];a[c]=a[e],a[e]=g}return a},serializeParam:function(a){var b=[];for(var c in a)if("method"!=c&&"timeout"!=c&&"async"!=c)if("function"!=(typeof a[c]).toLowerCase()&&"object"!=(typeof a[c]).toLowerCase())b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));else if(utils.isArray(a[c]))for(var d=0;d<a[c].length;d++)b.push(encodeURIComponent(c)+"[]="+encodeURIComponent(a[c][d]));return b.join("&")},formatUrl:function(a){var b=a.replace(/&&/g,"&");return b=b.replace(/\?&/g,"?"),b=b.replace(/&$/g,""),b=b.replace(/&#/g,"#"),b=b.replace(/&+/g,"&")},isCrossDomainUrl:function(a){var b=document.createElement("a");return b.href=a,browser.ie&&(b.href=b.href),!(b.protocol==location.protocol&&b.hostname==location.hostname&&(b.port==location.port||"80"==b.port&&""==location.port||""==b.port&&"80"==location.port))},clearEmptyAttrs:function(a){for(var b in a)""===a[b]&&delete a[b];return a},str2json:function(a){return utils.isString(a)?window.JSON?JSON.parse(a):new Function("return "+utils.trim(a||""))():null},json2str:function(){function a(a){return/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=e[a];return b?b:(b=a.charCodeAt(),"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16))})),'"'+a+'"'}function b(a){var b,c,d,e=["["],f=a.length;for(c=0;c<f;c++)switch(d=a[c],typeof d){case"undefined":case"function":case"unknown":break;default:b&&e.push(","),e.push(utils.json2str(d)),b=1}return e.push("]"),e.join("")}function c(a){return a<10?"0"+a:a}function d(a){return'"'+a.getFullYear()+"-"+c(a.getMonth()+1)+"-"+c(a.getDate())+"T"+c(a.getHours())+":"+c(a.getMinutes())+":"+c(a.getSeconds())+'"'}if(window.JSON)return JSON.stringify;var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(c){switch(typeof c){case"undefined":return"undefined";case"number":return isFinite(c)?String(c):"null";case"string":return a(c);case"boolean":return String(c);default:if(null===c)return"null";if(utils.isArray(c))return b(c);if(utils.isDate(c))return d(c);var e,f,g=["{"],h=utils.json2str;for(var i in c)if(Object.prototype.hasOwnProperty.call(c,i))switch(f=c[i],typeof f){case"undefined":case"unknown":case"function":break;default:e&&g.push(","),e=1,g.push(h(i)+":"+h(f))}return g.push("}"),g.join("")}}}()};utils.each(["String","Function","Array","Number","RegExp","Object","Date"],function(a){UE.utils["is"+a]=function(b){return Object.prototype.toString.apply(b)=="[object "+a+"]"}});var EventBase=UE.EventBase=function(){};EventBase.prototype={addListener:function(a,b){a=utils.trim(a).split(/\s+/);for(var c,d=0;c=a[d++];)getListener(this,c,!0).push(b)},on:function(a,b){return this.addListener(a,b)},off:function(a,b){return this.removeListener(a,b)},trigger:function(){return this.fireEvent.apply(this,arguments)},removeListener:function(a,b){a=utils.trim(a).split(/\s+/);for(var c,d=0;c=a[d++];)utils.removeItem(getListener(this,c)||[],b)},fireEvent:function(){var a=arguments[0];a=utils.trim(a).split(" ");for(var b,c=0;b=a[c++];){var d,e,f,g=getListener(this,b);if(g)for(f=g.length;f--;)if(g[f]){if(e=g[f].apply(this,arguments),e===!0)return e;void 0!==e&&(d=e)}(e=this["on"+b.toLowerCase()])&&(d=e.apply(this,arguments))}return d}};var dtd=dom.dtd=function(){function a(a){for(var b in a)a[b.toUpperCase()]=a[b];return a}var b=utils.extend2,c=a({isindex:1,fieldset:1}),d=a({input:1,button:1,select:1,textarea:1,label:1}),e=b(a({a:1}),d),f=b({iframe:1},e),g=a({hr:1,ul:1,menu:1,div:1,blockquote:1,noscript:1,table:1,center:1,address:1,dir:1,pre:1,h5:1,dl:1,h4:1,noframes:1,h6:1,ol:1,h1:1,h3:1,h2:1}),h=a({ins:1,del:1,script:1,style:1}),i=b(a({b:1,acronym:1,bdo:1,"var":1,"#":1,abbr:1,code:1,br:1,i:1,cite:1,kbd:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,dfn:1,span:1}),h),j=b(a({sub:1,img:1,embed:1,object:1,sup:1,basefont:1,map:1,applet:1,font:1,big:1,small:1}),i),k=b(a({p:1}),j),l=b(a({iframe:1}),j,d),m=a({img:1,embed:1,noscript:1,br:1,kbd:1,center:1,button:1,basefont:1,h5:1,h4:1,samp:1,h6:1,ol:1,h1:1,h3:1,h2:1,form:1,font:1,"#":1,select:1,menu:1,ins:1,abbr:1,label:1,code:1,table:1,script:1,cite:1,input:1,iframe:1,strong:1,textarea:1,noframes:1,big:1,small:1,span:1,hr:1,sub:1,bdo:1,"var":1,div:1,object:1,sup:1,strike:1,dir:1,map:1,dl:1,applet:1,del:1,isindex:1,fieldset:1,ul:1,b:1,acronym:1,a:1,blockquote:1,i:1,u:1,s:1,tt:1,address:1,q:1,pre:1,p:1,em:1,dfn:1}),n=b(a({a:0}),l),o=a({tr:1}),p=a({"#":1}),q=b(a({param:1}),m),r=b(a({form:1}),c,f,g,k),s=a({li:1,ol:1,ul:1}),t=a({style:1,script:1}),u=a({base:1,link:1,meta:1,title:1}),v=b(u,t),w=a({head:1,body:1}),x=a({html:1}),y=a({address:1,blockquote:1,center:1,dir:1,div:1,dl:1,fieldset:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,menu:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1}),z=a({area:1,base:1,basefont:1,br:1,col:1,command:1,dialog:1,embed:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1});return a({$nonBodyContent:b(x,w,u),$block:y,$inline:n,$inlineWithA:b(a({a:1}),n),$body:b(a({script:1,style:1}),y),$cdata:a({script:1,style:1}),$empty:z,$nonChild:a({iframe:1,textarea:1}),$listItem:a({dd:1,dt:1,li:1}),$list:a({ul:1,ol:1,dl:1}),$isNotEmpty:a({table:1,ul:1,ol:1,dl:1,iframe:1,area:1,base:1,col:1,hr:1,img:1,embed:1,input:1,link:1,meta:1,param:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1}),$removeEmpty:a({a:1,abbr:1,acronym:1,address:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1}),$removeEmptyBlock:a({p:1,div:1}),$tableContent:a({caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1,table:1}),$notTransContent:a({pre:1,script:1,style:1,textarea:1}),html:w,head:v,style:p,script:p,body:r,base:{},link:{},meta:{},title:p,col:{},tr:a({td:1,th:1}),img:{},embed:{},colgroup:a({thead:1,col:1,tbody:1,tr:1,tfoot:1}),noscript:r,td:r,br:{},th:r,center:r,kbd:n,button:b(k,g),basefont:{},h5:n,h4:n,samp:n,h6:n,ol:s,h1:n,h3:n,option:p,h2:n,form:b(c,f,g,k),select:a({optgroup:1,option:1}),font:n,ins:n,menu:s,abbr:n,label:n,table:a({thead:1,col:1,tbody:1,tr:1,colgroup:1,caption:1,tfoot:1}),code:n,tfoot:o,cite:n,li:r,input:{},iframe:r,strong:n,textarea:p,noframes:r,big:n,small:n,span:a({"#":1,br:1,b:1,strong:1,u:1,i:1,em:1,sub:1,sup:1,strike:1,span:1}),hr:n,dt:n,sub:n,optgroup:a({option:1}),param:{},bdo:n,"var":n,div:r,object:q,sup:n,dd:r,strike:n,area:{},dir:s,map:b(a({area:1,form:1,p:1}),c,h,g),applet:q,dl:a({dt:1,dd:1}),del:n,isindex:{},fieldset:b(a({legend:1}),m),thead:o,ul:s,acronym:n,b:n,a:b(a({a:1}),l),blockquote:b(a({td:1,tr:1,tbody:1,li:1}),r),caption:n,i:n,u:n,tbody:o,s:n,address:b(f,k),tt:n,legend:n,q:n,pre:b(i,e),p:b(a({a:1}),n),em:n,dfn:n})}(),attrFix=ie&&browser.version<9?{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder"}:{tabindex:"tabIndex",readonly:"readOnly"},styleBlock=utils.listToMap(["-webkit-box","-moz-box","block","list-item","table","table-row-group","table-header-group","table-footer-group","table-row","table-column-group","table-column","table-cell","table-caption"]),domUtils=dom.domUtils={NODE_ELEMENT:1,NODE_DOCUMENT:9,NODE_TEXT:3,NODE_COMMENT:8,NODE_DOCUMENT_FRAGMENT:11,POSITION_IDENTICAL:0,POSITION_DISCONNECTED:1,POSITION_FOLLOWING:2,POSITION_PRECEDING:4,POSITION_IS_CONTAINED:8,POSITION_CONTAINS:16,fillChar:ie&&"6"==browser.version?"\ufeff":"​",keys:{8:1,46:1,16:1,17:1,18:1,37:1,38:1,39:1,40:1,13:1},getPosition:function(a,b){if(a===b)return 0;var c,d=[a],e=[b];for(c=a;c=c.parentNode;){if(c===b)return 10;d.push(c)}for(c=b;c=c.parentNode;){if(c===a)return 20;e.push(c)}if(d.reverse(),e.reverse(),d[0]!==e[0])return 1;for(var f=-1;f++,d[f]===e[f];);for(a=d[f],b=e[f];a=a.nextSibling;)if(a===b)return 4;return 2},getNodeIndex:function(a,b){for(var c=a,d=0;c=c.previousSibling;)b&&3==c.nodeType?c.nodeType!=c.nextSibling.nodeType&&d++:d++;return d},inDoc:function(a,b){return 10==domUtils.getPosition(a,b)},findParent:function(a,b,c){if(a&&!domUtils.isBody(a))for(a=c?a:a.parentNode;a;){if(!b||b(a)||domUtils.isBody(a))return b&&!b(a)&&domUtils.isBody(a)?null:a;a=a.parentNode}return null},findParentByTagName:function(a,b,c,d){return b=utils.listToMap(utils.isArray(b)?b:[b]),domUtils.findParent(a,function(a){return b[a.tagName]&&!(d&&d(a))},c)},findParents:function(a,b,c,d){for(var e=b&&(c&&c(a)||!c)?[a]:[];a=domUtils.findParent(a,c);)e.push(a);return d?e:e.reverse()},insertAfter:function(a,b){return a.nextSibling?a.parentNode.insertBefore(b,a.nextSibling):a.parentNode.appendChild(b)},remove:function(a,b){var c,d=a.parentNode;if(d){if(b&&a.hasChildNodes())for(;c=a.firstChild;)d.insertBefore(c,a);d.removeChild(a)}return a},getNextDomNode:function(a,b,c,d){return getDomNode(a,"firstChild","nextSibling",b,c,d)},getPreDomNode:function(a,b,c,d){return getDomNode(a,"lastChild","previousSibling",b,c,d)},isBookmarkNode:function(a){return 1==a.nodeType&&a.id&&/^_baidu_bookmark_/i.test(a.id)},getWindow:function(a){var b=a.ownerDocument||a;return b.defaultView||b.parentWindow},getCommonAncestor:function(a,b){if(a===b)return a;for(var c=[a],d=[b],e=a,f=-1;e=e.parentNode;){if(e===b)return e;c.push(e)}for(e=b;e=e.parentNode;){if(e===a)return e;d.push(e)}for(c.reverse(),d.reverse();f++,c[f]===d[f];);return 0==f?null:c[f-1]},clearEmptySibling:function(a,b,c){function d(a,b){for(var c;a&&!domUtils.isBookmarkNode(a)&&(domUtils.isEmptyInlineElement(a)||!new RegExp("[^\t\n\r"+domUtils.fillChar+"]").test(a.nodeValue));)c=a[b],domUtils.remove(a),a=c}!b&&d(a.nextSibling,"nextSibling"),!c&&d(a.previousSibling,"previousSibling")},split:function(a,b){var c=a.ownerDocument;if(browser.ie&&b==a.nodeValue.length){var d=c.createTextNode("");return domUtils.insertAfter(a,d)}var e=a.splitText(b);if(browser.ie8){var f=c.createTextNode("");domUtils.insertAfter(e,f),domUtils.remove(f)}return e},isWhitespace:function(a){return!new RegExp("[^ \t\n\r"+domUtils.fillChar+"]").test(a.nodeValue)},getXY:function(a){for(var b=0,c=0;a.offsetParent;)c+=a.offsetTop,b+=a.offsetLeft,a=a.offsetParent;return{x:b,y:c}},on:function(a,b,c){var d=utils.isArray(b)?b:utils.trim(b).split(/\s+/),e=d.length;if(e)for(;e--;)if(b=d[e],a.addEventListener)a.addEventListener(b,c,!1);else{c._d||(c._d={els:[]});var f=b+c.toString(),g=utils.indexOf(c._d.els,a);c._d[f]&&g!=-1||(g==-1&&c._d.els.push(a),c._d[f]||(c._d[f]=function(a){return c.call(a.srcElement,a||window.event)}),a.attachEvent("on"+b,c._d[f]))}a=null},un:function(a,b,c){var d=utils.isArray(b)?b:utils.trim(b).split(/\s+/),e=d.length;if(e)for(;e--;)if(b=d[e],a.removeEventListener)a.removeEventListener(b,c,!1);else{var f=b+c.toString();try{a.detachEvent("on"+b,c._d?c._d[f]:c)}catch(g){}if(c._d&&c._d[f]){var h=utils.indexOf(c._d.els,a);h!=-1&&c._d.els.splice(h,1),0==c._d.els.length&&delete c._d[f]}}},isSameElement:function(a,b){if(a.tagName!=b.tagName)return!1;var c=a.attributes,d=b.attributes;if(!ie&&c.length!=d.length)return!1;for(var e,f,g=0,h=0,i=0;e=c[i++];){if("style"==e.nodeName){if(e.specified&&g++,domUtils.isSameStyle(a,b))continue;return!1}if(ie){if(!e.specified)continue;g++,f=d.getNamedItem(e.nodeName)}else f=b.attributes[e.nodeName];if(!f.specified||e.nodeValue!=f.nodeValue)return!1}if(ie){for(i=0;f=d[i++];)f.specified&&h++;if(g!=h)return!1}return!0},isSameStyle:function(a,b){var c=a.style.cssText.replace(/( ?; ?)/g,";").replace(/( ?: ?)/g,":"),d=b.style.cssText.replace(/( ?; ?)/g,";").replace(/( ?: ?)/g,":");if(browser.opera){if(c=a.style,d=b.style,c.length!=d.length)return!1;for(var e in c)if(!/^(\d+|csstext)$/i.test(e)&&c[e]!=d[e])return!1;return!0}if(!c||!d)return c==d;if(c=c.split(";"),d=d.split(";"),c.length!=d.length)return!1;for(var f,g=0;f=c[g++];)if(utils.indexOf(d,f)==-1)return!1;return!0},isBlockElm:function(a){return 1==a.nodeType&&(dtd.$block[a.tagName]||styleBlock[domUtils.getComputedStyle(a,"display")])&&!dtd.$nonChild[a.tagName]},isBody:function(a){return a&&1==a.nodeType&&"body"==a.tagName.toLowerCase()},breakParent:function(a,b){var c,d,e,f=a,g=a;do{for(f=f.parentNode,d?(c=f.cloneNode(!1),c.appendChild(d),d=c,c=f.cloneNode(!1),c.appendChild(e),e=c):(d=f.cloneNode(!1),e=d.cloneNode(!1));c=g.previousSibling;)d.insertBefore(c,d.firstChild);for(;c=g.nextSibling;)e.appendChild(c);g=f}while(b!==f);return c=b.parentNode,c.insertBefore(d,b),c.insertBefore(e,b),c.insertBefore(a,e),domUtils.remove(b),a},isEmptyInlineElement:function(a){if(1!=a.nodeType||!dtd.$removeEmpty[a.tagName])return 0;for(a=a.firstChild;a;){if(domUtils.isBookmarkNode(a))return 0;if(1==a.nodeType&&!domUtils.isEmptyInlineElement(a)||3==a.nodeType&&!domUtils.isWhitespace(a))return 0;a=a.nextSibling}return 1},trimWhiteTextNode:function(a){function b(b){for(var c;(c=a[b])&&3==c.nodeType&&domUtils.isWhitespace(c);)a.removeChild(c)}b("firstChild"),b("lastChild")},mergeChild:function(a,b,c){for(var d,e=domUtils.getElementsByTagName(a,a.tagName.toLowerCase()),f=0;d=e[f++];)if(d.parentNode&&!domUtils.isBookmarkNode(d))if("span"!=d.tagName.toLowerCase())domUtils.isSameElement(a,d)&&domUtils.remove(d,!0);else{if(a===d.parentNode&&(domUtils.trimWhiteTextNode(a),1==a.childNodes.length)){a.style.cssText=d.style.cssText+";"+a.style.cssText,domUtils.remove(d,!0);continue}if(d.style.cssText=a.style.cssText+";"+d.style.cssText,c){var g=c.style;if(g){g=g.split(";");for(var h,i=0;h=g[i++];)d.style[utils.cssStyleToDomStyle(h.split(":")[0])]=h.split(":")[1]}}domUtils.isSameStyle(d,a)&&domUtils.remove(d,!0)}},getElementsByTagName:function(a,b,c){if(c&&utils.isString(c)){var d=c;c=function(a){return domUtils.hasClass(a,d)}}b=utils.trim(b).replace(/[ ]{2,}/g," ").split(" ");for(var e,f=[],g=0;e=b[g++];)for(var h,i=a.getElementsByTagName(e),j=0;h=i[j++];)c&&!c(h)||f.push(h);return f},mergeToParent:function(a){for(var b=a.parentNode;b&&dtd.$removeEmpty[b.tagName];){if(b.tagName==a.tagName||"A"==b.tagName){if(domUtils.trimWhiteTextNode(b),"SPAN"==b.tagName&&!domUtils.isSameStyle(b,a)||"A"==b.tagName&&"SPAN"==a.tagName){if(b.childNodes.length>1||b!==a.parentNode){a.style.cssText=b.style.cssText+";"+a.style.cssText,b=b.parentNode;continue}b.style.cssText+=";"+a.style.cssText,"A"==b.tagName&&(b.style.textDecoration="underline")}if("A"!=b.tagName){b===a.parentNode&&domUtils.remove(a,!0);break}}b=b.parentNode}},mergeSibling:function(a,b,c){function d(a,b,c){var d;if((d=c[a])&&!domUtils.isBookmarkNode(d)&&1==d.nodeType&&domUtils.isSameElement(c,d)){for(;d.firstChild;)"firstChild"==b?c.insertBefore(d.lastChild,c.firstChild):c.appendChild(d.firstChild);domUtils.remove(d)}}!b&&d("previousSibling","firstChild",a),!c&&d("nextSibling","lastChild",a)},unSelectable:ie&&browser.ie9below||browser.opera?function(a){a.onselectstart=function(){return!1},a.onclick=a.onkeyup=a.onkeydown=function(){return!1},a.unselectable="on",a.setAttribute("unselectable","on");for(var b,c=0;b=a.all[c++];)switch(b.tagName.toLowerCase()){case"iframe":case"textarea":case"input":case"select":break;default:b.unselectable="on",a.setAttribute("unselectable","on")}}:function(a){a.style.MozUserSelect=a.style.webkitUserSelect=a.style.msUserSelect=a.style.KhtmlUserSelect="none"},removeAttributes:function(a,b){b=utils.isArray(b)?b:utils.trim(b).replace(/[ ]{2,}/g," ").split(" ");for(var c,d=0;c=b[d++];){switch(c=attrFix[c]||c){case"className":a[c]="";break;case"style":a.style.cssText="";var e=a.getAttributeNode("style");!browser.ie&&e&&a.removeAttributeNode(e)}a.removeAttribute(c)}},createElement:function(a,b,c){return domUtils.setAttributes(a.createElement(b),c)},setAttributes:function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];switch(c){case"class":a.className=d;break;case"style":a.style.cssText=a.style.cssText+";"+d;break;case"innerHTML":a[c]=d;break;case"value":a.value=d;break;default:a.setAttribute(attrFix[c]||c,d)}}return a},getComputedStyle:function(a,b){var c="width height top left";if(c.indexOf(b)>-1)return a["offset"+b.replace(/^\w/,function(a){return a.toUpperCase()})]+"px";if(3==a.nodeType&&(a=a.parentNode),browser.ie&&browser.version<9&&"font-size"==b&&!a.style.fontSize&&!dtd.$empty[a.tagName]&&!dtd.$nonChild[a.tagName]){var d=a.ownerDocument.createElement("span");d.style.cssText="padding:0;border:0;font-family:simsun;",d.innerHTML=".",a.appendChild(d);var e=d.offsetHeight;return a.removeChild(d),d=null,e+"px"}try{var f=domUtils.getStyle(a,b)||(window.getComputedStyle?domUtils.getWindow(a).getComputedStyle(a,"").getPropertyValue(b):(a.currentStyle||a.style)[utils.cssStyleToDomStyle(b)])}catch(g){return""}return utils.transUnitToPx(utils.fixColor(b,f))},removeClasses:function(a,b){b=utils.isArray(b)?b:utils.trim(b).replace(/[ ]{2,}/g," ").split(" ");for(var c,d=0,e=a.className;c=b[d++];)e=e.replace(new RegExp("\\b"+c+"\\b"),"");e=utils.trim(e).replace(/[ ]{2,}/g," "),e?a.className=e:domUtils.removeAttributes(a,["class"])},addClass:function(a,b){if(a){b=utils.trim(b).replace(/[ ]{2,}/g," ").split(" ");for(var c,d=0,e=a.className;c=b[d++];)new RegExp("\\b"+c+"\\b").test(e)||(e+=" "+c);a.className=utils.trim(e)}},hasClass:function(a,b){if(utils.isRegExp(b))return b.test(a.className);b=utils.trim(b).replace(/[ ]{2,}/g," ").split(" ");for(var c,d=0,e=a.className;c=b[d++];)if(!new RegExp("\\b"+c+"\\b","i").test(e))return!1;return d-1==b.length},preventDefault:function(a){a.preventDefault?a.preventDefault():a.returnValue=!1},removeStyle:function(a,b){browser.ie?("color"==b&&(b="(^|;)"+b),a.style.cssText=a.style.cssText.replace(new RegExp(b+"[^:]*:[^;]+;?","ig"),"")):a.style.removeProperty?a.style.removeProperty(b):a.style.removeAttribute(utils.cssStyleToDomStyle(b)),a.style.cssText||domUtils.removeAttributes(a,["style"])},getStyle:function(a,b){var c=a.style[utils.cssStyleToDomStyle(b)];return utils.fixColor(b,c)},setStyle:function(a,b,c){a.style[utils.cssStyleToDomStyle(b)]=c,utils.trim(a.style.cssText)||this.removeAttributes(a,"style")},setStyles:function(a,b){for(var c in b)b.hasOwnProperty(c)&&domUtils.setStyle(a,c,b[c])},removeDirtyAttr:function(a){for(var b,c=0,d=a.getElementsByTagName("*");b=d[c++];)b.removeAttribute("_moz_dirty");a.removeAttribute("_moz_dirty")},getChildCount:function(a,b){var c=0,d=a.firstChild;for(b=b||function(){return 1};d;)b(d)&&c++,d=d.nextSibling;return c},isEmptyNode:function(a){return!a.firstChild||0==domUtils.getChildCount(a,function(a){return!domUtils.isBr(a)&&!domUtils.isBookmarkNode(a)&&!domUtils.isWhitespace(a)})},clearSelectedArr:function(a){for(var b;b=a.pop();)domUtils.removeAttributes(b,["class"])},scrollToView:function(a,b,c){var d=function(){var a=b.document,c="CSS1Compat"==a.compatMode;return{width:(c?a.documentElement.clientWidth:a.body.clientWidth)||0,height:(c?a.documentElement.clientHeight:a.body.clientHeight)||0}},e=function(a){if("pageXOffset"in a)return{x:a.pageXOffset||0,y:a.pageYOffset||0};var b=a.document;return{x:b.documentElement.scrollLeft||b.body.scrollLeft||0,y:b.documentElement.scrollTop||b.body.scrollTop||0}},f=d().height,g=f*-1+c;g+=a.offsetHeight||0;var h=domUtils.getXY(a);g+=h.y;var i=e(b).y;(g>i||g<i-f)&&b.scrollTo(0,g+(g<0?-20:20))},isBr:function(a){return 1==a.nodeType&&"BR"==a.tagName},isFillChar:function(a,b){if(3!=a.nodeType)return!1;var c=a.nodeValue;return b?new RegExp("^"+domUtils.fillChar).test(c):!c.replace(new RegExp(domUtils.fillChar,"g"),"").length},isStartInblock:function(a){var b,c=a.cloneRange(),d=0,e=c.startContainer;if(1==e.nodeType&&e.childNodes[c.startOffset]){e=e.childNodes[c.startOffset];for(var f=e.previousSibling;f&&domUtils.isFillChar(f);)e=f,f=f.previousSibling}for(this.isFillChar(e,!0)&&1==c.startOffset&&(c.setStartBefore(e),e=c.startContainer);e&&domUtils.isFillChar(e);)b=e,e=e.previousSibling;for(b&&(c.setStartBefore(b),e=c.startContainer),1==e.nodeType&&domUtils.isEmptyNode(e)&&1==c.startOffset&&c.setStart(e,0).collapse(!0);!c.startOffset;){if(e=c.startContainer,domUtils.isBlockElm(e)||domUtils.isBody(e)){d=1;break}var g,f=c.startContainer.previousSibling;if(f){for(;f&&domUtils.isFillChar(f);)g=f,f=f.previousSibling;g?c.setStartBefore(g):c.setStartBefore(c.startContainer)}else c.setStartBefore(c.startContainer)}return d&&!domUtils.isBody(c.startContainer)?1:0},isEmptyBlock:function(a,b){if(1!=a.nodeType)return 0;if(b=b||new RegExp("[  \t\r\n"+domUtils.fillChar+"]","g"),a[browser.ie?"innerText":"textContent"].replace(b,"").length>0)return 0;for(var c in dtd.$isNotEmpty)if(a.getElementsByTagName(c).length)return 0;return 1},setViewportOffset:function(a,b){var c=0|parseInt(a.style.left),d=0|parseInt(a.style.top),e=a.getBoundingClientRect(),f=b.left-e.left,g=b.top-e.top;f&&(a.style.left=c+f+"px"),g&&(a.style.top=d+g+"px")},fillNode:function(a,b){var c=browser.ie?a.createTextNode(domUtils.fillChar):a.createElement("br");b.innerHTML="",b.appendChild(c)},moveChild:function(a,b,c){for(;a.firstChild;)c&&b.firstChild?b.insertBefore(a.lastChild,b.firstChild):b.appendChild(a.firstChild)},hasNoAttributes:function(a){return browser.ie?/^<\w+\s*?>/.test(a.outerHTML):0==a.attributes.length},isCustomeNode:function(a){return 1==a.nodeType&&a.getAttribute("_ue_custom_node_")},isTagNode:function(a,b){return 1==a.nodeType&&new RegExp("\\b"+a.tagName+"\\b","i").test(b)},filterNodeList:function(a,b,c){var d=[];if(!utils.isFunction(b)){var e=b;b=function(a){return utils.indexOf(utils.isArray(e)?e:e.split(" "),a.tagName.toLowerCase())!=-1}}return utils.each(a,function(a){b(a)&&d.push(a)}),0==d.length?null:1!=d.length&&c?d:d[0]},isInNodeEndBoundary:function(a,b){var c=a.startContainer;if(3==c.nodeType&&a.startOffset!=c.nodeValue.length)return 0;if(1==c.nodeType&&a.startOffset!=c.childNodes.length)return 0;for(;c!==b;){if(c.nextSibling)return 0;c=c.parentNode}return 1},isBoundaryNode:function(a,b){for(var c;!domUtils.isBody(a);)if(c=a,a=a.parentNode,c!==a[b])return!1;return!0},fillHtml:browser.ie11below?"&nbsp;":"<br/>"},fillCharReg=new RegExp(domUtils.fillChar,"g");!function(){function a(a){a.collapsed=a.startContainer&&a.endContainer&&a.startContainer===a.endContainer&&a.startOffset==a.endOffset}function b(a){return!a.collapsed&&1==a.startContainer.nodeType&&a.startContainer===a.endContainer&&a.endOffset-a.startOffset==1}function c(b,c,d,e){return 1==c.nodeType&&(dtd.$empty[c.tagName]||dtd.$nonChild[c.tagName])&&(d=domUtils.getNodeIndex(c)+(b?0:1),c=c.parentNode),b?(e.startContainer=c,e.startOffset=d,e.endContainer||e.collapse(!0)):(e.endContainer=c,e.endOffset=d,e.startContainer||e.collapse(!1)),a(e),e}function d(a,b){var c,d,e=a.startContainer,f=a.endContainer,g=a.startOffset,h=a.endOffset,i=a.document,j=i.createDocumentFragment();if(1==e.nodeType&&(e=e.childNodes[g]||(c=e.appendChild(i.createTextNode("")))),1==f.nodeType&&(f=f.childNodes[h]||(d=f.appendChild(i.createTextNode("")))),e===f&&3==e.nodeType)return j.appendChild(i.createTextNode(e.substringData(g,h-g))),b&&(e.deleteData(g,h-g),a.collapse(!0)),j;for(var k,l,m=j,n=domUtils.findParents(e,!0),o=domUtils.findParents(f,!0),p=0;n[p]==o[p];)p++;for(var q,r=p;q=n[r];r++){for(k=q.nextSibling,q==e?c||(3==a.startContainer.nodeType?(m.appendChild(i.createTextNode(e.nodeValue.slice(g))),b&&e.deleteData(g,e.nodeValue.length-g)):m.appendChild(b?e:e.cloneNode(!0))):(l=q.cloneNode(!1),m.appendChild(l));k&&k!==f&&k!==o[r];)q=k.nextSibling,m.appendChild(b?k:k.cloneNode(!0)),k=q;m=l}m=j,n[p]||(m.appendChild(n[p-1].cloneNode(!1)),m=m.firstChild);for(var s,r=p;s=o[r];r++){if(k=s.previousSibling,s==f?d||3!=a.endContainer.nodeType||(m.appendChild(i.createTextNode(f.substringData(0,h))),b&&f.deleteData(0,h)):(l=s.cloneNode(!1),m.appendChild(l)),r!=p||!n[p])for(;k&&k!==e;)s=k.previousSibling,m.insertBefore(b?k:k.cloneNode(!0),m.firstChild),k=s;m=l}return b&&a.setStartBefore(o[p]?n[p]?o[p]:n[p-1]:o[p-1]).collapse(!0),c&&domUtils.remove(c),d&&domUtils.remove(d),j}function e(a,b){try{if(g&&domUtils.inDoc(g,a))if(g.nodeValue.replace(fillCharReg,"").length)g.nodeValue=g.nodeValue.replace(fillCharReg,"");else{var c=g.parentNode;for(domUtils.remove(g);c&&domUtils.isEmptyInlineElement(c)&&(browser.safari?!(domUtils.getPosition(c,b)&domUtils.POSITION_CONTAINS):!c.contains(b));)g=c.parentNode,domUtils.remove(c),c=g}}catch(d){}
}function f(a,b){var c;for(a=a[b];a&&domUtils.isFillChar(a);)c=a[b],domUtils.remove(a),a=c}var g,h=0,i=domUtils.fillChar,j=dom.Range=function(a){var b=this;b.startContainer=b.startOffset=b.endContainer=b.endOffset=null,b.document=a,b.collapsed=!0};j.prototype={cloneContents:function(){return this.collapsed?null:d(this,0)},deleteContents:function(){var a;return this.collapsed||d(this,1),browser.webkit&&(a=this.startContainer,3!=a.nodeType||a.nodeValue.length||(this.setStartBefore(a).collapse(!0),domUtils.remove(a))),this},extractContents:function(){return this.collapsed?null:d(this,2)},setStart:function(a,b){return c(!0,a,b,this)},setEnd:function(a,b){return c(!1,a,b,this)},setStartAfter:function(a){return this.setStart(a.parentNode,domUtils.getNodeIndex(a)+1)},setStartBefore:function(a){return this.setStart(a.parentNode,domUtils.getNodeIndex(a))},setEndAfter:function(a){return this.setEnd(a.parentNode,domUtils.getNodeIndex(a)+1)},setEndBefore:function(a){return this.setEnd(a.parentNode,domUtils.getNodeIndex(a))},setStartAtFirst:function(a){return this.setStart(a,0)},setStartAtLast:function(a){return this.setStart(a,3==a.nodeType?a.nodeValue.length:a.childNodes.length)},setEndAtFirst:function(a){return this.setEnd(a,0)},setEndAtLast:function(a){return this.setEnd(a,3==a.nodeType?a.nodeValue.length:a.childNodes.length)},selectNode:function(a){return this.setStartBefore(a).setEndAfter(a)},selectNodeContents:function(a){return this.setStart(a,0).setEndAtLast(a)},cloneRange:function(){var a=this;return new j(a.document).setStart(a.startContainer,a.startOffset).setEnd(a.endContainer,a.endOffset)},collapse:function(a){var b=this;return a?(b.endContainer=b.startContainer,b.endOffset=b.startOffset):(b.startContainer=b.endContainer,b.startOffset=b.endOffset),b.collapsed=!0,b},shrinkBoundary:function(a){function b(a){return 1==a.nodeType&&!domUtils.isBookmarkNode(a)&&!dtd.$empty[a.tagName]&&!dtd.$nonChild[a.tagName]}for(var c,d=this,e=d.collapsed;1==d.startContainer.nodeType&&(c=d.startContainer.childNodes[d.startOffset])&&b(c);)d.setStart(c,0);if(e)return d.collapse(!0);if(!a)for(;1==d.endContainer.nodeType&&d.endOffset>0&&(c=d.endContainer.childNodes[d.endOffset-1])&&b(c);)d.setEnd(c,c.childNodes.length);return d},getCommonAncestor:function(a,c){var d=this,e=d.startContainer,f=d.endContainer;return e===f?a&&b(this)&&(e=e.childNodes[d.startOffset],1==e.nodeType)?e:c&&3==e.nodeType?e.parentNode:e:domUtils.getCommonAncestor(e,f)},trimBoundary:function(a){this.txtToElmBoundary();var b=this.startContainer,c=this.startOffset,d=this.collapsed,e=this.endContainer;if(3==b.nodeType){if(0==c)this.setStartBefore(b);else if(c>=b.nodeValue.length)this.setStartAfter(b);else{var f=domUtils.split(b,c);b===e?this.setEnd(f,this.endOffset-c):b.parentNode===e&&(this.endOffset+=1),this.setStartBefore(f)}if(d)return this.collapse(!0)}return a||(c=this.endOffset,e=this.endContainer,3==e.nodeType&&(0==c?this.setEndBefore(e):(c<e.nodeValue.length&&domUtils.split(e,c),this.setEndAfter(e)))),this},txtToElmBoundary:function(a){function b(a,b){var c=a[b+"Container"],d=a[b+"Offset"];3==c.nodeType&&(d?d>=c.nodeValue.length&&a["set"+b.replace(/(\w)/,function(a){return a.toUpperCase()})+"After"](c):a["set"+b.replace(/(\w)/,function(a){return a.toUpperCase()})+"Before"](c))}return!a&&this.collapsed||(b(this,"start"),b(this,"end")),this},insertNode:function(a){var b=a,c=1;11==a.nodeType&&(b=a.firstChild,c=a.childNodes.length),this.trimBoundary(!0);var d=this.startContainer,e=this.startOffset,f=d.childNodes[e];return f?d.insertBefore(a,f):d.appendChild(a),b.parentNode===this.endContainer&&(this.endOffset=this.endOffset+c),this.setStartBefore(b)},setCursor:function(a,b){return this.collapse(!a).select(b)},createBookmark:function(a,b){var c,d=this.document.createElement("span");return d.style.cssText="display:none;line-height:0px;",d.appendChild(this.document.createTextNode("‍")),d.id="_baidu_bookmark_start_"+(b?"":h++),this.collapsed||(c=d.cloneNode(!0),c.id="_baidu_bookmark_end_"+(b?"":h++)),this.insertNode(d),c&&this.collapse().insertNode(c).setEndBefore(c),this.setStartAfter(d),{start:a?d.id:d,end:c?a?c.id:c:null,id:a}},moveToBookmark:function(a){var b=a.id?this.document.getElementById(a.start):a.start,c=a.end&&a.id?this.document.getElementById(a.end):a.end;return this.setStartBefore(b),domUtils.remove(b),c?(this.setEndBefore(c),domUtils.remove(c)):this.collapse(!0),this},enlarge:function(a,b){var c,d,e=domUtils.isBody,f=this.document.createTextNode("");if(a){for(d=this.startContainer,1==d.nodeType?d.childNodes[this.startOffset]?c=d=d.childNodes[this.startOffset]:(d.appendChild(f),c=d=f):c=d;;){if(domUtils.isBlockElm(d)){for(d=c;(c=d.previousSibling)&&!domUtils.isBlockElm(c);)d=c;this.setStartBefore(d);break}c=d,d=d.parentNode}for(d=this.endContainer,1==d.nodeType?((c=d.childNodes[this.endOffset])?d.insertBefore(f,c):d.appendChild(f),c=d=f):c=d;;){if(domUtils.isBlockElm(d)){for(d=c;(c=d.nextSibling)&&!domUtils.isBlockElm(c);)d=c;this.setEndAfter(d);break}c=d,d=d.parentNode}f.parentNode===this.endContainer&&this.endOffset--,domUtils.remove(f)}if(!this.collapsed){for(;!(0!=this.startOffset||b&&b(this.startContainer)||e(this.startContainer));)this.setStartBefore(this.startContainer);for(;!(this.endOffset!=(1==this.endContainer.nodeType?this.endContainer.childNodes.length:this.endContainer.nodeValue.length)||b&&b(this.endContainer)||e(this.endContainer));)this.setEndAfter(this.endContainer)}return this},enlargeToBlockElm:function(a){for(;!domUtils.isBlockElm(this.startContainer);)this.setStartBefore(this.startContainer);if(!a)for(;!domUtils.isBlockElm(this.endContainer);)this.setEndAfter(this.endContainer);return this},adjustmentBoundary:function(){if(!this.collapsed){for(;!domUtils.isBody(this.startContainer)&&this.startOffset==this.startContainer[3==this.startContainer.nodeType?"nodeValue":"childNodes"].length&&this.startContainer[3==this.startContainer.nodeType?"nodeValue":"childNodes"].length;)this.setStartAfter(this.startContainer);for(;!domUtils.isBody(this.endContainer)&&!this.endOffset&&this.endContainer[3==this.endContainer.nodeType?"nodeValue":"childNodes"].length;)this.setEndBefore(this.endContainer)}return this},applyInlineStyle:function(a,b,c){if(this.collapsed)return this;this.trimBoundary().enlarge(!1,function(a){return 1==a.nodeType&&domUtils.isBlockElm(a)}).adjustmentBoundary();for(var d,e,f=this.createBookmark(),g=f.end,h=function(a){return 1==a.nodeType?"br"!=a.tagName.toLowerCase():!domUtils.isWhitespace(a)},i=domUtils.getNextDomNode(f.start,!1,h),j=this.cloneRange();i&&domUtils.getPosition(i,g)&domUtils.POSITION_PRECEDING;)if(3==i.nodeType||dtd[a][i.tagName]){for(j.setStartBefore(i),d=i;d&&(3==d.nodeType||dtd[a][d.tagName])&&d!==g;)e=d,d=domUtils.getNextDomNode(d,1==d.nodeType,null,function(b){return dtd[a][b.tagName]});var k,l=j.setEndAfter(e).extractContents();if(c&&c.length>0){var m,n;n=m=c[0].cloneNode(!1);for(var o,p=1;o=c[p++];)m.appendChild(o.cloneNode(!1)),m=m.firstChild;k=m}else k=j.document.createElement(a);b&&domUtils.setAttributes(k,b),k.appendChild(l),j.insertNode(c?n:k);var q;if("span"==a&&b.style&&/text\-decoration/.test(b.style)&&(q=domUtils.findParentByTagName(k,"a",!0))?(domUtils.setAttributes(q,b),domUtils.remove(k,!0),k=q):(domUtils.mergeSibling(k),domUtils.clearEmptySibling(k)),domUtils.mergeChild(k,b),i=domUtils.getNextDomNode(k,!1,h),domUtils.mergeToParent(k),d===g)break}else i=domUtils.getNextDomNode(i,!0,h);return this.moveToBookmark(f)},removeInlineStyle:function(a){if(this.collapsed)return this;a=utils.isArray(a)?a:[a],this.shrinkBoundary().adjustmentBoundary();for(var b=this.startContainer,c=this.endContainer;;){if(1==b.nodeType){if(utils.indexOf(a,b.tagName.toLowerCase())>-1)break;if("body"==b.tagName.toLowerCase()){b=null;break}}b=b.parentNode}for(;;){if(1==c.nodeType){if(utils.indexOf(a,c.tagName.toLowerCase())>-1)break;if("body"==c.tagName.toLowerCase()){c=null;break}}c=c.parentNode}var d,e,f=this.createBookmark();b&&(e=this.cloneRange().setEndBefore(f.start).setStartBefore(b),d=e.extractContents(),e.insertNode(d),domUtils.clearEmptySibling(b,!0),b.parentNode.insertBefore(f.start,b)),c&&(e=this.cloneRange().setStartAfter(f.end).setEndAfter(c),d=e.extractContents(),e.insertNode(d),domUtils.clearEmptySibling(c,!1,!0),c.parentNode.insertBefore(f.end,c.nextSibling));for(var g,h=domUtils.getNextDomNode(f.start,!1,function(a){return 1==a.nodeType});h&&h!==f.end;)g=domUtils.getNextDomNode(h,!0,function(a){return 1==a.nodeType}),utils.indexOf(a,h.tagName.toLowerCase())>-1&&domUtils.remove(h,!0),h=g;return this.moveToBookmark(f)},getClosedNode:function(){var a;if(!this.collapsed){var c=this.cloneRange().adjustmentBoundary().shrinkBoundary();if(b(c)){var d=c.startContainer.childNodes[c.startOffset];d&&1==d.nodeType&&(dtd.$empty[d.tagName]||dtd.$nonChild[d.tagName])&&(a=d)}}return a},select:browser.ie?function(a,b){var c;this.collapsed||this.shrinkBoundary();var d=this.getClosedNode();if(d&&!b){try{c=this.document.body.createControlRange(),c.addElement(d),c.select()}catch(h){}return this}var j,k=this.createBookmark(),l=k.start;if(c=this.document.body.createTextRange(),c.moveToElementText(l),c.moveStart("character",1),this.collapsed){if(!a&&3!=this.startContainer.nodeType){var m=this.document.createTextNode(i),n=this.document.createElement("span");n.appendChild(this.document.createTextNode(i)),l.parentNode.insertBefore(n,l),l.parentNode.insertBefore(m,l),e(this.document,m),g=m,f(n,"previousSibling"),f(l,"nextSibling"),c.moveStart("character",-1),c.collapse(!0)}}else{var o=this.document.body.createTextRange();j=k.end,o.moveToElementText(j),c.setEndPoint("EndToEnd",o)}this.moveToBookmark(k),n&&domUtils.remove(n);try{c.select()}catch(h){}return this}:function(a){function b(a){function b(b,c,d){3==b.nodeType&&b.nodeValue.length<c&&(a[d+"Offset"]=b.nodeValue.length)}b(a.startContainer,a.startOffset,"start"),b(a.endContainer,a.endOffset,"end")}var c,d=domUtils.getWindow(this.document),h=d.getSelection();if(browser.gecko?this.document.body.focus():d.focus(),h){if(h.removeAllRanges(),this.collapsed&&!a){var j=this.startContainer,k=j;1==j.nodeType&&(k=j.childNodes[this.startOffset]),3==j.nodeType&&this.startOffset||(k?k.previousSibling&&3==k.previousSibling.nodeType:j.lastChild&&3==j.lastChild.nodeType)||(c=this.document.createTextNode(i),this.insertNode(c),e(this.document,c),f(c,"previousSibling"),f(c,"nextSibling"),g=c,this.setStart(c,browser.webkit?1:0).collapse(!0))}var l=this.document.createRange();if(this.collapsed&&browser.opera&&1==this.startContainer.nodeType){var k=this.startContainer.childNodes[this.startOffset];if(k){for(;k&&domUtils.isBlockElm(k)&&1==k.nodeType&&k.childNodes[0];)k=k.childNodes[0];k&&this.setStartBefore(k).collapse(!0)}else k=this.startContainer.lastChild,k&&domUtils.isBr(k)&&this.setStartBefore(k).collapse(!0)}b(this),l.setStart(this.startContainer,this.startOffset),l.setEnd(this.endContainer,this.endOffset),h.addRange(l)}return this},scrollToView:function(a,b){a=a?window:domUtils.getWindow(this.document);var c=this,d=c.document.createElement("span");return d.innerHTML="&nbsp;",c.cloneRange().insertNode(d),domUtils.scrollToView(d,a,b),domUtils.remove(d),c},inFillChar:function(){var a=this.startContainer;return!(!this.collapsed||3!=a.nodeType||a.nodeValue.replace(new RegExp("^"+domUtils.fillChar),"").length+1!=a.nodeValue.length)},createAddress:function(a,b){function c(a){for(var c,d=a?e.startContainer:e.endContainer,f=domUtils.findParents(d,!0,function(a){return!domUtils.isBody(a)}),g=[],h=0;c=f[h++];)g.push(domUtils.getNodeIndex(c,b));var i=0;if(b)if(3==d.nodeType){for(var j=d.previousSibling;j&&3==j.nodeType;)i+=j.nodeValue.replace(fillCharReg,"").length,j=j.previousSibling;i+=a?e.startOffset:e.endOffset}else if(d=d.childNodes[a?e.startOffset:e.endOffset])i=domUtils.getNodeIndex(d,b);else{d=a?e.startContainer:e.endContainer;for(var k=d.firstChild;k;)if(domUtils.isFillChar(k))k=k.nextSibling;else if(i++,3==k.nodeType)for(;k&&3==k.nodeType;)k=k.nextSibling;else k=k.nextSibling}else i=a?domUtils.isFillChar(d)?0:e.startOffset:e.endOffset;return i<0&&(i=0),g.push(i),g}var d={},e=this;return d.startAddress=c(!0),a||(d.endAddress=e.collapsed?[].concat(d.startAddress):c()),d},moveToAddress:function(a,b){function c(a,b){for(var c,e,f,g=d.document.body,h=0,i=a.length;h<i;h++)if(f=a[h],c=g,g=g.childNodes[f],!g){e=f;break}b?g?d.setStartBefore(g):d.setStart(c,e):g?d.setEndBefore(g):d.setEnd(c,e)}var d=this;return c(a.startAddress,!0),!b&&a.endAddress&&c(a.endAddress),d},equals:function(a){for(var b in this)if(this.hasOwnProperty(b)&&this[b]!==a[b])return!1;return!0},traversal:function(a,b){if(this.collapsed)return this;for(var c=this.createBookmark(),d=c.end,e=domUtils.getNextDomNode(c.start,!1,b);e&&e!==d&&domUtils.getPosition(e,d)&domUtils.POSITION_PRECEDING;){var f=domUtils.getNextDomNode(e,!1,b);a(e),e=f}return this.moveToBookmark(c)}}}(),function(){function a(a,b){var c=domUtils.getNodeIndex;a=a.duplicate(),a.collapse(b);var d=a.parentElement();if(!d.hasChildNodes())return{container:d,offset:0};for(var e,f,g=d.children,h=a.duplicate(),i=0,j=g.length-1,k=-1;i<=j;){k=Math.floor((i+j)/2),e=g[k],h.moveToElementText(e);var l=h.compareEndPoints("StartToStart",a);if(l>0)j=k-1;else{if(!(l<0))return{container:d,offset:c(e)};i=k+1}}if(k==-1){if(h.moveToElementText(d),h.setEndPoint("StartToStart",a),f=h.text.replace(/(\r\n|\r)/g,"\n").length,g=d.childNodes,!f)return e=g[g.length-1],{container:e,offset:e.nodeValue.length};for(var m=g.length;f>0;)f-=g[--m].nodeValue.length;return{container:g[m],offset:-f}}if(h.collapse(l>0),h.setEndPoint(l>0?"StartToStart":"EndToStart",a),f=h.text.replace(/(\r\n|\r)/g,"\n").length,!f)return dtd.$empty[e.tagName]||dtd.$nonChild[e.tagName]?{container:d,offset:c(e)+(l>0?0:1)}:{container:e,offset:l>0?0:e.childNodes.length};for(;f>0;)try{var n=e;e=e[l>0?"previousSibling":"nextSibling"],f-=e.nodeValue.length}catch(o){return{container:d,offset:c(n)}}return{container:e,offset:l>0?-f:e.nodeValue.length+f}}function b(b,c){if(b.item)c.selectNode(b.item(0));else{var d=a(b,!0);c.setStart(d.container,d.offset),0!=b.compareEndPoints("StartToEnd",b)&&(d=a(b,!1),c.setEnd(d.container,d.offset))}return c}function c(a){var b;try{b=a.getNative().createRange()}catch(c){return null}var d=b.item?b.item(0):b.parentElement();return(d.ownerDocument||d)===a.document?b:null}var d=dom.Selection=function(a){var b,d=this;d.document=a,browser.ie9below&&(b=domUtils.getWindow(a).frameElement,domUtils.on(b,"beforedeactivate",function(){d._bakIERange=d.getIERange()}),domUtils.on(b,"activate",function(){try{!c(d)&&d._bakIERange&&d._bakIERange.select()}catch(a){}d._bakIERange=null})),b=a=null};d.prototype={rangeInBody:function(a,b){var c=browser.ie9below||b?a.item?a.item():a.parentElement():a.startContainer;return c===this.document.body||domUtils.inDoc(c,this.document)},getNative:function(){var a=this.document;try{return a?browser.ie9below?a.selection:domUtils.getWindow(a).getSelection():null}catch(b){return null}},getIERange:function(){var a=c(this);return!a&&this._bakIERange?this._bakIERange:a},cache:function(){this.clear(),this._cachedRange=this.getRange(),this._cachedStartElement=this.getStart(),this._cachedStartElementPath=this.getStartElementPath()},getStartElementPath:function(){if(this._cachedStartElementPath)return this._cachedStartElementPath;var a=this.getStart();return a?domUtils.findParents(a,!0,null,!0):[]},clear:function(){this._cachedStartElementPath=this._cachedRange=this._cachedStartElement=null},isFocus:function(){try{if(browser.ie9below){var a=c(this);return!(!a||!this.rangeInBody(a))}return!!this.getNative().rangeCount}catch(b){return!1}},getRange:function(){function a(a){for(var b=c.document.body.firstChild,d=a.collapsed;b&&b.firstChild;)a.setStart(b,0),b=b.firstChild;a.startContainer||a.setStart(c.document.body,0),d&&a.collapse(!0)}var c=this;if(null!=c._cachedRange)return this._cachedRange;var d=new baidu.editor.dom.Range(c.document);if(browser.ie9below){var e=c.getIERange();if(e)try{b(e,d)}catch(f){a(d)}else a(d)}else{var g=c.getNative();if(g&&g.rangeCount){var h=g.getRangeAt(0),i=g.getRangeAt(g.rangeCount-1);d.setStart(h.startContainer,h.startOffset).setEnd(i.endContainer,i.endOffset),d.collapsed&&domUtils.isBody(d.startContainer)&&!d.startOffset&&a(d)}else{if(this._bakRange&&domUtils.inDoc(this._bakRange.startContainer,this.document))return this._bakRange;a(d)}}return this._bakRange=d},getStart:function(){if(this._cachedStartElement)return this._cachedStartElement;var a,b,c,d,e=browser.ie9below?this.getIERange():this.getRange();if(browser.ie9below){if(!e)return this.document.body.firstChild;if(e.item)return e.item(0);for(a=e.duplicate(),a.text.length>0&&a.moveStart("character",1),a.collapse(1),b=a.parentElement(),d=c=e.parentElement();c=c.parentNode;)if(c==b){b=d;break}}else if(e.shrinkBoundary(),b=e.startContainer,1==b.nodeType&&b.hasChildNodes()&&(b=b.childNodes[Math.min(b.childNodes.length-1,e.startOffset)]),3==b.nodeType)return b.parentNode;return b},getText:function(){var a,b;return this.isFocus()&&(a=this.getNative())?(b=browser.ie9below?a.createRange():a.getRangeAt(0),browser.ie9below?b.text:b.toString()):""},clearRange:function(){this.getNative()[browser.ie9below?"empty":"removeAllRanges"]()}}}(),function(){function a(a,b){var c;if(b.textarea)if(utils.isString(b.textarea)){for(var d,e=0,f=domUtils.getElementsByTagName(a,"textarea");d=f[e++];)if(d.id=="ueditor_textarea_"+b.options.textarea){c=d;break}}else c=b.textarea;c||(a.appendChild(c=domUtils.createElement(document,"textarea",{name:b.options.textarea,id:"ueditor_textarea_"+b.options.textarea,style:"display:none"})),b.textarea=c),!c.getAttribute("name")&&c.setAttribute("name",b.options.textarea),c.value=b.hasContents()?b.options.allHtmlEnabled?b.getAllHtml():b.getContent(null,null,!0):""}function b(a){for(var b in a)return b}function c(a){a.langIsReady=!0,a.fireEvent("langReady")}var d,e=0,f=UE.Editor=function(a){var d=this;d.uid=e++,EventBase.call(d),d.commands={},d.options=utils.extend(utils.clone(a||{}),UEDITOR_CONFIG,!0),d.shortcutkeys={},d.inputRules=[],d.outputRules=[],d.setOpt(f.defaultOptions(d)),d.loadServerConfig(),utils.isEmptyObject(UE.I18N)?utils.loadFile(document,{src:d.options.langPath+d.options.lang+"/"+d.options.lang+".js",tag:"script",type:"text/javascript",defer:"defer"},function(){UE.plugin.load(d),c(d)}):(d.options.lang=b(UE.I18N),UE.plugin.load(d),c(d)),UE.instants["ueditorInstant"+d.uid]=d};f.prototype={registerCommand:function(a,b){this.commands[a]=b},ready:function(a){var b=this;a&&(b.isReady?a.apply(b):b.addListener("ready",a))},setOpt:function(a,b){var c={};utils.isString(a)?c[a]=b:c=a,utils.extend(this.options,c,!0)},getOpt:function(a){return this.options[a]},destroy:function(){var a=this;a.fireEvent("destroy");var b=a.container.parentNode,c=a.textarea;c?c.style.display="":(c=document.createElement("textarea"),b.parentNode.insertBefore(c,b)),c.style.width=a.iframe.offsetWidth+"px",c.style.height=a.iframe.offsetHeight+"px",c.value=a.getContent(),c.id=a.key,b.innerHTML="",domUtils.remove(b);var d=a.key;for(var e in a)a.hasOwnProperty(e)&&delete this[e];UE.delEditor(d)},render:function(a){var b=this,c=b.options,d=function(b){return parseInt(domUtils.getComputedStyle(a,b))};if(utils.isString(a)&&(a=document.getElementById(a)),a){c.initialFrameWidth?c.minFrameWidth=c.initialFrameWidth:c.minFrameWidth=c.initialFrameWidth=a.offsetWidth,c.initialFrameHeight?c.minFrameHeight=c.initialFrameHeight:c.initialFrameHeight=c.minFrameHeight=a.offsetHeight,a.style.width=/%$/.test(c.initialFrameWidth)?"100%":c.initialFrameWidth-d("padding-left")-d("padding-right")+"px",a.style.height=/%$/.test(c.initialFrameHeight)?"100%":c.initialFrameHeight-d("padding-top")-d("padding-bottom")+"px",a.style.zIndex=c.zIndex;var e=(ie&&browser.version<9?"":"<!DOCTYPE html>")+"<html xmlns='http://www.w3.org/1999/xhtml' class='view' ><head><style type='text/css'>.view{padding:0;word-wrap:break-word;cursor:text;height:90%;}\nbody{margin:8px;font-family:sans-serif;font-size:16px;}p{margin:5px 0;}</style>"+(c.iframeCssUrl?"<link rel='stylesheet' type='text/css' href='"+utils.unhtml(c.iframeCssUrl)+"'/>":"")+(c.initialStyle?"<style>"+c.initialStyle+"</style>":"")+"</head><body class='view' ></body><script type='text/javascript' "+(ie?"defer='defer'":"")+" id='_initialScript'>setTimeout(function(){editor = window.parent.UE.instants['ueditorInstant"+b.uid+"'];editor._setup(document);},0);var _tmpScript = document.getElementById('_initialScript');_tmpScript.parentNode.removeChild(_tmpScript);</script></html>";a.appendChild(domUtils.createElement(document,"iframe",{id:"ueditor_"+b.uid,width:"100%",height:"100%",frameborder:"0",src:"javascript:void(function(){document.open();"+(c.customDomain&&document.domain!=location.hostname?'document.domain="'+document.domain+'";':"")+'document.write("'+e+'");document.close();}())'})),a.style.overflow="hidden",setTimeout(function(){/%$/.test(c.initialFrameWidth)&&(c.minFrameWidth=c.initialFrameWidth=a.offsetWidth),/%$/.test(c.initialFrameHeight)&&(c.minFrameHeight=c.initialFrameHeight=a.offsetHeight,a.style.height=c.initialFrameHeight+"px")})}},_setup:function(b){var c=this,d=c.options;ie?(b.body.disabled=!0,b.body.contentEditable=!0,b.body.disabled=!1):b.body.contentEditable=!0,b.body.spellcheck=!1,c.document=b,c.window=b.defaultView||b.parentWindow,c.iframe=c.window.frameElement,c.body=b.body,c.selection=new dom.Selection(b);var e;browser.gecko&&(e=this.selection.getNative())&&e.removeAllRanges(),this._initEvents();for(var f=this.iframe.parentNode;!domUtils.isBody(f);f=f.parentNode)if("FORM"==f.tagName){c.form=f,c.options.autoSyncData?domUtils.on(c.window,"blur",function(){a(f,c)}):domUtils.on(f,"submit",function(){a(this,c)});break}if(d.initialContent)if(d.autoClearinitialContent){var g=c.execCommand;c.execCommand=function(){return c.fireEvent("firstBeforeExecCommand"),g.apply(c,arguments)},this._setDefaultContent(d.initialContent)}else this.setContent(d.initialContent,!1,!0);domUtils.isEmptyNode(c.body)&&(c.body.innerHTML="<p>"+(browser.ie?"":"<br/>")+"</p>"),d.focus&&setTimeout(function(){c.focus(c.options.focusInEnd),!c.options.autoClearinitialContent&&c._selectionChange()},0),c.container||(c.container=this.iframe.parentNode),d.fullscreen&&c.ui&&c.ui.setFullScreen(!0);try{c.document.execCommand("2D-position",!1,!1)}catch(h){}try{c.document.execCommand("enableInlineTableEditing",!1,!1)}catch(h){}try{c.document.execCommand("enableObjectResizing",!1,!1)}catch(h){}c._bindshortcutKeys(),c.isReady=1,c.fireEvent("ready"),d.onready&&d.onready.call(c),browser.ie9below||domUtils.on(c.window,["blur","focus"],function(a){if("blur"==a.type){c._bakRange=c.selection.getRange();try{c._bakNativeRange=c.selection.getNative().getRangeAt(0),c.selection.getNative().removeAllRanges()}catch(a){c._bakNativeRange=null}}else try{c._bakRange&&c._bakRange.select()}catch(a){}}),browser.gecko&&browser.version<=10902&&(c.body.contentEditable=!1,setTimeout(function(){c.body.contentEditable=!0},100),setInterval(function(){c.body.style.height=c.iframe.offsetHeight-20+"px"},100)),!d.isShow&&c.setHide(),d.readonly&&c.setDisabled()},sync:function(b){var c=this,d=b?document.getElementById(b):domUtils.findParent(c.iframe.parentNode,function(a){return"FORM"==a.tagName},!0);d&&a(d,c)},setHeight:function(a,b){a!==parseInt(this.iframe.parentNode.style.height)&&(this.iframe.parentNode.style.height=a+"px"),!b&&(this.options.minFrameHeight=this.options.initialFrameHeight=a),this.body.style.height=a+"px",!b&&this.trigger("setHeight")},addshortcutkey:function(a,b){var c={};b?c[a]=b:c=a,utils.extend(this.shortcutkeys,c)},_bindshortcutKeys:function(){var a=this,b=this.shortcutkeys;a.addListener("keydown",function(c,d){var e=d.keyCode||d.which;for(var f in b)for(var g,h=b[f].split(","),i=0;g=h[i++];){g=g.split(":");var j=g[0],k=g[1];(/^(ctrl)(\+shift)?\+(\d+)$/.test(j.toLowerCase())||/^(\d+)$/.test(j))&&(("ctrl"==RegExp.$1?d.ctrlKey||d.metaKey:0)&&(""!=RegExp.$2?d[RegExp.$2.slice(1)+"Key"]:1)&&e==RegExp.$3||e==RegExp.$1)&&(a.queryCommandState(f,k)!=-1&&a.execCommand(f,k),domUtils.preventDefault(d))}})},getContent:function(a,b,c,d,e){var f=this;if(a&&utils.isFunction(a)&&(b=a,a=""),b?!b():!this.hasContents())return"";f.fireEvent("beforegetcontent");var g=UE.htmlparser(f.body.innerHTML,d);return f.filterOutputRule(g),f.fireEvent("aftergetcontent",a,g),g.toHtml(e)},getAllHtml:function(){var a=this,b=[];if(a.fireEvent("getAllHtml",b),browser.ie&&browser.version>8){var c="";utils.each(a.document.styleSheets,function(a){c+=a.href?'<link rel="stylesheet" type="text/css" href="'+a.href+'" />':"<style>"+a.cssText+"</style>"}),utils.each(a.document.getElementsByTagName("script"),function(a){c+=a.outerHTML})}return"<html><head>"+(a.options.charset?'<meta http-equiv="Content-Type" content="text/html; charset='+a.options.charset+'"/>':"")+(c||a.document.getElementsByTagName("head")[0].innerHTML)+b.join("\n")+"</head><body "+(ie&&browser.version<9?'class="view"':"")+">"+a.getContent(null,null,!0)+"</body></html>"},getPlainTxt:function(){var a=new RegExp(domUtils.fillChar,"g"),b=this.body.innerHTML.replace(/[\n\r]/g,"");return b=b.replace(/<(p|div)[^>]*>(<br\/?>|&nbsp;)<\/\1>/gi,"\n").replace(/<br\/?>/gi,"\n").replace(/<[^>\/]+>/g,"").replace(/(\n)?<\/([^>]+)>/g,function(a,b,c){return dtd.$block[c]?"\n":b?b:""}),b.replace(a,"").replace(/\u00a0/g," ").replace(/&nbsp;/g," ")},getContentTxt:function(){var a=new RegExp(domUtils.fillChar,"g");return this.body[browser.ie?"innerText":"textContent"].replace(a,"").replace(/\u00a0/g," ")},setContent:function(b,c,d){function e(a){return"DIV"==a.tagName&&a.getAttribute("cdata_tag")}var f=this;f.fireEvent("beforesetcontent",b);var g=UE.htmlparser(b);if(f.filterInputRule(g),b=g.toHtml(),f.body.innerHTML=(c?f.body.innerHTML:"")+b,"p"==f.options.enterTag){var h,i=this.body.firstChild;if(!i||1==i.nodeType&&(dtd.$cdata[i.tagName]||e(i)||domUtils.isCustomeNode(i))&&i===this.body.lastChild)this.body.innerHTML="<p>"+(browser.ie?"&nbsp;":"<br/>")+"</p>"+this.body.innerHTML;else for(var j=f.document.createElement("p");i;){for(;i&&(3==i.nodeType||1==i.nodeType&&dtd.p[i.tagName]&&!dtd.$cdata[i.tagName]);)h=i.nextSibling,j.appendChild(i),i=h;if(j.firstChild){if(!i){f.body.appendChild(j);break}i.parentNode.insertBefore(j,i),j=f.document.createElement("p")}i=i.nextSibling}}f.fireEvent("aftersetcontent"),f.fireEvent("contentchange"),!d&&f._selectionChange(),f._bakRange=f._bakIERange=f._bakNativeRange=null;var k;browser.gecko&&(k=this.selection.getNative())&&k.removeAllRanges(),f.options.autoSyncData&&f.form&&a(f.form,f)},focus:function(a){try{var b=this,c=b.selection.getRange();if(a){var d=b.body.lastChild;d&&1==d.nodeType&&!dtd.$empty[d.tagName]&&(domUtils.isEmptyBlock(d)?c.setStartAtFirst(d):c.setStartAtLast(d),c.collapse(!0)),c.setCursor(!0)}else{if(!c.collapsed&&domUtils.isBody(c.startContainer)&&0==c.startOffset){var d=b.body.firstChild;d&&1==d.nodeType&&!dtd.$empty[d.tagName]&&c.setStartAtFirst(d).collapse(!0)}c.select(!0)}this.fireEvent("focus selectionchange")}catch(e){}},isFocus:function(){return this.selection.isFocus()},blur:function(){var a=this.selection.getNative();if(a.empty&&browser.ie){var b=document.body.createTextRange();b.moveToElementText(document.body),b.collapse(!0),b.select(),a.empty()}else a.removeAllRanges()},_initEvents:function(){var a=this,b=a.document,c=a.window;a._proxyDomEvent=utils.bind(a._proxyDomEvent,a),domUtils.on(b,["click","contextmenu","mousedown","keydown","keyup","keypress","mouseup","mouseover","mouseout","selectstart"],a._proxyDomEvent),domUtils.on(c,["focus","blur"],a._proxyDomEvent),domUtils.on(a.body,"drop",function(b){browser.gecko&&b.stopPropagation&&b.stopPropagation(),a.fireEvent("contentchange")}),domUtils.on(b,["mouseup","keydown"],function(b){"keydown"==b.type&&(b.ctrlKey||b.metaKey||b.shiftKey||b.altKey)||2!=b.button&&a._selectionChange(250,b)})},_proxyDomEvent:function(a){return this.fireEvent("before"+a.type.replace(/^on/,"").toLowerCase())!==!1&&(this.fireEvent(a.type.replace(/^on/,""),a)!==!1&&this.fireEvent("after"+a.type.replace(/^on/,"").toLowerCase()))},_selectionChange:function(a,b){var c,e,f=this,g=!1;if(browser.ie&&browser.version<9&&b&&"mouseup"==b.type){var h=this.selection.getRange();h.collapsed||(g=!0,c=b.clientX,e=b.clientY)}clearTimeout(d),d=setTimeout(function(){if(f.selection&&f.selection.getNative()){var a;if(g&&"None"==f.selection.getNative().type){a=f.document.body.createTextRange();try{a.moveToPoint(c,e)}catch(d){a=null}}var h;a&&(h=f.selection.getIERange,f.selection.getIERange=function(){return a}),f.selection.cache(),h&&(f.selection.getIERange=h),f.selection._cachedRange&&f.selection._cachedStartElement&&(f.fireEvent("beforeselectionchange"),f.fireEvent("selectionchange",!!b),f.fireEvent("afterselectionchange"),f.selection.clear())}},a||50)},_callCmdFn:function(a,b){var c,d,e=b[0].toLowerCase();return c=this.commands[e]||UE.commands[e],d=c&&c[a],c&&d||"queryCommandState"!=a?d?d.apply(this,b):void 0:0},execCommand:function(a){a=a.toLowerCase();var b,c=this,d=c.commands[a]||UE.commands[a];return d&&d.execCommand?(d.notNeedUndo||c.__hasEnterExecCommand?(b=this._callCmdFn("execCommand",arguments),!c.__hasEnterExecCommand&&!d.ignoreContentChange&&!c._ignoreContentChange&&c.fireEvent("contentchange")):(c.__hasEnterExecCommand=!0,c.queryCommandState.apply(c,arguments)!=-1&&(c.fireEvent("saveScene"),c.fireEvent.apply(c,["beforeexeccommand",a].concat(arguments)),b=this._callCmdFn("execCommand",arguments),c.fireEvent.apply(c,["afterexeccommand",a].concat(arguments)),c.fireEvent("saveScene")),c.__hasEnterExecCommand=!1),!c.__hasEnterExecCommand&&!d.ignoreContentChange&&!c._ignoreContentChange&&c._selectionChange(),b):null},queryCommandState:function(a){return this._callCmdFn("queryCommandState",arguments)},queryCommandValue:function(a){return this._callCmdFn("queryCommandValue",arguments)},hasContents:function(a){if(a)for(var b,c=0;b=a[c++];)if(this.document.getElementsByTagName(b).length>0)return!0;if(!domUtils.isEmptyBlock(this.body))return!0;for(a=["div"],c=0;b=a[c++];)for(var d,e=domUtils.getElementsByTagName(this.document,b),f=0;d=e[f++];)if(domUtils.isCustomeNode(d))return!0;return!1},reset:function(){this.fireEvent("reset")},setEnabled:function(){var a,b=this;if("false"==b.body.contentEditable){b.body.contentEditable=!0,a=b.selection.getRange();try{a.moveToBookmark(b.lastBk),delete b.lastBk}catch(c){a.setStartAtFirst(b.body).collapse(!0)}a.select(!0),b.bkqueryCommandState&&(b.queryCommandState=b.bkqueryCommandState,delete b.bkqueryCommandState),b.bkqueryCommandValue&&(b.queryCommandValue=b.bkqueryCommandValue,delete b.bkqueryCommandValue),b.fireEvent("selectionchange")}},enable:function(){return this.setEnabled()},setDisabled:function(a){var b=this;a=a?utils.isArray(a)?a:[a]:[],"true"==b.body.contentEditable&&(b.lastBk||(b.lastBk=b.selection.getRange().createBookmark(!0)),b.body.contentEditable=!1,b.bkqueryCommandState=b.queryCommandState,b.bkqueryCommandValue=b.queryCommandValue,b.queryCommandState=function(c){return utils.indexOf(a,c)!=-1?b.bkqueryCommandState.apply(b,arguments):-1},b.queryCommandValue=function(c){return utils.indexOf(a,c)!=-1?b.bkqueryCommandValue.apply(b,arguments):null},b.fireEvent("selectionchange"))},disable:function(a){return this.setDisabled(a)},_setDefaultContent:function(){function a(){var b=this;b.document.getElementById("initContent")&&(b.body.innerHTML="<p>"+(ie?"":"<br/>")+"</p>",b.removeListener("firstBeforeExecCommand focus",a),setTimeout(function(){b.focus(),b._selectionChange()},0))}return function(b){var c=this;c.body.innerHTML='<p id="initContent">'+b+"</p>",c.addListener("firstBeforeExecCommand focus",a)}}(),setShow:function(){var a=this,b=a.selection.getRange();if("none"==a.container.style.display){try{b.moveToBookmark(a.lastBk),delete a.lastBk}catch(c){b.setStartAtFirst(a.body).collapse(!0)}setTimeout(function(){b.select(!0)},100),a.container.style.display=""}},show:function(){return this.setShow()},setHide:function(){
var a=this;a.lastBk||(a.lastBk=a.selection.getRange().createBookmark(!0)),a.container.style.display="none"},hide:function(){return this.setHide()},getLang:function(a){var b=UE.I18N[this.options.lang];if(!b)throw Error("not import language file");a=(a||"").split(".");for(var c,d=0;(c=a[d++])&&(b=b[c],b););return b},getContentLength:function(a,b){var c=this.getContent(!1,!1,!0).length;if(a){b=(b||[]).concat(["hr","img","iframe"]),c=this.getContentTxt().replace(/[\t\r\n]+/g,"").length;for(var d,e=0;d=b[e++];)c+=this.document.getElementsByTagName(d).length}return c},addInputRule:function(a){this.inputRules.push(a)},filterInputRule:function(a){for(var b,c=0;b=this.inputRules[c++];)b.call(this,a)},addOutputRule:function(a){this.outputRules.push(a)},filterOutputRule:function(a){for(var b,c=0;b=this.outputRules[c++];)b.call(this,a)},getActionUrl:function(a){var b=this.getOpt(a)||a,c=this.getOpt("imageUrl"),d=this.getOpt("serverUrl");return!d&&c&&(d=c.replace(/^(.*[\/]).+([\.].+)$/,"$1controller$2")),d?(d=d+(d.indexOf("?")==-1?"?":"&")+"action="+(b||""),utils.formatUrl(d)):""}},utils.inherits(f,EventBase)}(),UE.Editor.defaultOptions=function(a){var b=a.options.UEDITOR_HOME_URL;return{isShow:!0,initialContent:"",initialStyle:"",autoClearinitialContent:!1,iframeCssUrl:b+"themes/iframe.css",textarea:"editorValue",focus:!1,focusInEnd:!0,autoClearEmptyNode:!0,fullscreen:!1,readonly:!1,zIndex:999,imagePopup:!0,enterTag:"p",customDomain:!1,lang:"zh-cn",langPath:b+"lang/",theme:"default",themePath:b+"themes/",allHtmlEnabled:!1,scaleEnabled:!1,tableNativeEditInFF:!1,autoSyncData:!0,fileNameFormat:"{time}{rand:6}"}},function(){UE.Editor.prototype.loadServerConfig=function(){function showErrorMsg(a){console&&console.error(a)}var me=this;setTimeout(function(){try{me.options.imageUrl&&me.setOpt("serverUrl",me.options.imageUrl.replace(/^(.*[\/]).+([\.].+)$/,"$1controller$2"));var configUrl=me.getActionUrl("config"),isJsonp=utils.isCrossDomainUrl(configUrl);me._serverConfigLoaded=!1,configUrl&&UE.ajax.request(configUrl,{method:"GET",dataType:isJsonp?"jsonp":"",onsuccess:function(r){try{var config=isJsonp?r:eval("("+r.responseText+")");utils.extend(me.options,config),me.fireEvent("serverConfigLoaded"),me._serverConfigLoaded=!0}catch(e){showErrorMsg(me.getLang("loadconfigFormatError"))}},onerror:function(){showErrorMsg(me.getLang("loadconfigHttpError"))}})}catch(e){showErrorMsg(me.getLang("loadconfigError"))}})},UE.Editor.prototype.isServerConfigLoaded=function(){var a=this;return a._serverConfigLoaded||!1},UE.Editor.prototype.afterConfigReady=function(a){if(a&&utils.isFunction(a)){var b=this,c=function(){a.apply(b,arguments),b.removeListener("serverConfigLoaded",c)};b.isServerConfigLoaded()?a.call(b,"serverConfigLoaded"):b.addListener("serverConfigLoaded",c)}}}(),UE.ajax=function(){function a(a){var b=[];for(var c in a)if("method"!=c&&"timeout"!=c&&"async"!=c&&"dataType"!=c&&"callback"!=c&&void 0!=a[c]&&null!=a[c])if("function"!=(typeof a[c]).toLowerCase()&&"object"!=(typeof a[c]).toLowerCase())b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));else if(utils.isArray(a[c]))for(var d=0;d<a[c].length;d++)b.push(encodeURIComponent(c)+"[]="+encodeURIComponent(a[c][d]));return b.join("&")}function b(b,c){var d=f(),e=!1,g={method:"POST",timeout:5e3,async:!0,data:{},onsuccess:function(){},onerror:function(){}};if("object"==typeof b&&(c=b,b=c.url),d&&b){var h=c?utils.extend(g,c):g,i=a(h);utils.isEmptyObject(h.data)||(i+=(i?"&":"")+a(h.data));var j=setTimeout(function(){4!=d.readyState&&(e=!0,d.abort(),clearTimeout(j))},h.timeout),k=h.method.toUpperCase(),l=b+(b.indexOf("?")==-1?"?":"&")+("POST"==k?"":i+"&noCache="+ +new Date);d.open(k,l,h.async),d.onreadystatechange=function(){4==d.readyState&&(e||200!=d.status?h.onerror(d):h.onsuccess(d))},"POST"==k?(d.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),d.send(i)):d.send(null)}}function c(b,c){function d(a,b,c){a.setAttribute("type","text/javascript"),a.setAttribute("defer","defer"),c&&a.setAttribute("charset",c),a.setAttribute("src",b),document.getElementsByTagName("head")[0].appendChild(a)}function e(a){return function(){try{if(a)k.onerror&&k.onerror();else try{clearTimeout(g),i.apply(window,arguments)}catch(b){}}catch(c){k.onerror&&k.onerror.call(window,c)}finally{k.oncomplete&&k.oncomplete.apply(window,arguments),j.parentNode&&j.parentNode.removeChild(j),window[f]=null;try{delete window[f]}catch(b){}}}}var f,g,h,i=c.onsuccess||function(){},j=document.createElement("SCRIPT"),k=c||{},l=k.charset,m=k.jsonp||"callback",n=k.timeOut||0,o=new RegExp("(\\?|&)"+m+"=([^&]*)");utils.isFunction(i)?(f="bd__editor__"+Math.floor(2147483648*Math.random()).toString(36),window[f]=e(0)):utils.isString(i)?f=i:(h=o.exec(b))&&(f=h[2]),b=b.replace(o,"$1"+m+"="+f),b.search(o)<0&&(b+=(b.indexOf("?")<0?"?":"&")+m+"="+f);var p=a(c);utils.isEmptyObject(c.data)||(p+=(p?"&":"")+a(c.data)),p&&(b=b.replace(/\?/,"?"+p+"&")),j.onerror=e(1),n&&(g=setTimeout(e(1),n)),d(j,b,l)}var d="XMLHttpRequest()";try{new ActiveXObject("Msxml2.XMLHTTP"),d="ActiveXObject('Msxml2.XMLHTTP')"}catch(e){try{new ActiveXObject("Microsoft.XMLHTTP"),d="ActiveXObject('Microsoft.XMLHTTP')"}catch(e){}}var f=new Function("return new "+d);return{request:function(a,d){d&&"jsonp"==d.dataType?c(a,d):b(a,d)},getJSONP:function(a,b,d){var e={data:b,oncomplete:d};c(a,e)}}}();var filterWord=UE.filterWord=function(){function a(a){return/(class="?Mso|style="[^"]*\bmso\-|w:WordDocument|<(v|o):|lang=)/gi.test(a)}function b(a){return a=a.replace(/[\d.]+\w+/g,function(a){return utils.transUnitToPx(a)})}function c(a){return a.replace(/[\t\r\n]+/g," ").replace(/<!--[\s\S]*?-->/gi,"").replace(/<v:shape [^>]*>[\s\S]*?.<\/v:shape>/gi,function(a){if(browser.opera)return"";try{if(/Bitmap/i.test(a))return"";var c=a.match(/width:([ \d.]*p[tx])/i)[1],d=a.match(/height:([ \d.]*p[tx])/i)[1],e=a.match(/src=\s*"([^"]*)"/i)[1];return'<img width="'+b(c)+'" height="'+b(d)+'" src="'+e+'" />'}catch(f){return""}}).replace(/<\/?div[^>]*>/g,"").replace(/v:\w+=(["']?)[^'"]+\1/g,"").replace(/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|xml|meta|link|style|\w+:\w+)(?=[\s\/>]))[^>]*>/gi,"").replace(/<p [^>]*class="?MsoHeading"?[^>]*>(.*?)<\/p>/gi,"<p><strong>$1</strong></p>").replace(/\s+(class|lang|align)\s*=\s*(['"]?)([\w-]+)\2/gi,function(a,b,c,d){return"class"==b&&"MsoListParagraph"==d?a:""}).replace(/<(font|span)[^>]*>(\s*)<\/\1>/gi,function(a,b,c){return c.replace(/[\t\r\n ]+/g," ")}).replace(/(<[a-z][^>]*)\sstyle=(["'])([^\2]*?)\2/gi,function(a,c,d,e){for(var f,g=[],h=e.replace(/^\s+|\s+$/,"").replace(/&#39;/g,"'").replace(/&quot;/gi,"'").replace(/[\d.]+(cm|pt)/g,function(a){return utils.transUnitToPx(a)}).split(/;\s*/g),i=0;f=h[i];i++){var j,k,l=f.split(":");if(2==l.length){if(j=l[0].toLowerCase(),k=l[1].toLowerCase(),/^(background)\w*/.test(j)&&0==k.replace(/(initial|\s)/g,"").length||/^(margin)\w*/.test(j)&&/^0\w+$/.test(k))continue;switch(j){case"mso-padding-alt":case"mso-padding-top-alt":case"mso-padding-right-alt":case"mso-padding-bottom-alt":case"mso-padding-left-alt":case"mso-margin-alt":case"mso-margin-top-alt":case"mso-margin-right-alt":case"mso-margin-bottom-alt":case"mso-margin-left-alt":case"mso-height":case"mso-width":case"mso-vertical-align-alt":/<table/.test(c)||(g[i]=j.replace(/^mso-|-alt$/g,"")+":"+b(k));continue;case"horiz-align":g[i]="text-align:"+k;continue;case"vert-align":g[i]="vertical-align:"+k;continue;case"font-color":case"mso-foreground":g[i]="color:"+k;continue;case"mso-background":case"mso-highlight":g[i]="background:"+k;continue;case"mso-default-height":g[i]="min-height:"+b(k);continue;case"mso-default-width":g[i]="min-width:"+b(k);continue;case"mso-padding-between-alt":g[i]="border-collapse:separate;border-spacing:"+b(k);continue;case"text-line-through":"single"!=k&&"double"!=k||(g[i]="text-decoration:line-through");continue;case"mso-zero-height":"yes"==k&&(g[i]="display:none");continue;case"margin":if(!/[1-9]/.test(k))continue}if(/^(mso|column|font-emph|lang|layout|line-break|list-image|nav|panose|punct|row|ruby|sep|size|src|tab-|table-border|text-(?:decor|trans)|top-bar|version|vnd|word-break)/.test(j)||/text\-indent|padding|margin/.test(j)&&/\-[\d.]+/.test(k))continue;g[i]=j+":"+l[1]}}return c+(g.length?' style="'+g.join(";").replace(/;{2,}/g,";")+'"':"")})}return function(b){return a(b)?c(b):b}}();!function(){function a(a,b,c){return a.push(n),b+(c?1:-1)}function b(a,b){for(var c=0;c<b;c++)a.push(m)}function c(g,h,i,j){switch(g.type){case"root":for(var k,l=0;k=g.children[l++];)i&&"element"==k.type&&!dtd.$inlineWithA[k.tagName]&&l>1&&(a(h,j,!0),b(h,j)),c(k,h,i,j);break;case"text":d(g,h);break;case"element":e(g,h,i,j);break;case"comment":f(g,h,i)}return h}function d(a,b){"pre"==a.parentNode.tagName?b.push(a.data):b.push(l[a.parentNode.tagName]?utils.html(a.data):a.data.replace(/[ ]{2}/g," &nbsp;"))}function e(d,e,f,g){var h="";if(d.attrs){h=[];var i=d.attrs;for(var j in i)h.push(j+(void 0!==i[j]?'="'+(k[j]?utils.html(i[j]).replace(/["]/g,function(a){return"&quot;"}):utils.unhtml(i[j]))+'"':""));h=h.join(" ")}if(e.push("<"+d.tagName+(h?" "+h:"")+(dtd.$empty[d.tagName]?"/":"")+">"),f&&!dtd.$inlineWithA[d.tagName]&&"pre"!=d.tagName&&d.children&&d.children.length&&(g=a(e,g,!0),b(e,g)),d.children&&d.children.length)for(var l,m=0;l=d.children[m++];)f&&"element"==l.type&&!dtd.$inlineWithA[l.tagName]&&m>1&&(a(e,g),b(e,g)),c(l,e,f,g);dtd.$empty[d.tagName]||(f&&!dtd.$inlineWithA[d.tagName]&&"pre"!=d.tagName&&d.children&&d.children.length&&(g=a(e,g),b(e,g)),e.push("</"+d.tagName+">"))}function f(a,b){b.push("<!--"+a.data+"-->")}function g(a,b){var c;if("element"==a.type&&a.getAttr("id")==b)return a;if(a.children&&a.children.length)for(var d,e=0;d=a.children[e++];)if(c=g(d,b))return c}function h(a,b,c){if("element"==a.type&&a.tagName==b&&c.push(a),a.children&&a.children.length)for(var d,e=0;d=a.children[e++];)h(d,b,c)}function i(a,b){if(a.children&&a.children.length)for(var c,d=0;c=a.children[d];)i(c,b),c.parentNode&&(c.children&&c.children.length&&b(c),c.parentNode&&d++);else b(a)}var j=UE.uNode=function(a){this.type=a.type,this.data=a.data,this.tagName=a.tagName,this.parentNode=a.parentNode,this.attrs=a.attrs||{},this.children=a.children},k={href:1,src:1,_src:1,_href:1,cdata_data:1},l={style:1,script:1},m="    ",n="\n";j.createElement=function(a){return/[<>]/.test(a)?UE.htmlparser(a).children[0]:new j({type:"element",children:[],tagName:a})},j.createText=function(a,b){return new UE.uNode({type:"text",data:b?a:utils.unhtml(a||"")})},j.prototype={toHtml:function(a){var b=[];return c(this,b,a,0),b.join("")},innerHTML:function(a){if("element"!=this.type||dtd.$empty[this.tagName])return this;if(utils.isString(a)){if(this.children)for(var b,c=0;b=this.children[c++];)b.parentNode=null;this.children=[];for(var b,d=UE.htmlparser(a),c=0;b=d.children[c++];)this.children.push(b),b.parentNode=this;return this}var d=new UE.uNode({type:"root",children:this.children});return d.toHtml()},innerText:function(a,b){if("element"!=this.type||dtd.$empty[this.tagName])return this;if(a){if(this.children)for(var c,d=0;c=this.children[d++];)c.parentNode=null;return this.children=[],this.appendChild(j.createText(a,b)),this}return this.toHtml().replace(/<[^>]+>/g,"")},getData:function(){return"element"==this.type?"":this.data},firstChild:function(){return this.children?this.children[0]:null},lastChild:function(){return this.children?this.children[this.children.length-1]:null},previousSibling:function(){for(var a,b=this.parentNode,c=0;a=b.children[c];c++)if(a===this)return 0==c?null:b.children[c-1]},nextSibling:function(){for(var a,b=this.parentNode,c=0;a=b.children[c++];)if(a===this)return b.children[c]},replaceChild:function(a,b){if(this.children){a.parentNode&&a.parentNode.removeChild(a);for(var c,d=0;c=this.children[d];d++)if(c===b)return this.children.splice(d,1,a),b.parentNode=null,a.parentNode=this,a}},appendChild:function(a){if("root"==this.type||"element"==this.type&&!dtd.$empty[this.tagName]){this.children||(this.children=[]),a.parentNode&&a.parentNode.removeChild(a);for(var b,c=0;b=this.children[c];c++)if(b===a){this.children.splice(c,1);break}return this.children.push(a),a.parentNode=this,a}},insertBefore:function(a,b){if(this.children){a.parentNode&&a.parentNode.removeChild(a);for(var c,d=0;c=this.children[d];d++)if(c===b)return this.children.splice(d,0,a),a.parentNode=this,a}},insertAfter:function(a,b){if(this.children){a.parentNode&&a.parentNode.removeChild(a);for(var c,d=0;c=this.children[d];d++)if(c===b)return this.children.splice(d+1,0,a),a.parentNode=this,a}},removeChild:function(a,b){if(this.children)for(var c,d=0;c=this.children[d];d++)if(c===a){if(this.children.splice(d,1),c.parentNode=null,b&&c.children&&c.children.length)for(var e,f=0;e=c.children[f];f++)this.children.splice(d+f,0,e),e.parentNode=this;return c}},getAttr:function(a){return this.attrs&&this.attrs[a.toLowerCase()]},setAttr:function(a,b){if(!a)return void delete this.attrs;if(this.attrs||(this.attrs={}),utils.isObject(a))for(var c in a)a[c]?this.attrs[c.toLowerCase()]=a[c]:delete this.attrs[c];else b?this.attrs[a.toLowerCase()]=b:delete this.attrs[a]},getIndex:function(){for(var a,b=this.parentNode,c=0;a=b.children[c];c++)if(a===this)return c;return-1},getNodeById:function(a){var b;if(this.children&&this.children.length)for(var c,d=0;c=this.children[d++];)if(b=g(c,a))return b},getNodesByTagName:function(a){a=utils.trim(a).replace(/[ ]{2,}/g," ").split(" ");var b=[],c=this;return utils.each(a,function(a){if(c.children&&c.children.length)for(var d,e=0;d=c.children[e++];)h(d,a,b)}),b},getStyle:function(a){var b=this.getAttr("style");if(!b)return"";var c=new RegExp("(^|;)\\s*"+a+":([^;]+)","i"),d=b.match(c);return d&&d[0]?d[2]:""},setStyle:function(a,b){function c(a,b){var c=new RegExp("(^|;)\\s*"+a+":([^;]+;?)","gi");d=d.replace(c,"$1"),b&&(d=a+":"+utils.unhtml(b)+";"+d)}var d=this.getAttr("style");if(d||(d=""),utils.isObject(a))for(var e in a)c(e,a[e]);else c(a,b);this.setAttr("style",utils.trim(d))},traversal:function(a){return this.children&&this.children.length&&i(this,a),this}}}();var htmlparser=UE.htmlparser=function(a,b){function c(a,b){if(m[a.tagName]){var c=k.createElement(m[a.tagName]);a.appendChild(c),c.appendChild(k.createText(b)),a=c}else a.appendChild(k.createText(b))}function d(a,b,c){var e;if(e=l[b]){for(var f,h=a;"root"!=h.type;){if(utils.isArray(e)?utils.indexOf(e,h.tagName)!=-1:e==h.tagName){a=h,f=!0;break}h=h.parentNode}f||(a=d(a,utils.isArray(e)?e[0]:e))}var i=new k({parentNode:a,type:"element",tagName:b.toLowerCase(),children:dtd.$empty[b]?null:[]});if(c){for(var m,n={};m=g.exec(c);)n[m[1].toLowerCase()]=j[m[1].toLowerCase()]?m[2]||m[3]||m[4]:utils.unhtml(m[2]||m[3]||m[4]);i.attrs=n}return a.children.push(i),dtd.$empty[b]?a:i}function e(a,b){a.children.push(new k({type:"comment",data:b,parentNode:a}))}var f=/<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)-->)|(?:([^\s\/<>]+)\s*((?:(?:"[^"]*")|(?:'[^']*')|[^"'<>])*)\/?>))/g,g=/([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,h={b:1,code:1,i:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,span:1,sub:1,img:1,sup:1,font:1,big:1,small:1,iframe:1,a:1,br:1,pre:1};a=a.replace(new RegExp(domUtils.fillChar,"g"),""),b||(a=a.replace(new RegExp("[\\r\\t\\n"+(b?"":" ")+"]*</?(\\w+)\\s*(?:[^>]*)>[\\r\\t\\n"+(b?"":" ")+"]*","g"),function(a,c){return c&&h[c.toLowerCase()]?a.replace(/(^[\n\r]+)|([\n\r]+$)/g,""):a.replace(new RegExp("^[\\r\\n"+(b?"":" ")+"]+"),"").replace(new RegExp("[\\r\\n"+(b?"":" ")+"]+$"),"")}));for(var i,j={href:1,src:1},k=UE.uNode,l={td:"tr",tr:["tbody","thead","tfoot"],tbody:"table",th:"tr",thead:"table",tfoot:"table",caption:"table",li:["ul","ol"],dt:"dl",dd:"dl",option:"select"},m={ol:"li",ul:"li"},n=0,o=0,p=new k({type:"root",children:[]}),q=p;i=f.exec(a);){n=i.index;try{if(n>o&&c(q,a.slice(o,n)),i[3])dtd.$cdata[q.tagName]?c(q,i[0]):q=d(q,i[3].toLowerCase(),i[4]);else if(i[1]){if("root"!=q.type)if(dtd.$cdata[q.tagName]&&!dtd.$cdata[i[1]])c(q,i[0]);else{for(var r=q;"element"==q.type&&q.tagName!=i[1].toLowerCase();)if(q=q.parentNode,"root"==q.type)throw q=r,"break";q=q.parentNode}}else i[2]&&e(q,i[2])}catch(s){}o=f.lastIndex}return o<a.length&&c(q,a.slice(o)),p},filterNode=UE.filterNode=function(){function a(b,c){switch(b.type){case"text":break;case"element":var d;if(d=c[b.tagName])if("-"===d)b.parentNode.removeChild(b);else if(utils.isFunction(d)){var e=b.parentNode,f=b.getIndex();if(d(b),b.parentNode){if(b.children)for(var g,h=0;g=b.children[h];)a(g,c),g.parentNode&&h++}else for(var g,h=f;g=e.children[h];)a(g,c),g.parentNode&&h++}else{var i=d.$;if(i&&b.attrs){var j,k={};for(var l in i){if(j=b.getAttr(l),"style"==l&&utils.isArray(i[l])){var m=[];utils.each(i[l],function(a){var c;(c=b.getStyle(a))&&m.push(a+":"+c)}),j=m.join(";")}j&&(k[l]=j)}b.attrs=k}if(b.children)for(var g,h=0;g=b.children[h];)a(g,c),g.parentNode&&h++}else if(dtd.$cdata[b.tagName])b.parentNode.removeChild(b);else{var e=b.parentNode,f=b.getIndex();b.parentNode.removeChild(b,!0);for(var g,h=f;g=e.children[h];)a(g,c),g.parentNode&&h++}break;case"comment":b.parentNode.removeChild(b)}}return function(b,c){if(utils.isEmptyObject(c))return b;var d;(d=c["-"])&&utils.each(d.split(" "),function(a){c[a]="-"});for(var e,f=0;e=b.children[f];)a(e,c),e.parentNode&&f++;return b}}();UE.plugin=function(){var a={};return{register:function(b,c,d,e){d&&utils.isFunction(d)&&(e=d,d=null),a[b]={optionName:d||b,execFn:c,afterDisabled:e}},load:function(b){utils.each(a,function(a){var c=a.execFn.call(b);b.options[a.optionName]!==!1?c&&utils.each(c,function(a,c){switch(c.toLowerCase()){case"shortcutkey":b.addshortcutkey(a);break;case"bindevents":utils.each(a,function(a,c){b.addListener(c,a)});break;case"bindmultievents":utils.each(utils.isArray(a)?a:[a],function(a){var c=utils.trim(a.type).split(/\s+/);utils.each(c,function(c){b.addListener(c,a.handler)})});break;case"commands":utils.each(a,function(a,c){b.commands[c]=a});break;case"outputrule":b.addOutputRule(a);break;case"inputrule":b.addInputRule(a);break;case"defaultoptions":b.setOpt(a)}}):a.afterDisabled&&a.afterDisabled.call(b)}),utils.each(UE.plugins,function(a){a.call(b)})},run:function(b,c){var d=a[b];d&&d.exeFn.call(c)}}}();var keymap=UE.keymap={Backspace:8,Tab:9,Enter:13,Shift:16,Control:17,Alt:18,CapsLock:20,Esc:27,Spacebar:32,PageUp:33,PageDown:34,End:35,Home:36,Left:37,Up:38,Right:39,Down:40,Insert:45,Del:46,NumLock:144,Cmd:91,"=":187,"-":189,b:66,i:73,z:90,y:89,v:86,x:88,s:83,n:78},LocalStorage=UE.LocalStorage=function(){function a(){var a=document.createElement("div");return a.style.display="none",a.addBehavior?(a.addBehavior("#default#userdata"),{getItem:function(b){var d=null;try{document.body.appendChild(a),a.load(c),d=a.getAttribute(b),document.body.removeChild(a)}catch(e){}return d},setItem:function(b,d){document.body.appendChild(a),a.setAttribute(b,d),a.save(c),document.body.removeChild(a)},removeItem:function(b){document.body.appendChild(a),a.removeAttribute(b),a.save(c),document.body.removeChild(a)}}):null}var b=window.localStorage||a()||null,c="localStorage";return{saveLocalData:function(a,c){return!(!b||!c)&&(b.setItem(a,c),!0)},getLocalData:function(a){return b?b.getItem(a):null},removeItem:function(a){b&&b.removeItem(a)}}}();!function(){var a="ueditor_preference";UE.Editor.prototype.setPreferences=function(b,c){var d={};utils.isString(b)?d[b]=c:d=b;var e=LocalStorage.getLocalData(a);e&&(e=utils.str2json(e))?utils.extend(e,d):e=d,e&&LocalStorage.saveLocalData(a,utils.json2str(e))},UE.Editor.prototype.getPreferences=function(b){var c=LocalStorage.getLocalData(a);return c&&(c=utils.str2json(c))?b?c[b]:c:null},UE.Editor.prototype.removePreferences=function(b){var c=LocalStorage.getLocalData(a);c&&(c=utils.str2json(c))&&(c[b]=void 0,delete c[b]),c&&LocalStorage.saveLocalData(a,utils.json2str(c))}}(),UE.plugins.defaultfilter=function(){var a=this;a.setOpt({allowDivTransToP:!0,disabledTableInTable:!0}),a.addInputRule(function(b){function c(a){for(;a&&"element"==a.type;){if("td"==a.tagName)return!0;a=a.parentNode}return!1}var d,e=this.options.allowDivTransToP;b.traversal(function(b){if("element"==b.type){if(!dtd.$cdata[b.tagName]&&a.options.autoClearEmptyNode&&dtd.$inline[b.tagName]&&!dtd.$empty[b.tagName]&&(!b.attrs||utils.isEmptyObject(b.attrs)))return void(b.firstChild()?"span"!=b.tagName||b.attrs&&!utils.isEmptyObject(b.attrs)||b.parentNode.removeChild(b,!0):b.parentNode.removeChild(b));switch(b.tagName){case"style":case"script":b.setAttr({cdata_tag:b.tagName,cdata_data:b.innerHTML()||"",_ue_custom_node_:"true"}),b.tagName="div",b.innerHTML("");break;case"a":(d=b.getAttr("href"))&&b.setAttr("_href",d);break;case"img":if((d=b.getAttr("src"))&&/^data:/.test(d)){b.parentNode.removeChild(b);break}b.setAttr("_src",b.getAttr("src"));break;case"span":browser.webkit&&(d=b.getStyle("white-space"))&&/nowrap|normal/.test(d)&&(b.setStyle("white-space",""),a.options.autoClearEmptyNode&&utils.isEmptyObject(b.attrs)&&b.parentNode.removeChild(b,!0)),d=b.getAttr("id"),d&&/^_baidu_bookmark_/i.test(d)&&b.parentNode.removeChild(b);break;case"p":(d=b.getAttr("align"))&&(b.setAttr("align"),b.setStyle("text-align",d)),utils.each(b.children,function(a){if("element"==a.type&&"p"==a.tagName){var c=a.nextSibling();b.parentNode.insertAfter(a,b);for(var d=a;c;){var e=c.nextSibling();b.parentNode.insertAfter(c,d),d=c,c=e}return!1}}),b.firstChild()||b.innerHTML(browser.ie?"&nbsp;":"<br/>");break;case"div":if(b.getAttr("cdata_tag"))break;if(d=b.getAttr("class"),d&&/^line number\d+/.test(d))break;if(!e)break;for(var f,g=UE.uNode.createElement("p");f=b.firstChild();)"text"!=f.type&&UE.dom.dtd.$block[f.tagName]?g.firstChild()?(b.parentNode.insertBefore(g,b),g=UE.uNode.createElement("p")):b.parentNode.insertBefore(f,b):g.appendChild(f);g.firstChild()&&b.parentNode.insertBefore(g,b),b.parentNode.removeChild(b);break;case"dl":b.tagName="ul";break;case"dt":case"dd":b.tagName="li";break;case"li":var h=b.getAttr("class");h&&/list\-/.test(h)||b.setAttr();var i=b.getNodesByTagName("ol ul");UE.utils.each(i,function(a){b.parentNode.insertAfter(a,b)});break;case"td":case"th":case"caption":b.children&&b.children.length||b.appendChild(browser.ie11below?UE.uNode.createText(" "):UE.uNode.createElement("br"));break;case"table":a.options.disabledTableInTable&&c(b)&&(b.parentNode.insertBefore(UE.uNode.createText(b.innerText()),b),b.parentNode.removeChild(b))}}})}),a.addOutputRule(function(b){var c;b.traversal(function(b){if("element"==b.type){if(a.options.autoClearEmptyNode&&dtd.$inline[b.tagName]&&!dtd.$empty[b.tagName]&&(!b.attrs||utils.isEmptyObject(b.attrs)))return void(b.firstChild()?"span"!=b.tagName||b.attrs&&!utils.isEmptyObject(b.attrs)||b.parentNode.removeChild(b,!0):b.parentNode.removeChild(b));switch(b.tagName){case"div":(c=b.getAttr("cdata_tag"))&&(b.tagName=c,b.appendChild(UE.uNode.createText(b.getAttr("cdata_data"))),b.setAttr({cdata_tag:"",cdata_data:"",_ue_custom_node_:""}));break;case"a":(c=b.getAttr("_href"))&&b.setAttr({href:utils.html(c),_href:""});break;case"span":c=b.getAttr("id"),c&&/^_baidu_bookmark_/i.test(c)&&b.parentNode.removeChild(b);break;case"img":(c=b.getAttr("_src"))&&b.setAttr({src:b.getAttr("_src"),_src:""})}}})})},UE.commands.inserthtml={execCommand:function(a,b,c){var d,e,f=this;if(b&&f.fireEvent("beforeinserthtml",b)!==!0){if(d=f.selection.getRange(),e=d.document.createElement("div"),e.style.display="inline",!c){var g=UE.htmlparser(b);f.options.filterRules&&UE.filterNode(g,f.options.filterRules),f.filterInputRule(g),b=g.toHtml()}if(e.innerHTML=utils.trim(b),!d.collapsed){var h=d.startContainer;if(domUtils.isFillChar(h)&&d.setStartBefore(h),h=d.endContainer,domUtils.isFillChar(h)&&d.setEndAfter(h),d.txtToElmBoundary(),d.endContainer&&1==d.endContainer.nodeType&&(h=d.endContainer.childNodes[d.endOffset],h&&domUtils.isBr(h)&&d.setEndAfter(h)),0==d.startOffset&&(h=d.startContainer,domUtils.isBoundaryNode(h,"firstChild")&&(h=d.endContainer,d.endOffset==(3==h.nodeType?h.nodeValue.length:h.childNodes.length)&&domUtils.isBoundaryNode(h,"lastChild")&&(f.body.innerHTML="<p>"+(browser.ie?"":"<br/>")+"</p>",d.setStart(f.body.firstChild,0).collapse(!0)))),!d.collapsed&&d.deleteContents(),1==d.startContainer.nodeType){var i,j=d.startContainer.childNodes[d.startOffset];if(j&&domUtils.isBlockElm(j)&&(i=j.previousSibling)&&domUtils.isBlockElm(i)){for(d.setEnd(i,i.childNodes.length).collapse();j.firstChild;)i.appendChild(j.firstChild);domUtils.remove(j)}}}var j,k,i,l,m,n=0;d.inFillChar()&&(j=d.startContainer,domUtils.isFillChar(j)?(d.setStartBefore(j).collapse(!0),domUtils.remove(j)):domUtils.isFillChar(j,!0)&&(j.nodeValue=j.nodeValue.replace(fillCharReg,""),d.startOffset--,d.collapsed&&d.collapse(!0)));var o=domUtils.findParentByTagName(d.startContainer,"li",!0);if(o){for(var p,q;j=e.firstChild;){for(;j&&(3==j.nodeType||!domUtils.isBlockElm(j)||"HR"==j.tagName);)p=j.nextSibling,d.insertNode(j).collapse(),q=j,j=p;if(j)if(/^(ol|ul)$/i.test(j.tagName)){for(;j.firstChild;)q=j.firstChild,domUtils.insertAfter(o,j.firstChild),o=o.nextSibling;domUtils.remove(j)}else{var r;p=j.nextSibling,r=f.document.createElement("li"),domUtils.insertAfter(o,r),r.appendChild(j),q=j,j=p,o=r}}o=domUtils.findParentByTagName(d.startContainer,"li",!0),domUtils.isEmptyBlock(o)&&domUtils.remove(o),q&&d.setStartAfter(q).collapse(!0).select(!0)}else{for(;j=e.firstChild;){if(n){for(var s=f.document.createElement("p");j&&(3==j.nodeType||!dtd.$block[j.tagName]);)m=j.nextSibling,s.appendChild(j),j=m;s.firstChild&&(j=s)}if(d.insertNode(j),m=j.nextSibling,!n&&j.nodeType==domUtils.NODE_ELEMENT&&domUtils.isBlockElm(j)&&(k=domUtils.findParent(j,function(a){return domUtils.isBlockElm(a)}),k&&"body"!=k.tagName.toLowerCase()&&(!dtd[k.tagName][j.nodeName]||j.parentNode!==k))){if(dtd[k.tagName][j.nodeName])for(l=j.parentNode;l!==k;)i=l,l=l.parentNode;else i=k;domUtils.breakParent(j,i||l);var i=j.previousSibling;domUtils.trimWhiteTextNode(i),i.childNodes.length||domUtils.remove(i),!browser.ie&&(p=j.nextSibling)&&domUtils.isBlockElm(p)&&p.lastChild&&!domUtils.isBr(p.lastChild)&&p.appendChild(f.document.createElement("br")),n=1}var p=j.nextSibling;if(!e.firstChild&&p&&domUtils.isBlockElm(p)){d.setStart(p,0).collapse(!0);break}d.setEndAfter(j).collapse()}if(j=d.startContainer,m&&domUtils.isBr(m)&&domUtils.remove(m),domUtils.isBlockElm(j)&&domUtils.isEmptyNode(j))if(m=j.nextSibling)domUtils.remove(j),1==m.nodeType&&dtd.$block[m.tagName]&&d.setStart(m,0).collapse(!0).shrinkBoundary();else try{j.innerHTML=browser.ie?domUtils.fillChar:"<br/>"}catch(t){d.setStartBefore(j),domUtils.remove(j)}try{d.select(!0)}catch(t){}}setTimeout(function(){d=f.selection.getRange(),d.scrollToView(f.autoHeightEnabled,f.autoHeightEnabled?domUtils.getXY(f.iframe).y:0),f.fireEvent("afterinserthtml",b)},200)}}},UE.plugins.autotypeset=function(){function a(a,b){return a&&3!=a.nodeType?domUtils.isBr(a)?1:a&&a.parentNode&&l[a.tagName.toLowerCase()]?g&&g.contains(a)||a.getAttribute("pagebreak")?0:b?!domUtils.isEmptyBlock(a):domUtils.isEmptyBlock(a,new RegExp("[\\s"+domUtils.fillChar+"]","g")):void 0:0}function b(a){a.style.cssText||(domUtils.removeAttributes(a,["style"]),"span"==a.tagName.toLowerCase()&&domUtils.hasNoAttributes(a)&&domUtils.remove(a,!0))}function c(c,f){var h,l=this;if(f){if(!i.pasteFilter)return;h=l.document.createElement("div"),h.innerHTML=f.html}else h=l.document.body;for(var m,n=domUtils.getElementsByTagName(h,"*"),o=0;m=n[o++];)if(l.fireEvent("excludeNodeinautotype",m)!==!0){if(i.clearFontSize&&m.style.fontSize&&(domUtils.removeStyle(m,"font-size"),b(m)),i.clearFontFamily&&m.style.fontFamily&&(domUtils.removeStyle(m,"font-family"),b(m)),a(m)){if(i.mergeEmptyline)for(var p,q=m.nextSibling,r=domUtils.isBr(m);a(q)&&(p=q,q=p.nextSibling,!r||q&&(!q||domUtils.isBr(q)));)domUtils.remove(p);if(i.removeEmptyline&&domUtils.inDoc(m,h)&&!k[m.parentNode.tagName.toLowerCase()]){if(domUtils.isBr(m)&&(q=m.nextSibling,q&&!domUtils.isBr(q)))continue;domUtils.remove(m);continue}}if(a(m,!0)&&"SPAN"!=m.tagName&&(i.indent&&(m.style.textIndent=i.indentValue),i.textAlign&&(m.style.textAlign=i.textAlign)),i.removeClass&&m.className&&!j[m.className.toLowerCase()]){if(g&&g.contains(m))continue;domUtils.removeAttributes(m,["class"])}if(i.imageBlockLine&&"img"==m.tagName.toLowerCase()&&!m.getAttribute("emotion"))if(f){var s=m;switch(i.imageBlockLine){case"left":case"right":case"none":for(var p,t,q,u=s.parentNode;dtd.$inline[u.tagName]||"A"==u.tagName;)u=u.parentNode;if(p=u,"P"==p.tagName&&"center"==domUtils.getStyle(p,"text-align")&&!domUtils.isBody(p)&&1==domUtils.getChildCount(p,function(a){return!domUtils.isBr(a)&&!domUtils.isWhitespace(a)}))if(t=p.previousSibling,q=p.nextSibling,t&&q&&1==t.nodeType&&1==q.nodeType&&t.tagName==q.tagName&&domUtils.isBlockElm(t)){for(t.appendChild(p.firstChild);q.firstChild;)t.appendChild(q.firstChild);domUtils.remove(p),domUtils.remove(q)}else domUtils.setStyle(p,"text-align","");domUtils.setStyle(s,"float",i.imageBlockLine);break;case"center":if("center"!=l.queryCommandValue("imagefloat")){for(u=s.parentNode,domUtils.setStyle(s,"float","none"),p=s;u&&1==domUtils.getChildCount(u,function(a){return!domUtils.isBr(a)&&!domUtils.isWhitespace(a)})&&(dtd.$inline[u.tagName]||"A"==u.tagName);)p=u,u=u.parentNode;var v=l.document.createElement("p");domUtils.setAttributes(v,{style:"text-align:center"}),p.parentNode.insertBefore(v,p),v.appendChild(p),domUtils.setStyle(p,"float","")}}}else{var w=l.selection.getRange();w.selectNode(m).select(),l.execCommand("imagefloat",i.imageBlockLine)}i.removeEmptyNode&&i.removeTagNames[m.tagName.toLowerCase()]&&domUtils.hasNoAttributes(m)&&domUtils.isEmptyBlock(m)&&domUtils.remove(m)}if(i.tobdc){var x=UE.htmlparser(h.innerHTML);x.traversal(function(a){"text"==a.type&&(a.data=e(a.data))}),h.innerHTML=x.toHtml()}if(i.bdc2sb){var x=UE.htmlparser(h.innerHTML);x.traversal(function(a){"text"==a.type&&(a.data=d(a.data))}),h.innerHTML=x.toHtml()}f&&(f.html=h.innerHTML)}function d(a){for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);b+=d>=65281&&d<=65373?String.fromCharCode(a.charCodeAt(c)-65248):12288==d?String.fromCharCode(a.charCodeAt(c)-12288+32):a.charAt(c)}return b}function e(a){a=utils.html(a);for(var b="",c=0;c<a.length;c++)b+=32==a.charCodeAt(c)?String.fromCharCode(12288):a.charCodeAt(c)<127?String.fromCharCode(a.charCodeAt(c)+65248):a.charAt(c);return b}function f(){var a=h.getPreferences("autotypeset");utils.extend(h.options.autotypeset,a)}this.setOpt({autotypeset:{mergeEmptyline:!0,removeClass:!0,removeEmptyline:!1,textAlign:"left",imageBlockLine:"center",pasteFilter:!1,clearFontSize:!1,clearFontFamily:!1,removeEmptyNode:!1,removeTagNames:utils.extend({div:1},dtd.$removeEmpty),indent:!1,indentValue:"2em",bdc2sb:!1,tobdc:!1}});var g,h=this,i=h.options.autotypeset,j={selectTdClass:1,pagebreak:1,anchorclass:1},k={li:1},l={div:1,p:1,blockquote:1,center:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,span:1};i&&(f(),i.pasteFilter&&h.addListener("beforepaste",c),h.commands.autotypeset={execCommand:function(){h.removeListener("beforepaste",c),i.pasteFilter&&h.addListener("beforepaste",c),c.call(h)}})},UE.plugin.register("autosubmit",function(){return{shortcutkey:{autosubmit:"ctrl+13"},commands:{autosubmit:{execCommand:function(){var a=this,b=domUtils.findParentByTagName(a.iframe,"form",!1);if(b){if(a.fireEvent("beforesubmit")===!1)return;a.sync(),b.submit()}}}}}}),UE.plugin.register("background",function(){function a(a){var b={},c=a.split(";");return utils.each(c,function(a){var c=a.indexOf(":"),d=utils.trim(a.substr(0,c)).toLowerCase();d&&(b[d]=utils.trim(a.substr(c+1)||""))}),b}function b(a){if(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c+":"+a[c]+"; ");utils.cssRule(e,b.length?"body{"+b.join("")+"}":"",d.document)}else utils.cssRule(e,"",d.document)}var c,d=this,e="editor_background",f=new RegExp("body[\\s]*\\{(.+)\\}","i"),g=d.hasContents;return d.hasContents=function(){return!!d.queryCommandValue("background")||g.apply(d,arguments)},{bindEvents:{getAllHtml:function(a,b){var c=this.body,e=domUtils.getComputedStyle(c,"background-image"),f="";
f=e.indexOf(d.options.imagePath)>0?e.substring(e.indexOf(d.options.imagePath),e.length-1).replace(/"|\(|\)/gi,""):"none"!=e?e.replace(/url\("?|"?\)/gi,""):"";var g='<style type="text/css">body{',h={"background-color":domUtils.getComputedStyle(c,"background-color")||"#ffffff","background-image":f?"url("+f+")":"","background-repeat":domUtils.getComputedStyle(c,"background-repeat")||"","background-position":browser.ie?domUtils.getComputedStyle(c,"background-position-x")+" "+domUtils.getComputedStyle(c,"background-position-y"):domUtils.getComputedStyle(c,"background-position"),height:domUtils.getComputedStyle(c,"height")};for(var i in h)h.hasOwnProperty(i)&&(g+=i+":"+h[i]+"; ");g+="}</style> ",b.push(g)},aftersetcontent:function(){0==c&&b()}},inputRule:function(d){c=!1,utils.each(d.getNodesByTagName("p"),function(d){var e=d.getAttr("data-background");e&&(c=!0,b(a(e)),d.parentNode.removeChild(d))})},outputRule:function(a){var b=this,c=(utils.cssRule(e,b.document)||"").replace(/[\n\r]+/g,"").match(f);c&&a.appendChild(UE.uNode.createElement('<p style="display:none;" data-background="'+utils.trim(c[1].replace(/"/g,"").replace(/[\s]+/g," "))+'"><br/></p>'))},commands:{background:{execCommand:function(a,c){b(c)},queryCommandValue:function(){var b=this,c=(utils.cssRule(e,b.document)||"").replace(/[\n\r]+/g,"").match(f);return c?a(c[1]):null},notNeedUndo:!0}}}}),UE.commands.imagefloat={execCommand:function(a,b){var c=this,d=c.selection.getRange();if(!d.collapsed){var e=d.getClosedNode();if(e&&"IMG"==e.tagName)switch(b){case"left":case"right":case"none":for(var f,g,h,i=e.parentNode;dtd.$inline[i.tagName]||"A"==i.tagName;)i=i.parentNode;if(f=i,"P"==f.tagName&&"center"==domUtils.getStyle(f,"text-align")){if(!domUtils.isBody(f)&&1==domUtils.getChildCount(f,function(a){return!domUtils.isBr(a)&&!domUtils.isWhitespace(a)}))if(g=f.previousSibling,h=f.nextSibling,g&&h&&1==g.nodeType&&1==h.nodeType&&g.tagName==h.tagName&&domUtils.isBlockElm(g)){for(g.appendChild(f.firstChild);h.firstChild;)g.appendChild(h.firstChild);domUtils.remove(f),domUtils.remove(h)}else domUtils.setStyle(f,"text-align","");d.selectNode(e).select()}domUtils.setStyle(e,"float","none"==b?"":b),"none"==b&&domUtils.removeAttributes(e,"align");break;case"center":if("center"!=c.queryCommandValue("imagefloat")){for(i=e.parentNode,domUtils.setStyle(e,"float",""),domUtils.removeAttributes(e,"align"),f=e;i&&1==domUtils.getChildCount(i,function(a){return!domUtils.isBr(a)&&!domUtils.isWhitespace(a)})&&(dtd.$inline[i.tagName]||"A"==i.tagName);)f=i,i=i.parentNode;d.setStartBefore(f).setCursor(!1),i=c.document.createElement("div"),i.appendChild(f),domUtils.setStyle(f,"float",""),c.execCommand("insertHtml",'<p id="_img_parent_tmp" style="text-align:center">'+i.innerHTML+"</p>"),f=c.document.getElementById("_img_parent_tmp"),f.removeAttribute("id"),f=f.firstChild,d.selectNode(f).select(),h=f.parentNode.nextSibling,h&&domUtils.isEmptyNode(h)&&domUtils.remove(h)}}}},queryCommandValue:function(){var a,b,c=this.selection.getRange();return c.collapsed?"none":(a=c.getClosedNode(),a&&1==a.nodeType&&"IMG"==a.tagName?(b=domUtils.getComputedStyle(a,"float")||a.getAttribute("align"),"none"==b&&(b="center"==domUtils.getComputedStyle(a.parentNode,"text-align")?"center":b),{left:1,right:1,center:1}[b]?b:"none"):"none")},queryCommandState:function(){var a,b=this.selection.getRange();return b.collapsed?-1:(a=b.getClosedNode(),a&&1==a.nodeType&&"IMG"==a.tagName?0:-1)}},UE.commands.insertimage={execCommand:function(a,b){function c(a){utils.each("width,height,border,hspace,vspace".split(","),function(b){a[b]&&(a[b]=parseInt(a[b],10)||0)}),utils.each("src,_src".split(","),function(b){a[b]&&(a[b]=utils.unhtmlForUrl(a[b]))}),utils.each("title,alt".split(","),function(b){a[b]&&(a[b]=utils.unhtml(a[b]))})}if(b=utils.isArray(b)?b:[b],b.length){var d=this,e=d.selection.getRange(),f=e.getClosedNode();if(d.fireEvent("beforeinsertimage",b)!==!0){if(!f||!/img/i.test(f.tagName)||"edui-faked-video"==f.className&&f.className.indexOf("edui-upload-video")==-1||f.getAttribute("word_img")){var g,h=[],i="";if(g=b[0],1==b.length)c(g),i='<img src="'+g.src+'" '+(g._src?' _src="'+g._src+'" ':"")+(g.width?'width="'+g.width+'" ':"")+(g.height?' height="'+g.height+'" ':"")+("left"==g.floatStyle||"right"==g.floatStyle?' style="float:'+g.floatStyle+';"':"")+(g.title&&""!=g.title?' title="'+g.title+'"':"")+(g.border&&"0"!=g.border?' border="'+g.border+'"':"")+(g.alt&&""!=g.alt?' alt="'+g.alt+'"':"")+(g.hspace&&"0"!=g.hspace?' hspace = "'+g.hspace+'"':"")+(g.vspace&&"0"!=g.vspace?' vspace = "'+g.vspace+'"':"")+"/>","center"==g.floatStyle&&(i='<p style="text-align: center">'+i+"</p>"),h.push(i);else for(var j=0;g=b[j++];)c(g),i="<p "+("center"==g.floatStyle?'style="text-align: center" ':"")+'><img src="'+g.src+'" '+(g.width?'width="'+g.width+'" ':"")+(g._src?' _src="'+g._src+'" ':"")+(g.height?' height="'+g.height+'" ':"")+' style="'+(g.floatStyle&&"center"!=g.floatStyle?"float:"+g.floatStyle+";":"")+(g.border||"")+'" '+(g.title?' title="'+g.title+'"':"")+" /></p>",h.push(i);d.execCommand("insertHtml",h.join(""))}else{var k=b.shift(),l=k.floatStyle;delete k.floatStyle,domUtils.setAttributes(f,k),d.execCommand("imagefloat",l),b.length>0&&(e.setStartAfter(f).setCursor(!1,!0),d.execCommand("insertimage",b))}d.fireEvent("afterinsertimage",b)}}}},UE.plugins.justify=function(){var a=domUtils.isBlockElm,b={left:1,right:1,center:1,justify:1},c=function(b,c){var d=b.createBookmark(),e=function(a){return 1==a.nodeType?"br"!=a.tagName.toLowerCase()&&!domUtils.isBookmarkNode(a):!domUtils.isWhitespace(a)};b.enlarge(!0);for(var f,g=b.createBookmark(),h=domUtils.getNextDomNode(g.start,!1,e),i=b.cloneRange();h&&!(domUtils.getPosition(h,g.end)&domUtils.POSITION_FOLLOWING);)if(3!=h.nodeType&&a(h))h=domUtils.getNextDomNode(h,!0,e);else{for(i.setStartBefore(h);h&&h!==g.end&&!a(h);)f=h,h=domUtils.getNextDomNode(h,!1,null,function(b){return!a(b)});i.setEndAfter(f);var j=i.getCommonAncestor();if(!domUtils.isBody(j)&&a(j))domUtils.setStyles(j,utils.isString(c)?{"text-align":c}:c),h=j;else{var k=b.document.createElement("p");domUtils.setStyles(k,utils.isString(c)?{"text-align":c}:c);var l=i.extractContents();k.appendChild(l),i.insertNode(k),h=k}h=domUtils.getNextDomNode(h,!1,e)}return b.moveToBookmark(g).moveToBookmark(d)};UE.commands.justify={execCommand:function(a,b){var d,e=this.selection.getRange();return e.collapsed&&(d=this.document.createTextNode("p"),e.insertNode(d)),c(e,b),d&&(e.setStartBefore(d).collapse(!0),domUtils.remove(d)),e.select(),!0},queryCommandValue:function(){var a=this.selection.getStart(),c=domUtils.getComputedStyle(a,"text-align");return b[c]?c:"left"},queryCommandState:function(){var a=this.selection.getStart(),b=a&&domUtils.findParentByTagName(a,["td","th","caption"],!0);return b?-1:0}}},UE.plugins.font=function(){function a(a){for(var b;(b=a.parentNode)&&"SPAN"==b.tagName&&1==domUtils.getChildCount(b,function(a){return!domUtils.isBookmarkNode(a)&&!domUtils.isBr(a)});)b.style.cssText+=a.style.cssText,domUtils.remove(a,!0),a=b}function b(a,b,c){if(g[b]&&(a.adjustmentBoundary(),!a.collapsed&&1==a.startContainer.nodeType)){var d=a.startContainer.childNodes[a.startOffset];if(d&&domUtils.isTagNode(d,"span")){var e=a.createBookmark();utils.each(domUtils.getElementsByTagName(d,"span"),function(a){a.parentNode&&!domUtils.isBookmarkNode(a)&&("backcolor"==b&&domUtils.getComputedStyle(a,"background-color").toLowerCase()===c||(domUtils.removeStyle(a,g[b]),0==a.style.cssText.replace(/^\s+$/,"").length&&domUtils.remove(a,!0)))}),a.moveToBookmark(e)}}}function c(c,d,e){var f,g=c.collapsed,h=c.createBookmark();if(g)for(f=h.start.parentNode;dtd.$inline[f.tagName];)f=f.parentNode;else f=domUtils.getCommonAncestor(h.start,h.end);utils.each(domUtils.getElementsByTagName(f,"span"),function(b){if(b.parentNode&&!domUtils.isBookmarkNode(b)){if(/\s*border\s*:\s*none;?\s*/i.test(b.style.cssText))return void(/^\s*border\s*:\s*none;?\s*$/.test(b.style.cssText)?domUtils.remove(b,!0):domUtils.removeStyle(b,"border"));if(/border/i.test(b.style.cssText)&&"SPAN"==b.parentNode.tagName&&/border/i.test(b.parentNode.style.cssText)&&(b.style.cssText=b.style.cssText.replace(/border[^:]*:[^;]+;?/gi,"")),"fontborder"!=d||"none"!=e)for(var c=b.nextSibling;c&&1==c.nodeType&&"SPAN"==c.tagName;)if(domUtils.isBookmarkNode(c)&&"fontborder"==d)b.appendChild(c),c=b.nextSibling;else{if(c.style.cssText==b.style.cssText&&(domUtils.moveChild(c,b),domUtils.remove(c)),b.nextSibling===c)break;c=b.nextSibling}if(a(b),browser.ie&&browser.version>8){var f=domUtils.findParent(b,function(a){return"SPAN"==a.tagName&&/background-color/.test(a.style.cssText)});f&&!/background-color/.test(b.style.cssText)&&(b.style.backgroundColor=f.style.backgroundColor)}}}),c.moveToBookmark(h),b(c,d,e)}var d=this,e={forecolor:"color",backcolor:"background-color",fontsize:"font-size",fontfamily:"font-family",underline:"text-decoration",strikethrough:"text-decoration",fontborder:"border"},f={underline:1,strikethrough:1,fontborder:1},g={forecolor:"color",backcolor:"background-color",fontsize:"font-size",fontfamily:"font-family"};d.setOpt({fontfamily:[{name:"songti",val:"宋体,SimSun"},{name:"yahei",val:"微软雅黑,Microsoft YaHei"},{name:"kaiti",val:"楷体,楷体_GB2312, SimKai"},{name:"heiti",val:"黑体, SimHei"},{name:"lishu",val:"隶书, SimLi"},{name:"andaleMono",val:"andale mono"},{name:"arial",val:"arial, helvetica,sans-serif"},{name:"arialBlack",val:"arial black,avant garde"},{name:"comicSansMs",val:"comic sans ms"},{name:"impact",val:"impact,chicago"},{name:"timesNewRoman",val:"times new roman"}],fontsize:[10,11,12,14,16,18,20,24,36]}),d.addInputRule(function(a){utils.each(a.getNodesByTagName("u s del font strike"),function(a){if("font"==a.tagName){var b=[];for(var c in a.attrs)switch(c){case"size":b.push("font-size:"+({1:"10",2:"12",3:"16",4:"18",5:"24",6:"32",7:"48"}[a.attrs[c]]||a.attrs[c])+"px");break;case"color":b.push("color:"+a.attrs[c]);break;case"face":b.push("font-family:"+a.attrs[c]);break;case"style":b.push(a.attrs[c])}a.attrs={style:b.join(";")}}else{var d="u"==a.tagName?"underline":"line-through";a.attrs={style:(a.getAttr("style")||"")+"text-decoration:"+d+";"}}a.tagName="span"})});for(var h in e)!function(a,b){UE.commands[a]={execCommand:function(d,e){e=e||(this.queryCommandState(d)?"none":"underline"==d?"underline":"fontborder"==d?"1px solid #000":"line-through");var g,h=this,i=this.selection.getRange();if("default"==e)i.collapsed&&(g=h.document.createTextNode("font"),i.insertNode(g).select()),h.execCommand("removeFormat","span,a",b),g&&(i.setStartBefore(g).collapse(!0),domUtils.remove(g)),c(i,d,e),i.select();else if(i.collapsed){var j=domUtils.findParentByTagName(i.startContainer,"span",!0);if(g=h.document.createTextNode("font"),!j||j.children.length||j[browser.ie?"innerText":"textContent"].replace(fillCharReg,"").length){if(i.insertNode(g),i.selectNode(g).select(),j=i.document.createElement("span"),f[a]){if(domUtils.findParentByTagName(g,"a",!0))return i.setStartBefore(g).setCursor(),void domUtils.remove(g);h.execCommand("removeFormat","span,a",b)}if(j.style.cssText=b+":"+e,g.parentNode.insertBefore(j,g),!browser.ie||browser.ie&&9==browser.version)for(var k=j.parentNode;!domUtils.isBlockElm(k);)"SPAN"==k.tagName&&(j.style.cssText=k.style.cssText+";"+j.style.cssText),k=k.parentNode;opera?setTimeout(function(){i.setStart(j,0).collapse(!0),c(i,d,e),i.select()}):(i.setStart(j,0).collapse(!0),c(i,d,e),i.select())}else i.insertNode(g),f[a]&&(i.selectNode(g).select(),h.execCommand("removeFormat","span,a",b,null),j=domUtils.findParentByTagName(g,"span",!0),i.setStartBefore(g)),j&&(j.style.cssText+=";"+b+":"+e),i.collapse(!0).select();domUtils.remove(g)}else f[a]&&h.queryCommandValue(a)&&h.execCommand("removeFormat","span,a",b),i=h.selection.getRange(),i.applyInlineStyle("span",{style:b+":"+e}),c(i,d,e),i.select();return!0},queryCommandValue:function(a){var c=this.selection.getStart();if("underline"==a||"strikethrough"==a){for(var d,e=c;e&&!domUtils.isBlockElm(e)&&!domUtils.isBody(e);){if(1==e.nodeType&&(d=domUtils.getComputedStyle(e,b),"none"!=d))return d;e=e.parentNode}return"none"}if("fontborder"==a){for(var f,g=c;g&&dtd.$inline[g.tagName];){if((f=domUtils.getComputedStyle(g,"border"))&&/1px/.test(f)&&/solid/.test(f))return f;g=g.parentNode}return""}if("FontSize"==a){var h=domUtils.getComputedStyle(c,b),g=/^([\d\.]+)(\w+)$/.exec(h);return g?Math.floor(g[1])+g[2]:h}return domUtils.getComputedStyle(c,b)},queryCommandState:function(a){if(!f[a])return 0;var b=this.queryCommandValue(a);return"fontborder"==a?/1px/.test(b)&&/solid/.test(b):"underline"==a?/underline/.test(b):/line\-through/.test(b)}}}(h,e[h])},UE.plugins.link=function(){function a(a){var b=a.startContainer,c=a.endContainer;(b=domUtils.findParentByTagName(b,"a",!0))&&a.setStartBefore(b),(c=domUtils.findParentByTagName(c,"a",!0))&&a.setEndAfter(c)}function b(b,c,d){var e=b.cloneRange(),f=d.queryCommandValue("link");a(b=b.adjustmentBoundary());var g=b.startContainer;if(1==g.nodeType&&f&&(g=g.childNodes[b.startOffset],g&&1==g.nodeType&&"A"==g.tagName&&/^(?:https?|ftp|file)\s*:\s*\/\//.test(g[browser.ie?"innerText":"textContent"])&&(g[browser.ie?"innerText":"textContent"]=utils.html(c.textValue||c.href))),e.collapsed&&!f||(b.removeInlineStyle("a"),e=b.cloneRange()),e.collapsed){var h=b.document.createElement("a"),i="";c.textValue?(i=utils.html(c.textValue),delete c.textValue):i=utils.html(c.href),domUtils.setAttributes(h,c),g=domUtils.findParentByTagName(e.startContainer,"a",!0),g&&domUtils.isInNodeEndBoundary(e,g)&&b.setStartAfter(g).collapse(!0),h[browser.ie?"innerText":"textContent"]=i,b.insertNode(h).selectNode(h)}else b.applyInlineStyle("a",c)}UE.commands.unlink={execCommand:function(){var b,c=this.selection.getRange();c.collapsed&&!domUtils.findParentByTagName(c.startContainer,"a",!0)||(b=c.createBookmark(),a(c),c.removeInlineStyle("a").moveToBookmark(b).select())},queryCommandState:function(){return!this.highlight&&this.queryCommandValue("link")?0:-1}},UE.commands.link={execCommand:function(a,c){var d;c._href&&(c._href=utils.unhtml(c._href,/[<">]/g)),c.href&&(c.href=utils.unhtml(c.href,/[<">]/g)),c.textValue&&(c.textValue=utils.unhtml(c.textValue,/[<">]/g)),b(d=this.selection.getRange(),c,this),d.collapse().select(!0)},queryCommandValue:function(){var a,b=this.selection.getRange();if(!b.collapsed){b.shrinkBoundary();var c=3!=b.startContainer.nodeType&&b.startContainer.childNodes[b.startOffset]?b.startContainer.childNodes[b.startOffset]:b.startContainer,d=3==b.endContainer.nodeType||0==b.endOffset?b.endContainer:b.endContainer.childNodes[b.endOffset-1],e=b.getCommonAncestor();if(a=domUtils.findParentByTagName(e,"a",!0),!a&&1==e.nodeType)for(var f,g,h,i=e.getElementsByTagName("a"),j=0;h=i[j++];)if(f=domUtils.getPosition(h,c),g=domUtils.getPosition(h,d),(f&domUtils.POSITION_FOLLOWING||f&domUtils.POSITION_CONTAINS)&&(g&domUtils.POSITION_PRECEDING||g&domUtils.POSITION_CONTAINS)){a=h;break}return a}if(a=b.startContainer,a=1==a.nodeType?a:a.parentNode,a&&(a=domUtils.findParentByTagName(a,"a",!0))&&!domUtils.isInNodeEndBoundary(b,a))return a},queryCommandState:function(){var a=this.selection.getRange().getClosedNode(),b=a&&("edui-faked-video"==a.className||a.className.indexOf("edui-upload-video")!=-1);return b?-1:0}}},UE.plugins.insertframe=function(){function a(){b._iframe&&delete b._iframe}var b=this;b.addListener("selectionchange",function(){a()})},UE.commands.scrawl={queryCommandState:function(){return browser.ie&&browser.version<=8?-1:0}},UE.plugins.removeformat=function(){var a=this;a.setOpt({removeFormatTags:"b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var",removeFormatAttributes:"class,style,lang,width,height,align,hspace,valign"}),a.commands.removeformat={execCommand:function(a,b,c,d,e){function f(a){if(3==a.nodeType||"span"!=a.tagName.toLowerCase())return 0;if(browser.ie){var b=a.attributes;if(b.length){for(var c=0,d=b.length;c<d;c++)if(b[c].specified)return 0;return 1}}return!a.attributes.length}function g(a){var b=a.createBookmark();if(a.collapsed&&a.enlarge(!0),!e){var d=domUtils.findParentByTagName(a.startContainer,"a",!0);d&&a.setStartBefore(d),d=domUtils.findParentByTagName(a.endContainer,"a",!0),d&&a.setEndAfter(d)}for(h=a.createBookmark(),p=h.start;(i=p.parentNode)&&!domUtils.isBlockElm(i);)domUtils.breakParent(p,i),domUtils.clearEmptySibling(p);if(h.end){for(p=h.end;(i=p.parentNode)&&!domUtils.isBlockElm(i);)domUtils.breakParent(p,i),domUtils.clearEmptySibling(p);for(var g,l=domUtils.getNextDomNode(h.start,!1,m);l&&l!=h.end;)g=domUtils.getNextDomNode(l,!0,m),dtd.$empty[l.tagName.toLowerCase()]||domUtils.isBookmarkNode(l)||(j.test(l.tagName)?c?(domUtils.removeStyle(l,c),f(l)&&"text-decoration"!=c&&domUtils.remove(l,!0)):domUtils.remove(l,!0):dtd.$tableContent[l.tagName]||dtd.$list[l.tagName]||(domUtils.removeAttributes(l,k),f(l)&&domUtils.remove(l,!0))),l=g}var n=h.start.parentNode;!domUtils.isBlockElm(n)||dtd.$tableContent[n.tagName]||dtd.$list[n.tagName]||domUtils.removeAttributes(n,k),n=h.end.parentNode,h.end&&domUtils.isBlockElm(n)&&!dtd.$tableContent[n.tagName]&&!dtd.$list[n.tagName]&&domUtils.removeAttributes(n,k),a.moveToBookmark(h).moveToBookmark(b);for(var o,p=a.startContainer,q=a.collapsed;1==p.nodeType&&domUtils.isEmptyNode(p)&&dtd.$removeEmpty[p.tagName];)o=p.parentNode,a.setStartBefore(p),a.startContainer===a.endContainer&&a.endOffset--,domUtils.remove(p),p=o;if(!q)for(p=a.endContainer;1==p.nodeType&&domUtils.isEmptyNode(p)&&dtd.$removeEmpty[p.tagName];)o=p.parentNode,a.setEndBefore(p),domUtils.remove(p),p=o}var h,i,j=new RegExp("^(?:"+(b||this.options.removeFormatTags).replace(/,/g,"|")+")$","i"),k=c?[]:(d||this.options.removeFormatAttributes).split(","),l=new dom.Range(this.document),m=function(a){return 1==a.nodeType};l=this.selection.getRange(),g(l),l.select()}}},UE.plugins.blockquote=function(){function a(a){return domUtils.filterNodeList(a.selection.getStartElementPath(),"blockquote")}var b=this;b.commands.blockquote={execCommand:function(b,c){var d=this.selection.getRange(),e=a(this),f=dtd.blockquote,g=d.createBookmark();if(e){var h=d.startContainer,i=domUtils.isBlockElm(h)?h:domUtils.findParent(h,function(a){return domUtils.isBlockElm(a)}),j=d.endContainer,k=domUtils.isBlockElm(j)?j:domUtils.findParent(j,function(a){return domUtils.isBlockElm(a)});i=domUtils.findParentByTagName(i,"li",!0)||i,k=domUtils.findParentByTagName(k,"li",!0)||k,"LI"==i.tagName||"TD"==i.tagName||i===e||domUtils.isBody(i)?domUtils.remove(e,!0):domUtils.breakParent(i,e),i!==k&&(e=domUtils.findParentByTagName(k,"blockquote"),e&&("LI"==k.tagName||"TD"==k.tagName||domUtils.isBody(k)?e.parentNode&&domUtils.remove(e,!0):domUtils.breakParent(k,e)));for(var l,m=domUtils.getElementsByTagName(this.document,"blockquote"),n=0;l=m[n++];)l.childNodes.length?domUtils.getPosition(l,i)&domUtils.POSITION_FOLLOWING&&domUtils.getPosition(l,k)&domUtils.POSITION_PRECEDING&&domUtils.remove(l,!0):domUtils.remove(l)}else{for(var o=d.cloneRange(),p=1==o.startContainer.nodeType?o.startContainer:o.startContainer.parentNode,q=p,r=1;;){if(domUtils.isBody(p)){q!==p?d.collapsed?(o.selectNode(q),r=0):o.setStartBefore(q):o.setStart(p,0);break}if(!f[p.tagName]){d.collapsed?o.selectNode(q):o.setStartBefore(q);break}q=p,p=p.parentNode}if(r)for(q=p=p=1==o.endContainer.nodeType?o.endContainer:o.endContainer.parentNode;;){if(domUtils.isBody(p)){q!==p?o.setEndAfter(q):o.setEnd(p,p.childNodes.length);break}if(!f[p.tagName]){o.setEndAfter(q);break}q=p,p=p.parentNode}p=d.document.createElement("blockquote"),domUtils.setAttributes(p,c),p.appendChild(o.extractContents()),o.insertNode(p);for(var s,t=domUtils.getElementsByTagName(p,"blockquote"),n=0;s=t[n++];)s.parentNode&&domUtils.remove(s,!0)}d.moveToBookmark(g).select()},queryCommandState:function(){return a(this)?1:0}}},UE.commands.touppercase=UE.commands.tolowercase={execCommand:function(a){var b=this,c=b.selection.getRange();if(c.collapsed)return c;for(var d=c.createBookmark(),e=d.end,f=function(a){return!domUtils.isBr(a)&&!domUtils.isWhitespace(a)},g=domUtils.getNextDomNode(d.start,!1,f);g&&domUtils.getPosition(g,e)&domUtils.POSITION_PRECEDING&&(3==g.nodeType&&(g.nodeValue=g.nodeValue["touppercase"==a?"toUpperCase":"toLowerCase"]()),g=domUtils.getNextDomNode(g,!0,f),g!==e););c.moveToBookmark(d).select()}},UE.commands.indent={execCommand:function(){var a=this,b=a.queryCommandState("indent")?"0em":a.options.indentValue||"2em";a.execCommand("Paragraph","p",{style:"text-indent:"+b})},queryCommandState:function(){var a=domUtils.filterNodeList(this.selection.getStartElementPath(),"p h1 h2 h3 h4 h5 h6");return a&&a.style.textIndent&&parseInt(a.style.textIndent)?1:0}},UE.commands.print={execCommand:function(){this.window.print()},notNeedUndo:1},UE.commands.preview={execCommand:function(){var a=window.open("","_blank",""),b=a.document;b.open(),b.write('<!DOCTYPE html><html><head><meta charset="utf-8"/><script src="'+this.options.UEDITOR_HOME_URL+"ueditor.parse.js\"></script><script>setTimeout(function(){uParse('div',{rootPath: '"+this.options.UEDITOR_HOME_URL+"'})},300)</script></head><body><div>"+this.getContent(null,null,!0)+"</div></body></html>"),b.close()},notNeedUndo:1},UE.plugins.selectall=function(){var a=this;a.commands.selectall={execCommand:function(){var a=this,b=a.body,c=a.selection.getRange();c.selectNodeContents(b),domUtils.isEmptyBlock(b)&&(browser.opera&&b.firstChild&&1==b.firstChild.nodeType&&c.setStartAtFirst(b.firstChild),c.collapse(!0)),c.select(!0)},notNeedUndo:1},a.addshortcutkey({selectAll:"ctrl+65"})},UE.plugins.paragraph=function(){var a=this,b=domUtils.isBlockElm,c=["TD","LI","PRE"],d=function(a,d,e,f){var g,h=a.createBookmark(),i=function(a){return 1==a.nodeType?"br"!=a.tagName.toLowerCase()&&!domUtils.isBookmarkNode(a):!domUtils.isWhitespace(a)};a.enlarge(!0);for(var j,k=a.createBookmark(),l=domUtils.getNextDomNode(k.start,!1,i),m=a.cloneRange();l&&!(domUtils.getPosition(l,k.end)&domUtils.POSITION_FOLLOWING);)if(3!=l.nodeType&&b(l))l=domUtils.getNextDomNode(l,!0,i);else{for(m.setStartBefore(l);l&&l!==k.end&&!b(l);)j=l,l=domUtils.getNextDomNode(l,!1,null,function(a){return!b(a)});m.setEndAfter(j),g=a.document.createElement(d),e&&(domUtils.setAttributes(g,e),f&&"customstyle"==f&&e.style&&(g.style.cssText=e.style)),g.appendChild(m.extractContents()),domUtils.isEmptyNode(g)&&domUtils.fillChar(a.document,g),m.insertNode(g);var n=g.parentNode;b(n)&&!domUtils.isBody(g.parentNode)&&utils.indexOf(c,n.tagName)==-1&&(f&&"customstyle"==f||(n.getAttribute("dir")&&g.setAttribute("dir",n.getAttribute("dir")),n.style.cssText&&(g.style.cssText=n.style.cssText+";"+g.style.cssText),n.style.textAlign&&!g.style.textAlign&&(g.style.textAlign=n.style.textAlign),n.style.textIndent&&!g.style.textIndent&&(g.style.textIndent=n.style.textIndent),n.style.padding&&!g.style.padding&&(g.style.padding=n.style.padding)),e&&/h\d/i.test(n.tagName)&&!/h\d/i.test(g.tagName)?(domUtils.setAttributes(n,e),f&&"customstyle"==f&&e.style&&(n.style.cssText=e.style),domUtils.remove(g,!0),g=n):domUtils.remove(g.parentNode,!0)),l=utils.indexOf(c,n.tagName)!=-1?n:g,l=domUtils.getNextDomNode(l,!1,i)}return a.moveToBookmark(k).moveToBookmark(h)};a.setOpt("paragraph",{p:"",h1:"",h2:"",h3:"",h4:"",h5:"",h6:""}),a.commands.paragraph={execCommand:function(a,b,c,e){var f=this.selection.getRange();if(f.collapsed){var g=this.document.createTextNode("p");if(f.insertNode(g),browser.ie){var h=g.previousSibling;h&&domUtils.isWhitespace(h)&&domUtils.remove(h),h=g.nextSibling,h&&domUtils.isWhitespace(h)&&domUtils.remove(h)}}if(f=d(f,b,c,e),g&&(f.setStartBefore(g).collapse(!0),pN=g.parentNode,domUtils.remove(g),domUtils.isBlockElm(pN)&&domUtils.isEmptyNode(pN)&&domUtils.fillNode(this.document,pN)),browser.gecko&&f.collapsed&&1==f.startContainer.nodeType){var i=f.startContainer.childNodes[f.startOffset];i&&1==i.nodeType&&i.tagName.toLowerCase()==b&&f.setStart(i,0).collapse(!0)}return f.select(),!0},queryCommandValue:function(){var a=domUtils.filterNodeList(this.selection.getStartElementPath(),"p h1 h2 h3 h4 h5 h6");return a?a.tagName.toLowerCase():""}}},function(){var a=domUtils.isBlockElm,b=function(a){return domUtils.filterNodeList(a.selection.getStartElementPath(),function(a){return a&&1==a.nodeType&&a.getAttribute("dir")})},c=function(c,d,e){var f,g=function(a){return 1==a.nodeType?!domUtils.isBookmarkNode(a):!domUtils.isWhitespace(a)},h=b(d);if(h&&c.collapsed)return h.setAttribute("dir",e),c;f=c.createBookmark(),c.enlarge(!0);for(var i,j=c.createBookmark(),k=domUtils.getNextDomNode(j.start,!1,g),l=c.cloneRange();k&&!(domUtils.getPosition(k,j.end)&domUtils.POSITION_FOLLOWING);)if(3!=k.nodeType&&a(k))k=domUtils.getNextDomNode(k,!0,g);else{for(l.setStartBefore(k);k&&k!==j.end&&!a(k);)i=k,k=domUtils.getNextDomNode(k,!1,null,function(b){return!a(b)});l.setEndAfter(i);var m=l.getCommonAncestor();if(!domUtils.isBody(m)&&a(m))m.setAttribute("dir",e),k=m;else{var n=c.document.createElement("p");n.setAttribute("dir",e);var o=l.extractContents();n.appendChild(o),l.insertNode(n),k=n}k=domUtils.getNextDomNode(k,!1,g)}return c.moveToBookmark(j).moveToBookmark(f)};UE.commands.directionality={execCommand:function(a,b){var d=this.selection.getRange();if(d.collapsed){var e=this.document.createTextNode("d");d.insertNode(e)}return c(d,this,b),e&&(d.setStartBefore(e).collapse(!0),domUtils.remove(e)),d.select(),!0},queryCommandValue:function(){var a=b(this);return a?a.getAttribute("dir"):"ltr"}}}(),UE.plugins.horizontal=function(){var a=this;a.commands.horizontal={execCommand:function(a){var b=this;if(b.queryCommandState(a)!==-1){b.execCommand("insertHtml","<hr>");var c=b.selection.getRange(),d=c.startContainer;if(1==d.nodeType&&!d.childNodes[c.startOffset]){var e;(e=d.childNodes[c.startOffset-1])&&1==e.nodeType&&"HR"==e.tagName&&("p"==b.options.enterTag?(e=b.document.createElement("p"),c.insertNode(e),c.setStart(e,0).setCursor()):(e=b.document.createElement("br"),c.insertNode(e),c.setStartBefore(e).setCursor()))}return!0}},queryCommandState:function(){return domUtils.filterNodeList(this.selection.getStartElementPath(),"table")?-1:0}},a.addListener("delkeydown",function(a,b){var c=this.selection.getRange();if(c.txtToElmBoundary(!0),domUtils.isStartInblock(c)){var d=c.startContainer,e=d.previousSibling;if(e&&domUtils.isTagNode(e,"hr"))return domUtils.remove(e),c.select(),domUtils.preventDefault(b),!0}})},UE.commands.time=UE.commands.date={execCommand:function(a,b){function c(a,b){var c=("0"+a.getHours()).slice(-2),d=("0"+a.getMinutes()).slice(-2),e=("0"+a.getSeconds()).slice(-2);return b=b||"hh:ii:ss",b.replace(/hh/gi,c).replace(/ii/gi,d).replace(/ss/gi,e)}function d(a,b){var c=("000"+a.getFullYear()).slice(-4),d=c.slice(-2),e=("0"+(a.getMonth()+1)).slice(-2),f=("0"+a.getDate()).slice(-2);return b=b||"yyyy-mm-dd",b.replace(/yyyy/gi,c).replace(/yy/gi,d).replace(/mm/gi,e).replace(/dd/gi,f)}var e=new Date;this.execCommand("insertHtml","time"==a?c(e,b):d(e,b))}},UE.plugins.rowspacing=function(){var a=this;a.setOpt({rowspacingtop:["5","10","15","20","25"],rowspacingbottom:["5","10","15","20","25"]}),a.commands.rowspacing={execCommand:function(a,b,c){return this.execCommand("paragraph","p",{style:"margin-"+c+":"+b+"px"}),!0},queryCommandValue:function(a,b){var c,d=domUtils.filterNodeList(this.selection.getStartElementPath(),function(a){return domUtils.isBlockElm(a)});return d?(c=domUtils.getComputedStyle(d,"margin-"+b).replace(/[^\d]/g,""),c?c:0):0}}},UE.plugins.lineheight=function(){var a=this;a.setOpt({lineheight:["1","1.5","1.75","2","3","4","5"]}),a.commands.lineheight={execCommand:function(a,b){return this.execCommand("paragraph","p",{style:"line-height:"+("1"==b?"normal":b+"em")}),!0},queryCommandValue:function(){var a=domUtils.filterNodeList(this.selection.getStartElementPath(),function(a){return domUtils.isBlockElm(a)});if(a){var b=domUtils.getComputedStyle(a,"line-height");return"normal"==b?1:b.replace(/[^\d.]*/gi,"")}}}},UE.plugins.insertcode=function(){var a=this;a.ready(function(){utils.cssRule("pre","pre{margin:.5em 0;padding:.4em .6em;border-radius:8px;background:#f8f8f8;}",a.document)}),a.setOpt("insertcode",{as3:"ActionScript3",bash:"Bash/Shell",cpp:"C/C++",css:"Css",cf:"CodeFunction","c#":"C#",delphi:"Delphi",diff:"Diff",erlang:"Erlang",groovy:"Groovy",html:"Html",java:"Java",jfx:"JavaFx",js:"Javascript",pl:"Perl",php:"Php",plain:"Plain Text",ps:"PowerShell",python:"Python",ruby:"Ruby",scala:"Scala",sql:"Sql",vb:"Vb",xml:"Xml"}),a.commands.insertcode={execCommand:function(a,b){var c=this,d=c.selection.getRange(),e=domUtils.findParentByTagName(d.startContainer,"pre",!0);if(e)e.className="brush:"+b+";toolbar:false;";else{var f="";if(d.collapsed)f=browser.ie&&browser.ie11below?browser.version<=8?"&nbsp;":"":"<br/>";else{var g=d.extractContents(),h=c.document.createElement("div");h.appendChild(g),utils.each(UE.filterNode(UE.htmlparser(h.innerHTML.replace(/[\r\t]/g,"")),c.options.filterTxtRules).children,function(a){if(browser.ie&&browser.ie11below&&browser.version>8)"element"==a.type?"br"==a.tagName?f+="\n":dtd.$empty[a.tagName]||(utils.each(a.children,function(b){"element"==b.type?"br"==b.tagName?f+="\n":dtd.$empty[a.tagName]||(f+=b.innerText()):f+=b.data}),/\n$/.test(f)||(f+="\n")):f+=a.data+"\n",!a.nextSibling()&&/\n$/.test(f)&&(f=f.replace(/\n$/,""));else if(browser.ie&&browser.ie11below)"element"==a.type?"br"==a.tagName?f+="<br>":dtd.$empty[a.tagName]||(utils.each(a.children,function(b){"element"==b.type?"br"==b.tagName?f+="<br>":dtd.$empty[a.tagName]||(f+=b.innerText()):f+=b.data}),/br>$/.test(f)||(f+="<br>")):f+=a.data+"<br>",!a.nextSibling()&&/<br>$/.test(f)&&(f=f.replace(/<br>$/,""));else if(f+="element"==a.type?dtd.$empty[a.tagName]?"":a.innerText():a.data,!/br\/?\s*>$/.test(f)){if(!a.nextSibling())return;f+="<br>"}})}c.execCommand("inserthtml",'<pre id="coder"class="brush:'+b+';toolbar:false">'+f+"</pre>",!0),e=c.document.getElementById("coder"),domUtils.removeAttributes(e,"id");var i=e.previousSibling;i&&(3==i.nodeType&&1==i.nodeValue.length&&browser.ie&&6==browser.version||domUtils.isEmptyBlock(i))&&domUtils.remove(i);var d=c.selection.getRange();domUtils.isEmptyBlock(e)?d.setStart(e,0).setCursor(!1,!0):d.selectNodeContents(e).select()}},queryCommandValue:function(){var a=this.selection.getStartElementPath(),b="";return utils.each(a,function(a){if("PRE"==a.nodeName){var c=a.className.match(/brush:([^;]+)/);return b=c&&c[1]?c[1]:"",!1}}),b}},a.addInputRule(function(a){utils.each(a.getNodesByTagName("pre"),function(a){var b=a.getNodesByTagName("br");if(b.length)return void(browser.ie&&browser.ie11below&&browser.version>8&&utils.each(b,function(a){var b=UE.uNode.createText("\n");a.parentNode.insertBefore(b,a),a.parentNode.removeChild(a)}));if(!(browser.ie&&browser.ie11below&&browser.version>8)){var c=a.innerText().split(/\n/);a.innerHTML(""),utils.each(c,function(b){b.length&&a.appendChild(UE.uNode.createText(b)),a.appendChild(UE.uNode.createElement("br"))})}})}),a.addOutputRule(function(a){utils.each(a.getNodesByTagName("pre"),function(a){var b="";utils.each(a.children,function(a){b+="text"==a.type?a.data.replace(/[ ]/g,"&nbsp;").replace(/\n$/,""):"br"==a.tagName?"\n":dtd.$empty[a.tagName]?a.innerText():""}),a.innerText(b.replace(/(&nbsp;|\n)+$/,""))})}),a.notNeedCodeQuery={help:1,undo:1,redo:1,source:1,print:1,searchreplace:1,fullscreen:1,preview:1,insertparagraph:1,elementpath:1,insertcode:1,inserthtml:1,selectall:1};a.queryCommandState;a.queryCommandState=function(a){var b=this;return!b.notNeedCodeQuery[a.toLowerCase()]&&b.selection&&b.queryCommandValue("insertcode")?-1:UE.Editor.prototype.queryCommandState.apply(this,arguments)},a.addListener("beforeenterkeydown",function(){var b=a.selection.getRange(),c=domUtils.findParentByTagName(b.startContainer,"pre",!0);if(c){if(a.fireEvent("saveScene"),b.collapsed||b.deleteContents(),!browser.ie||browser.ie9above){var c,d=a.document.createElement("br");b.insertNode(d).setStartAfter(d).collapse(!0);var e=d.nextSibling;e||browser.ie&&!(browser.version>10)?b.setStartAfter(d):b.insertNode(d.cloneNode(!1)),
c=d.previousSibling;for(var f;c;)if(f=c,c=c.previousSibling,!c||"BR"==c.nodeName){c=f;break}if(c){for(var g="";c&&"BR"!=c.nodeName&&new RegExp("^[\\s"+domUtils.fillChar+"]*$").test(c.nodeValue);)g+=c.nodeValue,c=c.nextSibling;if("BR"!=c.nodeName){var h=c.nodeValue.match(new RegExp("^([\\s"+domUtils.fillChar+"]+)"));h&&h[1]&&(g+=h[1])}g&&(g=a.document.createTextNode(g),b.insertNode(g).setStartAfter(g))}b.collapse(!0).select(!0)}else if(browser.version>8){var i=a.document.createTextNode("\n"),j=b.startContainer;if(0==b.startOffset){var k=j.previousSibling;if(k){b.insertNode(i);var l=a.document.createTextNode(" ");b.setStartAfter(i).insertNode(l).setStart(l,0).collapse(!0).select(!0)}}else{b.insertNode(i).setStartAfter(i);var l=a.document.createTextNode(" ");j=b.startContainer.childNodes[b.startOffset],j&&!/^\n/.test(j.nodeValue)&&b.setStartBefore(i),b.insertNode(l).setStart(l,0).collapse(!0).select(!0)}}else{var d=a.document.createElement("br");b.insertNode(d),b.insertNode(a.document.createTextNode(domUtils.fillChar)),b.setStartAfter(d),c=d.previousSibling;for(var f;c;)if(f=c,c=c.previousSibling,!c||"BR"==c.nodeName){c=f;break}if(c){for(var g="";c&&"BR"!=c.nodeName&&new RegExp("^[ "+domUtils.fillChar+"]*$").test(c.nodeValue);)g+=c.nodeValue,c=c.nextSibling;if("BR"!=c.nodeName){var h=c.nodeValue.match(new RegExp("^([ "+domUtils.fillChar+"]+)"));h&&h[1]&&(g+=h[1])}g=a.document.createTextNode(g),b.insertNode(g).setStartAfter(g)}b.collapse(!0).select()}return a.fireEvent("saveScene"),!0}}),a.addListener("tabkeydown",function(b,c){var d=a.selection.getRange(),e=domUtils.findParentByTagName(d.startContainer,"pre",!0);if(e){if(a.fireEvent("saveScene"),c.shiftKey);else if(d.collapsed){var f=a.document.createTextNode("    ");d.insertNode(f).setStartAfter(f).collapse(!0).select(!0)}else{for(var g=d.createBookmark(),h=g.start.previousSibling;h;){if(e.firstChild===h&&!domUtils.isBr(h)){e.insertBefore(a.document.createTextNode("    "),h);break}if(domUtils.isBr(h)){e.insertBefore(a.document.createTextNode("    "),h.nextSibling);break}h=h.previousSibling}var i=g.end;for(h=g.start.nextSibling,e.firstChild===g.start&&e.insertBefore(a.document.createTextNode("    "),h.nextSibling);h&&h!==i;){if(domUtils.isBr(h)&&h.nextSibling){if(h.nextSibling===i)break;e.insertBefore(a.document.createTextNode("    "),h.nextSibling)}h=h.nextSibling}d.moveToBookmark(g).select()}return a.fireEvent("saveScene"),!0}}),a.addListener("beforeinserthtml",function(a,b){var c=this,d=c.selection.getRange(),e=domUtils.findParentByTagName(d.startContainer,"pre",!0);if(e){d.collapsed||d.deleteContents();var f="";if(browser.ie&&browser.version>8){utils.each(UE.filterNode(UE.htmlparser(b),c.options.filterTxtRules).children,function(a){"element"==a.type?"br"==a.tagName?f+="\n":dtd.$empty[a.tagName]||(utils.each(a.children,function(b){"element"==b.type?"br"==b.tagName?f+="\n":dtd.$empty[a.tagName]||(f+=b.innerText()):f+=b.data}),/\n$/.test(f)||(f+="\n")):f+=a.data+"\n",!a.nextSibling()&&/\n$/.test(f)&&(f=f.replace(/\n$/,""))});var g=c.document.createTextNode(utils.html(f.replace(/&nbsp;/g," ")));d.insertNode(g).selectNode(g).select()}else{var h=c.document.createDocumentFragment();utils.each(UE.filterNode(UE.htmlparser(b),c.options.filterTxtRules).children,function(a){"element"==a.type?"br"==a.tagName?h.appendChild(c.document.createElement("br")):dtd.$empty[a.tagName]||(utils.each(a.children,function(b){"element"==b.type?"br"==b.tagName?h.appendChild(c.document.createElement("br")):dtd.$empty[a.tagName]||h.appendChild(c.document.createTextNode(utils.html(b.innerText().replace(/&nbsp;/g," ")))):h.appendChild(c.document.createTextNode(utils.html(b.data.replace(/&nbsp;/g," "))))}),"BR"!=h.lastChild.nodeName&&h.appendChild(c.document.createElement("br"))):h.appendChild(c.document.createTextNode(utils.html(a.data.replace(/&nbsp;/g," ")))),a.nextSibling()||"BR"!=h.lastChild.nodeName||h.removeChild(h.lastChild)}),d.insertNode(h).select()}return!0}}),a.addListener("keydown",function(a,b){var c=this,d=b.keyCode||b.which;if(40==d){var e,f=c.selection.getRange(),g=f.startContainer;if(f.collapsed&&(e=domUtils.findParentByTagName(f.startContainer,"pre",!0))&&!e.nextSibling){for(var h=e.lastChild;h&&"BR"==h.nodeName;)h=h.previousSibling;(h===g||f.startContainer===e&&f.startOffset==e.childNodes.length)&&(c.execCommand("insertparagraph"),domUtils.preventDefault(b))}}}),a.addListener("delkeydown",function(b,c){var d=this.selection.getRange();d.txtToElmBoundary(!0);var e=d.startContainer;if(domUtils.isTagNode(e,"pre")&&d.collapsed&&domUtils.isStartInblock(d)){var f=a.document.createElement("p");return domUtils.fillNode(a.document,f),e.parentNode.insertBefore(f,e),domUtils.remove(e),d.setStart(f,0).setCursor(!1,!0),domUtils.preventDefault(c),!0}})},UE.commands.cleardoc={execCommand:function(a){var b=this,c=b.options.enterTag,d=b.selection.getRange();"br"==c?(b.body.innerHTML="<br/>",d.setStart(b.body,0).setCursor()):(b.body.innerHTML="<p>"+(ie?"":"<br/>")+"</p>",d.setStart(b.body.firstChild,0).setCursor(!1,!0)),setTimeout(function(){b.fireEvent("clearDoc")},0)}},UE.plugin.register("anchor",function(){return{bindEvents:{ready:function(){utils.cssRule("anchor",".anchorclass{background: url('"+this.options.themePath+this.options.theme+"/images/anchor.gif') no-repeat scroll left center transparent;cursor: auto;display: inline-block;height: 16px;width: 15px;}",this.document)}},outputRule:function(a){utils.each(a.getNodesByTagName("img"),function(a){var b;(b=a.getAttr("anchorname"))&&(a.tagName="a",a.setAttr({anchorname:"",name:b,"class":""}))})},inputRule:function(a){utils.each(a.getNodesByTagName("a"),function(a){var b;(b=a.getAttr("name"))&&!a.getAttr("href")&&(a.tagName="img",a.setAttr({anchorname:a.getAttr("name"),"class":"anchorclass"}),a.setAttr("name"))})},commands:{anchor:{execCommand:function(a,b){var c=this.selection.getRange(),d=c.getClosedNode();if(d&&d.getAttribute("anchorname"))b?d.setAttribute("anchorname",b):(c.setStartBefore(d).setCursor(),domUtils.remove(d));else if(b){var e=this.document.createElement("img");c.collapse(!0),domUtils.setAttributes(e,{anchorname:b,"class":"anchorclass"}),c.insertNode(e).setStartAfter(e).setCursor(!1,!0)}}}}}}),UE.plugins.wordcount=function(){var a=this;a.setOpt("wordCount",!0),a.addListener("contentchange",function(){a.fireEvent("wordcount")});var b;a.addListener("ready",function(){var a=this;domUtils.on(a.body,"keyup",function(c){var d=c.keyCode||c.which,e={16:1,18:1,20:1,37:1,38:1,39:1,40:1};d in e||(clearTimeout(b),b=setTimeout(function(){a.fireEvent("wordcount")},200))})})},UE.plugins.pagebreak=function(){function a(a){if(domUtils.isEmptyBlock(a)){for(var b,d=a.firstChild;d&&1==d.nodeType&&domUtils.isEmptyBlock(d);)b=d,d=d.firstChild;!b&&(b=a),domUtils.fillNode(c.document,b)}}function b(a){return a&&1==a.nodeType&&"HR"==a.tagName&&"pagebreak"==a.className}var c=this,d=["td"];c.setOpt("pageBreakTag","_ueditor_page_break_tag_"),c.ready(function(){utils.cssRule("pagebreak",".pagebreak{display:block;clear:both !important;cursor:default !important;width: 100% !important;margin:0;}",c.document)}),c.addInputRule(function(a){a.traversal(function(a){if("text"==a.type&&a.data==c.options.pageBreakTag){var b=UE.uNode.createElement('<hr class="pagebreak" noshade="noshade" size="5" style="-webkit-user-select: none;">');a.parentNode.insertBefore(b,a),a.parentNode.removeChild(a)}})}),c.addOutputRule(function(a){utils.each(a.getNodesByTagName("hr"),function(a){if("pagebreak"==a.getAttr("class")){var b=UE.uNode.createText(c.options.pageBreakTag);a.parentNode.insertBefore(b,a),a.parentNode.removeChild(a)}})}),c.commands.pagebreak={execCommand:function(){var e=c.selection.getRange(),f=c.document.createElement("hr");domUtils.setAttributes(f,{"class":"pagebreak",noshade:"noshade",size:"5"}),domUtils.unSelectable(f);var g,h=domUtils.findParentByTagName(e.startContainer,d,!0),i=[];if(h)switch(h.tagName){case"TD":if(g=h.parentNode,g.previousSibling)g.parentNode.insertBefore(f,g),i=domUtils.findParents(f);else{var j=domUtils.findParentByTagName(g,"table");j.parentNode.insertBefore(f,j),i=domUtils.findParents(f,!0)}g=i[1],f!==g&&domUtils.breakParent(f,g),c.fireEvent("afteradjusttable",c.document)}else{if(!e.collapsed){e.deleteContents();for(var k=e.startContainer;!domUtils.isBody(k)&&domUtils.isBlockElm(k)&&domUtils.isEmptyNode(k);)e.setStartBefore(k).collapse(!0),domUtils.remove(k),k=e.startContainer}e.insertNode(f);for(var l,g=f.parentNode;!domUtils.isBody(g);)domUtils.breakParent(f,g),l=f.nextSibling,l&&domUtils.isEmptyBlock(l)&&domUtils.remove(l),g=f.parentNode;l=f.nextSibling;var m=f.previousSibling;if(b(m)?domUtils.remove(m):m&&a(m),l)b(l)?domUtils.remove(l):a(l),e.setEndAfter(f).collapse(!1);else{var n=c.document.createElement("p");f.parentNode.appendChild(n),domUtils.fillNode(c.document,n),e.setStart(n,0).collapse(!0)}e.select(!0)}}}},UE.plugin.register("wordimage",function(){var a=this,b=[];return{commands:{wordimage:{execCommand:function(){for(var b,c=domUtils.getElementsByTagName(a.body,"img"),d=[],e=0;b=c[e++];){var f=b.getAttribute("word_img");f&&d.push(f)}return d},queryCommandState:function(){b=domUtils.getElementsByTagName(a.body,"img");for(var c,d=0;c=b[d++];)if(c.getAttribute("word_img"))return 1;return-1},notNeedUndo:!0}},inputRule:function(b){utils.each(b.getNodesByTagName("img"),function(b){var c=b.attrs,d=parseInt(c.width)<128||parseInt(c.height)<43,e=a.options,f=e.UEDITOR_HOME_URL+"themes/default/images/spacer.gif";c.src&&/^(?:(file:\/+))/.test(c.src)&&b.setAttr({width:c.width,height:c.height,alt:c.alt,word_img:c.src,src:f,style:"background:url("+(d?e.themePath+e.theme+"/images/word.gif":e.langPath+e.lang+"/images/localimage.png")+") no-repeat center center;border:1px solid #ddd"})})}}}),UE.plugins.dragdrop=function(){var a=this;a.ready(function(){domUtils.on(this.body,"dragend",function(){var b=a.selection.getRange(),c=b.getClosedNode()||a.selection.getStart();if(c&&"IMG"==c.tagName){for(var d,e=c.previousSibling;(d=c.nextSibling)&&1==d.nodeType&&"SPAN"==d.tagName&&!d.firstChild;)domUtils.remove(d);(!e||1!=e.nodeType||domUtils.isEmptyBlock(e))&&e||d&&(!d||domUtils.isEmptyBlock(d))||(e&&"P"==e.tagName&&!domUtils.isEmptyBlock(e)?(e.appendChild(c),domUtils.moveChild(d,e),domUtils.remove(d)):d&&"P"==d.tagName&&!domUtils.isEmptyBlock(d)&&d.insertBefore(c,d.firstChild),e&&"P"==e.tagName&&domUtils.isEmptyBlock(e)&&domUtils.remove(e),d&&"P"==d.tagName&&domUtils.isEmptyBlock(d)&&domUtils.remove(d),b.selectNode(c).select(),a.fireEvent("saveScene"))}})}),a.addListener("keyup",function(b,c){var d=c.keyCode||c.which;if(13==d){var e,f=a.selection.getRange();(e=domUtils.findParentByTagName(f.startContainer,"p",!0))&&"center"==domUtils.getComputedStyle(e,"text-align")&&domUtils.removeStyle(e,"text-align")}})},UE.plugins.undo=function(){function a(a,b){if(a.length!=b.length)return 0;for(var c=0,d=a.length;c<d;c++)if(a[c]!=b[c])return 0;return 1}function b(b,c){return b.collapsed!=c.collapsed?0:a(b.startAddress,c.startAddress)&&a(b.endAddress,c.endAddress)?1:0}function c(){this.list=[],this.index=0,this.hasUndo=!1,this.hasRedo=!1,this.undo=function(){if(this.hasUndo){if(!this.list[this.index-1]&&1==this.list.length)return void this.reset();for(;this.list[this.index].content==this.list[this.index-1].content;)if(this.index--,0==this.index)return this.restore(0);this.restore(--this.index)}},this.redo=function(){if(this.hasRedo){for(;this.list[this.index].content==this.list[this.index+1].content;)if(this.index++,this.index==this.list.length-1)return this.restore(this.index);this.restore(++this.index)}},this.restore=function(){var a=this.editor,b=this.list[this.index],c=UE.htmlparser(b.content.replace(h,""));a.options.autoClearEmptyNode=!1,a.filterInputRule(c),a.options.autoClearEmptyNode=j,a.document.body.innerHTML=c.toHtml(),a.fireEvent("afterscencerestore"),browser.ie&&utils.each(domUtils.getElementsByTagName(a.document,"td th caption p"),function(b){domUtils.isEmptyNode(b)&&domUtils.fillNode(a.document,b)});try{var d=new dom.Range(a.document).moveToAddress(b.address);d.select(i[d.startContainer.nodeName.toLowerCase()])}catch(e){}this.update(),this.clearKey(),a.fireEvent("reset",!0)},this.getScene=function(){var a=this.editor,b=a.selection.getRange(),c=b.createAddress(!1,!0);a.fireEvent("beforegetscene");var d=UE.htmlparser(a.body.innerHTML);a.options.autoClearEmptyNode=!1,a.filterOutputRule(d),a.options.autoClearEmptyNode=j;var e=d.toHtml();return a.fireEvent("aftergetscene"),{address:c,content:e}},this.save=function(a,c){clearTimeout(d);var g=this.getScene(c),h=this.list[this.index];h&&h.content!=g.content&&e.trigger("contentchange"),h&&h.content==g.content&&(a?1:b(h.address,g.address))||(this.list=this.list.slice(0,this.index+1),this.list.push(g),this.list.length>f&&this.list.shift(),this.index=this.list.length-1,this.clearKey(),this.update())},this.update=function(){this.hasRedo=!!this.list[this.index+1],this.hasUndo=!!this.list[this.index-1]},this.reset=function(){this.list=[],this.index=0,this.hasUndo=!1,this.hasRedo=!1,this.clearKey()},this.clearKey=function(){m=0,k=null}}var d,e=this,f=e.options.maxUndoCount||20,g=e.options.maxInputCount||20,h=new RegExp(domUtils.fillChar+"|</hr>","gi"),i={ol:1,ul:1,table:1,tbody:1,tr:1,body:1},j=e.options.autoClearEmptyNode;e.undoManger=new c,e.undoManger.editor=e,e.addListener("saveScene",function(){var a=Array.prototype.splice.call(arguments,1);this.undoManger.save.apply(this.undoManger,a)}),e.addListener("reset",function(a,b){b||this.undoManger.reset()}),e.commands.redo=e.commands.undo={execCommand:function(a){this.undoManger[a]()},queryCommandState:function(a){return this.undoManger["has"+("undo"==a.toLowerCase()?"Undo":"Redo")]?0:-1},notNeedUndo:1};var k,l={16:1,17:1,18:1,37:1,38:1,39:1,40:1},m=0,n=!1;e.addListener("ready",function(){domUtils.on(this.body,"compositionstart",function(){n=!0}),domUtils.on(this.body,"compositionend",function(){n=!1})}),e.addshortcutkey({Undo:"ctrl+90",Redo:"ctrl+89"});var o=!0;e.addListener("keydown",function(a,b){function c(a){a.undoManger.save(!1,!0),a.fireEvent("selectionchange")}var e=this,f=b.keyCode||b.which;if(!(l[f]||b.ctrlKey||b.metaKey||b.shiftKey||b.altKey)){if(n)return;if(!e.selection.getRange().collapsed)return e.undoManger.save(!1,!0),void(o=!1);0==e.undoManger.list.length&&e.undoManger.save(!0),clearTimeout(d),d=setTimeout(function(){if(n)var a=setInterval(function(){n||(c(e),clearInterval(a))},300);else c(e)},200),k=f,m++,m>=g&&c(e)}}),e.addListener("keyup",function(a,b){var c=b.keyCode||b.which;if(!(l[c]||b.ctrlKey||b.metaKey||b.shiftKey||b.altKey)){if(n)return;o||(this.undoManger.save(!1,!0),o=!0)}}),e.stopCmdUndo=function(){e.__hasEnterExecCommand=!0},e.startCmdUndo=function(){e.__hasEnterExecCommand=!1}},UE.plugin.register("copy",function(){function a(){ZeroClipboard.config({debug:!1,swfPath:b.options.UEDITOR_HOME_URL+"third-party/zeroclipboard/ZeroClipboard.swf"});var a=b.zeroclipboard=new ZeroClipboard;a.on("copy",function(a){var c=a.client,d=b.selection.getRange(),e=document.createElement("div");e.appendChild(d.cloneContents()),c.setText(e.innerText||e.textContent),c.setHtml(e.innerHTML),d.select()}),a.on("mouseover mouseout",function(a){var b=a.target;"mouseover"==a.type?domUtils.addClass(b,"edui-state-hover"):"mouseout"==a.type&&domUtils.removeClasses(b,"edui-state-hover")}),a.on("wrongflash noflash",function(){ZeroClipboard.destroy()})}var b=this;return{bindEvents:{ready:function(){browser.ie||(window.ZeroClipboard?a():utils.loadFile(document,{src:b.options.UEDITOR_HOME_URL+"third-party/zeroclipboard/ZeroClipboard.js",tag:"script",type:"text/javascript",defer:"defer"},function(){a()}))}},commands:{copy:{execCommand:function(a){b.document.execCommand("copy")||alert(b.getLang("copymsg"))}}}}}),UE.plugins.paste=function(){function a(a){var b=this.document;if(!b.getElementById("baidu_pastebin")){var c=this.selection.getRange(),d=c.createBookmark(),e=b.createElement("div");e.id="baidu_pastebin",browser.webkit&&e.appendChild(b.createTextNode(domUtils.fillChar+domUtils.fillChar)),b.body.appendChild(e),d.start.style.display="",e.style.cssText="position:absolute;width:1px;height:1px;overflow:hidden;left:-1000px;white-space:nowrap;top:"+domUtils.getXY(d.start).y+"px",c.selectNodeContents(e).select(!0),setTimeout(function(){if(browser.webkit)for(var f,g=0,h=b.querySelectorAll("#baidu_pastebin");f=h[g++];){if(!domUtils.isEmptyNode(f)){e=f;break}domUtils.remove(f)}try{e.parentNode.removeChild(e)}catch(i){}c.moveToBookmark(d).select(!0),a(e)},0)}}function b(a){return a.replace(/<(\/?)([\w\-]+)([^>]*)>/gi,function(a,b,c,d){return c=c.toLowerCase(),{img:1}[c]?a:(d=d.replace(/([\w\-]*?)\s*=\s*(("([^"]*)")|('([^']*)')|([^\s>]+))/gi,function(a,b,c){return{src:1,href:1,name:1}[b.toLowerCase()]?b+"="+c+" ":""}),{span:1,div:1}[c]?"":"<"+b+c+" "+utils.trim(d)+">")})}function c(a){var c;if(a.firstChild){for(var h,i=domUtils.getElementsByTagName(a,"span"),j=0;h=i[j++];)"_baidu_cut_start"!=h.id&&"_baidu_cut_end"!=h.id||domUtils.remove(h);if(browser.webkit){for(var k,l=a.querySelectorAll("div br"),j=0;k=l[j++];){var m=k.parentNode;"DIV"==m.tagName&&1==m.childNodes.length&&(m.innerHTML="<p><br/></p>",domUtils.remove(m))}for(var n,o=a.querySelectorAll("#baidu_pastebin"),j=0;n=o[j++];){var p=d.document.createElement("p");for(n.parentNode.insertBefore(p,n);n.firstChild;)p.appendChild(n.firstChild);domUtils.remove(n)}for(var q,r=a.querySelectorAll("meta"),j=0;q=r[j++];)domUtils.remove(q);var l=a.querySelectorAll("br");for(j=0;q=l[j++];)/^apple-/i.test(q.className)&&domUtils.remove(q)}if(browser.gecko){var s=a.querySelectorAll("[_moz_dirty]");for(j=0;q=s[j++];)q.removeAttribute("_moz_dirty")}if(!browser.ie)for(var q,t=a.querySelectorAll("span.Apple-style-span"),j=0;q=t[j++];)domUtils.remove(q,!0);c=a.innerHTML,c=UE.filterWord(c);var u=UE.htmlparser(c);if(d.options.filterRules&&UE.filterNode(u,d.options.filterRules),d.filterInputRule(u),browser.webkit){var v=u.lastChild();v&&"element"==v.type&&"br"==v.tagName&&u.removeChild(v),utils.each(d.body.querySelectorAll("div"),function(a){domUtils.isEmptyBlock(a)&&domUtils.remove(a,!0)})}if(c={html:u.toHtml()},d.fireEvent("beforepaste",c,u),!c.html)return;u=UE.htmlparser(c.html,!0),1===d.queryCommandState("pasteplain")?d.execCommand("insertHtml",UE.filterNode(u,d.options.filterTxtRules).toHtml(),!0):(UE.filterNode(u,d.options.filterTxtRules),e=u.toHtml(),f=c.html,g=d.selection.getRange().createAddress(!0),d.execCommand("insertHtml",d.getOpt("retainOnlyLabelPasted")===!0?b(f):f,!0)),d.fireEvent("afterpaste",c)}}var d=this;d.setOpt({retainOnlyLabelPasted:!1});var e,f,g;d.addListener("pasteTransfer",function(a,c){if(g&&e&&f&&e!=f){var h=d.selection.getRange();if(h.moveToAddress(g,!0),!h.collapsed){for(;!domUtils.isBody(h.startContainer);){var i=h.startContainer;if(1==i.nodeType){if(i=i.childNodes[h.startOffset],!i){h.setStartBefore(h.startContainer);continue}var j=i.previousSibling;j&&3==j.nodeType&&new RegExp("^[\n\r\t "+domUtils.fillChar+"]*$").test(j.nodeValue)&&h.setStartBefore(j)}if(0!=h.startOffset)break;h.setStartBefore(h.startContainer)}for(;!domUtils.isBody(h.endContainer);){var k=h.endContainer;if(1==k.nodeType){if(k=k.childNodes[h.endOffset],!k){h.setEndAfter(h.endContainer);continue}var l=k.nextSibling;l&&3==l.nodeType&&new RegExp("^[\n\r\t"+domUtils.fillChar+"]*$").test(l.nodeValue)&&h.setEndAfter(l)}if(h.endOffset!=h.endContainer[3==h.endContainer.nodeType?"nodeValue":"childNodes"].length)break;h.setEndAfter(h.endContainer)}}h.deleteContents(),h.select(!0),d.__hasEnterExecCommand=!0;var m=f;2===c?m=b(m):c&&(m=e),d.execCommand("inserthtml",m,!0),d.__hasEnterExecCommand=!1;for(var n=d.selection.getRange();!domUtils.isBody(n.startContainer)&&!n.startOffset&&n.startContainer[3==n.startContainer.nodeType?"nodeValue":"childNodes"].length;)n.setStartBefore(n.startContainer);var o=n.createAddress(!0);g.endAddress=o.startAddress}}),d.addListener("ready",function(){domUtils.on(d.body,"cut",function(){var a=d.selection.getRange();!a.collapsed&&d.undoManger&&d.undoManger.save()}),domUtils.on(d.body,browser.ie||browser.opera?"keydown":"paste",function(b){(!browser.ie&&!browser.opera||(b.ctrlKey||b.metaKey)&&"86"==b.keyCode)&&a.call(d,function(a){c(a)})})}),d.commands.paste={execCommand:function(b){browser.ie?(a.call(d,function(a){c(a)}),d.document.execCommand("paste")):alert(d.getLang("pastemsg"))}}},UE.plugins.pasteplain=function(){var a=this;a.setOpt({pasteplain:!1,filterTxtRules:function(){function a(a){a.tagName="p",a.setStyle()}function b(a){a.parentNode.removeChild(a,!0)}return{"-":"script style object iframe embed input select",p:{$:{}},br:{$:{}},div:function(a){for(var b,c=UE.uNode.createElement("p");b=a.firstChild();)"text"!=b.type&&UE.dom.dtd.$block[b.tagName]?c.firstChild()?(a.parentNode.insertBefore(c,a),c=UE.uNode.createElement("p")):a.parentNode.insertBefore(b,a):c.appendChild(b);c.firstChild()&&a.parentNode.insertBefore(c,a),a.parentNode.removeChild(a)},ol:b,ul:b,dl:b,dt:b,dd:b,li:b,caption:a,th:a,tr:a,h1:a,h2:a,h3:a,h4:a,h5:a,h6:a,td:function(a){var b=!!a.innerText();b&&a.parentNode.insertAfter(UE.uNode.createText(" &nbsp; &nbsp;"),a),a.parentNode.removeChild(a,a.innerText())}}}()});var b=a.options.pasteplain;a.commands.pasteplain={queryCommandState:function(){return b?1:0},execCommand:function(){b=0|!b},notNeedUndo:1}},UE.plugins.list=function(){function a(a){var b=[];for(var c in a)b.push(c);return b}function b(a){var b=a.className;return domUtils.hasClass(a,/custom_/)?b.match(/custom_(\w+)/)[1]:domUtils.getStyle(a,"list-style-type")}function c(a,c){utils.each(domUtils.getElementsByTagName(a,"ol ul"),function(f){if(domUtils.inDoc(f,a)){var g=f.parentNode;if(g.tagName==f.tagName){var h=b(f)||("OL"==f.tagName?"decimal":"disc"),i=b(g)||("OL"==g.tagName?"decimal":"disc");if(h==i){var l=utils.indexOf(k[f.tagName],h);l=l+1==k[f.tagName].length?0:l+1,e(f,k[f.tagName][l])}}var m=0,n=2;domUtils.hasClass(f,/custom_/)?/[ou]l/i.test(g.tagName)&&domUtils.hasClass(g,/custom_/)||(n=1):/[ou]l/i.test(g.tagName)&&domUtils.hasClass(g,/custom_/)&&(n=3);var o=domUtils.getStyle(f,"list-style-type");o&&(f.style.cssText="list-style-type:"+o),f.className=utils.trim(f.className.replace(/list-paddingleft-\w+/,""))+" list-paddingleft-"+n,utils.each(domUtils.getElementsByTagName(f,"li"),function(a){if(a.style.cssText&&(a.style.cssText=""),!a.firstChild)return void domUtils.remove(a);if(a.parentNode===f){if(m++,domUtils.hasClass(f,/custom_/)){var c=1,d=b(f);if("OL"==f.tagName){if(d)switch(d){case"cn":case"cn1":case"cn2":m>10&&(m%10==0||m>10&&m<20)?c=2:m>20&&(c=3);break;case"num2":m>9&&(c=2)}a.className="list-"+j[d]+m+" list-"+d+"-paddingleft-"+c}else a.className="list-"+j[d]+" list-"+d+"-paddingleft"}else a.className=a.className.replace(/list-[\w\-]+/gi,"");var e=a.getAttribute("class");null===e||e.replace(/\s/g,"")||domUtils.removeAttributes(a,"class")}}),!c&&d(f,f.tagName.toLowerCase(),b(f)||domUtils.getStyle(f,"list-style-type"),!0)}})}function d(a,d,e,f){var g=a.nextSibling;g&&1==g.nodeType&&g.tagName.toLowerCase()==d&&(b(g)||domUtils.getStyle(g,"list-style-type")||("ol"==d?"decimal":"disc"))==e&&(domUtils.moveChild(g,a),0==g.childNodes.length&&domUtils.remove(g)),g&&domUtils.isFillChar(g)&&domUtils.remove(g);var h=a.previousSibling;h&&1==h.nodeType&&h.tagName.toLowerCase()==d&&(b(h)||domUtils.getStyle(h,"list-style-type")||("ol"==d?"decimal":"disc"))==e&&domUtils.moveChild(a,h),h&&domUtils.isFillChar(h)&&domUtils.remove(h),!f&&domUtils.isEmptyBlock(a)&&domUtils.remove(a),b(a)&&c(a.ownerDocument,!0)}function e(a,b){j[b]&&(a.className="custom_"+b);try{domUtils.setStyle(a,"list-style-type",b)}catch(c){}}function f(a){var b=a.previousSibling;b&&domUtils.isEmptyBlock(b)&&domUtils.remove(b),b=a.nextSibling,b&&domUtils.isEmptyBlock(b)&&domUtils.remove(b)}function g(a){for(;a&&!domUtils.isBody(a);){if("TABLE"==a.nodeName)return null;if("LI"==a.nodeName)return a;a=a.parentNode}}var h=this,i={TD:1,PRE:1,BLOCKQUOTE:1},j={cn:"cn-1-",cn1:"cn-2-",cn2:"cn-3-",num:"num-1-",num1:"num-2-",num2:"num-3-",dash:"dash",dot:"dot"};h.setOpt({autoTransWordToList:!1,insertorderedlist:{num:"",num1:"",num2:"",cn:"",cn1:"",cn2:"",decimal:"","lower-alpha":"","lower-roman":"","upper-alpha":"","upper-roman":""},insertunorderedlist:{circle:"",disc:"",square:"",dash:"",dot:""},listDefaultPaddingLeft:"30",listiconpath:"http://bs.baidu.com/listicon/",maxListLevel:-1,disablePInList:!1});var k={OL:a(h.options.insertorderedlist),UL:a(h.options.insertunorderedlist)},l=h.options.listiconpath;for(var m in j)h.options.insertorderedlist.hasOwnProperty(m)||h.options.insertunorderedlist.hasOwnProperty(m)||delete j[m];h.ready(function(){var a=[];for(var b in j){if("dash"==b||"dot"==b)a.push("li.list-"+j[b]+"{background-image:url("+l+j[b]+".gif)}"),a.push("ul.custom_"+b+"{list-style:none;}ul.custom_"+b+" li{background-position:0 3px;background-repeat:no-repeat}");else{for(var c=0;c<99;c++)a.push("li.list-"+j[b]+c+"{background-image:url("+l+"list-"+j[b]+c+".gif)}");a.push("ol.custom_"+b+"{list-style:none;}ol.custom_"+b+" li{background-position:0 3px;background-repeat:no-repeat}")}switch(b){case"cn":a.push("li.list-"+b+"-paddingleft-1{padding-left:25px}"),a.push("li.list-"+b+"-paddingleft-2{padding-left:40px}"),a.push("li.list-"+b+"-paddingleft-3{padding-left:55px}");break;case"cn1":a.push("li.list-"+b+"-paddingleft-1{padding-left:30px}"),a.push("li.list-"+b+"-paddingleft-2{padding-left:40px}"),a.push("li.list-"+b+"-paddingleft-3{padding-left:55px}");break;case"cn2":a.push("li.list-"+b+"-paddingleft-1{padding-left:40px}"),a.push("li.list-"+b+"-paddingleft-2{padding-left:55px}"),a.push("li.list-"+b+"-paddingleft-3{padding-left:68px}");break;case"num":case"num1":a.push("li.list-"+b+"-paddingleft-1{padding-left:25px}");break;case"num2":a.push("li.list-"+b+"-paddingleft-1{padding-left:35px}"),a.push("li.list-"+b+"-paddingleft-2{padding-left:40px}");break;case"dash":a.push("li.list-"+b+"-paddingleft{padding-left:35px}");break;case"dot":a.push("li.list-"+b+"-paddingleft{padding-left:20px}")}}a.push(".list-paddingleft-1{padding-left:0}"),a.push(".list-paddingleft-2{padding-left:"+h.options.listDefaultPaddingLeft+"px}"),a.push(".list-paddingleft-3{padding-left:"+2*h.options.listDefaultPaddingLeft+"px}"),utils.cssRule("list","ol,ul{margin:0;pading:0;"+(browser.ie?"":"width:95%")+"}li{clear:both;}"+a.join("\n"),h.document)}),h.ready(function(){domUtils.on(h.body,"cut",function(){setTimeout(function(){var a,b=h.selection.getRange();if(!b.collapsed&&(a=domUtils.findParentByTagName(b.startContainer,"li",!0))&&!a.nextSibling&&domUtils.isEmptyBlock(a)){var c,d=a.parentNode;if(c=d.previousSibling)domUtils.remove(d),b.setStartAtLast(c).collapse(!0),b.select(!0);else if(c=d.nextSibling)domUtils.remove(d),b.setStartAtFirst(c).collapse(!0),b.select(!0);else{var e=h.document.createElement("p");domUtils.fillNode(h.document,e),d.parentNode.insertBefore(e,d),domUtils.remove(d),b.setStart(e,0).collapse(!0),b.select(!0)}}})})}),h.addListener("beforepaste",function(a,c){var d,e=this,f=e.selection.getRange(),g=UE.htmlparser(c.html,!0);if(d=domUtils.findParentByTagName(f.startContainer,"li",!0)){var h=d.parentNode,i="OL"==h.tagName?"ul":"ol";utils.each(g.getNodesByTagName(i),function(c){if(c.tagName=h.tagName,c.setAttr(),c.parentNode===g)a=b(h)||("OL"==h.tagName?"decimal":"disc");else{var d=c.parentNode.getAttr("class");a=d&&/custom_/.test(d)?d.match(/custom_(\w+)/)[1]:c.parentNode.getStyle("list-style-type"),a||(a="OL"==h.tagName?"decimal":"disc")}var e=utils.indexOf(k[h.tagName],a);c.parentNode!==g&&(e=e+1==k[h.tagName].length?0:e+1);var f=k[h.tagName][e];j[f]?c.setAttr("class","custom_"+f):c.setStyle("list-style-type",f)})}c.html=g.toHtml()}),h.getOpt("disablePInList")===!0&&h.addOutputRule(function(a){utils.each(a.getNodesByTagName("li"),function(a){var b=[],c=0;utils.each(a.children,function(d){if("p"==d.tagName){for(var e;e=d.children.pop();)b.splice(c,0,e),e.parentNode=a,lastNode=e;if(e=b[b.length-1],!e||"element"!=e.type||"br"!=e.tagName){var f=UE.uNode.createElement("br");f.parentNode=a,b.push(f)}c=b.length}}),b.length&&(a.children=b)})}),h.addInputRule(function(a){function b(a,b){var e=b.firstChild();if(e&&"element"==e.type&&"span"==e.tagName&&/Wingdings|Symbol/.test(e.getStyle("font-family"))){for(var f in d)if(d[f]==e.data)return f;return"disc"}for(var f in c)if(c[f].test(a))return f}if(utils.each(a.getNodesByTagName("li"),function(a){for(var b,c=UE.uNode.createElement("p"),d=0;b=a.children[d];)"text"==b.type||dtd.p[b.tagName]?c.appendChild(b):c.firstChild()?(a.insertBefore(c,b),c=UE.uNode.createElement("p"),d+=2):d++;(c.firstChild()&&!c.parentNode||!a.firstChild())&&a.appendChild(c),c.firstChild()||c.innerHTML(browser.ie?"&nbsp;":"<br/>");var e=a.firstChild(),f=e.lastChild();f&&"text"==f.type&&/^\s*$/.test(f.data)&&e.removeChild(f)}),h.options.autoTransWordToList){var c={num1:/^\d+\)/,decimal:/^\d+\./,"lower-alpha":/^[a-z]+\)/,"upper-alpha":/^[A-Z]+\./,cn:/^[\u4E00\u4E8C\u4E09\u56DB\u516d\u4e94\u4e03\u516b\u4e5d]+[\u3001]/,cn2:/^\([\u4E00\u4E8C\u4E09\u56DB\u516d\u4e94\u4e03\u516b\u4e5d]+\)/},d={square:"n"};utils.each(a.getNodesByTagName("p"),function(a){function d(a,b,d){if("ol"==a.tagName)if(browser.ie){var e=b.firstChild();"element"==e.type&&"span"==e.tagName&&c[d].test(e.innerText())&&b.removeChild(e)}else b.innerHTML(b.innerHTML().replace(c[d],""));else b.removeChild(b.firstChild());var f=UE.uNode.createElement("li");f.appendChild(b),a.appendChild(f)}if("MsoListParagraph"==a.getAttr("class")){a.setStyle("margin",""),a.setStyle("margin-left",""),a.setAttr("class","");var e,f=a,g=a;if("li"!=a.parentNode.tagName&&(e=b(a.innerText(),a))){var i=UE.uNode.createElement(h.options.insertorderedlist.hasOwnProperty(e)?"ol":"ul");for(j[e]?i.setAttr("class","custom_"+e):i.setStyle("list-style-type",e);a&&"li"!=a.parentNode.tagName&&b(a.innerText(),a);)f=a.nextSibling(),f||a.parentNode.insertBefore(i,a),d(i,a,e),a=f;!i.parentNode&&a&&a.parentNode&&a.parentNode.insertBefore(i,a)}var k=g.firstChild();k&&"element"==k.type&&"span"==k.tagName&&/^\s*(&nbsp;)+\s*$/.test(k.innerText())&&k.parentNode.removeChild(k)}})}}),h.addListener("contentchange",function(){c(h.document)}),h.addListener("keydown",function(a,b){function c(){b.preventDefault?b.preventDefault():b.returnValue=!1,h.fireEvent("contentchange"),h.undoManger&&h.undoManger.save()}function d(a,b){for(;a&&!domUtils.isBody(a);){if(b(a))return null;if(1==a.nodeType&&/[ou]l/i.test(a.tagName))return a;a=a.parentNode}return null}var e=b.keyCode||b.which;if(13==e&&!b.shiftKey){var g=h.selection.getRange(),i=domUtils.findParent(g.startContainer,function(a){return domUtils.isBlockElm(a)},!0),j=domUtils.findParentByTagName(g.startContainer,"li",!0);if(i&&"PRE"!=i.tagName&&!j){var k=i.innerHTML.replace(new RegExp(domUtils.fillChar,"g"),"");/^\s*1\s*\.[^\d]/.test(k)&&(i.innerHTML=k.replace(/^\s*1\s*\./,""),g.setStartAtLast(i).collapse(!0).select(),h.__hasEnterExecCommand=!0,h.execCommand("insertorderedlist"),h.__hasEnterExecCommand=!1)}var l=h.selection.getRange(),m=d(l.startContainer,function(a){return"TABLE"==a.tagName}),n=l.collapsed?m:d(l.endContainer,function(a){return"TABLE"==a.tagName});if(m&&n&&m===n){if(!l.collapsed){if(m=domUtils.findParentByTagName(l.startContainer,"li",!0),n=domUtils.findParentByTagName(l.endContainer,"li",!0),!m||!n||m!==n){var o=l.cloneRange(),p=o.collapse(!1).createBookmark();l.deleteContents(),o.moveToBookmark(p);var j=domUtils.findParentByTagName(o.startContainer,"li",!0);return f(j),o.select(),void c()}if(l.deleteContents(),j=domUtils.findParentByTagName(l.startContainer,"li",!0),j&&domUtils.isEmptyBlock(j))return v=j.previousSibling,next=j.nextSibling,s=h.document.createElement("p"),domUtils.fillNode(h.document,s),q=j.parentNode,v&&next?(l.setStart(next,0).collapse(!0).select(!0),domUtils.remove(j)):((v||next)&&v?j.parentNode.parentNode.insertBefore(s,q.nextSibling):q.parentNode.insertBefore(s,q),domUtils.remove(j),q.firstChild||domUtils.remove(q),l.setStart(s,0).setCursor()),void c()}if(j=domUtils.findParentByTagName(l.startContainer,"li",!0)){
if(domUtils.isEmptyBlock(j)){p=l.createBookmark();var q=j.parentNode;if(j!==q.lastChild?(domUtils.breakParent(j,q),f(j)):(q.parentNode.insertBefore(j,q.nextSibling),domUtils.isEmptyNode(q)&&domUtils.remove(q)),!dtd.$list[j.parentNode.tagName])if(domUtils.isBlockElm(j.firstChild))domUtils.remove(j,!0);else{for(s=h.document.createElement("p"),j.parentNode.insertBefore(s,j);j.firstChild;)s.appendChild(j.firstChild);domUtils.remove(j)}l.moveToBookmark(p).select()}else{var r=j.firstChild;if(!r||!domUtils.isBlockElm(r)){var s=h.document.createElement("p");for(!j.firstChild&&domUtils.fillNode(h.document,s);j.firstChild;)s.appendChild(j.firstChild);j.appendChild(s),r=s}var t=h.document.createElement("span");l.insertNode(t),domUtils.breakParent(t,j);var u=t.nextSibling;r=u.firstChild,r||(s=h.document.createElement("p"),domUtils.fillNode(h.document,s),u.appendChild(s),r=s),domUtils.isEmptyNode(r)&&(r.innerHTML="",domUtils.fillNode(h.document,r)),l.setStart(r,0).collapse(!0).shrinkBoundary().select(),domUtils.remove(t);var v=u.previousSibling;v&&domUtils.isEmptyBlock(v)&&(v.innerHTML="<p></p>",domUtils.fillNode(h.document,v.firstChild))}c()}}}if(8==e&&(l=h.selection.getRange(),l.collapsed&&domUtils.isStartInblock(l)&&(o=l.cloneRange().trimBoundary(),j=domUtils.findParentByTagName(l.startContainer,"li",!0),j&&domUtils.isStartInblock(o)))){if(m=domUtils.findParentByTagName(l.startContainer,"p",!0),m&&m!==j.firstChild){var q=domUtils.findParentByTagName(m,["ol","ul"]);return domUtils.breakParent(m,q),f(m),h.fireEvent("contentchange"),l.setStart(m,0).setCursor(!1,!0),h.fireEvent("saveScene"),void domUtils.preventDefault(b)}if(j&&(v=j.previousSibling)){if(46==e&&j.childNodes.length)return;if(dtd.$list[v.tagName]&&(v=v.lastChild),h.undoManger&&h.undoManger.save(),r=j.firstChild,domUtils.isBlockElm(r))if(domUtils.isEmptyNode(r))for(v.appendChild(r),l.setStart(r,0).setCursor(!1,!0);j.firstChild;)v.appendChild(j.firstChild);else t=h.document.createElement("span"),l.insertNode(t),domUtils.isEmptyBlock(v)&&(v.innerHTML=""),domUtils.moveChild(j,v),l.setStartBefore(t).collapse(!0).select(!0),domUtils.remove(t);else if(domUtils.isEmptyNode(j)){var s=h.document.createElement("p");v.appendChild(s),l.setStart(s,0).setCursor()}else for(l.setEnd(v,v.childNodes.length).collapse().select(!0);j.firstChild;)v.appendChild(j.firstChild);return domUtils.remove(j),h.fireEvent("contentchange"),h.fireEvent("saveScene"),void domUtils.preventDefault(b)}if(j&&!j.previousSibling){var q=j.parentNode,p=l.createBookmark();if(domUtils.isTagNode(q.parentNode,"ol ul"))q.parentNode.insertBefore(j,q),domUtils.isEmptyNode(q)&&domUtils.remove(q);else{for(;j.firstChild;)q.parentNode.insertBefore(j.firstChild,q);domUtils.remove(j),domUtils.isEmptyNode(q)&&domUtils.remove(q)}return l.moveToBookmark(p).setCursor(!1,!0),h.fireEvent("contentchange"),h.fireEvent("saveScene"),void domUtils.preventDefault(b)}}}),h.addListener("keyup",function(a,c){var e=c.keyCode||c.which;if(8==e){var f,g=h.selection.getRange();(f=domUtils.findParentByTagName(g.startContainer,["ol","ul"],!0))&&d(f,f.tagName.toLowerCase(),b(f)||domUtils.getComputedStyle(f,"list-style-type"),!0)}}),h.addListener("tabkeydown",function(){function a(a){if(h.options.maxListLevel!=-1){for(var b=a.parentNode,c=0;/[ou]l/i.test(b.tagName);)c++,b=b.parentNode;if(c>=h.options.maxListLevel)return!0}}var c=h.selection.getRange(),f=domUtils.findParentByTagName(c.startContainer,"li",!0);if(f){var g;if(!c.collapsed){h.fireEvent("saveScene"),g=c.createBookmark();for(var i,j,l=0,m=domUtils.findParents(f);j=m[l++];)if(domUtils.isTagNode(j,"ol ul")){i=j;break}var n=f;if(g.end)for(;n&&!(domUtils.getPosition(n,g.end)&domUtils.POSITION_FOLLOWING);)if(a(n))n=domUtils.getNextDomNode(n,!1,null,function(a){return a!==i});else{var o=n.parentNode,p=h.document.createElement(o.tagName),q=utils.indexOf(k[p.tagName],b(o)||domUtils.getComputedStyle(o,"list-style-type")),r=q+1==k[p.tagName].length?0:q+1,s=k[p.tagName][r];for(e(p,s),o.insertBefore(p,n);n&&!(domUtils.getPosition(n,g.end)&domUtils.POSITION_FOLLOWING);){if(f=n.nextSibling,p.appendChild(n),!f||domUtils.isTagNode(f,"ol ul")){if(f)for(;(f=f.firstChild)&&"LI"!=f.tagName;);else f=domUtils.getNextDomNode(n,!1,null,function(a){return a!==i});break}n=f}d(p,p.tagName.toLowerCase(),s),n=f}return h.fireEvent("contentchange"),c.moveToBookmark(g).select(),!0}if(a(f))return!0;var o=f.parentNode,p=h.document.createElement(o.tagName),q=utils.indexOf(k[p.tagName],b(o)||domUtils.getComputedStyle(o,"list-style-type"));q=q+1==k[p.tagName].length?0:q+1;var s=k[p.tagName][q];if(e(p,s),domUtils.isStartInblock(c))return h.fireEvent("saveScene"),g=c.createBookmark(),o.insertBefore(p,f),p.appendChild(f),d(p,p.tagName.toLowerCase(),s),h.fireEvent("contentchange"),c.moveToBookmark(g).select(!0),!0}}),h.commands.insertorderedlist=h.commands.insertunorderedlist={execCommand:function(a,c){c||(c="insertorderedlist"==a.toLowerCase()?"decimal":"disc");var f=this,h=this.selection.getRange(),j=function(a){return 1==a.nodeType?"br"!=a.tagName.toLowerCase():!domUtils.isWhitespace(a)},k="insertorderedlist"==a.toLowerCase()?"ol":"ul",l=f.document.createDocumentFragment();h.adjustmentBoundary().shrinkBoundary();var m,n,o,p,q=h.createBookmark(!0),r=g(f.document.getElementById(q.start)),s=0,t=g(f.document.getElementById(q.end)),u=0;if(r||t){if(r&&(m=r.parentNode),q.end||(t=r),t&&(n=t.parentNode),m===n){for(;r!==t;){if(p=r,r=r.nextSibling,!domUtils.isBlockElm(p.firstChild)){for(var v=f.document.createElement("p");p.firstChild;)v.appendChild(p.firstChild);p.appendChild(v)}l.appendChild(p)}if(p=f.document.createElement("span"),m.insertBefore(p,t),!domUtils.isBlockElm(t.firstChild)){for(v=f.document.createElement("p");t.firstChild;)v.appendChild(t.firstChild);t.appendChild(v)}l.appendChild(t),domUtils.breakParent(p,m),domUtils.isEmptyNode(p.previousSibling)&&domUtils.remove(p.previousSibling),domUtils.isEmptyNode(p.nextSibling)&&domUtils.remove(p.nextSibling);var w=b(m)||domUtils.getComputedStyle(m,"list-style-type")||("insertorderedlist"==a.toLowerCase()?"decimal":"disc");if(m.tagName.toLowerCase()==k&&w==c){for(var x,y=0,z=f.document.createDocumentFragment();x=l.firstChild;)if(domUtils.isTagNode(x,"ol ul"))z.appendChild(x);else for(;x.firstChild;)z.appendChild(x.firstChild),domUtils.remove(x);p.parentNode.insertBefore(z,p)}else o=f.document.createElement(k),e(o,c),o.appendChild(l),p.parentNode.insertBefore(o,p);return domUtils.remove(p),o&&d(o,k,c),void h.moveToBookmark(q).select()}if(r){for(;r;){if(p=r.nextSibling,domUtils.isTagNode(r,"ol ul"))l.appendChild(r);else{for(var A=f.document.createDocumentFragment(),B=0;r.firstChild;)domUtils.isBlockElm(r.firstChild)&&(B=1),A.appendChild(r.firstChild);if(B)l.appendChild(A);else{var C=f.document.createElement("p");C.appendChild(A),l.appendChild(C)}domUtils.remove(r)}r=p}m.parentNode.insertBefore(l,m.nextSibling),domUtils.isEmptyNode(m)?(h.setStartBefore(m),domUtils.remove(m)):h.setStartAfter(m),s=1}if(t&&domUtils.inDoc(n,f.document)){for(r=n.firstChild;r&&r!==t;){if(p=r.nextSibling,domUtils.isTagNode(r,"ol ul"))l.appendChild(r);else{for(A=f.document.createDocumentFragment(),B=0;r.firstChild;)domUtils.isBlockElm(r.firstChild)&&(B=1),A.appendChild(r.firstChild);B?l.appendChild(A):(C=f.document.createElement("p"),C.appendChild(A),l.appendChild(C)),domUtils.remove(r)}r=p}var D=domUtils.createElement(f.document,"div",{tmpDiv:1});domUtils.moveChild(t,D),l.appendChild(D),domUtils.remove(t),n.parentNode.insertBefore(l,n),h.setEndBefore(n),domUtils.isEmptyNode(n)&&domUtils.remove(n),u=1}}s||h.setStartBefore(f.document.getElementById(q.start)),q.end&&!u&&h.setEndAfter(f.document.getElementById(q.end)),h.enlarge(!0,function(a){return i[a.tagName]}),l=f.document.createDocumentFragment();for(var E,F=h.createBookmark(),G=domUtils.getNextDomNode(F.start,!1,j),H=h.cloneRange(),I=domUtils.isBlockElm;G&&G!==F.end&&domUtils.getPosition(G,F.end)&domUtils.POSITION_PRECEDING;)if(3==G.nodeType||dtd.li[G.tagName]){if(1==G.nodeType&&dtd.$list[G.tagName]){for(;G.firstChild;)l.appendChild(G.firstChild);E=domUtils.getNextDomNode(G,!1,j),domUtils.remove(G),G=E;continue}for(E=G,H.setStartBefore(G);G&&G!==F.end&&(!I(G)||domUtils.isBookmarkNode(G));)E=G,G=domUtils.getNextDomNode(G,!1,null,function(a){return!i[a.tagName]});G&&I(G)&&(p=domUtils.getNextDomNode(E,!1,j),p&&domUtils.isBookmarkNode(p)&&(G=domUtils.getNextDomNode(p,!1,j),E=p)),H.setEndAfter(E),G=domUtils.getNextDomNode(E,!1,j);var J=h.document.createElement("li");if(J.appendChild(H.extractContents()),domUtils.isEmptyNode(J)){for(var E=h.document.createElement("p");J.firstChild;)E.appendChild(J.firstChild);J.appendChild(E)}l.appendChild(J)}else G=domUtils.getNextDomNode(G,!0,j);h.moveToBookmark(F).collapse(!0),o=f.document.createElement(k),e(o,c),o.appendChild(l),h.insertNode(o),d(o,k,c);for(var x,y=0,K=domUtils.getElementsByTagName(o,"div");x=K[y++];)x.getAttribute("tmpDiv")&&domUtils.remove(x,!0);h.moveToBookmark(q).select()},queryCommandState:function(a){for(var b,c="insertorderedlist"==a.toLowerCase()?"ol":"ul",d=this.selection.getStartElementPath(),e=0;b=d[e++];){if("TABLE"==b.nodeName)return 0;if(c==b.nodeName.toLowerCase())return 1}return 0},queryCommandValue:function(a){for(var c,d,e="insertorderedlist"==a.toLowerCase()?"ol":"ul",f=this.selection.getStartElementPath(),g=0;d=f[g++];){if("TABLE"==d.nodeName){c=null;break}if(e==d.nodeName.toLowerCase()){c=d;break}}return c?b(c)||domUtils.getComputedStyle(c,"list-style-type"):null}}},function(){var a={textarea:function(a,b){var c=b.ownerDocument.createElement("textarea");return c.style.cssText="position:absolute;resize:none;width:100%;height:100%;border:0;padding:0;margin:0;overflow-y:auto;",browser.ie&&browser.version<8&&(c.style.width=b.offsetWidth+"px",c.style.height=b.offsetHeight+"px",b.onresize=function(){c.style.width=b.offsetWidth+"px",c.style.height=b.offsetHeight+"px"}),b.appendChild(c),{setContent:function(a){c.value=a},getContent:function(){return c.value},select:function(){var a;browser.ie?(a=c.createTextRange(),a.collapse(!0),a.select()):(c.setSelectionRange(0,0),c.focus())},dispose:function(){b.removeChild(c),b.onresize=null,c=null,b=null}}},codemirror:function(a,b){var c=window.CodeMirror(b,{mode:"text/html",tabMode:"indent",lineNumbers:!0,lineWrapping:!0}),d=c.getWrapperElement();return d.style.cssText='position:absolute;left:0;top:0;width:100%;height:100%;font-family:consolas,"Courier new",monospace;font-size:13px;',c.getScrollerElement().style.cssText="position:absolute;left:0;top:0;width:100%;height:100%;",c.refresh(),{getCodeMirror:function(){return c},setContent:function(a){c.setValue(a)},getContent:function(){return c.getValue()},select:function(){c.focus()},dispose:function(){b.removeChild(d),d=null,c=null}}}};UE.plugins.source=function(){function b(b){return a["codemirror"==f.sourceEditor&&window.CodeMirror?"codemirror":"textarea"](e,b)}var c,d,e=this,f=this.options,g=!1;f.sourceEditor=browser.ie?"textarea":f.sourceEditor||"codemirror",e.setOpt({sourceEditorFirst:!1});var h,i,j;e.commands.source={execCommand:function(){if(g=!g){j=e.selection.getRange().createAddress(!1,!0),e.undoManger&&e.undoManger.save(!0),browser.gecko&&(e.body.contentEditable=!1),h=e.iframe.style.cssText,e.iframe.style.cssText+="position:absolute;left:-32768px;top:-32768px;",e.fireEvent("beforegetcontent");var a=UE.htmlparser(e.body.innerHTML);e.filterOutputRule(a),a.traversal(function(a){if("element"==a.type)switch(a.tagName){case"td":case"th":case"caption":a.children&&1==a.children.length&&"br"==a.firstChild().tagName&&a.removeChild(a.firstChild());break;case"pre":a.innerText(a.innerText().replace(/&nbsp;/g," "))}}),e.fireEvent("aftergetcontent");var f=a.toHtml(!0);c=b(e.iframe.parentNode),c.setContent(f),d=e.setContent,e.setContent=function(a){var b=UE.htmlparser(a);e.filterInputRule(b),a=b.toHtml(),c.setContent(a)},setTimeout(function(){c.select(),e.addListener("fullscreenchanged",function(){try{c.getCodeMirror().refresh()}catch(a){}})}),i=e.getContent,e.getContent=function(){return c.getContent()||"<p>"+(browser.ie?"":"<br/>")+"</p>"}}else{e.iframe.style.cssText=h;var k=c.getContent()||"<p>"+(browser.ie?"":"<br/>")+"</p>";k=k.replace(new RegExp("[\\r\\t\\n ]*</?(\\w+)\\s*(?:[^>]*)>","g"),function(a,b){return b&&!dtd.$inlineWithA[b.toLowerCase()]?a.replace(/(^[\n\r\t ]*)|([\n\r\t ]*$)/g,""):a.replace(/(^[\n\r\t]*)|([\n\r\t]*$)/g,"")}),e.setContent=d,e.setContent(k),c.dispose(),c=null,e.getContent=i;var l=e.body.firstChild;if(l||(e.body.innerHTML="<p>"+(browser.ie?"":"<br/>")+"</p>",l=e.body.firstChild),e.undoManger&&e.undoManger.save(!0),browser.gecko){var m=document.createElement("input");m.style.cssText="position:absolute;left:0;top:-32768px",document.body.appendChild(m),e.body.contentEditable=!1,setTimeout(function(){domUtils.setViewportOffset(m,{left:-32768,top:0}),m.focus(),setTimeout(function(){e.body.contentEditable=!0,e.selection.getRange().moveToAddress(j).select(!0),domUtils.remove(m)})})}else try{e.selection.getRange().moveToAddress(j).select(!0)}catch(n){}}this.fireEvent("sourcemodechanged",g)},queryCommandState:function(){return 0|g},notNeedUndo:1};var k=e.queryCommandState;e.queryCommandState=function(a){return a=a.toLowerCase(),g?a in{source:1,fullscreen:1}?1:-1:k.apply(this,arguments)},"codemirror"==f.sourceEditor&&e.addListener("ready",function(){utils.loadFile(document,{src:f.codeMirrorJsUrl||f.UEDITOR_HOME_URL+"third-party/codemirror/codemirror.js",tag:"script",type:"text/javascript",defer:"defer"},function(){f.sourceEditorFirst&&setTimeout(function(){e.execCommand("source")},0)}),utils.loadFile(document,{tag:"link",rel:"stylesheet",type:"text/css",href:f.codeMirrorCssUrl||f.UEDITOR_HOME_URL+"third-party/codemirror/codemirror.css"})})}}(),UE.plugins.enterkey=function(){var a,b=this,c=b.options.enterTag;b.addListener("keyup",function(c,d){var e=d.keyCode||d.which;if(13==e){var f,g=b.selection.getRange(),h=g.startContainer;if(browser.ie)b.fireEvent("saveScene",!0,!0);else{if(/h\d/i.test(a)){if(browser.gecko){var i=domUtils.findParentByTagName(h,["h1","h2","h3","h4","h5","h6","blockquote","caption","table"],!0);i||(b.document.execCommand("formatBlock",!1,"<p>"),f=1)}else if(1==h.nodeType){var j,k=b.document.createTextNode("");if(g.insertNode(k),j=domUtils.findParentByTagName(k,"div",!0)){for(var l=b.document.createElement("p");j.firstChild;)l.appendChild(j.firstChild);j.parentNode.insertBefore(l,j),domUtils.remove(j),g.setStartBefore(k).setCursor(),f=1}domUtils.remove(k)}b.undoManger&&f&&b.undoManger.save()}browser.opera&&g.select()}}}),b.addListener("keydown",function(d,e){var f=e.keyCode||e.which;if(13==f){if(b.fireEvent("beforeenterkeydown"))return void domUtils.preventDefault(e);b.fireEvent("saveScene",!0,!0),a="";var g=b.selection.getRange();if(!g.collapsed){var h=g.startContainer,i=g.endContainer,j=domUtils.findParentByTagName(h,"td",!0),k=domUtils.findParentByTagName(i,"td",!0);if(j&&k&&j!==k||!j&&k||j&&!k)return void(e.preventDefault?e.preventDefault():e.returnValue=!1)}if("p"==c)browser.ie||(h=domUtils.findParentByTagName(g.startContainer,["ol","ul","p","h1","h2","h3","h4","h5","h6","blockquote","caption"],!0),h||browser.opera?(a=h.tagName,"p"==h.tagName.toLowerCase()&&browser.gecko&&domUtils.removeDirtyAttr(h)):(b.document.execCommand("formatBlock",!1,"<p>"),browser.gecko&&(g=b.selection.getRange(),h=domUtils.findParentByTagName(g.startContainer,"p",!0),h&&domUtils.removeDirtyAttr(h))));else if(e.preventDefault?e.preventDefault():e.returnValue=!1,g.collapsed){m=g.document.createElement("br"),g.insertNode(m);var l=m.parentNode;l.lastChild===m?(m.parentNode.insertBefore(m.cloneNode(!0),m),g.setStartBefore(m)):g.setStartAfter(m),g.setCursor()}else if(g.deleteContents(),h=g.startContainer,1==h.nodeType&&(h=h.childNodes[g.startOffset])){for(;1==h.nodeType;){if(dtd.$empty[h.tagName])return g.setStartBefore(h).setCursor(),b.undoManger&&b.undoManger.save(),!1;if(!h.firstChild){var m=g.document.createElement("br");return h.appendChild(m),g.setStart(h,0).setCursor(),b.undoManger&&b.undoManger.save(),!1}h=h.firstChild}h===g.startContainer.childNodes[g.startOffset]?(m=g.document.createElement("br"),g.insertNode(m).setCursor()):g.setStart(h,0).setCursor()}else m=g.document.createElement("br"),g.insertNode(m).setStartAfter(m).setCursor()}})},UE.plugins.keystrokes=function(){var a=this,b=!0;a.addListener("keydown",function(c,d){var e=d.keyCode||d.which,f=a.selection.getRange();if(!f.collapsed&&!(d.ctrlKey||d.shiftKey||d.altKey||d.metaKey)&&(e>=65&&e<=90||e>=48&&e<=57||e>=96&&e<=111||{13:1,8:1,46:1}[e])){var g=f.startContainer;if(domUtils.isFillChar(g)&&f.setStartBefore(g),g=f.endContainer,domUtils.isFillChar(g)&&f.setEndAfter(g),f.txtToElmBoundary(),f.endContainer&&1==f.endContainer.nodeType&&(g=f.endContainer.childNodes[f.endOffset],g&&domUtils.isBr(g)&&f.setEndAfter(g)),0==f.startOffset&&(g=f.startContainer,domUtils.isBoundaryNode(g,"firstChild")&&(g=f.endContainer,f.endOffset==(3==g.nodeType?g.nodeValue.length:g.childNodes.length)&&domUtils.isBoundaryNode(g,"lastChild"))))return a.fireEvent("saveScene"),a.body.innerHTML="<p>"+(browser.ie?"":"<br/>")+"</p>",f.setStart(a.body.firstChild,0).setCursor(!1,!0),void a._selectionChange()}if(e==keymap.Backspace){if(f=a.selection.getRange(),b=f.collapsed,a.fireEvent("delkeydown",d))return;var h,i;if(f.collapsed&&f.inFillChar()&&(h=f.startContainer,domUtils.isFillChar(h)?(f.setStartBefore(h).shrinkBoundary(!0).collapse(!0),domUtils.remove(h)):(h.nodeValue=h.nodeValue.replace(new RegExp("^"+domUtils.fillChar),""),f.startOffset--,f.collapse(!0).select(!0))),h=f.getClosedNode())return a.fireEvent("saveScene"),f.setStartBefore(h),domUtils.remove(h),f.setCursor(),a.fireEvent("saveScene"),void domUtils.preventDefault(d);if(!browser.ie&&(h=domUtils.findParentByTagName(f.startContainer,"table",!0),i=domUtils.findParentByTagName(f.endContainer,"table",!0),h&&!i||!h&&i||h!==i))return void d.preventDefault()}if(e==keymap.Tab){var j={ol:1,ul:1,table:1};if(a.fireEvent("tabkeydown",d))return void domUtils.preventDefault(d);var k=a.selection.getRange();a.fireEvent("saveScene");for(var l=0,m="",n=a.options.tabSize||4,o=a.options.tabNode||"&nbsp;";l<n;l++)m+=o;var p=a.document.createElement("span");if(p.innerHTML=m+domUtils.fillChar,k.collapsed)k.insertNode(p.cloneNode(!0).firstChild).setCursor(!0);else{var q=function(a){return domUtils.isBlockElm(a)&&!j[a.tagName.toLowerCase()]};if(h=domUtils.findParent(k.startContainer,q,!0),i=domUtils.findParent(k.endContainer,q,!0),h&&i&&h===i)k.deleteContents(),k.insertNode(p.cloneNode(!0).firstChild).setCursor(!0);else{var r=k.createBookmark();k.enlarge(!0);for(var s=k.createBookmark(),t=domUtils.getNextDomNode(s.start,!1,q);t&&!(domUtils.getPosition(t,s.end)&domUtils.POSITION_FOLLOWING);)t.insertBefore(p.cloneNode(!0).firstChild,t.firstChild),t=domUtils.getNextDomNode(t,!1,q);k.moveToBookmark(s).moveToBookmark(r).select()}}domUtils.preventDefault(d)}if(browser.gecko&&46==e&&(k=a.selection.getRange(),k.collapsed&&(h=k.startContainer,domUtils.isEmptyBlock(h)))){for(var u=h.parentNode;1==domUtils.getChildCount(u)&&!domUtils.isBody(u);)h=u,u=u.parentNode;return void(h===u.lastChild&&d.preventDefault())}}),a.addListener("keyup",function(a,c){var d,e=c.keyCode||c.which,f=this;if(e==keymap.Backspace){if(f.fireEvent("delkeyup"))return;if(d=f.selection.getRange(),d.collapsed){var g,h=["h1","h2","h3","h4","h5","h6"];if((g=domUtils.findParentByTagName(d.startContainer,h,!0))&&domUtils.isEmptyBlock(g)){var i=g.previousSibling;if(i&&"TABLE"!=i.nodeName)return domUtils.remove(g),void d.setStartAtLast(i).setCursor(!1,!0);var j=g.nextSibling;if(j&&"TABLE"!=j.nodeName)return domUtils.remove(g),void d.setStartAtFirst(j).setCursor(!1,!0)}if(domUtils.isBody(d.startContainer)){var g=domUtils.createElement(f.document,"p",{innerHTML:browser.ie?domUtils.fillChar:"<br/>"});d.insertNode(g).setStart(g,0).setCursor(!1,!0)}}if(!b&&(3==d.startContainer.nodeType||1==d.startContainer.nodeType&&domUtils.isEmptyBlock(d.startContainer)))if(browser.ie){var k=d.document.createElement("span");d.insertNode(k).setStartBefore(k).collapse(!0),d.select(),domUtils.remove(k)}else d.select()}})},UE.plugins.fiximgclick=function(){function a(){this.editor=null,this.resizer=null,this.cover=null,this.doc=document,this.prePos={x:0,y:0},this.startPos={x:0,y:0}}var b=!1;return function(){var c=[[0,0,-1,-1],[0,0,0,-1],[0,0,1,-1],[0,0,-1,0],[0,0,1,0],[0,0,-1,1],[0,0,0,1],[0,0,1,1]];a.prototype={init:function(a){var b=this;b.editor=a,b.startPos=this.prePos={x:0,y:0},b.dragId=-1;var c=[],d=b.cover=document.createElement("div"),e=b.resizer=document.createElement("div");for(d.id=b.editor.ui.id+"_imagescale_cover",d.style.cssText="position:absolute;display:none;z-index:"+b.editor.options.zIndex+";filter:alpha(opacity=0); opacity:0;background:#CCC;",domUtils.on(d,"mousedown click",function(){b.hide()}),i=0;i<8;i++)c.push('<span class="edui-editor-imagescale-hand'+i+'"></span>');e.id=b.editor.ui.id+"_imagescale",e.className="edui-editor-imagescale",e.innerHTML=c.join(""),e.style.cssText+=";display:none;border:1px solid #3b77ff;z-index:"+b.editor.options.zIndex+";",b.editor.ui.getDom().appendChild(d),b.editor.ui.getDom().appendChild(e),b.initStyle(),b.initEvents()},initStyle:function(){utils.cssRule("imagescale",".edui-editor-imagescale{display:none;position:absolute;border:1px solid #38B2CE;cursor:hand;-webkit-box-sizing: content-box;-moz-box-sizing: content-box;box-sizing: content-box;}.edui-editor-imagescale span{position:absolute;width:6px;height:6px;overflow:hidden;font-size:0px;display:block;background-color:#3C9DD0;}.edui-editor-imagescale .edui-editor-imagescale-hand0{cursor:nw-resize;top:0;margin-top:-4px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand1{cursor:n-resize;top:0;margin-top:-4px;left:50%;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand2{cursor:ne-resize;top:0;margin-top:-4px;left:100%;margin-left:-3px;}.edui-editor-imagescale .edui-editor-imagescale-hand3{cursor:w-resize;top:50%;margin-top:-4px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand4{cursor:e-resize;top:50%;margin-top:-4px;left:100%;margin-left:-3px;}.edui-editor-imagescale .edui-editor-imagescale-hand5{cursor:sw-resize;top:100%;margin-top:-3px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand6{cursor:s-resize;top:100%;margin-top:-3px;left:50%;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand7{cursor:se-resize;top:100%;margin-top:-3px;left:100%;margin-left:-3px;}")},initEvents:function(){var a=this;a.startPos.x=a.startPos.y=0,a.isDraging=!1},_eventHandler:function(a){var c=this;switch(a.type){case"mousedown":var d,d=a.target||a.srcElement;d.className.indexOf("edui-editor-imagescale-hand")!=-1&&c.dragId==-1&&(c.dragId=d.className.slice(-1),c.startPos.x=c.prePos.x=a.clientX,c.startPos.y=c.prePos.y=a.clientY,domUtils.on(c.doc,"mousemove",c.proxy(c._eventHandler,c)));break;case"mousemove":c.dragId!=-1&&(c.updateContainerStyle(c.dragId,{x:a.clientX-c.prePos.x,y:a.clientY-c.prePos.y}),c.prePos.x=a.clientX,c.prePos.y=a.clientY,b=!0,c.updateTargetElement());break;case"mouseup":c.dragId!=-1&&(c.updateContainerStyle(c.dragId,{x:a.clientX-c.prePos.x,y:a.clientY-c.prePos.y}),c.updateTargetElement(),c.target.parentNode&&c.attachTo(c.target),c.dragId=-1),domUtils.un(c.doc,"mousemove",c.proxy(c._eventHandler,c)),b&&(b=!1,c.editor.fireEvent("contentchange"))}},updateTargetElement:function(){var a=this;domUtils.setStyles(a.target,{width:a.resizer.style.width,height:a.resizer.style.height}),a.target.width=parseInt(a.resizer.style.width),a.target.height=parseInt(a.resizer.style.height),a.attachTo(a.target)},updateContainerStyle:function(a,b){var d,e=this,f=e.resizer;0!=c[a][0]&&(d=parseInt(f.style.left)+b.x,f.style.left=e._validScaledProp("left",d)+"px"),0!=c[a][1]&&(d=parseInt(f.style.top)+b.y,f.style.top=e._validScaledProp("top",d)+"px"),0!=c[a][2]&&(d=f.clientWidth+c[a][2]*b.x,f.style.width=e._validScaledProp("width",d)+"px"),0!=c[a][3]&&(d=f.clientHeight+c[a][3]*b.y,f.style.height=e._validScaledProp("height",d)+"px")},_validScaledProp:function(a,b){var c=this.resizer,d=document;switch(b=isNaN(b)?0:b,a){case"left":return b<0?0:b+c.clientWidth>d.clientWidth?d.clientWidth-c.clientWidth:b;case"top":return b<0?0:b+c.clientHeight>d.clientHeight?d.clientHeight-c.clientHeight:b;case"width":return b<=0?1:b+c.offsetLeft>d.clientWidth?d.clientWidth-c.offsetLeft:b;case"height":return b<=0?1:b+c.offsetTop>d.clientHeight?d.clientHeight-c.offsetTop:b}},hideCover:function(){this.cover.style.display="none"},showCover:function(){var a=this,b=domUtils.getXY(a.editor.ui.getDom()),c=domUtils.getXY(a.editor.iframe);domUtils.setStyles(a.cover,{width:a.editor.iframe.offsetWidth+"px",height:a.editor.iframe.offsetHeight+"px",top:c.y-b.y+"px",left:c.x-b.x+"px",position:"absolute",display:""})},show:function(a){var b=this;b.resizer.style.display="block",a&&b.attachTo(a),domUtils.on(this.resizer,"mousedown",b.proxy(b._eventHandler,b)),domUtils.on(b.doc,"mouseup",b.proxy(b._eventHandler,b)),b.showCover(),b.editor.fireEvent("afterscaleshow",b),b.editor.fireEvent("saveScene")},hide:function(){var a=this;a.hideCover(),a.resizer.style.display="none",domUtils.un(a.resizer,"mousedown",a.proxy(a._eventHandler,a)),domUtils.un(a.doc,"mouseup",a.proxy(a._eventHandler,a)),a.editor.fireEvent("afterscalehide",a)},proxy:function(a,b){return function(c){return a.apply(b||this,arguments)}},attachTo:function(a){var b=this,c=b.target=a,d=this.resizer,e=domUtils.getXY(c),f=domUtils.getXY(b.editor.iframe),g=domUtils.getXY(d.parentNode);domUtils.setStyles(d,{width:c.width+"px",height:c.height+"px",left:f.x+e.x-b.editor.document.body.scrollLeft-g.x-parseInt(d.style.borderLeftWidth)+"px",top:f.y+e.y-b.editor.document.body.scrollTop-g.y-parseInt(d.style.borderTopWidth)+"px"})}}}(),function(){var b,c=this;c.setOpt("imageScaleEnabled",!0),!browser.ie&&c.options.imageScaleEnabled&&c.addListener("click",function(d,e){var f=c.selection.getRange(),g=f.getClosedNode();if(g&&"IMG"==g.tagName&&"false"!=c.body.contentEditable){if(g.className.indexOf("edui-faked-music")!=-1||g.getAttribute("anchorname")||domUtils.hasClass(g,"loadingclass")||domUtils.hasClass(g,"loaderrorclass"))return;if(!b){b=new a,b.init(c),c.ui.getDom().appendChild(b.resizer);var h,i=function(a){b.hide(),b.target&&c.selection.getRange().selectNode(b.target).select()},j=function(a){var b=a.target||a.srcElement;!b||void 0!==b.className&&b.className.indexOf("edui-editor-imagescale")!=-1||i(a)};c.addListener("afterscaleshow",function(a){c.addListener("beforekeydown",i),c.addListener("beforemousedown",j),domUtils.on(document,"keydown",i),domUtils.on(document,"mousedown",j),c.selection.getNative().removeAllRanges()}),c.addListener("afterscalehide",function(a){c.removeListener("beforekeydown",i),c.removeListener("beforemousedown",j),domUtils.un(document,"keydown",i),domUtils.un(document,"mousedown",j);var d=b.target;d.parentNode&&c.selection.getRange().selectNode(d).select()}),domUtils.on(b.resizer,"mousedown",function(a){c.selection.getNative().removeAllRanges();var d=a.target||a.srcElement;d&&d.className.indexOf("edui-editor-imagescale-hand")==-1&&(h=setTimeout(function(){b.hide(),b.target&&c.selection.getRange().selectNode(d).select()},200))}),domUtils.on(b.resizer,"mouseup",function(a){var b=a.target||a.srcElement;b&&b.className.indexOf("edui-editor-imagescale-hand")==-1&&clearTimeout(h)})}b.show(g)}else b&&"none"!=b.resizer.style.display&&b.hide()}),browser.webkit&&c.addListener("click",function(a,b){if("IMG"==b.target.tagName&&"false"!=c.body.contentEditable){var d=new dom.Range(c.document);d.selectNode(b.target).select()}})}}(),UE.plugin.register("autolink",function(){var a=0;return browser.ie?{}:{bindEvents:{reset:function(){a=0},keydown:function(a,b){var c=this,d=b.keyCode||b.which;if(32==d||13==d){for(var e,f,g=c.selection.getNative(),h=g.getRangeAt(0).cloneRange(),i=h.startContainer;1==i.nodeType&&h.startOffset>0&&(i=h.startContainer.childNodes[h.startOffset-1]);)h.setStart(i,1==i.nodeType?i.childNodes.length:i.nodeValue.length),h.collapse(!0),i=h.startContainer;do{if(0==h.startOffset){for(i=h.startContainer.previousSibling;i&&1==i.nodeType;)i=i.lastChild;if(!i||domUtils.isFillChar(i))break;e=i.nodeValue.length}else i=h.startContainer,e=h.startOffset;h.setStart(i,e-1),f=h.toString().charCodeAt(0)}while(160!=f&&32!=f);if(h.toString().replace(new RegExp(domUtils.fillChar,"g"),"").match(/(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i)){for(;h.toString().length&&!/^(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i.test(h.toString());)try{h.setStart(h.startContainer,h.startOffset+1)}catch(j){for(var i=h.startContainer;!(next=i.nextSibling);){if(domUtils.isBody(i))return;i=i.parentNode}h.setStart(next,0)}if(domUtils.findParentByTagName(h.startContainer,"a",!0))return;var k,l=c.document.createElement("a"),m=c.document.createTextNode(" ");c.undoManger&&c.undoManger.save(),l.appendChild(h.extractContents()),l.href=l.innerHTML=l.innerHTML.replace(/<[^>]+>/g,""),k=l.getAttribute("href").replace(new RegExp(domUtils.fillChar,"g"),""),k=/^(?:https?:\/\/)/gi.test(k)?k:"http://"+k,l.setAttribute("_src",utils.html(k)),l.href=utils.html(k),h.insertNode(l),l.parentNode.insertBefore(m,l.nextSibling),h.setStart(m,0),h.collapse(!0),g.removeAllRanges(),g.addRange(h),c.undoManger&&c.undoManger.save()}}}}}},function(){function a(a){if(3==a.nodeType)return null;if("A"==a.nodeName)return a;for(var b=a.lastChild;b;){if("A"==b.nodeName)return b;if(3==b.nodeType){if(domUtils.isWhitespace(b)){b=b.previousSibling;continue}return null}b=b.lastChild}}var b={37:1,38:1,39:1,40:1,13:1,32:1};browser.ie&&this.addListener("keyup",function(c,d){var e=this,f=d.keyCode;if(b[f]){var g=e.selection.getRange(),h=g.startContainer;if(13==f){for(;h&&!domUtils.isBody(h)&&!domUtils.isBlockElm(h);)h=h.parentNode;if(h&&!domUtils.isBody(h)&&"P"==h.nodeName){var i=h.previousSibling;if(i&&1==i.nodeType){var i=a(i);i&&!i.getAttribute("_href")&&domUtils.remove(i,!0)}}}else if(32==f)3==h.nodeType&&/^\s$/.test(h.nodeValue)&&(h=h.previousSibling,h&&"A"==h.nodeName&&!h.getAttribute("_href")&&domUtils.remove(h,!0));else if(h=domUtils.findParentByTagName(h,"a",!0),h&&!h.getAttribute("_href")){var j=g.createBookmark();domUtils.remove(h,!0),g.moveToBookmark(j).select(!0)}}})}),UE.plugins.autoheight=function(){function a(){var a=this;clearTimeout(e),f||(!a.queryCommandState||a.queryCommandState&&1!=a.queryCommandState("source"))&&(e=setTimeout(function(){for(var b=a.body.lastChild;b&&1!=b.nodeType;)b=b.previousSibling;b&&1==b.nodeType&&(b.style.clear="both",d=Math.max(domUtils.getXY(b).y+b.offsetHeight+25,Math.max(h.minFrameHeight,h.initialFrameHeight)),d!=g&&(d!==parseInt(a.iframe.parentNode.style.height)&&(a.iframe.parentNode.style.height=d+"px"),a.body.style.height=d+"px",g=d),domUtils.removeStyle(b,"clear"))},50))}var b=this;if(b.autoHeightEnabled=b.options.autoHeightEnabled!==!1,b.autoHeightEnabled){var c,d,e,f,g=0,h=b.options;b.addListener("fullscreenchanged",function(a,b){f=b}),b.addListener("destroy",function(){b.removeListener("contentchange afterinserthtml keyup mouseup",a)}),b.enableAutoHeight=function(){var b=this;if(b.autoHeightEnabled){var d=b.document;b.autoHeightEnabled=!0,c=d.body.style.overflowY,d.body.style.overflowY="hidden",b.addListener("contentchange afterinserthtml keyup mouseup",a),setTimeout(function(){a.call(b)},browser.gecko?100:0),b.fireEvent("autoheightchanged",b.autoHeightEnabled)}},b.disableAutoHeight=function(){b.body.style.overflowY=c||"",b.removeListener("contentchange",a),b.removeListener("keyup",a),b.removeListener("mouseup",a),b.autoHeightEnabled=!1,b.fireEvent("autoheightchanged",b.autoHeightEnabled)},b.on("setHeight",function(){b.disableAutoHeight()}),b.addListener("ready",function(){b.enableAutoHeight();var c;domUtils.on(browser.ie?b.body:b.document,browser.webkit?"dragover":"drop",function(){clearTimeout(c),c=setTimeout(function(){a.call(b)},100)});var d;window.onscroll=function(){
null===d?d=this.scrollY:0==this.scrollY&&0!=d&&(b.window.scrollTo(0,0),d=null)}})}},UE.plugins.autofloat=function(){function a(){return UE.ui?1:(alert(g.autofloatMsg),0)}function b(){var a=document.body.style;a.backgroundImage='url("about:blank")',a.backgroundAttachment="fixed"}function c(){var a=domUtils.getXY(k),b=domUtils.getComputedStyle(k,"position"),c=domUtils.getComputedStyle(k,"left");k.style.width=k.offsetWidth+"px",k.style.zIndex=1*f.options.zIndex+1,k.parentNode.insertBefore(q,k),o||p&&browser.ie?("absolute"!=k.style.position&&(k.style.position="absolute"),k.style.top=(document.body.scrollTop||document.documentElement.scrollTop)-l+i+"px"):(browser.ie7Compat&&r&&(r=!1,k.style.left=domUtils.getXY(k).x-document.documentElement.getBoundingClientRect().left+2+"px"),"fixed"!=k.style.position&&(k.style.position="fixed",k.style.top=i+"px",("absolute"==b||"relative"==b)&&parseFloat(c)&&(k.style.left=a.x+"px")))}function d(){r=!0,q.parentNode&&q.parentNode.removeChild(q),k.style.cssText=j}function e(){var a=m(f.container),b=f.options.toolbarTopOffset||0;a.top<0&&a.bottom-k.offsetHeight>b?c():d()}var f=this,g=f.getLang();f.setOpt({topOffset:0});var h=f.options.autoFloatEnabled!==!1,i=f.options.topOffset;if(h){var j,k,l,m,n=UE.ui.uiUtils,o=browser.ie&&browser.version<=6,p=browser.quirks,q=document.createElement("div"),r=!0,s=utils.defer(function(){e()},browser.ie?200:100,!0);f.addListener("destroy",function(){domUtils.un(window,["scroll","resize"],e),f.removeListener("keydown",s)}),f.addListener("ready",function(){if(a(f)){if(!f.ui)return;m=n.getClientRect,k=f.ui.getDom("toolbarbox"),l=m(k).top,j=k.style.cssText,q.style.height=k.offsetHeight+"px",o&&b(),domUtils.on(window,["scroll","resize"],e),f.addListener("keydown",s),f.addListener("beforefullscreenchange",function(a,b){b&&d()}),f.addListener("fullscreenchanged",function(a,b){b||e()}),f.addListener("sourcemodechanged",function(a,b){setTimeout(function(){e()},0)}),f.addListener("clearDoc",function(){setTimeout(function(){e()},0)})}})}},UE.plugins.video=function(){function a(a,b,d,e,f,g,h){a=utils.unhtmlForUrl(a),f=utils.unhtml(f),g=utils.unhtml(g),b=parseInt(b,10)||0,d=parseInt(d,10)||0;var i;switch(h){case"image":i="<img "+(e?'id="'+e+'"':"")+' width="'+b+'" height="'+d+'" _url="'+a+'" class="'+g.replace(/\bvideo-js\b/,"")+'" src="'+c.options.UEDITOR_HOME_URL+'themes/default/images/spacer.gif" style="background:url('+c.options.UEDITOR_HOME_URL+"themes/default/images/videologo.gif) no-repeat center center; border:1px solid gray;"+(f?"float:"+f+";":"")+'" />';break;case"embed":i='<embed type="application/x-shockwave-flash" class="'+g+'" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+utils.html(a)+'" width="'+b+'" height="'+d+'"'+(f?' style="float:'+f+'"':"")+' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >';break;case"video":var j=a.substr(a.lastIndexOf(".")+1);"ogv"==j&&(j="ogg"),i="<video"+(e?' id="'+e+'"':"")+' class="'+g+' video-js" '+(f?' style="float:'+f+'"':"")+' controls preload="none" width="'+b+'" height="'+d+'" src="'+a+'" data-setup="{}"><source src="'+a+'" type="video/'+j+'" /></video>'}return i}function b(b,c){utils.each(b.getNodesByTagName(c?"img":"embed video"),function(b){var d=b.getAttr("class");if(d&&d.indexOf("edui-faked-video")!=-1){var e=a(c?b.getAttr("_url"):b.getAttr("src"),b.getAttr("width"),b.getAttr("height"),null,b.getStyle("float")||"",d,c?"embed":"image");b.parentNode.replaceChild(UE.uNode.createElement(e),b)}if(d&&d.indexOf("edui-upload-video")!=-1){var e=a(c?b.getAttr("_url"):b.getAttr("src"),b.getAttr("width"),b.getAttr("height"),null,b.getStyle("float")||"",d,c?"video":"image");b.parentNode.replaceChild(UE.uNode.createElement(e),b)}})}var c=this;c.addOutputRule(function(a){b(a,!0)}),c.addInputRule(function(a){b(a)}),c.commands.insertvideo={execCommand:function(b,d,e){d=utils.isArray(d)?d:[d];for(var f,g,h=[],i="tmpVedio",j=0,k=d.length;j<k;j++)g=d[j],f="upload"==e?"edui-upload-video video-js vjs-default-skin":"edui-faked-video",h.push(a(g.url,g.width||420,g.height||280,i+j,null,f,"image"));c.execCommand("inserthtml",h.join(""),!0);for(var l=this.selection.getRange(),j=0,k=d.length;j<k;j++){var m=this.document.getElementById("tmpVedio"+j);domUtils.removeAttributes(m,"id"),l.selectNode(m).select(),c.execCommand("imagefloat",d[j].align)}},queryCommandState:function(){var a=c.selection.getRange().getClosedNode(),b=a&&("edui-faked-video"==a.className||a.className.indexOf("edui-upload-video")!=-1);return b?1:0}}},function(){function a(a){}var b=UE.UETable=function(a){this.table=a,this.indexTable=[],this.selectedTds=[],this.cellsRange={},this.update(a)};b.removeSelectedClass=function(a){utils.each(a,function(a){domUtils.removeClasses(a,"selectTdClass")})},b.addSelectedClass=function(a){utils.each(a,function(a){domUtils.addClass(a,"selectTdClass")})},b.isEmptyBlock=function(a){var b=new RegExp(domUtils.fillChar,"g");if(a[browser.ie?"innerText":"textContent"].replace(/^\s*$/,"").replace(b,"").length>0)return 0;for(var c in dtd.$isNotEmpty)if(dtd.$isNotEmpty.hasOwnProperty(c)&&a.getElementsByTagName(c).length)return 0;return 1},b.getWidth=function(a){return a?parseInt(domUtils.getComputedStyle(a,"width"),10):0},b.getTableCellAlignState=function(a){!utils.isArray(a)&&(a=[a]);var b={},c=["align","valign"],d=null,e=!0;return utils.each(a,function(a){return utils.each(c,function(c){if(d=a.getAttribute(c),!b[c]&&d)b[c]=d;else if(!b[c]||d!==b[c])return e=!1,!1}),e}),e?b:null},b.getTableItemsByRange=function(a){var b=a.selection.getStart();b&&b.id&&0===b.id.indexOf("_baidu_bookmark_start_")&&b.nextSibling&&(b=b.nextSibling);var c=b&&domUtils.findParentByTagName(b,["td","th"],!0),d=c&&c.parentNode,e=b&&domUtils.findParentByTagName(b,"caption",!0),f=e?e.parentNode:d&&d.parentNode.parentNode;return{cell:c,tr:d,table:f,caption:e}},b.getUETableBySelected=function(a){var c=b.getTableItemsByRange(a).table;return c&&c.ueTable&&c.ueTable.selectedTds.length?c.ueTable:null},b.getDefaultValue=function(a,b){var c,d,e,f,g={thin:"0px",medium:"1px",thick:"2px"};if(b)return h=b.getElementsByTagName("td")[0],f=domUtils.getComputedStyle(b,"border-left-width"),c=parseInt(g[f]||f,10),f=domUtils.getComputedStyle(h,"padding-left"),d=parseInt(g[f]||f,10),f=domUtils.getComputedStyle(h,"border-left-width"),e=parseInt(g[f]||f,10),{tableBorder:c,tdPadding:d,tdBorder:e};b=a.document.createElement("table"),b.insertRow(0).insertCell(0).innerHTML="xxx",a.body.appendChild(b);var h=b.getElementsByTagName("td")[0];return f=domUtils.getComputedStyle(b,"border-left-width"),c=parseInt(g[f]||f,10),f=domUtils.getComputedStyle(h,"padding-left"),d=parseInt(g[f]||f,10),f=domUtils.getComputedStyle(h,"border-left-width"),e=parseInt(g[f]||f,10),domUtils.remove(b),{tableBorder:c,tdPadding:d,tdBorder:e}},b.getUETable=function(a){var c=a.tagName.toLowerCase();return a="td"==c||"th"==c||"caption"==c?domUtils.findParentByTagName(a,"table",!0):a,a.ueTable||(a.ueTable=new b(a)),a.ueTable},b.cloneCell=function(a,b,c){if(!a||utils.isString(a))return this.table.ownerDocument.createElement(a||"td");var d=domUtils.hasClass(a,"selectTdClass");d&&domUtils.removeClasses(a,"selectTdClass");var e=a.cloneNode(!0);return b&&(e.rowSpan=e.colSpan=1),!c&&domUtils.removeAttributes(e,"width height"),!c&&domUtils.removeAttributes(e,"style"),e.style.borderLeftStyle="",e.style.borderTopStyle="",e.style.borderLeftColor=a.style.borderRightColor,e.style.borderLeftWidth=a.style.borderRightWidth,e.style.borderTopColor=a.style.borderBottomColor,e.style.borderTopWidth=a.style.borderBottomWidth,d&&domUtils.addClass(a,"selectTdClass"),e},b.prototype={getMaxRows:function(){for(var a,b=this.table.rows,c=1,d=0;a=b[d];d++){for(var e,f=1,g=0;e=a.cells[g++];)f=Math.max(e.rowSpan||1,f);c=Math.max(f+d,c)}return c},getMaxCols:function(){for(var a,b=this.table.rows,c=0,d={},e=0;a=b[e];e++){for(var f,g=0,h=0;f=a.cells[h++];)if(g+=f.colSpan||1,f.rowSpan&&f.rowSpan>1)for(var i=1;i<f.rowSpan;i++)d["row_"+(e+i)]?d["row_"+(e+i)]++:d["row_"+(e+i)]=f.colSpan||1;g+=d["row_"+e]||0,c=Math.max(g,c)}return c},getCellColIndex:function(a){},getHSideCell:function(b,c){try{var d,e,f=this.getCellInfo(b),g=this.selectedTds.length,h=this.cellsRange;return!c&&(g?!h.beginColIndex:!f.colIndex)||c&&(g?h.endColIndex==this.colsNum-1:f.colIndex==this.colsNum-1)?null:(d=g?h.beginRowIndex:f.rowIndex,e=c?g?h.endColIndex+1:f.colIndex+1:g?h.beginColIndex-1:f.colIndex<1?0:f.colIndex-1,this.getCell(this.indexTable[d][e].rowIndex,this.indexTable[d][e].cellIndex))}catch(i){a(i)}},getTabNextCell:function(a,b){var c,d=this.getCellInfo(a),e=b||d.rowIndex,f=d.colIndex+1+(d.colSpan-1);try{c=this.getCell(this.indexTable[e][f].rowIndex,this.indexTable[e][f].cellIndex)}catch(g){try{e=1*e+1,f=0,c=this.getCell(this.indexTable[e][f].rowIndex,this.indexTable[e][f].cellIndex)}catch(g){}}return c},getVSideCell:function(b,c,d){try{var e,f,g=this.getCellInfo(b),h=this.selectedTds.length&&!d,i=this.cellsRange;return!c&&0==g.rowIndex||c&&(h?i.endRowIndex==this.rowsNum-1:g.rowIndex+g.rowSpan>this.rowsNum-1)?null:(e=c?h?i.endRowIndex+1:g.rowIndex+g.rowSpan:h?i.beginRowIndex-1:g.rowIndex-1,f=h?i.beginColIndex:g.colIndex,this.getCell(this.indexTable[e][f].rowIndex,this.indexTable[e][f].cellIndex))}catch(j){a(j)}},getSameEndPosCells:function(b,c){try{for(var d="x"===c.toLowerCase(),e=domUtils.getXY(b)[d?"x":"y"]+b["offset"+(d?"Width":"Height")],f=this.table.rows,g=null,h=[],i=0;i<this.rowsNum;i++){g=f[i].cells;for(var j,k=0;j=g[k++];){var l=domUtils.getXY(j)[d?"x":"y"]+j["offset"+(d?"Width":"Height")];if(l>e&&d)break;if((b==j||e==l)&&(1==j[d?"colSpan":"rowSpan"]&&h.push(j),d))break}}return h}catch(m){a(m)}},setCellContent:function(a,b){a.innerHTML=b||(browser.ie?domUtils.fillChar:"<br />")},cloneCell:b.cloneCell,getSameStartPosXCells:function(b){try{for(var c,d=domUtils.getXY(b).x+b.offsetWidth,e=this.table.rows,f=[],g=0;g<this.rowsNum;g++){c=e[g].cells;for(var h,i=0;h=c[i++];){var j=domUtils.getXY(h).x;if(j>d)break;if(j==d&&1==h.colSpan){f.push(h);break}}}return f}catch(k){a(k)}},update:function(a){this.table=a||this.table,this.selectedTds=[],this.cellsRange={},this.indexTable=[];for(var b=this.table.rows,c=this.getMaxRows(),d=c-b.length,e=this.getMaxCols();d--;)this.table.insertRow(b.length);this.rowsNum=c,this.colsNum=e;for(var f=0,g=b.length;f<g;f++)this.indexTable[f]=new Array(e);for(var h,i=0;h=b[i];i++)for(var j,k=0,l=h.cells;j=l[k];k++){j.rowSpan>c&&(j.rowSpan=c);for(var m=k,n=j.rowSpan||1,o=j.colSpan||1;this.indexTable[i][m];)m++;for(var p=0;p<n;p++)for(var q=0;q<o;q++)this.indexTable[i+p][m+q]={rowIndex:i,cellIndex:k,colIndex:m,rowSpan:n,colSpan:o}}for(p=0;p<c;p++)for(q=0;q<e;q++)void 0===this.indexTable[p][q]&&(h=b[p],j=h.cells[h.cells.length-1],j=j?j.cloneNode(!0):this.table.ownerDocument.createElement("td"),this.setCellContent(j),1!==j.colSpan&&(j.colSpan=1),1!==j.rowSpan&&(j.rowSpan=1),h.appendChild(j),this.indexTable[p][q]={rowIndex:p,cellIndex:j.cellIndex,colIndex:q,rowSpan:1,colSpan:1});var r=domUtils.getElementsByTagName(this.table,"td"),s=[];if(utils.each(r,function(a){domUtils.hasClass(a,"selectTdClass")&&s.push(a)}),s.length){var t=s[0],u=s[s.length-1],v=this.getCellInfo(t),w=this.getCellInfo(u);this.selectedTds=s,this.cellsRange={beginRowIndex:v.rowIndex,beginColIndex:v.colIndex,endRowIndex:w.rowIndex+w.rowSpan-1,endColIndex:w.colIndex+w.colSpan-1}}if(!domUtils.hasClass(this.table.rows[0],"firstRow")){domUtils.addClass(this.table.rows[0],"firstRow");for(var f=1;f<this.table.rows.length;f++)domUtils.removeClasses(this.table.rows[f],"firstRow")}},getCellInfo:function(a){if(a)for(var b=a.cellIndex,c=a.parentNode.rowIndex,d=this.indexTable[c],e=this.colsNum,f=b;f<e;f++){var g=d[f];if(g.rowIndex===c&&g.cellIndex===b)return g}},getCell:function(a,b){return a<this.rowsNum&&this.table.rows[a].cells[b]||null},deleteCell:function(a,b){b="number"==typeof b?b:a.parentNode.rowIndex;var c=this.table.rows[b];c.deleteCell(a.cellIndex)},getCellsRange:function(a,b){function c(a,b,e,f){var g,h,i,j=a,k=b,l=e,m=f;if(a>0)for(h=b;h<f;h++)g=d.indexTable[a][h],i=g.rowIndex,i<a&&(j=Math.min(i,j));if(f<d.colsNum)for(i=a;i<e;i++)g=d.indexTable[i][f],h=g.colIndex+g.colSpan-1,h>f&&(m=Math.max(h,m));if(e<d.rowsNum)for(h=b;h<f;h++)g=d.indexTable[e][h],i=g.rowIndex+g.rowSpan-1,i>e&&(l=Math.max(i,l));if(b>0)for(i=a;i<e;i++)g=d.indexTable[i][b],h=g.colIndex,h<b&&(k=Math.min(g.colIndex,k));return j!=a||k!=b||l!=e||m!=f?c(j,k,l,m):{beginRowIndex:a,beginColIndex:b,endRowIndex:e,endColIndex:f}}try{var d=this,e=d.getCellInfo(a);if(a===b)return{beginRowIndex:e.rowIndex,beginColIndex:e.colIndex,endRowIndex:e.rowIndex+e.rowSpan-1,endColIndex:e.colIndex+e.colSpan-1};var f=d.getCellInfo(b),g=Math.min(e.rowIndex,f.rowIndex),h=Math.min(e.colIndex,f.colIndex),i=Math.max(e.rowIndex+e.rowSpan-1,f.rowIndex+f.rowSpan-1),j=Math.max(e.colIndex+e.colSpan-1,f.colIndex+f.colSpan-1);return c(g,h,i,j)}catch(k){}},getCells:function(a){this.clearSelected();for(var b,c,d,e=a.beginRowIndex,f=a.beginColIndex,g=a.endRowIndex,h=a.endColIndex,i={},j=[],k=e;k<=g;k++)for(var l=f;l<=h;l++){b=this.indexTable[k][l],c=b.rowIndex,d=b.colIndex;var m=c+"|"+d;if(!i[m]){if(i[m]=1,c<k||d<l||c+b.rowSpan-1>g||d+b.colSpan-1>h)return null;j.push(this.getCell(c,b.cellIndex))}}return j},clearSelected:function(){b.removeSelectedClass(this.selectedTds),this.selectedTds=[],this.cellsRange={}},setSelected:function(a){var c=this.getCells(a);b.addSelectedClass(c),this.selectedTds=c,this.cellsRange=a},isFullRow:function(){var a=this.cellsRange;return a.endColIndex-a.beginColIndex+1==this.colsNum},isFullCol:function(){var a=this.cellsRange,b=this.table,c=b.getElementsByTagName("th"),d=a.endRowIndex-a.beginRowIndex+1;return c.length?d==this.rowsNum||d==this.rowsNum-1:d==this.rowsNum},getNextCell:function(b,c,d){try{var e,f,g=this.getCellInfo(b),h=this.selectedTds.length&&!d,i=this.cellsRange;return!c&&0==g.rowIndex||c&&(h?i.endRowIndex==this.rowsNum-1:g.rowIndex+g.rowSpan>this.rowsNum-1)?null:(e=c?h?i.endRowIndex+1:g.rowIndex+g.rowSpan:h?i.beginRowIndex-1:g.rowIndex-1,f=h?i.beginColIndex:g.colIndex,this.getCell(this.indexTable[e][f].rowIndex,this.indexTable[e][f].cellIndex))}catch(j){a(j)}},getPreviewCell:function(b,c){try{var d,e,f=this.getCellInfo(b),g=this.selectedTds.length,h=this.cellsRange;return!c&&(g?!h.beginColIndex:!f.colIndex)||c&&(g?h.endColIndex==this.colsNum-1:f.rowIndex>this.colsNum-1)?null:(d=c?g?h.beginRowIndex:f.rowIndex<1?0:f.rowIndex-1:g?h.beginRowIndex:f.rowIndex,e=c?g?h.endColIndex+1:f.colIndex:g?h.beginColIndex-1:f.colIndex<1?0:f.colIndex-1,this.getCell(this.indexTable[d][e].rowIndex,this.indexTable[d][e].cellIndex))}catch(i){a(i)}},moveContent:function(a,c){if(!b.isEmptyBlock(c)){if(b.isEmptyBlock(a))return void(a.innerHTML=c.innerHTML);var d=a.lastChild;for(3!=d.nodeType&&dtd.$block[d.tagName]||a.appendChild(a.ownerDocument.createElement("br"));d=c.firstChild;)a.appendChild(d)}},mergeRight:function(a){var b=this.getCellInfo(a),c=b.colIndex+b.colSpan,d=this.indexTable[b.rowIndex][c],e=this.getCell(d.rowIndex,d.cellIndex);a.colSpan=b.colSpan+d.colSpan,a.removeAttribute("width"),this.moveContent(a,e),this.deleteCell(e,d.rowIndex),this.update()},mergeDown:function(a){var b=this.getCellInfo(a),c=b.rowIndex+b.rowSpan,d=this.indexTable[c][b.colIndex],e=this.getCell(d.rowIndex,d.cellIndex);a.rowSpan=b.rowSpan+d.rowSpan,a.removeAttribute("height"),this.moveContent(a,e),this.deleteCell(e,d.rowIndex),this.update()},mergeRange:function(){var a=this.cellsRange,b=this.getCell(a.beginRowIndex,this.indexTable[a.beginRowIndex][a.beginColIndex].cellIndex);if("TH"==b.tagName&&a.endRowIndex!==a.beginRowIndex){var c=this.indexTable,d=this.getCellInfo(b);b=this.getCell(1,c[1][d.colIndex].cellIndex),a=this.getCellsRange(b,this.getCell(c[this.rowsNum-1][d.colIndex].rowIndex,c[this.rowsNum-1][d.colIndex].cellIndex))}for(var e,f=this.getCells(a),g=0;e=f[g++];)e!==b&&(this.moveContent(b,e),this.deleteCell(e));if(b.rowSpan=a.endRowIndex-a.beginRowIndex+1,b.rowSpan>1&&b.removeAttribute("height"),b.colSpan=a.endColIndex-a.beginColIndex+1,b.colSpan>1&&b.removeAttribute("width"),b.rowSpan==this.rowsNum&&1!=b.colSpan&&(b.colSpan=1),b.colSpan==this.colsNum&&1!=b.rowSpan){var h=b.parentNode.rowIndex;if(this.table.deleteRow)for(var g=h+1,i=h+1,j=b.rowSpan;g<j;g++)this.table.deleteRow(i);else for(var g=0,j=b.rowSpan-1;g<j;g++){var k=this.table.rows[h+1];k.parentNode.removeChild(k)}b.rowSpan=1}this.update()},insertRow:function(a,b){function c(a,b,c){if(0==a){var d=c.nextSibling||c.previousSibling,e=d.cells[a];"TH"==e.tagName&&(e=b.ownerDocument.createElement("th"),e.appendChild(b.firstChild),c.insertBefore(e,b),domUtils.remove(b))}else if("TH"==b.tagName){var f=b.ownerDocument.createElement("td");f.appendChild(b.firstChild),c.insertBefore(f,b),domUtils.remove(b)}}var d,e=this.colsNum,f=this.table,g=f.insertRow(a),h="string"==typeof b&&"TH"==b.toUpperCase();if(0==a||a==this.rowsNum)for(var i=0;i<e;i++)d=this.cloneCell(b,!0),this.setCellContent(d),d.getAttribute("vAlign")&&d.setAttribute("vAlign",d.getAttribute("vAlign")),g.appendChild(d),h||c(i,d,g);else{var j=this.indexTable[a];for(i=0;i<e;i++){var k=j[i];k.rowIndex<a?(d=this.getCell(k.rowIndex,k.cellIndex),d.rowSpan=k.rowSpan+1):(d=this.cloneCell(b,!0),this.setCellContent(d),g.appendChild(d)),h||c(i,d,g)}}return this.update(),g},deleteRow:function(a){for(var b=this.table.rows[a],c=this.indexTable[a],d=this.colsNum,e=0,f=0;f<d;){var g=c[f],h=this.getCell(g.rowIndex,g.cellIndex);if(h.rowSpan>1&&g.rowIndex==a){var i=h.cloneNode(!0);i.rowSpan=h.rowSpan-1,i.innerHTML="",h.rowSpan=1;var j,k=a+1,l=this.table.rows[k],m=this.getPreviewMergedCellsNum(k,f)-e;m<f?(j=f-m-1,domUtils.insertAfter(l.cells[j],i)):l.cells.length&&l.insertBefore(i,l.cells[0]),e+=1}f+=h.colSpan||1}var n=[],o={};for(f=0;f<d;f++){var p=c[f].rowIndex,q=c[f].cellIndex,r=p+"_"+q;o[r]||(o[r]=1,h=this.getCell(p,q),n.push(h))}var s=[];utils.each(n,function(a){1==a.rowSpan?a.parentNode.removeChild(a):s.push(a)}),utils.each(s,function(a){a.rowSpan--}),b.parentNode.removeChild(b),this.update()},insertCol:function(a,b,c){function d(a,b,c){if(0==a){var d=b.nextSibling||b.previousSibling;"TH"==d.tagName&&(d=b.ownerDocument.createElement("th"),d.appendChild(b.firstChild),c.insertBefore(d,b),domUtils.remove(b))}else if("TH"==b.tagName){var e=b.ownerDocument.createElement("td");e.appendChild(b.firstChild),c.insertBefore(e,b),domUtils.remove(b)}}var e,f,g,h=this.rowsNum,i=0,j=parseInt((this.table.offsetWidth-20*(this.colsNum+1)-(this.colsNum+1))/(this.colsNum+1),10),k="string"==typeof b&&"TH"==b.toUpperCase();if(0==a||a==this.colsNum)for(;i<h;i++)e=this.table.rows[i],g=e.cells[0==a?a:e.cells.length],f=this.cloneCell(b,!0),this.setCellContent(f),f.setAttribute("vAlign",f.getAttribute("vAlign")),g&&f.setAttribute("width",g.getAttribute("width")),a?domUtils.insertAfter(e.cells[e.cells.length-1],f):e.insertBefore(f,e.cells[0]),k||d(i,f,e);else for(;i<h;i++){var l=this.indexTable[i][a];l.colIndex<a?(f=this.getCell(l.rowIndex,l.cellIndex),f.colSpan=l.colSpan+1):(e=this.table.rows[i],g=e.cells[l.cellIndex],f=this.cloneCell(b,!0),this.setCellContent(f),f.setAttribute("vAlign",f.getAttribute("vAlign")),g&&f.setAttribute("width",g.getAttribute("width")),g?e.insertBefore(f,g):e.appendChild(f)),k||d(i,f,e)}this.update(),this.updateWidth(j,c||{tdPadding:10,tdBorder:1})},updateWidth:function(a,c){var d=this.table,e=b.getWidth(d)-2*c.tdPadding-c.tdBorder+a;if(e<d.ownerDocument.body.offsetWidth)return void d.setAttribute("width",e);var f=domUtils.getElementsByTagName(this.table,"td th");utils.each(f,function(b){b.setAttribute("width",a)})},deleteCol:function(a){for(var b=this.indexTable,c=this.table.rows,d=this.table.getAttribute("width"),e=0,f=this.rowsNum,g={},h=0;h<f;){var i=b[h],j=i[a],k=j.rowIndex+"_"+j.colIndex;if(!g[k]){g[k]=1;var l=this.getCell(j.rowIndex,j.cellIndex);e||(e=l&&parseInt(l.offsetWidth/l.colSpan,10).toFixed(0)),l.colSpan>1?l.colSpan--:c[h].deleteCell(j.cellIndex),h+=j.rowSpan||1}}this.table.setAttribute("width",d-e),this.update()},splitToCells:function(a){var b=this,c=this.splitToRows(a);utils.each(c,function(a){b.splitToCols(a)})},splitToRows:function(a){var b=this.getCellInfo(a),c=b.rowIndex,d=b.colIndex,e=[];a.rowSpan=1,e.push(a);for(var f=c,g=c+b.rowSpan;f<g;f++)if(f!=c){var h=this.table.rows[f],i=h.insertCell(d-this.getPreviewMergedCellsNum(f,d));i.colSpan=b.colSpan,this.setCellContent(i),i.setAttribute("vAlign",a.getAttribute("vAlign")),i.setAttribute("align",a.getAttribute("align")),a.style.cssText&&(i.style.cssText=a.style.cssText),e.push(i)}return this.update(),e},getPreviewMergedCellsNum:function(a,b){for(var c=this.indexTable[a],d=0,e=0;e<b;){var f=c[e].colSpan,g=c[e].rowIndex;d+=f-(g==a?1:0),e+=f}return d},splitToCols:function(a){var b=(a.offsetWidth/a.colSpan-22).toFixed(0),c=this.getCellInfo(a),d=c.rowIndex,e=c.colIndex,f=[];a.colSpan=1,a.setAttribute("width",b),f.push(a);for(var g=e,h=e+c.colSpan;g<h;g++)if(g!=e){var i=this.table.rows[d],j=i.insertCell(this.indexTable[d][g].cellIndex+1);if(j.rowSpan=c.rowSpan,this.setCellContent(j),j.setAttribute("vAlign",a.getAttribute("vAlign")),j.setAttribute("align",a.getAttribute("align")),j.setAttribute("width",b),a.style.cssText&&(j.style.cssText=a.style.cssText),"TH"==a.tagName){var k=a.ownerDocument.createElement("th");k.appendChild(j.firstChild),k.setAttribute("vAlign",a.getAttribute("vAlign")),k.rowSpan=j.rowSpan,i.insertBefore(k,j),domUtils.remove(j)}f.push(j)}return this.update(),f},isLastCell:function(a,b,c){b=b||this.rowsNum,c=c||this.colsNum;var d=this.getCellInfo(a);return d.rowIndex+d.rowSpan==b&&d.colIndex+d.colSpan==c},getLastCell:function(a){a=a||this.table.getElementsByTagName("td");var b,c=(this.getCellInfo(a[0]),this),d=a[0],e=d.parentNode,f=0,g=0;return utils.each(a,function(a){a.parentNode==e&&(g+=a.colSpan||1),f+=a.rowSpan*a.colSpan||1}),b=f/g,utils.each(a,function(a){if(c.isLastCell(a,b,g))return d=a,!1}),d},selectRow:function(a){var b=this.indexTable[a],c=this.getCell(b[0].rowIndex,b[0].cellIndex),d=this.getCell(b[this.colsNum-1].rowIndex,b[this.colsNum-1].cellIndex),e=this.getCellsRange(c,d);this.setSelected(e)},selectTable:function(){var a=this.table.getElementsByTagName("td"),b=this.getCellsRange(a[0],a[a.length-1]);this.setSelected(b)},setBackground:function(a,b){if("string"==typeof b)utils.each(a,function(a){a.style.backgroundColor=b});else if("object"==typeof b){b=utils.extend({repeat:!0,colorList:["#ddd","#fff"]},b);for(var c,d=this.getCellInfo(a[0]).rowIndex,e=0,f=b.colorList,g=function(a,b,c){return a[b]?a[b]:c?a[b%a.length]:""},h=0;c=a[h++];){var i=this.getCellInfo(c);c.style.backgroundColor=g(f,d+e==i.rowIndex?e:++e,b.repeat)}}},removeBackground:function(a){utils.each(a,function(a){a.style.backgroundColor=""})}}}(),function(){function a(a,c){var d=domUtils.getElementsByTagName(a,"td th");utils.each(d,function(a){a.removeAttribute("width")}),a.setAttribute("width",b(c,!0,g(c,a)));var e=[];setTimeout(function(){utils.each(d,function(a){1==a.colSpan&&e.push(a.offsetWidth)}),utils.each(d,function(a,b){1==a.colSpan&&a.setAttribute("width",e[b]+"")})},0)}function b(a,b,c){var d=a.body;return d.offsetWidth-(b?2*parseInt(domUtils.getComputedStyle(d,"margin-left"),10):0)-2*c.tableBorder-(a.options.offsetWidth||0)}function c(a){var b=e(a).cell;if(b){var c=h(b);return c.selectedTds.length?c.selectedTds:[b]}return[]}var d=UE.UETable,e=function(a){return d.getTableItemsByRange(a)},f=function(a){return d.getUETableBySelected(a)},g=function(a,b){return d.getDefaultValue(a,b)},h=function(a){return d.getUETable(a)};UE.commands.inserttable={queryCommandState:function(){return e(this).table?-1:0},execCommand:function(a,b){function c(a,b){for(var c=[],d=a.numRows,e=a.numCols,f=0;f<d;f++){c.push("<tr"+(0==f?' class="firstRow"':"")+">");for(var g=0;g<e;g++)c.push('<td width="'+b+'"  vAlign="'+a.tdvalign+'" >'+(browser.ie&&browser.version<11?domUtils.fillChar:"<br/>")+"</td>");c.push("</tr>")}return"<table><tbody>"+c.join("")+"</tbody></table>"}b||(b=utils.extend({},{numCols:this.options.defaultCols,numRows:this.options.defaultRows,tdvalign:this.options.tdvalign}));var d=this,e=this.selection.getRange(),f=e.startContainer,h=domUtils.findParent(f,function(a){return domUtils.isBlockElm(a)},!0)||d.body,i=g(d),j=h.offsetWidth,k=Math.floor(j/b.numCols-2*i.tdPadding-i.tdBorder);!b.tdvalign&&(b.tdvalign=d.options.tdvalign),d.execCommand("inserthtml",c(b,k))}},UE.commands.insertparagraphbeforetable={queryCommandState:function(){return e(this).cell?0:-1},execCommand:function(){var a=e(this).table;if(a){var b=this.document.createElement("p");b.innerHTML=browser.ie?"&nbsp;":"<br />",a.parentNode.insertBefore(b,a),this.selection.getRange().setStart(b,0).setCursor()}}},UE.commands.deletetable={queryCommandState:function(){var a=this.selection.getRange();return domUtils.findParentByTagName(a.startContainer,"table",!0)?0:-1},execCommand:function(a,b){var c=this.selection.getRange();if(b=b||domUtils.findParentByTagName(c.startContainer,"table",!0)){var d=b.nextSibling;d||(d=domUtils.createElement(this.document,"p",{innerHTML:browser.ie?domUtils.fillChar:"<br/>"}),b.parentNode.insertBefore(d,b)),domUtils.remove(b),c=this.selection.getRange(),3==d.nodeType?c.setStartBefore(d):c.setStart(d,0),c.setCursor(!1,!0),this.fireEvent("tablehasdeleted")}}},UE.commands.cellalign={queryCommandState:function(){return c(this).length?0:-1},execCommand:function(a,b){var d=c(this);if(d.length)for(var e,f=0;e=d[f++];)e.setAttribute("align",b)}},UE.commands.cellvalign={queryCommandState:function(){return c(this).length?0:-1},execCommand:function(a,b){var d=c(this);if(d.length)for(var e,f=0;e=d[f++];)e.setAttribute("vAlign",b)}},UE.commands.insertcaption={queryCommandState:function(){var a=e(this).table;return a&&0==a.getElementsByTagName("caption").length?1:-1},execCommand:function(){var a=e(this).table;if(a){var b=this.document.createElement("caption");b.innerHTML=browser.ie?domUtils.fillChar:"<br/>",a.insertBefore(b,a.firstChild);var c=this.selection.getRange();c.setStart(b,0).setCursor()}}},UE.commands.deletecaption={queryCommandState:function(){var a=this.selection.getRange(),b=domUtils.findParentByTagName(a.startContainer,"table");return b?0==b.getElementsByTagName("caption").length?-1:1:-1},execCommand:function(){var a=this.selection.getRange(),b=domUtils.findParentByTagName(a.startContainer,"table");if(b){domUtils.remove(b.getElementsByTagName("caption")[0]);var c=this.selection.getRange();c.setStart(b.rows[0].cells[0],0).setCursor()}}},UE.commands.inserttitle={queryCommandState:function(){var a=e(this).table;if(a){var b=a.rows[0];return"th"!=b.cells[b.cells.length-1].tagName.toLowerCase()?0:-1}return-1},execCommand:function(){var a=e(this).table;a&&h(a).insertRow(0,"th");var b=a.getElementsByTagName("th")[0];this.selection.getRange().setStart(b,0).setCursor(!1,!0)}},UE.commands.deletetitle={queryCommandState:function(){var a=e(this).table;if(a){var b=a.rows[0];return"th"==b.cells[b.cells.length-1].tagName.toLowerCase()?0:-1}return-1},execCommand:function(){var a=e(this).table;a&&domUtils.remove(a.rows[0]);var b=a.getElementsByTagName("td")[0];this.selection.getRange().setStart(b,0).setCursor(!1,!0)}},UE.commands.inserttitlecol={queryCommandState:function(){var a=e(this).table;if(a){var b=a.rows[a.rows.length-1];return b.getElementsByTagName("th").length?-1:0}return-1},execCommand:function(b){var c=e(this).table;c&&h(c).insertCol(0,"th"),a(c,this);var d=c.getElementsByTagName("th")[0];this.selection.getRange().setStart(d,0).setCursor(!1,!0)}},UE.commands.deletetitlecol={queryCommandState:function(){var a=e(this).table;if(a){var b=a.rows[a.rows.length-1];return b.getElementsByTagName("th").length?0:-1}return-1},execCommand:function(){var b=e(this).table;if(b)for(var c=0;c<b.rows.length;c++)domUtils.remove(b.rows[c].children[0]);a(b,this);var d=b.getElementsByTagName("td")[0];this.selection.getRange().setStart(d,0).setCursor(!1,!0)}},UE.commands.mergeright={queryCommandState:function(a){var b=e(this),c=b.table,d=b.cell;if(!c||!d)return-1;var f=h(c);if(f.selectedTds.length)return-1;var g=f.getCellInfo(d),i=g.colIndex+g.colSpan;if(i>=f.colsNum)return-1;var j=f.indexTable[g.rowIndex][i],k=c.rows[j.rowIndex].cells[j.cellIndex];return k&&d.tagName==k.tagName&&j.rowIndex==g.rowIndex&&j.rowSpan==g.rowSpan?0:-1},execCommand:function(a){var b=this.selection.getRange(),c=b.createBookmark(!0),d=e(this).cell,f=h(d);f.mergeRight(d),b.moveToBookmark(c).select()}},UE.commands.mergedown={queryCommandState:function(a){var b=e(this),c=b.table,d=b.cell;if(!c||!d)return-1;var f=h(c);if(f.selectedTds.length)return-1;var g=f.getCellInfo(d),i=g.rowIndex+g.rowSpan;if(i>=f.rowsNum)return-1;var j=f.indexTable[i][g.colIndex],k=c.rows[j.rowIndex].cells[j.cellIndex];return k&&d.tagName==k.tagName&&j.colIndex==g.colIndex&&j.colSpan==g.colSpan?0:-1},execCommand:function(){var a=this.selection.getRange(),b=a.createBookmark(!0),c=e(this).cell,d=h(c);d.mergeDown(c),a.moveToBookmark(b).select()}},UE.commands.mergecells={queryCommandState:function(){return f(this)?0:-1},execCommand:function(){var a=f(this);if(a&&a.selectedTds.length){var b=a.selectedTds[0];a.mergeRange();var c=this.selection.getRange();domUtils.isEmptyBlock(b)?c.setStart(b,0).collapse(!0):c.selectNodeContents(b),c.select()}}},UE.commands.insertrow={queryCommandState:function(){var a=e(this),b=a.cell;return b&&("TD"==b.tagName||"TH"==b.tagName&&a.tr!==a.table.rows[0])&&h(a.table).rowsNum<this.options.maxRowNum?0:-1},execCommand:function(){var a=this.selection.getRange(),b=a.createBookmark(!0),c=e(this),d=c.cell,f=c.table,g=h(f),i=g.getCellInfo(d);if(g.selectedTds.length)for(var j=g.cellsRange,k=0,l=j.endRowIndex-j.beginRowIndex+1;k<l;k++)g.insertRow(j.beginRowIndex,d);else g.insertRow(i.rowIndex,d);a.moveToBookmark(b).select(),"enabled"===f.getAttribute("interlaced")&&this.fireEvent("interlacetable",f)}},UE.commands.insertrownext={queryCommandState:function(){var a=e(this),b=a.cell;return b&&"TD"==b.tagName&&h(a.table).rowsNum<this.options.maxRowNum?0:-1},execCommand:function(){var a=this.selection.getRange(),b=a.createBookmark(!0),c=e(this),d=c.cell,f=c.table,g=h(f),i=g.getCellInfo(d);if(g.selectedTds.length)for(var j=g.cellsRange,k=0,l=j.endRowIndex-j.beginRowIndex+1;k<l;k++)g.insertRow(j.endRowIndex+1,d);else g.insertRow(i.rowIndex+i.rowSpan,d);a.moveToBookmark(b).select(),"enabled"===f.getAttribute("interlaced")&&this.fireEvent("interlacetable",f)}},UE.commands.deleterow={queryCommandState:function(){var a=e(this);return a.cell?0:-1},execCommand:function(){var a=e(this).cell,b=h(a),c=b.cellsRange,d=b.getCellInfo(a),f=b.getVSideCell(a),g=b.getVSideCell(a,!0),i=this.selection.getRange();if(utils.isEmptyObject(c))b.deleteRow(d.rowIndex);else for(var j=c.beginRowIndex;j<c.endRowIndex+1;j++)b.deleteRow(c.beginRowIndex);var k=b.table;if(k.getElementsByTagName("td").length)if(1==d.rowSpan||d.rowSpan==c.endRowIndex-c.beginRowIndex+1)(g||f)&&i.selectNodeContents(g||f).setCursor(!1,!0);else{var l=b.getCell(d.rowIndex,b.indexTable[d.rowIndex][d.colIndex].cellIndex);l&&i.selectNodeContents(l).setCursor(!1,!0)}else{var m=k.nextSibling;domUtils.remove(k),m&&i.setStart(m,0).setCursor(!1,!0)}"enabled"===k.getAttribute("interlaced")&&this.fireEvent("interlacetable",k)}},UE.commands.insertcol={queryCommandState:function(a){var b=e(this),c=b.cell;return c&&("TD"==c.tagName||"TH"==c.tagName&&c!==b.tr.cells[0])&&h(b.table).colsNum<this.options.maxColNum?0:-1},execCommand:function(a){var b=this.selection.getRange(),c=b.createBookmark(!0);if(this.queryCommandState(a)!=-1){var d=e(this).cell,f=h(d),g=f.getCellInfo(d);if(f.selectedTds.length)for(var i=f.cellsRange,j=0,k=i.endColIndex-i.beginColIndex+1;j<k;j++)f.insertCol(i.beginColIndex,d);else f.insertCol(g.colIndex,d);b.moveToBookmark(c).select(!0)}}},UE.commands.insertcolnext={queryCommandState:function(){var a=e(this),b=a.cell;return b&&h(a.table).colsNum<this.options.maxColNum?0:-1},execCommand:function(){var a=this.selection.getRange(),b=a.createBookmark(!0),c=e(this).cell,d=h(c),f=d.getCellInfo(c);
if(d.selectedTds.length)for(var g=d.cellsRange,i=0,j=g.endColIndex-g.beginColIndex+1;i<j;i++)d.insertCol(g.endColIndex+1,c);else d.insertCol(f.colIndex+f.colSpan,c);a.moveToBookmark(b).select()}},UE.commands.deletecol={queryCommandState:function(){var a=e(this);return a.cell?0:-1},execCommand:function(){var a=e(this).cell,b=h(a),c=b.cellsRange,d=b.getCellInfo(a),f=b.getHSideCell(a),g=b.getHSideCell(a,!0);if(utils.isEmptyObject(c))b.deleteCol(d.colIndex);else for(var i=c.beginColIndex;i<c.endColIndex+1;i++)b.deleteCol(c.beginColIndex);var j=b.table,k=this.selection.getRange();if(j.getElementsByTagName("td").length)domUtils.inDoc(a,this.document)?k.setStart(a,0).setCursor(!1,!0):g&&domUtils.inDoc(g,this.document)?k.selectNodeContents(g).setCursor(!1,!0):f&&domUtils.inDoc(f,this.document)&&k.selectNodeContents(f).setCursor(!0,!0);else{var l=j.nextSibling;domUtils.remove(j),l&&k.setStart(l,0).setCursor(!1,!0)}}},UE.commands.splittocells={queryCommandState:function(){var a=e(this),b=a.cell;if(!b)return-1;var c=h(a.table);return c.selectedTds.length>0?-1:b&&(b.colSpan>1||b.rowSpan>1)?0:-1},execCommand:function(){var a=this.selection.getRange(),b=a.createBookmark(!0),c=e(this).cell,d=h(c);d.splitToCells(c),a.moveToBookmark(b).select()}},UE.commands.splittorows={queryCommandState:function(){var a=e(this),b=a.cell;if(!b)return-1;var c=h(a.table);return c.selectedTds.length>0?-1:b&&b.rowSpan>1?0:-1},execCommand:function(){var a=this.selection.getRange(),b=a.createBookmark(!0),c=e(this).cell,d=h(c);d.splitToRows(c),a.moveToBookmark(b).select()}},UE.commands.splittocols={queryCommandState:function(){var a=e(this),b=a.cell;if(!b)return-1;var c=h(a.table);return c.selectedTds.length>0?-1:b&&b.colSpan>1?0:-1},execCommand:function(){var a=this.selection.getRange(),b=a.createBookmark(!0),c=e(this).cell,d=h(c);d.splitToCols(c),a.moveToBookmark(b).select()}},UE.commands.adaptbytext=UE.commands.adaptbywindow={queryCommandState:function(){return e(this).table?0:-1},execCommand:function(b){var c=e(this),d=c.table;if(d)if("adaptbywindow"==b)a(d,this);else{var f=domUtils.getElementsByTagName(d,"td th");utils.each(f,function(a){a.removeAttribute("width")}),d.removeAttribute("width")}}},UE.commands.averagedistributecol={queryCommandState:function(){var a=f(this);return a&&(a.isFullRow()||a.isFullCol())?0:-1},execCommand:function(a){function b(){var a,b=e.table,c=0,f=0,h=g(d,b);if(e.isFullRow())c=b.offsetWidth,f=e.colsNum;else for(var i,j=e.cellsRange.beginColIndex,k=e.cellsRange.endColIndex,l=j;l<=k;)i=e.selectedTds[l],c+=i.offsetWidth,l+=i.colSpan,f+=1;return a=Math.ceil(c/f)-2*h.tdBorder-2*h.tdPadding}function c(a){utils.each(domUtils.getElementsByTagName(e.table,"th"),function(a){a.setAttribute("width","")});var b=e.isFullRow()?domUtils.getElementsByTagName(e.table,"td"):e.selectedTds;utils.each(b,function(b){1==b.colSpan&&b.setAttribute("width",a)})}var d=this,e=f(d);e&&e.selectedTds.length&&c(b())}},UE.commands.averagedistributerow={queryCommandState:function(){var a=f(this);return a?a.selectedTds&&/th/gi.test(a.selectedTds[0].tagName)?-1:a.isFullRow()||a.isFullCol()?0:-1:-1},execCommand:function(a){function b(){var a,b,c=0,f=e.table,h=g(d,f),i=parseInt(domUtils.getComputedStyle(f.getElementsByTagName("td")[0],"padding-top"));if(e.isFullCol()){var j,k,l=domUtils.getElementsByTagName(f,"caption"),m=domUtils.getElementsByTagName(f,"th");l.length>0&&(j=l[0].offsetHeight),m.length>0&&(k=m[0].offsetHeight),c=f.offsetHeight-(j||0)-(k||0),b=0==m.length?e.rowsNum:e.rowsNum-1}else{for(var n=e.cellsRange.beginRowIndex,o=e.cellsRange.endRowIndex,p=0,q=domUtils.getElementsByTagName(f,"tr"),r=n;r<=o;r++)c+=q[r].offsetHeight,p+=1;b=p}return a=browser.ie&&browser.version<9?Math.ceil(c/b):Math.ceil(c/b)-2*h.tdBorder-2*i}function c(a){var b=e.isFullCol()?domUtils.getElementsByTagName(e.table,"td"):e.selectedTds;utils.each(b,function(b){1==b.rowSpan&&b.setAttribute("height",a)})}var d=this,e=f(d);e&&e.selectedTds.length&&c(b())}},UE.commands.cellalignment={queryCommandState:function(){return e(this).table?0:-1},execCommand:function(a,b){var c=this,d=f(c);if(d)utils.each(d.selectedTds,function(a){domUtils.setAttributes(a,b)});else{var e=c.selection.getStart(),g=e&&domUtils.findParentByTagName(e,["td","th","caption"],!0);/caption/gi.test(g.tagName)?(g.style.textAlign=b.align,g.style.verticalAlign=b.vAlign):domUtils.setAttributes(g,b),c.selection.getRange().setCursor(!0)}},queryCommandValue:function(a){var b=e(this).cell;if(b||(b=c(this)[0]),b){var d=UE.UETable.getUETable(b).selectedTds;return!d.length&&(d=b),UE.UETable.getTableCellAlignState(d)}return null}},UE.commands.tablealignment={queryCommandState:function(){return browser.ie&&browser.version<8?-1:e(this).table?0:-1},execCommand:function(a,b){var c=this,d=c.selection.getStart(),e=d&&domUtils.findParentByTagName(d,["table"],!0);e&&e.setAttribute("align",b)}},UE.commands.edittable={queryCommandState:function(){return e(this).table?0:-1},execCommand:function(a,b){var c=this.selection.getRange(),d=domUtils.findParentByTagName(c.startContainer,"table");if(d){var e=domUtils.getElementsByTagName(d,"td").concat(domUtils.getElementsByTagName(d,"th"),domUtils.getElementsByTagName(d,"caption"));utils.each(e,function(a){a.style.borderColor=b})}}},UE.commands.edittd={queryCommandState:function(){return e(this).table?0:-1},execCommand:function(a,b){var c=this,d=f(c);if(d)utils.each(d.selectedTds,function(a){a.style.backgroundColor=b});else{var e=c.selection.getStart(),g=e&&domUtils.findParentByTagName(e,["td","th","caption"],!0);g&&(g.style.backgroundColor=b)}}},UE.commands.settablebackground={queryCommandState:function(){return c(this).length>1?0:-1},execCommand:function(a,b){var d,e;d=c(this),e=h(d[0]),e.setBackground(d,b)}},UE.commands.cleartablebackground={queryCommandState:function(){var a=c(this);if(!a.length)return-1;for(var b,d=0;b=a[d++];)if(""!==b.style.backgroundColor)return 0;return-1},execCommand:function(){var a=c(this),b=h(a[0]);b.removeBackground(a)}},UE.commands.interlacetable=UE.commands.uninterlacetable={queryCommandState:function(a){var b=e(this).table;if(!b)return-1;var c=b.getAttribute("interlaced");return"interlacetable"==a?"enabled"===c?-1:0:c&&"disabled"!==c?0:-1},execCommand:function(a,b){var c=e(this).table;"interlacetable"==a?(c.setAttribute("interlaced","enabled"),this.fireEvent("interlacetable",c,b)):(c.setAttribute("interlaced","disabled"),this.fireEvent("uninterlacetable",c))}},UE.commands.setbordervisible={queryCommandState:function(a){var b=e(this).table;return b?0:-1},execCommand:function(){var a=e(this).table;utils.each(domUtils.getElementsByTagName(a,"td"),function(a){a.style.borderWidth="1px",a.style.borderStyle="solid"})}}}(),UE.plugins.table=function(){function a(a){}function b(a,b){c(a,"width",!0),c(a,"height",!0)}function c(a,b,c){a.style[b]&&(c&&a.setAttribute(b,parseInt(a.style[b],10)),a.style[b]="")}function d(a){if("TD"==a.tagName||"TH"==a.tagName)return a;var b;return(b=domUtils.findParentByTagName(a,"td",!0)||domUtils.findParentByTagName(a,"th",!0))?b:null}function e(a){var b=new RegExp(domUtils.fillChar,"g");if(a[browser.ie?"innerText":"textContent"].replace(/^\s*$/,"").replace(b,"").length>0)return 0;for(var c in dtd.$isNotEmpty)if(a.getElementsByTagName(c).length)return 0;return 1}function f(a){return a.pageX||a.pageY?{x:a.pageX,y:a.pageY}:{x:a.clientX+N.document.body.scrollLeft-N.document.body.clientLeft,y:a.clientY+N.document.body.scrollTop-N.document.body.clientTop}}function g(b){if(!A())try{var c,e=d(b.target||b.srcElement);if(R&&(N.body.style.webkitUserSelect="none",(Math.abs(V.x-b.clientX)>T||Math.abs(V.y-b.clientY)>T)&&(t(),R=!1,U=0,v(b))),ca&&ha)return U=0,N.body.style.webkitUserSelect="none",N.selection.getNative()[browser.ie9below?"empty":"removeAllRanges"](),c=f(b),m(N,!0,ca,c,e),void("h"==ca?ga.style.left=k(ha,b)+"px":"v"==ca&&(ga.style.top=l(ha,b)+"px"));if(e){if(N.fireEvent("excludetable",e)===!0)return;c=f(b);var g=n(e,c),i=domUtils.findParentByTagName(e,"table",!0);if(j(i,e,b,!0)){if(N.fireEvent("excludetable",i)===!0)return;N.body.style.cursor="url("+N.options.cursorpath+"h.png),pointer"}else if(j(i,e,b)){if(N.fireEvent("excludetable",i)===!0)return;N.body.style.cursor="url("+N.options.cursorpath+"v.png),pointer"}else{N.body.style.cursor="text";/\d/.test(g)&&(g=g.replace(/\d/,""),e=Y(e).getPreviewCell(e,"v"==g)),m(N,!!e&&!!g,e?g:"",c,e)}}else h(!1,i,N)}catch(o){a(o)}}function h(a,b,c){if(a)i(b,c);else{if(fa)return;la=setTimeout(function(){!fa&&ea&&ea.parentNode&&ea.parentNode.removeChild(ea)},2e3)}}function i(a,b){function c(c,d){clearTimeout(g),g=setTimeout(function(){b.fireEvent("tableClicked",a,d)},300)}function d(c){clearTimeout(g);var d=Y(a),e=a.rows[0].cells[0],f=d.getLastCell(),h=d.getCellsRange(e,f);b.selection.getRange().setStart(e,0).setCursor(!1,!0),d.setSelected(h)}var e=domUtils.getXY(a),f=a.ownerDocument;if(ea&&ea.parentNode)return ea;ea=f.createElement("div"),ea.contentEditable=!1,ea.innerHTML="",ea.style.cssText="width:15px;height:15px;background-image:url("+b.options.UEDITOR_HOME_URL+"dialogs/table/dragicon.png);position: absolute;cursor:move;top:"+(e.y-15)+"px;left:"+e.x+"px;",domUtils.unSelectable(ea),ea.onmouseover=function(a){fa=!0},ea.onmouseout=function(a){fa=!1},domUtils.on(ea,"click",function(a,b){c(b,this)}),domUtils.on(ea,"dblclick",function(a,b){d(b)}),domUtils.on(ea,"dragstart",function(a,b){domUtils.preventDefault(b)});var g;f.body.appendChild(ea)}function j(a,b,c,d){var e=f(c),g=n(b,e);if(d){var h=a.getElementsByTagName("caption")[0],i=h?h.offsetHeight:0;return"v1"==g&&e.y-domUtils.getXY(a).y-i<8}return"h1"==g&&e.x-domUtils.getXY(a).x<8}function k(a,b){var c=Y(a);if(c){var d=c.getSameEndPosCells(a,"x")[0],e=c.getSameStartPosXCells(a)[0],g=f(b).x,h=(d?domUtils.getXY(d).x:domUtils.getXY(c.table).x)+20,i=e?domUtils.getXY(e).x+e.offsetWidth-20:N.body.offsetWidth+5||parseInt(domUtils.getComputedStyle(N.body,"width"),10);return h+=Q,i-=Q,g<h?h:g>i?i:g}}function l(b,c){try{var d=domUtils.getXY(b).y,e=f(c).y;return e<d?d:e}catch(g){a(g)}}function m(b,c,d,e,f){try{b.body.style.cursor="h"==d?"col-resize":"v"==d?"row-resize":"text",browser.ie&&(!d||ia||Z(b)?I(b):(H(b,b.document),J(d,f))),da=c}catch(g){a(g)}}function n(a,b){var c=domUtils.getXY(a);return c?c.x+a.offsetWidth-b.x<S?"h":b.x-c.x<S?"h1":c.y+a.offsetHeight-b.y<S?"v":b.y-c.y<S?"v1":"":""}function o(a,b){if(!A())if(V={x:b.clientX,y:b.clientY},2==b.button){var c=Z(N),d=!1;if(c){var e=M(N,b);utils.each(c.selectedTds,function(a){a===e&&(d=!0)}),d?(e=c.selectedTds[0],setTimeout(function(){N.selection.getRange().setStart(e,0).setCursor(!1,!0)},0)):(_(domUtils.getElementsByTagName(N.body,"th td")),c.clearSelected())}}else q(b)}function p(a){U=0,a=a||N.window.event;var b=d(a.target||a.srcElement);if(b){var c;if(c=n(b,f(a))){if(I(N),"h1"==c)if(c="h",j(domUtils.findParentByTagName(b,"table"),b,a))N.execCommand("adaptbywindow");else if(b=Y(b).getPreviewCell(b)){var e=N.selection.getRange();e.selectNodeContents(b).setCursor(!0,!0)}if("h"==c){var g=Y(b),h=g.table,i=C(b,h,!0);i=s(i,"left"),g.width=g.offsetWidth;var k=[],l=[];utils.each(i,function(a){k.push(a.offsetWidth)}),utils.each(i,function(a){a.removeAttribute("width")}),window.setTimeout(function(){var a=!0;utils.each(i,function(b,c){var d=b.offsetWidth;return d>k[c]?(a=!1,!1):void l.push(d)});var b=a?l:k;utils.each(i,function(a,c){a.width=b[c]-G()})},0)}}}}function q(a){if(_(domUtils.getElementsByTagName(N.body,"td th")),utils.each(N.document.getElementsByTagName("table"),function(a){a.ueTable=null}),aa=M(N,a)){var b=domUtils.findParentByTagName(aa,"table",!0);ut=Y(b),ut&&ut.clearSelected(),da?r(a):(N.document.body.style.webkitUserSelect="",ia=!0,N.addListener("mouseover",x))}}function r(a){browser.ie&&(a=u(a)),t(),R=!0,O=setTimeout(function(){v(a)},W)}function s(a,b){for(var c=[],d=null,e=0,f=a.length;e<f;e++)d=a[e][b],d&&c.push(d);return c}function t(){O&&clearTimeout(O),O=null}function u(a){var b=["pageX","pageY","clientX","clientY","srcElement","target"],c={};if(a)for(var d,e,f=0;d=b[f];f++)e=a[d],e&&(c[d]=e);return c}function v(a){if(R=!1,aa=a.target||a.srcElement){var b=n(aa,f(a));/\d/.test(b)&&(b=b.replace(/\d/,""),aa=Y(aa).getPreviewCell(aa,"v"==b)),I(N),H(N,N.document),N.fireEvent("saveScene"),J(b,aa),ia=!0,ca=b,ha=aa}}function w(a,b){if(!A()){if(t(),R=!1,da&&(U=++U%3,V={x:b.clientX,y:b.clientY},P=setTimeout(function(){U>0&&U--},W),2===U))return U=0,void p(b);if(2!=b.button){var c=this,d=c.selection.getRange(),e=domUtils.findParentByTagName(d.startContainer,"table",!0),f=domUtils.findParentByTagName(d.endContainer,"table",!0);if((e||f)&&(e===f?(e=domUtils.findParentByTagName(d.startContainer,["td","th","caption"],!0),f=domUtils.findParentByTagName(d.endContainer,["td","th","caption"],!0),e!==f&&c.selection.clearRange()):c.selection.clearRange()),ia=!1,c.document.body.style.webkitUserSelect="",ca&&ha&&(c.selection.getNative()[browser.ie9below?"empty":"removeAllRanges"](),U=0,ga=c.document.getElementById("ue_tableDragLine"))){var g=domUtils.getXY(ha),h=domUtils.getXY(ga);switch(ca){case"h":z(ha,h.x-g.x);break;case"v":B(ha,h.y-g.y-ha.offsetHeight)}return ca="",ha=null,I(c),void c.fireEvent("saveScene")}if(aa){var i=Y(aa),j=i?i.selectedTds[0]:null;if(j)d=new dom.Range(c.document),domUtils.isEmptyBlock(j)?d.setStart(j,0).setCursor(!1,!0):d.selectNodeContents(j).shrinkBoundary().setCursor(!1,!0);else if(d=c.selection.getRange().shrinkBoundary(),!d.collapsed){var e=domUtils.findParentByTagName(d.startContainer,["td","th"],!0),f=domUtils.findParentByTagName(d.endContainer,["td","th"],!0);(e&&!f||!e&&f||e&&f&&e!==f)&&d.setCursor(!1,!0)}aa=null,c.removeListener("mouseover",x)}else{var k=domUtils.findParentByTagName(b.target||b.srcElement,"td",!0);if(k||(k=domUtils.findParentByTagName(b.target||b.srcElement,"th",!0)),k&&("TD"==k.tagName||"TH"==k.tagName)){if(c.fireEvent("excludetable",k)===!0)return;d=new dom.Range(c.document),d.setStart(k,0).setCursor(!1,!0)}}c._selectionChange(250,b)}}}function x(a,b){if(!A()){var c=this,d=b.target||b.srcElement;if(ba=domUtils.findParentByTagName(d,"td",!0)||domUtils.findParentByTagName(d,"th",!0),aa&&ba&&("TD"==aa.tagName&&"TD"==ba.tagName||"TH"==aa.tagName&&"TH"==ba.tagName)&&domUtils.findParentByTagName(aa,"table")==domUtils.findParentByTagName(ba,"table")){var e=Y(ba);if(aa!=ba){c.document.body.style.webkitUserSelect="none",c.selection.getNative()[browser.ie9below?"empty":"removeAllRanges"]();var f=e.getCellsRange(aa,ba);e.setSelected(f)}else c.document.body.style.webkitUserSelect="",e.clearSelected()}b.preventDefault?b.preventDefault():b.returnValue=!1}}function y(a,b,c){var d=parseInt(domUtils.getComputedStyle(a,"line-height"),10),e=c+b;b=e<d?d:e,a.style.height&&(a.style.height=""),1==a.rowSpan?a.setAttribute("height",b):a.removeAttribute&&a.removeAttribute("height")}function z(a,b){var c=Y(a);if(c){var d=c.table,e=C(a,d);if(d.style.width="",d.removeAttribute("width"),b=D(b,a,e),a.nextSibling){utils.each(e,function(a){a.left.width=+a.left.width+b,a.right&&(a.right.width=+a.right.width-b)})}else utils.each(e,function(a){a.left.width-=-b})}}function A(){return"false"===N.body.contentEditable}function B(a,b){if(!(Math.abs(b)<10)){var c=Y(a);if(c)for(var d,e=c.getSameEndPosCells(a,"y"),f=e[0]?e[0].offsetHeight:0,g=0;d=e[g++];)y(d,b,f)}}function C(a,b,c){if(b||(b=domUtils.findParentByTagName(a,"table")),!b)return null;for(var d=(domUtils.getNodeIndex(a),a),e=b.rows,f=0;d;)1===d.nodeType&&(f+=d.colSpan||1),d=d.previousSibling;d=null;var g=[];return utils.each(e,function(a){var b=a.cells,d=0;utils.each(b,function(a){return d+=a.colSpan||1,d===f?(g.push({left:a,right:a.nextSibling||null}),!1):d>f?(c&&g.push({left:a}),!1):void 0})}),g}function D(a,b,c){if(a-=G(),a<0)return 0;a-=E(b);var d=a<0?"left":"right";return a=Math.abs(a),utils.each(c,function(b){var c=b[d];c&&(a=Math.min(a,E(c)-Q))}),a=a<0?0:a,"left"===d?-a:a}function E(a){var b=0,b=a.offsetWidth-G();a.nextSibling||(b-=F(a)),b=b<0?0:b;try{a.width=b}catch(c){}return b}function F(a){if(tab=domUtils.findParentByTagName(a,"table",!1),void 0===tab.offsetVal){var b=a.previousSibling;b?tab.offsetVal=a.offsetWidth-b.offsetWidth===X.borderWidth?X.borderWidth:0:tab.offsetVal=0}return tab.offsetVal}function G(){if(void 0===X.tabcellSpace){var a=N.document.createElement("table"),b=N.document.createElement("tbody"),c=N.document.createElement("tr"),d=N.document.createElement("td"),e=null;d.style.cssText="border: 0;",d.width=1,c.appendChild(d),c.appendChild(e=d.cloneNode(!1)),b.appendChild(c),a.appendChild(b),a.style.cssText="visibility: hidden;",N.body.appendChild(a),X.paddingSpace=d.offsetWidth-1;var f=a.offsetWidth;d.style.cssText="",e.style.cssText="",X.borderWidth=(a.offsetWidth-f)/3,X.tabcellSpace=X.paddingSpace+X.borderWidth,N.body.removeChild(a)}return G=function(){return X.tabcellSpace},X.tabcellSpace}function H(a,b){ia||(ga=a.document.createElement("div"),domUtils.setAttributes(ga,{id:"ue_tableDragLine",unselectable:"on",contenteditable:!1,onresizestart:"return false",ondragstart:"return false",onselectstart:"return false",style:"background-color:blue;position:absolute;padding:0;margin:0;background-image:none;border:0px none;opacity:0;filter:alpha(opacity=0)"}),a.body.appendChild(ga))}function I(a){if(!ia)for(var b;b=a.document.getElementById("ue_tableDragLine");)domUtils.remove(b)}function J(a,b){if(b){var c,d=domUtils.findParentByTagName(b,"table"),e=d.getElementsByTagName("caption"),f=d.offsetWidth,g=d.offsetHeight-(e.length>0?e[0].offsetHeight:0),h=domUtils.getXY(d),i=domUtils.getXY(b);switch(a){case"h":c="height:"+g+"px;top:"+(h.y+(e.length>0?e[0].offsetHeight:0))+"px;left:"+(i.x+b.offsetWidth),ga.style.cssText=c+"px;position: absolute;display:block;background-color:blue;width:1px;border:0; color:blue;opacity:.3;filter:alpha(opacity=30)";break;case"v":c="width:"+f+"px;left:"+h.x+"px;top:"+(i.y+b.offsetHeight),ga.style.cssText=c+"px;overflow:hidden;position: absolute;display:block;background-color:blue;height:1px;border:0;color:blue;opacity:.2;filter:alpha(opacity=20)"}}}function K(a,b){for(var c,d,e=domUtils.getElementsByTagName(a.body,"table"),f=0;d=e[f++];){var g=domUtils.getElementsByTagName(d,"td");g[0]&&(b?(c=g[0].style.borderColor.replace(/\s/g,""),/(#ffffff)|(rgb\(255,255,255\))/gi.test(c)&&domUtils.addClass(d,"noBorderTable")):domUtils.removeClasses(d,"noBorderTable"))}}function L(a,b,c){var d=a.body;return d.offsetWidth-(b?2*parseInt(domUtils.getComputedStyle(d,"margin-left"),10):0)-2*c.tableBorder-(a.options.offsetWidth||0)}function M(a,b){var c=domUtils.findParentByTagName(b.target||b.srcElement,["td","th"],!0),d=null;if(!c)return null;if(d=n(c,f(b)),!c)return null;if("h1"===d&&c.previousSibling){var e=domUtils.getXY(c),g=c.offsetWidth;Math.abs(e.x+g-b.clientX)>g/3&&(c=c.previousSibling)}else if("v1"===d&&c.parentNode.previousSibling){var e=domUtils.getXY(c),h=c.offsetHeight;Math.abs(e.y+h-b.clientY)>h/3&&(c=c.parentNode.previousSibling.firstChild)}return c&&a.fireEvent("excludetable",c)!==!0?c:null}var N=this,O=null,P=null,Q=5,R=!1,S=5,T=10,U=0,V=null,W=360,X=UE.UETable,Y=function(a){return X.getUETable(a)},Z=function(a){return X.getUETableBySelected(a)},$=function(a,b){return X.getDefaultValue(a,b)},_=function(a){return X.removeSelectedClass(a)};N.ready(function(){var a=this,b=a.selection.getText;a.selection.getText=function(){var c=Z(a);if(c){var d="";return utils.each(c.selectedTds,function(a){d+=a[browser.ie?"innerText":"textContent"]}),d}return b.call(a.selection)}});var aa=null,ba=null,ca="",da=!1,ea=null,fa=!1,ga=null,ha=null,ia=!1,ja=!0;N.setOpt({maxColNum:20,maxRowNum:100,defaultCols:5,defaultRows:5,tdvalign:"top",cursorpath:N.options.UEDITOR_HOME_URL+"themes/default/images/cursor_",tableDragable:!1,classList:["ue-table-interlace-color-single","ue-table-interlace-color-double"]}),N.getUETable=Y;var ka={deletetable:1,inserttable:1,cellvalign:1,insertcaption:1,deletecaption:1,inserttitle:1,deletetitle:1,mergeright:1,mergedown:1,mergecells:1,insertrow:1,insertrownext:1,deleterow:1,insertcol:1,insertcolnext:1,deletecol:1,splittocells:1,splittorows:1,splittocols:1,adaptbytext:1,adaptbywindow:1,adaptbycustomer:1,insertparagraph:1,insertparagraphbeforetable:1,averagedistributecol:1,averagedistributerow:1};N.ready(function(){utils.cssRule("table",".selectTdClass{background-color:#edf5fa !important}table.noBorderTable td,table.noBorderTable th,table.noBorderTable caption{border:1px dashed #ddd !important}table{margin-bottom:10px;border-collapse:collapse;display:table;}td,th{padding: 5px 10px;border: 1px solid #DDD;}caption{border:1px dashed #DDD;border-bottom:0;padding:3px;text-align:center;}th{border-top:1px solid #BBB;background-color:#F7F7F7;}table tr.firstRow th{border-top-width:2px;}.ue-table-interlace-color-single{ background-color: #fcfcfc; } .ue-table-interlace-color-double{ background-color: #f7faff; }td p{margin:0;padding:0;}",N.document);var a,c,f;N.addListener("keydown",function(b,d){var g=this,h=d.keyCode||d.which;if(8==h){var i=Z(g);i&&i.selectedTds.length&&(i.isFullCol()?g.execCommand("deletecol"):i.isFullRow()?g.execCommand("deleterow"):g.fireEvent("delcells"),domUtils.preventDefault(d));var j=domUtils.findParentByTagName(g.selection.getStart(),"caption",!0),k=g.selection.getRange();if(k.collapsed&&j&&e(j)){g.fireEvent("saveScene");var l=j.parentNode;domUtils.remove(j),l&&k.setStart(l.rows[0].cells[0],0).setCursor(!1,!0),g.fireEvent("saveScene")}}if(46==h&&(i=Z(g))){g.fireEvent("saveScene");for(var m,n=0;m=i.selectedTds[n++];)domUtils.fillNode(g.document,m);g.fireEvent("saveScene"),domUtils.preventDefault(d)}if(13==h){var o=g.selection.getRange(),j=domUtils.findParentByTagName(o.startContainer,"caption",!0);if(j){var l=domUtils.findParentByTagName(j,"table");return o.collapsed?j&&o.setStart(l.rows[0].cells[0],0).setCursor(!1,!0):(o.deleteContents(),g.fireEvent("saveScene")),void domUtils.preventDefault(d)}if(o.collapsed){var l=domUtils.findParentByTagName(o.startContainer,"table");if(l){var p=l.rows[0].cells[0],q=domUtils.findParentByTagName(g.selection.getStart(),["td","th"],!0),r=l.previousSibling;if(p===q&&(!r||1==r.nodeType&&"TABLE"==r.tagName)&&domUtils.isStartInblock(o)){var s=domUtils.findParent(g.selection.getStart(),function(a){return domUtils.isBlockElm(a)},!0);s&&(/t(h|d)/i.test(s.tagName)||s===q.firstChild)&&(g.execCommand("insertparagraphbeforetable"),domUtils.preventDefault(d))}}}}if((d.ctrlKey||d.metaKey)&&"67"==d.keyCode){a=null;var i=Z(g);if(i){var t=i.selectedTds;c=i.isFullCol(),f=i.isFullRow(),a=[[i.cloneCell(t[0],null,!0)]];for(var m,n=1;m=t[n];n++)m.parentNode!==t[n-1].parentNode?a.push([i.cloneCell(m,null,!0)]):a[a.length-1].push(i.cloneCell(m,null,!0))}}}),N.addListener("tablehasdeleted",function(){m(this,!1,"",null),ea&&domUtils.remove(ea)}),N.addListener("beforepaste",function(d,g){var h=this,i=h.selection.getRange();if(domUtils.findParentByTagName(i.startContainer,"caption",!0)){var j=h.document.createElement("div");return j.innerHTML=g.html,void(g.html=j[browser.ie9below?"innerText":"textContent"])}var k=Z(h);if(a){h.fireEvent("saveScene");var l,m,i=h.selection.getRange(),n=domUtils.findParentByTagName(i.startContainer,["td","th"],!0);if(n){var o=Y(n);if(f){var p=o.getCellInfo(n).rowIndex;"TH"==n.tagName&&p++;for(var q,r=0;q=a[r++];){for(var s,t=o.insertRow(p++,"td"),u=0;s=q[u];u++){var v=t.cells[u];v||(v=t.insertCell(u)),v.innerHTML=s.innerHTML,s.getAttribute("width")&&v.setAttribute("width",s.getAttribute("width")),s.getAttribute("vAlign")&&v.setAttribute("vAlign",s.getAttribute("vAlign")),s.getAttribute("align")&&v.setAttribute("align",s.getAttribute("align")),s.style.cssText&&(v.style.cssText=s.style.cssText)}for(var s,u=0;(s=t.cells[u])&&q[u];u++)s.innerHTML=q[u].innerHTML,q[u].getAttribute("width")&&s.setAttribute("width",q[u].getAttribute("width")),q[u].getAttribute("vAlign")&&s.setAttribute("vAlign",q[u].getAttribute("vAlign")),q[u].getAttribute("align")&&s.setAttribute("align",q[u].getAttribute("align")),q[u].style.cssText&&(s.style.cssText=q[u].style.cssText)}}else{if(c){y=o.getCellInfo(n);for(var s,w=0,u=0,q=a[0];s=q[u++];)w+=s.colSpan||1;for(h.__hasEnterExecCommand=!0,r=0;r<w;r++)h.execCommand("insertcol");h.__hasEnterExecCommand=!1,n=o.table.rows[0].cells[y.cellIndex],"TH"==n.tagName&&(n=o.table.rows[1].cells[y.cellIndex])}for(var q,r=0;q=a[r++];){l=n;for(var s,u=0;s=q[u++];)if(n)n.innerHTML=s.innerHTML,s.getAttribute("width")&&n.setAttribute("width",s.getAttribute("width")),s.getAttribute("vAlign")&&n.setAttribute("vAlign",s.getAttribute("vAlign")),s.getAttribute("align")&&n.setAttribute("align",s.getAttribute("align")),s.style.cssText&&(n.style.cssText=s.style.cssText),m=n,n=n.nextSibling;else{var x=s.cloneNode(!0);domUtils.removeAttributes(x,["class","rowSpan","colSpan"]),m.parentNode.appendChild(x)}if(n=o.getNextCell(l,!0,!0),!a[r])break;if(!n){var y=o.getCellInfo(l);o.table.insertRow(o.table.rows.length),o.update(),n=o.getVSideCell(l,!0)}}}o.update()}else{k=h.document.createElement("table");for(var q,r=0;q=a[r++];){for(var s,t=k.insertRow(k.rows.length),u=0;s=q[u++];)x=X.cloneCell(s,null,!0),domUtils.removeAttributes(x,["class"]),t.appendChild(x);2==u&&x.rowSpan>1&&(x.rowSpan=1)}var z=$(h),A=h.body.offsetWidth-(ja?2*parseInt(domUtils.getComputedStyle(h.body,"margin-left"),10):0)-2*z.tableBorder-(h.options.offsetWidth||0);h.execCommand("insertHTML","<table  "+(c&&f?'width="'+A+'"':"")+">"+k.innerHTML.replace(/>\s*</g,"><").replace(/\bth\b/gi,"td")+"</table>")}return h.fireEvent("contentchange"),h.fireEvent("saveScene"),g.html="",!0}var B,j=h.document.createElement("div");j.innerHTML=g.html,B=j.getElementsByTagName("table"),domUtils.findParentByTagName(h.selection.getStart(),"table")?(utils.each(B,function(a){domUtils.remove(a)}),domUtils.findParentByTagName(h.selection.getStart(),"caption",!0)&&(j.innerHTML=j[browser.ie?"innerText":"textContent"])):utils.each(B,function(a){b(a,!0),domUtils.removeAttributes(a,["style","border"]),utils.each(domUtils.getElementsByTagName(a,"td"),function(a){e(a)&&domUtils.fillNode(h.document,a),b(a,!0)})}),g.html=j.innerHTML}),N.addListener("afterpaste",function(){utils.each(domUtils.getElementsByTagName(N.body,"table"),function(a){if(a.offsetWidth>N.body.offsetWidth){var b=$(N,a);a.style.width=N.body.offsetWidth-(ja?2*parseInt(domUtils.getComputedStyle(N.body,"margin-left"),10):0)-2*b.tableBorder-(N.options.offsetWidth||0)+"px"}})}),N.addListener("blur",function(){a=null});var i;N.addListener("keydown",function(){clearTimeout(i),i=setTimeout(function(){var a=N.selection.getRange(),b=domUtils.findParentByTagName(a.startContainer,["th","td"],!0);if(b){var c=b.parentNode.parentNode.parentNode;c.offsetWidth>c.getAttribute("width")&&(b.style.wordBreak="break-all")}},100)}),N.addListener("selectionchange",function(){m(N,!1,"",null)}),N.addListener("contentchange",function(){var a=this;if(I(a),!Z(a)){var b=a.selection.getRange(),c=b.startContainer;c=domUtils.findParentByTagName(c,["td","th"],!0),utils.each(domUtils.getElementsByTagName(a.document,"table"),function(b){a.fireEvent("excludetable",b)!==!0&&(b.ueTable=new X(b),b.onmouseover=function(){a.fireEvent("tablemouseover",b)},b.onmousemove=function(){a.fireEvent("tablemousemove",b),a.options.tableDragable&&h(!0,this,a),utils.defer(function(){a.fireEvent("contentchange",50)},!0)},b.onmouseout=function(){a.fireEvent("tablemouseout",b),m(a,!1,"",null),I(a)},b.onclick=function(b){b=a.window.event||b;var c=d(b.target||b.srcElement);if(c){var e,f=Y(c),g=f.table,h=f.getCellInfo(c),i=a.selection.getRange();if(j(g,c,b,!0)){var k=f.getCell(f.indexTable[f.rowsNum-1][h.colIndex].rowIndex,f.indexTable[f.rowsNum-1][h.colIndex].cellIndex);return void(b.shiftKey&&f.selectedTds.length?f.selectedTds[0]!==k?(e=f.getCellsRange(f.selectedTds[0],k),f.setSelected(e)):i&&i.selectNodeContents(k).select():c!==k?(e=f.getCellsRange(c,k),f.setSelected(e)):i&&i.selectNodeContents(k).select())}if(j(g,c,b)){var l=f.getCell(f.indexTable[h.rowIndex][f.colsNum-1].rowIndex,f.indexTable[h.rowIndex][f.colsNum-1].cellIndex);b.shiftKey&&f.selectedTds.length?f.selectedTds[0]!==l?(e=f.getCellsRange(f.selectedTds[0],l),f.setSelected(e)):i&&i.selectNodeContents(l).select():c!==l?(e=f.getCellsRange(c,l),f.setSelected(e)):i&&i.selectNodeContents(l).select()}}})}),K(a,!0)}}),domUtils.on(N.document,"mousemove",g),domUtils.on(N.document,"mouseout",function(a){var b=a.target||a.srcElement;"TABLE"==b.tagName&&m(N,!1,"",null)}),N.addListener("interlacetable",function(a,b,c){if(b)for(var d=this,e=b.rows,f=e.length,g=function(a,b,c){return a[b]?a[b]:c?a[b%a.length]:""},h=0;h<f;h++)e[h].className=g(c||d.options.classList,h,!0)}),N.addListener("uninterlacetable",function(a,b){if(b)for(var c=this,d=b.rows,e=c.options.classList,f=d.length,g=0;g<f;g++)domUtils.removeClasses(d[g],e)}),N.addListener("mousedown",o),N.addListener("mouseup",w),domUtils.on(N.body,"dragstart",function(a){w.call(N,"dragstart",a)}),N.addOutputRule(function(a){utils.each(a.getNodesByTagName("div"),function(a){"ue_tableDragLine"==a.getAttr("id")&&a.parentNode.removeChild(a)})});var k=0;N.addListener("mousedown",function(){k=0}),N.addListener("tabkeydown",function(){var a=this.selection.getRange(),b=a.getCommonAncestor(!0,!0),c=domUtils.findParentByTagName(b,"table");if(c){if(domUtils.findParentByTagName(b,"caption",!0)){var d=domUtils.getElementsByTagName(c,"th td");d&&d.length&&a.setStart(d[0],0).setCursor(!1,!0)}else{var d=domUtils.findParentByTagName(b,["td","th"],!0),f=Y(d);k=d.rowSpan>1?k:f.getCellInfo(d).rowIndex;var g=f.getTabNextCell(d,k);g?e(g)?a.setStart(g,0).setCursor(!1,!0):a.selectNodeContents(g).select():(N.fireEvent("saveScene"),N.__hasEnterExecCommand=!0,this.execCommand("insertrownext"),N.__hasEnterExecCommand=!1,a=this.selection.getRange(),a.setStart(c.rows[c.rows.length-1].cells[0],0).setCursor(),N.fireEvent("saveScene"))}return!0}}),browser.ie&&N.addListener("selectionchange",function(){m(this,!1,"",null)}),N.addListener("keydown",function(a,b){var c=this,d=b.keyCode||b.which;if(8!=d&&46!=d){var e=!(b.ctrlKey||b.metaKey||b.shiftKey||b.altKey);e&&_(domUtils.getElementsByTagName(c.body,"td"));var f=Z(c);f&&e&&f.clearSelected()}}),N.addListener("beforegetcontent",function(){K(this,!1),browser.ie&&utils.each(this.document.getElementsByTagName("caption"),function(a){domUtils.isEmptyNode(a)&&(a.innerHTML="&nbsp;")})}),N.addListener("aftergetcontent",function(){K(this,!0)}),N.addListener("getAllHtml",function(){_(N.document.getElementsByTagName("td"))}),N.addListener("fullscreenchanged",function(a,b){if(!b){var c=this.body.offsetWidth/document.body.offsetWidth,d=domUtils.getElementsByTagName(this.body,"table");utils.each(d,function(a){if(a.offsetWidth<N.body.offsetWidth)return!1;var b=domUtils.getElementsByTagName(a,"td"),d=[];utils.each(b,function(a){d.push(a.offsetWidth)});for(var e,f=0;e=b[f];f++)e.setAttribute("width",Math.floor(d[f]*c));a.setAttribute("width",Math.floor(L(N,ja,$(N))))})}});var l=N.execCommand;N.execCommand=function(a,b){var c=this;a=a.toLowerCase();var d,f,g=Z(c),h=new dom.Range(c.document),i=c.commands[a]||UE.commands[a];if(i){if(!g||ka[a]||i.notNeedUndo||c.__hasEnterExecCommand)f=l.apply(c,arguments);else{c.__hasEnterExecCommand=!0,c.fireEvent("beforeexeccommand",a),d=g.selectedTds;for(var j,k,m,n=-2,o=-2,p=0;m=d[p];p++)e(m)?h.setStart(m,0).setCursor(!1,!0):h.selectNode(m).select(!0),k=c.queryCommandState(a),j=c.queryCommandValue(a),k!=-1&&(n===k&&o===j||(c._ignoreContentChange=!0,f=l.apply(c,arguments),c._ignoreContentChange=!1),n=c.queryCommandState(a),o=c.queryCommandValue(a),domUtils.isEmptyBlock(m)&&domUtils.fillNode(c.document,m));h.setStart(d[0],0).shrinkBoundary(!0).setCursor(!1,!0),c.fireEvent("contentchange"),c.fireEvent("afterexeccommand",a),c.__hasEnterExecCommand=!1,c._selectionChange()}return f}}});var la},UE.UETable.prototype.sortTable=function(a,b){var c=this.table,d=c.rows,e=[],f="TH"===d[0].cells[0].tagName,g=0;if(this.selectedTds.length){for(var h=this.cellsRange,i=h.endRowIndex+1,j=h.beginRowIndex;j<i;j++)e[j]=d[j];e.splice(0,h.beginRowIndex),g=h.endRowIndex+1===this.rowsNum?0:h.endRowIndex+1;
}else for(var j=0,i=d.length;j<i;j++)e[j]=d[j];var k={reversecurrent:function(a,b){return 1},orderbyasc:function(a,b){var c=a.innerText||a.textContent,d=b.innerText||b.textContent;return c.localeCompare(d)},reversebyasc:function(a,b){var c=a.innerHTML,d=b.innerHTML;return d.localeCompare(c)},orderbynum:function(a,b){var c=a[browser.ie?"innerText":"textContent"].match(/\d+/),d=b[browser.ie?"innerText":"textContent"].match(/\d+/);return c&&(c=+c[0]),d&&(d=+d[0]),(c||0)-(d||0)},reversebynum:function(a,b){var c=a[browser.ie?"innerText":"textContent"].match(/\d+/),d=b[browser.ie?"innerText":"textContent"].match(/\d+/);return c&&(c=+c[0]),d&&(d=+d[0]),(d||0)-(c||0)}};c.setAttribute("data-sort-type",b&&"string"==typeof b&&k[b]?b:""),f&&e.splice(0,1),e=utils.sort(e,function(c,d){var e;return e=b&&"function"==typeof b?b.call(this,c.cells[a],d.cells[a]):b&&"number"==typeof b?1:b&&"string"==typeof b&&k[b]?k[b].call(this,c.cells[a],d.cells[a]):k.orderbyasc.call(this,c.cells[a],d.cells[a])});for(var l=c.ownerDocument.createDocumentFragment(),m=0,i=e.length;m<i;m++)l.appendChild(e[m]);var n=c.getElementsByTagName("tbody")[0];g?n.insertBefore(l,d[g-h.endRowIndex+h.beginRowIndex-1]):n.appendChild(l)},UE.plugins.tablesort=function(){var a=this,b=UE.UETable,c=function(a){return b.getUETable(a)},d=function(a){return b.getTableItemsByRange(a)};a.ready(function(){utils.cssRule("tablesort","table.sortEnabled tr.firstRow th,table.sortEnabled tr.firstRow td{padding-right:20px;background-repeat: no-repeat;background-position: center right;   background-image:url("+a.options.themePath+a.options.theme+"/images/sortable.png);}",a.document),a.addListener("afterexeccommand",function(a,b){"mergeright"!=b&&"mergedown"!=b&&"mergecells"!=b||this.execCommand("disablesort")})}),UE.commands.sorttable={queryCommandState:function(){var a=this,b=d(a);if(!b.cell)return-1;for(var c,e=b.table,f=e.getElementsByTagName("td"),g=0;c=f[g++];)if(1!=c.rowSpan||1!=c.colSpan)return-1;return 0},execCommand:function(a,b){var e=this,f=e.selection.getRange(),g=f.createBookmark(!0),h=d(e),i=h.cell,j=c(h.table),k=j.getCellInfo(i);j.sortTable(k.cellIndex,b),f.moveToBookmark(g);try{f.select()}catch(l){}}},UE.commands.enablesort=UE.commands.disablesort={queryCommandState:function(a){var b=d(this).table;if(b&&"enablesort"==a)for(var c=domUtils.getElementsByTagName(b,"th td"),e=0;e<c.length;e++)if(c[e].getAttribute("colspan")>1||c[e].getAttribute("rowspan")>1)return-1;return b?"enablesort"==a^"sortEnabled"!=b.getAttribute("data-sort")?-1:0:-1},execCommand:function(a){var b=d(this).table;b.setAttribute("data-sort","enablesort"==a?"sortEnabled":"sortDisabled"),"enablesort"==a?domUtils.addClass(b,"sortEnabled"):domUtils.removeClasses(b,"sortEnabled")}}},UE.plugins.contextmenu=function(){var a=this;if(a.setOpt("enableContextMenu",!0),a.getOpt("enableContextMenu")!==!1){var b,c=a.getLang("contextMenu"),d=a.options.contextMenu||[{label:c.selectall,cmdName:"selectall"},{label:c.cleardoc,cmdName:"cleardoc",exec:function(){confirm(c.confirmclear)&&this.execCommand("cleardoc")}},"-",{label:c.unlink,cmdName:"unlink"},"-",{group:c.paragraph,icon:"justifyjustify",subMenu:[{label:c.justifyleft,cmdName:"justify",value:"left"},{label:c.justifyright,cmdName:"justify",value:"right"},{label:c.justifycenter,cmdName:"justify",value:"center"},{label:c.justifyjustify,cmdName:"justify",value:"justify"}]},"-",{group:c.table,icon:"table",subMenu:[{label:c.inserttable,cmdName:"inserttable"},{label:c.deletetable,cmdName:"deletetable"},"-",{label:c.deleterow,cmdName:"deleterow"},{label:c.deletecol,cmdName:"deletecol"},{label:c.insertcol,cmdName:"insertcol"},{label:c.insertcolnext,cmdName:"insertcolnext"},{label:c.insertrow,cmdName:"insertrow"},{label:c.insertrownext,cmdName:"insertrownext"},"-",{label:c.insertcaption,cmdName:"insertcaption"},{label:c.deletecaption,cmdName:"deletecaption"},{label:c.inserttitle,cmdName:"inserttitle"},{label:c.deletetitle,cmdName:"deletetitle"},{label:c.inserttitlecol,cmdName:"inserttitlecol"},{label:c.deletetitlecol,cmdName:"deletetitlecol"},"-",{label:c.mergecells,cmdName:"mergecells"},{label:c.mergeright,cmdName:"mergeright"},{label:c.mergedown,cmdName:"mergedown"},"-",{label:c.splittorows,cmdName:"splittorows"},{label:c.splittocols,cmdName:"splittocols"},{label:c.splittocells,cmdName:"splittocells"},"-",{label:c.averageDiseRow,cmdName:"averagedistributerow"},{label:c.averageDisCol,cmdName:"averagedistributecol"},"-",{label:c.edittd,cmdName:"edittd",exec:function(){UE.ui.edittd&&new UE.ui.edittd(this),this.getDialog("edittd").open()}},{label:c.edittable,cmdName:"edittable",exec:function(){UE.ui.edittable&&new UE.ui.edittable(this),this.getDialog("edittable").open()}},{label:c.setbordervisible,cmdName:"setbordervisible"}]},{group:c.tablesort,icon:"tablesort",subMenu:[{label:c.enablesort,cmdName:"enablesort"},{label:c.disablesort,cmdName:"disablesort"},"-",{label:c.reversecurrent,cmdName:"sorttable",value:"reversecurrent"},{label:c.orderbyasc,cmdName:"sorttable",value:"orderbyasc"},{label:c.reversebyasc,cmdName:"sorttable",value:"reversebyasc"},{label:c.orderbynum,cmdName:"sorttable",value:"orderbynum"},{label:c.reversebynum,cmdName:"sorttable",value:"reversebynum"}]},{group:c.borderbk,icon:"borderBack",subMenu:[{label:c.setcolor,cmdName:"interlacetable",exec:function(){this.execCommand("interlacetable")}},{label:c.unsetcolor,cmdName:"uninterlacetable",exec:function(){this.execCommand("uninterlacetable")}},{label:c.setbackground,cmdName:"settablebackground",exec:function(){this.execCommand("settablebackground",{repeat:!0,colorList:["#bbb","#ccc"]})}},{label:c.unsetbackground,cmdName:"cleartablebackground",exec:function(){this.execCommand("cleartablebackground")}},{label:c.redandblue,cmdName:"settablebackground",exec:function(){this.execCommand("settablebackground",{repeat:!0,colorList:["red","blue"]})}},{label:c.threecolorgradient,cmdName:"settablebackground",exec:function(){this.execCommand("settablebackground",{repeat:!0,colorList:["#aaa","#bbb","#ccc"]})}}]},{group:c.aligntd,icon:"aligntd",subMenu:[{cmdName:"cellalignment",value:{align:"left",vAlign:"top"}},{cmdName:"cellalignment",value:{align:"center",vAlign:"top"}},{cmdName:"cellalignment",value:{align:"right",vAlign:"top"}},{cmdName:"cellalignment",value:{align:"left",vAlign:"middle"}},{cmdName:"cellalignment",value:{align:"center",vAlign:"middle"}},{cmdName:"cellalignment",value:{align:"right",vAlign:"middle"}},{cmdName:"cellalignment",value:{align:"left",vAlign:"bottom"}},{cmdName:"cellalignment",value:{align:"center",vAlign:"bottom"}},{cmdName:"cellalignment",value:{align:"right",vAlign:"bottom"}}]},{group:c.aligntable,icon:"aligntable",subMenu:[{cmdName:"tablealignment",className:"left",label:c.tableleft,value:"left"},{cmdName:"tablealignment",className:"center",label:c.tablecenter,value:"center"},{cmdName:"tablealignment",className:"right",label:c.tableright,value:"right"}]},"-",{label:c.insertparagraphbefore,cmdName:"insertparagraph",value:!0},{label:c.insertparagraphafter,cmdName:"insertparagraph"},{label:c.copy,cmdName:"copy"},{label:c.paste,cmdName:"paste"}];if(d.length){var e=UE.ui.uiUtils;a.addListener("contextmenu",function(f,g){var h=e.getViewportOffsetByEvent(g);a.fireEvent("beforeselectionchange"),b&&b.destroy();for(var i,j=0,k=[];i=d[j];j++){var l;!function(b){function d(){switch(b.icon){case"table":return a.getLang("contextMenu.table");case"justifyjustify":return a.getLang("contextMenu.paragraph");case"aligntd":return a.getLang("contextMenu.aligntd");case"aligntable":return a.getLang("contextMenu.aligntable");case"tablesort":return c.tablesort;case"borderBack":return c.borderbk;default:return""}}if("-"==b)(l=k[k.length-1])&&"-"!==l&&k.push("-");else if(b.hasOwnProperty("group")){for(var e,f=0,g=[];e=b.subMenu[f];f++)!function(b){"-"==b?(l=g[g.length-1])&&"-"!==l?g.push("-"):g.splice(g.length-1):(a.commands[b.cmdName]||UE.commands[b.cmdName]||b.query)&&(b.query?b.query():a.queryCommandState(b.cmdName))>-1&&g.push({label:b.label||a.getLang("contextMenu."+b.cmdName+(b.value||""))||"",className:"edui-for-"+b.cmdName+(b.className?" edui-for-"+b.cmdName+"-"+b.className:""),onclick:b.exec?function(){b.exec.call(a)}:function(){a.execCommand(b.cmdName,b.value)}})}(e);g.length&&k.push({label:d(),className:"edui-for-"+b.icon,subMenu:{items:g,editor:a}})}else(a.commands[b.cmdName]||UE.commands[b.cmdName]||b.query)&&(b.query?b.query.call(a):a.queryCommandState(b.cmdName))>-1&&k.push({label:b.label||a.getLang("contextMenu."+b.cmdName),className:"edui-for-"+(b.icon?b.icon:b.cmdName+(b.value||"")),onclick:b.exec?function(){b.exec.call(a)}:function(){a.execCommand(b.cmdName,b.value)}})}(i)}if("-"==k[k.length-1]&&k.pop(),b=new UE.ui.Menu({items:k,className:"edui-contextmenu",editor:a}),b.render(),b.showAt(h),a.fireEvent("aftershowcontextmenu",b),domUtils.preventDefault(g),browser.ie){var m;try{m=a.selection.getNative().createRange()}catch(n){return}if(m.item){var o=new dom.Range(a.document);o.selectNode(m.item(0)).select(!0,!0)}}}),a.addListener("aftershowcontextmenu",function(b,c){if(a.zeroclipboard){var d=c.items;for(var e in d)"edui-for-copy"==d[e].className&&a.zeroclipboard.clip(d[e].getDom())}})}}},UE.plugins.shortcutmenu=function(){var a,b=this,c=b.options.shortcutMenu||[];c.length&&(b.addListener("contextmenu mouseup",function(b,d){var e=this,f={type:b,target:d.target||d.srcElement,screenX:d.screenX,screenY:d.screenY,clientX:d.clientX,clientY:d.clientY};if(setTimeout(function(){var d=e.selection.getRange();d.collapsed!==!1&&"contextmenu"!=b||(a||(a=new baidu.editor.ui.ShortCutMenu({editor:e,items:c,theme:e.options.theme,className:"edui-shortcutmenu"}),a.render(),e.fireEvent("afterrendershortcutmenu",a)),a.show(f,!!UE.plugins.contextmenu))}),"contextmenu"==b&&(domUtils.preventDefault(d),browser.ie9below)){var g;try{g=e.selection.getNative().createRange()}catch(d){return}if(g.item){var h=new dom.Range(e.document);h.selectNode(g.item(0)).select(!0,!0)}}}),b.addListener("keydown",function(b){"keydown"==b&&a&&!a.isHidden&&a.hide()}))},UE.plugins.basestyle=function(){var a={bold:["strong","b"],italic:["em","i"],subscript:["sub"],superscript:["sup"]},b=function(a,b){return domUtils.filterNodeList(a.selection.getStartElementPath(),b)},c=this;c.addshortcutkey({Bold:"ctrl+66",Italic:"ctrl+73",Underline:"ctrl+85"}),c.addInputRule(function(a){utils.each(a.getNodesByTagName("b i"),function(a){switch(a.tagName){case"b":a.tagName="strong";break;case"i":a.tagName="em"}})});for(var d in a)!function(a,d){c.commands[a]={execCommand:function(a){var e=c.selection.getRange(),f=b(this,d);if(e.collapsed){if(f){var g=c.document.createTextNode("");e.insertNode(g).removeInlineStyle(d),e.setStartBefore(g),domUtils.remove(g)}else{var h=e.document.createElement(d[0]);"superscript"!=a&&"subscript"!=a||(g=c.document.createTextNode(""),e.insertNode(g).removeInlineStyle(["sub","sup"]).setStartBefore(g).collapse(!0)),e.insertNode(h).setStart(h,0)}e.collapse(!0)}else"superscript"!=a&&"subscript"!=a||f&&f.tagName.toLowerCase()==a||e.removeInlineStyle(["sub","sup"]),f?e.removeInlineStyle(d):e.applyInlineStyle(d[0]);e.select()},queryCommandState:function(){return b(this,d)?1:0}}}(d,a[d])},UE.plugins.elementpath=function(){var a,b,c=this;c.setOpt("elementPathEnabled",!0),c.options.elementPathEnabled&&(c.commands.elementpath={execCommand:function(d,e){var f=b[e],g=c.selection.getRange();a=1*e,g.selectNode(f).select()},queryCommandValue:function(){var c=[].concat(this.selection.getStartElementPath()).reverse(),d=[];b=c;for(var e,f=0;e=c[f];f++)if(3!=e.nodeType){var g=e.tagName.toLowerCase();if("img"==g&&e.getAttribute("anchorname")&&(g="anchor"),d[f]=g,a==f){a=-1;break}}return d}})},UE.plugins.formatmatch=function(){function a(f,g){function h(a){return m&&a.selectNode(m),a.applyInlineStyle(d[d.length-1].tagName,null,d)}if(browser.webkit)var i="IMG"==g.target.tagName?g.target:null;c.undoManger&&c.undoManger.save();var j=c.selection.getRange(),k=i||j.getClosedNode();if(b&&k&&"IMG"==k.tagName)k.style.cssText+=";float:"+(b.style.cssFloat||b.style.styleFloat||"none")+";display:"+(b.style.display||"inline"),b=null;else if(!b){var l=j.collapsed;if(l){var m=c.document.createTextNode("match");j.insertNode(m).select()}c.__hasEnterExecCommand=!0;var n=c.options.removeFormatAttributes;c.options.removeFormatAttributes="",c.execCommand("removeformat"),c.options.removeFormatAttributes=n,c.__hasEnterExecCommand=!1,j=c.selection.getRange(),d.length&&h(j),m&&j.setStartBefore(m).collapse(!0),j.select(),m&&domUtils.remove(m)}c.undoManger&&c.undoManger.save(),c.removeListener("mouseup",a),e=0}var b,c=this,d=[],e=0;c.addListener("reset",function(){d=[],e=0}),c.commands.formatmatch={execCommand:function(f){if(e)return e=0,d=[],void c.removeListener("mouseup",a);var g=c.selection.getRange();if(b=g.getClosedNode(),!b||"IMG"!=b.tagName){g.collapse(!0).shrinkBoundary();var h=g.startContainer;d=domUtils.findParents(h,!0,function(a){return!domUtils.isBlockElm(a)&&1==a.nodeType});for(var i,j=0;i=d[j];j++)if("A"==i.tagName){d.splice(j,1);break}}c.addListener("mouseup",a),e=1},queryCommandState:function(){return e},notNeedUndo:1}},UE.plugin.register("searchreplace",function(){function a(a,b,c){var d=b.searchStr;b.dir==-1&&(a=a.split("").reverse().join(""),d=d.split("").reverse().join(""),c=a.length-c);for(var e,f=new RegExp(d,"g"+(b.casesensitive?"":"i"));e=f.exec(a);)if(e.index>=c)return b.dir==-1?a.length-e.index-b.searchStr.length:e.index;return-1}function b(b,c,d){var e,f,h=d.all||1==d.dir?"getNextDomNode":"getPreDomNode";domUtils.isBody(b)&&(b=b.firstChild);for(var i=1;b;){if(e=3==b.nodeType?b.nodeValue:b[browser.ie?"innerText":"textContent"],f=a(e,d,c),i=0,f!=-1)return{node:b,index:f};for(b=domUtils[h](b);b&&g[b.nodeName.toLowerCase()];)b=domUtils[h](b,!0);b&&(c=d.dir==-1?(3==b.nodeType?b.nodeValue:b[browser.ie?"innerText":"textContent"]).length:0)}}function c(a,b,d){for(var e,f=0,g=a.firstChild,h=0;g;){if(3==g.nodeType){if(h=g.nodeValue.replace(/(^[\t\r\n]+)|([\t\r\n]+$)/,"").length,f+=h,f>=b)return{node:g,index:h-(f-b)}}else if(!dtd.$empty[g.tagName]&&(h=g[browser.ie?"innerText":"textContent"].replace(/(^[\t\r\n]+)|([\t\r\n]+$)/,"").length,f+=h,f>=b&&(e=c(g,h-(f-b),d))))return e;g=domUtils.getNextDomNode(g)}}function d(a,d){var f,g=a.selection.getRange(),h=d.searchStr,i=a.document.createElement("span");if(i.innerHTML="$$ueditor_searchreplace_key$$",g.shrinkBoundary(!0),!g.collapsed){g.select();var j=a.selection.getText();if(new RegExp("^"+d.searchStr+"$",d.casesensitive?"":"i").test(j)){if(void 0!=d.replaceStr)return e(g,d.replaceStr),g.select(),!0;g.collapse(d.dir==-1)}}g.insertNode(i),g.enlargeToBlockElm(!0),f=g.startContainer;var k=f[browser.ie?"innerText":"textContent"].indexOf("$$ueditor_searchreplace_key$$");g.setStartBefore(i),domUtils.remove(i);var l=b(f,k,d);if(l){var m=c(l.node,l.index,h),n=c(l.node,l.index+h.length,h);return g.setStart(m.node,m.index).setEnd(n.node,n.index),void 0!==d.replaceStr&&e(g,d.replaceStr),g.select(),!0}g.setCursor()}function e(a,b){b=f.document.createTextNode(b),a.deleteContents().insertNode(b)}var f=this,g={table:1,tbody:1,tr:1,ol:1,ul:1};return{commands:{searchreplace:{execCommand:function(a,b){utils.extend(b,{all:!1,casesensitive:!1,dir:1},!0);var c=0;if(b.all){var e=f.selection.getRange(),g=f.body.firstChild;for(g&&1==g.nodeType?(e.setStart(g,0),e.shrinkBoundary(!0)):3==g.nodeType&&e.setStartBefore(g),e.collapse(!0).select(!0),void 0!==b.replaceStr&&f.fireEvent("saveScene");d(this,b);)c++;c&&f.fireEvent("saveScene")}else void 0!==b.replaceStr&&f.fireEvent("saveScene"),d(this,b)&&c++,c&&f.fireEvent("saveScene");return c},notNeedUndo:1}}}}),UE.plugins.customstyle=function(){var a=this;a.setOpt({customstyle:[{tag:"h1",name:"tc",style:"font-size:32px;font-weight:bold;border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:center;margin:0 0 20px 0;"},{tag:"h1",name:"tl",style:"font-size:32px;font-weight:bold;border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:left;margin:0 0 10px 0;"},{tag:"span",name:"im",style:"font-size:16px;font-style:italic;font-weight:bold;line-height:18px;"},{tag:"span",name:"hi",style:"font-size:16px;font-style:italic;font-weight:bold;color:rgb(51, 153, 204);line-height:18px;"}]}),a.commands.customstyle={execCommand:function(a,b){var c,d,e=this,f=b.tag,g=domUtils.findParent(e.selection.getStart(),function(a){return a.getAttribute("label")},!0),h={};for(var i in b)void 0!==b[i]&&(h[i]=b[i]);if(delete h.tag,g&&g.getAttribute("label")==b.label){if(c=this.selection.getRange(),d=c.createBookmark(),c.collapsed)if(dtd.$block[g.tagName]){var j=e.document.createElement("p");domUtils.moveChild(g,j),g.parentNode.insertBefore(j,g),domUtils.remove(g)}else domUtils.remove(g,!0);else{var k=domUtils.getCommonAncestor(d.start,d.end),l=domUtils.getElementsByTagName(k,f);new RegExp(f,"i").test(k.tagName)&&l.push(k);for(var m,n=0;m=l[n++];)if(m.getAttribute("label")==b.label){var o=domUtils.getPosition(m,d.start),p=domUtils.getPosition(m,d.end);if((o&domUtils.POSITION_FOLLOWING||o&domUtils.POSITION_CONTAINS)&&(p&domUtils.POSITION_PRECEDING||p&domUtils.POSITION_CONTAINS)&&dtd.$block[f]){var j=e.document.createElement("p");domUtils.moveChild(m,j),m.parentNode.insertBefore(j,m)}domUtils.remove(m,!0)}g=domUtils.findParent(k,function(a){return a.getAttribute("label")==b.label},!0),g&&domUtils.remove(g,!0)}c.moveToBookmark(d).select()}else if(dtd.$block[f]){if(this.execCommand("paragraph",f,h,"customstyle"),c=e.selection.getRange(),!c.collapsed){c.collapse(),g=domUtils.findParent(e.selection.getStart(),function(a){return a.getAttribute("label")==b.label},!0);var q=e.document.createElement("p");domUtils.insertAfter(g,q),domUtils.fillNode(e.document,q),c.setStart(q,0).setCursor()}}else{if(c=e.selection.getRange(),c.collapsed)return g=e.document.createElement(f),domUtils.setAttributes(g,h),void c.insertNode(g).setStart(g,0).setCursor();d=c.createBookmark(),c.applyInlineStyle(f,h).moveToBookmark(d).select()}},queryCommandValue:function(){var a=domUtils.filterNodeList(this.selection.getStartElementPath(),function(a){return a.getAttribute("label")});return a?a.getAttribute("label"):""}},a.addListener("keyup",function(b,c){var d=c.keyCode||c.which;if(32==d||13==d){var e=a.selection.getRange();if(e.collapsed){var f=domUtils.findParent(a.selection.getStart(),function(a){return a.getAttribute("label")},!0);if(f&&dtd.$block[f.tagName]&&domUtils.isEmptyNode(f)){var g=a.document.createElement("p");domUtils.insertAfter(f,g),domUtils.fillNode(a.document,g),domUtils.remove(f),e.setStart(g,0).setCursor()}}}})},UE.plugins.catchremoteimage=function(){var me=this,ajax=UE.ajax;me.options.catchRemoteImageEnable!==!1&&(me.setOpt({catchRemoteImageEnable:!1}),me.addListener("afterpaste",function(){me.fireEvent("catchRemoteImage")}),me.addListener("catchRemoteImage",function(){function catchremoteimage(a,b){var c=utils.serializeParam(me.queryCommandValue("serverparam"))||"",d=utils.formatUrl(catcherActionUrl+(catcherActionUrl.indexOf("?")==-1?"?":"&")+c),e=utils.isCrossDomainUrl(d),f={method:"POST",dataType:e?"jsonp":"",timeout:6e4,onsuccess:b.success,onerror:b.error};f[catcherFieldName]=a,ajax.request(d,f)}for(var catcherLocalDomain=me.getOpt("catcherLocalDomain"),catcherActionUrl=me.getActionUrl(me.getOpt("catcherActionName")),catcherUrlPrefix=me.getOpt("catcherUrlPrefix"),catcherFieldName=me.getOpt("catcherFieldName"),remoteImages=[],imgs=domUtils.getElementsByTagName(me.document,"img"),test=function(a,b){if(a.indexOf(location.host)!=-1||/(^\.)|(^\/)/.test(a))return!0;if(b)for(var c,d=0;c=b[d++];)if(a.indexOf(c)!==-1)return!0;return!1},i=0,ci;ci=imgs[i++];)if(!ci.getAttribute("word_img")){var src=ci.getAttribute("_src")||ci.src||"";/^(https?|ftp):/i.test(src)&&!test(src,catcherLocalDomain)&&remoteImages.push(src)}remoteImages.length&&catchremoteimage(remoteImages,{success:function(r){try{var info=void 0!==r.state?r:eval("("+r.responseText+")")}catch(e){return}var i,j,ci,cj,oldSrc,newSrc,list=info.list;for(i=0;ci=imgs[i++];)for(oldSrc=ci.getAttribute("_src")||ci.src||"",j=0;cj=list[j++];)if(oldSrc==cj.source&&"SUCCESS"==cj.state){newSrc=catcherUrlPrefix+cj.url,domUtils.setAttributes(ci,{src:newSrc,_src:newSrc});break}me.fireEvent("catchremotesuccess")},error:function(){me.fireEvent("catchremoteerror")}})}))},UE.plugin.register("snapscreen",function(){function getLocation(a){var b,c=document.createElement("a"),d=utils.serializeParam(me.queryCommandValue("serverparam"))||"";return c.href=a,browser.ie&&(c.href=c.href),b=c.search,d&&(b=b+(b.indexOf("?")==-1?"?":"&")+d,b=b.replace(/[&]+/gi,"&")),{port:c.port,hostname:c.hostname,path:c.pathname+b||+c.hash}}var me=this,snapplugin;return{commands:{snapscreen:{execCommand:function(cmd){function onSuccess(rs){try{if(rs=eval("("+rs+")"),"SUCCESS"==rs.state){var opt=me.options;me.execCommand("insertimage",{src:opt.snapscreenUrlPrefix+rs.url,_src:opt.snapscreenUrlPrefix+rs.url,alt:rs.title||"",floatStyle:opt.snapscreenImgAlign})}else alert(rs.state)}catch(e){alert(lang.callBackErrorMsg)}}var url,local,res,lang=me.getLang("snapScreen_plugin");if(!snapplugin){var container=me.container,doc=me.container.ownerDocument||me.container.document;snapplugin=doc.createElement("object");try{snapplugin.type="application/x-pluginbaidusnap"}catch(e){return}snapplugin.style.cssText="position:absolute;left:-9999px;width:0;height:0;",snapplugin.setAttribute("width","0"),snapplugin.setAttribute("height","0"),container.appendChild(snapplugin)}url=me.getActionUrl(me.getOpt("snapscreenActionName")),local=getLocation(url),setTimeout(function(){try{res=snapplugin.saveSnapshot(local.hostname,local.path,local.port)}catch(a){return void me.ui._dialogs.snapscreenDialog.open()}onSuccess(res)},50)},queryCommandState:function(){return navigator.userAgent.indexOf("Windows",0)!=-1?0:-1}}}}}),UE.commands.insertparagraph={execCommand:function(a,b){for(var c,d=this,e=d.selection.getRange(),f=e.startContainer;f&&!domUtils.isBody(f);)c=f,f=f.parentNode;if(c){var g=d.document.createElement("p");b?c.parentNode.insertBefore(g,c):c.parentNode.insertBefore(g,c.nextSibling),domUtils.fillNode(d.document,g),e.setStart(g,0).setCursor(!1,!0)}}},UE.plugin.register("webapp",function(){function a(a,c){return c?'<iframe class="edui-faked-webapp" title="'+a.title+'" '+(a.align&&!a.cssfloat?'align="'+a.align+'"':"")+(a.cssfloat?'style="float:'+a.cssfloat+'"':"")+'width="'+a.width+'" height="'+a.height+'"  scrolling="no" frameborder="0" src="'+a.url+'" logo_url = "'+a.logo+'"></iframe>':'<img title="'+a.title+'" width="'+a.width+'" height="'+a.height+'" src="'+b.options.UEDITOR_HOME_URL+'themes/default/images/spacer.gif" _logo_url="'+a.logo+'" style="background:url('+a.logo+') no-repeat center center; border:1px solid gray;" class="edui-faked-webapp" _url="'+a.url+'" '+(a.align&&!a.cssfloat?'align="'+a.align+'"':"")+(a.cssfloat?'style="float:'+a.cssfloat+'"':"")+"/>"}var b=this;return{outputRule:function(b){utils.each(b.getNodesByTagName("img"),function(b){var c;if("edui-faked-webapp"==b.getAttr("class")){c=a({title:b.getAttr("title"),width:b.getAttr("width"),height:b.getAttr("height"),align:b.getAttr("align"),cssfloat:b.getStyle("float"),url:b.getAttr("_url"),logo:b.getAttr("_logo_url")},!0);var d=UE.uNode.createElement(c);b.parentNode.replaceChild(d,b)}})},inputRule:function(b){utils.each(b.getNodesByTagName("iframe"),function(b){if("edui-faked-webapp"==b.getAttr("class")){var c=UE.uNode.createElement(a({title:b.getAttr("title"),width:b.getAttr("width"),height:b.getAttr("height"),align:b.getAttr("align"),cssfloat:b.getStyle("float"),url:b.getAttr("src"),logo:b.getAttr("logo_url")}));b.parentNode.replaceChild(c,b)}})},commands:{webapp:{execCommand:function(b,c){var d=this,e=a(utils.extend(c,{align:"none"}),!1);d.execCommand("inserthtml",e)},queryCommandState:function(){var a=this,b=a.selection.getRange().getClosedNode(),c=b&&"edui-faked-webapp"==b.className;return c?1:0}}}}}),UE.plugins.template=function(){UE.commands.template={execCommand:function(a,b){b.html&&this.execCommand("inserthtml",b.html)}},this.addListener("click",function(a,b){var c=b.target||b.srcElement,d=this.selection.getRange(),e=domUtils.findParent(c,function(a){if(a.className&&domUtils.hasClass(a,"ue_t"))return a},!0);e&&d.selectNode(e).shrinkBoundary().select()}),this.addListener("keydown",function(a,b){var c=this.selection.getRange();if(!c.collapsed&&!(b.ctrlKey||b.metaKey||b.shiftKey||b.altKey)){var d=domUtils.findParent(c.startContainer,function(a){if(a.className&&domUtils.hasClass(a,"ue_t"))return a},!0);d&&domUtils.removeClasses(d,["ue_t"])}})},UE.plugin.register("music",function(){function a(a,c,d,e,f,g){return g?'<embed type="application/x-shockwave-flash" class="edui-faked-music" pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+a+'" width="'+c+'" height="'+d+'" '+(e&&!f?'align="'+e+'"':"")+(f?'style="float:'+f+'"':"")+' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >':"<img "+(e&&!f?'align="'+e+'"':"")+(f?'style="float:'+f+'"':"")+' width="'+c+'" height="'+d+'" _url="'+a+'" class="edui-faked-music" src="'+b.options.langPath+b.options.lang+'/images/music.png" />'}var b=this;return{outputRule:function(b){utils.each(b.getNodesByTagName("img"),function(b){var c;if("edui-faked-music"==b.getAttr("class")){var d=b.getStyle("float"),e=b.getAttr("align");c=a(b.getAttr("_url"),b.getAttr("width"),b.getAttr("height"),e,d,!0);var f=UE.uNode.createElement(c);b.parentNode.replaceChild(f,b)}})},inputRule:function(b){utils.each(b.getNodesByTagName("embed"),function(b){if("edui-faked-music"==b.getAttr("class")){var c=b.getStyle("float"),d=b.getAttr("align");html=a(b.getAttr("src"),b.getAttr("width"),b.getAttr("height"),d,c,!1);var e=UE.uNode.createElement(html);b.parentNode.replaceChild(e,b)}})},commands:{music:{execCommand:function(b,c){var d=this,e=a(c.url,c.width||400,c.height||95,"none",!1);d.execCommand("inserthtml",e)},queryCommandState:function(){var a=this,b=a.selection.getRange().getClosedNode(),c=b&&"edui-faked-music"==b.className;return c?1:0}}}}}),UE.plugin.register("autoupload",function(){function a(a,b){var c,d,e,f,g,h,i,j,k=b,l=/image\/\w+/i.test(a.type)?"image":"file",m="loading_"+(+new Date).toString(36);if(c=k.getOpt(l+"FieldName"),d=k.getOpt(l+"UrlPrefix"),e=k.getOpt(l+"MaxSize"),f=k.getOpt(l+"AllowFiles"),g=k.getActionUrl(k.getOpt(l+"ActionName")),i=function(a){var b=k.document.getElementById(m);b&&domUtils.remove(b),k.fireEvent("showmessage",{id:m,content:a,type:"error",timeout:4e3})},"image"==l?(h='<img class="loadingclass" id="'+m+'" src="'+k.options.themePath+k.options.theme+'/images/spacer.gif" title="'+(k.getLang("autoupload.loading")||"")+'" >',j=function(a){var b=d+a.url,c=k.document.getElementById(m);c&&(c.setAttribute("src",b),c.setAttribute("_src",b),c.setAttribute("title",a.title||""),c.setAttribute("alt",a.original||""),c.removeAttribute("id"),domUtils.removeClasses(c,"loadingclass"))}):(h='<p><img class="loadingclass" id="'+m+'" src="'+k.options.themePath+k.options.theme+'/images/spacer.gif" title="'+(k.getLang("autoupload.loading")||"")+'" ></p>',j=function(a){var b=d+a.url,c=k.document.getElementById(m),e=k.selection.getRange(),f=e.createBookmark();e.selectNode(c).select(),k.execCommand("insertfile",{url:b}),e.moveToBookmark(f).select()}),k.execCommand("inserthtml",h),!k.getOpt(l+"ActionName"))return void i(k.getLang("autoupload.errorLoadConfig"));if(a.size>e)return void i(k.getLang("autoupload.exceedSizeError"));var n=a.name?a.name.substr(a.name.lastIndexOf(".")):"";if(n&&"image"!=l||f&&(f.join("")+".").indexOf(n.toLowerCase()+".")==-1)return void i(k.getLang("autoupload.exceedTypeError"));var o=new XMLHttpRequest,p=new FormData,q=utils.serializeParam(k.queryCommandValue("serverparam"))||"",r=utils.formatUrl(g+(g.indexOf("?")==-1?"?":"&")+q);p.append(c,a,a.name||"blob."+a.type.substr("image/".length)),p.append("type","ajax"),o.open("post",r,!0),o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.addEventListener("load",function(a){try{var b=new Function("return "+utils.trim(a.target.response))();"SUCCESS"==b.state&&b.url?j(b):i(b.state)}catch(c){i(k.getLang("autoupload.loadError"))}}),o.send(p)}function b(a){return a.clipboardData&&a.clipboardData.items&&1==a.clipboardData.items.length&&/^image\//.test(a.clipboardData.items[0].type)?a.clipboardData.items:null}function c(a){return a.dataTransfer&&a.dataTransfer.files?a.dataTransfer.files:null}return{outputRule:function(a){utils.each(a.getNodesByTagName("img"),function(a){/\b(loaderrorclass)|(bloaderrorclass)\b/.test(a.getAttr("class"))&&a.parentNode.removeChild(a)}),utils.each(a.getNodesByTagName("p"),function(a){/\bloadpara\b/.test(a.getAttr("class"))&&a.parentNode.removeChild(a)})},bindEvents:{ready:function(d){var e=this;window.FormData&&window.FileReader&&(domUtils.on(e.body,"paste drop",function(d){var f,g=!1;if(f="paste"==d.type?b(d):c(d)){for(var h,i=f.length;i--;)h=f[i],h.getAsFile&&(h=h.getAsFile()),h&&h.size>0&&(a(h,e),g=!0);g&&d.preventDefault()}}),domUtils.on(e.body,"dragover",function(a){"Files"==a.dataTransfer.types[0]&&a.preventDefault()}),utils.cssRule("loading",".loadingclass{display:inline-block;cursor:default;background: url('"+this.options.themePath+this.options.theme+"/images/loading.gif') no-repeat center center transparent;border:1px solid #cccccc;margin-left:1px;height: 22px;width: 22px;}\n.loaderrorclass{display:inline-block;cursor:default;background: url('"+this.options.themePath+this.options.theme+"/images/loaderror.png') no-repeat center center transparent;border:1px solid #cccccc;margin-right:1px;height: 22px;width: 22px;}",this.document))}}}}),UE.plugin.register("autosave",function(){function a(a){var f;if(!(new Date-c<d)){if(!a.hasContents())return void(e&&b.removePreferences(e));c=new Date,a._saveFlag=null,f=b.body.innerHTML,a.fireEvent("beforeautosave",{content:f})!==!1&&(b.setPreferences(e,f),a.fireEvent("afterautosave",{content:f}))}}var b=this,c=new Date,d=20,e=null;return{defaultOptions:{saveInterval:500},bindEvents:{ready:function(){var a="-drafts-data",c=null;c=b.key?b.key+a:(b.container.parentNode.id||"ue-common")+a,e=(location.protocol+location.host+location.pathname).replace(/[.:\/]/g,"_")+c},contentchange:function(){e&&(b._saveFlag&&window.clearTimeout(b._saveFlag),b.options.saveInterval>0?b._saveFlag=window.setTimeout(function(){a(b)},b.options.saveInterval):a(b))}},commands:{clearlocaldata:{execCommand:function(a,c){e&&b.getPreferences(e)&&b.removePreferences(e)},notNeedUndo:!0,ignoreContentChange:!0},getlocaldata:{execCommand:function(a,c){return e?b.getPreferences(e)||"":""},notNeedUndo:!0,ignoreContentChange:!0},drafts:{execCommand:function(a,c){e&&(b.body.innerHTML=b.getPreferences(e)||"<p>"+domUtils.fillHtml+"</p>",b.focus(!0))},queryCommandState:function(){return e?null===b.getPreferences(e)?-1:0:-1},notNeedUndo:!0,ignoreContentChange:!0}}}}),UE.plugin.register("charts",function(){function a(a){var b=null,c=0;if(a.rows.length<2)return!1;if(a.rows[0].cells.length<2)return!1;b=a.rows[0].cells,c=b.length;for(var d,e=0;d=b[e];e++)if("th"!==d.tagName.toLowerCase())return!1;for(var f,e=1;f=a.rows[e];e++){if(f.cells.length!=c)return!1;if("th"!==f.cells[0].tagName.toLowerCase())return!1;for(var d,g=1;d=f.cells[g];g++){var h=utils.trim(d.innerText||d.textContent||"");if(h=h.replace(new RegExp(UE.dom.domUtils.fillChar,"g"),"").replace(/^\s+|\s+$/g,""),!/^\d*\.?\d+$/.test(h))return!1}}return!0}var b=this;return{bindEvents:{chartserror:function(){}},commands:{charts:{execCommand:function(c,d){var e=domUtils.findParentByTagName(this.selection.getRange().startContainer,"table",!0),f=[],g={};if(!e)return!1;if(!a(e))return b.fireEvent("chartserror"),!1;g.title=d.title||"",g.subTitle=d.subTitle||"",g.xTitle=d.xTitle||"",g.yTitle=d.yTitle||"",g.suffix=d.suffix||"",g.tip=d.tip||"",g.dataFormat=d.tableDataFormat||"",g.chartType=d.chartType||0;for(var h in g)g.hasOwnProperty(h)&&f.push(h+":"+g[h]);e.setAttribute("data-chart",f.join(";")),domUtils.addClass(e,"edui-charts-table")},queryCommandState:function(b,c){
var d=domUtils.findParentByTagName(this.selection.getRange().startContainer,"table",!0);return d&&a(d)?0:-1}}},inputRule:function(a){utils.each(a.getNodesByTagName("table"),function(a){void 0!==a.getAttr("data-chart")&&a.setAttr("style")})},outputRule:function(a){utils.each(a.getNodesByTagName("table"),function(a){void 0!==a.getAttr("data-chart")&&a.setAttr("style","display: none;")})}}}),UE.plugin.register("section",function(){function a(a){this.tag="",this.level=-1,this.dom=null,this.nextSection=null,this.previousSection=null,this.parentSection=null,this.startAddress=[],this.endAddress=[],this.children=[]}function b(b){var c=new a;return utils.extend(c,b)}function c(a,b){for(var c=b,d=0;d<a.length;d++){if(!c.childNodes)return null;c=c.childNodes[a[d]]}return c}var d=this;return{bindMultiEvents:{type:"aftersetcontent afterscencerestore",handler:function(){d.fireEvent("updateSections")}},bindEvents:{ready:function(){d.fireEvent("updateSections"),domUtils.on(d.body,"drop paste",function(){d.fireEvent("updateSections")})},afterexeccommand:function(a,b){"paragraph"==b&&d.fireEvent("updateSections")},keyup:function(a,b){var c=this,d=c.selection.getRange();if(1!=d.collapsed)c.fireEvent("updateSections");else{var e=b.keyCode||b.which;13!=e&&8!=e&&46!=e||c.fireEvent("updateSections")}}},commands:{getsections:{execCommand:function(a,c){function d(a){for(var b=0;b<f.length;b++)if(f[b](a))return b;return-1}function e(a,c){for(var f,g,i,k=null,l=a.childNodes,m=0,n=l.length;m<n;m++)if(i=l[m],f=d(i),f>=0){var o=h.selection.getRange().selectNode(i).createAddress(!0).startAddress,p=b({tag:i.tagName,title:i.innerText||i.textContent||"",level:f,dom:i,startAddress:utils.clone(o,[]),endAddress:utils.clone(o,[]),children:[]});for(j.nextSection=p,p.previousSection=j,g=j;f<=g.level;)g=g.parentSection;p.parentSection=g,g.children.push(p),k=j=p}else 1===i.nodeType&&e(i,c),k&&k.endAddress[k.endAddress.length-1]++}for(var f=c||["h1","h2","h3","h4","h5","h6"],g=0;g<f.length;g++)"string"==typeof f[g]?f[g]=function(a){return function(b){return b.tagName==a.toUpperCase()}}(f[g]):"function"!=typeof f[g]&&(f[g]=function(a){return null});var h=this,i=b({level:-1,title:"root"}),j=i;return e(h.body,i),i},notNeedUndo:!0},movesection:{execCommand:function(a,b,d,e){function f(a,b,c){for(var d=!1,e=!1,f=0;f<a.length&&!(f>=c.length);f++){if(c[f]>a[f]){d=!0;break}if(c[f]<a[f])break}for(var f=0;f<b.length&&!(f>=c.length);f++){if(c[f]<a[f]){e=!0;break}if(c[f]>a[f])break}return d&&e}var g,h,i=this;if(b&&d&&d.level!=-1&&(g=e?d.endAddress:d.startAddress,h=c(g,i.body),g&&h&&!f(b.startAddress,b.endAddress,g))){var j,k,l=c(b.startAddress,i.body),m=c(b.endAddress,i.body);if(e)for(j=m;j&&!(domUtils.getPosition(l,j)&domUtils.POSITION_FOLLOWING)&&(k=j.previousSibling,domUtils.insertAfter(h,j),j!=l);)j=k;else for(j=l;j&&!(domUtils.getPosition(j,m)&domUtils.POSITION_FOLLOWING)&&(k=j.nextSibling,h.parentNode.insertBefore(j,h),j!=m);)j=k;i.fireEvent("updateSections")}}},deletesection:{execCommand:function(a,b,c){function d(a){for(var b=e.body,c=0;c<a.length;c++){if(!b.childNodes)return null;b=b.childNodes[a[c]]}return b}var e=this;if(b){var f,g=d(b.startAddress),h=d(b.endAddress),i=g;if(c)domUtils.remove(i);else for(;i&&domUtils.inDoc(h,e.document)&&!(domUtils.getPosition(i,h)&domUtils.POSITION_FOLLOWING);)f=i.nextSibling,domUtils.remove(i),i=f;e.fireEvent("updateSections")}}},selectsection:{execCommand:function(a,b){if(!b&&!b.dom)return!1;var c=this,d=c.selection.getRange(),e={startAddress:utils.clone(b.startAddress,[]),endAddress:utils.clone(b.endAddress,[])};return e.endAddress[e.endAddress.length-1]++,d.moveToAddress(e).select().scrollToView(),!0},notNeedUndo:!0},scrolltosection:{execCommand:function(a,b){if(!b&&!b.dom)return!1;var c=this,d=c.selection.getRange(),e={startAddress:b.startAddress,endAddress:b.endAddress};return e.endAddress[e.endAddress.length-1]++,d.moveToAddress(e).scrollToView(),!0},notNeedUndo:!0}}}}),UE.plugin.register("simpleupload",function(){function a(){var a=b.offsetWidth||20,e=b.offsetHeight||20,f=document.createElement("iframe"),g="display:block;width:"+a+"px;height:"+e+"px;overflow:hidden;border:0;margin:0;padding:0;position:absolute;top:0;left:0;filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity: 0;opacity: 0;cursor:pointer;";domUtils.on(f,"load",function(){var b,h,i,j=(+new Date).toString(36);h=f.contentDocument||f.contentWindow.document,i=h.body,b=h.createElement("div"),b.innerHTML='<form id="edui_form_'+j+'" target="edui_iframe_'+j+'" method="POST" enctype="multipart/form-data" action="'+c.getOpt("serverUrl")+'" style="'+g+'"><input id="edui_input_'+j+'" type="file" accept="image/*" name="'+c.options.imageFieldName+'" style="'+g+'"></form><iframe id="edui_iframe_'+j+'" name="edui_iframe_'+j+'" style="display:none;width:0;height:0;border:0;margin:0;padding:0;position:absolute;"></iframe>',b.className="edui-"+c.options.theme,b.id=c.ui.id+"_iframeupload",i.style.cssText=g,i.style.width=a+"px",i.style.height=e+"px",i.appendChild(b),i.parentNode&&(i.parentNode.style.width=a+"px",i.parentNode.style.height=a+"px");var k=h.getElementById("edui_form_"+j),l=h.getElementById("edui_input_"+j),m=h.getElementById("edui_iframe_"+j);domUtils.on(l,"change",function(){function a(){try{var e,f,g,h=(m.contentDocument||m.contentWindow.document).body,i=h.innerText||h.textContent||"";f=new Function("return "+i)(),e=c.options.imageUrlPrefix+f.url,"SUCCESS"==f.state&&f.url?(g=c.document.getElementById(d),g.setAttribute("src",e),g.setAttribute("_src",e),g.setAttribute("title",f.title||""),g.setAttribute("alt",f.original||""),g.removeAttribute("id"),domUtils.removeClasses(g,"loadingclass")):b&&b(f.state)}catch(j){b&&b(c.getLang("simpleupload.loadError"))}k.reset(),domUtils.un(m,"load",a)}function b(a){if(d){var b=c.document.getElementById(d);b&&domUtils.remove(b),c.fireEvent("showmessage",{id:d,content:a,type:"error",timeout:4e3})}}if(l.value){var d="loading_"+(+new Date).toString(36),e=utils.serializeParam(c.queryCommandValue("serverparam"))||"",f=c.getActionUrl(c.getOpt("imageActionName")),g=c.getOpt("imageAllowFiles");if(c.focus(),c.execCommand("inserthtml",'<img class="loadingclass" id="'+d+'" src="'+c.options.themePath+c.options.theme+'/images/spacer.gif" title="'+(c.getLang("simpleupload.loading")||"")+'" >'),!c.getOpt("imageActionName"))return void errorHandler(c.getLang("autoupload.errorLoadConfig"));var h=l.value,i=h?h.substr(h.lastIndexOf(".")):"";if(!i||g&&(g.join("")+".").indexOf(i.toLowerCase()+".")==-1)return void b(c.getLang("simpleupload.exceedTypeError"));domUtils.on(m,"load",a),k.action=utils.formatUrl(f+(f.indexOf("?")==-1?"?":"&")+e),k.submit()}});var n;c.addListener("selectionchange",function(){clearTimeout(n),n=setTimeout(function(){var a=c.queryCommandState("simpleupload");a==-1?l.disabled="disabled":l.disabled=!1},400)}),d=!0}),f.style.cssText=g,b.appendChild(f)}var b,c=this,d=!1;return{bindEvents:{ready:function(){utils.cssRule("loading",".loadingclass{display:inline-block;cursor:default;background: url('"+this.options.themePath+this.options.theme+"/images/loading.gif') no-repeat center center transparent;border:1px solid #cccccc;margin-right:1px;height: 22px;width: 22px;}\n.loaderrorclass{display:inline-block;cursor:default;background: url('"+this.options.themePath+this.options.theme+"/images/loaderror.png') no-repeat center center transparent;border:1px solid #cccccc;margin-right:1px;height: 22px;width: 22px;}",this.document)},simpleuploadbtnready:function(d,e){b=e,c.afterConfigReady(a)}},outputRule:function(a){utils.each(a.getNodesByTagName("img"),function(a){/\b(loaderrorclass)|(bloaderrorclass)\b/.test(a.getAttr("class"))&&a.parentNode.removeChild(a)})},commands:{simpleupload:{queryCommandState:function(){return d?0:-1}}}}}),UE.plugin.register("serverparam",function(){var a={};return{commands:{serverparam:{execCommand:function(b,c,d){void 0===c||null===c?a={}:utils.isString(c)?void 0===d||null===d?delete a[c]:a[c]=d:utils.isObject(c)?utils.extend(a,c,!0):utils.isFunction(c)&&utils.extend(a,c(),!0)},queryCommandValue:function(){return a||{}}}}}}),UE.plugin.register("insertfile",function(){function a(a){var b=a.substr(a.lastIndexOf(".")+1).toLowerCase(),c={rar:"icon_rar.gif",zip:"icon_rar.gif",tar:"icon_rar.gif",gz:"icon_rar.gif",bz2:"icon_rar.gif",doc:"icon_doc.gif",docx:"icon_doc.gif",pdf:"icon_pdf.gif",mp3:"icon_mp3.gif",xls:"icon_xls.gif",chm:"icon_chm.gif",ppt:"icon_ppt.gif",pptx:"icon_ppt.gif",avi:"icon_mv.gif",rmvb:"icon_mv.gif",wmv:"icon_mv.gif",flv:"icon_mv.gif",swf:"icon_mv.gif",rm:"icon_mv.gif",exe:"icon_exe.gif",psd:"icon_psd.gif",txt:"icon_txt.gif",jpg:"icon_jpg.gif",png:"icon_jpg.gif",jpeg:"icon_jpg.gif",gif:"icon_jpg.gif",ico:"icon_jpg.gif",bmp:"icon_jpg.gif"};return c[b]?c[b]:c.txt}var b=this;return{commands:{insertfile:{execCommand:function(c,d){d=utils.isArray(d)?d:[d];var e,f,g,h,i="",j=b.getOpt("UEDITOR_HOME_URL"),k=j+("/"==j.substr(j.length-1)?"":"/")+"dialogs/attachment/fileTypeImages/";for(e=0;e<d.length;e++)f=d[e],g=k+a(f.url),h=f.title||f.url.substr(f.url.lastIndexOf("/")+1),i+='<p style="line-height: 16px;"><img style="vertical-align: middle; margin-right: 2px;" src="'+g+'" _src="'+g+'" /><a style="font-size:12px; color:#0066cc;" href="'+f.url+'" title="'+h+'">'+h+"</a></p>";b.execCommand("insertHtml",i)}}}}}),UE.plugins.xssFilter=function(){function a(a){var b=a.tagName,d=a.attrs;return c.hasOwnProperty(b)?void UE.utils.each(d,function(d,e){c[b].indexOf(e)===-1&&a.setAttr(e)}):(a.parentNode.removeChild(a),!1)}var b=UEDITOR_CONFIG,c=b.whitList;c&&b.xssFilterRules&&(this.options.filterRules=function(){var b={};return UE.utils.each(c,function(c,d){b[d]=function(b){return a(b)}}),b}());var d=[];UE.utils.each(c,function(a,b){d.push(b)}),c&&b.inputXssFilter&&this.addInputRule(function(b){b.traversal(function(b){return"element"===b.type&&void a(b)})}),c&&b.outputXssFilter&&this.addOutputRule(function(b){b.traversal(function(b){return"element"===b.type&&void a(b)})})};var baidu=baidu||{};baidu.editor=baidu.editor||{},UE.ui=baidu.editor.ui={},function(){function a(){var a=document.getElementById("edui_fixedlayer");i.setViewportOffset(a,{left:0,top:0})}function b(b){d.on(window,"scroll",a),d.on(window,"resize",baidu.editor.utils.defer(a,0,!0))}var c=baidu.editor.browser,d=baidu.editor.dom.domUtils,e="$EDITORUI",f=window[e]={},g="ID"+e,h=0,i=baidu.editor.ui.uiUtils={uid:function(a){return a?a[g]||(a[g]=++h):++h},hook:function(a,b){var c;return a&&a._callbacks?c=a:(c=function(){var b;a&&(b=a.apply(this,arguments));for(var d=c._callbacks,e=d.length;e--;){var f=d[e].apply(this,arguments);void 0===b&&(b=f)}return b},c._callbacks=[]),c._callbacks.push(b),c},createElementByHtml:function(a){var b=document.createElement("div");return b.innerHTML=a,b=b.firstChild,b.parentNode.removeChild(b),b},getViewportElement:function(){return c.ie&&c.quirks?document.body:document.documentElement},getClientRect:function(a){var b;try{b=a.getBoundingClientRect()}catch(c){b={left:0,top:0,height:0,width:0}}for(var e,f={left:Math.round(b.left),top:Math.round(b.top),height:Math.round(b.bottom-b.top),width:Math.round(b.right-b.left)};(e=a.ownerDocument)!==document&&(a=d.getWindow(e).frameElement);)b=a.getBoundingClientRect(),f.left+=b.left,f.top+=b.top;return f.bottom=f.top+f.height,f.right=f.left+f.width,f},getViewportRect:function(){var a=i.getViewportElement(),b=0|(window.innerWidth||a.clientWidth),c=0|(window.innerHeight||a.clientHeight);return{left:0,top:0,height:c,width:b,bottom:c,right:b}},setViewportOffset:function(a,b){var c=i.getFixedLayer();a.parentNode===c?(a.style.left=b.left+"px",a.style.top=b.top+"px"):d.setViewportOffset(a,b)},getEventOffset:function(a){var b=a.target||a.srcElement,c=i.getClientRect(b),d=i.getViewportOffsetByEvent(a);return{left:d.left-c.left,top:d.top-c.top}},getViewportOffsetByEvent:function(a){var b=a.target||a.srcElement,c=d.getWindow(b).frameElement,e={left:a.clientX,top:a.clientY};if(c&&b.ownerDocument!==document){var f=i.getClientRect(c);e.left+=f.left,e.top+=f.top}return e},setGlobal:function(a,b){return f[a]=b,e+'["'+a+'"]'},unsetGlobal:function(a){delete f[a]},copyAttributes:function(a,b){for(var e=b.attributes,f=e.length;f--;){var g=e[f];"style"==g.nodeName||"class"==g.nodeName||c.ie&&!g.specified||a.setAttribute(g.nodeName,g.nodeValue)}b.className&&d.addClass(a,b.className),b.style.cssText&&(a.style.cssText+=";"+b.style.cssText)},removeStyle:function(a,b){if(a.style.removeProperty)a.style.removeProperty(b);else{if(!a.style.removeAttribute)throw"";a.style.removeAttribute(b)}},contains:function(a,b){return a&&b&&a!==b&&(a.contains?a.contains(b):16&a.compareDocumentPosition(b))},startDrag:function(a,b,c){function d(a){var c=a.clientX-g,d=a.clientY-h;b.ondragmove(c,d,a),a.stopPropagation?a.stopPropagation():a.cancelBubble=!0}function e(a){c.removeEventListener("mousemove",d,!0),c.removeEventListener("mouseup",e,!0),window.removeEventListener("mouseup",e,!0),b.ondragstop()}function f(){i.releaseCapture(),i.detachEvent("onmousemove",d),i.detachEvent("onmouseup",f),i.detachEvent("onlosecaptrue",f),b.ondragstop()}var c=c||document,g=a.clientX,h=a.clientY;if(c.addEventListener)c.addEventListener("mousemove",d,!0),c.addEventListener("mouseup",e,!0),window.addEventListener("mouseup",e,!0),a.preventDefault();else{var i=a.srcElement;i.setCapture(),i.attachEvent("onmousemove",d),i.attachEvent("onmouseup",f),i.attachEvent("onlosecaptrue",f),a.returnValue=!1}b.ondragstart()},getFixedLayer:function(){var d=document.getElementById("edui_fixedlayer");return null==d&&(d=document.createElement("div"),d.id="edui_fixedlayer",document.body.appendChild(d),c.ie&&c.version<=8?(d.style.position="absolute",b(),setTimeout(a)):d.style.position="fixed",d.style.left="0",d.style.top="0",d.style.width="0",d.style.height="0"),d},makeUnselectable:function(a){if(c.opera||c.ie&&c.version<9){if(a.unselectable="on",a.hasChildNodes())for(var b=0;b<a.childNodes.length;b++)1==a.childNodes[b].nodeType&&i.makeUnselectable(a.childNodes[b])}else void 0!==a.style.MozUserSelect?a.style.MozUserSelect="none":void 0!==a.style.WebkitUserSelect?a.style.WebkitUserSelect="none":void 0!==a.style.KhtmlUserSelect&&(a.style.KhtmlUserSelect="none")}}}(),function(){var a=baidu.editor.utils,b=baidu.editor.ui.uiUtils,c=baidu.editor.EventBase,d=baidu.editor.ui.UIBase=function(){};d.prototype={className:"",uiName:"",initOptions:function(a){var c=this;for(var d in a)c[d]=a[d];this.id=this.id||"edui"+b.uid()},initUIBase:function(){this._globalKey=a.unhtml(b.setGlobal(this.id,this))},render:function(a){for(var c,d=this.renderHtml(),e=b.createElementByHtml(d),f=domUtils.getElementsByTagName(e,"*"),g="edui-"+(this.theme||this.editor.options.theme),h=document.getElementById("edui_fixedlayer"),i=0;c=f[i++];)domUtils.addClass(c,g);domUtils.addClass(e,g),h&&(h.className="",domUtils.addClass(h,g));var j=this.getDom();null!=j?(j.parentNode.replaceChild(e,j),b.copyAttributes(e,j)):("string"==typeof a&&(a=document.getElementById(a)),a=a||b.getFixedLayer(),domUtils.addClass(a,g),a.appendChild(e)),this.postRender()},getDom:function(a){return a?document.getElementById(this.id+"_"+a):document.getElementById(this.id)},postRender:function(){this.fireEvent("postrender")},getHtmlTpl:function(){return""},formatHtml:function(a){var b="edui-"+this.uiName;return a.replace(/##/g,this.id).replace(/%%-/g,this.uiName?b+"-":"").replace(/%%/g,(this.uiName?b:"")+" "+this.className).replace(/\$\$/g,this._globalKey)},renderHtml:function(){return this.formatHtml(this.getHtmlTpl())},dispose:function(){var a=this.getDom();a&&baidu.editor.dom.domUtils.remove(a),b.unsetGlobal(this.id)}},a.inherits(d,c)}(),function(){var a=baidu.editor.utils,b=baidu.editor.ui.UIBase,c=baidu.editor.ui.Separator=function(a){this.initOptions(a),this.initSeparator()};c.prototype={uiName:"separator",initSeparator:function(){this.initUIBase()},getHtmlTpl:function(){return'<div id="##" class="edui-box %%"></div>'}},a.inherits(c,b)}(),function(){var a=baidu.editor.utils,b=baidu.editor.dom.domUtils,c=baidu.editor.ui.UIBase,d=baidu.editor.ui.uiUtils,e=baidu.editor.ui.Mask=function(a){this.initOptions(a),this.initUIBase()};e.prototype={getHtmlTpl:function(){return'<div id="##" class="edui-mask %%" onclick="return $$._onClick(event, this);" onmousedown="return $$._onMouseDown(event, this);"></div>'},postRender:function(){var a=this;b.on(window,"resize",function(){setTimeout(function(){a.isHidden()||a._fill()})})},show:function(a){this._fill(),this.getDom().style.display="",this.getDom().style.zIndex=a},hide:function(){this.getDom().style.display="none",this.getDom().style.zIndex=""},isHidden:function(){return"none"==this.getDom().style.display},_onMouseDown:function(){return!1},_onClick:function(a,b){this.fireEvent("click",a,b)},_fill:function(){var a=this.getDom(),b=d.getViewportRect();a.style.width=b.width+"px",a.style.height=b.height+"px"}},a.inherits(e,c)}(),function(){function a(a,b){for(var c=0;c<g.length;c++){var d=g[c];if(!d.isHidden()&&d.queryAutoHide(b)!==!1){if(a&&/scroll/gi.test(a.type)&&"edui-wordpastepop"==d.className)return;d.hide()}}g.length&&d.editor.fireEvent("afterhidepop")}var b=baidu.editor.utils,c=baidu.editor.ui.uiUtils,d=baidu.editor.dom.domUtils,e=baidu.editor.ui.UIBase,f=baidu.editor.ui.Popup=function(a){this.initOptions(a),this.initPopup()},g=[];f.postHide=a;var h=["edui-anchor-topleft","edui-anchor-topright","edui-anchor-bottomleft","edui-anchor-bottomright"];f.prototype={SHADOW_RADIUS:5,content:null,_hidden:!1,autoRender:!0,canSideLeft:!0,canSideUp:!0,initPopup:function(){this.initUIBase(),g.push(this)},getHtmlTpl:function(){return'<div id="##" class="edui-popup %%" onmousedown="return false;"> <div id="##_body" class="edui-popup-body"> <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="about:blank"></iframe> <div class="edui-shadow"></div> <div id="##_content" class="edui-popup-content">'+this.getContentHtmlTpl()+"  </div> </div></div>"},getContentHtmlTpl:function(){return this.content?"string"==typeof this.content?this.content:this.content.renderHtml():""},_UIBase_postRender:e.prototype.postRender,postRender:function(){if(this.content instanceof e&&this.content.postRender(),this.captureWheel&&!this.captured){this.captured=!0;var a=(document.documentElement.clientHeight||document.body.clientHeight)-80,b=this.getDom().offsetHeight,f=c.getClientRect(this.combox.getDom()).top,g=this.getDom("content"),h=this.getDom("body").getElementsByTagName("iframe"),i=this;for(h.length&&(h=h[0]);f+b>a;)b-=30;g.style.height=b+"px",h&&(h.style.height=b+"px"),window.XMLHttpRequest?d.on(g,"onmousewheel"in document.body?"mousewheel":"DOMMouseScroll",function(a){a.preventDefault?a.preventDefault():a.returnValue=!1,a.wheelDelta?g.scrollTop-=a.wheelDelta/120*60:g.scrollTop-=a.detail/-3*60}):d.on(this.getDom(),"mousewheel",function(a){a.returnValue=!1,i.getDom("content").scrollTop-=a.wheelDelta/120*60})}this.fireEvent("postRenderAfter"),this.hide(!0),this._UIBase_postRender()},_doAutoRender:function(){!this.getDom()&&this.autoRender&&this.render()},mesureSize:function(){var a=this.getDom("content");return c.getClientRect(a)},fitSize:function(){if(this.captureWheel&&this.sized)return this.__size;this.sized=!0;var a=this.getDom("body");a.style.width="",a.style.height="";var b=this.mesureSize();if(this.captureWheel){a.style.width=-(-20-b.width)+"px";var c=parseInt(this.getDom("content").style.height,10);!window.isNaN(c)&&(b.height=c)}else a.style.width=b.width+"px";return a.style.height=b.height+"px",this.__size=b,this.captureWheel&&(this.getDom("content").style.overflow="auto"),b},showAnchor:function(a,b){this.showAnchorRect(c.getClientRect(a),b)},showAnchorRect:function(a,b,e){this._doAutoRender();var f=c.getViewportRect();this.getDom().style.visibility="hidden",this._show();var g,i,j,k,l=this.fitSize();b?(g=this.canSideLeft&&a.right+l.width>f.right&&a.left>l.width,i=this.canSideUp&&a.top+l.height>f.bottom&&a.bottom>l.height,j=g?a.left-l.width:a.right,k=i?a.bottom-l.height:a.top):(g=this.canSideLeft&&a.right+l.width>f.right&&a.left>l.width,i=this.canSideUp&&a.top+l.height>f.bottom&&a.bottom>l.height,j=g?a.right-l.width:a.left,k=i?a.top-l.height:a.bottom);var m=this.getDom();c.setViewportOffset(m,{left:j,top:k}),d.removeClasses(m,h),m.className+=" "+h[2*(i?1:0)+(g?1:0)],this.editor&&(m.style.zIndex=1*this.editor.container.style.zIndex+10,baidu.editor.ui.uiUtils.getFixedLayer().style.zIndex=m.style.zIndex-1),this.getDom().style.visibility="visible"},showAt:function(a){var b=a.left,c=a.top,d={left:b,top:c,right:b,bottom:c,height:0,width:0};this.showAnchorRect(d,!1,!0)},_show:function(){if(this._hidden){var a=this.getDom();a.style.display="",this._hidden=!1,this.fireEvent("show")}},isHidden:function(){return this._hidden},show:function(){this._doAutoRender(),this._show()},hide:function(a){!this._hidden&&this.getDom()&&(this.getDom().style.display="none",this._hidden=!0,a||this.fireEvent("hide"))},queryAutoHide:function(a){return!a||!c.contains(this.getDom(),a)}},b.inherits(f,e),d.on(document,"mousedown",function(b){var c=b.target||b.srcElement;a(b,c)}),d.on(window,"scroll",function(b,c){a(b,c)})}(),function(){function a(a,b){for(var c='<div id="##" class="edui-colorpicker %%"><div class="edui-colorpicker-topbar edui-clearfix"><div unselectable="on" id="##_preview" class="edui-colorpicker-preview"></div><div unselectable="on" class="edui-colorpicker-nocolor" onclick="$$._onPickNoColor(event, this);">'+a+'</div></div><table  class="edui-box" style="border-collapse: collapse;" onmouseover="$$._onTableOver(event, this);" onmouseout="$$._onTableOut(event, this);" onclick="return $$._onTableClick(event, this);" cellspacing="0" cellpadding="0"><tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#39C;padding-top: 2px"><td colspan="10">'+b.getLang("themeColor")+'</td> </tr><tr class="edui-colorpicker-tablefirstrow" >',d=0;d<e.length;d++)d&&d%10===0&&(c+="</tr>"+(60==d?'<tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#39C;"><td colspan="10">'+b.getLang("standardColor")+"</td></tr>":"")+"<tr"+(60==d?' class="edui-colorpicker-tablefirstrow"':"")+">"),c+=d<70?'<td style="padding: 0 2px;"><a hidefocus title="'+e[d]+'" onclick="return false;" href="javascript:" unselectable="on" class="edui-box edui-colorpicker-colorcell" data-color="#'+e[d]+'" style="background-color:#'+e[d]+";border:solid #ccc;"+(d<10||d>=60?"border-width:1px;":d>=10&&d<20?"border-width:1px 1px 0 1px;":"border-width:0 1px 0 1px;")+'"></a></td>':"";return c+="</tr></table></div>"}var b=baidu.editor.utils,c=baidu.editor.ui.UIBase,d=baidu.editor.ui.ColorPicker=function(a){this.initOptions(a),this.noColorText=this.noColorText||this.editor.getLang("clearColor"),this.initUIBase()};d.prototype={getHtmlTpl:function(){return a(this.noColorText,this.editor)},_onTableClick:function(a){var b=a.target||a.srcElement,c=b.getAttribute("data-color");c&&this.fireEvent("pickcolor",c)},_onTableOver:function(a){var b=a.target||a.srcElement,c=b.getAttribute("data-color");c&&(this.getDom("preview").style.backgroundColor=c)},_onTableOut:function(){this.getDom("preview").style.backgroundColor=""},_onPickNoColor:function(){this.fireEvent("picknocolor")}},b.inherits(d,c);var e="ffffff,000000,eeece1,1f497d,4f81bd,c0504d,9bbb59,8064a2,4bacc6,f79646,f2f2f2,7f7f7f,ddd9c3,c6d9f0,dbe5f1,f2dcdb,ebf1dd,e5e0ec,dbeef3,fdeada,d8d8d8,595959,c4bd97,8db3e2,b8cce4,e5b9b7,d7e3bc,ccc1d9,b7dde8,fbd5b5,bfbfbf,3f3f3f,938953,548dd4,95b3d7,d99694,c3d69b,b2a2c7,92cddc,fac08f,a5a5a5,262626,494429,17365d,366092,953734,76923c,5f497a,31859b,e36c09,7f7f7f,0c0c0c,1d1b10,0f243e,244061,632423,4f6128,3f3151,205867,974806,c00000,ff0000,ffc000,ffff00,92d050,00b050,00b0f0,0070c0,002060,7030a0,".split(",")}(),function(){var a=baidu.editor.utils,b=baidu.editor.ui.uiUtils,c=baidu.editor.ui.UIBase,d=baidu.editor.ui.TablePicker=function(a){this.initOptions(a),this.initTablePicker()};d.prototype={defaultNumRows:10,defaultNumCols:10,maxNumRows:20,maxNumCols:20,numRows:10,numCols:10,lengthOfCellSide:22,initTablePicker:function(){this.initUIBase()},getHtmlTpl:function(){return'<div id="##" class="edui-tablepicker %%"><div class="edui-tablepicker-body"><div class="edui-infoarea"><span id="##_label" class="edui-label"></span></div><div class="edui-pickarea" onmousemove="$$._onMouseMove(event, this);" onmouseover="$$._onMouseOver(event, this);" onmouseout="$$._onMouseOut(event, this);" onclick="$$._onClick(event, this);"><div id="##_overlay" class="edui-overlay"></div></div></div></div>'},_UIBase_render:c.prototype.render,render:function(a){this._UIBase_render(a),this.getDom("label").innerHTML="0"+this.editor.getLang("t_row")+" x 0"+this.editor.getLang("t_col")},_track:function(a,b){var c=this.getDom("overlay").style,d=this.lengthOfCellSide;c.width=a*d+"px",c.height=b*d+"px";var e=this.getDom("label");e.innerHTML=a+this.editor.getLang("t_col")+" x "+b+this.editor.getLang("t_row"),this.numCols=a,this.numRows=b},_onMouseOver:function(a,c){var d=a.relatedTarget||a.fromElement;b.contains(c,d)||c===d||(this.getDom("label").innerHTML="0"+this.editor.getLang("t_col")+" x 0"+this.editor.getLang("t_row"),this.getDom("overlay").style.visibility="")},_onMouseOut:function(a,c){var d=a.relatedTarget||a.toElement;b.contains(c,d)||c===d||(this.getDom("label").innerHTML="0"+this.editor.getLang("t_col")+" x 0"+this.editor.getLang("t_row"),this.getDom("overlay").style.visibility="hidden")},_onMouseMove:function(a,c){var d=(this.getDom("overlay").style,b.getEventOffset(a)),e=this.lengthOfCellSide,f=Math.ceil(d.left/e),g=Math.ceil(d.top/e);this._track(f,g)},_onClick:function(){this.fireEvent("picktable",this.numCols,this.numRows)}},a.inherits(d,c)}(),function(){var a=baidu.editor.browser,b=baidu.editor.dom.domUtils,c=baidu.editor.ui.uiUtils,d='onmousedown="$$.Stateful_onMouseDown(event, this);" onmouseup="$$.Stateful_onMouseUp(event, this);"'+(a.ie?' onmouseenter="$$.Stateful_onMouseEnter(event, this);" onmouseleave="$$.Stateful_onMouseLeave(event, this);"':' onmouseover="$$.Stateful_onMouseOver(event, this);" onmouseout="$$.Stateful_onMouseOut(event, this);"');baidu.editor.ui.Stateful={alwalysHoverable:!1,target:null,Stateful_init:function(){this._Stateful_dGetHtmlTpl=this.getHtmlTpl,this.getHtmlTpl=this.Stateful_getHtmlTpl},Stateful_getHtmlTpl:function(){var a=this._Stateful_dGetHtmlTpl();return a.replace(/stateful/g,function(){return d})},Stateful_onMouseEnter:function(a,b){this.target=b,this.isDisabled()&&!this.alwalysHoverable||(this.addState("hover"),this.fireEvent("over"))},Stateful_onMouseLeave:function(a,b){this.isDisabled()&&!this.alwalysHoverable||(this.removeState("hover"),this.removeState("active"),this.fireEvent("out"))},Stateful_onMouseOver:function(a,b){var d=a.relatedTarget;c.contains(b,d)||b===d||this.Stateful_onMouseEnter(a,b)},Stateful_onMouseOut:function(a,b){var d=a.relatedTarget;c.contains(b,d)||b===d||this.Stateful_onMouseLeave(a,b)},Stateful_onMouseDown:function(a,b){this.isDisabled()||this.addState("active")},Stateful_onMouseUp:function(a,b){this.isDisabled()||this.removeState("active")},Stateful_postRender:function(){this.disabled&&!this.hasState("disabled")&&this.addState("disabled")},hasState:function(a){return b.hasClass(this.getStateDom(),"edui-state-"+a)},addState:function(a){this.hasState(a)||(this.getStateDom().className+=" edui-state-"+a)},removeState:function(a){this.hasState(a)&&b.removeClasses(this.getStateDom(),["edui-state-"+a])},getStateDom:function(){return this.getDom("state")},isChecked:function(){return this.hasState("checked")},setChecked:function(a){!this.isDisabled()&&a?this.addState("checked"):this.removeState("checked")},isDisabled:function(){return this.hasState("disabled")},setDisabled:function(a){a?(this.removeState("hover"),this.removeState("checked"),this.removeState("active"),this.addState("disabled")):this.removeState("disabled")}}}(),function(){var a=baidu.editor.utils,b=baidu.editor.ui.UIBase,c=baidu.editor.ui.Stateful,d=baidu.editor.ui.Button=function(a){if(a.name){var b=a.name,c=a.cssRules;a.className||(a.className="edui-for-"+b),a.cssRules=".edui-default  .edui-for-"+b+" .edui-icon {"+c+"}"}this.initOptions(a),this.initButton()};d.prototype={uiName:"button",label:"",title:"",showIcon:!0,showText:!0,cssRules:"",initButton:function(){this.initUIBase(),this.Stateful_init(),this.cssRules&&a.cssRule("edui-customize-"+this.name+"-style",this.cssRules)},getHtmlTpl:function(){return'<div id="##" class="edui-box %%"><div id="##_state" stateful><div class="%%-wrap"><div id="##_body" unselectable="on" '+(this.title?'title="'+this.title+'"':"")+' class="%%-body" onmousedown="return $$._onMouseDown(event, this);" onclick="return $$._onClick(event, this);">'+(this.showIcon?'<div class="edui-box edui-icon"></div>':"")+(this.showText?'<div class="edui-box edui-label">'+this.label+"</div>":"")+"</div></div></div></div>"},postRender:function(){this.Stateful_postRender(),this.setDisabled(this.disabled)},_onMouseDown:function(a){var b=a.target||a.srcElement,c=b&&b.tagName&&b.tagName.toLowerCase();if("input"==c||"object"==c||"object"==c)return!1},_onClick:function(){this.isDisabled()||this.fireEvent("click")},setTitle:function(a){var b=this.getDom("label");b.innerHTML=a}},a.inherits(d,b),a.extend(d.prototype,c)}(),function(){var a=baidu.editor.utils,b=baidu.editor.ui.uiUtils,c=(baidu.editor.dom.domUtils,baidu.editor.ui.UIBase),d=baidu.editor.ui.Stateful,e=baidu.editor.ui.SplitButton=function(a){this.initOptions(a),this.initSplitButton()};e.prototype={popup:null,uiName:"splitbutton",title:"",initSplitButton:function(){this.initUIBase(),this.Stateful_init();if(null!=this.popup){var a=this.popup;this.popup=null,this.setPopup(a)}},_UIBase_postRender:c.prototype.postRender,postRender:function(){this.Stateful_postRender(),this._UIBase_postRender()},setPopup:function(c){this.popup!==c&&(null!=this.popup&&this.popup.dispose(),c.addListener("show",a.bind(this._onPopupShow,this)),c.addListener("hide",a.bind(this._onPopupHide,this)),c.addListener("postrender",a.bind(function(){c.getDom("body").appendChild(b.createElementByHtml('<div id="'+this.popup.id+'_bordereraser" class="edui-bordereraser edui-background" style="width:'+(b.getClientRect(this.getDom()).width+20)+'px"></div>')),c.getDom().className+=" "+this.className},this)),this.popup=c)},_onPopupShow:function(){this.addState("opened")},_onPopupHide:function(){this.removeState("opened")},getHtmlTpl:function(){return'<div id="##" class="edui-box %%"><div '+(this.title?'title="'+this.title+'"':"")+' id="##_state" stateful><div class="%%-body"><div id="##_button_body" class="edui-box edui-button-body" onclick="$$._onButtonClick(event, this);"><div class="edui-box edui-icon"></div></div><div class="edui-box edui-splitborder"></div><div class="edui-box edui-arrow" onclick="$$._onArrowClick();"></div></div></div></div>'},showPopup:function(){var a=b.getClientRect(this.getDom());a.top-=this.popup.SHADOW_RADIUS,a.height+=this.popup.SHADOW_RADIUS,this.popup.showAnchorRect(a)},_onArrowClick:function(a,b){this.isDisabled()||this.showPopup()},_onButtonClick:function(){this.isDisabled()||this.fireEvent("buttonclick")}},a.inherits(e,c),a.extend(e.prototype,d,!0)}(),function(){var a=baidu.editor.utils,b=baidu.editor.ui.uiUtils,c=baidu.editor.ui.ColorPicker,d=baidu.editor.ui.Popup,e=baidu.editor.ui.SplitButton,f=baidu.editor.ui.ColorButton=function(a){this.initOptions(a),this.initColorButton()};f.prototype={initColorButton:function(){var a=this;this.popup=new d({content:new c({noColorText:a.editor.getLang("clearColor"),editor:a.editor,onpickcolor:function(b,c){a._onPickColor(c)},onpicknocolor:function(b,c){a._onPickNoColor(c)}}),editor:a.editor}),this.initSplitButton()},_SplitButton_postRender:e.prototype.postRender,postRender:function(){this._SplitButton_postRender(),this.getDom("button_body").appendChild(b.createElementByHtml('<div id="'+this.id+'_colorlump" class="edui-colorlump"></div>')),this.getDom().className+=" edui-colorbutton";
},setColor:function(a){this.getDom("colorlump").style.backgroundColor=a,this.color=a},_onPickColor:function(a){this.fireEvent("pickcolor",a)!==!1&&(this.setColor(a),this.popup.hide())},_onPickNoColor:function(a){this.fireEvent("picknocolor")!==!1&&this.popup.hide()}},a.inherits(f,e)}(),function(){var a=baidu.editor.utils,b=baidu.editor.ui.Popup,c=baidu.editor.ui.TablePicker,d=baidu.editor.ui.SplitButton,e=baidu.editor.ui.TableButton=function(a){this.initOptions(a),this.initTableButton()};e.prototype={initTableButton:function(){var a=this;this.popup=new b({content:new c({editor:a.editor,onpicktable:function(b,c,d){a._onPickTable(c,d)}}),editor:a.editor}),this.initSplitButton()},_onPickTable:function(a,b){this.fireEvent("picktable",a,b)!==!1&&this.popup.hide()}},a.inherits(e,d)}(),function(){var a=baidu.editor.utils,b=baidu.editor.ui.UIBase,c=baidu.editor.ui.AutoTypeSetPicker=function(a){this.initOptions(a),this.initAutoTypeSetPicker()};c.prototype={initAutoTypeSetPicker:function(){this.initUIBase()},getHtmlTpl:function(){var a=this.editor,b=a.options.autotypeset,c=a.getLang("autoTypeSet"),d="textAlignValue"+a.uid,e="imageBlockLineValue"+a.uid,f="symbolConverValue"+a.uid;return'<div id="##" class="edui-autotypesetpicker %%"><div class="edui-autotypesetpicker-body"><table ><tr><td nowrap><input type="checkbox" name="mergeEmptyline" '+(b.mergeEmptyline?"checked":"")+">"+c.mergeLine+'</td><td colspan="2"><input type="checkbox" name="removeEmptyline" '+(b.removeEmptyline?"checked":"")+">"+c.delLine+'</td></tr><tr><td nowrap><input type="checkbox" name="removeClass" '+(b.removeClass?"checked":"")+">"+c.removeFormat+'</td><td colspan="2"><input type="checkbox" name="indent" '+(b.indent?"checked":"")+">"+c.indent+'</td></tr><tr><td nowrap><input type="checkbox" name="textAlign" '+(b.textAlign?"checked":"")+">"+c.alignment+'</td><td colspan="2" id="'+d+'"><input type="radio" name="'+d+'" value="left" '+(b.textAlign&&"left"==b.textAlign?"checked":"")+">"+a.getLang("justifyleft")+'<input type="radio" name="'+d+'" value="center" '+(b.textAlign&&"center"==b.textAlign?"checked":"")+">"+a.getLang("justifycenter")+'<input type="radio" name="'+d+'" value="right" '+(b.textAlign&&"right"==b.textAlign?"checked":"")+">"+a.getLang("justifyright")+'</td></tr><tr><td nowrap><input type="checkbox" name="imageBlockLine" '+(b.imageBlockLine?"checked":"")+">"+c.imageFloat+'</td><td nowrap id="'+e+'"><input type="radio" name="'+e+'" value="none" '+(b.imageBlockLine&&"none"==b.imageBlockLine?"checked":"")+">"+a.getLang("default")+'<input type="radio" name="'+e+'" value="left" '+(b.imageBlockLine&&"left"==b.imageBlockLine?"checked":"")+">"+a.getLang("justifyleft")+'<input type="radio" name="'+e+'" value="center" '+(b.imageBlockLine&&"center"==b.imageBlockLine?"checked":"")+">"+a.getLang("justifycenter")+'<input type="radio" name="'+e+'" value="right" '+(b.imageBlockLine&&"right"==b.imageBlockLine?"checked":"")+">"+a.getLang("justifyright")+'</td></tr><tr><td nowrap><input type="checkbox" name="clearFontSize" '+(b.clearFontSize?"checked":"")+">"+c.removeFontsize+'</td><td colspan="2"><input type="checkbox" name="clearFontFamily" '+(b.clearFontFamily?"checked":"")+">"+c.removeFontFamily+'</td></tr><tr><td nowrap colspan="3"><input type="checkbox" name="removeEmptyNode" '+(b.removeEmptyNode?"checked":"")+">"+c.removeHtml+'</td></tr><tr><td nowrap colspan="3"><input type="checkbox" name="pasteFilter" '+(b.pasteFilter?"checked":"")+">"+c.pasteFilter+'</td></tr><tr><td nowrap><input type="checkbox" name="symbolConver" '+(b.bdc2sb||b.tobdc?"checked":"")+">"+c.symbol+'</td><td id="'+f+'"><input type="radio" name="bdc" value="bdc2sb" '+(b.bdc2sb?"checked":"")+">"+c.bdc2sb+'<input type="radio" name="bdc" value="tobdc" '+(b.tobdc?"checked":"")+">"+c.tobdc+'</td><td nowrap align="right"><button >'+c.run+"</button></td></tr></table></div></div>"},_UIBase_render:b.prototype.render},a.inherits(c,b)}(),function(){function a(a){for(var c,d={},e=a.getDom(),f=a.editor.uid,g=null,h=null,i=domUtils.getElementsByTagName(e,"input"),j=i.length-1;c=i[j--];)if(g=c.getAttribute("type"),"checkbox"==g)if(h=c.getAttribute("name"),d[h]&&delete d[h],c.checked){var k=document.getElementById(h+"Value"+f);if(k){if(/input/gi.test(k.tagName))d[h]=k.value;else for(var l,m=k.getElementsByTagName("input"),n=m.length-1;l=m[n--];)if(l.checked){d[h]=l.value;break}}else d[h]=!0}else d[h]=!1;else d[c.getAttribute("value")]=c.checked;for(var o,p=domUtils.getElementsByTagName(e,"select"),j=0;o=p[j++];){var q=o.getAttribute("name");d[q]=d[q]?o.value:""}b.extend(a.editor.options.autotypeset,d),a.editor.setPreferences("autotypeset",d)}var b=baidu.editor.utils,c=baidu.editor.ui.Popup,d=baidu.editor.ui.AutoTypeSetPicker,e=baidu.editor.ui.SplitButton,f=baidu.editor.ui.AutoTypeSetButton=function(a){this.initOptions(a),this.initAutoTypeSetButton()};f.prototype={initAutoTypeSetButton:function(){var b=this;this.popup=new c({content:new d({editor:b.editor}),editor:b.editor,hide:function(){!this._hidden&&this.getDom()&&(a(this),this.getDom().style.display="none",this._hidden=!0,this.fireEvent("hide"))}});var e=0;this.popup.addListener("postRenderAfter",function(){var c=this;if(!e){var d=this.getDom(),f=d.getElementsByTagName("button")[0];f.onclick=function(){a(c),b.editor.execCommand("autotypeset"),c.hide()},domUtils.on(d,"click",function(d){var e=d.target||d.srcElement,f=b.editor.uid;if(e&&"INPUT"==e.tagName){if("imageBlockLine"==e.name||"textAlign"==e.name||"symbolConver"==e.name)for(var g=e.checked,h=document.getElementById(e.name+"Value"+f),i=h.getElementsByTagName("input"),j={imageBlockLine:"none",textAlign:"left",symbolConver:"tobdc"},k=0;k<i.length;k++)g?i[k].value==j[e.name]&&(i[k].checked="checked"):i[k].checked=!1;if(e.name=="imageBlockLineValue"+f||e.name=="textAlignValue"+f||"bdc"==e.name){var l=e.parentNode.previousSibling.getElementsByTagName("input");l&&(l[0].checked=!0)}a(c)}}),e=1}}),this.initSplitButton()}},b.inherits(f,e)}(),function(){var a=baidu.editor.utils,b=baidu.editor.ui.Popup,c=baidu.editor.ui.Stateful,d=baidu.editor.ui.UIBase,e=baidu.editor.ui.CellAlignPicker=function(a){this.initOptions(a),this.initSelected(),this.initCellAlignPicker()};e.prototype={initSelected:function(){var a={valign:{top:0,middle:1,bottom:2},align:{left:0,center:1,right:2},count:3};this.selected&&(this.selectedIndex=a.valign[this.selected.valign]*a.count+a.align[this.selected.align])},initCellAlignPicker:function(){this.initUIBase(),this.Stateful_init()},getHtmlTpl:function(){for(var a=["left","center","right"],b=9,c=null,d=-1,e=[],f=0;f<b;f++)c=this.selectedIndex===f?' class="edui-cellalign-selected" ':"",d=f%3,0===d&&e.push("<tr>"),e.push('<td index="'+f+'" '+c+' stateful><div class="edui-icon edui-'+a[d]+'"></div></td>'),2===d&&e.push("</tr>");return'<div id="##" class="edui-cellalignpicker %%"><div class="edui-cellalignpicker-body"><table onclick="$$._onClick(event);">'+e.join("")+"</table></div></div>"},getStateDom:function(){return this.target},_onClick:function(a){var c=a.target||a.srcElement;/icon/.test(c.className)&&(this.items[c.parentNode.getAttribute("index")].onclick(),b.postHide(a))},_UIBase_render:d.prototype.render},a.inherits(e,d),a.extend(e.prototype,c,!0)}(),function(){var a=baidu.editor.utils,b=baidu.editor.ui.Stateful,c=baidu.editor.ui.uiUtils,d=baidu.editor.ui.UIBase,e=baidu.editor.ui.PastePicker=function(a){this.initOptions(a),this.initPastePicker()};e.prototype={initPastePicker:function(){this.initUIBase(),this.Stateful_init()},getHtmlTpl:function(){return'<div class="edui-pasteicon" onclick="$$._onClick(this)"></div><div class="edui-pastecontainer"><div class="edui-title">'+this.editor.getLang("pasteOpt")+'</div><div class="edui-button"><div title="'+this.editor.getLang("pasteSourceFormat")+'" onclick="$$.format(false)" stateful><div class="edui-richtxticon"></div></div><div title="'+this.editor.getLang("tagFormat")+'" onclick="$$.format(2)" stateful><div class="edui-tagicon"></div></div><div title="'+this.editor.getLang("pasteTextFormat")+'" onclick="$$.format(true)" stateful><div class="edui-plaintxticon"></div></div></div></div></div>'},getStateDom:function(){return this.target},format:function(a){this.editor.ui._isTransfer=!0,this.editor.fireEvent("pasteTransfer",a)},_onClick:function(a){var b=domUtils.getNextDomNode(a),d=c.getViewportRect().height,e=c.getClientRect(b);e.top+e.height>d?b.style.top=-e.height-a.offsetHeight+"px":b.style.top="",/hidden/gi.test(domUtils.getComputedStyle(b,"visibility"))?(b.style.visibility="visible",domUtils.addClass(a,"edui-state-opened")):(b.style.visibility="hidden",domUtils.removeClasses(a,"edui-state-opened"))},_UIBase_render:d.prototype.render},a.inherits(e,d),a.extend(e.prototype,b,!0)}(),function(){var a=baidu.editor.utils,b=baidu.editor.ui.uiUtils,c=baidu.editor.ui.UIBase,d=baidu.editor.ui.Toolbar=function(a){this.initOptions(a),this.initToolbar()};d.prototype={items:null,initToolbar:function(){this.items=this.items||[],this.initUIBase()},add:function(a,b){void 0===b?this.items.push(a):this.items.splice(b,0,a)},getHtmlTpl:function(){for(var a=[],b=0;b<this.items.length;b++)a[b]=this.items[b].renderHtml();return'<div id="##" class="edui-toolbar %%" onselectstart="return false;" onmousedown="return $$._onMouseDown(event, this);">'+a.join("")+"</div>"},postRender:function(){for(var a=this.getDom(),c=0;c<this.items.length;c++)this.items[c].postRender();b.makeUnselectable(a)},_onMouseDown:function(a){var b=a.target||a.srcElement,c=b&&b.tagName&&b.tagName.toLowerCase();if("input"==c||"object"==c||"object"==c)return!1}},a.inherits(d,c)}(),function(){var a=baidu.editor.utils,b=baidu.editor.dom.domUtils,c=baidu.editor.ui.uiUtils,d=baidu.editor.ui.UIBase,e=baidu.editor.ui.Popup,f=baidu.editor.ui.Stateful,g=baidu.editor.ui.CellAlignPicker,h=baidu.editor.ui.Menu=function(a){this.initOptions(a),this.initMenu()},i={renderHtml:function(){return'<div class="edui-menuitem edui-menuseparator"><div class="edui-menuseparator-inner"></div></div>'},postRender:function(){},queryAutoHide:function(){return!0}};h.prototype={items:null,uiName:"menu",initMenu:function(){this.items=this.items||[],this.initPopup(),this.initItems()},initItems:function(){for(var a=0;a<this.items.length;a++){var b=this.items[a];"-"==b?this.items[a]=this.getSeparator():b instanceof j||(b.editor=this.editor,b.theme=this.editor.options.theme,this.items[a]=this.createItem(b))}},getSeparator:function(){return i},createItem:function(a){return a.menu=this,new j(a)},_Popup_getContentHtmlTpl:e.prototype.getContentHtmlTpl,getContentHtmlTpl:function(){if(0==this.items.length)return this._Popup_getContentHtmlTpl();for(var a=[],b=0;b<this.items.length;b++){var c=this.items[b];a[b]=c.renderHtml()}return'<div class="%%-body">'+a.join("")+"</div>"},_Popup_postRender:e.prototype.postRender,postRender:function(){for(var a=this,d=0;d<this.items.length;d++){var e=this.items[d];e.ownerMenu=this,e.postRender()}b.on(this.getDom(),"mouseover",function(b){b=b||event;var d=b.relatedTarget||b.fromElement,e=a.getDom();c.contains(e,d)||e===d||a.fireEvent("over")}),this._Popup_postRender()},queryAutoHide:function(a){if(a){if(c.contains(this.getDom(),a))return!1;for(var b=0;b<this.items.length;b++){var d=this.items[b];if(d.queryAutoHide(a)===!1)return!1}}},clearItems:function(){for(var a=0;a<this.items.length;a++){var b=this.items[a];clearTimeout(b._showingTimer),clearTimeout(b._closingTimer),b.subMenu&&b.subMenu.destroy()}this.items=[]},destroy:function(){this.getDom()&&b.remove(this.getDom()),this.clearItems()},dispose:function(){this.destroy()}},a.inherits(h,e);var j=baidu.editor.ui.MenuItem=function(a){if(this.initOptions(a),this.initUIBase(),this.Stateful_init(),this.subMenu&&!(this.subMenu instanceof h))if(a.className&&a.className.indexOf("aligntd")!=-1){var c=this;this.subMenu.selected=this.editor.queryCommandValue("cellalignment"),this.subMenu=new e({content:new g(this.subMenu),parentMenu:c,editor:c.editor,destroy:function(){this.getDom()&&b.remove(this.getDom())}}),this.subMenu.addListener("postRenderAfter",function(){b.on(this.getDom(),"mouseover",function(){c.addState("opened")})})}else this.subMenu=new h(this.subMenu)};j.prototype={label:"",subMenu:null,ownerMenu:null,uiName:"menuitem",alwalysHoverable:!0,getHtmlTpl:function(){return'<div id="##" class="%%" stateful onclick="$$._onClick(event, this);"><div class="%%-body">'+this.renderLabelHtml()+"</div></div>"},postRender:function(){var a=this;this.addListener("over",function(){a.ownerMenu.fireEvent("submenuover",a),a.subMenu&&a.delayShowSubMenu()}),this.subMenu&&(this.getDom().className+=" edui-hassubmenu",this.subMenu.render(),this.addListener("out",function(){a.delayHideSubMenu()}),this.subMenu.addListener("over",function(){clearTimeout(a._closingTimer),a._closingTimer=null,a.addState("opened")}),this.ownerMenu.addListener("hide",function(){a.hideSubMenu()}),this.ownerMenu.addListener("submenuover",function(b,c){c!==a&&a.delayHideSubMenu()}),this.subMenu._bakQueryAutoHide=this.subMenu.queryAutoHide,this.subMenu.queryAutoHide=function(b){return(!b||!c.contains(a.getDom(),b))&&this._bakQueryAutoHide(b)}),this.getDom().style.tabIndex="-1",c.makeUnselectable(this.getDom()),this.Stateful_postRender()},delayShowSubMenu:function(){var a=this;a.isDisabled()||(a.addState("opened"),clearTimeout(a._showingTimer),clearTimeout(a._closingTimer),a._closingTimer=null,a._showingTimer=setTimeout(function(){a.showSubMenu()},250))},delayHideSubMenu:function(){var a=this;a.isDisabled()||(a.removeState("opened"),clearTimeout(a._showingTimer),a._closingTimer||(a._closingTimer=setTimeout(function(){a.hasState("opened")||a.hideSubMenu(),a._closingTimer=null},400)))},renderLabelHtml:function(){return'<div class="edui-arrow"></div><div class="edui-box edui-icon"></div><div class="edui-box edui-label %%-label">'+(this.label||"")+"</div>"},getStateDom:function(){return this.getDom()},queryAutoHide:function(a){if(this.subMenu&&this.hasState("opened"))return this.subMenu.queryAutoHide(a)},_onClick:function(a,b){this.hasState("disabled")||this.fireEvent("click",a,b)!==!1&&(this.subMenu?this.showSubMenu():e.postHide(a))},showSubMenu:function(){var a=c.getClientRect(this.getDom());a.right-=5,a.left+=2,a.width-=7,a.top-=4,a.bottom+=4,a.height+=8,this.subMenu.showAnchorRect(a,!0,!0)},hideSubMenu:function(){this.subMenu.hide()}},a.inherits(j,d),a.extend(j.prototype,f,!0)}(),function(){var a=baidu.editor.utils,b=baidu.editor.ui.uiUtils,c=baidu.editor.ui.Menu,d=baidu.editor.ui.SplitButton,e=baidu.editor.ui.Combox=function(a){this.initOptions(a),this.initCombox()};e.prototype={uiName:"combox",onbuttonclick:function(){this.showPopup()},initCombox:function(){var a=this;this.items=this.items||[];for(var b=0;b<this.items.length;b++){var d=this.items[b];d.uiName="listitem",d.index=b,d.onclick=function(){a.selectByIndex(this.index)}}this.popup=new c({items:this.items,uiName:"list",editor:this.editor,captureWheel:!0,combox:this}),this.initSplitButton()},_SplitButton_postRender:d.prototype.postRender,postRender:function(){this._SplitButton_postRender(),this.setLabel(this.label||""),this.setValue(this.initValue||"")},showPopup:function(){var a=b.getClientRect(this.getDom());a.top+=1,a.bottom-=1,a.height-=2,this.popup.showAnchorRect(a)},getValue:function(){return this.value},setValue:function(a){var b=this.indexByValue(a);b!=-1?(this.selectedIndex=b,this.setLabel(this.items[b].label),this.value=this.items[b].value):(this.selectedIndex=-1,this.setLabel(this.getLabelForUnknowValue(a)),this.value=a)},setLabel:function(a){this.getDom("button_body").innerHTML=a,this.label=a},getLabelForUnknowValue:function(a){return a},indexByValue:function(a){for(var b=0;b<this.items.length;b++)if(a==this.items[b].value)return b;return-1},getItem:function(a){return this.items[a]},selectByIndex:function(a){a<this.items.length&&this.fireEvent("select",a)!==!1&&(this.selectedIndex=a,this.value=this.items[a].value,this.setLabel(this.items[a].label))}},a.inherits(e,d)}(),function(){var a,b,c,d=baidu.editor.utils,e=baidu.editor.dom.domUtils,f=baidu.editor.ui.uiUtils,g=baidu.editor.ui.Mask,h=baidu.editor.ui.UIBase,i=baidu.editor.ui.Button,j=baidu.editor.ui.Dialog=function(a){if(a.name){var b=a.name,c=a.cssRules;a.className||(a.className="edui-for-"+b),c&&(a.cssRules=".edui-default .edui-for-"+b+" .edui-dialog-content  {"+c+"}")}this.initOptions(d.extend({autoReset:!0,draggable:!0,onok:function(){},oncancel:function(){},onclose:function(a,b){return b?this.onok():this.oncancel()},holdScroll:!1},a)),this.initDialog()};j.prototype={draggable:!1,uiName:"dialog",initDialog:function(){var e=this,f=this.editor.options.theme;if(this.cssRules&&d.cssRule("edui-customize-"+this.name+"-style",this.cssRules),this.initUIBase(),this.modalMask=a||(a=new g({className:"edui-dialog-modalmask",theme:f,onclick:function(){c&&c.close(!1)}})),this.dragMask=b||(b=new g({className:"edui-dialog-dragmask",theme:f})),this.closeButton=new i({className:"edui-dialog-closebutton",title:e.closeDialog,theme:f,onclick:function(){e.close(!1)}}),this.fullscreen&&this.initResizeEvent(),this.buttons)for(var h=0;h<this.buttons.length;h++)this.buttons[h]instanceof i||(this.buttons[h]=new i(d.extend(this.buttons[h],{editor:this.editor},!0)))},initResizeEvent:function(){var a=this;e.on(window,"resize",function(){a._hidden||void 0===a._hidden||(a.__resizeTimer&&window.clearTimeout(a.__resizeTimer),a.__resizeTimer=window.setTimeout(function(){a.__resizeTimer=null;var b=a.getDom(),c=a.getDom("content"),d=UE.ui.uiUtils.getClientRect(b),e=UE.ui.uiUtils.getClientRect(c),g=f.getViewportRect();c.style.width=g.width-d.width+e.width+"px",c.style.height=g.height-d.height+e.height+"px",b.style.width=g.width+"px",b.style.height=g.height+"px",a.fireEvent("resize")},100))})},fitSize:function(){var a=this.getDom("body"),b=this.mesureSize();return a.style.width=b.width+"px",a.style.height=b.height+"px",b},safeSetOffset:function(a){var b=this,c=b.getDom(),d=f.getViewportRect(),e=f.getClientRect(c),g=a.left;g+e.width>d.right&&(g=d.right-e.width);var h=a.top;h+e.height>d.bottom&&(h=d.bottom-e.height),c.style.left=Math.max(g,0)+"px",c.style.top=Math.max(h,0)+"px"},showAtCenter:function(){var a=f.getViewportRect();if(this.fullscreen){var b=this.getDom(),c=this.getDom("content");b.style.display="block";var d=UE.ui.uiUtils.getClientRect(b),g=UE.ui.uiUtils.getClientRect(c);b.style.left="-100000px",c.style.width=a.width-d.width+g.width+"px",c.style.height=a.height-d.height+g.height+"px",b.style.width=a.width+"px",b.style.height=a.height+"px",b.style.left=0,this._originalContext={html:{overflowX:document.documentElement.style.overflowX,overflowY:document.documentElement.style.overflowY},body:{overflowX:document.body.style.overflowX,overflowY:document.body.style.overflowY}},document.documentElement.style.overflowX="hidden",document.documentElement.style.overflowY="hidden",document.body.style.overflowX="hidden",document.body.style.overflowY="hidden"}else{this.getDom().style.display="";var h=this.fitSize(),i=0|this.getDom("titlebar").offsetHeight,j=a.width/2-h.width/2,k=a.height/2-(h.height-i)/2-i,l=this.getDom();this.safeSetOffset({left:Math.max(0|j,0),top:Math.max(0|k,0)}),e.hasClass(l,"edui-state-centered")||(l.className+=" edui-state-centered")}this._show()},getContentHtml:function(){var a="";return"string"==typeof this.content?a=this.content:this.iframeUrl&&(a='<span id="'+this.id+'_contmask" class="dialogcontmask"></span><iframe id="'+this.id+'_iframe" class="%%-iframe" height="100%" width="100%" frameborder="0" src="'+this.iframeUrl+'"></iframe>'),a},getHtmlTpl:function(){var a="";if(this.buttons){for(var b=[],c=0;c<this.buttons.length;c++)b[c]=this.buttons[c].renderHtml();a='<div class="%%-foot"><div id="##_buttons" class="%%-buttons">'+b.join("")+"</div></div>"}return'<div id="##" class="%%"><div '+(this.fullscreen?'class="%%-wrap edui-dialog-fullscreen-flag"':'class="%%"')+'><div id="##_body" class="%%-body"><div class="%%-shadow"></div><div id="##_titlebar" class="%%-titlebar"><div class="%%-draghandle" onmousedown="$$._onTitlebarMouseDown(event, this);"><span class="%%-caption">'+(this.title||"")+"</span></div>"+this.closeButton.renderHtml()+'</div><div id="##_content" class="%%-content">'+(this.autoReset?"":this.getContentHtml())+"</div>"+a+"</div></div></div>"},postRender:function(){this.modalMask.getDom()||(this.modalMask.render(),this.modalMask.hide()),this.dragMask.getDom()||(this.dragMask.render(),this.dragMask.hide());var a=this;if(this.addListener("show",function(){a.modalMask.show(this.getDom().style.zIndex-2)}),this.addListener("hide",function(){a.modalMask.hide()}),this.buttons)for(var b=0;b<this.buttons.length;b++)this.buttons[b].postRender();e.on(window,"resize",function(){setTimeout(function(){a.isHidden()||a.safeSetOffset(f.getClientRect(a.getDom()))})}),this._hide()},mesureSize:function(){var a=this.getDom("body"),b=f.getClientRect(this.getDom("content")).width,c=a.style;return c.width=b,f.getClientRect(a)},_onTitlebarMouseDown:function(a,b){if(this.draggable){var c,d=(f.getViewportRect(),this);f.startDrag(a,{ondragstart:function(){c=f.getClientRect(d.getDom()),d.getDom("contmask").style.visibility="visible",d.dragMask.show(d.getDom().style.zIndex-1)},ondragmove:function(a,b){var e=c.left+a,f=c.top+b;d.safeSetOffset({left:e,top:f})},ondragstop:function(){d.getDom("contmask").style.visibility="hidden",e.removeClasses(d.getDom(),["edui-state-centered"]),d.dragMask.hide()}})}},reset:function(){this.getDom("content").innerHTML=this.getContentHtml(),this.fireEvent("dialogafterreset")},_show:function(){this._hidden&&(this.getDom().style.display="",this.editor.container.style.zIndex&&(this.getDom().style.zIndex=1*this.editor.container.style.zIndex+10),this._hidden=!1,this.fireEvent("show"),baidu.editor.ui.uiUtils.getFixedLayer().style.zIndex=this.getDom().style.zIndex-4)},isHidden:function(){return this._hidden},_hide:function(){if(!this._hidden){var a=this.getDom();a.style.display="none",a.style.zIndex="",a.style.width="",a.style.height="",this._hidden=!0,this.fireEvent("hide")}},open:function(){if(this.autoReset)try{this.reset()}catch(a){this.render(),this.open()}if(this.showAtCenter(),this.iframeUrl)try{this.getDom("iframe").focus()}catch(b){}c=this},_onCloseButtonClick:function(a,b){this.close(!1)},close:function(a){if(this.fireEvent("close",a)!==!1){this.fullscreen&&(document.documentElement.style.overflowX=this._originalContext.html.overflowX,document.documentElement.style.overflowY=this._originalContext.html.overflowY,document.body.style.overflowX=this._originalContext.body.overflowX,document.body.style.overflowY=this._originalContext.body.overflowY,delete this._originalContext),this._hide();var b=this.getDom("content"),c=this.getDom("iframe");if(b&&c){var d=c.contentDocument||c.contentWindow.document;d&&(d.body.innerHTML=""),e.remove(b)}}}},d.inherits(j,h)}(),function(){var a=baidu.editor.utils,b=baidu.editor.ui.Menu,c=baidu.editor.ui.SplitButton,d=baidu.editor.ui.MenuButton=function(a){this.initOptions(a),this.initMenuButton()};d.prototype={initMenuButton:function(){var a=this;this.uiName="menubutton",this.popup=new b({items:a.items,className:a.className,editor:a.editor}),this.popup.addListener("show",function(){for(var b=this,c=0;c<b.items.length;c++)b.items[c].removeState("checked"),b.items[c].value==a._value&&(b.items[c].addState("checked"),this.value=a._value)}),this.initSplitButton()},setValue:function(a){this._value=a}},a.inherits(d,c)}(),function(){var a=baidu.editor.utils,b=baidu.editor.ui.Popup,c=baidu.editor.ui.SplitButton,d=baidu.editor.ui.MultiMenuPop=function(a){this.initOptions(a),this.initMultiMenu()};d.prototype={initMultiMenu:function(){var a=this;this.popup=new b({content:"",editor:a.editor,iframe_rendered:!1,onshow:function(){this.iframe_rendered||(this.iframe_rendered=!0,this.getDom("content").innerHTML='<iframe id="'+a.id+'_iframe" src="'+a.iframeUrl+'" frameborder="0"></iframe>',a.editor.container.style.zIndex&&(this.getDom().style.zIndex=1*a.editor.container.style.zIndex+1))}}),this.onbuttonclick=function(){this.showPopup()},this.initSplitButton()}},a.inherits(d,c)}(),function(){function a(a){var b=a.target||a.srcElement,c=g.findParent(b,function(a){return g.hasClass(a,"edui-shortcutmenu")||g.hasClass(a,"edui-popup")},!0);if(!c)for(var d,e=0;d=h[e++];)d.hide()}var b,c=baidu.editor.ui,d=c.UIBase,e=c.uiUtils,f=baidu.editor.utils,g=baidu.editor.dom.domUtils,h=[],i=!1,j=c.ShortCutMenu=function(a){this.initOptions(a),this.initShortCutMenu()};j.postHide=a,j.prototype={isHidden:!0,SPACE:5,initShortCutMenu:function(){this.items=this.items||[],this.initUIBase(),this.initItems(),this.initEvent(),h.push(this)},initEvent:function(){var a=this,c=a.editor.document;g.on(c,"mousemove",function(c){if(a.isHidden===!1){if(a.getSubMenuMark()||"contextmenu"==a.eventType)return;var d=!0,e=a.getDom(),f=e.offsetWidth,g=e.offsetHeight,h=f/2+a.SPACE,i=g/2,j=Math.abs(c.screenX-a.left),k=Math.abs(c.screenY-a.top);clearTimeout(b),b=setTimeout(function(){k>0&&k<i?a.setOpacity(e,"1"):k>i&&k<i+70?(a.setOpacity(e,"0.5"),d=!1):k>i+70&&k<i+140&&a.hide(),d&&j>0&&j<h?a.setOpacity(e,"1"):j>h&&j<h+70?a.setOpacity(e,"0.5"):j>h+70&&j<h+140&&a.hide()})}}),browser.chrome&&g.on(c,"mouseout",function(b){var c=b.relatedTarget||b.toElement;null!=c&&"HTML"!=c.tagName||a.hide()}),a.editor.addListener("afterhidepop",function(){a.isHidden||(i=!0)})},initItems:function(){if(f.isArray(this.items))for(var a=0,b=this.items.length;a<b;a++){var d=this.items[a].toLowerCase();c[d]&&(this.items[a]=new c[d](this.editor),this.items[a].className+=" edui-shortcutsubmenu ")}},setOpacity:function(a,b){browser.ie&&browser.version<9?a.style.filter="alpha(opacity = "+100*parseFloat(b)+");":a.style.opacity=b},getSubMenuMark:function(){i=!1;for(var a,b=e.getFixedLayer(),c=g.getElementsByTagName(b,"div",function(a){return g.hasClass(a,"edui-shortcutsubmenu edui-popup")}),d=0;a=c[d++];)"none"!=a.style.display&&(i=!0);return i},show:function(a,b){function c(a){a.left<0&&(a.left=0),a.top<0&&(a.top=0),i.style.cssText="position:absolute;left:"+a.left+"px;top:"+a.top+"px;"}function d(a){a.tagName||(a=a.getDom()),h.left=parseInt(a.style.left),h.top=parseInt(a.style.top),h.top-=i.offsetHeight+15,c(h)}var f=this,h={},i=this.getDom(),j=e.getFixedLayer();if(f.eventType=a.type,i.style.cssText="display:block;left:-9999px","contextmenu"==a.type&&b){var k=g.getElementsByTagName(j,"div","edui-contextmenu")[0];k?d(k):f.editor.addListener("aftershowcontextmenu",function(a,b){d(b)})}else h=e.getViewportOffsetByEvent(a),h.top-=i.offsetHeight+f.SPACE,h.left+=f.SPACE+20,c(h),f.setOpacity(i,.2);f.isHidden=!1,f.left=a.screenX+i.offsetWidth/2-f.SPACE,f.top=a.screenY-i.offsetHeight/2-f.SPACE,f.editor&&(i.style.zIndex=1*f.editor.container.style.zIndex+10,j.style.zIndex=i.style.zIndex-1)},hide:function(){this.getDom()&&(this.getDom().style.display="none"),this.isHidden=!0},postRender:function(){if(f.isArray(this.items))for(var a,b=0;a=this.items[b++];)a.postRender()},getHtmlTpl:function(){var a;if(f.isArray(this.items)){a=[];for(var b=0;b<this.items.length;b++)a[b]=this.items[b].renderHtml();a=a.join("")}else a=this.items;return'<div id="##" class="%% edui-toolbar" data-src="shortcutmenu" onmousedown="return false;" onselectstart="return false;" >'+a+"</div>"}},f.inherits(j,d),g.on(document,"mousedown",function(b){a(b)}),g.on(window,"scroll",function(b){a(b)})}(),function(){var a=baidu.editor.utils,b=baidu.editor.ui.UIBase,c=baidu.editor.ui.Breakline=function(a){this.initOptions(a),this.initSeparator()};c.prototype={uiName:"Breakline",initSeparator:function(){this.initUIBase()},getHtmlTpl:function(){return"<br/>"}},a.inherits(c,b)}(),function(){var a=baidu.editor.utils,b=baidu.editor.dom.domUtils,c=baidu.editor.ui.UIBase,d=baidu.editor.ui.Message=function(a){this.initOptions(a),this.initMessage()};d.prototype={initMessage:function(){this.initUIBase()},getHtmlTpl:function(){return'<div id="##" class="edui-message %%"> <div id="##_closer" class="edui-message-closer">×</div> <div id="##_body" class="edui-message-body edui-message-type-info"> <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="about:blank"></iframe> <div class="edui-shadow"></div> <div id="##_content" class="edui-message-content">  </div> </div></div>'},reset:function(a){var b=this;a.keepshow||(clearTimeout(this.timer),b.timer=setTimeout(function(){b.hide()},a.timeout||4e3)),void 0!==a.content&&b.setContent(a.content),void 0!==a.type&&b.setType(a.type),b.show()},postRender:function(){var a=this,c=this.getDom("closer");c&&b.on(c,"click",function(){a.hide()})},setContent:function(a){this.getDom("content").innerHTML=a},setType:function(a){a=a||"info";var b=this.getDom("body");b.className=b.className.replace(/edui-message-type-[\w-]+/,"edui-message-type-"+a)},getContent:function(){return this.getDom("content").innerHTML},getType:function(){var a=this.getDom("body").match(/edui-message-type-([\w-]+)/);return a?a[1]:""},show:function(){this.getDom().style.display="block"},hide:function(){var a=this.getDom();a&&(a.style.display="none",a.parentNode&&a.parentNode.removeChild(a))}},a.inherits(d,c)}(),function(){var a=baidu.editor.utils,b=baidu.editor.ui,c=b.Dialog;b.buttons={},b.Dialog=function(a){var b=new c(a);return b.addListener("hide",function(){if(b.editor){var a=b.editor;try{if(browser.gecko){var c=a.window.scrollY,d=a.window.scrollX;a.body.focus(),a.window.scrollTo(d,c)}else a.focus()}catch(e){}}}),b};for(var d,e={anchor:"~/dialogs/anchor/anchor.html",insertimage:"~/dialogs/image/image.html",link:"~/dialogs/link/link.html",spechars:"~/dialogs/spechars/spechars.html",searchreplace:"~/dialogs/searchreplace/searchreplace.html",map:"~/dialogs/map/map.html",gmap:"~/dialogs/gmap/gmap.html",insertvideo:"~/dialogs/video/video.html",help:"~/dialogs/help/help.html",preview:"~/dialogs/preview/preview.html",emotion:"~/dialogs/emotion/emotion.html",wordimage:"~/dialogs/wordimage/wordimage.html",attachment:"~/dialogs/attachment/attachment.html",insertframe:"~/dialogs/insertframe/insertframe.html",edittip:"~/dialogs/table/edittip.html",edittable:"~/dialogs/table/edittable.html",edittd:"~/dialogs/table/edittd.html",webapp:"~/dialogs/webapp/webapp.html",snapscreen:"~/dialogs/snapscreen/snapscreen.html",scrawl:"~/dialogs/scrawl/scrawl.html",music:"~/dialogs/music/music.html",template:"~/dialogs/template/template.html",background:"~/dialogs/background/background.html",charts:"~/dialogs/charts/charts.html"},f=["undo","redo","formatmatch","bold","italic","underline","fontborder","touppercase","tolowercase","strikethrough","subscript","superscript","source","indent","outdent","blockquote","pasteplain","pagebreak","selectall","print","horizontal","removeformat","time","date","unlink","insertparagraphbeforetable","insertrow","insertcol","mergeright","mergedown","deleterow","deletecol","splittorows","splittocols","splittocells","mergecells","deletetable","drafts"],g=0;d=f[g++];)d=d.toLowerCase(),b[d]=function(a){return function(c){var d=new b.Button({className:"edui-for-"+a,title:c.options.labelMap[a]||c.getLang("labelMap."+a)||"",onclick:function(){c.execCommand(a)},theme:c.options.theme,showText:!1});return b.buttons[a]=d,c.addListener("selectionchange",function(b,e,f){var g=c.queryCommandState(a);g==-1?(d.setDisabled(!0),d.setChecked(!1)):f||(d.setDisabled(!1),d.setChecked(g))}),d}}(d);b.cleardoc=function(a){var c=new b.Button({className:"edui-for-cleardoc",title:a.options.labelMap.cleardoc||a.getLang("labelMap.cleardoc")||"",theme:a.options.theme,onclick:function(){confirm(a.getLang("confirmClear"))&&a.execCommand("cleardoc")}});return b.buttons.cleardoc=c,a.addListener("selectionchange",function(){c.setDisabled(a.queryCommandState("cleardoc")==-1)}),c};var h={justify:["left","right","center","justify"],imagefloat:["none","left","center","right"],directionality:["ltr","rtl"]};for(var i in h)!function(a,c){for(var d,e=0;d=c[e++];)!function(c){b[a.replace("float","")+c]=function(d){var e=new b.Button({
className:"edui-for-"+a.replace("float","")+c,title:d.options.labelMap[a.replace("float","")+c]||d.getLang("labelMap."+a.replace("float","")+c)||"",theme:d.options.theme,onclick:function(){d.execCommand(a,c)}});return b.buttons[a]=e,d.addListener("selectionchange",function(b,f,g){e.setDisabled(d.queryCommandState(a)==-1),e.setChecked(d.queryCommandValue(a)==c&&!g)}),e}}(d)}(i,h[i]);for(var d,g=0;d=["backcolor","forecolor"][g++];)b[d]=function(a){return function(c){var d=new b.ColorButton({className:"edui-for-"+a,color:"default",title:c.options.labelMap[a]||c.getLang("labelMap."+a)||"",editor:c,onpickcolor:function(b,d){c.execCommand(a,d)},onpicknocolor:function(){c.execCommand(a,"default"),this.setColor("transparent"),this.color="default"},onbuttonclick:function(){c.execCommand(a,this.color)}});return b.buttons[a]=d,c.addListener("selectionchange",function(){d.setDisabled(c.queryCommandState(a)==-1)}),d}}(d);var j={noOk:["searchreplace","help","spechars","webapp","preview"],ok:["attachment","anchor","link","insertimage","map","gmap","insertframe","wordimage","insertvideo","insertframe","edittip","edittable","edittd","scrawl","template","music","background","charts"]};for(var i in j)!function(c,d){for(var f,g=0;f=d[g++];)browser.opera&&"searchreplace"===f||!function(d){b[d]=function(f,g,h){g=g||(f.options.iframeUrlMap||{})[d]||e[d],h=f.options.labelMap[d]||f.getLang("labelMap."+d)||"";var i;g&&(i=new b.Dialog(a.extend({iframeUrl:f.ui.mapUrl(g),editor:f,className:"edui-for-"+d,title:h,holdScroll:"insertimage"===d,fullscreen:/charts|preview/.test(d),closeDialog:f.getLang("closeDialog")},"ok"==c?{buttons:[{className:"edui-okbutton",label:f.getLang("ok"),editor:f,onclick:function(){i.close(!0)}},{className:"edui-cancelbutton",label:f.getLang("cancel"),editor:f,onclick:function(){i.close(!1)}}]}:{})),f.ui._dialogs[d+"Dialog"]=i);var j=new b.Button({className:"edui-for-"+d,title:h,onclick:function(){if(i)switch(d){case"wordimage":var a=f.execCommand("wordimage");a&&a.length&&(i.render(),i.open());break;case"scrawl":f.queryCommandState("scrawl")!=-1&&(i.render(),i.open());break;default:i.render(),i.open()}},theme:f.options.theme,disabled:"scrawl"==d&&f.queryCommandState("scrawl")==-1||"charts"==d});return b.buttons[d]=j,f.addListener("selectionchange",function(){var a={edittable:1};if(!(d in a)){var b=f.queryCommandState(d);j.getDom()&&(j.setDisabled(b==-1),j.setChecked(b))}}),j}}(f.toLowerCase())}(i,j[i]);b.snapscreen=function(a,c,d){d=a.options.labelMap.snapscreen||a.getLang("labelMap.snapscreen")||"";var f=new b.Button({className:"edui-for-snapscreen",title:d,onclick:function(){a.execCommand("snapscreen")},theme:a.options.theme});if(b.buttons.snapscreen=f,c=c||(a.options.iframeUrlMap||{}).snapscreen||e.snapscreen){var g=new b.Dialog({iframeUrl:a.ui.mapUrl(c),editor:a,className:"edui-for-snapscreen",title:d,buttons:[{className:"edui-okbutton",label:a.getLang("ok"),editor:a,onclick:function(){g.close(!0)}},{className:"edui-cancelbutton",label:a.getLang("cancel"),editor:a,onclick:function(){g.close(!1)}}]});g.render(),a.ui._dialogs.snapscreenDialog=g}return a.addListener("selectionchange",function(){f.setDisabled(a.queryCommandState("snapscreen")==-1)}),f},b.insertcode=function(c,d,e){d=c.options.insertcode||[],e=c.options.labelMap.insertcode||c.getLang("labelMap.insertcode")||"";var f=[];a.each(d,function(a,b){f.push({label:a,value:b,theme:c.options.theme,renderLabelHtml:function(){return'<div class="edui-label %%-label" >'+(this.label||"")+"</div>"}})});var g=new b.Combox({editor:c,items:f,onselect:function(a,b){c.execCommand("insertcode",this.items[b].value)},onbuttonclick:function(){this.showPopup()},title:e,initValue:e,className:"edui-for-insertcode",indexByValue:function(a){if(a)for(var b,c=0;b=this.items[c];c++)if(b.value.indexOf(a)!=-1)return c;return-1}});return b.buttons.insertcode=g,c.addListener("selectionchange",function(a,b,d){if(!d){var f=c.queryCommandState("insertcode");if(f==-1)g.setDisabled(!0);else{g.setDisabled(!1);var h=c.queryCommandValue("insertcode");if(!h)return void g.setValue(e);h&&(h=h.replace(/['"]/g,"").split(",")[0]),g.setValue(h)}}}),g},b.fontfamily=function(c,d,e){if(d=c.options.fontfamily||[],e=c.options.labelMap.fontfamily||c.getLang("labelMap.fontfamily")||"",d.length){for(var f,g=0,h=[];f=d[g];g++){var i=c.getLang("fontfamily")[f.name]||"";!function(b,d){h.push({label:b,value:d,theme:c.options.theme,renderLabelHtml:function(){return'<div class="edui-label %%-label" style="font-family:'+a.unhtml(this.value)+'">'+(this.label||"")+"</div>"}})}(f.label||i,f.val)}var j=new b.Combox({editor:c,items:h,onselect:function(a,b){c.execCommand("FontFamily",this.items[b].value)},onbuttonclick:function(){this.showPopup()},title:e,initValue:e,className:"edui-for-fontfamily",indexByValue:function(a){if(a)for(var b,c=0;b=this.items[c];c++)if(b.value.indexOf(a)!=-1)return c;return-1}});return b.buttons.fontfamily=j,c.addListener("selectionchange",function(a,b,d){if(!d){var e=c.queryCommandState("FontFamily");if(e==-1)j.setDisabled(!0);else{j.setDisabled(!1);var f=c.queryCommandValue("FontFamily");f&&(f=f.replace(/['"]/g,"").split(",")[0]),j.setValue(f)}}}),j}},b.fontsize=function(a,c,d){if(d=a.options.labelMap.fontsize||a.getLang("labelMap.fontsize")||"",c=c||a.options.fontsize||[],c.length){for(var e=[],f=0;f<c.length;f++){var g=c[f]+"px";e.push({label:g,value:g,theme:a.options.theme,renderLabelHtml:function(){return'<div class="edui-label %%-label" style="line-height:1;font-size:'+this.value+'">'+(this.label||"")+"</div>"}})}var h=new b.Combox({editor:a,items:e,title:d,initValue:d,onselect:function(b,c){a.execCommand("FontSize",this.items[c].value)},onbuttonclick:function(){this.showPopup()},className:"edui-for-fontsize"});return b.buttons.fontsize=h,a.addListener("selectionchange",function(b,c,d){if(!d){var e=a.queryCommandState("FontSize");e==-1?h.setDisabled(!0):(h.setDisabled(!1),h.setValue(a.queryCommandValue("FontSize")))}}),h}},b.paragraph=function(c,d,e){if(e=c.options.labelMap.paragraph||c.getLang("labelMap.paragraph")||"",d=c.options.paragraph||[],!a.isEmptyObject(d)){var f=[];for(var g in d)f.push({value:g,label:d[g]||c.getLang("paragraph")[g],theme:c.options.theme,renderLabelHtml:function(){return'<div class="edui-label %%-label"><span class="edui-for-'+this.value+'">'+(this.label||"")+"</span></div>"}});var h=new b.Combox({editor:c,items:f,title:e,initValue:e,className:"edui-for-paragraph",onselect:function(a,b){c.execCommand("Paragraph",this.items[b].value)},onbuttonclick:function(){this.showPopup()}});return b.buttons.paragraph=h,c.addListener("selectionchange",function(a,b,d){if(!d){var e=c.queryCommandState("Paragraph");if(e==-1)h.setDisabled(!0);else{h.setDisabled(!1);var f=c.queryCommandValue("Paragraph"),g=h.indexByValue(f);g!=-1?h.setValue(f):h.setValue(h.initValue)}}}),h}},b.customstyle=function(a){var c=a.options.customstyle||[],d=a.options.labelMap.customstyle||a.getLang("labelMap.customstyle")||"";if(c.length){for(var e,f=a.getLang("customstyle"),g=0,h=[];e=c[g++];)!function(b){var c={};c.label=b.label?b.label:f[b.name],c.style=b.style,c.className=b.className,c.tag=b.tag,h.push({label:c.label,value:c,theme:a.options.theme,renderLabelHtml:function(){return'<div class="edui-label %%-label"><'+c.tag+" "+(c.className?' class="'+c.className+'"':"")+(c.style?' style="'+c.style+'"':"")+">"+c.label+"</"+c.tag+"></div>"}})}(e);var i=new b.Combox({editor:a,items:h,title:d,initValue:d,className:"edui-for-customstyle",onselect:function(b,c){a.execCommand("customstyle",this.items[c].value)},onbuttonclick:function(){this.showPopup()},indexByValue:function(a){for(var b,c=0;b=this.items[c++];)if(b.label==a)return c-1;return-1}});return b.buttons.customstyle=i,a.addListener("selectionchange",function(b,c,d){if(!d){var e=a.queryCommandState("customstyle");if(e==-1)i.setDisabled(!0);else{i.setDisabled(!1);var f=a.queryCommandValue("customstyle"),g=i.indexByValue(f);g!=-1?i.setValue(f):i.setValue(i.initValue)}}}),i}},b.inserttable=function(a,c,d){d=a.options.labelMap.inserttable||a.getLang("labelMap.inserttable")||"";var e=new b.TableButton({editor:a,title:d,className:"edui-for-inserttable",onpicktable:function(b,c,d){a.execCommand("InsertTable",{numRows:d,numCols:c,border:1})},onbuttonclick:function(){this.showPopup()}});return b.buttons.inserttable=e,a.addListener("selectionchange",function(){e.setDisabled(a.queryCommandState("inserttable")==-1)}),e},b.lineheight=function(a){var c=a.options.lineheight||[];if(c.length){for(var d,e=0,f=[];d=c[e++];)f.push({label:d,value:d,theme:a.options.theme,onclick:function(){a.execCommand("lineheight",this.value)}});var g=new b.MenuButton({editor:a,className:"edui-for-lineheight",title:a.options.labelMap.lineheight||a.getLang("labelMap.lineheight")||"",items:f,onbuttonclick:function(){var b=a.queryCommandValue("LineHeight")||this.value;a.execCommand("LineHeight",b)}});return b.buttons.lineheight=g,a.addListener("selectionchange",function(){var b=a.queryCommandState("LineHeight");if(b==-1)g.setDisabled(!0);else{g.setDisabled(!1);var c=a.queryCommandValue("LineHeight");c&&g.setValue((c+"").replace(/cm/,"")),g.setChecked(b)}}),g}};for(var k,l=["top","bottom"],m=0;k=l[m++];)!function(a){b["rowspacing"+a]=function(c){var d=c.options["rowspacing"+a]||[];if(!d.length)return null;for(var e,f=0,g=[];e=d[f++];)g.push({label:e,value:e,theme:c.options.theme,onclick:function(){c.execCommand("rowspacing",this.value,a)}});var h=new b.MenuButton({editor:c,className:"edui-for-rowspacing"+a,title:c.options.labelMap["rowspacing"+a]||c.getLang("labelMap.rowspacing"+a)||"",items:g,onbuttonclick:function(){var b=c.queryCommandValue("rowspacing",a)||this.value;c.execCommand("rowspacing",b,a)}});return b.buttons[a]=h,c.addListener("selectionchange",function(){var b=c.queryCommandState("rowspacing",a);if(b==-1)h.setDisabled(!0);else{h.setDisabled(!1);var d=c.queryCommandValue("rowspacing",a);d&&h.setValue((d+"").replace(/%/,"")),h.setChecked(b)}}),h}}(k);for(var n,o=["insertorderedlist","insertunorderedlist"],p=0;n=o[p++];)!function(a){b[a]=function(c){var d=c.options[a],e=function(){c.execCommand(a,this.value)},f=[];for(var g in d)f.push({label:d[g]||c.getLang()[a][g]||"",value:g,theme:c.options.theme,onclick:e});var h=new b.MenuButton({editor:c,className:"edui-for-"+a,title:c.getLang("labelMap."+a)||"",items:f,onbuttonclick:function(){var b=c.queryCommandValue(a)||this.value;c.execCommand(a,b)}});return b.buttons[a]=h,c.addListener("selectionchange",function(){var b=c.queryCommandState(a);if(b==-1)h.setDisabled(!0);else{h.setDisabled(!1);var d=c.queryCommandValue(a);h.setValue(d),h.setChecked(b)}}),h}}(n);b.fullscreen=function(a,c){c=a.options.labelMap.fullscreen||a.getLang("labelMap.fullscreen")||"";var d=new b.Button({className:"edui-for-fullscreen",title:c,theme:a.options.theme,onclick:function(){a.ui&&a.ui.setFullScreen(!a.ui.isFullScreen()),this.setChecked(a.ui.isFullScreen())}});return b.buttons.fullscreen=d,a.addListener("selectionchange",function(){var b=a.queryCommandState("fullscreen");d.setDisabled(b==-1),d.setChecked(a.ui.isFullScreen())}),d},b.emotion=function(a,c){var d="emotion",f=new b.MultiMenuPop({title:a.options.labelMap[d]||a.getLang("labelMap."+d)||"",editor:a,className:"edui-for-"+d,iframeUrl:a.ui.mapUrl(c||(a.options.iframeUrlMap||{})[d]||e[d])});return b.buttons[d]=f,a.addListener("selectionchange",function(){f.setDisabled(a.queryCommandState(d)==-1)}),f},b.autotypeset=function(a){var c=new b.AutoTypeSetButton({editor:a,title:a.options.labelMap.autotypeset||a.getLang("labelMap.autotypeset")||"",className:"edui-for-autotypeset",onbuttonclick:function(){a.execCommand("autotypeset")}});return b.buttons.autotypeset=c,a.addListener("selectionchange",function(){c.setDisabled(a.queryCommandState("autotypeset")==-1)}),c},b.simpleupload=function(a){var c="simpleupload",d=new b.Button({className:"edui-for-"+c,title:a.options.labelMap[c]||a.getLang("labelMap."+c)||"",onclick:function(){},theme:a.options.theme,showText:!1});return b.buttons[c]=d,a.addListener("ready",function(){var b=d.getDom("body"),c=b.children[0];a.fireEvent("simpleuploadbtnready",c)}),a.addListener("selectionchange",function(b,e,f){var g=a.queryCommandState(c);g==-1?(d.setDisabled(!0),d.setChecked(!1)):f||(d.setDisabled(!1),d.setChecked(g))}),d}}(),function(){function a(a){this.initOptions(a),this.initEditorUI()}var b=baidu.editor.utils,c=baidu.editor.ui.uiUtils,d=baidu.editor.ui.UIBase,e=baidu.editor.dom.domUtils,f=[];a.prototype={uiName:"editor",initEditorUI:function(){function a(a,b){a.setOpt({wordCount:!0,maximumWords:1e4,wordCountMsg:a.options.wordCountMsg||a.getLang("wordCountMsg"),wordOverFlowMsg:a.options.wordOverFlowMsg||a.getLang("wordOverFlowMsg")});var c=a.options,d=c.maximumWords,e=c.wordCountMsg,f=c.wordOverFlowMsg,g=b.getDom("wordcount");if(c.wordCount){var h=a.getContentLength(!0);h>d?(g.innerHTML=f,a.fireEvent("wordcountoverflow")):g.innerHTML=e.replace("{#leave}",d-h).replace("{#count}",h)}}this.editor.ui=this,this._dialogs={},this.initUIBase(),this._initToolbars();var b=this.editor,c=this;b.addListener("ready",function(){function d(){a(b,c),e.un(b.document,"click",arguments.callee)}b.getDialog=function(a){return b.ui._dialogs[a+"Dialog"]},e.on(b.window,"scroll",function(a){baidu.editor.ui.Popup.postHide(a)}),b.ui._actualFrameWidth=b.options.initialFrameWidth,UE.browser.ie&&6===UE.browser.version&&b.container.ownerDocument.execCommand("BackgroundImageCache",!1,!0),b.options.elementPathEnabled&&(b.ui.getDom("elementpath").innerHTML='<div class="edui-editor-breadcrumb">'+b.getLang("elementPathTip")+":</div>"),b.options.wordCount&&(e.on(b.document,"click",d),b.ui.getDom("wordcount").innerHTML=b.getLang("wordCountTip")),b.ui._scale(),b.options.scaleEnabled?(b.autoHeightEnabled&&b.disableAutoHeight(),c.enableScale()):c.disableScale(),b.options.elementPathEnabled||b.options.wordCount||b.options.scaleEnabled||(b.ui.getDom("elementpath").style.display="none",b.ui.getDom("wordcount").style.display="none",b.ui.getDom("scale").style.display="none"),b.selection.isFocus()&&b.fireEvent("selectionchange",!1,!0)}),b.addListener("mousedown",function(a,b){var c=b.target||b.srcElement;baidu.editor.ui.Popup.postHide(b,c),baidu.editor.ui.ShortCutMenu.postHide(b)}),b.addListener("delcells",function(){UE.ui.edittip&&new UE.ui.edittip(b),b.getDialog("edittip").open()});var d,f,g=!1;b.addListener("afterpaste",function(){b.queryCommandState("pasteplain")||(baidu.editor.ui.PastePicker&&(d=new baidu.editor.ui.Popup({content:new baidu.editor.ui.PastePicker({editor:b}),editor:b,className:"edui-wordpastepop"}),d.render()),g=!0)}),b.addListener("afterinserthtml",function(){clearTimeout(f),f=setTimeout(function(){if(d&&(g||b.ui._isTransfer)){if(d.isHidden()){var a=e.createElement(b.document,"span",{style:"line-height:0px;",innerHTML:"\ufeff"}),c=b.selection.getRange();c.insertNode(a);var f=getDomNode(a,"firstChild","previousSibling");f&&d.showAnchor(3==f.nodeType?f.parentNode:f),e.remove(a)}else d.show();delete b.ui._isTransfer,g=!1}},200)}),b.addListener("contextmenu",function(a,b){baidu.editor.ui.Popup.postHide(b)}),b.addListener("keydown",function(a,b){d&&d.dispose(b);var c=b.keyCode||b.which;b.altKey&&90==c&&UE.ui.buttons.fullscreen.onclick()}),b.addListener("wordcount",function(b){a(this,c)}),b.addListener("selectionchange",function(){b.options.elementPathEnabled&&c[(b.queryCommandState("elementpath")==-1?"dis":"en")+"ableElementPath"](),b.options.scaleEnabled&&c[(b.queryCommandState("scale")==-1?"dis":"en")+"ableScale"]()});var h=new baidu.editor.ui.Popup({editor:b,content:"",className:"edui-bubble",_onEditButtonClick:function(){this.hide(),b.ui._dialogs.linkDialog.open()},_onImgEditButtonClick:function(a){this.hide(),b.ui._dialogs[a]&&b.ui._dialogs[a].open()},_onImgSetFloat:function(a){this.hide(),b.execCommand("imagefloat",a)},_setIframeAlign:function(a){var b=h.anchorEl,c=b.cloneNode(!0);switch(a){case-2:c.setAttribute("align","");break;case-1:c.setAttribute("align","left");break;case 1:c.setAttribute("align","right")}b.parentNode.insertBefore(c,b),e.remove(b),h.anchorEl=c,h.showAnchor(h.anchorEl)},_updateIframe:function(){var a=b._iframe=h.anchorEl;e.hasClass(a,"ueditor_baidumap")?(b.selection.getRange().selectNode(a).select(),b.ui._dialogs.mapDialog.open(),h.hide()):(b.ui._dialogs.insertframeDialog.open(),h.hide())},_onRemoveButtonClick:function(a){b.execCommand(a),this.hide()},queryAutoHide:function(a){return a&&a.ownerDocument==b.document&&("img"==a.tagName.toLowerCase()||e.findParentByTagName(a,"a",!0))?a!==h.anchorEl:baidu.editor.ui.Popup.prototype.queryAutoHide.call(this,a)}});h.render(),b.options.imagePopup&&(b.addListener("mouseover",function(a,c){c=c||window.event;var d=c.target||c.srcElement;if(b.ui._dialogs.insertframeDialog&&/iframe/gi.test(d.tagName)){var e=h.formatHtml("<nobr>"+b.getLang("property")+': <span onclick=$$._setIframeAlign(-2) class="edui-clickable">'+b.getLang("default")+'</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(-1) class="edui-clickable">'+b.getLang("justifyleft")+'</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(1) class="edui-clickable">'+b.getLang("justifyright")+'</span>&nbsp;&nbsp; <span onclick="$$._updateIframe( this);" class="edui-clickable">'+b.getLang("modify")+"</span></nobr>");e?(h.getDom("content").innerHTML=e,h.anchorEl=d,h.showAnchor(h.anchorEl)):h.hide()}}),b.addListener("selectionchange",function(a,c){if(c){var d="",f="",g=b.selection.getRange().getClosedNode(),i=b.ui._dialogs;if(g&&"IMG"==g.tagName){var j="insertimageDialog";if(g.className.indexOf("edui-faked-video")==-1&&g.className.indexOf("edui-upload-video")==-1||(j="insertvideoDialog"),g.className.indexOf("edui-faked-webapp")!=-1&&(j="webappDialog"),g.src.indexOf("http://api.map.baidu.com")!=-1&&(j="mapDialog"),g.className.indexOf("edui-faked-music")!=-1&&(j="musicDialog"),g.src.indexOf("http://maps.google.com/maps/api/staticmap")!=-1&&(j="gmapDialog"),g.getAttribute("anchorname")&&(j="anchorDialog",d=h.formatHtml("<nobr>"+b.getLang("property")+': <span onclick=$$._onImgEditButtonClick("anchorDialog") class="edui-clickable">'+b.getLang("modify")+"</span>&nbsp;&nbsp;<span onclick=$$._onRemoveButtonClick('anchor') class=\"edui-clickable\">"+b.getLang("delete")+"</span></nobr>")),g.getAttribute("word_img")&&(b.word_img=[g.getAttribute("word_img")],j="wordimageDialog"),(e.hasClass(g,"loadingclass")||e.hasClass(g,"loaderrorclass"))&&(j=""),!i[j])return;f="<nobr>"+b.getLang("property")+': <span onclick=$$._onImgSetFloat("none") class="edui-clickable">'+b.getLang("default")+'</span>&nbsp;&nbsp;<span onclick=$$._onImgSetFloat("left") class="edui-clickable">'+b.getLang("justifyleft")+'</span>&nbsp;&nbsp;<span onclick=$$._onImgSetFloat("right") class="edui-clickable">'+b.getLang("justifyright")+'</span>&nbsp;&nbsp;<span onclick=$$._onImgSetFloat("center") class="edui-clickable">'+b.getLang("justifycenter")+"</span>&nbsp;&nbsp;<span onclick=\"$$._onImgEditButtonClick('"+j+'\');" class="edui-clickable">'+b.getLang("modify")+"</span></nobr>",!d&&(d=h.formatHtml(f))}if(b.ui._dialogs.linkDialog){var k,l=b.queryCommandValue("link");if(l&&(k=l.getAttribute("_href")||l.getAttribute("href",2))){var m=k;k.length>30&&(m=k.substring(0,20)+"..."),d&&(d+='<div style="height:5px;"></div>'),d+=h.formatHtml("<nobr>"+b.getLang("anthorMsg")+': <a target="_blank" href="'+k+'" title="'+k+'" >'+m+'</a> <span class="edui-clickable" onclick="$$._onEditButtonClick();">'+b.getLang("modify")+'</span> <span class="edui-clickable" onclick="$$._onRemoveButtonClick(\'unlink\');"> '+b.getLang("clear")+"</span></nobr>"),h.showAnchor(l)}}d?(h.getDom("content").innerHTML=d,h.anchorEl=g||l,h.showAnchor(h.anchorEl)):h.hide()}}))},_initToolbars:function(){for(var a=this.editor,c=this.toolbars||[],d=[],e=0;e<c.length;e++){for(var f=c[e],g=new baidu.editor.ui.Toolbar({theme:a.options.theme}),h=0;h<f.length;h++){var i=f[h],j=null;if("string"==typeof i){if(i=i.toLowerCase(),"|"==i&&(i="Separator"),"||"==i&&(i="Breakline"),baidu.editor.ui[i]&&(j=new baidu.editor.ui[i](a)),"fullscreen"==i){d&&d[0]?d[0].items.splice(0,0,j):j&&g.items.splice(0,0,j);continue}}else j=i;j&&j.id&&g.add(j)}d[e]=g}b.each(UE._customizeUI,function(b,c){var d,e;return(!b.id||b.id==a.key)&&(d=b.execFn.call(a,a,c),void(d&&(e=b.index,void 0===e&&(e=g.items.length),g.add(d,e))))}),this.toolbars=d},getHtmlTpl:function(){return'<div id="##" class="%%"><div id="##_toolbarbox" class="%%-toolbarbox">'+(this.toolbars.length?'<div id="##_toolbarboxouter" class="%%-toolbarboxouter"><div class="%%-toolbarboxinner">'+this.renderToolbarBoxHtml()+"</div></div>":"")+'<div id="##_toolbarmsg" class="%%-toolbarmsg" style="display:none;"><div id = "##_upload_dialog" class="%%-toolbarmsg-upload" onclick="$$.showWordImageDialog();">'+this.editor.getLang("clickToUpload")+'</div><div class="%%-toolbarmsg-close" onclick="$$.hideToolbarMsg();">x</div><div id="##_toolbarmsg_label" class="%%-toolbarmsg-label"></div><div style="height:0;overflow:hidden;clear:both;"></div></div><div id="##_message_holder" class="%%-messageholder"></div></div><div id="##_iframeholder" class="%%-iframeholder"></div><div id="##_bottombar" class="%%-bottomContainer"><table><tr><td id="##_elementpath" class="%%-bottombar"></td><td id="##_wordcount" class="%%-wordcount"></td><td id="##_scale" class="%%-scale"><div class="%%-icon"></div></td></tr></table></div><div id="##_scalelayer"></div></div>'},showWordImageDialog:function(){this._dialogs.wordimageDialog.open()},renderToolbarBoxHtml:function(){for(var a=[],b=0;b<this.toolbars.length;b++)a.push(this.toolbars[b].renderHtml());return a.join("")},setFullScreen:function(a){var b=this.editor,c=b.container.parentNode.parentNode;if(this._fullscreen!=a){if(this._fullscreen=a,this.editor.fireEvent("beforefullscreenchange",a),baidu.editor.browser.gecko)var d=b.selection.getRange().createBookmark();if(a){for(;"BODY"!=c.tagName;){var e=baidu.editor.dom.domUtils.getComputedStyle(c,"position");f.push(e),c.style.position="static",c=c.parentNode}this._bakHtmlOverflow=document.documentElement.style.overflow,this._bakBodyOverflow=document.body.style.overflow,this._bakAutoHeight=this.editor.autoHeightEnabled,this._bakScrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop),this._bakEditorContaninerWidth=b.iframe.parentNode.offsetWidth,this._bakAutoHeight&&(b.autoHeightEnabled=!1,this.editor.disableAutoHeight()),document.documentElement.style.overflow="hidden",window.scrollTo(0,window.scrollY),this._bakCssText=this.getDom().style.cssText,this._bakCssText1=this.getDom("iframeholder").style.cssText,b.iframe.parentNode.style.width="",this._updateFullScreen()}else{for(;"BODY"!=c.tagName;)c.style.position=f.shift(),c=c.parentNode;this.getDom().style.cssText=this._bakCssText,this.getDom("iframeholder").style.cssText=this._bakCssText1,this._bakAutoHeight&&(b.autoHeightEnabled=!0,this.editor.enableAutoHeight()),document.documentElement.style.overflow=this._bakHtmlOverflow,document.body.style.overflow=this._bakBodyOverflow,b.iframe.parentNode.style.width=this._bakEditorContaninerWidth+"px",window.scrollTo(0,this._bakScrollTop)}if(browser.gecko&&"true"===b.body.contentEditable){var g=document.createElement("input");document.body.appendChild(g),b.body.contentEditable=!1,setTimeout(function(){g.focus(),setTimeout(function(){b.body.contentEditable=!0,b.fireEvent("fullscreenchanged",a),b.selection.getRange().moveToBookmark(d).select(!0),baidu.editor.dom.domUtils.remove(g),a&&window.scroll(0,0)},0)},0)}"true"===b.body.contentEditable&&(this.editor.fireEvent("fullscreenchanged",a),this.triggerLayout())}},_updateFullScreen:function(){if(this._fullscreen){var a=c.getViewportRect();if(this.getDom().style.cssText="border:0;position:absolute;left:0;top:"+(this.editor.options.topOffset||0)+"px;width:"+a.width+"px;height:"+a.height+"px;z-index:"+(1*this.getDom().style.zIndex+100),c.setViewportOffset(this.getDom(),{left:0,top:this.editor.options.topOffset||0}),this.editor.setHeight(a.height-this.getDom("toolbarbox").offsetHeight-this.getDom("bottombar").offsetHeight-(this.editor.options.topOffset||0),!0),browser.gecko)try{window.onresize()}catch(b){}}},_updateElementPath:function(){var a,b=this.getDom("elementpath");if(this.elementPathEnabled&&(a=this.editor.queryCommandValue("elementpath"))){for(var c,d=[],e=0;c=a[e];e++)d[e]=this.formatHtml('<span unselectable="on" onclick="$$.editor.execCommand(&quot;elementpath&quot;, &quot;'+e+'&quot;);">'+c+"</span>");b.innerHTML='<div class="edui-editor-breadcrumb" onmousedown="return false;">'+this.editor.getLang("elementPathTip")+": "+d.join(" &gt; ")+"</div>"}else b.style.display="none"},disableElementPath:function(){var a=this.getDom("elementpath");a.innerHTML="",a.style.display="none",this.elementPathEnabled=!1},enableElementPath:function(){var a=this.getDom("elementpath");a.style.display="",this.elementPathEnabled=!0,this._updateElementPath()},_scale:function(){function a(){o=e.getXY(h),p||(p=g.options.minFrameHeight+j.offsetHeight+k.offsetHeight),m.style.cssText="position:absolute;left:0;display:;top:0;background-color:#41ABFF;opacity:0.4;filter: Alpha(opacity=40);width:"+h.offsetWidth+"px;height:"+h.offsetHeight+"px;z-index:"+(g.options.zIndex+1),e.on(f,"mousemove",b),e.on(i,"mouseup",c),e.on(f,"mouseup",c)}function b(a){d();var b=a||window.event;r=b.pageX||f.documentElement.scrollLeft+b.clientX,s=b.pageY||f.documentElement.scrollTop+b.clientY,t=r-o.x,u=s-o.y,t>=q&&(n=!0,m.style.width=t+"px"),u>=p&&(n=!0,m.style.height=u+"px")}function c(){n&&(n=!1,g.ui._actualFrameWidth=m.offsetWidth-2,h.style.width=g.ui._actualFrameWidth+"px",g.setHeight(m.offsetHeight-k.offsetHeight-j.offsetHeight-2,!0)),m&&(m.style.display="none"),d(),e.un(f,"mousemove",b),e.un(i,"mouseup",c),e.un(f,"mouseup",c)}function d(){browser.ie?f.selection.clear():window.getSelection().removeAllRanges()}var f=document,g=this.editor,h=g.container,i=g.document,j=this.getDom("toolbarbox"),k=this.getDom("bottombar"),l=this.getDom("scale"),m=this.getDom("scalelayer"),n=!1,o=null,p=0,q=g.options.minFrameWidth,r=0,s=0,t=0,u=0,v=this;this.editor.addListener("fullscreenchanged",function(a,b){if(b)v.disableScale();else if(v.editor.options.scaleEnabled){v.enableScale();var c=v.editor.document.createElement("span");v.editor.body.appendChild(c),v.editor.body.style.height=Math.max(e.getXY(c).y,v.editor.iframe.offsetHeight-20)+"px",e.remove(c)}}),this.enableScale=function(){1!=g.queryCommandState("source")&&(l.style.display="",this.scaleEnabled=!0,e.on(l,"mousedown",a))},this.disableScale=function(){l.style.display="none",this.scaleEnabled=!1,e.un(l,"mousedown",a)}},isFullScreen:function(){return this._fullscreen},postRender:function(){d.prototype.postRender.call(this);for(var a=0;a<this.toolbars.length;a++)this.toolbars[a].postRender();var b,c=this,e=baidu.editor.dom.domUtils,f=function(){clearTimeout(b),b=setTimeout(function(){c._updateFullScreen()})};e.on(window,"resize",f),c.addListener("destroy",function(){e.un(window,"resize",f),clearTimeout(b)})},showToolbarMsg:function(a,b){if(this.getDom("toolbarmsg_label").innerHTML=a,this.getDom("toolbarmsg").style.display="",!b){var c=this.getDom("upload_dialog");c.style.display="none"}},hideToolbarMsg:function(){this.getDom("toolbarmsg").style.display="none"},mapUrl:function(a){return a?a.replace("~/",this.editor.options.UEDITOR_HOME_URL||""):""},triggerLayout:function(){var a=this.getDom();"1"==a.style.zoom?a.style.zoom="100%":a.style.zoom="1"}},b.inherits(a,baidu.editor.ui.UIBase);var g={};UE.ui.Editor=function(c){var d=new UE.Editor(c);d.options.editor=d,b.loadFile(document,{href:d.options.themePath+d.options.theme+"/css/ueditor.css",tag:"link",type:"text/css",rel:"stylesheet"});var f=d.render;return d.render=function(c){c.constructor===String&&(d.key=c,g[c]=d),b.domReady(function(){function b(){if(d.setOpt({labelMap:d.options.labelMap||d.getLang("labelMap")}),new a(d.options),c&&(c.constructor===String&&(c=document.getElementById(c)),c&&c.getAttribute("name")&&(d.options.textarea=c.getAttribute("name")),c&&/script|textarea/gi.test(c.tagName))){var b=document.createElement("div");c.parentNode.insertBefore(b,c);var g=c.value||c.innerHTML;d.options.initialContent=/^[\t\r\n ]*$/.test(g)?d.options.initialContent:g.replace(/>[\n\r\t]+([ ]{4})+/g,">").replace(/[\n\r\t]+([ ]{4})+</g,"<").replace(/>[\n\r\t]+</g,"><"),c.className&&(b.className=c.className),c.style.cssText&&(b.style.cssText=c.style.cssText),/textarea/i.test(c.tagName)?(d.textarea=c,d.textarea.style.display="none"):c.parentNode.removeChild(c),c.id&&(b.id=c.id,e.removeAttributes(c,"id")),c=b,c.innerHTML=""}e.addClass(c,"edui-"+d.options.theme),d.ui.render(c);var h=d.options;d.container=d.ui.getDom();for(var i,j=e.findParents(c,!0),k=[],l=0;i=j[l];l++)k[l]=i.style.display,i.style.display="block";if(h.initialFrameWidth)h.minFrameWidth=h.initialFrameWidth;else{h.minFrameWidth=h.initialFrameWidth=c.offsetWidth;var m=c.style.width;/%$/.test(m)&&(h.initialFrameWidth=m)}h.initialFrameHeight?h.minFrameHeight=h.initialFrameHeight:h.initialFrameHeight=h.minFrameHeight=c.offsetHeight;for(var i,l=0;i=j[l];l++)i.style.display=k[l];c.style.height&&(c.style.height=""),d.container.style.width=h.initialFrameWidth+(/%$/.test(h.initialFrameWidth)?"":"px"),d.container.style.zIndex=h.zIndex,f.call(d,d.ui.getDom("iframeholder")),d.fireEvent("afteruiready")}d.langIsReady?b():d.addListener("langReady",b)})},d},UE.getEditor=function(a,b){var c=g[a];return c||(c=g[a]=new UE.ui.Editor(b),c.render(a)),c},UE.delEditor=function(a){var b;(b=g[a])&&(b.key&&b.destroy(),delete g[a])},UE.registerUI=function(a,c,d,e){b.each(a.split(/\s+/),function(a){UE._customizeUI[a]={id:e,execFn:c,index:d}})}}(),UE.registerUI("message",function(a){function b(){var a=g.ui.getDom("toolbarbox");a&&(c.style.top=a.offsetHeight+3+"px"),c.style.zIndex=Math.max(g.options.zIndex,g.iframe.style.zIndex)+1}var c,d=baidu.editor.ui,e=d.Message,f=[],g=a;g.addListener("ready",function(){c=document.getElementById(g.ui.id+"_message_holder"),b(),setTimeout(function(){b()},500)}),g.addListener("showmessage",function(a,d){d=utils.isString(d)?{content:d}:d;var h=new e({timeout:d.timeout,type:d.type,content:d.content,keepshow:d.keepshow,editor:g}),i=d.id||"msg_"+(+new Date).toString(36);return h.render(c),f[i]=h,h.reset(d),b(),i}),g.addListener("updatemessage",function(a,b,d){d=utils.isString(d)?{content:d}:d;var e=f[b];e.render(c),e&&e.reset(d)}),g.addListener("hidemessage",function(a,b){var c=f[b];c&&c.hide()})}),UE.registerUI("autosave",function(a){var b=null,c=null;a.on("afterautosave",function(){clearTimeout(b),b=setTimeout(function(){c&&a.trigger("hidemessage",c),c=a.trigger("showmessage",{content:a.getLang("autosave.success"),timeout:2e3})},2e3)})})}();

/***/ }),
/* 87 */
/***/ (function(module, exports) {

/**
 * ueditor完整配置项
 * 可以在这里配置整个编辑器的特性
 */
/**************************提示********************************
 * 所有被注释的配置项均为UEditor默认值。
 * 修改默认配置请首先确保已经完全明确该参数的真实用途。
 * 主要有两种修改方案，一种是取消此处注释，然后修改成对应参数；另一种是在实例化编辑器时传入对应参数。
 * 当升级编辑器时，可直接使用旧版配置文件替换新版配置文件,不用担心旧版配置文件中因缺少新功能所需的参数而导致脚本报错。
 **************************提示********************************/

(function () {

    /**
     * 编辑器资源文件根路径。它所表示的含义是：以编辑器实例化页面为当前路径，指向编辑器资源文件（即dialog等文件夹）的路径。
     * 鉴于很多同学在使用编辑器的时候出现的种种路径问题，此处强烈建议大家使用"相对于网站根目录的相对路径"进行配置。
     * "相对于网站根目录的相对路径"也就是以斜杠开头的形如"/myProject/ueditor/"这样的路径。
     * 如果站点中有多个不在同一层级的页面需要实例化编辑器，且引用了同一UEditor的时候，此处的URL可能不适用于每个页面的编辑器。
     * 因此，UEditor提供了针对不同页面的编辑器可单独配置的根路径，具体来说，在需要实例化编辑器的页面最顶部写上如下代码即可。当然，需要令此处的URL等于对应的配置。
     * window.UEDITOR_HOME_URL = "/xxxx/xxxx/";
     */
    var URL = window.UEDITOR_HOME_URL || getUEBasePath();

    /**
     * 配置项主体。注意，此处所有涉及到路径的配置别遗漏URL变量。
     */
    window.UEDITOR_CONFIG = {

        //为编辑器实例添加一个路径，这个不能被注释
        UEDITOR_HOME_URL: URL

        // 服务器统一请求接口路径
        , serverUrl: URL + "php/controller.php"

        //工具栏上的所有的功能按钮和下拉框，可以在new编辑器的实例时选择自己需要的重新定义
        , toolbars: [[
            'fullscreen', 'source', '|', 'undo', 'redo', '|',
            'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
            'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
            'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
            'directionalityltr', 'directionalityrtl', 'indent', '|',
            'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
            'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
            'simpleupload', 'insertimage', 'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'map', 'gmap', 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template', 'background', '|',
            'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
            'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
            'print', 'preview', 'searchreplace', 'drafts', 'help'
        ]]
        //当鼠标放在工具栏上时显示的tooltip提示,留空支持自动多语言配置，否则以配置值为准
        //,labelMap:{
        //    'anchor':'', 'undo':''
        //}

        //语言配置项,默认是zh-cn。有需要的话也可以使用如下这样的方式来自动多语言切换，当然，前提条件是lang文件夹下存在对应的语言文件：
        //lang值也可以通过自动获取 (navigator.language||navigator.browserLanguage ||navigator.userLanguage).toLowerCase()
        //,lang:"zh-cn"
        //,langPath:URL +"lang/"

        //主题配置项,默认是default。有需要的话也可以使用如下这样的方式来自动多主题切换，当然，前提条件是themes文件夹下存在对应的主题文件：
        //现有如下皮肤:default
        //,theme:'default'
        //,themePath:URL +"themes/"

        //,zIndex : 900     //编辑器层级的基数,默认是900

        //针对getAllHtml方法，会在对应的head标签中增加该编码设置。
        //,charset:"utf-8"

        //若实例化编辑器的页面手动修改的domain，此处需要设置为true
        //,customDomain:false

        //常用配置项目
        //,isShow : true    //默认显示编辑器

        //,textarea:'editorValue' // 提交表单时，服务器获取编辑器提交内容的所用的参数，多实例时可以给容器name属性，会将name给定的值最为每个实例的键值，不用每次实例化的时候都设置这个值

        //,initialContent:'欢迎使用ueditor!'    //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子

        //,autoClearinitialContent:true //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了

        //,focus:false //初始化时，是否让编辑器获得焦点true或false

        //如果自定义，最好给p标签如下的行高，要不输入中文时，会有跳动感
        //,initialStyle:'p{line-height:1em}'//编辑器层级的基数,可以用来改变字体等

        //,iframeCssUrl: URL + '/themes/iframe.css' //给编辑区域的iframe引入一个css文件

        //indentValue
        //首行缩进距离,默认是2em
        //,indentValue:'2em'

        //,initialFrameWidth:1000  //初始化编辑器宽度,默认1000
        //,initialFrameHeight:320  //初始化编辑器高度,默认320

        //,readonly : false //编辑器初始化结束后,编辑区域是否是只读的，默认是false

        //,autoClearEmptyNode : true //getContent时，是否删除空的inlineElement节点（包括嵌套的情况）

        //启用自动保存
        //,enableAutoSave: true
        //自动保存间隔时间， 单位ms
        //,saveInterval: 500

        //,fullscreen : false //是否开启初始化时即全屏，默认关闭

        //,imagePopup:true      //图片操作的浮层开关，默认打开

        //,autoSyncData:true //自动同步编辑器要提交的数据
        //,emotionLocalization:false //是否开启表情本地化，默认关闭。若要开启请确保emotion文件夹下包含官网提供的images表情文件夹

        //粘贴只保留标签，去除标签所有属性
        //,retainOnlyLabelPasted: false

        //,pasteplain:false  //是否默认为纯文本粘贴。false为不使用纯文本粘贴，true为使用纯文本粘贴
        //纯文本粘贴模式下的过滤规则
        //'filterTxtRules' : function(){
        //    function transP(node){
        //        node.tagName = 'p';
        //        node.setStyle();
        //    }
        //    return {
        //        //直接删除及其字节点内容
        //        '-' : 'script style object iframe embed input select',
        //        'p': {$:{}},
        //        'br':{$:{}},
        //        'div':{'$':{}},
        //        'li':{'$':{}},
        //        'caption':transP,
        //        'th':transP,
        //        'tr':transP,
        //        'h1':transP,'h2':transP,'h3':transP,'h4':transP,'h5':transP,'h6':transP,
        //        'td':function(node){
        //            //没有内容的td直接删掉
        //            var txt = !!node.innerText();
        //            if(txt){
        //                node.parentNode.insertAfter(UE.uNode.createText(' &nbsp; &nbsp;'),node);
        //            }
        //            node.parentNode.removeChild(node,node.innerText())
        //        }
        //    }
        //}()

        //,allHtmlEnabled:false //提交到后台的数据是否包含整个html字符串

        //insertorderedlist
        //有序列表的下拉配置,值留空时支持多语言自动识别，若配置值，则以此值为准
        //,'insertorderedlist':{
        //      //自定的样式
        //        'num':'1,2,3...',
        //        'num1':'1),2),3)...',
        //        'num2':'(1),(2),(3)...',
        //        'cn':'一,二,三....',
        //        'cn1':'一),二),三)....',
        //        'cn2':'(一),(二),(三)....',
        //     //系统自带
        //     'decimal' : '' ,         //'1,2,3...'
        //     'lower-alpha' : '' ,    // 'a,b,c...'
        //     'lower-roman' : '' ,    //'i,ii,iii...'
        //     'upper-alpha' : '' , lang   //'A,B,C'
        //     'upper-roman' : ''      //'I,II,III...'
        //}

        //insertunorderedlist
        //无序列表的下拉配置，值留空时支持多语言自动识别，若配置值，则以此值为准
        //,insertunorderedlist : { //自定的样式
        //    'dash' :'— 破折号', //-破折号
        //    'dot':' 。 小圆圈', //系统自带
        //    'circle' : '',  // '○ 小圆圈'
        //    'disc' : '',    // '● 小圆点'
        //    'square' : ''   //'■ 小方块'
        //}
        //,listDefaultPaddingLeft : '30'//默认的左边缩进的基数倍
        //,listiconpath : 'http://bs.baidu.com/listicon/'//自定义标号的路径
        //,maxListLevel : 3 //限制可以tab的级数, 设置-1为不限制

        //,autoTransWordToList:false  //禁止word中粘贴进来的列表自动变成列表标签

        //fontfamily
        //字体设置 label留空支持多语言自动切换，若配置，则以配置值为准
        //,'fontfamily':[
        //    { label:'',name:'songti',val:'宋体,SimSun'},
        //    { label:'',name:'kaiti',val:'楷体,楷体_GB2312, SimKai'},
        //    { label:'',name:'yahei',val:'微软雅黑,Microsoft YaHei'},
        //    { label:'',name:'heiti',val:'黑体, SimHei'},
        //    { label:'',name:'lishu',val:'隶书, SimLi'},
        //    { label:'',name:'andaleMono',val:'andale mono'},
        //    { label:'',name:'arial',val:'arial, helvetica,sans-serif'},
        //    { label:'',name:'arialBlack',val:'arial black,avant garde'},
        //    { label:'',name:'comicSansMs',val:'comic sans ms'},
        //    { label:'',name:'impact',val:'impact,chicago'},
        //    { label:'',name:'timesNewRoman',val:'times new roman'}
        //]

        //fontsize
        //字号
        //,'fontsize':[10, 11, 12, 14, 16, 18, 20, 24, 36]

        //paragraph
        //段落格式 值留空时支持多语言自动识别，若配置，则以配置值为准
        //,'paragraph':{'p':'', 'h1':'', 'h2':'', 'h3':'', 'h4':'', 'h5':'', 'h6':''}

        //rowspacingtop
        //段间距 值和显示的名字相同
        //,'rowspacingtop':['5', '10', '15', '20', '25']

        //rowspacingBottom
        //段间距 值和显示的名字相同
        //,'rowspacingbottom':['5', '10', '15', '20', '25']

        //lineheight
        //行内间距 值和显示的名字相同
        //,'lineheight':['1', '1.5','1.75','2', '3', '4', '5']

        //customstyle
        //自定义样式，不支持国际化，此处配置值即可最后显示值
        //block的元素是依据设置段落的逻辑设置的，inline的元素依据BIU的逻辑设置
        //尽量使用一些常用的标签
        //参数说明
        //tag 使用的标签名字
        //label 显示的名字也是用来标识不同类型的标识符，注意这个值每个要不同，
        //style 添加的样式
        //每一个对象就是一个自定义的样式
        //,'customstyle':[
        //    {tag:'h1', name:'tc', label:'', style:'border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:center;margin:0 0 20px 0;'},
        //    {tag:'h1', name:'tl',label:'', style:'border-bottom:#ccc 2px solid;padding:0 4px 0 0;margin:0 0 10px 0;'},
        //    {tag:'span',name:'im', label:'', style:'font-style:italic;font-weight:bold'},
        //    {tag:'span',name:'hi', label:'', style:'font-style:italic;font-weight:bold;color:rgb(51, 153, 204)'}
        //]

        //打开右键菜单功能
        //,enableContextMenu: true
        //右键菜单的内容，可以参考plugins/contextmenu.js里边的默认菜单的例子，label留空支持国际化，否则以此配置为准
        //,contextMenu:[
        //    {
        //        label:'',       //显示的名称
        //        cmdName:'selectall',//执行的command命令，当点击这个右键菜单时
        //        //exec可选，有了exec就会在点击时执行这个function，优先级高于cmdName
        //        exec:function () {
        //            //this是当前编辑器的实例
        //            //this.ui._dialogs['inserttableDialog'].open();
        //        }
        //    }
        //]

        //快捷菜单
        //,shortcutMenu:["fontfamily", "fontsize", "bold", "italic", "underline", "forecolor", "backcolor", "insertorderedlist", "insertunorderedlist"]

        //elementPathEnabled
        //是否启用元素路径，默认是显示
        //,elementPathEnabled : true

        //wordCount
        //,wordCount:true          //是否开启字数统计
        //,maximumWords:10000       //允许的最大字符数
        //字数统计提示，{#count}代表当前字数，{#leave}代表还可以输入多少字符数,留空支持多语言自动切换，否则按此配置显示
        //,wordCountMsg:''   //当前已输入 {#count} 个字符，您还可以输入{#leave} 个字符
        //超出字数限制提示  留空支持多语言自动切换，否则按此配置显示
        //,wordOverFlowMsg:''    //<span style="color:red;">你输入的字符个数已经超出最大允许值，服务器可能会拒绝保存！</span>

        //tab
        //点击tab键时移动的距离,tabSize倍数，tabNode什么字符做为单位
        //,tabSize:4
        //,tabNode:'&nbsp;'

        //removeFormat
        //清除格式时可以删除的标签和属性
        //removeForamtTags标签
        //,removeFormatTags:'b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var'
        //removeFormatAttributes属性
        //,removeFormatAttributes:'class,style,lang,width,height,align,hspace,valign'

        //undo
        //可以最多回退的次数,默认20
        //,maxUndoCount:20
        //当输入的字符数超过该值时，保存一次现场
        //,maxInputCount:1

        //autoHeightEnabled
        // 是否自动长高,默认true
        //,autoHeightEnabled:true

        //scaleEnabled
        //是否可以拉伸长高,默认true(当开启时，自动长高失效)
        //,scaleEnabled:false
        //,minFrameWidth:800    //编辑器拖动时最小宽度,默认800
        //,minFrameHeight:220  //编辑器拖动时最小高度,默认220

        //autoFloatEnabled
        //是否保持toolbar的位置不动,默认true
        //,autoFloatEnabled:true
        //浮动时工具栏距离浏览器顶部的高度，用于某些具有固定头部的页面
        //,topOffset:30
        //编辑器底部距离工具栏高度(如果参数大于等于编辑器高度，则设置无效)
        //,toolbarTopOffset:400

        //设置远程图片是否抓取到本地保存
        //,catchRemoteImageEnable: true //设置是否抓取远程图片

        //pageBreakTag
        //分页标识符,默认是_ueditor_page_break_tag_
        //,pageBreakTag:'_ueditor_page_break_tag_'

        //autotypeset
        //自动排版参数
        //,autotypeset: {
        //    mergeEmptyline: true,           //合并空行
        //    removeClass: true,              //去掉冗余的class
        //    removeEmptyline: false,         //去掉空行
        //    textAlign:"left",               //段落的排版方式，可以是 left,right,center,justify 去掉这个属性表示不执行排版
        //    imageBlockLine: 'center',       //图片的浮动方式，独占一行剧中,左右浮动，默认: center,left,right,none 去掉这个属性表示不执行排版
        //    pasteFilter: false,             //根据规则过滤没事粘贴进来的内容
        //    clearFontSize: false,           //去掉所有的内嵌字号，使用编辑器默认的字号
        //    clearFontFamily: false,         //去掉所有的内嵌字体，使用编辑器默认的字体
        //    removeEmptyNode: false,         // 去掉空节点
        //    //可以去掉的标签
        //    removeTagNames: {标签名字:1},
        //    indent: false,                  // 行首缩进
        //    indentValue : '2em',            //行首缩进的大小
        //    bdc2sb: false,
        //    tobdc: false
        //}

        //tableDragable
        //表格是否可以拖拽
        //,tableDragable: true



        //sourceEditor
        //源码的查看方式,codemirror 是代码高亮，textarea是文本框,默认是codemirror
        //注意默认codemirror只能在ie8+和非ie中使用
        //,sourceEditor:"codemirror"
        //如果sourceEditor是codemirror，还用配置一下两个参数
        //codeMirrorJsUrl js加载的路径，默认是 URL + "third-party/codemirror/codemirror.js"
        //,codeMirrorJsUrl:URL + "third-party/codemirror/codemirror.js"
        //codeMirrorCssUrl css加载的路径，默认是 URL + "third-party/codemirror/codemirror.css"
        //,codeMirrorCssUrl:URL + "third-party/codemirror/codemirror.css"
        //编辑器初始化完成后是否进入源码模式，默认为否。
        //,sourceEditorFirst:false

        //iframeUrlMap
        //dialog内容的路径 ～会被替换成URL,垓属性一旦打开，将覆盖所有的dialog的默认路径
        //,iframeUrlMap:{
        //    'anchor':'~/dialogs/anchor/anchor.html',
        //}

        //allowLinkProtocol 允许的链接地址，有这些前缀的链接地址不会自动添加http
        //, allowLinkProtocols: ['http:', 'https:', '#', '/', 'ftp:', 'mailto:', 'tel:', 'git:', 'svn:']

        //webAppKey 百度应用的APIkey，每个站长必须首先去百度官网注册一个key后方能正常使用app功能，注册介绍，http://app.baidu.com/static/cms/getapikey.html
        //, webAppKey: ""

        //默认过滤规则相关配置项目
        //,disabledTableInTable:true  //禁止表格嵌套
        //,allowDivTransToP:true      //允许进入编辑器的div标签自动变成p标签
        //,rgb2Hex:true               //默认产出的数据中的color自动从rgb格式变成16进制格式

		// xss 过滤是否开启,inserthtml等操作
		,xssFilterRules: true
		//input xss过滤
		,inputXssFilter: true
		//output xss过滤
		,outputXssFilter: true
		// xss过滤白名单 名单来源: https://raw.githubusercontent.com/leizongmin/js-xss/master/lib/default.js
		,whitList: {
			a:      ['target', 'href', 'title', 'class', 'style'],
			abbr:   ['title', 'class', 'style'],
			address: ['class', 'style'],
			area:   ['shape', 'coords', 'href', 'alt'],
			article: [],
			aside:  [],
			audio:  ['autoplay', 'controls', 'loop', 'preload', 'src', 'class', 'style'],
			b:      ['class', 'style'],
			bdi:    ['dir'],
			bdo:    ['dir'],
			big:    [],
			blockquote: ['cite', 'class', 'style'],
			br:     [],
			caption: ['class', 'style'],
			center: [],
			cite:   [],
			code:   ['class', 'style'],
			col:    ['align', 'valign', 'span', 'width', 'class', 'style'],
			colgroup: ['align', 'valign', 'span', 'width', 'class', 'style'],
			dd:     ['class', 'style'],
			del:    ['datetime'],
			details: ['open'],
			div:    ['class', 'style'],
			dl:     ['class', 'style'],
			dt:     ['class', 'style'],
			em:     ['class', 'style'],
			font:   ['color', 'size', 'face'],
			footer: [],
			h1:     ['class', 'style'],
			h2:     ['class', 'style'],
			h3:     ['class', 'style'],
			h4:     ['class', 'style'],
			h5:     ['class', 'style'],
			h6:     ['class', 'style'],
			header: [],
			hr:     [],
			i:      ['class', 'style'],
			img:    ['src', 'alt', 'title', 'width', 'height', 'id', '_src', 'loadingclass', 'class', 'data-latex'],
			ins:    ['datetime'],
			li:     ['class', 'style'],
			mark:   [],
			nav:    [],
			ol:     ['class', 'style'],
			p:      ['class', 'style'],
			pre:    ['class', 'style'],
			s:      [],
			section:[],
			small:  [],
			span:   ['class', 'style'],
			sub:    ['class', 'style'],
			sup:    ['class', 'style'],
			strong: ['class', 'style'],
			table:  ['width', 'border', 'align', 'valign', 'class', 'style'],
			tbody:  ['align', 'valign', 'class', 'style'],
			td:     ['width', 'rowspan', 'colspan', 'align', 'valign', 'class', 'style'],
			tfoot:  ['align', 'valign', 'class', 'style'],
			th:     ['width', 'rowspan', 'colspan', 'align', 'valign', 'class', 'style'],
			thead:  ['align', 'valign', 'class', 'style'],
			tr:     ['rowspan', 'align', 'valign', 'class', 'style'],
			tt:     [],
			u:      [],
			ul:     ['class', 'style'],
			video:  ['autoplay', 'controls', 'loop', 'preload', 'src', 'height', 'width', 'class', 'style']
		}
    };

    function getUEBasePath(docUrl, confUrl) {

        return getBasePath(docUrl || self.document.URL || self.location.href, confUrl || getConfigFilePath());

    }

    function getConfigFilePath() {

        var configPath = document.getElementsByTagName('script');

        return configPath[ configPath.length - 1 ].src;

    }

    function getBasePath(docUrl, confUrl) {

        var basePath = confUrl;


        if (/^(\/|\\\\)/.test(confUrl)) {

            basePath = /^.+?\w(\/|\\\\)/.exec(docUrl)[0] + confUrl.replace(/^(\/|\\\\)/, '');

        } else if (!/^[a-z]+:/i.test(confUrl)) {

            docUrl = docUrl.split("#")[0].split("?")[0].replace(/[^\\\/]+$/, '');

            basePath = docUrl + "" + confUrl;

        }

        return optimizationPath(basePath);

    }

    function optimizationPath(path) {

        var protocol = /^[a-z]+:\/\//.exec(path)[ 0 ],
            tmp = null,
            res = [];

        path = path.replace(protocol, "").split("?")[0].split("#")[0];

        path = path.replace(/\\/g, '/').split(/\//);

        path[ path.length - 1 ] = "";

        while (path.length) {

            if (( tmp = path.shift() ) === "..") {
                res.pop();
            } else if (tmp !== ".") {
                res.push(tmp);
            }

        }

        return protocol + res.join("/");

    }

    window.UE = {
        getUEBasePath: getUEBasePath
    };

})();


/***/ }),
/* 88 */
/***/ (function(module, exports) {

/**
 * Created with JetBrains PhpStorm.
 * User: taoqili
 * Date: 12-6-12
 * Time: 下午5:02
 * To change this template use File | Settings | File Templates.
 */
UE.I18N['zh-cn'] = {
    'labelMap':{
        'anchor':'锚点', 'undo':'撤销', 'redo':'重做', 'bold':'加粗', 'indent':'首行缩进', 'snapscreen':'截图',
        'italic':'斜体', 'underline':'下划线', 'strikethrough':'删除线', 'subscript':'下标','fontborder':'字符边框',
        'superscript':'上标', 'formatmatch':'格式刷', 'source':'源代码', 'blockquote':'引用',
        'pasteplain':'纯文本粘贴模式', 'selectall':'全选', 'print':'打印', 'preview':'预览',
        'horizontal':'分隔线', 'removeformat':'清除格式', 'time':'时间', 'date':'日期',
        'unlink':'取消链接', 'insertrow':'前插入行', 'insertcol':'前插入列', 'mergeright':'右合并单元格', 'mergedown':'下合并单元格',
        'deleterow':'删除行', 'deletecol':'删除列', 'splittorows':'拆分成行',
        'splittocols':'拆分成列', 'splittocells':'完全拆分单元格','deletecaption':'删除表格标题','inserttitle':'插入标题',
        'mergecells':'合并多个单元格', 'deletetable':'删除表格', 'cleardoc':'清空文档','insertparagraphbeforetable':"表格前插入行",'insertcode':'代码语言',
        'fontfamily':'字体', 'fontsize':'字号', 'paragraph':'段落格式', 'simpleupload':'单图上传', 'insertimage':'多图上传','edittable':'表格属性','edittd':'单元格属性', 'link':'超链接',
        'emotion':'表情', 'spechars':'特殊字符', 'searchreplace':'查询替换', 'map':'Baidu地图', 'gmap':'Google地图',
        'insertvideo':'视频', 'help':'帮助', 'justifyleft':'居左对齐', 'justifyright':'居右对齐', 'justifycenter':'居中对齐',
        'justifyjustify':'两端对齐', 'forecolor':'字体颜色', 'backcolor':'背景色', 'insertorderedlist':'有序列表',
        'insertunorderedlist':'无序列表', 'fullscreen':'全屏', 'directionalityltr':'从左向右输入', 'directionalityrtl':'从右向左输入',
        'rowspacingtop':'段前距', 'rowspacingbottom':'段后距',  'pagebreak':'分页', 'insertframe':'插入Iframe', 'imagenone':'默认',
        'imageleft':'左浮动', 'imageright':'右浮动', 'attachment':'附件', 'imagecenter':'居中', 'wordimage':'图片转存',
        'lineheight':'行间距','edittip' :'编辑提示','customstyle':'自定义标题', 'autotypeset':'自动排版',
        'webapp':'百度应用','touppercase':'字母大写', 'tolowercase':'字母小写','background':'背景','template':'模板','scrawl':'涂鸦',
        'music':'音乐','inserttable':'插入表格','drafts': '从草稿箱加载', 'charts': '图表'
    },
    'insertorderedlist':{
        'num':'1,2,3...',
        'num1':'1),2),3)...',
        'num2':'(1),(2),(3)...',
        'cn':'一,二,三....',
        'cn1':'一),二),三)....',
        'cn2':'(一),(二),(三)....',
        'decimal':'1,2,3...',
        'lower-alpha':'a,b,c...',
        'lower-roman':'i,ii,iii...',
        'upper-alpha':'A,B,C...',
        'upper-roman':'I,II,III...'
    },
    'insertunorderedlist':{
        'circle':'○ 大圆圈',
        'disc':'● 小黑点',
        'square':'■ 小方块 ',
        'dash' :'— 破折号',
        'dot':' 。 小圆圈'
    },
    'paragraph':{'p':'段落', 'h1':'标题 1', 'h2':'标题 2', 'h3':'标题 3', 'h4':'标题 4', 'h5':'标题 5', 'h6':'标题 6'},
    'fontfamily':{
        'songti':'宋体',
        'kaiti':'楷体',
        'heiti':'黑体',
        'lishu':'隶书',
        'yahei':'微软雅黑',
        'andaleMono':'andale mono',
        'arial': 'arial',
        'arialBlack':'arial black',
        'comicSansMs':'comic sans ms',
        'impact':'impact',
        'timesNewRoman':'times new roman'
    },
    'customstyle':{
        'tc':'标题居中',
        'tl':'标题居左',
        'im':'强调',
        'hi':'明显强调'
    },
    'autoupload': {
        'exceedSizeError': '文件大小超出限制',
        'exceedTypeError': '文件格式不允许',
        'jsonEncodeError': '服务器返回格式错误',
        'loading':"正在上传...",
        'loadError':"上传错误",
        'errorLoadConfig': '后端配置项没有正常加载，上传插件不能正常使用！'
    },
    'simpleupload':{
        'exceedSizeError': '文件大小超出限制',
        'exceedTypeError': '文件格式不允许',
        'jsonEncodeError': '服务器返回格式错误',
        'loading':"正在上传...",
        'loadError':"上传错误",
        'errorLoadConfig': '后端配置项没有正常加载，上传插件不能正常使用！'
    },
    'elementPathTip':"元素路径",
    'wordCountTip':"字数统计",
    'wordCountMsg':'当前已输入{#count}个字符, 您还可以输入{#leave}个字符。 ',
    'wordOverFlowMsg':'<span style="color:red;">字数超出最大允许值，服务器可能拒绝保存！</span>',
    'ok':"确认",
    'cancel':"取消",
    'closeDialog':"关闭对话框",
    'tableDrag':"表格拖动必须引入uiUtils.js文件！",
    'autofloatMsg':"工具栏浮动依赖编辑器UI，您首先需要引入UI文件!",
    'loadconfigError': '获取后台配置项请求出错，上传功能将不能正常使用！',
    'loadconfigFormatError': '后台配置项返回格式出错，上传功能将不能正常使用！',
    'loadconfigHttpError': '请求后台配置项http错误，上传功能将不能正常使用！',
    'snapScreen_plugin':{
        'browserMsg':"仅支持IE浏览器！",
        'callBackErrorMsg':"服务器返回数据有误，请检查配置项之后重试。",
        'uploadErrorMsg':"截图上传失败，请检查服务器端环境! "
    },
    'insertcode':{
        'as3':'ActionScript 3',
        'bash':'Bash/Shell',
        'cpp':'C/C++',
        'css':'CSS',
        'cf':'ColdFusion',
        'c#':'C#',
        'delphi':'Delphi',
        'diff':'Diff',
        'erlang':'Erlang',
        'groovy':'Groovy',
        'html':'HTML',
        'java':'Java',
        'jfx':'JavaFX',
        'js':'JavaScript',
        'pl':'Perl',
        'php':'PHP',
        'plain':'Plain Text',
        'ps':'PowerShell',
        'python':'Python',
        'ruby':'Ruby',
        'scala':'Scala',
        'sql':'SQL',
        'vb':'Visual Basic',
        'xml':'XML'
    },
    'confirmClear':"确定清空当前文档么？",
    'contextMenu':{
        'delete':"删除",
        'selectall':"全选",
        'deletecode':"删除代码",
        'cleardoc':"清空文档",
        'confirmclear':"确定清空当前文档么？",
        'unlink':"删除超链接",
        'paragraph':"段落格式",
        'edittable':"表格属性",
        'aligntd':"单元格对齐方式",
        'aligntable':'表格对齐方式',
        'tableleft':'左浮动',
        'tablecenter':'居中显示',
        'tableright':'右浮动',
        'edittd':"单元格属性",
        'setbordervisible':'设置表格边线可见',
        'justifyleft':'左对齐',
        'justifyright':'右对齐',
        'justifycenter':'居中对齐',
        'justifyjustify':'两端对齐',
        'table':"表格",
        'inserttable':'插入表格',
        'deletetable':"删除表格",
        'insertparagraphbefore':"前插入段落",
        'insertparagraphafter':'后插入段落',
        'deleterow':"删除当前行",
        'deletecol':"删除当前列",
        'insertrow':"前插入行",
        'insertcol':"左插入列",
        'insertrownext':'后插入行',
        'insertcolnext':'右插入列',
        'insertcaption':'插入表格名称',
        'deletecaption':'删除表格名称',
        'inserttitle':'插入表格标题行',
        'deletetitle':'删除表格标题行',
        'inserttitlecol':'插入表格标题列',
        'deletetitlecol':'删除表格标题列',
        'averageDiseRow':'平均分布各行',
        'averageDisCol':'平均分布各列',
        'mergeright':"向右合并",
        'mergeleft':"向左合并",
        'mergedown':"向下合并",
        'mergecells':"合并单元格",
        'splittocells':"完全拆分单元格",
        'splittocols':"拆分成列",
        'splittorows':"拆分成行",
        'tablesort':'表格排序',
        'enablesort':'设置表格可排序',
        'disablesort':'取消表格可排序',
        'reversecurrent':'逆序当前',
        'orderbyasc':'按ASCII字符升序',
        'reversebyasc':'按ASCII字符降序',
        'orderbynum':'按数值大小升序',
        'reversebynum':'按数值大小降序',
        'borderbk':'边框底纹',
        'setcolor':'表格隔行变色',
        'unsetcolor':'取消表格隔行变色',
        'setbackground':'选区背景隔行',
        'unsetbackground':'取消选区背景',
        'redandblue':'红蓝相间',
        'threecolorgradient':'三色渐变',
        'copy':"复制(Ctrl + c)",
        'copymsg': "浏览器不支持,请使用 'Ctrl + c'",
        'paste':"粘贴(Ctrl + v)",
         'pastemsg': "浏览器不支持,请使用 'Ctrl + v'"
    },
    'copymsg': "浏览器不支持,请使用 'Ctrl + c'",
    'pastemsg': "浏览器不支持,请使用 'Ctrl + v'",
    'anthorMsg':"链接",
    'clearColor':'清空颜色',
    'standardColor':'标准颜色',
    'themeColor':'主题颜色',
    'property':'属性',
    'default':'默认',
    'modify':'修改',
    'justifyleft':'左对齐',
    'justifyright':'右对齐',
    'justifycenter':'居中',
    'justify':'默认',
    'clear':'清除',
    'anchorMsg':'锚点',
    'delete':'删除',
    'clickToUpload':"点击上传",
    'unset':'尚未设置语言文件',
    't_row':'行',
    't_col':'列',
    'more':'更多',
    'pasteOpt':'粘贴选项',
    'pasteSourceFormat':"保留源格式",
    'tagFormat':'只保留标签',
    'pasteTextFormat':'只保留文本',
    'autoTypeSet':{
        'mergeLine':"合并空行",
        'delLine':"清除空行",
        'removeFormat':"清除格式",
        'indent':"首行缩进",
        'alignment':"对齐方式",
        'imageFloat':"图片浮动",
        'removeFontsize':"清除字号",
        'removeFontFamily':"清除字体",
        'removeHtml':"清除冗余HTML代码",
        'pasteFilter':"粘贴过滤",
        'run':"执行",
        'symbol':'符号转换',
        'bdc2sb':'全角转半角',
        'tobdc':'半角转全角'
    },

    'background':{
        'static':{
            'lang_background_normal':'背景设置',
            'lang_background_local':'在线图片',
            'lang_background_set':'选项',
            'lang_background_none':'无背景色',
            'lang_background_colored':'有背景色',
            'lang_background_color':'颜色设置',
            'lang_background_netimg':'网络图片',
            'lang_background_align':'对齐方式',
            'lang_background_position':'精确定位',
            'repeatType':{'options':["居中", "横向重复", "纵向重复", "平铺","自定义"]}

        },
        'noUploadImage':"当前未上传过任何图片！",
        'toggleSelect':"单击可切换选中状态\n原图尺寸: "
    },
    //===============dialog i18N=======================
    'insertimage':{
        'static':{
            'lang_tab_remote':"插入图片", //节点
            'lang_tab_upload':"本地上传",
            'lang_tab_online':"在线管理",
            'lang_tab_search':"图片搜索",
            'lang_input_url':"地 址：",
            'lang_input_size':"大 小：",
            'lang_input_width':"宽度",
            'lang_input_height':"高度",
            'lang_input_border':"边 框：",
            'lang_input_vhspace':"边 距：",
            'lang_input_title':"描 述：",
            'lang_input_align':'图片浮动方式：',
            'lang_imgLoading':"　图片加载中……",
            'lang_start_upload':"开始上传",
            'lock':{'title':"锁定宽高比例"}, //属性
            'searchType':{'title':"图片类型", 'options':["新闻", "壁纸", "表情", "头像"]}, //select的option
            'searchTxt':{'value':"请输入搜索关键词"},
            'searchBtn':{'value':"百度一下"},
            'searchReset':{'value':"清空搜索"},
            'noneAlign':{'title':'无浮动'},
            'leftAlign':{'title':'左浮动'},
            'rightAlign':{'title':'右浮动'},
            'centerAlign':{'title':'居中独占一行'}
        },
        'uploadSelectFile':'点击选择图片',
        'uploadAddFile':'继续添加',
        'uploadStart':'开始上传',
        'uploadPause':'暂停上传',
        'uploadContinue':'继续上传',
        'uploadRetry':'重试上传',
        'uploadDelete':'删除',
        'uploadTurnLeft':'向左旋转',
        'uploadTurnRight':'向右旋转',
        'uploadPreview':'预览中',
        'uploadNoPreview':'不能预览',
        'updateStatusReady': '选中_张图片，共_KB。',
        'updateStatusConfirm': '已成功上传_张照片，_张照片上传失败',
        'updateStatusFinish': '共_张（_KB），_张上传成功',
        'updateStatusError': '，_张上传失败。',
        'errorNotSupport': 'WebUploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器。',
        'errorLoadConfig': '后端配置项没有正常加载，上传插件不能正常使用！',
        'errorExceedSize':'文件大小超出',
        'errorFileType':'文件格式不允许',
        'errorInterrupt':'文件传输中断',
        'errorUploadRetry':'上传失败，请重试',
        'errorHttp':'http请求错误',
        'errorServerUpload':'服务器返回出错',
        'remoteLockError':"宽高不正确,不能所定比例",
        'numError':"请输入正确的长度或者宽度值！例如：123，400",
        'imageUrlError':"不允许的图片格式或者图片域！",
        'imageLoadError':"图片加载失败！请检查链接地址或网络状态！",
        'searchRemind':"请输入搜索关键词",
        'searchLoading':"图片加载中，请稍后……",
        'searchRetry':" :( ，抱歉，没有找到图片！请重试一次！"
    },
    'attachment':{
        'static':{
            'lang_tab_upload': '上传附件',
            'lang_tab_online': '在线附件',
            'lang_start_upload':"开始上传",
            'lang_drop_remind':"可以将文件拖到这里，单次最多可选100个文件"
        },
        'uploadSelectFile':'点击选择文件',
        'uploadAddFile':'继续添加',
        'uploadStart':'开始上传',
        'uploadPause':'暂停上传',
        'uploadContinue':'继续上传',
        'uploadRetry':'重试上传',
        'uploadDelete':'删除',
        'uploadTurnLeft':'向左旋转',
        'uploadTurnRight':'向右旋转',
        'uploadPreview':'预览中',
        'updateStatusReady': '选中_个文件，共_KB。',
        'updateStatusConfirm': '已成功上传_个文件，_个文件上传失败',
        'updateStatusFinish': '共_个（_KB），_个上传成功',
        'updateStatusError': '，_张上传失败。',
        'errorNotSupport': 'WebUploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器。',
        'errorLoadConfig': '后端配置项没有正常加载，上传插件不能正常使用！',
        'errorExceedSize':'文件大小超出',
        'errorFileType':'文件格式不允许',
        'errorInterrupt':'文件传输中断',
        'errorUploadRetry':'上传失败，请重试',
        'errorHttp':'http请求错误',
        'errorServerUpload':'服务器返回出错'
    },
    'insertvideo':{
        'static':{
            'lang_tab_insertV':"插入视频",
            'lang_tab_searchV':"搜索视频",
            'lang_tab_uploadV':"上传视频",
            'lang_video_url':"视频网址",
            'lang_video_size':"视频尺寸",
            'lang_videoW':"宽度",
            'lang_videoH':"高度",
            'lang_alignment':"对齐方式",
            'videoSearchTxt':{'value':"请输入搜索关键字！"},
            'videoType':{'options':["全部", "热门", "娱乐", "搞笑", "体育", "科技", "综艺"]},
            'videoSearchBtn':{'value':"百度一下"},
            'videoSearchReset':{'value':"清空结果"},

            'lang_input_fileStatus':' 当前未上传文件',
            'startUpload':{'style':"background:url(upload.png) no-repeat;"},

            'lang_upload_size':"视频尺寸",
            'lang_upload_width':"宽度",
            'lang_upload_height':"高度",
            'lang_upload_alignment':"对齐方式",
            'lang_format_advice':"建议使用mp4格式."

        },
        'numError':"请输入正确的数值，如123,400",
        'floatLeft':"左浮动",
        'floatRight':"右浮动",
        '"default"':"默认",
        'block':"独占一行",
        'urlError':"输入的视频地址有误，请检查后再试！",
        'loading':" &nbsp;视频加载中，请等待……",
        'clickToSelect':"点击选中",
        'goToSource':'访问源视频',
        'noVideo':" &nbsp; &nbsp;抱歉，找不到对应的视频，请重试！",

        'browseFiles':'浏览文件',
        'uploadSuccess':'上传成功!',
        'delSuccessFile':'从成功队列中移除',
        'delFailSaveFile':'移除保存失败文件',
        'statusPrompt':' 个文件已上传！ ',
        'flashVersionError':'当前Flash版本过低，请更新FlashPlayer后重试！',
        'flashLoadingError':'Flash加载失败!请检查路径或网络状态',
        'fileUploadReady':'等待上传……',
        'delUploadQueue':'从上传队列中移除',
        'limitPrompt1':'单次不能选择超过',
        'limitPrompt2':'个文件！请重新选择！',
        'delFailFile':'移除失败文件',
        'fileSizeLimit':'文件大小超出限制！',
        'emptyFile':'空文件无法上传！',
        'fileTypeError':'文件类型不允许！',
        'unknownError':'未知错误！',
        'fileUploading':'上传中，请等待……',
        'cancelUpload':'取消上传',
        'netError':'网络错误',
        'failUpload':'上传失败!',
        'serverIOError':'服务器IO错误！',
        'noAuthority':'无权限！',
        'fileNumLimit':'上传个数限制',
        'failCheck':'验证失败，本次上传被跳过！',
        'fileCanceling':'取消中，请等待……',
        'stopUploading':'上传已停止……',

        'uploadSelectFile':'点击选择文件',
        'uploadAddFile':'继续添加',
        'uploadStart':'开始上传',
        'uploadPause':'暂停上传',
        'uploadContinue':'继续上传',
        'uploadRetry':'重试上传',
        'uploadDelete':'删除',
        'uploadTurnLeft':'向左旋转',
        'uploadTurnRight':'向右旋转',
        'uploadPreview':'预览中',
        'updateStatusReady': '选中_个文件，共_KB。',
        'updateStatusConfirm': '成功上传_个，_个失败',
        'updateStatusFinish': '共_个(_KB)，_个成功上传',
        'updateStatusError': '，_张上传失败。',
        'errorNotSupport': 'WebUploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器。',
        'errorLoadConfig': '后端配置项没有正常加载，上传插件不能正常使用！',
        'errorExceedSize':'文件大小超出',
        'errorFileType':'文件格式不允许',
        'errorInterrupt':'文件传输中断',
        'errorUploadRetry':'上传失败，请重试',
        'errorHttp':'http请求错误',
        'errorServerUpload':'服务器返回出错'
    },
    'webapp':{
        'tip1':"本功能由百度APP提供，如看到此页面，请各位站长首先申请百度APPKey!",
        'tip2':"申请完成之后请至ueditor.config.js中配置获得的appkey! ",
        'applyFor':"点此申请",
        'anthorApi':"百度API"
    },
    'template':{
        'static':{
            'lang_template_bkcolor':'背景颜色',
            'lang_template_clear' : '保留原有内容',
            'lang_template_select' : '选择模板'
        },
        'blank':"空白文档",
        'blog':"博客文章",
        'resume':"个人简历",
        'richText':"图文混排",
        'sciPapers':"科技论文"


    },
    'scrawl':{
        'static':{
            'lang_input_previousStep':"上一步",
            'lang_input_nextsStep':"下一步",
            'lang_input_clear':'清空',
            'lang_input_addPic':'添加背景',
            'lang_input_ScalePic':'缩放背景',
            'lang_input_removePic':'删除背景',
            'J_imgTxt':{title:'添加背景图片'}
        },
        'noScarwl':"尚未作画，白纸一张~",
        'scrawlUpLoading':"涂鸦上传中,别急哦~",
        'continueBtn':"继续",
        'imageError':"糟糕，图片读取失败了！",
        'backgroundUploading':'背景图片上传中,别急哦~'
    },
    'music':{
        'static':{
            'lang_input_tips':"输入歌手/歌曲/专辑，搜索您感兴趣的音乐！",
            'J_searchBtn':{value:'搜索歌曲'}
        },
        'emptyTxt':'未搜索到相关音乐结果，请换一个关键词试试。',
        'chapter':'歌曲',
        'singer':'歌手',
        'special':'专辑',
        'listenTest':'试听'
    },
    'anchor':{
        'static':{
            'lang_input_anchorName':'锚点名字：'
        }
    },
    'charts':{
        'static':{
            'lang_data_source':'数据源：',
            'lang_chart_format': '图表格式：',
            'lang_data_align': '数据对齐方式',
            'lang_chart_align_same': '数据源与图表X轴Y轴一致',
            'lang_chart_align_reverse': '数据源与图表X轴Y轴相反',
            'lang_chart_title': '图表标题',
            'lang_chart_main_title': '主标题：',
            'lang_chart_sub_title': '子标题：',
            'lang_chart_x_title': 'X轴标题：',
            'lang_chart_y_title': 'Y轴标题：',
            'lang_chart_tip': '提示文字',
            'lang_cahrt_tip_prefix': '提示文字前缀：',
            'lang_cahrt_tip_description': '仅饼图有效， 当鼠标移动到饼图中相应的块上时，提示框内的文字的前缀',
            'lang_chart_data_unit': '数据单位',
            'lang_chart_data_unit_title': '单位：',
            'lang_chart_data_unit_description': '显示在每个数据点上的数据的单位， 比如： 温度的单位 ℃',
            'lang_chart_type': '图表类型：',
            'lang_prev_btn': '上一个',
            'lang_next_btn': '下一个'
        }
    },
    'emotion':{
        'static':{
            'lang_input_choice':'精选',
            'lang_input_Tuzki':'兔斯基',
            'lang_input_BOBO':'BOBO',
            'lang_input_lvdouwa':'绿豆蛙',
            'lang_input_babyCat':'baby猫',
            'lang_input_bubble':'泡泡',
            'lang_input_youa':'有啊'
        }
    },
    'gmap':{
        'static':{
            'lang_input_address':'地址',
            'lang_input_search':'搜索',
            'address':{value:"北京"}
        },
        searchError:'无法定位到该地址!'
    },
    'help':{
        'static':{
            'lang_input_about':'关于UEditor',
            'lang_input_shortcuts':'快捷键',
            'lang_input_introduction':'UEditor是由百度web前端研发部开发的所见即所得富文本web编辑器，具有轻量，可定制，注重用户体验等特点。开源基于BSD协议，允许自由使用和修改代码。',
            'lang_Txt_shortcuts':'快捷键',
            'lang_Txt_func':'功能',
            'lang_Txt_bold':'给选中字设置为加粗',
            'lang_Txt_copy':'复制选中内容',
            'lang_Txt_cut':'剪切选中内容',
            'lang_Txt_Paste':'粘贴',
            'lang_Txt_undo':'重新执行上次操作',
            'lang_Txt_redo':'撤销上一次操作',
            'lang_Txt_italic':'给选中字设置为斜体',
            'lang_Txt_underline':'给选中字加下划线',
            'lang_Txt_selectAll':'全部选中',
            'lang_Txt_visualEnter':'软回车',
            'lang_Txt_fullscreen':'全屏'
        }
    },
    'insertframe':{
        'static':{
            'lang_input_address':'地址：',
            'lang_input_width':'宽度：',
            'lang_input_height':'高度：',
            'lang_input_isScroll':'允许滚动条：',
            'lang_input_frameborder':'显示框架边框：',
            'lang_input_alignMode':'对齐方式：',
            'align':{title:"对齐方式", options:["默认", "左对齐", "右对齐", "居中"]}
        },
        'enterAddress':'请输入地址!'
    },
    'link':{
        'static':{
            'lang_input_text':'文本内容：',
            'lang_input_url':'链接地址：',
            'lang_input_title':'标题：',
            'lang_input_target':'是否在新窗口打开：'
        },
        'validLink':'只支持选中一个链接时生效',
        'httpPrompt':'您输入的超链接中不包含http等协议名称，默认将为您添加http://前缀'
    },
    'map':{
        'static':{
            lang_city:"城市",
            lang_address:"地址",
            city:{value:"北京"},
            lang_search:"搜索",
            lang_dynamicmap:"插入动态地图"
        },
        cityMsg:"请选择城市",
        errorMsg:"抱歉，找不到该位置！"
    },
    'searchreplace':{
        'static':{
            lang_tab_search:"查找",
            lang_tab_replace:"替换",
            lang_search1:"查找",
            lang_search2:"查找",
            lang_replace:"替换",
            lang_searchReg:'支持正则表达式，添加前后斜杠标示为正则表达式，例如“/表达式/”',
            lang_searchReg1:'支持正则表达式，添加前后斜杠标示为正则表达式，例如“/表达式/”',
            lang_case_sensitive1:"区分大小写",
            lang_case_sensitive2:"区分大小写",
            nextFindBtn:{value:"下一个"},
            preFindBtn:{value:"上一个"},
            nextReplaceBtn:{value:"下一个"},
            preReplaceBtn:{value:"上一个"},
            repalceBtn:{value:"替换"},
            repalceAllBtn:{value:"全部替换"}
        },
        getEnd:"已经搜索到文章末尾！",
        getStart:"已经搜索到文章头部",
        countMsg:"总共替换了{#count}处！"
    },
    'snapscreen':{
        'static':{
            lang_showMsg:"截图功能需要首先安装UEditor截图插件！ ",
            lang_download:"点此下载",
            lang_step1:"第一步，下载UEditor截图插件并运行安装。",
            lang_step2:"第二步，插件安装完成后即可使用，如不生效，请重启浏览器后再试！"
        }
    },
    'spechars':{
        'static':{},
        tsfh:"特殊字符",
        lmsz:"罗马字符",
        szfh:"数学字符",
        rwfh:"日文字符",
        xlzm:"希腊字母",
        ewzm:"俄文字符",
        pyzm:"拼音字母",
        yyyb:"英语音标",
        zyzf:"其他"
    },
    'edittable':{
        'static':{
            'lang_tableStyle':'表格样式',
            'lang_insertCaption':'添加表格名称行',
            'lang_insertTitle':'添加表格标题行',
            'lang_insertTitleCol':'添加表格标题列',
            'lang_orderbycontent':"使表格内容可排序",
            'lang_tableSize':'自动调整表格尺寸',
            'lang_autoSizeContent':'按表格文字自适应',
            'lang_autoSizePage':'按页面宽度自适应',
            'lang_example':'示例',
            'lang_borderStyle':'表格边框',
            'lang_color':'颜色:'
        },
        captionName:'表格名称',
        titleName:'标题',
        cellsName:'内容',
        errorMsg:'有合并单元格，不可排序'
    },
    'edittip':{
        'static':{
            lang_delRow:'删除整行',
            lang_delCol:'删除整列'
        }
    },
    'edittd':{
        'static':{
            lang_tdBkColor:'背景颜色:'
        }
    },
    'formula':{
        'static':{
        }
    },
    'wordimage':{
        'static':{
            lang_resave:"转存步骤",
            uploadBtn:{src:"upload.png",alt:"上传"},
            clipboard:{style:"background: url(copy.png) -153px -1px no-repeat;"},
            lang_step:"1、点击顶部复制按钮，将地址复制到剪贴板；2、点击添加照片按钮，在弹出的对话框中使用Ctrl+V粘贴地址；3、点击打开后选择图片上传流程。"
        },
        'fileType':"图片",
        'flashError':"FLASH初始化失败，请检查FLASH插件是否正确安装！",
        'netError':"网络连接错误，请重试！",
        'copySuccess':"图片地址已经复制！",
        'flashI18n':{} //留空默认中文
    },
    'autosave': {
        'saving':'保存中...',
        'success':'本地保存成功'
    }
};


/***/ })
/******/ ]);