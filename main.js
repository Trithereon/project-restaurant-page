/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `h1 {\n    text-align: center;\n    color: #4a6b2a;\n    font-family: 'Palatino', serif;\n    font-size: 3rem;\n    text-shadow: 3px 2px 2px rgba(212, 175, 55, 0.4);\n}\nh2 {\n    text-align: center;\n    color: #6b8e23;\n    border-left: 4px solid #d4af37;\n    border-bottom: 2px solid #d4af37;\n    padding-bottom: 10px;\n    box-shadow: 0 5px 5px rgba(74, 107, 42, 0.1);\n}\np.hero {\n    text-align: center;\n    color: #4a6b2a;\n    font-weight: 500;\n    width: 85%;\n    border-bottom: 1px solid #d4af37;\n    border-left: 2px solid #d4af37;\n    box-shadow: 0 5px 5px rgba(74, 107, 42, 0.1);\n}\n\n/* div#home-content-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n} note: no longer needed since I'm using section id=\"home\" instead */\n\n.menu-item {\n    margin: 20px 0;\n    padding-bottom: 15px;\n    border-bottom: 1px dashed #ccc;\n}\n.item-name {\n    font-weight: bold;\n    color: #4a6b2a;\n    font-size: 1.1em;\n}\n.item-desc {\n    font-style: italic;\n    color: #666;\n    margin: 5px 0;\n}\n.item-price {\n    color: #000000;\n    font-weight: bold;\n}\n\n/* Navbar container */\nnav {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  padding: 5px;\n  background-color: rgba(74, 107, 42, 0.9);\n  border-bottom: 4px solid #d4af37;\n}\n\n/* Nav buttons */\n.nav-button {\n  padding: 12px 30px;\n  font-family: 'Georgia', serif;\n  font-size: 1rem;\n  color: #f5f5e9; /* Cream text */\n  background-color: transparent;\n  border: 4px solid #d4af37; /* Gold border */\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 180ms ease;\n  text-transform: uppercase;\n}\n\n/* Hover/active states */\n.nav-button:hover {\n  background-color: rgba(212, 175, 55, 0.2); /* Semi-transparent gold */\n  transform: translateY(-2px);\n}\n\n.nav-button:active,\n.nav-button.active { /* For the current page */\n  background-color: rgba(212, 175, 55, 0.4); /* Stronger gold */\n  border-color: #f5f5e9; /* Cream border */\n}\n\n.nav-button::after {\n  margin-left: 8px;\n  color: #d4af37;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.nav-button:hover::after {\n  opacity: 1;\n}\n\n/* History Section Styling */\n.content-section {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 40px;\n  background-color: rgba(255, 255, 255, 0.9);\n  border-radius: 8px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n}\n\n/* Home elements */\n#home {\n  display: flex;\n  flex-direction: column;\n}\n\n#home p, #home img {\n  align-self: center;\n}\n\n.section-title {\n  color: #6b8e23;\n  text-align: center;\n  font-family: 'Palatino', serif;\n  border-bottom: 2px solid #d4af37; /* Gold */\n  padding-bottom: 10px;\n}\n\n/* Timeline Styling */\n.timeline {\n  position: relative;\n  margin: 40px 0;\n}\n\n.timeline::before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 0;\n  height: 100%;\n  width: 2px;\n  background: #d4af37; /* Gold timeline line */\n}\n\n.timeline-item {\n  padding: 20px 40px;\n  position: relative;\n  width: 50%;\n  box-sizing: border-box;\n}\n\n.timeline-item:nth-child(odd) {\n  left: 0;\n  text-align: right;\n}\n\n.timeline-item:nth-child(even) {\n  left: 50%;\n  text-align: left;\n}\n\n.timeline-year {\n  font-weight: bold;\n  color: #d4af37; /* Gold */\n  font-size: 1.2rem;\n}\n\n.timeline-content {\n  background: rgba(234, 234, 224, 0.3); /* Cream background */\n  padding: 20px;\n  border-radius: 8px;\n  border: 1px solid rgba(212, 175, 55, 0.3); /* Gold border */\n}\n\n.timeline-content h3 {\n  color: #4a6b2a; /* Deep green */\n  margin-top: 0;\n}\n\n/* Blockquote Styling */\n.history-quote {\n  font-style: italic;\n  color: #666;\n  text-align: center;\n  border-left: 4px solid #d4af37; /* Gold accent */\n  padding-left: 20px;\n  margin: 40px 0;\n}\n\n.history-quote cite {\n  display: block;\n  margin-top: 10px;\n  color: #4a6b2a; /* Deep green */\n  font-style: normal;\n}\n\n/* News Section Styling */\n.news-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 30px;\n  margin: 40px 0;\n}\n\n/* News Card Styling */\n.news-card {\n  background: rgba(234, 234, 224, 0.3); /* Cream background */\n  border-radius: 12px;\n  overflow: hidden;\n  border: 2px solid rgba(212, 175, 55, 0.3); /* Gold border */\n  transition: transform 0.3s ease;\n}\n\n.news-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 20px rgba(212, 175, 55, 0.1);\n}\n\n.news-date {\n  background-color: #4a6b2a; /* Deep green */\n  color: #f5f5e9; /* Cream text */\n  padding: 8px 15px;\n  font-size: 0.9rem;\n}\n\n.news-image {\n  width: 100%;\n}\n\n.news-card h3 {\n  color: #4a6b2a; /* Deep green */\n  padding: 15px 15px 0;\n  margin: 0;\n}\n\n.news-card p {\n  padding: 10px 15px;\n  color: #555;\n  line-height: 1.5;\n}\n\n.news-button {\n  display: block;\n  width: calc(100% - 30px);\n  margin: 15px;\n  padding: 10px;\n  background-color: transparent;\n  border: 2px solid #d4af37; /* Gold */\n  color: #4a6b2a; /* Deep green */\n  font-family: 'Georgia', serif;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.news-button:hover {\n  background-color: rgba(212, 175, 55, 0.2); /* Gold tint */\n}\n\n/* Newsletter Form */\n.news-subscribe {\n  text-align: center;\n  margin-top: 50px;\n  padding: 30px;\n  background: rgba(74, 107, 42, 0.1); /* Light green */\n  border-radius: 8px;\n}\n\n.news-subscribe h3 {\n  color: #4a6b2a; /* Deep green */\n  margin-bottom: 20px;\n}\n\n.subscribe-form input {\n  padding: 12px;\n  width: 300px;\n  border: 1px solid #d4af37; /* Gold */\n  border-radius: 4px;\n  font-family: 'Georgia', serif;\n}\n\n.submit-button {\n  padding: 12px 25px;\n  background-color: #4a6b2a; /* Deep green */\n  color: #f5f5e9; /* Cream */\n  border: none;\n  border-radius: 4px;\n  margin-left: 10px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.submit-button:hover {\n  background-color: #3a5522; /* Darker green */\n}\n\n/* ===== FAQ PAGE (unique styles) ===== */\n#faq .faq-container {\n  max-width: 800px;\n  margin: 2rem auto;\n}\n\n#faq .faq-item {\n  border: 1px solid rgba(212, 175, 55, 0.3); /* Gold border */\n  border-radius: 4px;\n  margin-bottom: 1rem;\n  background: var(--color-light-bg);\n}\n\n#faq .faq-question {\n  padding: 1.2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  font-weight: bold;\n  color: var(--color-green);\n  list-style: none; /* Hide default arrow */\n}\n\n#faq .faq-question::-webkit-details-marker {\n  display: none; /* Hide default arrow in WebKit */\n}\n\n#faq .faq-question:hover {\n  background: rgba(212, 175, 55, 0.1);\n}\n\n#faq .faq-icon {\n  transition: transform 0.3s ease;\n}\n\n#faq .faq-item[open] .faq-icon {\n  transform: rotate(180deg);\n}\n\n#faq .faq-answer {\n  padding: 0 1.2rem 1.2rem;\n  color: #555;\n  line-height: 1.6;\n  border-top: 1px dashed rgba(212, 175, 55, 0.3);\n}\n\n#faq .faq-contact {\n  text-align: center;\n  margin-top: 3rem;\n  font-style: italic;\n}\n\n#faq .faq-contact a {\n  color: var(--color-gold);\n  text-decoration: none;\n  border-bottom: 1px dotted var(--color-gold);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/faq.js":
/*!********************!*\
  !*** ./src/faq.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateFaq)\n/* harmony export */ });\nfunction generateFaq(){\n    document.getElementById('content').innerHTML = `\n<section id=\"faq\" class=\"content-section\">\n<h1>Lothlórien's Grace</h1>\n<h2 class=\"section-title\">Wisdom of the Elders (FAQ)</h2>\n  \n  <div class=\"faq-container\">\n    <!-- FAQ Item 1 -->\n    <details class=\"faq-item\" open>\n      <summary class=\"faq-question\">\n        <span>What makes Lothlórien's Grace different from other elvish restaurants?</span>\n        <svg class=\"faq-icon\" viewBox=\"0 0 24 24\" width=\"18\" height=\"18\">\n          <path fill=\"var(--color-gold)\" d=\"M7 10l5 5 5-5z\"/>\n        </svg>\n      </summary>\n      <div class=\"faq-answer\">\n        <p>Our ingredients are foraged daily from the protected groves of Lothlórien, and our recipes were personally blessed by Galadriel during the Third Age. The Miruvor served here comes from the same vintage served at the Council of Elrond.</p>\n      </div>\n    </details>\n\n    <!-- FAQ Item 2 -->\n    <details class=\"faq-item\">\n      <summary class=\"faq-question\">\n        <span>Is there a dress code?</span>\n        <svg class=\"faq-icon\" viewBox=\"0 0 24 24\" width=\"18\" height=\"18\">\n          <path fill=\"var(--color-gold)\" d=\"M7 10l5 5 5-5z\"/>\n        </svg>\n      </summary>\n      <div class=\"faq-answer\">\n        <p>While we don't require formal elvish robes, guests are encouraged to wear attire worthy of Caras Galadhon. Silvers, greens, and golds are particularly favored.</p>\n      </div>\n    </details>\n\n    <!-- FAQ Item 3 -->\n    <details class=\"faq-item\">\n      <summary class=\"faq-question\">\n        <span>How do mortals make reservations?</span>\n        <svg class=\"faq-icon\" viewBox=\"0 0 24 24\" width=\"18\" height=\"18\">\n          <path fill=\"var(--color-gold)\" d=\"M7 10l5 5 5-5z\"/>\n        </svg>\n      </summary>\n      <div class=\"faq-answer\">\n        <p>Send a raven to our enchanted mailbox at the edge of the Golden Wood, or whisper your request to any mallorn tree west of the Anduin. Confirmation will arrive via falling leaf.</p>\n      </div>\n    </details>\n  </div>\n\n  <div class=\"faq-contact\">\n    <p>Unanswered questions? Seek counsel at the <a href=\"/contact\">Fountain of Answers</a>.</p>\n  </div>\n</section>\n    `;\n};\n\n//# sourceURL=webpack://project-restaurant-page/./src/faq.js?");

