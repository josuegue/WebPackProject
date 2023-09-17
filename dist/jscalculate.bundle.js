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

/***/ "./js/calculate.js":
/*!*************************!*\
  !*** ./js/calculate.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_aggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module/aggregator.js */ \"./module/aggregator.js\");\n\r\nfunction calcular(event) {\r\n    event.preventDefault();\r\n\r\n    const numero1 = parseFloat(document.getElementById('numero1').value);\r\n    const numero2 = parseFloat(document.getElementById('numero2').value);\r\n    const operacion = document.getElementById('operacion').value;\r\n    let resultado;\r\n\r\n    switch (operacion) {\r\n        case 'suma':\r\n            resultado = (0,_module_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.sumar)(numero1, numero2);\r\n            break;\r\n        case 'resta':\r\n            resultado = (0,_module_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.restar)(numero1, numero2);\r\n            break;\r\n        case 'multiplicacion':\r\n            resultado = (0,_module_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.multiplicar)(numero1, numero2);\r\n            break;\r\n        case 'division':\r\n            resultado = (0,_module_aggregator_js__WEBPACK_IMPORTED_MODULE_0__.dividir)(numero1, numero2);\r\n            break;\r\n        default:\r\n            resultado = 'Operación no válida';\r\n            break;\r\n    }\r\n\r\n    document.getElementById('result').textContent = `Resultado: ${resultado}`;\r\n}\r\n\r\n// Asignar el evento submit al formulario\r\ndocument.getElementById('calcForm').addEventListener('submit', calcular);\n\n//# sourceURL=webpack://webpackproject/./js/calculate.js?");

/***/ }),

/***/ "./module/aggregator.js":
/*!******************************!*\
  !*** ./module/aggregator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* reexport safe */ _taskList_js__WEBPACK_IMPORTED_MODULE_1__.addTask),\n/* harmony export */   celsiusToFahrenheit: () => (/* reexport safe */ _unitConvert_js__WEBPACK_IMPORTED_MODULE_2__.celsiusToFahrenheit),\n/* harmony export */   completeTask: () => (/* reexport safe */ _taskList_js__WEBPACK_IMPORTED_MODULE_1__.completeTask),\n/* harmony export */   dividir: () => (/* reexport safe */ _calculos_js__WEBPACK_IMPORTED_MODULE_0__.dividir),\n/* harmony export */   fahrenheitToCelsius: () => (/* reexport safe */ _unitConvert_js__WEBPACK_IMPORTED_MODULE_2__.fahrenheitToCelsius),\n/* harmony export */   generatePassword: () => (/* reexport safe */ _passwordGen_js__WEBPACK_IMPORTED_MODULE_3__.generatePassword),\n/* harmony export */   getTasks: () => (/* reexport safe */ _taskList_js__WEBPACK_IMPORTED_MODULE_1__.getTasks),\n/* harmony export */   imageGalleryModule: () => (/* reexport safe */ _imgViewer_js__WEBPACK_IMPORTED_MODULE_4__.imageGalleryModule),\n/* harmony export */   multiplicar: () => (/* reexport safe */ _calculos_js__WEBPACK_IMPORTED_MODULE_0__.multiplicar),\n/* harmony export */   restar: () => (/* reexport safe */ _calculos_js__WEBPACK_IMPORTED_MODULE_0__.restar),\n/* harmony export */   sumar: () => (/* reexport safe */ _calculos_js__WEBPACK_IMPORTED_MODULE_0__.sumar)\n/* harmony export */ });\n/* harmony import */ var _calculos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculos.js */ \"./module/calculos.js\");\n/* harmony import */ var _taskList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskList.js */ \"./module/taskList.js\");\n/* harmony import */ var _unitConvert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unitConvert.js */ \"./module/unitConvert.js\");\n/* harmony import */ var _passwordGen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passwordGen.js */ \"./module/passwordGen.js\");\n/* harmony import */ var _imgViewer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgViewer.js */ \"./module/imgViewer.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpackproject/./module/aggregator.js?");

/***/ }),

