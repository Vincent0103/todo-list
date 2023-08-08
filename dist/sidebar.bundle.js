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

/***/ "./src/assets/plus-circle-outline.svg":
/*!********************************************!*\
  !*** ./src/assets/plus-circle-outline.svg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z\\\" /></svg>\");\n\n//# sourceURL=webpack://my_package/./src/assets/plus-circle-outline.svg?");

/***/ }),

/***/ "./src/formView.js":
/*!*************************!*\
  !*** ./src/formView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst formPanel = (() => {\r\n  let darkenBodyDiv;\r\n\r\n  function displayFormContainer() {\r\n    darkenBodyDiv = document.createElement(\"div\");\r\n    darkenBodyDiv.classList.add(\"darken-body-div\");\r\n\r\n    const panelFormContainer = document.createElement(\"div\");\r\n    panelFormContainer.classList.add(\"panel-form-container\");\r\n    panelFormContainer.append(addCloseBtn(), addTodoHeading(), addFormInputPanel());\r\n    darkenBodyDiv.appendChild(panelFormContainer);\r\n\r\n    function addCloseBtn() {\r\n      const closeBtn = document.createElement(\"btn\");\r\n      closeBtn.textContent = \"Close\";\r\n      closeBtn.classList.add(\"close-form-btn\");\r\n      formPanelLogic.listenCloseBtn(closeBtn);\r\n\r\n      return closeBtn;\r\n    }\r\n\r\n    function addTodoHeading() {\r\n      const todoHeading = document.createElement(\"h1\");\r\n      todoHeading.textContent = \"TODO\";\r\n\r\n      return todoHeading;\r\n    }\r\n\r\n    function addFormInputPanel() {\r\n      const form = document.createElement(\"form\");\r\n      form.classList.add(\"form-input-container\");\r\n      form.append(addTitleInput(), addDueDate(), addDescInput(), addPriorityDiv());\r\n\r\n      function addTitleInput() {\r\n        const titleInput = document.createElement(\"input\");\r\n        titleInput.classList.add(\"input-container\");\r\n        titleInput.classList.add(\"title-input\");\r\n        titleInput.placeholder = \"Title*\";\r\n\r\n        return titleInput;\r\n      }\r\n\r\n      function addDueDate() {\r\n        const dateInput = document.createElement(\"input\");\r\n        dateInput.classList.add(\"input-container\");\r\n        dateInput.classList.add(\"date-input\");\r\n        dateInput.type = \"datetime-local\";\r\n\r\n        return dateInput;\r\n      }\r\n\r\n      function addDescInput() {\r\n        const descInput = document.createElement(\"textarea\");\r\n        descInput.classList.add(\"input-container\");\r\n        descInput.classList.add(\"desc-input\");\r\n        descInput.placeholder = \"Description\";\r\n\r\n        return descInput;\r\n      }\r\n\r\n      function addPriorityDiv() {\r\n        const priorityDiv = document.createElement(\"div\");\r\n        priorityDiv.classList.add(\"priority-container\");\r\n        priorityDiv.append(addPriorityLabel(), addPriorityInput());\r\n\r\n        function addPriorityLabel() {\r\n          const priorityLabel = document.createElement(\"label\");\r\n          priorityLabel.setAttribute(\"for\", \"priority-input\");\r\n          priorityLabel.textContent = \"Priority: \";\r\n          return priorityLabel;\r\n        }\r\n\r\n        function addPriorityInput() {\r\n          const prioritySelect = document.createElement(\"div\");\r\n          prioritySelect.classList.add(\"input-container\");\r\n          prioritySelect.setAttribute(\"id\", \"priority-input\");\r\n          // formPanelLogic.listenPriorityInput(prioritySelect);\r\n\r\n          return prioritySelect;\r\n        }\r\n\r\n        return priorityDiv;\r\n      }\r\n\r\n\r\n      return form;\r\n    }\r\n    return darkenBodyDiv;\r\n  }\r\n\r\n  function getFormContainer() {\r\n    return darkenBodyDiv;\r\n  }\r\n\r\n  return {displayFormContainer, getFormContainer};\r\n})()\r\n\r\nconst formPanelLogic = (() => {\r\n  function listenCloseBtn(closeBtn) {\r\n    closeBtn.addEventListener('click', () => {\r\n      const darkenBodyDiv = formPanel.getFormContainer();\r\n      const panelFormContainer = darkenBodyDiv.querySelector(\".panel-form-container\");\r\n      panelFormContainer.style.animation = \".5s slideCenterOut\";\r\n      darkenBodyDiv.style.animation = \".5s fadeOut\";\r\n      setTimeout(() => {\r\n        darkenBodyDiv.remove();\r\n        panelFormContainer.remove();\r\n        console.log(\"removing\");\r\n      }, 495);\r\n    })\r\n  }\r\n\r\n  // function listenPriorityInput(priorityInput) {\r\n  //   priorityInput.addEventListener(\"click\", () => {\r\n\r\n  //   })\r\n  // }\r\n\r\n  return {listenCloseBtn};\r\n})()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formPanel);\n\n//# sourceURL=webpack://my_package/./src/formView.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sidebar.js");
/******/ 	
/******/ })()
;