/***/ }),

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateHistory)\n/* harmony export */ });\nfunction generateHistory() {\ndocument.getElementById('content').innerHTML = `\n<section id=\"history\" class=\"content-section\">\n<h1>Lothlórien's Grace</h1>\n  <h2 class=\"section-title\">The History of Lothlórien's Grace</h2>\n  \n  <div class=\"timeline\">\n    <!-- Timeline Item 1 -->\n    <div class=\"timeline-item\">\n      <div class=\"timeline-year\">Third Age 1981</div>\n      <div class=\"timeline-content\">\n        <h3>The Founding</h3>\n        <p>\n          Established by the Noldor elf Calandil, a master chef who blended Valinor's ancient recipes with Middle-Earth's ingredients. \n          The first feast was attended by Galadriel herself, who blessed the kitchens with a golden Mallorn sapling.\n        </p>\n      </div>\n    </div>\n\n    <!-- Timeline Item 2 -->\n    <div class=\"timeline-item\">\n      <div class=\"timeline-year\">Third Age 2510</div>\n      <div class=\"timeline-content\">\n        <h3>The Miruvor Cellar</h3>\n        <p>\n          Celebrían gifted the restaurant with a cask of vintage Miruvor from the Undying Lands, inspiring our signature wine program. \n          The cellar now holds over 500 vintages, aged in enchanted oak barrels.\n        </p>\n      </div>\n    </div>\n\n    <!-- Timeline Item 3 -->\n    <div class=\"timeline-item\">\n      <div class=\"timeline-year\">Fourth Age 120</div>\n      <div class=\"timeline-content\">\n        <h3>Modern Revival</h3>\n        <p>\n          After the War of the Ring, Legolas restored the restaurant with Greenwood's finest artisans. \n          Today, Chef Thaladir continues the tradition, foraging herbs from Fangorn Forest.\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <blockquote class=\"history-quote\">\n    \"Where the light of the Two Trees lingers in every dish.\"<br>\n    — <cite>Elrond of Rivendell</cite>\n  </blockquote>\n</section>\n`;\n}\n\n//# sourceURL=webpack://project-restaurant-page/./src/history.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateHome)\n/* harmony export */ });\n/* harmony import */ var _img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/restaurant.jpg */ \"./src/img/restaurant.jpg\");\n// This is what I want to append to div#content:\n//         <section id=\"home\" class=\"content-section\">\n//         <h1>Lothlórien's Grace</h1>\n//         <h3>The World's Finest Elvish Cuisine</h3>\n//         <img src=\"./img/restaurant.jpg\" alt=\"\" class=\"hero\" width=\"900\" height=\"600\">\n//         <p>An ethereal dining sanctuary where ancient Elvish recipes meet modern culinary artistry. Dine under enchanted canopies on delicacies like Mallorn-leaf wrapped salmon and Vintage Miruvor wine, crafted with ingredients from old mythical forests. A feast for the senses, whispered to be blessed by Galadriel herself.</p>\n//         </section>\n\n\n\nfunction generateHome() {\n    const sectionContainer = document.createElement('section');\n    sectionContainer.setAttribute('id', 'home');\n    sectionContainer.setAttribute('class', 'content-section');\n    document.getElementById('content').appendChild(sectionContainer);\n\n    const heading = document.createElement('h1');\n    heading.textContent = \"Lothlórien's Grace\";\n    document.getElementById('home').appendChild(heading);\n\n    const subtitle = document.createElement('h2');\n    subtitle.textContent = \"The World's Finest Elvish Cuisine\";\n    document.getElementById('home').appendChild(subtitle);\n\n    // No longer needed, since I'm using section element instead.\n    // const contentContainer = document.createElement('div');\n    // contentContainer.setAttribute('id', 'home-content-container');\n    // document.getElementById('home').appendChild(contentContainer);\n\n    const img = document.createElement('img');\n    img.setAttribute('src', _img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__);\n    img.setAttribute('alt', 'Picture of fancy Elvish restaurant meal');\n    img.setAttribute('class', 'hero');\n    img.setAttribute('width', '770');\n    img.setAttribute('height', '513');\n    document.getElementById('home').appendChild(img);\n\n    const description = document.createElement('p');\n    description.setAttribute('class', 'hero');\n    description.textContent = \"An ethereal dining sanctuary where ancient Elvish recipes meet modern culinary artistry. Dine under enchanted canopies on delicacies like Mallorn-leaf wrapped salmon and Vintage Miruvor wine, crafted with ingredients from old mythical forests. A feast for the senses, whispered to be blessed by Galadriel herself.\";\n    document.getElementById('home').appendChild(description);\n};\n\n//# sourceURL=webpack://project-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/img/cellar.jpg":
/*!****************************!*\
  !*** ./src/img/cellar.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f87f418d5c0e989f975b.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/img/cellar.jpg?");

/***/ }),

