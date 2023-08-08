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

/***/ "./src/formView.js":
/*!*************************!*\
  !*** ./src/formView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './assets/close-thick.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\nconst formPanel = (() => {\r\n  let darkenBodyDiv;\r\n\r\n  function displayFormContainer() {\r\n    darkenBodyDiv = document.createElement(\"div\");\r\n    darkenBodyDiv.classList.add(\"darken-body-div\");\r\n\r\n    const panelFormContainer = document.createElement(\"div\");\r\n    panelFormContainer.classList.add(\"panel-form-container\");\r\n    panelFormContainer.append(addCloseBtn(), addTodoHeading(), addFormInputPanel());\r\n    darkenBodyDiv.appendChild(panelFormContainer);\r\n\r\n    function addCloseBtn() {\r\n      const closeBtn = document.createElement(\"btn\");\r\n      closeBtn.innerHTML = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './assets/close-thick.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\r\n      closeBtn.classList.add(\"close-form-btn\");\r\n      formPanelLogic.listenCloseBtn(closeBtn);\r\n\r\n      return closeBtn;\r\n    }\r\n\r\n    function addTodoHeading() {\r\n      const todoHeading = document.createElement(\"h1\");\r\n      todoHeading.textContent = \"TODO\";\r\n\r\n      return todoHeading;\r\n    }\r\n\r\n    function addFormInputPanel() {\r\n      const form = document.createElement(\"form\");\r\n      form.classList.add(\"form-input-container\");\r\n      form.append(addTitleInput(), addDueDate(), addDescInput(), addPriorityDiv(), addAddBtn());\r\n\r\n      function addTitleInput() {\r\n        const titleInput = document.createElement(\"input\");\r\n        titleInput.classList.add(\"input-container\");\r\n        titleInput.classList.add(\"title-input\");\r\n        titleInput.placeholder = \"Title*\";\r\n\r\n        return titleInput;\r\n      }\r\n\r\n      function addDueDate() {\r\n        const dateInput = document.createElement(\"input\");\r\n        dateInput.classList.add(\"input-container\");\r\n        dateInput.classList.add(\"date-input\");\r\n        dateInput.type = \"datetime-local\";\r\n\r\n        return dateInput;\r\n      }\r\n\r\n      function addDescInput() {\r\n        const descInput = document.createElement(\"textarea\");\r\n        descInput.classList.add(\"input-container\");\r\n        descInput.classList.add(\"desc-input\");\r\n        descInput.placeholder = \"Description\";\r\n\r\n        return descInput;\r\n      }\r\n\r\n      function addPriorityDiv() {\r\n        const priorityDiv = document.createElement(\"div\");\r\n        priorityDiv.classList.add(\"priority-container\");\r\n        priorityDiv.append(addPriorityLabel(), addPriorityInput());\r\n\r\n        function addPriorityLabel() {\r\n          const priorityLabel = document.createElement(\"label\");\r\n          priorityLabel.setAttribute(\"for\", \"priority-input\");\r\n          priorityLabel.textContent = \"Priority: \";\r\n          return priorityLabel;\r\n        }\r\n\r\n        function addPriorityInput() {\r\n          const prioritySelect = document.createElement(\"div\");\r\n          prioritySelect.classList.add(\"input-container\");\r\n          prioritySelect.setAttribute(\"id\", \"priority-input\");\r\n          formPanelLogic.listenPriorityInput(prioritySelect);\r\n\r\n          return prioritySelect;\r\n        }\r\n\r\n        return priorityDiv;\r\n      }\r\n\r\n      function addAddBtn() {\r\n        const addBtn = document.createElement(\"button\");\r\n        addBtn.type = \"submit\";\r\n        addBtn.textContent = \"ADD\";\r\n\r\n        return addBtn;\r\n      }\r\n\r\n      return form;\r\n    }\r\n    return darkenBodyDiv;\r\n  }\r\n\r\n  function getFormContainer() {\r\n    return darkenBodyDiv;\r\n  }\r\n\r\n  function displayColorOptions(colorOptionsContainer) {\r\n    if (!colorOptionsContainer.classList.contains(\"show-container\")) {\r\n      colorOptionsContainer.classList.add(\"show-container\");\r\n      colorOptionsContainer.classList.add(\"input-container\");\r\n      colorOptionsContainer.classList.add(\"color-options-container\");\r\n      colorOptionsContainer.style.display = \"flex\";\r\n\r\n      const panelFormContainer = getFormContainer().querySelector(\".panel-form-container\");\r\n\r\n      addOptions().forEach(option => {\r\n        colorOptionsContainer.appendChild(option);\r\n      })\r\n      panelFormContainer.appendChild(colorOptionsContainer);\r\n\r\n      function addOptions() {\r\n        const option1 = document.createElement(\"div\");\r\n        option1.classList.add(\"color-options\");\r\n        option1.classList.add(\"color-option-red\");\r\n\r\n        const option2 = document.createElement(\"div\");\r\n        option2.classList.add(\"color-options\");\r\n        option2.classList.add(\"color-option-orange\");\r\n\r\n        const option3 = document.createElement(\"div\");\r\n        option3.classList.add(\"color-options\");\r\n        option3.classList.add(\"color-option-blue\");\r\n\r\n        function addOptionsSeperator() {\r\n          const optionsSeperator = document.createElement(\"p\");\r\n          optionsSeperator.textContent = \"|\";\r\n\r\n          return optionsSeperator;\r\n        }\r\n\r\n        const option4 = document.createElement(\"div\");\r\n        option4.classList.add(\"color-options\");\r\n        option4.classList.add(\"color-option-gray\");\r\n\r\n        return [option1, option2, option3, addOptionsSeperator(), option4];\r\n      }\r\n    } else {\r\n      colorOptionsContainer.classList.remove(\"show-container\");\r\n      colorOptionsContainer.classList.remove(\"input-container\");\r\n      colorOptionsContainer.classList.remove(\"color-options-container\");\r\n      colorOptionsContainer.style.display = \"none\";\r\n      colorOptionsContainer.innerHTML = \"\";\r\n    }\r\n  }\r\n\r\n  return {displayFormContainer, getFormContainer, displayColorOptions};\r\n})()\r\n\r\nconst formPanelLogic = (() => {\r\n  function listenCloseBtn(closeBtn) {\r\n    closeBtn.addEventListener('click', () => {\r\n      const darkenBodyDiv = formPanel.getFormContainer();\r\n      const panelFormContainer = darkenBodyDiv.querySelector(\".panel-form-container\");\r\n      panelFormContainer.style.animation = \".5s slideCenterOut\";\r\n      darkenBodyDiv.style.animation = \".5s fadeOut\";\r\n      setTimeout(() => {\r\n        darkenBodyDiv.remove();\r\n        panelFormContainer.remove();\r\n        console.log(\"removing\");\r\n      }, 495);\r\n    })\r\n  }\r\n\r\n  function listenPriorityInput(priorityInput) {\r\n    const colorOptionsContainer = document.createElement(\"div\");\r\n\r\n    priorityInput.addEventListener(\"click\", () => {\r\n      formPanel.displayColorOptions(colorOptionsContainer);\r\n    })\r\n  }\r\n\r\n  return {listenCloseBtn, listenPriorityInput};\r\n})()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formPanel);\n\n//# sourceURL=webpack://my_package/./src/formView.js?");

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
/******/ 	__webpack_modules__["./src/formView.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;