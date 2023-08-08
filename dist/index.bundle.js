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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  margin: 0;\r\n  font-family: \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  background-color: #FAFAFA;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n}\r\n\r\n.header-container {\r\n  position: relative;\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 50px;\r\n  background-color: #ef233c;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, .15);\r\n}\r\n\r\n.header-container > h2 {\r\n  font-family: \"Rem\";\r\n  margin: 0 30px;\r\n}\r\n\r\n.header-container > svg {\r\n  height: 30px;\r\n  margin: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.sidebar-container {\r\n  background-color: #edf2f4;\r\n  width: clamp(150px, 20vw, 300px);\r\n  padding: 10px;\r\n  height: 100vh;\r\n  box-sizing: border-box;\r\n  transition: all .2s ease-out;\r\n}\r\n\r\n.slideable {\r\n  width: 0;\r\n  padding: 0;\r\n}\r\n\r\n.slideable * {\r\n  display: none;\r\n}\r\n\r\n.projects-tab {\r\n  position: relative;\r\n  z-index: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background-color: #d7dcde;\r\n  width: 100%;\r\n  height: 35px;\r\n  border-radius: 7px;\r\n  cursor: pointer;\r\n}\r\n\r\n.projects-tab > p {\r\n  margin: 10px;\r\n}\r\n\r\n.projects-tab > svg {\r\n  height: 20px;\r\n  margin: 0 10px;\r\n  transform: rotate(180deg);\r\n  transition: .2s all;\r\n}\r\n\r\n.all-projects-container {\r\n  background-color: #fafafa;\r\n  border: 1px solid #d7dcde;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, .05);\r\n  border-top: none;\r\n  border-bottom-left-radius: 7px;\r\n  border-bottom-right-radius: 7px;\r\n  margin: 0 10px;\r\n}\r\n\r\n.project-container {\r\n  display: flex;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  height: 0;\r\n  transition: .3s ease-in-out;\r\n  transition-property: height, padding;\r\n}\r\n\r\n.project-container:not(.project-container:last-child) {\r\n  border-bottom: 1px solid #d7dcde;\r\n}\r\n\r\n.project-container:not(.project-container:first-child) {\r\n  border-top: 1px solid #d7dcde;\r\n}\r\n\r\n.project-container > p {\r\n  margin: 0 20px;\r\n}\r\n\r\n.project-container:hover {\r\n  cursor: pointer;\r\n  background-color: #e5eaec;\r\n}\r\n\r\n.inbox-tab {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 5px 0;\r\n  width: 100%;\r\n  height: 35px;\r\n  border-radius: 7px;\r\n  cursor: pointer;\r\n}\r\n\r\n.inbox-tab:hover {\r\n  background-color: #d7dcde;\r\n}\r\n\r\n.inbox-tab > svg {\r\n  height: 20px;\r\n  margin: 0 10px;\r\n}\r\n\r\n.project-container.expandable {\r\n  height: 20px;\r\n  padding: 10px 0;\r\n}\r\n\r\n.sidebar-panel-container {\r\n  display: flex;\r\n}\r\n\r\n.panel-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 20px;\r\n  padding-left: 60px;\r\n}\r\n\r\n.panel-container > * {\r\n  margin: 20px 0;\r\n}\r\n\r\n.todo-container {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr repeat(2, auto);\r\n  grid-template-rows: auto 0;\r\n  column-gap: 10px;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  padding: 15px 20px;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  border-radius: 10px;\r\n  border: 1px solid #c8c8c8;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, .05);\r\n  overflow: hidden;\r\n  transition: all .2s;\r\n}\r\n\r\n.todo-container > .check-mark-container {\r\n  height: 15px;\r\n  width: 15px;\r\n  grid-row: 1 / 3;\r\n  border-radius: 50%;\r\n  border: 2px solid #696969;\r\n  background-color: #fafafa;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-container > .check-mark-container:hover {\r\n  background-color: #e9e9e9;\r\n}\r\n\r\n.todo-container > svg {\r\n  height: 25px;\r\n  width: 25px;\r\n  transform: rotate(180deg);\r\n  transition: transform .2s;\r\n}\r\n\r\n.todo-container > .todo-desc {\r\n  grid-column: 2;\r\n  grid-row: 2;\r\n  margin-top: 20px;\r\n  align-self: start;\r\n}\r\n\r\n.todo-container.expandable {\r\n  grid-template-rows: auto 80px;\r\n}\r\n\r\n.todo-container.expandable > svg {\r\n  transform: rotate(0deg);\r\n}\r\n\r\n.todo-form-btn-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-width: 2px;\r\n  background-image: linear-gradient(#3b3e5d, #2b2d42);\r\n  border-color: #161723;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, .15);\r\n}\r\n\r\n.todo-form-btn-container > svg {\r\n  fill: white;\r\n  transition: all .2s;\r\n}\r\n\r\n.todo-form-btn-container:hover > svg {\r\n  height: 30px;\r\n  width: 30px;\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.todo-form-btn-container > p {\r\n  color: white;\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n  transition: font-size .2s;\r\n}\r\n\r\n.todo-form-btn-container:hover > p {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.todo-form-container {\r\n  height: 80vh;\r\n  width: 70vh;\r\n  background-color: white;\r\n  border-radius: 10px;\r\n}\r\n\r\n\r\n.darken-body-div {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, .8);\r\n  animation: .5s fadeIn;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fadeOut {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes slideCenterIn {\r\n  0% {\r\n    transform: scale(0) rotate(15deg);\r\n  }\r\n  100% {\r\n    transform: scale(1) rotate(0deg);\r\n  }\r\n}\r\n\r\n@keyframes slideCenterOut {\r\n  0% {\r\n    transform: scale(1) rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: scale(0) rotate(-15deg);\r\n  }\r\n\r\n}\r\n\r\n.panel-form-container {\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-rows: auto auto 1fr;\r\n  justify-items: center;\r\n  align-items: center;\r\n  row-gap: 10px;\r\n  padding: 10px;\r\n  height: 80vh;\r\n  width: 50vw;\r\n  background-color: #fafafa;\r\n  border-radius: 10px;\r\n  border: 5px solid #c8c8c8;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, .15);\r\n  animation: .5s slideCenterIn;\r\n}\r\n\r\n.close-form-btn {\r\n  justify-self: end;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n  padding: 10px 20px;\r\n  width: 50px;\r\n  color: white;\r\n  background-image: linear-gradient(#3b3e5d, #2b2d42);\r\n  border: 1px solid #161723;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, .15);\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n}\r\n\r\n.panel-form-container > h1 {\r\n  justify-self: center;\r\n}\r\n\r\n.form-input-container {\r\n  display: grid;\r\n  grid-template-rows: auto 1fr auto;\r\n  grid-template-columns: 1fr auto;\r\n  row-gap: 10px;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 10px;\r\n  margin: 10px;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  background-color: #f1f1f1;\r\n  border: 1px solid #c8c8c8;\r\n}\r\n\r\n.input-container {\r\n  border: 0;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  font-family: \"Inter\", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n.input-container {\r\n  outline: 0;\r\n}\r\n\r\n.title-input {\r\n  font-weight: bold;\r\n}\r\n\r\n.desc-input {\r\n  grid-row: 2;\r\n  grid-column: 1 / 3;\r\n  resize: none;\r\n}\r\n\r\n.date-input {\r\n  justify-content: center;\r\n  border: 1px solid #c8c8c8;\r\n  background-color: #fafafa;\r\n  border-radius: 3px;\r\n  padding: 2px 3px;\r\n}\r\n\r\n.priority-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n#priority-input {\r\n  appearance: none;\r\n  background-color: red;\r\n  border: 1px solid rgb(204, 5, 5);\r\n  border-radius: 50%;\r\n  height: 15px;\r\n  width: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.select-options {\r\n  background-color: red;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my_package/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my_package/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my_package/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/inbox.svg":
/*!******************************!*\
  !*** ./src/assets/inbox.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z\\\" /></svg>\");\n\n//# sourceURL=webpack://my_package/./src/assets/inbox.svg?");

/***/ }),

