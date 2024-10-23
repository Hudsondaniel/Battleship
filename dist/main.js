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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body, html {\r\n    height: 100%;\r\n    margin: 0;\r\n    font-family: \"Oswald\", sans-serif;\r\n}\r\n\r\nnav{\r\n    display: flex;\r\n    align-items: center;\r\n    height: 2rem;\r\n    padding: 1rem;\r\n    background-color: rgba(233, 233, 233, 0.829);\r\n}\r\n\r\n.battleship-heading{\r\n    margin: 0;\r\n    padding-left: 1rem;\r\n    border-left: 2px solid rgba(167, 165, 165, 0.486);\r\n}\r\n\r\nnav img{\r\n    height: 1.7rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.gameboard{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    margin-right: 4rem;\r\n    margin-left: 4rem;\r\n    padding-top: 1rem;\r\n}\r\n\r\n.heading{\r\n    text-align: center;\r\n    font-size: 0.6rem;\r\n}\r\n\r\n.player-1{\r\n    padding-right: 2rem;\r\n    border-right: 1px solid rgba(167, 165, 165, 0.671);\r\n}\r\n\r\n.player-2{\r\n    padding-left: 2rem;\r\n}\r\n\r\n.heading-text-one, .heading-text-two{\r\n    font-weight: 600;\r\n    letter-spacing: 0.3rem;\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    color: white;\r\n}\r\n\r\n.heading-text-one{\r\n    background-color: #e72660fa;\r\n    border-radius: 0.3rem;\r\n    margin-right: 4vh;\r\n    margin-left: 4vh;\r\n}\r\n\r\n.heading-text-two{\r\n    background-color: #65708be3;\r\n    border-radius: 0.3rem;\r\n    margin-right: 4vh;\r\n    margin-left: 4vh;\r\n}\r\n\r\n/* Grid for the gameboard */\r\n\r\n.gameboard-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(11, 6vh);\r\n    grid-template-rows: repeat(11, 6vh);\r\n    gap: 0.4rem; \r\n}\r\n\r\n.cell {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 3px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#player1-grid .cell{\r\n    background-color: #daf2fc;\r\n}\r\n\r\n#player1-grid .cell:hover{\r\n    background-color: #a8e3fdc7;\r\n}\r\n\r\n#player2-grid .cell{\r\n    background-color: #e8e8e8;\r\n}\r\n\r\n#player2-grid .cell:hover{\r\n    background-color: #b9b9b991;\r\n}\r\n\r\n.inner-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n.header{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-weight: 800;\r\n    color: rgba(53, 53, 53, 0.596);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Game/computerAI.js":
/*!********************************!*\
  !*** ./src/Game/computerAI.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ComputerAI)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/Game/player.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/Game/ship.js\");\n\r\n\r\n\r\nclass ComputerAI extends _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name) {\r\n        super(name); // No need to pass board here, it will be created in the Player class\r\n    }\r\n\r\n    // Automatically place ships on the board\r\n    placeShipsAutomatically(shipTypes) {\r\n        shipTypes.forEach(shipType => {\r\n            let placed = false;\r\n\r\n            while (!placed) {\r\n                const position = this.getRandomPosition();\r\n                const orientation = this.getRandomOrientation();\r\n                const ship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](shipType.name, shipType.length, position, orientation);\r\n                if (this.canPlaceShip(ship)) {\r\n                    this.board.placeShip(ship.type, ship.length, ship.position, ship.direction);\r\n                    this.ships.push(ship);\r\n                    placed = true; \r\n                } else {\r\n                    //console.log(`Cannot place ${ship.name} at ${ship.position} ${orientation}, trying a new position...`);\r\n                }\r\n            }\r\n        });\r\n    }\r\n\r\n    // Check if the ship can be placed at the given position and orientation\r\n    canPlaceShip(ship) {\r\n        const [x, y] = ship.position;\r\n\r\n        //console.log(`Checking position: ${ship.position}, Orientation: ${ship.direction}`); \r\n    \r\n        if (ship.direction === 'horizontal') {\r\n            if (y + ship.length > this.board.getSize() || x >= this.board.getSize()) { \r\n                //console.log(`Out of bounds: ${x}, ${y} with length ${ship.length}`);\r\n                return false; \r\n            }\r\n\r\n            for (let i = 0; i < ship.length; i++) {\r\n                if (this.board.getCell(x, y + i) !== null) { \r\n                    //console.log(`Position occupied at: ${x}, ${y + i}`);\r\n                    return false; \r\n                }\r\n            }\r\n        } else if (ship.direction === 'vertical') {\r\n            if (x + ship.length > this.board.getSize() || y >= this.board.getSize()) {\r\n                //console.log(`Out of bounds: ${x}, ${y} with length ${ship.length}`);\r\n                return false; \r\n            }\r\n            for (let i = 0; i < ship.length; i++) {\r\n                if (this.board.getCell(x + i, y) !== null) {\r\n                    //console.log(`Position occupied at: ${x + i}, ${y}`);\r\n                    return false; \r\n                }\r\n            }\r\n        }\r\n\r\n        return true; \r\n    }\r\n\r\n    // Fire a shot at a random position on the board\r\n    fireShot() {\r\n        let shotPosition;\r\n        let hit = false;\r\n\r\n        do {\r\n            shotPosition = this.getRandomPosition();\r\n            // Check if the shot position has already been fired at\r\n            hit = !this.shotHistory.some(shot => shot.target[0] === shotPosition[0] && shot.target[1] === shotPosition[1]);\r\n\r\n            if (hit) {\r\n                // Record the shot in history\r\n                const hitResult = this.board.checkHit(shotPosition);\r\n                this.shotHistory.push({ target: shotPosition, hit: hitResult });\r\n            }\r\n        } while (!hit); // Repeat until a new shot is fired\r\n\r\n        return shotPosition; // Return the position of the shot\r\n    }\r\n\r\n    // Get a random position within the board\r\n    getRandomPosition() {\r\n        const x = Math.floor(Math.random() * this.board.getSize()); // Use getSize() for both dimensions\r\n        const y = Math.floor(Math.random() * this.board.getSize());\r\n        return [x, y];\r\n    }\r\n\r\n    // Get a random orientation for placing ships\r\n    getRandomOrientation() {\r\n        return Math.random() < 0.5 ? 'horizontal' : 'vertical'; // Randomly returns either 'horizontal' or 'vertical'\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-template/./src/Game/computerAI.js?");

/***/ }),

