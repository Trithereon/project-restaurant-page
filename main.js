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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `h1 {\n    text-align: center;\n    color: #4a6b2a;\n    font-family: 'Palatino', serif;\n    font-size: 3rem;\n    text-shadow: 3px 2px 2px rgba(212, 175, 55, 0.4);\n}\nh2 {\n    text-align: center;\n    color: #6b8e23;\n    border-left: 4px solid #d4af37;\n    border-bottom: 2px solid #d4af37;\n    padding-bottom: 10px;\n    box-shadow: 0 5px 5px rgba(74, 107, 42, 0.1);\n}\np.hero {\n    text-align: center;\n    color: #4a6b2a;\n    font-weight: 500;\n    width: 85%;\n    border-bottom: 1px solid #d4af37;\n    border-left: 2px solid #d4af37;\n    box-shadow: 0 5px 5px rgba(74, 107, 42, 0.1);\n}\n\n.menu-item {\n    margin: 20px 20px;\n    padding-bottom: 15px;\n    border-bottom: 1px dashed #ccc;\n}\n.item-name {\n    font-weight: bold;\n    color: #4a6b2a;\n    font-size: 1.1em;\n}\n.item-desc {\n    font-style: italic;\n    color: #666;\n    margin: 5px 0;\n}\n.item-price {\n    color: #000000;\n    font-weight: bold;\n}\n\n/* Navbar container */\nnav {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  padding: 5px;\n  background-color: rgba(74, 107, 42, 0.9);\n  border-bottom: 4px solid #d4af37;\n}\n\n/* Nav buttons */\n.nav-button {\n  padding: 12px 30px;\n  font-family: 'Georgia', serif;\n  font-size: 1rem;\n  color: #f5f5e9; /* Cream text */\n  background-color: transparent;\n  border: 4px solid #d4af37; /* Gold border */\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 180ms ease;\n  text-transform: uppercase;\n}\n\n/* Hover/active states */\n.nav-button:hover {\n  background-color: rgba(212, 175, 55, 0.2); /* Semi-transparent gold */\n  transform: translateY(-2px);\n}\n\n.nav-button:active,\n.nav-button.active { /* For the current page */\n  background-color: rgba(212, 175, 55, 0.4); /* Stronger gold */\n  border-color: #f5f5e9; /* Cream border */\n}\n\n.nav-button::after {\n  margin-left: 8px;\n  color: #d4af37;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.nav-button:hover::after {\n  opacity: 1;\n}\n\n/* History section styles */\n.content-section {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 40px;\n  background-color: rgba(255, 255, 255, 0.9);\n  border-radius: 8px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n}\n\n/* Home elements */\n#home {\n  display: flex;\n  flex-direction: column;\n}\n\n#home p, #home img {\n  align-self: center;\n}\n\n.section-title {\n  color: #6b8e23;\n  text-align: center;\n  font-family: 'Palatino', serif;\n  border-bottom: 2px solid #d4af37; /* Gold */\n  padding-bottom: 10px;\n}\n\n/* Timeline styles */\n.timeline {\n  position: relative;\n  margin: 40px 0;\n}\n\n.timeline::before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 0;\n  height: 100%;\n  width: 2px;\n  background: #d4af37; /* Gold timeline line */\n}\n\n.timeline-item {\n  padding: 20px 40px;\n  position: relative;\n  width: 50%;\n  box-sizing: border-box;\n}\n\n.timeline-item:nth-child(odd) {\n  left: 0;\n  text-align: right;\n}\n\n.timeline-item:nth-child(even) {\n  left: 50%;\n  text-align: left;\n}\n\n.timeline-year {\n  font-weight: bold;\n  color: #d4af37; /* Gold */\n  font-size: 1.2rem;\n}\n\n.timeline-content {\n  background: rgba(234, 234, 224, 0.3); /* Cream background */\n  padding: 20px;\n  border-radius: 8px;\n  border: 1px solid rgba(212, 175, 55, 0.3); /* Gold border */\n}\n\n.timeline-content h3 {\n  color: #4a6b2a; /* Deep green */\n  margin-top: 0;\n}\n\n/* Blockquote styles */\n.history-quote {\n  font-style: italic;\n  color: #666;\n  text-align: center;\n  border-left: 4px solid #d4af37; /* Gold accent */\n  padding-left: 20px;\n  margin: 40px 0;\n}\n\n.history-quote cite {\n  display: block;\n  margin-top: 10px;\n  color: #4a6b2a; /* Deep green */\n  font-style: normal;\n}\n\n/* News section styles */\n.news-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 30px;\n  margin: 40px 0;\n}\n\n/* News card styles */\n.news-card {\n  background: rgba(234, 234, 224, 0.3); /* Cream background */\n  border-radius: 12px;\n  overflow: hidden;\n  border: 2px solid rgba(212, 175, 55, 0.3); /* Gold border */\n  transition: transform 0.3s ease;\n}\n\n.news-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 20px rgba(212, 175, 55, 0.1);\n}\n\n.news-date {\n  background-color: #4a6b2a; /* Deep green */\n  color: #f5f5e9; /* Cream text */\n  padding: 8px 15px;\n  font-size: 0.9rem;\n}\n\n.news-image {\n  width: 100%;\n}\n\n.news-card h3 {\n  color: #4a6b2a; /* Deep green */\n  padding: 15px 15px 0;\n  margin: 0;\n}\n\n.news-card p {\n  padding: 10px 15px;\n  color: #555;\n  line-height: 1.5;\n}\n\n.news-button {\n  display: block;\n  width: calc(100% - 30px);\n  margin: 15px;\n  padding: 10px;\n  background-color: transparent;\n  border: 2px solid #d4af37; /* Gold */\n  color: #4a6b2a; /* Deep green */\n  font-family: 'Georgia', serif;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.news-button:hover {\n  background-color: rgba(212, 175, 55, 0.2); /* Gold tint */\n}\n\n/* Newsletter form */\n.news-subscribe {\n  text-align: center;\n  margin-top: 50px;\n  padding: 30px;\n  background: rgba(74, 107, 42, 0.1); /* Light green */\n  border-radius: 8px;\n}\n\n.news-subscribe h3 {\n  color: #4a6b2a; /* Deep green */\n  margin-bottom: 20px;\n}\n\n.subscribe-form input {\n  padding: 12px;\n  width: 300px;\n  border: 1px solid #d4af37; /* Gold */\n  border-radius: 4px;\n  font-family: 'Georgia', serif;\n}\n\n.submit-button {\n  padding: 12px 25px;\n  background-color: #4a6b2a; /* Deep green */\n  color: #f5f5e9; /* Cream */\n  border: none;\n  border-radius: 4px;\n  margin-left: 10px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.submit-button:hover {\n  background-color: #3a5522; /* Darker green */\n}\n\n/* FAQ styles */\n#faq .faq-container {\n  max-width: 800px;\n  margin: 2rem auto;\n}\n\n#faq .faq-item {\n  border: 1px solid rgba(212, 175, 55, 0.3); /* Gold border */\n  border-radius: 4px;\n  margin-bottom: 1rem;\n  background: var(--color-light-bg);\n}\n\n#faq .faq-question {\n  padding: 1.2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  font-weight: bold;\n  color: var(--color-green);\n  list-style: none; /* Hide default arrow */\n}\n\n#faq .faq-question::-webkit-details-marker {\n  display: none; /* Hide default arrow in webkit */\n}\n\n#faq .faq-question:hover {\n  background: rgba(212, 175, 55, 0.1);\n}\n\n#faq .faq-icon {\n  transition: transform 0.3s ease;\n}\n\n#faq .faq-item[open] .faq-icon {\n  transform: rotate(180deg);\n}\n\n#faq .faq-answer {\n  padding: 0 1.2rem 1.2rem;\n  color: #555;\n  line-height: 1.6;\n  border-top: 1px dashed rgba(212, 175, 55, 0.3);\n}\n\n#faq .faq-contact {\n  text-align: center;\n  margin-top: 3rem;\n  font-style: italic;\n}\n\n#faq .faq-contact a {\n  color: #d4af37;\n  text-decoration: none;\n  border-bottom: 1px dotted #d4af37;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateFaq)\n/* harmony export */ });\nfunction generateFaq(){\n\n  const sectionContainer = document.createElement('section');\n  sectionContainer.id = 'faq';\n  sectionContainer.className = 'content-section';\n\n  const heading = document.createElement('h1');\n  heading.textContent = \"Lothlórien's Grace\";\n\n  const sectionTitle = document.createElement('h2');\n  sectionTitle.className = 'section-title';\n  sectionTitle.textContent = \"Wisdom of the Elders (FAQ)\";\n\n  const faqContainer = document.createElement('div');\n  faqContainer.className = 'faq-container';\n\n  function createFaqItem({isOpenByDefault, question, answer}) {\n    const faqItem = document.createElement('details');\n    faqItem.className = 'faq-item';\n    faqItem.open = isOpenByDefault;\n\n    const faqQuestion = document.createElement('summary');\n    faqQuestion.className = 'faq-question';\n    \n    const questionContent = document.createElement('span');\n    questionContent.textContent = question;\n\n    const faqIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n    faqIcon.setAttribute('class', 'faq-icon');\n    faqIcon.setAttribute('viewBox', '0 0 24 24');\n    faqIcon.setAttribute('width', '18');\n    faqIcon.setAttribute('height', '18');\n\n    const faqIconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');\n    faqIconPath.setAttribute('fill', '#d4af37');\n    faqIconPath.setAttribute('d', 'M7 10l5 5 5-5z');\n\n    const faqAnswer = document.createElement('div');\n    faqAnswer.className = 'faq-answer';\n    \n    const faqAnswerContent = document.createElement('p');\n    faqAnswerContent.textContent = answer;\n\n    faqIcon.appendChild(faqIconPath);\n    faqQuestion.append(questionContent, faqIcon);\n    faqAnswer.appendChild(faqAnswerContent);\n    faqItem.append(faqQuestion, faqAnswer);\n\n    return faqItem;\n  }\n\n  const faqContact = document.createElement('div');\n  faqContact.className = 'faq-contact';\n\n  const faqContactContent = document.createElement('p');\n  faqContactContent.textContent = \"Unanswered questions? Seek counsel at the \";\n\n  const faqContactLink = document.createElement('a');\n  faqContactLink.textContent = \"Fountain of Answers.\";\n  faqContactLink.href = '#'; // Placeholder.\n\n  // Build page elements.\n  document.getElementById('content').appendChild(sectionContainer);\n  sectionContainer.append(heading, sectionTitle, faqContainer);\n  faqContainer.appendChild(createFaqItem({\n    isOpenByDefault: false, // Could choose to have a question open automatically.\n    question: \"What makes Lothlórien's Grace different from other elvish restaurants?\",\n    answer: \"Our ingredients are foraged daily from the protected groves of Lothlórien, and our recipes were personally blessed by Galadriel during the Third Age. The Miruvor served here comes from the same vintage served at the Council of Elrond.\"\n  }));\n  faqContainer.appendChild(createFaqItem({\n    isOpenByDefault: false,\n    question: \"Is there a dress code?\",\n    answer: \"While we don't require formal elvish robes, guests are encouraged to wear attire worthy of Caras Galadhon. Silvers, greens, and golds are particularly favoured.\"\n  }));\n  faqContainer.appendChild(createFaqItem({\n    isOpenByDefault: false,\n    question: \"How do mortals make reservations?\",\n    answer: \"Send a raven to our enchanted mailbox at the edge of the Golden Wood, or whisper your request to any mallorn tree west of the Anduin. Confirmation will arrive via falling leaf.\"\n  }));\n  faqContactContent.appendChild(faqContactLink);\n  faqContact.appendChild(faqContactContent);\n  sectionContainer.appendChild(faqContact);\n};\n\n//# sourceURL=webpack://project-restaurant-page/./src/faq.js?");

/***/ }),

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateHistory)\n/* harmony export */ });\nfunction generateHistory() {\n\n  function createTimelineItem(year, heading, desc){\n    const timelineItem = document.createElement('div');\n    timelineItem.className = 'timeline-item';\n    \n    const timelineYear = document.createElement('div');\n    timelineYear.className = 'timeline-year';\n    timelineYear.textContent = year;\n    \n    const timelineContent = document.createElement('div');\n    timelineContent.className = 'timeline-content';\n\n    const contentHeading = document.createElement('h3');\n    contentHeading.textContent = heading;\n\n    const contentDesc = document.createElement('p');\n    contentDesc.textContent = desc;\n\n    timelineItem.appendChild(timelineYear);\n    timelineItem.appendChild(timelineContent);\n    timelineContent.appendChild(contentHeading);\n    timelineContent.appendChild(contentDesc);\n    \n    return timelineItem;\n  }\n  // Quote.\n  const quote = document.createElement('blockquote');\n  quote.className = 'history-quote';\n  quote.textContent = \"Where the light of the Two Trees lingers in every dish.\"\n  const quoteAuthor = document.createElement('cite');\n  quoteAuthor.textContent = \"- Elrond of Rivendell\";\n\n  // Build page elements.\n  const sectionContainer = document.createElement('section');\n  sectionContainer.id = 'history';\n  sectionContainer.className = 'content-section';\n\n  const heading = document.createElement('h1');\n  heading.textContent = \"Lothlórien's Grace\";\n\n  const sectionTitle = document.createElement('h2');\n  sectionTitle.className = 'section-title';\n  sectionTitle.textContent = \"The History of Lothlórien's Grace\";\n\n  const timelineContainer = document.createElement('div');\n  timelineContainer.className = 'timeline';\n\n  document.getElementById('content').appendChild(sectionContainer);\n  sectionContainer.appendChild(heading);  \n  sectionContainer.appendChild(sectionTitle);\n  sectionContainer.appendChild(timelineContainer);\n  timelineContainer.appendChild(createTimelineItem(\n    \"Third Age 1981\",\n    \"The Founding\",\n    \"Established by the Noldor elf Calandil, a master chef who blended Valinor's ancient recipes with Middle-Earth's ingredients. The first feast was attended by Galadriel herself, who blessed the kitchens with a golden Mallorn sapling.\"\n  ));\n    timelineContainer.appendChild(createTimelineItem(\n    \"Third Age 2510\",\n    \"The Miruvor Cellar\",\n    \"Celebrían gifted the restaurant with a cask of vintage Miruvor from the Undying Lands, inspiring our signature wine program. The cellar now holds over 500 vintages, aged in enchanted oak barrels.\"\n  ));\n    timelineContainer.appendChild(createTimelineItem(\n    \"Fourth Age 120\",\n    \"Modern Revival\",\n    \"After the War of the Ring, Legolas restored the restaurant with Greenwood's finest artisans. Today, Chef Thaladir continues the tradition, foraging herbs from Fangorn Forest.\"\n  ));\n  \n  sectionContainer.appendChild(quote);\n  quote.appendChild(document.createElement('br'));\n  quote.appendChild(quoteAuthor);\n}\n\n//# sourceURL=webpack://project-restaurant-page/./src/history.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateHome)\n/* harmony export */ });\n/* harmony import */ var _img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/restaurant.jpg */ \"./src/img/restaurant.jpg\");\n// This is what I want to append to div#content:\n//         <section id=\"home\" class=\"content-section\">\n//         <h1>Lothlórien's Grace</h1>\n//         <h3>The World's Finest Elvish Cuisine</h3>\n//         <img src=\"./img/restaurant.jpg\" alt=\"\" class=\"hero\" width=\"900\" height=\"600\">\n//         <p>An ethereal dining sanctuary where ancient Elvish recipes meet modern culinary artistry. Dine under enchanted canopies on delicacies like Mallorn-leaf wrapped salmon and Vintage Miruvor wine, crafted with ingredients from old mythical forests. A feast for the senses, whispered to be blessed by Galadriel herself.</p>\n//         </section>\n\n\n\nfunction generateHome() {\n    const sectionContainer = document.createElement('section');\n    sectionContainer.id = 'home';\n    sectionContainer.className = 'content-section';\n    document.getElementById('content').appendChild(sectionContainer);\n\n    const heading = document.createElement('h1');\n    heading.textContent = \"Lothlórien's Grace\";\n    document.getElementById('home').appendChild(heading);\n\n    const subtitle = document.createElement('h2');\n    subtitle.textContent = \"The World's Finest Elvish Cuisine\";\n    document.getElementById('home').appendChild(subtitle);\n\n    // No longer needed, since I'm using section element instead.\n    // const contentContainer = document.createElement('div');\n    // contentContainer.setAttribute('id', 'home-content-container');\n    // document.getElementById('home').appendChild(contentContainer);\n\n    const img = document.createElement('img');\n    img.setAttribute('src', _img_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__);\n    img.setAttribute('alt', 'Picture of fancy Elvish restaurant meal');\n    img.className = 'hero';\n    img.setAttribute('width', '770');\n    img.setAttribute('height', '513');\n    document.getElementById('home').appendChild(img);\n\n    const description = document.createElement('p');\n    description.setAttribute('class', 'hero');\n    description.textContent = \"An ethereal dining sanctuary where ancient Elvish recipes meet modern culinary artistry. Dine under enchanted canopies on delicacies like Mallorn-leaf wrapped salmon and Vintage Miruvor wine, crafted with ingredients from old mythical forests. A feast for the senses, whispered to be blessed by Galadriel herself.\";\n    document.getElementById('home').appendChild(description);\n};\n\n//# sourceURL=webpack://project-restaurant-page/./src/home.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateMenu)\n/* harmony export */ });\nfunction generateMenu() {\n \n    function createMenuItem(name, desc, price){\n        const menuItem = document.createElement('div');\n        menuItem.className = 'menu-item';\n\n        const itemName = document.createElement('div');\n        itemName.className = 'item-name';\n        itemName.textContent = name;\n\n        const itemDesc = document.createElement('div');\n        itemDesc.className = 'item-desc';\n        itemDesc.textContent = desc;\n\n        const itemPrice = document.createElement('div');\n        itemPrice.className = 'item-price';\n        itemPrice.textContent = price;\n\n        menuItem.appendChild(itemName);\n        menuItem.appendChild(itemDesc);\n        menuItem.appendChild(itemPrice);\n\n        return menuItem;\n    }\n\n    function createSectionHeading(heading) {\n        const menuSectionHeading = document.createElement('h2');\n        menuSectionHeading.textContent = heading;\n\n        return menuSectionHeading;\n    }\n\n    // Build page elements.\n    const sectionContainer = document.createElement('section');\n    sectionContainer.id = 'menu';\n    sectionContainer.className = 'content-section';\n    document.getElementById('content').appendChild(sectionContainer);\n\n    const heading = document.createElement('h1');\n    heading.textContent = \"Lothlórien's Grace\";\n    sectionContainer.appendChild(heading);\n\n    sectionContainer.appendChild(createSectionHeading(\"Appetizers\"));\n    sectionContainer.appendChild(createMenuItem(\n        \"Lembas Bread Trio\", \n        \"Traditional Elvish waybread served with three seasonal spreads\", \n        \"14 silver pieces\"\n    ));\n    sectionContainer.appendChild(createMenuItem(\n        \"Mirkwood Mushroom Tart\", \n        \"Wild foraged mushrooms in a flaky pastry with herb-infused cream\", \n        \"18 silver pieces\"\n    ));\n\n    sectionContainer.appendChild(createSectionHeading(\"Main Courses\"));\n    sectionContainer.appendChild(createMenuItem(\n        \"Mallorn-leaf Wrapped Salmon\", \n        \"Fresh river salmon steamed in golden Mallorn leaves with lemon-thyme butter\", \n        \"32 silver pieces\"\n    ));\n    sectionContainer.appendChild(createMenuItem(\n        \"Rivendell Herb-Crusted Venison\", \n        \"Tender venison with a crust of wild herbs, served with roasted root vegetables\", \n        \"36 silver pieces\"\n    ));\n\n    sectionContainer.appendChild(createSectionHeading(\"Beverages\"));\n    sectionContainer.appendChild(createMenuItem(\n        \"Vintage Miruvor Wine\", \n        \"The legendary cordial of the Elves, served in crystal goblets (1 glass)\", \n        \"25 silver pieces\"\n    ));\n    sectionContainer.appendChild(createMenuItem(\n        \"Ent-Draught Infusion\", \n        \"Herbal tea blended with the essence of Fangorn's purest springs\", \n        \"8 silver pieces\"\n    ));\n\n    sectionContainer.appendChild(createSectionHeading(\"Desserts\"));\n    sectionContainer.appendChild(createMenuItem(\n        \"Honeycomb of the Golden Wood\", \n        \"Lavender-infused honeycomb with whipped cream and edible flowers\", \n        \"16 silver pieces\"\n    ));\n\n}        \n\n//# sourceURL=webpack://project-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/news.js":
/*!*********************!*\
  !*** ./src/news.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateNews)\n/* harmony export */ });\n/* harmony import */ var _img_chef_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/chef.jpg */ \"./src/img/chef.jpg\");\n/* harmony import */ var _img_feast_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/feast.jpg */ \"./src/img/feast.jpg\");\n/* harmony import */ var _img_cellar_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/cellar.jpg */ \"./src/img/cellar.jpg\");\n\n\n\n\nfunction generateNews(){\n\n\n  const sectionContainer = document.createElement('section');\n  sectionContainer.id = 'news';\n  sectionContainer.className = 'content-section';\n\n  const heading = document.createElement('h1');\n  heading.textContent = \"Lothlórien's Grace\";\n\n  const sectionTitle = document.createElement('h2');\n  sectionTitle.className = 'section-title';\n  sectionTitle.textContent = \"Tidings from the Golden Wood (News)\";\n\n  const newsGrid = document.createElement('div');\n  newsGrid.className = 'news-grid';\n\n  function createNewsCard({date, imgSrc, imgAlt, heading, desc, buttonText}) {\n    const newsCard = document.createElement('article');\n    newsCard.className = 'news-card';\n\n    const newsDate = document.createElement('div');\n    newsDate.className = 'news-date';\n    newsDate.textContent = date;\n\n    const image = document.createElement('img');\n    image.className = 'news-image';\n    image.src = imgSrc;\n    image.alt = imgAlt;\n\n    const articleHeading = document.createElement('h3');\n    articleHeading.textContent = heading;\n\n    const articleDesc = document.createElement('p');\n    articleDesc.textContent = desc;\n\n    const button = document.createElement('button');\n    button.className = 'news-button';\n    button.textContent = buttonText;\n\n    newsCard.append(newsDate, image, articleHeading, articleDesc, button);\n\n    return newsCard;\n  }\n\n  document.getElementById('content').appendChild(sectionContainer);\n  sectionContainer.append(heading, sectionTitle, newsGrid);\n  newsGrid.appendChild(createNewsCard({\n    date: \"10 Yavannië, Fourth Age 124\",\n    imgSrc: _img_feast_jpg__WEBPACK_IMPORTED_MODULE_1__,\n    imgAlt: \"Elvish harvest feast\",\n    heading: \"Annual Harvest Feast Announced\",\n    desc: \"Join us under the Mallorn trees for a night of seasonal delicacies, including honey-glazed venison and elderflower-infused Miruvor. Reservations required.\",\n    buttonText: \"Reserve Now\"\n  }));\n  newsGrid.appendChild(createNewsCard({\n    date: \"25 Víressë, Fourth Age 124\",\n    imgSrc: _img_chef_jpg__WEBPACK_IMPORTED_MODULE_0__,\n    imgAlt: \"Elvish chef Thaladir\",\n    heading: \"Chef Thaladir Wins Golden Acorn Award\",\n    desc: `Our head chef was honored for his innovative dish: \"Mallorn-leaf wrapped salmon with Lothlórien truffle sauce.\" The recipe will debut on next month's menu.`,\n    buttonText: \"View Menu\"\n  }));\n  newsGrid.appendChild(createNewsCard({\n    date: \"1 Enderi, Fourth Age 123\",\n    imgSrc: _img_cellar_jpg__WEBPACK_IMPORTED_MODULE_2__,\n    imgAlt: \"Wine cellar\",\n    heading: \"Wine Cellar Expansion Complete\",\n    desc: \"Our enchanted cellar now houses 1,000 vintages, including a rare batch of Dorwinion wine gifted by King Thranduil. Private tastings available.\",\n    buttonText: \"Book Tasting\"\n  }));\n};\n\n//# sourceURL=webpack://project-restaurant-page/./src/news.js?");

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