/***/ "./src/assets/menu-down.svg":
/*!**********************************!*\
  !*** ./src/assets/menu-down.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\\\" /></svg>\");\n\n//# sourceURL=webpack://my_package/./src/assets/menu-down.svg?");

/***/ }),

/***/ "./src/assets/menu.svg":
/*!*****************************!*\
  !*** ./src/assets/menu.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z\\\" /></svg>\");\n\n//# sourceURL=webpack://my_package/./src/assets/menu.svg?");

/***/ }),

/***/ "./src/assets/plus-circle-outline.svg":
/*!********************************************!*\
  !*** ./src/assets/plus-circle-outline.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z\\\" /></svg>\");\n\n//# sourceURL=webpack://my_package/./src/assets/plus-circle-outline.svg?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my_package/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my_package/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my_package/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my_package/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my_package/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my_package/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my_package/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/formView.js":
/*!*************************!*\
  !*** ./src/formView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst formPanel = (() => {\r\n  let darkenBodyDiv;\r\n\r\n  function displayFormContainer() {\r\n    darkenBodyDiv = document.createElement(\"div\");\r\n    darkenBodyDiv.classList.add(\"darken-body-div\");\r\n\r\n    const panelFormContainer = document.createElement(\"div\");\r\n    panelFormContainer.classList.add(\"panel-form-container\");\r\n    panelFormContainer.append(addCloseBtn(), addTodoHeading(), addFormInputPanel());\r\n    darkenBodyDiv.appendChild(panelFormContainer);\r\n\r\n    function addCloseBtn() {\r\n      const closeBtn = document.createElement(\"btn\");\r\n      closeBtn.textContent = \"Close\";\r\n      closeBtn.classList.add(\"close-form-btn\");\r\n      formPanelLogic.listenCloseBtn(closeBtn);\r\n\r\n      return closeBtn;\r\n    }\r\n\r\n    function addTodoHeading() {\r\n      const todoHeading = document.createElement(\"h1\");\r\n      todoHeading.textContent = \"TODO\";\r\n\r\n      return todoHeading;\r\n    }\r\n\r\n    function addFormInputPanel() {\r\n      const form = document.createElement(\"form\");\r\n      form.classList.add(\"form-input-container\");\r\n      form.append(addTitleInput(), addDueDate(), addDescInput(), addPriorityDiv());\r\n\r\n      function addTitleInput() {\r\n        const titleInput = document.createElement(\"input\");\r\n        titleInput.classList.add(\"input-container\");\r\n        titleInput.classList.add(\"title-input\");\r\n        titleInput.placeholder = \"Title*\";\r\n\r\n        return titleInput;\r\n      }\r\n\r\n      function addDueDate() {\r\n        const dateInput = document.createElement(\"input\");\r\n        dateInput.classList.add(\"input-container\");\r\n        dateInput.classList.add(\"date-input\");\r\n        dateInput.type = \"datetime-local\";\r\n\r\n        return dateInput;\r\n      }\r\n\r\n      function addDescInput() {\r\n        const descInput = document.createElement(\"textarea\");\r\n        descInput.classList.add(\"input-container\");\r\n        descInput.classList.add(\"desc-input\");\r\n        descInput.placeholder = \"Description\";\r\n\r\n        return descInput;\r\n      }\r\n\r\n      function addPriorityDiv() {\r\n        const priorityDiv = document.createElement(\"div\");\r\n        priorityDiv.classList.add(\"priority-container\");\r\n        priorityDiv.append(addPriorityLabel(), addPriorityInput());\r\n\r\n        function addPriorityLabel() {\r\n          const priorityLabel = document.createElement(\"label\");\r\n          priorityLabel.setAttribute(\"for\", \"priority-input\");\r\n          priorityLabel.textContent = \"Priority: \";\r\n          return priorityLabel;\r\n        }\r\n\r\n        function addPriorityInput() {\r\n          const prioritySelect = document.createElement(\"div\");\r\n          prioritySelect.classList.add(\"input-container\");\r\n          prioritySelect.setAttribute(\"id\", \"priority-input\");\r\n          // formPanelLogic.listenPriorityInput(prioritySelect);\r\n\r\n          return prioritySelect;\r\n        }\r\n\r\n        return priorityDiv;\r\n      }\r\n\r\n\r\n      return form;\r\n    }\r\n    return darkenBodyDiv;\r\n  }\r\n\r\n  function getFormContainer() {\r\n    return darkenBodyDiv;\r\n  }\r\n\r\n  return {displayFormContainer, getFormContainer};\r\n})()\r\n\r\nconst formPanelLogic = (() => {\r\n  function listenCloseBtn(closeBtn) {\r\n    closeBtn.addEventListener('click', () => {\r\n      const darkenBodyDiv = formPanel.getFormContainer();\r\n      const panelFormContainer = darkenBodyDiv.querySelector(\".panel-form-container\");\r\n      panelFormContainer.style.animation = \".5s slideCenterOut\";\r\n      darkenBodyDiv.style.animation = \".5s fadeOut\";\r\n      setTimeout(() => {\r\n        darkenBodyDiv.remove();\r\n        panelFormContainer.remove();\r\n        console.log(\"removing\");\r\n      }, 495);\r\n    })\r\n  }\r\n\r\n  // function listenPriorityInput(priorityInput) {\r\n  //   priorityInput.addEventListener(\"click\", () => {\r\n\r\n  //   })\r\n  // }\r\n\r\n  return {listenCloseBtn};\r\n})()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formPanel);\n\n//# sourceURL=webpack://my_package/./src/formView.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_menu_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/menu.svg */ \"./src/assets/menu.svg\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n\r\n\r\n\r\nconst header = (() => {\r\n  let menuSvg;\r\n\r\n  function addContent() {\r\n    const headerContainer = document.createElement(\"div\");\r\n    headerContainer.classList.add(\"header-container\");\r\n    headerContainer.innerHTML += _assets_menu_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\n    headerContainer.appendChild(addSlogan());\r\n\r\n    return headerContainer;\r\n  }\r\n\r\n  function addSlogan() {\r\n    const h2 = document.createElement(\"h2\");\r\n    h2.textContent = \"todowht\";\r\n\r\n    return h2;\r\n  }\r\n\r\n  function listenMenuSvg(headerContainer, sidebarContainer) {\r\n    menuSvg = headerContainer.querySelector(\"svg\");\r\n    menuSvg.addEventListener(\"click\", () => {\r\n      (0,_sidebar__WEBPACK_IMPORTED_MODULE_1__.slideSidebarContainer)(sidebarContainer);\r\n    });\r\n  }\r\n\r\n  return {addContent, listenMenuSvg};\r\n})();\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://my_package/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n  (0,_pageload__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n})\n\n//# sourceURL=webpack://my_package/./src/index.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addPage)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n/* harmony import */ var _todoView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoView */ \"./src/todoView.js\");\n\r\n\r\n\r\n\r\nfunction addPage() {\r\n  const htmlContainer = document.querySelector(\"#content\");\r\n  const sidebarPanelContainer = document.createElement(\"div\");\r\n  sidebarPanelContainer.classList.add(\"sidebar-panel-container\");\r\n\r\n  const headerContainer = _header__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addContent();\r\n  const sidebarContainer = _sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addContent();\r\n  const panelContainer = _todoView__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addContent();\r\n  _header__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listenMenuSvg(headerContainer, sidebarContainer);\r\n  htmlContainer.append(headerContainer, sidebarPanelContainer);\r\n  sidebarPanelContainer.append(sidebarContainer, panelContainer);\r\n}\n\n//# sourceURL=webpack://my_package/./src/pageload.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   slideSidebarContainer: () => (/* binding */ slideSidebarContainer)\n/* harmony export */ });\n/* harmony import */ var _assets_inbox_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/inbox.svg */ \"./src/assets/inbox.svg\");\n/* harmony import */ var _assets_menu_down_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/menu-down.svg */ \"./src/assets/menu-down.svg\");\n/* harmony import */ var _todoView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoView */ \"./src/todoView.js\");\n\r\n\r\n\r\n\r\nlet sidebarContainer;\r\nlet menuSvg;\r\nlet projectsTab;\r\nlet projectsContainer = [];\r\n\r\nconst sidebar = (() => {\r\n  function addContent() {\r\n    sidebarContainer = document.createElement(\"div\");\r\n    sidebarContainer.classList.add(\"sidebar-container\");\r\n\r\n    sidebarContainer.append(addInboxTab(), project.addProjectsTab(), project.addProjects());\r\n\r\n    return sidebarContainer;\r\n  }\r\n\r\n  function addInboxTab() {\r\n    const inboxTab = document.createElement(\"div\");\r\n    inboxTab.classList.add(\"inbox-tab\");\r\n    inboxTab.setAttribute(\"data-project-id\", 0);\r\n    inboxTab.innerHTML = _assets_inbox_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\n    const p = document.createElement(\"p\");\r\n    p.textContent = \"Inbox\";\r\n    inboxTab.appendChild(p);\r\n    sidebarHandler.listenInboxTab(inboxTab);\r\n\r\n    return inboxTab;\r\n  }\r\n\r\n  return {addContent};\r\n})();\r\n\r\nconst project = (() => {\r\n\r\n  function addProjectsTab() {\r\n    projectsTab = document.createElement(\"div\");\r\n    projectsTab.classList.add(\"projects-tab\");\r\n\r\n    const p = document.createElement(\"p\");\r\n    p.textContent = \"Projects\";\r\n    projectsTab.appendChild(p);\r\n    addProjectsTabSvg();\r\n\r\n    return projectsTab;\r\n  }\r\n\r\n  const addProjectsTabSvg = () => {\r\n    projectsTab.innerHTML += _assets_menu_down_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n    menuSvg = projectsTab.querySelector(\"svg\");\r\n    menuSvg.style.transform = \"rotate(180deg)\";\r\n  }\r\n\r\n  function addProjects() {\r\n    const allProjectsContainer = document.createElement(\"div\");\r\n    allProjectsContainer.classList.add(\"all-projects-container\");\r\n\r\n    addProjectContent().forEach(projectContent => {\r\n      allProjectsContainer.appendChild(projectContent);\r\n    });\r\n    sidebarHandler.listenProjectsTabEvent();\r\n\r\n    return allProjectsContainer;\r\n  }\r\n\r\n  function addProjectContent() {\r\n    const projectContainer1 = document.createElement(\"div\");\r\n    projectContainer1.classList.add(\"project-container\");\r\n\r\n    const p1 = document.createElement(\"p\");\r\n    p1.textContent = \"Work\";\r\n    projectContainer1.appendChild(p1);\r\n    projectContainer1.setAttribute(\"data-project-id\", 1);\r\n\r\n    const projectContainer2 = document.createElement(\"div\");\r\n    projectContainer2.classList.add(\"project-container\");\r\n\r\n    const p2 = document.createElement(\"p\");\r\n    p2.textContent = \"Self\";\r\n    projectContainer2.appendChild(p2);\r\n    projectContainer2.setAttribute(\"data-project-id\", 2);\r\n\r\n    const projectContainer3 = document.createElement(\"div\");\r\n    projectContainer3.classList.add(\"project-container\");\r\n\r\n    const p3 = document.createElement(\"p\");\r\n    p3.textContent = \"smh\";\r\n    projectContainer3.appendChild(p3);\r\n    projectContainer3.setAttribute(\"data-project-id\", 3);\r\n\r\n    projectsContainer.splice(0, 0, projectContainer1, projectContainer2, projectContainer3);\r\n\r\n    return [projectContainer1, projectContainer2, projectContainer3];\r\n  }\r\n\r\n  return {addProjectsTab, addProjects, addProjectContent}\r\n})();\r\n\r\nconst sidebarHandler = (() => {\r\n\r\n  function listenInboxTab(inboxTab) {\r\n    inboxTab.addEventListener(\"click\", () => {\r\n      _todoView__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addContent(0);\r\n    });\r\n  }\r\n\r\n  function slideSidebarContainer(sidebarContainer) {\r\n    if (sidebarContainer.classList.contains(\"slideable\")) {\r\n      sidebarContainer.classList.remove(\"slideable\");\r\n    } else if (!sidebarContainer.classList.contains(\"slideable\")) {\r\n      sidebarContainer.classList.add(\"slideable\");\r\n    }\r\n  }\r\n\r\n  function listenProjectsTabEvent() {\r\n    projectsTab.addEventListener(\"click\", () => {\r\n      projectsContainer.forEach(projectContainer => {\r\n        if (projectContainer.classList.contains(\"expandable\")) {\r\n          projectContainer.classList.remove(\"expandable\");\r\n        } else {\r\n          projectContainer.classList.add(\"expandable\");\r\n        }\r\n      })\r\n      changeMenuSvgState();\r\n    })\r\n  }\r\n\r\n  function changeMenuSvgState() {\r\n    if (menuSvg.style.transform === \"rotate(180deg)\") {\r\n      menuSvg.style.transform = \"rotate(0deg)\";\r\n    } else if (menuSvg.style.transform === \"rotate(0deg)\") {\r\n      menuSvg.style.transform = \"rotate(180deg)\";\r\n    }\r\n  }\r\n\r\n  return {listenInboxTab, listenProjectsTabEvent, slideSidebarContainer};\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);\r\nconst slideSidebarContainer = sidebarHandler.slideSidebarContainer;\n\n//# sourceURL=webpack://my_package/./src/sidebar.js?");

