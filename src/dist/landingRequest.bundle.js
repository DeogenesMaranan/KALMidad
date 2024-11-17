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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nclass UserCredential {\r\n    #city \r\n    #town \r\n    #suffix\r\n    #userType\r\n    #lastname\r\n    #firstname \r\n    #middlename\r\n\r\n    constructor(firstname='', middlename='', lastname='',\r\n                city='', town=''\r\n    ) {\r\n        this.#city = city\r\n        this.#town = town\r\n        this.#userType = 'admin'\r\n        this.#lastname = lastname\r\n        this.#firstname = firstname\r\n        this.#middlename = middlename\r\n    }\r\n\r\n    get town() { return this.#town }\r\n    get city() { return this.#city }\r\n    get userType() { return this.#userType }\r\n    get lastname() { return this.#lastname }\r\n    get firstname() { return this.#firstname }\r\n    get middlename() { return this.#middlename }\r\n\r\n    set city(city) { this.#city = city } \r\n    set town(town) { this.#town = town }\r\n    set userType(userType) {this.#userType = userType }\r\n    set lastname(lastname) { this.#lastname = lastname }\r\n    set firstname(firstname) {this.#firstname = firstname }\r\n    set middlename(middlename) {this.#middlename = middlename }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserCredential);\n\n//# sourceURL=webpack://src/./model/user-credential.js?");

/***/ }),

/***/ "./web/presenter/landingRequest.js":
/*!*****************************************!*\
  !*** ./web/presenter/landingRequest.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_user_credential_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/user-credential.js */ \"./model/user-credential.js\");\n\r\n\r\n\r\nlet loggedInUid;\r\n\r\nasync function signInUser(p_email, p_password, recaptchaToken) {\r\n    try {\r\n        const response = await axios.post(\r\n            'http://localhost:5500/users/signin', \r\n            { p_email, p_password, recaptchaToken, }, \r\n            { headers: { 'Content-Type': 'application/json', }}\r\n        );\r\n\r\n        if (response.data && response.data.message) {\r\n            loggedInUid = response.data.user.uid\r\n            console.log('User signed in:', response.data.user)\r\n        }\r\n    } catch (error) {\r\n        console.error('Sign-in error:', error);\r\n    }\r\n};\r\n\r\nasync function signupUser(p_email, p_password, recaptchaToken) {\r\n    try {\r\n        const response = await axios.post(\r\n            'http://localhost:5500/users/signup',\r\n            { p_email, p_password, recaptchaToken, },\r\n            { headers: { 'Content-Type': 'application/json', }}\r\n        )\r\n        if (response.data && response.data.message) {\r\n            loggedInUid = response.data.user.uid\r\n            console.log('User signed up:', response.data.user)\r\n        }\r\n    } catch(error) {\r\n        console.error('Sign-up error:', error)\r\n    }\r\n}\r\n\r\nasync function insertUserInfo(p_user) {\r\n    try {\r\n        loggedInUid = 'sfdsfds'\r\n        const response = await axios.post(\r\n            'http://localhost:5500/users/insertUserInfo', { \r\n                uid: loggedInUid,\r\n                firstname: p_user.firstname, \r\n                middlename: p_user.middlename, \r\n                lastname: p_user.lastname,\r\n                town: p_user.town,\r\n                city: p_user.city,\r\n                userType: p_user.userType,\r\n            }, \r\n            { headers: { 'Content-Type': 'application/json', }}\r\n        )\r\n        if (response.data.message) {\r\n            console.log('Process Successful: ', response.data.message)\r\n        }\r\n    } catch(error) {\r\n        console.error('Process Error: ', error.message)\r\n    }\r\n}\r\n\r\n// get one user info for admin profile page.\r\nasync function getUserInfo(p_uid) {\r\n    try {\r\n        const response = await axios.get(\r\n            'http://localhost:5500/users/getUserInfoById', {\r\n                params: {\r\n                    document: 'users-credential',\r\n                    uid: p_uid,\r\n                },\r\n                headers: {'Content-Type': 'application/json', },\r\n            }\r\n        )\r\n        return response\r\n    } catch(error) {\r\n        console.error('Process Error: ', error.message)\r\n    }\r\n}\r\n\r\n// for list of reports per city\r\nasync function getAllByCity(p_city) {\r\n    try {\r\n        const response = await axios.get(\r\n            'http://localhost:5500/data/getAllByConstraint', \r\n            {\r\n                params: {field: 'city',\r\n                constraint: p_city,\r\n                },\r\n                headers: { 'Content-Type': 'application/json', },\r\n            }\r\n        )\r\n        // const filteredData = response.data.filter((doc) => doc.status !== \"Resolved\");\r\n        return response;\r\n    }\r\n    catch(error) {\r\n        console.error('Process Error: ', error.message)\r\n    }\r\n}\r\n\r\nconst signinButton = document.getElementById('signin-button')\r\nsigninButton.addEventListener('click', () => {\r\n    const recaptchaToken = document.getElementById('g-recaptcha-response').value\r\n    const p_email = document.getElementById('signin-email').value\r\n    const p_password = document.getElementById('signin-password').value\r\n\r\n    signInUser(p_email, p_password, recaptchaToken)\r\n})\r\n\r\nconst signupButton = document.getElementById('signup-button')\r\nsignupButton.addEventListener('click', () => {\r\n    const recaptchaToken = document.getElementById('g-recaptcha-response').value\r\n    const p_email = document.getElementById('email').value\r\n    const p_password = document.getElementById('password').value\r\n\r\n    signupUser(p_email, p_password, recaptchaToken)\r\n})\r\n\r\n// const addNameButton = document.getElementById('add-name')\r\n// addNameButton.addEventListener('click', () => {\r\n//     const p_user = new userInfoModel()\r\n\r\n//     p_user.firstname = document.getElementById('add_fname').value\r\n//     p_user.middlename = document.getElementById('add_mname').value\r\n//     p_user.lastname = document.getElementById('add_lname').value \r\n//     p_user.city = 'San Pascual'\r\n//     p_user.town = 'Padre Castillo'\r\n//     p_user.userType = 'client'\r\n\r\n//     insertUserInfo(p_user)\r\n// })\r\n\r\n\r\nfunction sampleRun() {\r\n    getAllByCity('San Pascual')\r\n        .then((reportList) => {\r\n            console.log('REPORT LIST:', reportList);\r\n        })\r\n        .catch((error) => {\r\n            console.error('Error fetching report list:', error);\r\n        });\r\n}\r\n\r\nfunction sampleRun1() {\r\n    getUserInfo('jiZ0VjqKvPWDuimKsBcHwKNrqz43')\r\n        .then((reportList) => {\r\n            console.log('USER INFO:', reportList.data.firstname)\r\n        })\r\n        .catch((error) => {\r\n            console.error('Error fetching user info:', error);\r\n        });\r\n}\r\n\n\n//# sourceURL=webpack://src/./web/presenter/landingRequest.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./web/presenter/landingRequest.js");
/******/ 	
/******/ })()
;