/***/ "./src/Game/game.js":
/*!**************************!*\
  !*** ./src/Game/game.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/Game/player.js\");\n/* harmony import */ var _computerAI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computerAI.js */ \"./src/Game/computerAI.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.js */ \"./src/Game/ship.js\");\n/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameBoard.js */ \"./src/Game/gameBoard.js\");\n\r\n\r\n\r\n\r\n\r\nclass Game {\r\n    constructor(playerName) {\r\n        this.player = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](playerName);\r\n        this.computer = new _computerAI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Computer');\r\n        this.shipTypes = [\r\n            { name: 'Battleship', length: 4 },\r\n            { name: 'Destroyer', length: 3 },\r\n            { name: 'Submarine', length: 3 },\r\n            { name: 'Patrol Boat', length: 2 },\r\n        ];\r\n        this.initializeGame();\r\n    }\r\n\r\n    initializeGame() {\r\n        this.player.placeShipsAutomatically(this.shipTypes);\r\n        this.computer.placeShipsAutomatically(this.shipTypes);\r\n    }\r\n\r\n    startGame() {\r\n        let turn = 'player';\r\n        while (!this.isGameOver()) {\r\n            if (turn === 'player') {\r\n                this.playerTurn();\r\n                turn = 'computer';\r\n            } else {\r\n                this.computerTurn();\r\n                turn = 'player';\r\n            }\r\n        }\r\n        this.declareWinner();\r\n    }\r\n\r\n    playerTurn(position) {\r\n        const target = this.getPlayerTarget();\r\n        const hit = this.computer.fireShot(target);\r\n        this.player.shotHistory.push({ target, hit });\r\n        console.log(`You fired at ${target} and ${hit ? 'hit!' : 'missed!'}`);\r\n    }\r\n\r\n    computerTurn() {\r\n        const target = this.computer.fireShot();\r\n        const hit = this.player.fireShot(target);\r\n        console.log(`Computer fired at ${target} and ${hit ? 'hit!' : 'missed!'}`);\r\n    }\r\n\r\n    getPlayerTarget(position) {\r\n        const [x, y] = position; \r\n        this.board[x][y] = 'X'; \r\n    }\r\n    \r\n\r\n    isGameOver() {\r\n        return this.player.isGameOver() || this.computer.isGameOver();\r\n    }\r\n\r\n    declareWinner() {\r\n        if (this.player.isGameOver()) {\r\n            console.log(\"Computer wins!\");\r\n        } else {\r\n            console.log(\"You win!\");\r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-template/./src/Game/game.js?");