/***/ }),

/***/ "./src/todoView.js":
/*!*************************!*\
  !*** ./src/todoView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_menu_down_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/menu-down.svg */ \"./src/assets/menu-down.svg\");\n/* harmony import */ var _assets_plus_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/plus-circle-outline.svg */ \"./src/assets/plus-circle-outline.svg\");\n/* harmony import */ var _formView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formView */ \"./src/formView.js\");\n\r\n\r\n\r\n\r\nconst panel = (() => {\r\n  let currentProjectId = false;\r\n\r\n  function addContent(projectId=0) {\r\n    currentProjectId = projectId;\r\n    return getProperPanelDisplay();\r\n\r\n    function getProperPanelDisplay() {\r\n      const panelContainer = document.createElement(\"div\");\r\n      panelContainer.classList.add(\"panel-container\");\r\n\r\n      if (currentProjectId === 0) {\r\n        const h1 = document.createElement(\"h1\");\r\n        h1.textContent = \"Inbox\";\r\n\r\n        const hr = document.createElement(\"hr\");\r\n\r\n        panelContainer.append(h1, hr);\r\n        todo.addTodoContent(panelContainer);\r\n      }\r\n\r\n\r\n      return panelContainer;\r\n    }\r\n  }\r\n\r\n  const todo = (() => {\r\n    function addTodoContent(panelContainer) {\r\n      addTodoTemplateContent();\r\n\r\n      let inboxProjectTodos = todoLogic.objects.getProjectsTodoListObj()[0];\r\n      panelContainer.appendChild(addTodoFormBtnLink());\r\n\r\n      inboxProjectTodos.forEach(todoData => {\r\n        const todoContainer = document.createElement(\"div\");\r\n        todoContainer.classList.add(\"todo-container\");\r\n\r\n        const checkMarkContainer = document.createElement(\"div\");\r\n        checkMarkContainer.classList.add(\"check-mark-container\");\r\n\r\n        const title = document.createElement(\"p\");\r\n        title.textContent = todoData.title;\r\n\r\n        const dueDate = document.createElement(\"p\");\r\n        dueDate.textContent = todoData.dueDate;\r\n\r\n        todoContainer.append(checkMarkContainer, title, dueDate);\r\n        todoContainer.innerHTML += _assets_menu_down_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\n        const desc = document.createElement(\"p\");\r\n        desc.classList.add(\"todo-desc\");\r\n        desc.textContent = todoData.desc;\r\n        todoContainer.appendChild(desc);\r\n        todoLogic.listeners.listenTodoContainer(todoContainer, desc);\r\n\r\n        panelContainer.appendChild(todoContainer);\r\n      })\r\n    }\r\n\r\n    function addTodoFormBtnLink() {\r\n      const todoFormBtnContainer = document.createElement(\"div\");\r\n      todoFormBtnContainer.classList.add(\"todo-container\");\r\n      todoFormBtnContainer.classList.add(\"todo-form-btn-container\");\r\n\r\n      const plusCircleSvg = _assets_plus_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n      todoFormBtnContainer.innerHTML = plusCircleSvg;\r\n\r\n      const p = document.createElement(\"p\");\r\n      p.textContent = \"ADD TODO\";\r\n      todoFormBtnContainer.appendChild(p);\r\n      todoLogic.listeners.listenTodoBtnFormContainer(todoFormBtnContainer);\r\n\r\n      return todoFormBtnContainer;\r\n    }\r\n\r\n    function addTodoTemplateContent() {\r\n      let currentTodoObj = todoLogic.objects.addTodoObj(\r\n        \"Master Plan of Achievements: Today's Tasks\",\r\n        \"Stay organized and on top of your tasks with this comprehensive to-do list. Whether you're tackling work assignments.\",\r\n        \"18/09/24\");\r\n\r\n      todoLogic.objects.addProjectTodoList(0, currentTodoObj);\r\n\r\n      currentTodoObj = todoLogic.objects.addTodoObj(\r\n        \"TaskTrek: Navigating Your Day's Endeavors\",\r\n        \"Effortlessly manage tasks, boost productivity, and achieve more with TaskTrek.\",\r\n        \"28/11/23\");\r\n\r\n      todoLogic.objects.addProjectTodoList(0, currentTodoObj);\r\n\r\n      currentTodoObj = todoLogic.objects.addTodoObj(\r\n        \"Spectrum Serenade: Echoes of Imagination\",\r\n        \"Embark on a vivid journey through diverse realms of creativity in Spectrum Serenade.\",\r\n        \"13/07/25\");\r\n\r\n      todoLogic.objects.addProjectTodoList(0, currentTodoObj);\r\n\r\n      currentTodoObj = todoLogic.objects.addTodoObj(\r\n        \"Whispering Shadows: Secrets Unveiled\",\r\n        \"Delve into a gripping tale of intrigue and discovery as Whispering Shadows reveals hidden truths.\");\r\n\r\n      todoLogic.objects.addProjectTodoList(0, currentTodoObj);\r\n    }\r\n\r\n    return {addTodoContent, addTodoFormBtnLink, addTodoTemplateContent};\r\n  })()\r\n\r\n  return {addContent, todo};\r\n})();\r\n\r\nconst todoLogic = (() => {\r\n  let projectsTodoListObj = {};\r\n\r\n  const objects = (() => {\r\n    function getProjectsTodoListObj() {\r\n      return projectsTodoListObj;\r\n    }\r\n\r\n    function addProjectTodoList(projectId, todoObj) {\r\n      projectId = String(projectId);\r\n      if (!(projectId in projectsTodoListObj)) {\r\n        projectsTodoListObj[projectId] = [todoObj];\r\n      } else {\r\n        projectsTodoListObj[projectId].push(todoObj);\r\n      }\r\n    }\r\n\r\n    function addTodoObj(title, desc=\"\", dueDate=null, priority=0, isDone=false) {\r\n      if (desc.length >= 160) {\r\n        throw new Error(\"Description is longer than 160 characters!\");\r\n      } else if (title.length <= 3 || title.length >= 60) {\r\n        throw new Error(\"title is less than 3 characters or longer than 60 characters!\");\r\n      } else if (dueDate !== null && !matchValidDate(dueDate)) {\r\n        throw new Error(\"Invalid date format!\");\r\n      }\r\n\r\n      const toStr = () => {\r\n        return `Current todo: \\\"${this.title}\\\", desc: \\\"${this.desc}\\\", due in ${this.dueDate} of priority ${priority}`;\r\n      }\r\n\r\n      return {title, desc, dueDate, priority, isDone, toStr};\r\n    }\r\n\r\n    return {getProjectsTodoListObj, addProjectTodoList, addTodoObj};\r\n  })();\r\n\r\n  const listeners = (() => {\r\n    function listenTodoContainer(todoContainer, todoDesc) {\r\n      todoContainer.addEventListener(\"click\", () => {\r\n        if (!todoContainer.classList.contains(\"expandable\")) {\r\n          todoContainer.classList.add(\"expandable\");\r\n          listenTodoDesc(todoContainer, todoDesc);\r\n        } else {\r\n          todoContainer.classList.remove(\"expandable\");\r\n\r\n          // removes inline styling from js\r\n          todoContainer.style.gridTemplateRows = null;\r\n        }\r\n      });\r\n\r\n      function listenTodoDesc(todoContainer, todoDesc) {\r\n        let descHeight;\r\n\r\n        // create an Observer instance\r\n        const resizeObserver = new ResizeObserver(entries => {\r\n          console.log('Body height changed:', entries[0].target.clientHeight);\r\n          descHeight = entries[0].target.clientHeight;\r\n\r\n          changeGridTemplateRowHeight();\r\n        });\r\n\r\n        // start observing a DOM node\r\n        resizeObserver.observe(todoDesc);\r\n\r\n        // makes it so the todoDesc content doesn't overflow in a manner of dynamicity\r\n        function changeGridTemplateRowHeight() {\r\n          if (todoContainer.classList.contains(\"expandable\")) {\r\n            if (descHeight <= 116) {\r\n              todoContainer.style.gridTemplateRows = `auto ${descHeight + 20}px`;\r\n            } else {\r\n              todoContainer.style.gridTemplateRows = `auto ${136}px`;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    function listenTodoBtnFormContainer(todoFormBtnContainer) {\r\n      todoFormBtnContainer.addEventListener(\"click\", () => {\r\n        document.body.appendChild(_formView__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayFormContainer());\r\n      })\r\n    }\r\n\r\n    return {listenTodoContainer, listenTodoBtnFormContainer};\r\n  })();\r\n\r\n  function matchValidDate(str) {\r\n    return (str.match(/^(?:[0][1-9]|[1-2][0-9]|[3][0-1])\\/(?:[0][1-9]|[1][0-2])\\/(?:[2][3-9]|[3-9][0-9])$/gm))\r\n    ? true : false;\r\n  }\r\n\r\n  return {objects, listeners};\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (panel);\n\n//# sourceURL=webpack://my_package/./src/todoView.js?");

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