/***/ "./src/img/chef.jpg":
/*!**************************!*\
  !*** ./src/img/chef.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"55c99fec1972fd91ebc9.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/img/chef.jpg?");

/***/ }),

/***/ "./src/img/feast.jpg":
/*!***************************!*\
  !*** ./src/img/feast.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"60acbdc7bbc58c0ba3ce.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/img/feast.jpg?");

/***/ }),

/***/ "./src/img/restaurant.jpg":
/*!********************************!*\
  !*** ./src/img/restaurant.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"acafb1e29b0d4800e361.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/img/restaurant.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.js */ \"./src/history.js\");\n/* harmony import */ var _news_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.js */ \"./src/news.js\");\n/* harmony import */ var _faq_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faq.js */ \"./src/faq.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Initial homepage load.\n\nconst buttonHandlers = {\n    'home': _home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    'menu': _menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    'history': _history_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    'news': _news_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    'faq': _faq_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n};\n\ndocument.querySelector('nav').addEventListener('click', (e) => {\n    if (e.target.tagName === 'BUTTON') {\n        const page = e.target.dataset.function;\n        if (buttonHandlers[page]) {\n            document.getElementById('content').innerHTML = '';\n            buttonHandlers[page]();\n        }\n    }\n});\n\n//# sourceURL=webpack://project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateMenu)\n/* harmony export */ });\nfunction generateMenu() {\n    console.log('content was just deleted by pressing menu button.');\n    document.getElementById('content').innerHTML = `\n    <section id=\"menu\" class=\"content-section\">    \n    <h1>Lothlórien's Grace</h1>\n        <h2>Appetizers</h2>\n        <div class=\"menu-item\">\n            <div class=\"item-name\">Lembas Bread Trio</div>\n            <div class=\"item-desc\">Traditional Elvish waybread served with three seasonal spreads</div>\n            <div class=\"item-price\">14 silver pieces</div>\n        </div>\n        \n        <div class=\"menu-item\">\n            <div class=\"item-name\">Mirkwood Mushroom Tart</div>\n            <div class=\"item-desc\">Wild foraged mushrooms in a flaky pastry with herb-infused cream</div>\n            <div class=\"item-price\">18 silver pieces</div>\n        </div>\n\n        <h2>Main Courses</h2>\n        <div class=\"menu-item\">\n            <div class=\"item-name\">Mallorn-leaf Wrapped Salmon</div>\n            <div class=\"item-desc\">Fresh river salmon steamed in golden Mallorn leaves with lemon-thyme butter</div>\n            <div class=\"item-price\">32 silver pieces</div>\n        </div>\n        \n        <div class=\"menu-item\">\n            <div class=\"item-name\">Rivendell Herb-Crusted Venison</div>\n            <div class=\"item-desc\">Tender venison with a crust of wild herbs, served with roasted root vegetables</div>\n            <div class=\"item-price\">36 silver pieces</div>\n        </div>\n\n        <h2>Beverages</h2>\n        <div class=\"menu-item\">\n            <div class=\"item-name\">Vintage Miruvor Wine</div>\n            <div class=\"item-desc\">The legendary cordial of the Elves, served in crystal goblets (1 glass)</div>\n            <div class=\"item-price\">25 silver pieces</div>\n        </div>\n        \n        <div class=\"menu-item\">\n            <div class=\"item-name\">Ent-Draught Infusion</div>\n            <div class=\"item-desc\">Herbal tea blended with the essence of Fangorn's purest springs</div>\n            <div class=\"item-price\">12 silver pieces</div>\n        </div>\n\n        <h2>Desserts</h2>\n        <div class=\"menu-item\">\n            <div class=\"item-name\">Honeycomb of the Golden Wood</div>\n            <div class=\"item-desc\">Lavender-infused honeycomb with whipped cream and edible flowers</div>\n            <div class=\"item-price\">16 silver pieces</div>\n        </div>\n        </section>\n        `;\n}        \n\n//# sourceURL=webpack://project-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/news.js":
