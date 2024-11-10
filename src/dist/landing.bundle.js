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

/***/ "./web/presenter/landing.js":
/*!**********************************!*\
  !*** ./web/presenter/landing.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst baseUrl = 'http://localhost:5500/users'\r\n\r\nasync function signInUser(p_email, p_password, recaptchaToken) {\r\n    try {\r\n        const response = await axios.post(\r\n            `${baseUrl}/signin`, \r\n            { p_email, p_password, recaptchaToken, }, \r\n            { headers: { 'Content-Type': 'application/json', }}\r\n        );\r\n\r\n        if (response.data && response.data.message) {\r\n            console.log('User signed in:', response.data.user)\r\n        }\r\n    } catch (error) {\r\n        console.error('Sign-in error:', error);\r\n    }\r\n};\r\n\r\nasync function signupUser(p_email, p_password, recaptchaToken) {\r\n    try {\r\n        const response = await axios.post(\r\n            `${baseUrl}/signup`,\r\n            { p_email, p_password, recaptchaToken, },\r\n            { headers: { 'Content-Type': 'application/json', }}\r\n        )\r\n        if (response.data && response.data.message) {\r\n            console.log('User signed up:', response.data.user)\r\n        }\r\n    } \r\n    catch(error) {\r\n        console.error('Sign-up error:', error)\r\n    }\r\n}\r\n\r\nconst signinButton = document.getElementById('signin')\r\nsigninButton.addEventListener('click', () => {\r\n    const recaptchaToken = document.getElementById('g-recaptcha-response').value\r\n    const p_email = document.getElementById('in_email').value\r\n    const p_password = document.getElementById('in_password').value\r\n\r\n    signInUser(p_email, p_password, recaptchaToken)\r\n})\r\n\r\nconst signupButton = document.getElementById('signup')\r\nsignupButton.addEventListener('click', () => {\r\n    const recaptchaToken = document.getElementById('g-recaptcha-response').value\r\n    const p_email = document.getElementById('email').value\r\n    const p_password = document.getElementById('password').value\r\n\r\n    signupUser(p_email, p_password, recaptchaToken)\r\n})\n\n//# sourceURL=webpack://src/./web/presenter/landing.js?");

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
/******/ 	__webpack_modules__["./web/presenter/landing.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;