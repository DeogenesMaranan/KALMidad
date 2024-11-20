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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = axios;

/***/ }),

/***/ "./web/presenter/login.js":
/*!********************************!*\
  !*** ./web/presenter/login.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n\r\n\r\n\r\n\r\nconst signinButton = document.getElementById('signin-button')\r\n\r\nsigninButton.addEventListener('click', async () => {\r\n    const p_email = document.getElementById('signin-email').value;\r\n    const p_password = document.getElementById('signin-password').value;\r\n    const recaptchaToken = document.getElementById('g-recaptcha-response').value;\r\n\r\n    try {\r\n        const user = await signInUser(p_email, p_password, recaptchaToken);\r\n        \r\n        if (user.data.user.uid) {\r\n            const loggedInUid = user.data.user.uid\r\n            const userCred = await getUserType(loggedInUid)\r\n            // console.log('user type: ', userCred)\r\n\r\n            if (userCred.data.userType == 'client') {\r\n                console.log(\"USer:\", loggedInUid)\r\n                sessionStorage.setItem('uid', loggedInUid)\r\n                sessionStorage.setItem('userType', userCred.data.userType)\r\n                window.top.location.href = '../structure/home-skeleton.html'\r\n            } else {\r\n                // open admin home\r\n            }\r\n        }\r\n    } \r\n    catch (error) {\r\n        const errorHolder = document.getElementById('error-message-holder');\r\n        errorHolder.textContent = `Error signing in: ${error.message}`;\r\n        errorHolder.style.display = 'block';\r\n    }\r\n});\r\n\r\nasync function signInUser(p_email, p_password, recaptchaToken) {\r\n    try {\r\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__.post(\r\n            'http://localhost:5500/users/signin', \r\n            { p_email, p_password, recaptchaToken, }, \r\n            { headers: { 'Content-Type': 'application/json', }}\r\n        )\r\n\r\n        if (response.data && response.data.message) {\r\n            return response\r\n        }\r\n    } catch(error) { throw error }\r\n};\r\n\r\nasync function getUserType(uid) {\r\n    try {\r\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__.get(\r\n            'http://localhost:5500/users/getUserType',  {\r\n                params: {\r\n                    uid: uid,\r\n                },\r\n                headers: {'Content-Type': 'application/json', },\r\n            }\r\n        )\r\n        return response\r\n    }\r\n    catch (error) { throw error}\r\n}\r\n\n\n//# sourceURL=webpack://src/./web/presenter/login.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./web/presenter/login.js");
/******/ 	
/******/ })()
;