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

/***/ "./src/assets/plus-circle-outline.svg":
/*!********************************************!*\
  !*** ./src/assets/plus-circle-outline.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z\\\" /></svg>\");\n\n//# sourceURL=webpack://my_package/./src/assets/plus-circle-outline.svg?");

/***/ }),

/***/ "./src/todoView.js":
/*!*************************!*\
  !*** ./src/todoView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_menu_down_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/menu-down.svg */ \"./src/assets/menu-down.svg\");\n/* harmony import */ var _assets_plus_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/plus-circle-outline.svg */ \"./src/assets/plus-circle-outline.svg\");\n\r\n\r\n\r\nconst todoPanel = (() => {\r\n  let currentProjectId = false;\r\n\r\n  function addContent(projectId=0) {\r\n    currentProjectId = projectId;\r\n    return getProperPanelDisplay();\r\n\r\n  }\r\n\r\n  function getProperPanelDisplay() {\r\n    const panelContainer = document.createElement(\"div\");\r\n    panelContainer.classList.add(\"panel-container\");\r\n\r\n    if (currentProjectId === 0) {\r\n      const h1 = document.createElement(\"h1\");\r\n      h1.textContent = \"Inbox\";\r\n\r\n      const hr = document.createElement(\"hr\");\r\n\r\n      panelContainer.append(h1, hr);\r\n      addTodoContent(panelContainer);\r\n    }\r\n\r\n    function addTodoContent(panelContainer) {\r\n      addTodoTemplateContent();\r\n\r\n      let inboxProjectTodos = todoLogic.getProjectsTodoListObj()[0];\r\n      panelContainer.appendChild(addTodoFormLink());\r\n\r\n      inboxProjectTodos.forEach(todoData => {\r\n        const todoContainer = document.createElement(\"div\");\r\n        todoContainer.classList.add(\"todo-container\");\r\n\r\n        const checkMarkContainer = document.createElement(\"div\");\r\n        checkMarkContainer.classList.add(\"check-mark-container\");\r\n\r\n        const title = document.createElement(\"p\");\r\n        title.textContent = todoData.title;\r\n\r\n        const dueDate = document.createElement(\"p\");\r\n        dueDate.textContent = todoData.dueDate;\r\n\r\n        todoContainer.append(checkMarkContainer, title, dueDate);\r\n        todoContainer.innerHTML += _assets_menu_down_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\n        const desc = document.createElement(\"p\");\r\n        desc.classList.add(\"todo-desc\");\r\n        desc.textContent = todoData.desc;\r\n        todoContainer.appendChild(desc);\r\n        todoLogic.listenTodoContainer(todoContainer, desc);\r\n\r\n        panelContainer.appendChild(todoContainer);\r\n      })\r\n    }\r\n\r\n    return panelContainer;\r\n  }\r\n\r\n  function addTodoFormLink() {\r\n    const todoFormContainer = document.createElement(\"div\");\r\n    todoFormContainer.classList.add(\"todo-container\");\r\n    todoFormContainer.classList.add(\"todo-form-container\");\r\n\r\n    const plusCircleSvg = _assets_plus_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n    todoFormContainer.innerHTML = plusCircleSvg;\r\n\r\n    const p = document.createElement(\"p\");\r\n    p.textContent = \"ADD TODO\";\r\n    todoFormContainer.appendChild(p);\r\n\r\n    return todoFormContainer;\r\n  }\r\n\r\n  function addTodoTemplateContent() {\r\n    let currentTodoObj = todoLogic.addTodoObj(\r\n      \"Master Plan of Achievements: Today's Tasks\",\r\n      \"Stay organized and on top of your tasks with this comprehensive to-do list. Whether you're tackling work assignments.\",\r\n      \"18/09/24\");\r\n\r\n    todoLogic.addProjectTodoList(0, currentTodoObj);\r\n\r\n    currentTodoObj = todoLogic.addTodoObj(\r\n      \"TaskTrek: Navigating Your Day's Endeavors\",\r\n      \"Effortlessly manage tasks, boost productivity, and achieve more with TaskTrek.\",\r\n      \"28/11/23\");\r\n\r\n    todoLogic.addProjectTodoList(0, currentTodoObj);\r\n\r\n    currentTodoObj = todoLogic.addTodoObj(\r\n      \"Spectrum Serenade: Echoes of Imagination\",\r\n      \"Embark on a vivid journey through diverse realms of creativity in Spectrum Serenade.\",\r\n      \"13/07/25\");\r\n\r\n    todoLogic.addProjectTodoList(0, currentTodoObj);\r\n\r\n    currentTodoObj = todoLogic.addTodoObj(\r\n      \"Whispering Shadows: Secrets Unveiled\",\r\n      \"Delve into a gripping tale of intrigue and discovery as Whispering Shadows reveals hidden truths.\");\r\n\r\n    todoLogic.addProjectTodoList(0, currentTodoObj);\r\n  }\r\n\r\n  return {addContent};\r\n})();\r\n\r\nconst todoLogic = (() => {\r\n  let projectsTodoListObj = {};\r\n\r\n  function getProjectsTodoListObj() {\r\n    return projectsTodoListObj;\r\n  }\r\n\r\n  function addTodoObj(title, desc=\"\", dueDate=null, priority=0, isDone=false) {\r\n    if (desc.length >= 160) {\r\n      throw new Error(\"Description is longer than 160 characters!\");\r\n    } else if (title.length <= 3 || title.length >= 60) {\r\n      throw new Error(\"title is less than 3 characters or longer than 60 characters!\");\r\n    } else if (dueDate !== null && !matchValidDate(dueDate)) {\r\n      throw new Error(\"Invalid date format!\");\r\n    }\r\n\r\n    const toStr = () => {\r\n      return `Current todo: \\\"${this.title}\\\", desc: \\\"${this.desc}\\\", due in ${this.dueDate} of priority ${priority}`;\r\n    }\r\n\r\n    return {title, desc, dueDate, priority, isDone, toStr};\r\n  }\r\n\r\n  function matchValidDate(str) {\r\n    return (str.match(/^(?:[0][1-9]|[1-2][0-9]|[3][0-1])\\/(?:[0][1-9]|[1][0-2])\\/(?:[2][3-9]|[3-9][0-9])$/gm))\r\n    ? true : false;\r\n  }\r\n\r\n  function addProjectTodoList(projectId, todoObj) {\r\n    projectId = String(projectId);\r\n    if (!(projectId in projectsTodoListObj)) {\r\n      projectsTodoListObj[projectId] = [todoObj];\r\n    } else {\r\n      projectsTodoListObj[projectId].push(todoObj);\r\n    }\r\n  }\r\n\r\n  function listenTodoContainer(todoContainer, todoDesc) {\r\n    todoContainer.addEventListener(\"click\", () => {\r\n      if (!todoContainer.classList.contains(\"expandable\")) {\r\n        todoContainer.classList.add(\"expandable\");\r\n        listenTodoDesc(todoContainer, todoDesc);\r\n      } else {\r\n        todoContainer.classList.remove(\"expandable\");\r\n\r\n        // removes inline styling from js\r\n        todoContainer.style.gridTemplateRows = null;\r\n      }\r\n    });\r\n  }\r\n\r\n  function listenTodoDesc(todoContainer, todoDesc) {\r\n    let descHeight;\r\n\r\n    // create an Observer instance\r\n    const resizeObserver = new ResizeObserver(entries => {\r\n      console.log('Body height changed:', entries[0].target.clientHeight);\r\n      descHeight = entries[0].target.clientHeight;\r\n\r\n      changeGridTemplateRowHeight();\r\n    });\r\n\r\n    // start observing a DOM node\r\n    resizeObserver.observe(todoDesc);\r\n\r\n    // makes it so the todoDesc content doesn't overflow in a manner of dynamicity\r\n    function changeGridTemplateRowHeight() {\r\n      if (todoContainer.classList.contains(\"expandable\")) {\r\n        if (descHeight <= 116) {\r\n          todoContainer.style.gridTemplateRows = `auto ${descHeight + 20}px`;\r\n        } else {\r\n          todoContainer.style.gridTemplateRows = `auto ${136}px`;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  return {addTodoObj, addProjectTodoList, getProjectsTodoListObj, listenTodoContainer, listenTodoDesc};\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoPanel);\n\n//# sourceURL=webpack://my_package/./src/todoView.js?");

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