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

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_menu_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/menu.svg */ \"./src/assets/menu.svg\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n\r\n\r\n\r\nconst header = (() => {\r\n  let menuSvg;\r\n\r\n  function addContent() {\r\n    const headerContainer = document.createElement(\"div\");\r\n    headerContainer.classList.add(\"header-container\");\r\n    headerContainer.innerHTML += _assets_menu_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\n    headerContainer.appendChild(addSlogan());\r\n\r\n    return headerContainer;\r\n  }\r\n\r\n  function addSlogan() {\r\n    const h2 = document.createElement(\"h2\");\r\n    h2.textContent = \"todowht\";\r\n\r\n    return h2;\r\n  }\r\n\r\n  function listenMenuSvg(headerContainer, sidebarContainer) {\r\n    menuSvg = headerContainer.querySelector(\"svg\");\r\n    menuSvg.addEventListener(\"click\", () => {\r\n      (0,_sidebar__WEBPACK_IMPORTED_MODULE_1__.slideSidebarContainer)(sidebarContainer);\r\n    });\r\n  }\r\n\r\n  return {addContent, listenMenuSvg};\r\n})();\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://my_package/./src/header.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pageload.js");
/******/ 	
/******/ })()
;