/***/ }),

/***/ "./src/Game/gameBoard.js":
/*!*******************************!*\
  !*** ./src/Game/gameBoard.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\nclass GameBoard {\r\n    constructor(size, name) {\r\n        this.board = Array(size).fill(null).map(() => Array(size).fill(null));\r\n        this.ships = []; \r\n        this.name = name;\r\n        //this.printName();\r\n        this.size = size;\r\n    }\r\n\r\n    serializeBoard() {\r\n        return {\r\n            size: this.size,\r\n            grid: this.board\r\n        };\r\n    }\r\n\r\n    deserializeBoard(serializedData) {\r\n        this.size = serializedData.size;\r\n        this.board = serializedData.grid || serializedData.board; // Ensure correct deserialization\r\n        // console.table(this.board); \r\n    }\r\n\r\n    // Example method to display the board\r\n    printBoard() {\r\n        return this.grid;\r\n    }\r\n\r\n    printName(){\r\n        console.log(`Player ${this.name}'s Board:`);\r\n    }\r\n\r\n    placeShip(shipName, shipSize, position, direction = 'horizontal') {\r\n        const [x, y] = position;\r\n    \r\n\r\n        if (x < 0 || x >= this.board.length || y < 0 || y >= this.board[x].length) {\r\n            return false; \r\n        }\r\n    \r\n        if (direction === 'horizontal') {\r\n            if (y + shipSize > this.board[x].length) {\r\n                return false; \r\n            }\r\n            for (let i = 0; i < shipSize; i++) {\r\n                if (this.board[x][y + i] !== null) {\r\n                    return false; \r\n                }\r\n            }\r\n            for (let i = 0; i < shipSize; i++) {\r\n                this.board[x][y + i] = shipName; \r\n            }\r\n        } else if (direction === 'vertical') {\r\n            if (x + shipSize > this.board.length) {\r\n                return false; \r\n            }\r\n            for (let i = 0; i < shipSize; i++) {\r\n                if (this.board[x + i][y] !== null) {\r\n                    return false; \r\n                }\r\n            }\r\n            for (let i = 0; i < shipSize; i++) {\r\n                this.board[x + i][y] = shipName; \r\n            }\r\n        }\r\n\r\n        this.ships.push(shipName); \r\n        return true; \r\n    }\r\n    \r\n\r\n    checkHit(target) {\r\n        const [x, y] = target; \r\n        this.board[x][y] = 'X';\r\n    }\r\n\r\n\r\n    isGameOver() {\r\n        return this.ships.every(ship => ship.isSunk());\r\n    }\r\n\r\n    clearBoard() {\r\n        this.board = Array(this.board.length).fill(null).map(() => Array(this.board[0].length).fill(null));\r\n        this.ships = [];\r\n    }\r\n\r\n    getShipsSunkCount() {\r\n        return this.ships.filter(ship => ship.isSunk()).length;\r\n    }\r\n\r\n    getShipsLeftCount() {\r\n        return this.ships.filter(ship => !ship.isSunk()).length;\r\n    }\r\n\r\n    getShipsOnBoard() {\r\n        return this.ships;\r\n    }\r\n    getSize() {\r\n        return this.size; \r\n    }\r\n\r\n    getCell(x, y) {\r\n        if (x < 0 || x >= this.size || y < 0 || y >= this.size) {\r\n            return null; \r\n        }\r\n        return this.board[x][y]; \r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-template/./src/Game/gameBoard.js?");

/***/ }),

