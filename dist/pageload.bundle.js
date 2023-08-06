/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/inbox.svg":
/*!******************************!*\
  !*** ./src/assets/inbox.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z\\\" /></svg>\");\n\n//# sourceURL=webpack://my_package/./src/assets/inbox.svg?");

/***/ }),

/***/ "./src/assets/menu-down.svg":
/*!**********************************!*\
  !*** ./src/assets/menu-down.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\\\" /></svg>\");\n\n//# sourceURL=webpack://my_package/./src/assets/menu-down.svg?");

/***/ }),

/***/ "./src/assets/menu.svg":
/*!*****************************!*\
  !*** ./src/assets/menu.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z\\\" /></svg>\");\n\n//# sourceURL=webpack://my_package/./src/assets/menu.svg?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_menu_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/menu.svg */ \"./src/assets/menu.svg\");\n\r\n\r\n\r\nconst header = (() => {\r\n  function addContent() {\r\n    const headerContainer = document.createElement(\"div\");\r\n    headerContainer.classList.add(\"header-container\");\r\n    headerContainer.innerHTML += _assets_menu_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n    headerContainer.appendChild(addSlogan());\r\n\r\n    return headerContainer;\r\n  }\r\n\r\n  function addSlogan() {\r\n    const h2 = document.createElement(\"h2\");\r\n    h2.textContent = \"todowht\";\r\n\r\n    return h2;\r\n  }\r\n\r\n  return {addContent};\r\n})();\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://my_package/./src/header.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addPage)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n/* harmony import */ var _todoView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoView */ \"./src/todoView.js\");\n/* harmony import */ var _todoView__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_todoView__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nfunction addPage() {\r\n  const htmlContainer = document.querySelector(\"#content\");\r\n  htmlContainer.append(_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addContent(), _sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addContent());\r\n}\n\n//# sourceURL=webpack://my_package/./src/pageload.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_inbox_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/inbox.svg */ \"./src/assets/inbox.svg\");\n/* harmony import */ var _assets_menu_down_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/menu-down.svg */ \"./src/assets/menu-down.svg\");\n\r\n\r\n\r\nconst sidebar = (() => {\r\n  function addContent() {\r\n    const sidebarContainer = document.createElement(\"div\");\r\n    sidebarContainer.classList.add(\"sidebar-container\");\r\n\r\n    sidebarContainer.append(addInboxTab(), addProjectsTab(), addProjects());\r\n\r\n    return sidebarContainer;\r\n  }\r\n\r\n  function addInboxTab() {\r\n    const inboxTab = document.createElement(\"div\");\r\n    inboxTab.classList.add(\"inbox-tab\");\r\n\r\n    inboxTab.innerHTML = _assets_inbox_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\n    const p = document.createElement(\"p\");\r\n    p.textContent = \"Inbox\";\r\n    inboxTab.appendChild(p);\r\n\r\n    return inboxTab;\r\n  }\r\n\r\n  function addProjectsTab() {\r\n    const projectsTab = document.createElement(\"div\");\r\n    projectsTab.classList.add(\"projects-tab\");\r\n\r\n    const p = document.createElement(\"p\");\r\n    p.textContent = \"Projects\";\r\n    projectsTab.appendChild(p);\r\n\r\n    projectsTab.innerHTML += _assets_menu_down_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n\r\n    return projectsTab;\r\n  }\r\n\r\n  function addProjects() {\r\n    const allProjectsContainer = document.createElement(\"div\");\r\n    allProjectsContainer.classList.add(\"all-projects-container\");\r\n\r\n    addProjectContent().forEach(project => {\r\n      allProjectsContainer.appendChild(project);\r\n    });\r\n\r\n    return allProjectsContainer;\r\n  }\r\n\r\n  function addProjectContent() {\r\n    const projectContainer1 = document.createElement(\"div\");\r\n    projectContainer1.classList.add(\"project-container\");\r\n\r\n    const p1 = document.createElement(\"p\");\r\n    p1.textContent = \"Work\";\r\n    projectContainer1.appendChild(p1);\r\n\r\n    const projectContainer2 = document.createElement(\"div\");\r\n    projectContainer2.classList.add(\"project-container\");\r\n\r\n    const p2 = document.createElement(\"p\");\r\n    p2.textContent = \"Self\";\r\n    projectContainer2.appendChild(p2);\r\n\r\n    const projectContainer3 = document.createElement(\"div\");\r\n    projectContainer3.classList.add(\"project-container\");\r\n\r\n    const p3 = document.createElement(\"p\");\r\n    p3.textContent = \"smh\";\r\n    projectContainer3.appendChild(p3);\r\n\r\n    return [projectContainer1, projectContainer2, projectContainer3];\r\n  }\r\n\r\n  return {addContent};\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);\n\n//# sourceURL=webpack://my_package/./src/sidebar.js?");

/***/ }),

/***/ "./src/todoView.js":
/*!*************************!*\
  !*** ./src/todoView.js ***!
  \*************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://my_package/./src/todoView.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pageload.js");
/******/ 	
/******/ })()
;