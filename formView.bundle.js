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

/***/ "./src/assets/check-bold.svg":
/*!***********************************!*\
  !*** ./src/assets/check-bold.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z\\\" /></svg>\");\n\n//# sourceURL=webpack://my_package/./src/assets/check-bold.svg?");

/***/ }),

/***/ "./src/assets/close-thick.svg":
/*!************************************!*\
  !*** ./src/assets/close-thick.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z\\\" /></svg>\");\n\n//# sourceURL=webpack://my_package/./src/assets/close-thick.svg?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addAnimation: () => (/* binding */ addAnimation),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_close_thick_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/close-thick.svg */ \"./src/assets/close-thick.svg\");\n/* harmony import */ var _assets_check_bold_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/check-bold.svg */ \"./src/assets/check-bold.svg\");\n/* harmony import */ var _todoView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoView */ \"./src/todoView.js\");\n/* harmony import */ var _storageHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storageHandler */ \"./src/storageHandler.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst formPanel = (() => {\r\n  let darkenBodyDiv;\r\n\r\n  function displayFormContainer() {\r\n    darkenBodyDiv = document.createElement(\"div\");\r\n    darkenBodyDiv.classList.add(\"darken-body-div\");\r\n\r\n    const panelFormContainer = document.createElement(\"div\");\r\n    panelFormContainer.classList.add(\"panel-form-container\");\r\n    panelFormContainer.append(addCloseBtn(), addTodoHeading(), addFormInputPanel());\r\n    darkenBodyDiv.appendChild(panelFormContainer);\r\n\r\n    function addCloseBtn() {\r\n      const closeBtn = document.createElement(\"btn\");\r\n      closeBtn.innerHTML = _assets_close_thick_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n      closeBtn.classList.add(\"close-form-btn\");\r\n      formPanelLogic.listenCloseBtn(closeBtn);\r\n\r\n      return closeBtn;\r\n    }\r\n\r\n    function addTodoHeading() {\r\n      const todoHeading = document.createElement(\"h1\");\r\n      todoHeading.textContent = \"TODO\";\r\n\r\n      return todoHeading;\r\n    }\r\n\r\n    function addFormInputPanel() {\r\n      const form = document.createElement(\"form\");\r\n\r\n      // prevents from page reload on form submit\r\n      form.setAttribute(\"action\", \"javascript:void(0);\");\r\n\r\n      form.classList.add(\"form-input-container\");\r\n      form.append(addTitleInput(), addDueDate(), addDescInput(), addPriorityDiv(), addAddBtn());\r\n\r\n      function addTitleInput() {\r\n        const titleInput = document.createElement(\"input\");\r\n        titleInput.classList.add(\"input-container\");\r\n        titleInput.classList.add(\"title-input\");\r\n        titleInput.required = true;\r\n        titleInput.minLength = 3;\r\n        titleInput.maxLength = 60;\r\n        titleInput.placeholder = \"Title*\";\r\n\r\n        return titleInput;\r\n      }\r\n\r\n      function addDueDate() {\r\n        const dateInput = document.createElement(\"input\");\r\n        dateInput.classList.add(\"input-container\");\r\n        dateInput.classList.add(\"date-input\");\r\n        dateInput.type = \"datetime-local\";\r\n        dateInput.min = getCurrentDatetimeLocal();\r\n\r\n        function getCurrentDatetimeLocal() {\r\n          const currentDatetimeLocal = new Date().toISOString().slice(0, new Date().toISOString().lastIndexOf(\":\"));\r\n          return currentDatetimeLocal;\r\n        }\r\n\r\n        return dateInput;\r\n      }\r\n\r\n      function addDescInput() {\r\n        const descInput = document.createElement(\"textarea\");\r\n        descInput.classList.add(\"input-container\");\r\n        descInput.classList.add(\"desc-input\");\r\n        descInput.maxLength = 160;\r\n        descInput.placeholder = \"Description\";\r\n\r\n        return descInput;\r\n      }\r\n\r\n      function addPriorityDiv() {\r\n        const priorityDiv = document.createElement(\"div\");\r\n        priorityDiv.classList.add(\"priority-container\");\r\n        priorityDiv.append(addPriorityLabel(), addPriorityInput());\r\n\r\n        function addPriorityLabel() {\r\n          const priorityLabel = document.createElement(\"label\");\r\n          priorityLabel.setAttribute(\"for\", \"priority-input\");\r\n          priorityLabel.textContent = \"Priority: \";\r\n          return priorityLabel;\r\n        }\r\n\r\n        function addPriorityInput() {\r\n          const prioritySelect = document.createElement(\"div\");\r\n          prioritySelect.classList.add(\"input-container\");\r\n          prioritySelect.setAttribute(\"id\", \"priority-input\");\r\n          prioritySelect.setAttribute(\"value\", \"gray\");\r\n\r\n          // used later for todo container border-color\r\n          prioritySelect.style.borderColor = \"rgb(92, 92, 92)\";\r\n          formPanelLogic.listenPriorityInput(prioritySelect);\r\n\r\n          return prioritySelect;\r\n        }\r\n\r\n        return priorityDiv;\r\n      }\r\n\r\n      function addAddBtn() {\r\n        const addBtn = document.createElement(\"button\");\r\n        addBtn.type = \"submit\";\r\n        addBtn.textContent = \"ADD\";\r\n        formPanelLogic.listenAddBtn(addBtn, panelFormContainer);\r\n\r\n        return addBtn;\r\n      }\r\n\r\n      return form;\r\n    }\r\n    return darkenBodyDiv;\r\n  }\r\n\r\n  function getFormContainer() {\r\n    return darkenBodyDiv;\r\n  }\r\n\r\n  function displayColorOptions(colorOptionsContainer, type=null) {\r\n    if (!colorOptionsContainer.classList.contains(\"show-container\") && type === null) {\r\n      colorOptionsContainer.classList.add(\"show-container\");\r\n      colorOptionsContainer.style.display = \"flex\";\r\n\r\n      const panelFormContainer = getFormContainer().querySelector(\".panel-form-container\");\r\n\r\n      addOptions().forEach(option => {\r\n        colorOptionsContainer.appendChild(option);\r\n      })\r\n      panelFormContainer.appendChild(colorOptionsContainer);\r\n\r\n      function addOptions() {\r\n        const option1 = document.createElement(\"div\");\r\n        option1.classList.add(\"color-options\");\r\n        option1.style.backgroundColor = \"red\";\r\n        option1.style.border = \"1px solid rgb(206, 0, 0)\"\r\n\r\n        const option2 = document.createElement(\"div\");\r\n        option2.classList.add(\"color-options\");\r\n        option2.style.backgroundColor = \"orange\";\r\n        option2.style.border = \"1px solid rgb(209, 136, 0)\"\r\n\r\n        const option3 = document.createElement(\"div\");\r\n        option3.classList.add(\"color-options\");\r\n        option3.style.backgroundColor = \"blue\";\r\n        option3.style.border = \"1px solid rgb(0, 0, 212)\"\r\n\r\n        function addOptionsSeperator() {\r\n          const optionsSeperator = document.createElement(\"p\");\r\n          optionsSeperator.textContent = \"|\";\r\n\r\n          return optionsSeperator;\r\n        }\r\n\r\n        const option4 = document.createElement(\"div\");\r\n        option4.classList.add(\"color-options\");\r\n        option4.style.backgroundColor = \"gray\";\r\n        option4.style.border = \"1px solid rgb(92, 92, 92)\"\r\n\r\n        return [option1, option2, option3, addOptionsSeperator(), option4];\r\n      }\r\n    } else {\r\n      addAnimation(colorOptionsContainer, \"fadeOut\", .2)\r\n      setTimeout(() => {\r\n        colorOptionsContainer.classList.remove(\"show-container\");\r\n        addAnimation(colorOptionsContainer, \"fadeIn\", .2)\r\n        colorOptionsContainer.style.display = \"none\";\r\n        colorOptionsContainer.innerHTML = \"\";\r\n      }, 180);\r\n    }\r\n\r\n  }\r\n\r\n  function changePriorityColor(priorityInput, bgc, borderColor) {\r\n    priorityInput.style.backgroundColor = bgc;\r\n    priorityInput.style.borderColor = borderColor;\r\n\r\n    priorityInput.setAttribute(\"value\", bgc);\r\n  }\r\n\r\n  function addAnimation(element, type, timing) {\r\n    element.style.animation = `${String(timing)}s ${type}`;\r\n  }\r\n\r\n\r\n  function addSuccessMessage() {\r\n    const darkenBodyDiv = getFormContainer();\r\n    const panelFormContainer = darkenBodyDiv.querySelector(\".panel-form-container\");\r\n    const panelFormContainerChildrens = panelFormContainer.querySelectorAll(\"*\");\r\n    startSuccessAnimationBundle();\r\n\r\n\r\n    function startSuccessAnimationBundle() {\r\n      formPanel.addAnimation(panelFormContainer, \"success\", 2);\r\n      panelFormContainerChildrens.forEach(children => {\r\n        formPanel.addAnimation(children, \"fadeOut\", .2);\r\n      })\r\n      setTimeout(() => {\r\n        panelFormContainer.innerHTML = \"\";\r\n        panelFormContainer.classList.add(\"success-container\");\r\n\r\n        panelFormContainer.innerHTML += _assets_check_bold_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n        formPanel.addAnimation(panelFormContainer.querySelector(\"svg\"), \"fadeIn\", .5);\r\n      }, 190);\r\n      setTimeout(() => {\r\n        formPanel.addAnimation(darkenBodyDiv, \"fadeOut\", .5);\r\n        setTimeout(() => darkenBodyDiv.remove(), 490);\r\n      }, 1300);\r\n    }\r\n  }\r\n\r\n  return {displayFormContainer, getFormContainer, displayColorOptions, changePriorityColor, addAnimation, addSuccessMessage};\r\n})()\r\n\r\nconst formPanelLogic = (() => {\r\n  function listenCloseBtn(closeBtn) {\r\n    closeBtn.addEventListener('click', () => {\r\n      const darkenBodyDiv = formPanel.getFormContainer();\r\n      const panelFormContainer = darkenBodyDiv.querySelector(\".panel-form-container\");\r\n      formPanel.addAnimation(panelFormContainer, \"slideCenterOut\", .5);\r\n      formPanel.addAnimation(darkenBodyDiv, \"fadeOut\", .5);\r\n      setTimeout(() => {\r\n        darkenBodyDiv.remove();\r\n        panelFormContainer.remove();\r\n      }, 495);\r\n    })\r\n  }\r\n\r\n  function listenPriorityInput(priorityInput) {\r\n    const colorOptionsContainer = document.createElement(\"div\");\r\n    colorOptionsContainer.classList.add(\"color-options-container\");\r\n\r\n    priorityInput.addEventListener(\"click\", () => {\r\n      formPanel.displayColorOptions(colorOptionsContainer);\r\n      listenColorOptions(colorOptionsContainer);\r\n      window.addEventListener(\"click\", e => {\r\n        if (!e.target.getAttribute(\"id\", \"priority-input\")) {\r\n          formPanel.displayColorOptions(colorOptionsContainer, \"window\");\r\n        }\r\n      })\r\n    })\r\n\r\n    function listenColorOptions() {\r\n      const colorOptions = colorOptionsContainer.querySelectorAll(\".color-options\");\r\n\r\n      colorOptions.forEach(option => {\r\n        option.addEventListener(\"click\", () => {\r\n          const bgc = option.style.backgroundColor;\r\n          const borderColor = option.style.borderColor;\r\n          formPanel.changePriorityColor(priorityInput, bgc, borderColor);\r\n        })\r\n      })\r\n    }\r\n  }\r\n\r\n\r\n  function listenAddBtn(addBtn, panelFormContainer) {\r\n    let hasClicked = false;\r\n    addBtn.addEventListener(\"click\", e => {\r\n      if (!hasClicked) {\r\n        // seperating priority input because it is a custom input type and is a div\r\n        const inputContainers = panelFormContainer.querySelectorAll(\".form-input-container .input-container:not(#priority-input)\");\r\n        const priorityInput = panelFormContainer.querySelector(\"#priority-input\");\r\n        let areValidInputs = checkFormValidity(inputContainers);\r\n\r\n        if (areValidInputs) {\r\n          const currentProjectId = (0,_todoView__WEBPACK_IMPORTED_MODULE_2__.getCurrentProjectId)();\r\n          const title = inputContainers[0].value;\r\n          const date = inputContainers[1].value;\r\n          const desc = inputContainers[2].value;\r\n          const priorityColor = priorityInput.getAttribute(\"value\");\r\n          const formTodoObj = _todoView__WEBPACK_IMPORTED_MODULE_2__.todoLogicModule.objects.addTodoObj(title, desc, date, priorityColor);\r\n          _todoView__WEBPACK_IMPORTED_MODULE_2__.todoLogicModule.objects.addProjectTodoList(currentProjectId, formTodoObj);\r\n          (0,_todoView__WEBPACK_IMPORTED_MODULE_2__.addTodoContainer)(formTodoObj);\r\n          console.log(formTodoObj);\r\n          (0,_storageHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"form\", currentProjectId, formTodoObj);\r\n          formPanel.addSuccessMessage(panelFormContainer);\r\n          hasClicked = true;\r\n        }\r\n\r\n      }\r\n    });\r\n\r\n    function checkFormValidity(inputContainers) {\r\n      for (let input of inputContainers) {\r\n        if (!input.checkValidity()) {\r\n          return false;\r\n        }\r\n      }\r\n      return true;\r\n    }\r\n  }\r\n\r\n  return {listenCloseBtn, listenPriorityInput, listenAddBtn};\r\n})()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formPanel);\r\nconst addAnimation = formPanel.addAnimation;\n\n//# sourceURL=webpack://my_package/./src/formView.js?");

