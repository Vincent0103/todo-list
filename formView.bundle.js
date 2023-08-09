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

/***/ "./src/formView.js":
/*!*************************!*\
  !*** ./src/formView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_close_thick_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/close-thick.svg */ \"./src/assets/close-thick.svg\");\n/* harmony import */ var _assets_check_bold_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/check-bold.svg */ \"./src/assets/check-bold.svg\");\n\r\n\r\n\r\nconst formPanel = (() => {\r\n  let darkenBodyDiv;\r\n\r\n  function displayFormContainer() {\r\n    darkenBodyDiv = document.createElement(\"div\");\r\n    darkenBodyDiv.classList.add(\"darken-body-div\");\r\n\r\n    const panelFormContainer = document.createElement(\"div\");\r\n    panelFormContainer.classList.add(\"panel-form-container\");\r\n    panelFormContainer.append(addCloseBtn(), addTodoHeading(), addFormInputPanel());\r\n    darkenBodyDiv.appendChild(panelFormContainer);\r\n\r\n    function addCloseBtn() {\r\n      const closeBtn = document.createElement(\"btn\");\r\n      closeBtn.innerHTML = _assets_close_thick_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n      closeBtn.classList.add(\"close-form-btn\");\r\n      formPanelLogic.listenCloseBtn(closeBtn);\r\n\r\n      return closeBtn;\r\n    }\r\n\r\n    function addTodoHeading() {\r\n      const todoHeading = document.createElement(\"h1\");\r\n      todoHeading.textContent = \"TODO\";\r\n\r\n      return todoHeading;\r\n    }\r\n\r\n    function addFormInputPanel() {\r\n      const form = document.createElement(\"form\");\r\n\r\n      // prevents from page reload on form submit\r\n      form.setAttribute(\"action\", \"javascript:void(0);\");\r\n\r\n      form.classList.add(\"form-input-container\");\r\n      form.append(addTitleInput(), addDueDate(), addDescInput(), addPriorityDiv(), addAddBtn());\r\n\r\n      function addTitleInput() {\r\n        const titleInput = document.createElement(\"input\");\r\n        titleInput.classList.add(\"input-container\");\r\n        titleInput.classList.add(\"title-input\");\r\n        titleInput.required = true;\r\n        titleInput.minLength = 3;\r\n        titleInput.maxLength = 60;\r\n        titleInput.placeholder = \"Title*\";\r\n\r\n        return titleInput;\r\n      }\r\n\r\n      function addDueDate() {\r\n        const dateInput = document.createElement(\"input\");\r\n        dateInput.classList.add(\"input-container\");\r\n        dateInput.classList.add(\"date-input\");\r\n        dateInput.type = \"datetime-local\";\r\n        dateInput.min = getCurrentDatetimeLocal();\r\n\r\n        function getCurrentDatetimeLocal() {\r\n          const currentDatetimeLocal = new Date().toISOString().slice(0, new Date().toISOString().lastIndexOf(\":\"));\r\n          return currentDatetimeLocal;\r\n        }\r\n\r\n        return dateInput;\r\n      }\r\n\r\n      function addDescInput() {\r\n        const descInput = document.createElement(\"textarea\");\r\n        descInput.classList.add(\"input-container\");\r\n        descInput.classList.add(\"desc-input\");\r\n        descInput.maxLength = 160;\r\n        descInput.placeholder = \"Description\";\r\n\r\n        return descInput;\r\n      }\r\n\r\n      function addPriorityDiv() {\r\n        const priorityDiv = document.createElement(\"div\");\r\n        priorityDiv.classList.add(\"priority-container\");\r\n        priorityDiv.append(addPriorityLabel(), addPriorityInput());\r\n\r\n        function addPriorityLabel() {\r\n          const priorityLabel = document.createElement(\"label\");\r\n          priorityLabel.setAttribute(\"for\", \"priority-input\");\r\n          priorityLabel.textContent = \"Priority: \";\r\n          return priorityLabel;\r\n        }\r\n\r\n        function addPriorityInput() {\r\n          const prioritySelect = document.createElement(\"div\");\r\n          prioritySelect.classList.add(\"input-container\");\r\n          prioritySelect.setAttribute(\"id\", \"priority-input\");\r\n          prioritySelect.setAttribute(\"value\", \"gray\");\r\n          formPanelLogic.listenPriorityInput(prioritySelect);\r\n\r\n          return prioritySelect;\r\n        }\r\n\r\n        return priorityDiv;\r\n      }\r\n\r\n      function addAddBtn() {\r\n        const addBtn = document.createElement(\"button\");\r\n        addBtn.type = \"submit\";\r\n        addBtn.textContent = \"ADD\";\r\n        formPanelLogic.listenAddBtn(addBtn, panelFormContainer);\r\n\r\n        return addBtn;\r\n      }\r\n\r\n      return form;\r\n    }\r\n    return darkenBodyDiv;\r\n  }\r\n\r\n  function getFormContainer() {\r\n    return darkenBodyDiv;\r\n  }\r\n\r\n  function displayColorOptions(colorOptionsContainer, type=null) {\r\n    if (!colorOptionsContainer.classList.contains(\"show-container\") && type === null) {\r\n      colorOptionsContainer.classList.add(\"show-container\");\r\n      colorOptionsContainer.style.display = \"flex\";\r\n\r\n      const panelFormContainer = getFormContainer().querySelector(\".panel-form-container\");\r\n\r\n      addOptions().forEach(option => {\r\n        colorOptionsContainer.appendChild(option);\r\n      })\r\n      panelFormContainer.appendChild(colorOptionsContainer);\r\n\r\n      function addOptions() {\r\n        const option1 = document.createElement(\"div\");\r\n        option1.classList.add(\"color-options\");\r\n        option1.style.backgroundColor = \"red\";\r\n        option1.style.border = \"1px solid rgb(206, 0, 0)\"\r\n\r\n        const option2 = document.createElement(\"div\");\r\n        option2.classList.add(\"color-options\");\r\n        option2.style.backgroundColor = \"orange\";\r\n        option2.style.border = \"1px solid rgb(209, 136, 0)\"\r\n\r\n        const option3 = document.createElement(\"div\");\r\n        option3.classList.add(\"color-options\");\r\n        option3.style.backgroundColor = \"blue\";\r\n        option3.style.border = \"1px solid rgb(0, 0, 212)\"\r\n\r\n        function addOptionsSeperator() {\r\n          const optionsSeperator = document.createElement(\"p\");\r\n          optionsSeperator.textContent = \"|\";\r\n\r\n          return optionsSeperator;\r\n        }\r\n\r\n        const option4 = document.createElement(\"div\");\r\n        option4.classList.add(\"color-options\");\r\n        option4.style.backgroundColor = \"gray\";\r\n        option4.style.border = \"1px solid rgb(92, 92, 92)\"\r\n\r\n        return [option1, option2, option3, addOptionsSeperator(), option4];\r\n      }\r\n    } else {\r\n      addAnimation(colorOptionsContainer, \"fadeOut\", .2)\r\n      setTimeout(() => {\r\n        colorOptionsContainer.classList.remove(\"show-container\");\r\n        addAnimation(colorOptionsContainer, \"fadeIn\", .2)\r\n        colorOptionsContainer.style.display = \"none\";\r\n        colorOptionsContainer.innerHTML = \"\";\r\n      }, 180);\r\n    }\r\n\r\n  }\r\n\r\n  function changePriorityColor(priorityInput, bgc, borderColor) {\r\n    priorityInput.style.backgroundColor = bgc;\r\n    priorityInput.style.borderColor = borderColor;\r\n  }\r\n\r\n  function addAnimation(element, type, timing) {\r\n    element.style.animation = `${String(timing)}s ${type}`;\r\n  }\r\n\r\n\r\n  function addSuccessMessage() {\r\n    const darkenBodyDiv = getFormContainer();\r\n    const panelFormContainer = darkenBodyDiv.querySelector(\".panel-form-container\");\r\n    const panelFormContainerChildrens = panelFormContainer.querySelectorAll(\"*\");\r\n    console.log(darkenBodyDiv);\r\n    startSuccessAnimationBundle();\r\n\r\n\r\n    function startSuccessAnimationBundle() {\r\n      formPanel.addAnimation(panelFormContainer, \"success\", 2);\r\n      panelFormContainerChildrens.forEach(children => {\r\n        formPanel.addAnimation(children, \"fadeOut\", .2);\r\n      })\r\n      setTimeout(() => {\r\n        panelFormContainer.innerHTML = \"\";\r\n        panelFormContainer.classList.add(\"success-container\");\r\n\r\n        panelFormContainer.innerHTML += _assets_check_bold_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n        formPanel.addAnimation(panelFormContainer.querySelector(\"svg\"), \"fadeIn\", .5);\r\n      }, 190);\r\n      setTimeout(() => {\r\n        formPanel.addAnimation(darkenBodyDiv, \"fadeOut\", .5);\r\n        setTimeout(() => darkenBodyDiv.remove(), 490);\r\n      }, 1300);\r\n    }\r\n  }\r\n\r\n  return {displayFormContainer, getFormContainer, displayColorOptions, changePriorityColor, addAnimation, addSuccessMessage};\r\n})()\r\n\r\nconst formPanelLogic = (() => {\r\n  function listenCloseBtn(closeBtn) {\r\n    closeBtn.addEventListener('click', () => {\r\n      const darkenBodyDiv = formPanel.getFormContainer();\r\n      const panelFormContainer = darkenBodyDiv.querySelector(\".panel-form-container\");\r\n      formPanel.addAnimation(panelFormContainer, \"slideCenterOut\", .5);\r\n      formPanel.addAnimation(darkenBodyDiv, \"fadeOut\", .5);\r\n      setTimeout(() => {\r\n        darkenBodyDiv.remove();\r\n        panelFormContainer.remove();\r\n      }, 495);\r\n    })\r\n  }\r\n\r\n  function listenPriorityInput(priorityInput) {\r\n    const colorOptionsContainer = document.createElement(\"div\");\r\n    colorOptionsContainer.classList.add(\"color-options-container\");\r\n\r\n    priorityInput.addEventListener(\"click\", () => {\r\n      formPanel.displayColorOptions(colorOptionsContainer);\r\n      listenColorOptions(colorOptionsContainer);\r\n      window.addEventListener(\"click\", e => {\r\n        if (!e.target.getAttribute(\"id\", \"priority-input\")) {\r\n          formPanel.displayColorOptions(colorOptionsContainer, \"window\");\r\n        }\r\n      })\r\n    })\r\n\r\n    function listenColorOptions() {\r\n      const colorOptions = colorOptionsContainer.querySelectorAll(\".color-options\");\r\n\r\n      colorOptions.forEach(option => {\r\n        option.addEventListener(\"click\", () => {\r\n          const bgc = option.style.backgroundColor;\r\n          const borderColor = option.style.borderColor;\r\n          formPanel.changePriorityColor(priorityInput, bgc, borderColor);\r\n        })\r\n      })\r\n    }\r\n  }\r\n\r\n\r\n  function listenAddBtn(addBtn, panelFormContainer) {\r\n    addBtn.addEventListener(\"click\", e => {\r\n\r\n      // seperating priority input because it is a custom input type and is a div\r\n      const inputContainers = panelFormContainer.querySelectorAll(\".form-input-container .input-container:not(#priority-input)\");\r\n      const priorityInput = panelFormContainer.querySelector(\"#priority-input\");\r\n      let areValidInputs = checkFormValidity(inputContainers);\r\n\r\n      if (areValidInputs) {\r\n        inputContainers.forEach(input => {\r\n          console.log(input.value);\r\n          console.log(priorityInput.getAttribute(\"value\"));\r\n        });\r\n        // formPanel.addSuccessMessage(panelFormContainer);\r\n      }\r\n    });\r\n\r\n    function checkFormValidity(inputContainers) {\r\n      for (let input of inputContainers) {\r\n        if (!input.checkValidity()) {\r\n          return false;\r\n        }\r\n      }\r\n      return true;\r\n    }\r\n  }\r\n\r\n  return {listenCloseBtn, listenPriorityInput, listenAddBtn};\r\n})()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formPanel);\n\n//# sourceURL=webpack://my_package/./src/formView.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/formView.js");
/******/ 	
/******/ })()
;