/***/ "./src/Game/gameBoardUI.js":
/*!*********************************!*\
  !*** ./src/Game/gameBoardUI.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createGameBoard)\n/* harmony export */ });\nfunction createGameBoard(gridContainerId, boardSize) {\r\n    const gameboardElement = document.querySelector(`#${gridContainerId}`);\r\n    const letters = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'; \r\n\r\n    // Create the board grid with headers (A1, B2, etc.)\r\n    for (let i = 0; i <= boardSize; i++) {\r\n        for (let j = 0; j <= boardSize; j++) {\r\n            const cell = document.createElement('div');\r\n            \r\n            // Create the column headers (A, B, C, ...)\r\n            if (i === 0 && j > 0) {\r\n                cell.classList.add('header');\r\n                cell.textContent = letters[j]; // Column headers\r\n            }\r\n            // Create the row headers (1, 2, 3, ...)\r\n            else if (j === 0 && i > 0) {\r\n                cell.classList.add('header');\r\n                cell.textContent = i; // Row headers\r\n            }\r\n            // Create the actual grid cells\r\n            else if (i > 0 && j > 0) {\r\n                cell.classList.add('cell');\r\n                cell.dataset.x = i - 1; // Adjust to 0-based index\r\n                cell.dataset.y = j - 1;\r\n            }\r\n\r\n            gameboardElement.appendChild(cell);\r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-template/./src/Game/gameBoardUI.js?");

/***/ }),

/***/ "./src/Game/player.js":
/*!****************************!*\
  !*** ./src/Game/player.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.js */ \"./src/Game/gameBoard.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/Game/ship.js\");\n\r\n\r\n\r\nclass Player {\r\n    constructor(name, ships = []) {\r\n        this.name = name;\r\n        this.board = this.createBoard(10); \r\n        this.ships = ships;\r\n        this.shotHistory = [];\r\n    }\r\n\r\n\r\n    saveGameState(){\r\n        // Custom serialization to extract the essential information\r\n        const gameState = {\r\n            name: this.name,\r\n            board: this.board.serializeBoard(), // We will define this method below\r\n            ships: this.ships.map(ship => ({\r\n                type: ship.type,\r\n                length: ship.length,\r\n                position: ship.position,\r\n                direction: ship.direction\r\n            })),\r\n            shotHistory: this.shotHistory\r\n        };\r\n    \r\n        localStorage.setItem(this.name, JSON.stringify(gameState));\r\n        //console.log(\"Game saved:\", localStorage.getItem(\"gameState\"));\r\n    }\r\n    \r\n    loadGameState(){\r\n        const savedGameState = JSON.parse(localStorage.getItem(this.name));\r\n        if (savedGameState) {\r\n            // Reconstruct board\r\n            this.board = new _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, this.name);\r\n            this.board.deserializeBoard(savedGameState.board);  // Custom deserialization method\r\n            \r\n            // Reconstruct ships\r\n            this.ships = savedGameState.ships.map(shipData => new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](shipData.type, shipData.length, shipData.position, shipData.direction));\r\n    \r\n            // Restore shot history\r\n            this.shotHistory = savedGameState.shotHistory;\r\n            console.log(this.name)\r\n            console.table(\"Game loaded:\", this.board.board, this.ships, this.shotHistory);\r\n            console.table(this.board.board)\r\n        } else {\r\n            console.log(\"No saved game found.\");\r\n        }\r\n    }\r\n    \r\n\r\n    playerShips(){\r\n        this.ships.forEach(\r\n            ship => console.log(ship)\r\n        )\r\n    }\r\n    createBoard(size, name) {\r\n        const newBoard = new _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](size, this.name);\r\n        return newBoard;\r\n    }\r\n\r\n    placeShipPlayer() {\r\n        this.ships.forEach(\r\n            ship => this.board.placeShip(ship.type, ship.length, ship.position, ship.direction)\r\n        );\r\n    }\r\n\r\n    fireShot(target) {\r\n        // const hit = this.board.checkHit(target); \r\n        this.board.checkHit(target);\r\n        // this.shotHistory.push({ target, hit }); \r\n        // return hit; \r\n\r\n    }\r\n\r\n    isSunk() {\r\n        return this.ships.every(ship => ship.isSunk()); \r\n    }\r\n\r\n    getShipsLeft() {\r\n        return this.ships.filter(ship => !ship.isSunk()).length; \r\n    }\r\n\r\n    getBoard() {\r\n        return this.board;\r\n    }\r\n\r\n    getName() {\r\n        console.log(this.name);\r\n    }\r\n\r\n    getScore() {\r\n        return this.shotHistory.filter(shot => shot.hit).length; \r\n    }\r\n\r\n    getHealth() {\r\n        return this.ships.reduce((total, ship) => total + ship.getHealth(), 0); \r\n    }\r\n\r\n    isGameOver() {\r\n        return this.getShipsLeft() === 0; \r\n    }\r\n\r\n    getRemainingShots() {\r\n        return 100 - this.shotHistory.length; \r\n    }\r\n\r\n    // Returns the current game status\r\n    getGameStatus() {\r\n        return {\r\n            score: this.getScore(),\r\n            shipsLeft: this.getShipsLeft(),\r\n            health: this.getHealth(),\r\n            remainingShots: this.getRemainingShots(),\r\n            isGameOver: this.isGameOver(),\r\n        };\r\n    }\r\n\r\n    // Returns the history of all shots made by the player\r\n    getShotHistory() {\r\n        return this.shotHistory;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-template/./src/Game/player.js?");

