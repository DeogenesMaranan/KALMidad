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

/***/ "./model/user-credential.js":
/*!**********************************!*\
  !*** ./model/user-credential.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass UserCredential {\r\n    #state \r\n    #suffix\r\n    #region \r\n    #userType\r\n    #lastname\r\n    #firstname \r\n    #middlename\r\n\r\n    constructor(firstname='', middlename='', lastname='',\r\n                suffix='null', region='', state=''\r\n    ) {\r\n        this.#state = state\r\n        this.#suffix = suffix\r\n        this.#region = region\r\n        this.#userType = 'admin'\r\n        this.#lastname = lastname\r\n        this.#firstname = firstname\r\n        this.#middlename = middlename\r\n    }\r\n\r\n    get state() { return this.#state }\r\n    get suffix() { return this.#suffix }\r\n    get region() { return this.#region }\r\n    get userType() { return this.#userType }\r\n    get lastname() { return this.#lastname }\r\n    get firstname() { return this.#firstname }\r\n    get middlename() { return this.#middlename }\r\n\r\n    set state(state) { this.#state = state }\r\n    set suffix(suffix) {this.#suffix = suffix }\r\n    set region(region) { this.#region = region } \r\n    set lastname(lastname) { this.#lastname = lastname }\r\n    set firstname(firstname) {this.#firstname = firstname }\r\n    set middlename(middlename) {this.#middlename = middlename }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserCredential);\n\n//# sourceURL=webpack://src/./model/user-credential.js?");

/***/ }),

/***/ "./web/presenter/landing.js":
/*!**********************************!*\
  !*** ./web/presenter/landing.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_user_credential_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/user-credential.js */ \"./model/user-credential.js\");\n\r\n\r\n\r\nlet loggedInUid;\r\n\r\nasync function signInUser(p_email, p_password, recaptchaToken) {\r\n    try {\r\n        const response = await axios.post(\r\n            'http://localhost:5500/users/signin', \r\n            { p_email, p_password, recaptchaToken, }, \r\n            { headers: { 'Content-Type': 'application/json', }}\r\n        );\r\n\r\n        if (response.data && response.data.message) {\r\n            loggedInUid = response.data.user.uid\r\n            console.log('User signed in:', response.data.user)\r\n        }\r\n    } catch (error) {\r\n        console.error('Sign-in error:', error);\r\n    }\r\n};\r\n\r\nasync function signupUser(p_email, p_password, recaptchaToken) {\r\n    try {\r\n        const response = await axios.post(\r\n            'http://localhost:5500/users/signup',\r\n            { p_email, p_password, recaptchaToken, },\r\n            { headers: { 'Content-Type': 'application/json', }}\r\n        )\r\n        if (response.data && response.data.message) {\r\n            loggedInUid = response.data.user.uid\r\n            console.log('User signed up:', response.data.user)\r\n        }\r\n    } catch(error) {\r\n        console.error('Sign-up error:', error)\r\n    }\r\n}\r\n\r\nasync function insertUserInfo(p_user) {\r\n    try {\r\n        const response = await axios.post(\r\n            'http://localhost:5500/users/insertUserInfo', { \r\n                uid: loggedInUid,\r\n                firstname: p_user.firstname, \r\n                middlename: p_user.middlename, \r\n                lastname: p_user.lastname,\r\n                suffix: p_user.suffix,\r\n                region: p_user.region,\r\n                state: p_user.state,\r\n            }, \r\n            { headers: { 'Content-Type': 'application/json', }}\r\n        )\r\n        if (response.data.message) {\r\n            console.log('Process Successful: ', response.data.message)\r\n        }\r\n    } catch(error) {\r\n        console.error('Process Error: ', error.message)\r\n    }\r\n}\r\n\r\nasync function getUserInfo(p_uid) {\r\n    try {\r\n        const response = await axios.get()\r\n    } catch(error) {\r\n        console.error('Process Error: ', error.message)\r\n    }\r\n}\r\n\r\nconst signinButton = document.getElementById('signin')\r\nsigninButton.addEventListener('click', () => {\r\n    const recaptchaToken = document.getElementById('g-recaptcha-response').value\r\n    const p_email = document.getElementById('in_email').value\r\n    const p_password = document.getElementById('in_password').value\r\n\r\n    signInUser(p_email, p_password, recaptchaToken)\r\n})\r\n\r\nconst signupButton = document.getElementById('signup')\r\nsignupButton.addEventListener('click', () => {\r\n    const recaptchaToken = document.getElementById('g-recaptcha-response').value\r\n    const p_email = document.getElementById('email').value\r\n    const p_password = document.getElementById('password').value\r\n\r\n    signupUser(p_email, p_password, recaptchaToken)\r\n})\r\n\r\nconst addNameButton = document.getElementById('add-name')\r\naddNameButton.addEventListener('click', () => {\r\n    const p_user = new _model_user_credential_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n\r\n    p_user.firstname = document.getElementById('add_fname').value\r\n    p_user.middlename = document.getElementById('add_mname').value\r\n    p_user.lastname = document.getElementById('add_lname').value \r\n    p_user.region = \"Region IVA - CALABORZON\"\r\n    p_user.state = 'Batangas'\r\n\r\n    insertUserInfo(p_user)\r\n})\n\n//# sourceURL=webpack://src/./web/presenter/landing.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./web/presenter/landing.js");
/******/ 	
/******/ })()
;