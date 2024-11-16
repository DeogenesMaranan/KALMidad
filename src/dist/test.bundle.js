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

/***/ "./web/presenter/test.js":
/*!*******************************!*\
  !*** ./web/presenter/test.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\nvar selectedImage\r\nconst uploadButton = document.getElementById('uploadButton')\r\nconst imageSelector = document.getElementById('imageSelector')\r\n\r\n\r\nimageSelector.addEventListener('change', (e) => {\r\n    selectedImage = e.target.files[0]\r\n})\r\n\r\nuploadButton.addEventListener('click', () => {\r\n    if(selectedImage) {\r\n        const formData = new FormData()\r\n        formData.append('file', selectedImage)\r\n\r\n        uploadImage(formData)\r\n    }\r\n})\r\n\r\nasync function uploadImage(imagePath) {\r\n    try {\r\n        console.log(\"image path: \" + imagePath)\r\n        const response = await axios.post(\r\n            'http://localhost:5500/data/uploadImage',\r\n            { imagePath: imagePath },\r\n            { headers: { 'Content-Type': 'application/json'}}\r\n        )\r\n        console.log('Response', response)\r\n    } catch(error) { console.error(error.message) }\r\n}\n\n//# sourceURL=webpack://src/./web/presenter/test.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	__webpack_modules__["./web/presenter/test.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;