/***/ }),

/***/ "./src/Game/ship.js":
/*!**************************!*\
  !*** ./src/Game/ship.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\r\n    constructor(type, length, position, direction) {\r\n        this.type = type; \r\n        this.length = length; \r\n        this.position = position; \r\n        this.direction = direction;\r\n        this.hits = 0; \r\n    }\r\n\r\n    hit() {\r\n        this.hits++; \r\n        if (this.isSunk()) {\r\n            console.log(`${this.type} ship sunk!`);\r\n        } else {\r\n            console.log(`${this.type} ship hit!`);\r\n        }\r\n    }\r\n    isSunk() {\r\n        return this.hits >= this.length;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-template/./src/Game/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Game_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game/game.js */ \"./src/Game/game.js\");\n/* harmony import */ var _Game_gameBoardUI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game/gameBoardUI.js */ \"./src/Game/gameBoardUI.js\");\n/* harmony import */ var _Game_player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game/player.js */ \"./src/Game/player.js\");\n/* harmony import */ var _Game_ship_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Game/ship.js */ \"./src/Game/ship.js\");\n/* harmony import */ var _Game_computerAI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Game/computerAI.js */ \"./src/Game/computerAI.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_Game_gameBoardUI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('player1-grid', 10);  \r\n(0,_Game_gameBoardUI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('player2-grid', 10);\r\n\r\nconst playerOneBoard = new _Game_player_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Hudson\", [\r\n    new _Game_ship_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('Carrier', 5, [0, 0], 'vertical'),      \r\n    new _Game_ship_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('Battleship', 4, [0, 3], 'horizontal'), \r\n    new _Game_ship_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('Destroyer', 3, [6, 0], 'vertical'),    \r\n    new _Game_ship_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('Submarine', 3, [4, 4], 'horizontal'),  \r\n    new _Game_ship_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('Patrol Boat', 2, [7, 7], 'vertical'),  \r\n]);\r\n\r\nplayerOneBoard.placeShipPlayer();\r\n\r\nconst computerPlayer = new _Game_computerAI_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('computer');\r\ncomputerPlayer.placeShipsAutomatically([\r\n    {name: 'carrier', length: 5},\r\n    {name: 'Battleship', length: 4},\r\n    {name: 'Destroyer', length: 3},\r\n    {name: 'Submarine', length: 3},\r\n    {name: 'Patrol Boat', length: 2}\r\n]);\r\n\r\nfunction initialize() {\r\n    const playerOneState = localStorage.getItem(playerOneBoard.getName());\r\n    const computerPlayerState = localStorage.getItem(computerPlayer.getName());\r\n\r\n    if (!playerOneState) {\r\n        playerOneBoard.saveGameState();\r\n    }\r\n    \r\n    if (!computerPlayerState) {\r\n        computerPlayer.saveGameState();\r\n    }\r\n\r\n    return true;\r\n}\r\n\r\n// Call initialize first\r\ninitialize();\r\n\r\n// Load game states for both players\r\nplayerOneBoard.loadGameState();\r\ncomputerPlayer.loadGameState();\r\n// Player hits computer board\r\n\r\nplayerOneBoard.fireShot([0,1]);\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-template/./src/index.js?");

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