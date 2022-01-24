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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_Component_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/Component.service */ \"./src/services/Component.service.js\");\n/* harmony import */ var _services_Alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/Alert.service */ \"./src/services/Alert.service.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils/index.js\");\n\n\n\n\nconst alertService = new _services_Alert_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\nconst componentService = new _services_Component_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n\nconst run = (alertService, componentService) => {\n\n    alertService.hideErrors()\n\n    componentService.onClick(() => {\n        alertService.hideErrors()\n        const inputs = componentService.getInputs()\n        const parsedInputs = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.parseInputs)(...inputs)\n        if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.inputsAreValid)(...parsedInputs)) {\n            componentService.setResult(parsedInputs.reduce((prev, curr) => prev + curr))\n        } else {\n            componentService.setResult('')\n            alertService.handleAdditionError(inputs, parsedInputs)\n        }\n\n    })\n}\n\nrun(alertService, componentService)\n\n\n//# sourceURL=webpack://webpack_basics/./src/index.js?");

/***/ }),

/***/ "./src/services/Alert.service.js":
/*!***************************************!*\
  !*** ./src/services/Alert.service.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\n\nclass AlertService {\n    constructor() {\n        this.errorBox = document.getElementById('error')\n    }\n\n    handleAdditionError = (inputs, numbers) => {\n        const fullMessage = inputs.reduce((message, str, index) => {\n            if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.inputsAreValid)(numbers[index])) {\n                return message + \"\"\n            } else return message + `${str} is not a number`\n        }, 'Please enter two valid numbers!')\n\n        this.errorBox.classList.remove('invisible')\n        this.errorBox.innerText = fullMessage\n    }\n\n\n    hideErrors = () => {\n        this.errorBox.classList.add('invisible')\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertService);\n\n\n//# sourceURL=webpack://webpack_basics/./src/services/Alert.service.js?");

/***/ }),

/***/ "./src/services/Component.service.js":
/*!*******************************************!*\
  !*** ./src/services/Component.service.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ComponentService {\n\n    constructor() {\n\n        this.numberOneInput = document.getElementById('numberOne')\n        this.numberTwoInput = document.getElementById('numberTwo')\n        this.addValuesButton = document.getElementById('addValues')\n        this.resultsDiv = document.getElementById('result')\n    }\n\n    getInputs() {\n        return [this.numberTwoInput.value, this.numberOneInput.value]\n    }\n\n    setResult(str) {\n        this.resultsDiv.innerText = str;\n    }\n\n    onClick(cb) {\n        this.addValuesButton.addEventListener('click', cb)\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentService);\n\n\n//# sourceURL=webpack://webpack_basics/./src/services/Component.service.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseInputs\": () => (/* binding */ parseInputs),\n/* harmony export */   \"inputsAreValid\": () => (/* binding */ inputsAreValid)\n/* harmony export */ });\nconst parseInputs = (...input) => {\n    return input.map(str => parseInt(str))\n}\n\nconst inputsAreValid = (...input) => {\n    return input.every(num => typeof num === 'number' && !isNaN(num))\n}\n\n\n//# sourceURL=webpack://webpack_basics/./src/utils/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;