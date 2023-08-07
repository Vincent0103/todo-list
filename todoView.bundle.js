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

/***/ "./src/todoView.js":
/*!*************************!*\
  !*** ./src/todoView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst todoPanel = (() => {\r\n  let currentProjectId = false;\r\n\r\n  function addContent(projectId=false) {\r\n    currentProjectId = projectId;\r\n    return getProperPanelDisplay();\r\n\r\n  }\r\n\r\n  function getProperPanelDisplay() {\r\n    const panelContainer = document.createElement(\"div\");\r\n    panelContainer.classList.add(\"panel-container\");\r\n\r\n    if (!currentProjectId) {\r\n      console.log(\"in inboxTab\");\r\n      const h1 = document.createElement(\"h1\");\r\n      h1.textContent = \"Inbox\";\r\n\r\n      panelContainer.appendChild(h1);\r\n    }\r\n\r\n    return panelContainer;\r\n  }\r\n\r\n  return {addContent};\r\n})();\r\n\r\nconst todoLogic = (() => {\r\n  let projectTodoListObj = {};\r\n  function addTodoObj(title, desc, dueDate, priority) {\r\n    const toStr = () => {\r\n      return `Current todo: \\\"${this.title}\\\", desc: \\\"${this.desc}\\\", due in ${this.dueDate} of priority ${priority}`;\r\n    }\r\n\r\n    return {title, desc, dueDate, priority, toStr};\r\n  }\r\n\r\n  function addProjectTodoList(projectId, todoObj) {\r\n    if (!projectId in projectTodoListObj) {\r\n      projectTodoListObj[projectId] = [todoObj];\r\n    } else {\r\n      projectTodoListObj[projectId].push(todoObj);\r\n    }\r\n  }\r\n\r\n  return {addTodoObj};\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoPanel);\n\n//# sourceURL=webpack://my_package/./src/todoView.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/todoView.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;