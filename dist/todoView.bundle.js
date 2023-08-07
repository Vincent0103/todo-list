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

/***/ "./src/assets/menu-down.svg":
/*!**********************************!*\
  !*** ./src/assets/menu-down.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\\\" /></svg>\");\n\n//# sourceURL=webpack://my_package/./src/assets/menu-down.svg?");

/***/ }),

/***/ "./src/todoView.js":
/*!*************************!*\
  !*** ./src/todoView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_menu_down_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/menu-down.svg */ \"./src/assets/menu-down.svg\");\n\r\n\r\nconst todoPanel = (() => {\r\n  let currentProjectId = false;\r\n\r\n  function addContent(projectId=false) {\r\n    currentProjectId = projectId;\r\n    return getProperPanelDisplay();\r\n\r\n  }\r\n\r\n  function getProperPanelDisplay() {\r\n    const panelContainer = document.createElement(\"div\");\r\n    panelContainer.classList.add(\"panel-container\");\r\n\r\n    if (!currentProjectId) {\r\n      console.log(\"in inboxTab\");\r\n      const h1 = document.createElement(\"h1\");\r\n      h1.textContent = \"Inbox\";\r\n\r\n      const hr = document.createElement(\"hr\");\r\n\r\n      panelContainer.append(h1, hr, addTodoContent());\r\n    }\r\n\r\n    function addTodoContent() {\r\n      const todoContainer = document.createElement(\"div\");\r\n      todoContainer.classList.add(\"todo-container\");\r\n\r\n      const checkMarkContainer = document.createElement(\"div\");\r\n      checkMarkContainer.classList.add(\"check-mark-container\");\r\n\r\n      const title = document.createElement(\"p\");\r\n      title.textContent = \"Sed consectetur\";\r\n\r\n      const dueDate = document.createElement(\"p\");\r\n      dueDate.textContent = \"12/08/23\";\r\n\r\n      todoContainer.append(checkMarkContainer, title, dueDate);\r\n      todoContainer.innerHTML += _assets_menu_down_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\n      const desc = document.createElement(\"p\");\r\n      desc.classList.add(\"todo-desc\");\r\n      desc.textContent = \"Phasellus sodales mollis dictum. Etiam a luctus urna, eu varius ante. Integer sit amet lorem sit amet nibh finibus scelerisque eget a justo. Aliquam vulputate, quam nec aliquam semper, augue quam aliquam velit, in dapibus est leo at nulla. Ut pulvinar leo vitae ullamcorper porttitor.\";\r\n      todoContainer.appendChild(desc);\r\n      todoLogic.listenTodoContainer(todoContainer);\r\n\r\n      return todoContainer;\r\n    }\r\n\r\n    return panelContainer;\r\n  }\r\n\r\n  return {addContent};\r\n})();\r\n\r\nconst todoLogic = (() => {\r\n  let projectTodoListObj = {};\r\n  function addTodoObj(title, desc=\"\", dueDate, priority, isDone=false) {\r\n    const toStr = () => {\r\n      return `Current todo: \\\"${this.title}\\\", desc: \\\"${this.desc}\\\", due in ${this.dueDate} of priority ${priority}`;\r\n    }\r\n\r\n    return {title, desc, dueDate, priority, isDone, toStr};\r\n  }\r\n\r\n  function addProjectTodoList(projectId, todoObj) {\r\n    if (!projectId in projectTodoListObj) {\r\n      projectTodoListObj[projectId] = [todoObj];\r\n    } else {\r\n      projectTodoListObj[projectId].push(todoObj);\r\n    }\r\n  }\r\n\r\n  function listenTodoContainer(todoContainer) {\r\n    console.log(todoContainer);\r\n    todoContainer.addEventlistener(\"click\", () => {\r\n      if (!todoContainer.classList.contains(\"expandable\")) {\r\n        todoContainer.classList.add(\"expandable\");\r\n      } else {\r\n        todoContainer.classList.remove(\"expandable\");\r\n      }\r\n    });\r\n  }\r\n\r\n  return {addTodoObj, listenTodoContainer};\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoPanel);\n\n//# sourceURL=webpack://my_package/./src/todoView.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/todoView.js");
/******/ 	
/******/ })()
;