/***/ }),

/***/ "./src/storageHandler.js":
/*!*******************************!*\
  !*** ./src/storageHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoView */ \"./src/todoView.js\");\n\r\n\r\n\r\nlet isDOMloading = true;\r\n\r\nfunction storageAvailable(type) {\r\n  let storage;\r\n  try {\r\n    storage = window[type];\r\n    const x = \"__storage_test__\";\r\n    storage.setItem(x, x);\r\n    storage.removeItem(x);\r\n    return true;\r\n  } catch (e) {\r\n    return (\r\n      e instanceof DOMException &&\r\n      // everything except Firefox\r\n      (e.code === 22 ||\r\n        // Firefox\r\n        e.code === 1014 ||\r\n        // test name field too, because code might not be present\r\n        // everything except Firefox\r\n        e.name === \"QuotaExceededError\" ||\r\n        // Firefox\r\n        e.name === \"NS_ERROR_DOM_QUOTA_REACHED\") &&\r\n      // acknowledge QuotaExceededError only if there's something already stored\r\n      storage &&\r\n      storage.length !== 0\r\n    );\r\n  }\r\n}\r\n\r\nfunction storeTodoObjs(type, projectId, todoObj) {\r\n  if (storageAvailable(\"localStorage\")) {\r\n    // Yippee! We can use localStorage awesomeness\r\n\r\n    if (localStorage.getItem(\"projectsTodoListObj\") && type === \"form\") {\r\n      populateStorage(type, projectId, todoObj);\r\n    } else {\r\n      populateStorage();\r\n    }\r\n\r\n  } else {\r\n    // Too bad, no localStorage for us\r\n  }\r\n\r\n}\r\n\r\nfunction addProjectTodoList(projectsTodoListObj, projectId, todoObj) {\r\n  projectId = String(projectId);\r\n  if (!(projectId in projectsTodoListObj) && !todoObj) {\r\n    projectsTodoListObj[projectId] = [];\r\n\r\n  } else if (!(projectId in projectsTodoListObj) && todoObj) {\r\n      projectsTodoListObj[projectId] = [todoObj];\r\n\r\n  } else {\r\n    projectsTodoListObj[projectId].push(todoObj);\r\n  }\r\n}\r\n\r\nfunction populateStorage(type, projectId, todoObj) {\r\n  if (isDOMloading) {\r\n    if (localStorage.getItem(\"projectsTodoListObj\")) {\r\n      const projectsTodoListObj = JSON.parse(localStorage.getItem(\"projectsTodoListObj\"));\r\n\r\n      for (const projectId of Object.keys(projectsTodoListObj)) {\r\n        const projectObj = projectsTodoListObj[projectId];\r\n        for (const todoObj in projectObj) {\r\n          _todoView__WEBPACK_IMPORTED_MODULE_0__.todoLogicModule.objects.addProjectTodoList(Number.parseInt(projectId), projectObj[todoObj]);\r\n        }\r\n      }\r\n      console.log(_todoView__WEBPACK_IMPORTED_MODULE_0__.todoLogicModule.objects.getProjectsTodoListObj());\r\n    }\r\n\r\n    isDOMloading = false;\r\n  }\r\n\r\n  if (!localStorage.getItem(\"projectsTodoListObj\")) {\r\n    addTodoTemplateContent();\r\n    const projectsTodoListObj  = _todoView__WEBPACK_IMPORTED_MODULE_0__.todoLogicModule.objects.getProjectsTodoListObj();\r\n    localStorage.setItem(\"projectsTodoListObj\", JSON.stringify(projectsTodoListObj));\r\n  } else if (type === \"form\") {\r\n    const projectsTodoListObj = JSON.parse(localStorage.getItem(\"projectsTodoListObj\"));\r\n\r\n    addProjectTodoList(projectsTodoListObj, projectId, todoObj);\r\n\r\n    localStorage.setItem(\"projectsTodoListObj\", JSON.stringify(projectsTodoListObj));\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n\r\nfunction addTodoTemplateContent() {\r\n  let currentTodoObj = _todoView__WEBPACK_IMPORTED_MODULE_0__.todoLogicModule.objects.addTodoObj(\r\n    \"click me!\",\r\n    \"Stay organized and on top of your tasks with this comprehensive to-do list. Whether you're tackling work assignments.\",\r\n    \"2028-11-23T18:21\",\r\n    \"red\");\r\n\r\n  _todoView__WEBPACK_IMPORTED_MODULE_0__.todoLogicModule.objects.addProjectTodoList(0, currentTodoObj);\r\n\r\n  currentTodoObj = _todoView__WEBPACK_IMPORTED_MODULE_0__.todoLogicModule.objects.addTodoObj(\r\n    \"Welcome to todowht\",\r\n    \"\",\r\n    \"2023-09-24T12:17\",\r\n    \"blue\");\r\n\r\n  _todoView__WEBPACK_IMPORTED_MODULE_0__.todoLogicModule.objects.addProjectTodoList(0, currentTodoObj);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storeTodoObjs);\n\n//# sourceURL=webpack://my_package/./src/storageHandler.js?");