/*!*********************!*\
  !*** ./src/news.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateNews)\n/* harmony export */ });\n/* harmony import */ var _img_chef_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/chef.jpg */ \"./src/img/chef.jpg\");\n/* harmony import */ var _img_feast_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/feast.jpg */ \"./src/img/feast.jpg\");\n/* harmony import */ var _img_cellar_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/cellar.jpg */ \"./src/img/cellar.jpg\");\n\n\n\n\nfunction generateNews(){\n    document.getElementById('content').innerHTML = `\n<section id=\"news\" class=\"content-section\">\n<h1>Lothlórien's Grace</h1>\n  <h2 class=\"section-title\">Tidings from the Golden Wood (News)</h2>\n  \n  <div class=\"news-grid\">\n    <!-- News Article 1 -->\n    <article class=\"news-card\">\n      <div class=\"news-date\">10 Yavannië, Fourth Age 124</div>\n      <img src=\"${_img_feast_jpg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Elvish harvest feast\" class=\"news-image\">\n      <h3>Annual Harvest Feast Announced</h3>\n      <p>\n        Join us under the Mallorn trees for a night of seasonal delicacies, including \n        honey-glazed venison and elderflower-infused Miruvor. Reservations required.\n      </p>\n      <button class=\"news-button\">Reserve Now</button>\n    </article>\n\n    <!-- News Article 2 -->\n    <article class=\"news-card\">\n      <div class=\"news-date\">25 Víressë, Fourth Age 124</div>\n      <img src=\"${_img_chef_jpg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Elvish chef Thaladir\" class=\"news-image\">\n      <h3>Chef Thaladir Wins Golden Acorn Award</h3>\n      <p>\n        Our head chef was honored for his innovative dish: \"Mallorn-leaf wrapped salmon \n        with Lothlórien truffle sauce.\" The recipe will debut on next month's menu.\n      </p>\n      <button class=\"news-button\">View Menu</button>\n    </article>\n\n    <!-- News Article 3 -->\n    <article class=\"news-card\">\n      <div class=\"news-date\">1 Enderi, Fourth Age 123</div>\n      <img src=\"${_img_cellar_jpg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Wine cellar\" class=\"news-image\">\n      <h3>Wine Cellar Expansion Complete</h3>\n      <p>\n        Our enchanted cellar now houses 1,000 vintages, including a rare batch of \n        Dorwinion wine gifted by King Thranduil. Private tastings available.\n      </p>\n      <button class=\"news-button\">Book Tasting</button>\n    </article>\n  </div>\n\n  <div class=\"news-subscribe\">\n    <h3>Receive Elvish News by Eagle-post</h3>\n    <form class=\"subscribe-form\">\n      <input type=\"email\" placeholder=\"Your email\" required>\n      <button type=\"submit\" class=\"submit-button\">Subscribe</button>\n    </form>\n  </div>\n</section>\n`;\n};\n\n//# sourceURL=webpack://project-restaurant-page/./src/news.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;