/***/ "./module/calculos.js":
/*!****************************!*\
  !*** ./module/calculos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dividir: () => (/* binding */ dividir),\n/* harmony export */   multiplicar: () => (/* binding */ multiplicar),\n/* harmony export */   restar: () => (/* binding */ restar),\n/* harmony export */   sumar: () => (/* binding */ sumar)\n/* harmony export */ });\n// calculations.js\r\n\r\nfunction sumar(a, b) {\r\n    return a + b;\r\n}\r\n\r\nfunction restar(a, b) {\r\n    return a - b;\r\n}\r\n\r\nfunction multiplicar(a, b) {\r\n    return a * b;\r\n}\r\n\r\nfunction dividir(a, b) {\r\n    if (b === 0) {\r\n        throw new Error('No se puede dividir por cero.');\r\n    }\r\n    return a / b;\r\n}\r\n\n\n//# sourceURL=webpack://webpackproject/./module/calculos.js?");

/***/ }),

/***/ "./module/imgViewer.js":
/*!*****************************!*\
  !*** ./module/imgViewer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   imageGalleryModule: () => (/* binding */ imageGalleryModule)\n/* harmony export */ });\nconst imageGalleryModule = (() => {\r\n    const imageGallery = document.getElementById('image-gallery');\r\n\r\n    const displayImage = (file) => {\r\n        const image = document.createElement('img');\r\n        image.src = URL.createObjectURL(file);\r\n        image.classList.add('gallery-image');\r\n        imageGallery.appendChild(image);\r\n    };\r\n\r\n    const handleFileSelect = (event) => {\r\n        const files = event.target.files;\r\n        for (const file of files) {\r\n            displayImage(file);\r\n        }\r\n    };\r\n\r\n    return {\r\n        init: () => {\r\n            const imageUpload = document.getElementById('image-upload');\r\n            imageUpload.addEventListener('change', handleFileSelect);\r\n        },\r\n    };\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://webpackproject/./module/imgViewer.js?");

/***/ }),

/***/ "./module/passwordGen.js":
/*!*******************************!*\
  !*** ./module/passwordGen.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generatePassword: () => (/* binding */ generatePassword)\n/* harmony export */ });\nconst generatePassword = (length, includeLetters, includeNumbers, includeSymbols) => {\r\n    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';\r\n    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';\r\n    const numbers = '0123456789';\r\n    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';\r\n\r\n    let characters = '';\r\n    if (includeLetters) {\r\n        characters += lowercaseLetters;\r\n        characters += includeLetters ? uppercaseLetters : '';\r\n    }\r\n    if (includeNumbers) characters += numbers;\r\n    if (includeSymbols) characters += symbols;\r\n\r\n    let password = '';\r\n    for (let i = 0; i < length; i++) {\r\n        const randomIndex = Math.floor(Math.random() * characters.length);\r\n        password += characters[randomIndex];\r\n    }\r\n\r\n    return password;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpackproject/./module/passwordGen.js?");

/***/ }),

/***/ "./module/taskList.js":
/*!****************************!*\
  !*** ./module/taskList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   completeTask: () => (/* binding */ completeTask),\n/* harmony export */   getTasks: () => (/* binding */ getTasks),\n/* harmony export */   tasks: () => (/* binding */ tasks)\n/* harmony export */ });\n\r\nlet tasks = [];\r\n\r\nfunction addTask(task) {\r\n    tasks.push(task);\r\n}\r\n\r\nfunction completeTask(index) {\r\n    if (index >= 0 && index < tasks.length) {\r\n        tasks[index].completed = true;\r\n    }\r\n}\r\n\r\nfunction getTasks() {\r\n    return tasks;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpackproject/./module/taskList.js?");

/***/ }),

/***/ "./module/unitConvert.js":
/*!*******************************!*\
  !*** ./module/unitConvert.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   celsiusToFahrenheit: () => (/* binding */ celsiusToFahrenheit),\n/* harmony export */   fahrenheitToCelsius: () => (/* binding */ fahrenheitToCelsius)\n/* harmony export */ });\nconst celsiusToFahrenheit = (celsius) =>{\r\n    return (celsius * 9/5) + 32;\r\n}\r\n\r\nconst fahrenheitToCelsius= (fahrenheit) => {\r\n    return (fahrenheit - 32) * 5/9;\r\n}\n\n//# sourceURL=webpack://webpackproject/./module/unitConvert.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/calculate.js");
/******/ 	
/******/ })()
;