/***/ }),

/***/ "./src/todoView.js":
/*!*************************!*\
  !*** ./src/todoView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodoContainer: () => (/* binding */ addTodoContainer),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getCurrentProjectId: () => (/* binding */ getCurrentProjectId),\n/* harmony export */   todoLogicModule: () => (/* binding */ todoLogicModule)\n/* harmony export */ });\n/* harmony import */ var _assets_menu_down_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/menu-down.svg */ \"./src/assets/menu-down.svg\");\n/* harmony import */ var _assets_plus_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/plus-circle-outline.svg */ \"./src/assets/plus-circle-outline.svg\");\n/* harmony import */ var _formView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formView */ \"./src/formView.js\");\n\r\n\r\n\r\n\r\nconst panel = (() => {\r\n  let currentProjectId;\r\n  let idIncrementor;\r\n  let panelContainer;\r\n\r\n  function addContent(projectName, projectId) {\r\n    currentProjectId = Number.parseInt(projectId);\r\n    idIncrementor = 0;\r\n    return getProperPanelDisplay();\r\n\r\n    function getProperPanelDisplay() {\r\n      panelContainer = document.createElement(\"div\");\r\n      panelContainer.classList.add(\"panel-container\");\r\n\r\n      const h1 = document.createElement(\"h1\");\r\n      h1.textContent = projectName;\r\n\r\n      const hr = document.createElement(\"hr\");\r\n\r\n      panelContainer.append(h1, hr);\r\n      todo.addTodoContent(panelContainer, currentProjectId);\r\n\r\n\r\n      return panelContainer;\r\n    }\r\n  }\r\n\r\n  function getCurrentProjectId() {\r\n    return currentProjectId;\r\n  }\r\n\r\n  function getIdIncrementor() {\r\n    return idIncrementor;\r\n  }\r\n\r\n  const todo = (() => {\r\n    function addTodoContent(panelContainer, projectId) {\r\n\r\n      let inboxProjectTodos = todoLogic.objects.getProjectsTodoListObj()[projectId];\r\n      panelContainer.appendChild(addTodoFormBtnLink());\r\n\r\n      if (typeof inboxProjectTodos === \"object\") {\r\n        inboxProjectTodos.forEach(todo => {\r\n          console.log(\"doing\");\r\n          addTodoContainer(todo);\r\n        })\r\n      }\r\n    }\r\n\r\n    function changeTodoContainerStyle(todoContainer, color) {\r\n      const checkMarkContainer = todoContainer.querySelector(\".check-mark-container\");\r\n      const currentStylingBundle = todoLogic.objects.getPriorityStyling(color);\r\n\r\n      checkMarkContainer.style.backgroundColor = currentStylingBundle.bgc;\r\n      todoContainer.style.borderColor = currentStylingBundle.borderContainerColor;\r\n      checkMarkContainer.style.borderColor = currentStylingBundle.borderColor;\r\n\r\n      checkMarkContainer.addEventListener(\"mouseenter\", () => {\r\n        checkMarkContainer.style.backgroundColor = currentStylingBundle.hoverBgc;\r\n      })\r\n      checkMarkContainer.addEventListener(\"mouseleave\", () => {\r\n        checkMarkContainer.style.backgroundColor = currentStylingBundle.bgc;\r\n      })\r\n    }\r\n\r\n    function addTodoContainer(currentTodoObj) {\r\n      const panelContainer = getPanelContainer();\r\n\r\n      const todoContainer = document.createElement(\"div\");\r\n      todoContainer.classList.add(\"todo-container\");\r\n      todoContainer.setAttribute(\"data-id\", idIncrementor);\r\n\r\n      const checkMarkContainer = document.createElement(\"div\");\r\n      checkMarkContainer.classList.add(\"check-mark-container\");\r\n\r\n      const title = document.createElement(\"p\");\r\n      title.textContent = currentTodoObj.title;\r\n\r\n      const dueDate = document.createElement(\"p\");\r\n      dueDate.innerHTML = `<span>to: </span>${todoLogic.convertDate(currentTodoObj.dueDate)}`;\r\n      dueDate.classList.add(\"todo-due-date\");\r\n\r\n      todoContainer.append(checkMarkContainer, title, dueDate);\r\n      todoContainer.innerHTML += _assets_menu_down_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\n      const desc = document.createElement(\"p\");\r\n      desc.classList.add(\"todo-desc\");\r\n      desc.textContent = currentTodoObj.desc;\r\n      todoContainer.appendChild(desc);\r\n      todoLogic.listeners.listenTodoContainer(todoContainer, desc);\r\n      insertBeforeDiv();\r\n\r\n      changeTodoContainerStyle(todoContainer, currentTodoObj.priority);\r\n      idIncrementor++;\r\n\r\n      function insertBeforeDiv() {\r\n        const insertBeforeDiv = panelContainer.querySelector(\".todo-container:nth-child(4)\");\r\n        panelContainer.insertBefore(todoContainer, insertBeforeDiv);\r\n      }\r\n\r\n    }\r\n\r\n    function removeTodoContainer(todoContainer) {\r\n      const todoObjId = todoContainer.getAttribute(\"data-id\");\r\n      todoLogic.objects.removeTodoObj(todoObjId, currentProjectId);\r\n      handleTodoContainerRemoveAnimation();\r\n\r\n      function handleTodoContainerRemoveAnimation() {\r\n        if (todoContainer.classList.contains(\"expandable\")) {\r\n          todoContainer.classList.remove(\"expandable\");\r\n          todoContainer.style.gridTemplateRows = `auto 0px`;\r\n        }\r\n        todoContainer.style.zIndex = \"-1\";\r\n        _formView__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addAnimation(todoContainer, \"slideUp\", .5);\r\n        setTimeout(() => todoContainer.remove(), 480);\r\n      }\r\n    }\r\n\r\n    function addTodoFormBtnLink() {\r\n      const todoFormBtnContainer = document.createElement(\"div\");\r\n      todoFormBtnContainer.classList.add(\"todo-container\");\r\n      todoFormBtnContainer.classList.add(\"todo-form-btn-container\");\r\n\r\n      const plusCircleSvg = _assets_plus_circle_outline_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n      todoFormBtnContainer.innerHTML = plusCircleSvg;\r\n\r\n      const p = document.createElement(\"p\");\r\n      p.textContent = \"ADD TODO\";\r\n      todoFormBtnContainer.appendChild(p);\r\n      todoLogic.listeners.listenTodoBtnFormContainer(todoFormBtnContainer);\r\n\r\n      return todoFormBtnContainer;\r\n    }\r\n\r\n    function getPanelContainer() {\r\n      return panelContainer;\r\n    }\r\n\r\n    function containsDesc(todoContainer, desc) {\r\n      if (desc.textContent.length <= 0) {\r\n        todoContainer.removeChild(todoContainer.querySelector(\"svg\"));\r\n        todoContainer.style.cursor = \"default\";\r\n        return false;\r\n      }\r\n      return true;\r\n    }\r\n\r\n    function handleExpandableClass(todoContainer, todoDesc) {\r\n      if (!todoContainer.classList.contains(\"expandable\")) {\r\n        todoContainer.classList.add(\"expandable\");\r\n        todoLogic.listeners.listenTodoDesc(todoContainer, todoDesc);\r\n      } else {\r\n        todoContainer.classList.remove(\"expandable\");\r\n\r\n        // removes inline styling from js\r\n        todoContainer.style.gridTemplateRows = null;\r\n      }\r\n    }\r\n\r\n    return {addTodoContent, removeTodoContainer, addTodoContainer, containsDesc, handleExpandableClass};\r\n  })()\r\n\r\n  return {addContent, getIdIncrementor, getCurrentProjectId, todo};\r\n})();\r\n\r\nconst todoLogic = (() => {\r\n  let projectsTodoListObj = {};\r\n\r\n  const objects = (() => {\r\n    function getProjectsTodoListObj() {\r\n      return projectsTodoListObj;\r\n    }\r\n\r\n    function getPriorityStyling(forColor) {\r\n      let borderColor;\r\n      let bgc;\r\n      let hoverBgc;\r\n      let borderContainerColor;\r\n\r\n      if (forColor === \"red\") {\r\n        borderColor = \"#ef233c\";\r\n        borderContainerColor = \"#ff9aa7\";\r\n        bgc = \"#f6dad8\";\r\n        hoverBgc = \"#f7c1be\";\r\n      } else if (forColor === \"orange\") {\r\n        borderColor = \"#ed9f11\";\r\n        borderContainerColor = \"#ffcb6d\";\r\n        bgc = \"#fff1de\";\r\n        hoverBgc = \"#ffdfb5\";\r\n      } else if (forColor === \"blue\") {\r\n        borderColor = \"#2079ff\";\r\n        borderContainerColor = \"#afafff\";\r\n        bgc = \"#e1edff\";\r\n        hoverBgc = \"#bbd6ff\";\r\n      } else if (forColor === \"gray\") {\r\n        borderColor = \"#696969\";\r\n        borderContainerColor = \"#c8c8c8\";\r\n        bgc = \"#ebebeb\";\r\n        hoverBgc = \"#d9d9d9\";\r\n      }\r\n\r\n      return {borderColor, bgc, hoverBgc, borderContainerColor};\r\n    }\r\n\r\n    function addProjectTodoList(projectId, todoObj) {\r\n      projectId = String(projectId);\r\n      if (!(projectId in projectsTodoListObj) && !todoObj) {\r\n        projectsTodoListObj[projectId] = [];\r\n\r\n      } else if (!(projectId in projectsTodoListObj) && todoObj) {\r\n          projectsTodoListObj[projectId] = [todoObj];\r\n\r\n      } else {\r\n        projectsTodoListObj[projectId].push(todoObj);\r\n      }\r\n    }\r\n\r\n    function addTodoObj(title, desc=\"\", dueDate=\"\", priority=\"gray\", isDone=false) {\r\n      if (desc.length >= 160) {\r\n        throw new Error(`Description is longer than 160 characters! \\n${desc}`);\r\n      } else if (title.length < 3 || title.length >= 60) {\r\n        throw new Error(`title is less than 3 characters or longer than 60 characters! \\n${title}`);\r\n      } else if (dueDate !== \"\" && !matchValidDate(dueDate)) {\r\n        throw new Error(`Invalid date format! \\n${dueDate}`);\r\n      }\r\n\r\n      const toStr = () => {\r\n        return `Current todo: \\\"${title}\\\", desc: \\\"${desc}\\\", due in ${dueDate} of priority ${priority}`;\r\n      }\r\n\r\n\r\n      return {title, desc, dueDate, priority, isDone, toStr};\r\n    }\r\n\r\n    function removeTodoObj(todoObjId, projectId) {\r\n      getProjectsTodoListObj()[projectId].splice(todoObjId, 1);\r\n    }\r\n\r\n    return {getProjectsTodoListObj, getPriorityStyling, addProjectTodoList, addTodoObj, removeTodoObj};\r\n  })();\r\n\r\n  const listeners = (() => {\r\n    function listenTodoContainer(todoContainer, todoDesc) {\r\n      if (panel.todo.containsDesc(todoContainer, todoDesc)) {\r\n        todoContainer.addEventListener(\"click\", e => {\r\n          if (e.target.className === \"check-mark-container\") {\r\n            listenCheckMarkContainer(e.target.parentElement);\r\n          } else {\r\n            panel.todo.handleExpandableClass(todoContainer, todoDesc);\r\n          }\r\n\r\n        });\r\n      } else {\r\n        todoContainer.addEventListener(\"click\", e => {\r\n          if (e.target.className === \"check-mark-container\") {\r\n            listenCheckMarkContainer(e.target.parentElement);\r\n          }\r\n        });\r\n      }\r\n\r\n      function listenCheckMarkContainer(todoContainer) {\r\n        panel.todo.removeTodoContainer(todoContainer);\r\n      }\r\n    }\r\n\r\n    function listenTodoBtnFormContainer(todoFormBtnContainer) {\r\n      todoFormBtnContainer.addEventListener(\"click\", () => {\r\n        document.body.appendChild(_formView__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayFormContainer());\r\n      })\r\n    }\r\n\r\n    function listenTodoDesc(todoContainer, todoDesc) {\r\n      let descHeight;\r\n      let hasExecutedOnce = false;\r\n\r\n      // create an Observer instance\r\n      const resizeObserver = new ResizeObserver(entries => {\r\n        descHeight = entries[0].target.clientHeight;\r\n\r\n        if (!hasExecutedOnce) {\r\n          changeGridTemplateRowHeight();\r\n        }\r\n      });\r\n\r\n      // start observing a DOM node\r\n      resizeObserver.observe(todoDesc);\r\n\r\n      // makes it so the todoDesc content doesn't overflow in a manner of dynamicity\r\n      function changeGridTemplateRowHeight() {\r\n        hasExecutedOnce = true;\r\n        if (descHeight <= 116) {\r\n          todoContainer.style.gridTemplateRows = `auto ${descHeight + 20}px`;\r\n        } else {\r\n          todoContainer.style.gridTemplateRows = `auto ${136}px`;\r\n        }\r\n      }\r\n    }\r\n\r\n    return {listenTodoContainer, listenTodoBtnFormContainer, listenTodoDesc};\r\n  })();\r\n\r\n  function matchValidDate(str) {\r\n    return (str.match(/^[2][0](?:[2][3-9]|[3-9][0-9])-(?:[0][1-9]|[1][0-2])-(?:[0][1-9]|[1-2][0-9]|[3][0-1])T(?:[0-1][[0-9]|[2][0-3]):(?:[0-5][0-9])$/gm))\r\n    ? true : false;\r\n  }\r\n\r\n  function convertDate(str) {\r\n    return (str === \"\")\r\n    ? \"\"\r\n    : str.substring(0, str.indexOf(\"T\"))\r\n     + \" at \" +\r\n     str.substring(str.indexOf(\"T\") + 1, str.length);\r\n  }\r\n\r\n  return {objects, listeners, convertDate};\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (panel);\r\nconst addTodoContainer = panel.todo.addTodoContainer;\r\nconst getCurrentProjectId = panel.getCurrentProjectId;\r\nconst todoLogicModule = todoLogic;\n\n//# sourceURL=webpack://my_package/./src/todoView.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/formView.js");
/******/ 	
/******/ })()
;