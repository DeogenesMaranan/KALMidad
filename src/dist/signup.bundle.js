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

/***/ "./services/request.js":
/*!*****************************!*\
  !*** ./services/request.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteReport: () => (/* binding */ deleteReport),\n/* harmony export */   getAllReportsSubcollection: () => (/* binding */ getAllReportsSubcollection),\n/* harmony export */   getAllUserReport: () => (/* binding */ getAllUserReport),\n/* harmony export */   getUserInfo: () => (/* binding */ getUserInfo),\n/* harmony export */   getUserType: () => (/* binding */ getUserType),\n/* harmony export */   insertNewUser: () => (/* binding */ insertNewUser),\n/* harmony export */   insertReport: () => (/* binding */ insertReport),\n/* harmony export */   insertUserInfo: () => (/* binding */ insertUserInfo),\n/* harmony export */   signInUser: () => (/* binding */ signInUser),\n/* harmony export */   signupUser: () => (/* binding */ signupUser),\n/* harmony export */   updateUserInfo: () => (/* binding */ updateUserInfo),\n/* harmony export */   uploadImage: () => (/* binding */ uploadImage)\n/* harmony export */ });\n\r\nasync function getUserInfo(p_uid) {\r\n    try {\r\n        const response = await axios.get(\r\n            'http://localhost:5500/users/getUserInfoById', {\r\n                params: {\r\n                    document: 'users-credential',\r\n                    uid: p_uid,\r\n                },\r\n                headers: { 'Content-Type': 'application/json' },\r\n            }\r\n        )\r\n        return response\r\n    } catch(error) { throw error }\r\n}\r\n\r\nasync function insertUserInfo(p_user, p_uid) {\r\n    try {\r\n        const response = await axios.post(\r\n            'http://localhost:5500/users/insertUserInfo', {\r\n                uid: p_uid,\r\n                firstname: p_user.firstname, \r\n                middlename: p_user.middlename, \r\n                lastname: p_user.lastname,\r\n                town: p_user.town,\r\n                city: p_user.city,\r\n                userType: p_user.userType,\r\n            },\r\n            { headers: { 'Content-Type': 'application/json' },}\r\n        )\r\n        return response\r\n    } catch(error) { throw error }\r\n}\r\n\r\nasync function getAllUserReport(p_uid) {\r\n    try {\r\n        const response = await axios.get(\r\n            'http://localhost:5500/data/getAllUserReports', {\r\n                params: {\r\n                    document: 'report',\r\n                    uid: p_uid,\r\n                    subcollection: 'userReport',\r\n                },\r\n            },\r\n        )\r\n        return response\r\n    }\r\n    catch(error) { throw error }\r\n}\r\n\r\nasync function uploadImage(selectedImage) {\r\n    try {\r\n        const formData = new FormData()\r\n        formData.append('image', selectedImage)\r\n\r\n        const response = await axios.post(\r\n            'http://localhost:5500/data/uploadImage', formData,\r\n            { headers: { 'Content-Type': 'multipart/form-data', }}\r\n        )\r\n        return response\r\n    } \r\n    catch (error) { throw error }\r\n}\r\n\r\nasync function insertReport(p_report, p_uid) {\r\n    try {\r\n        const response = await axios.post(\r\n            'http://localhost:5500/data/insertReport', {\r\n                uid: p_uid,\r\n                city: p_report.city,\r\n                flag: p_report.flag,\r\n                date: p_report.date,\r\n                time: p_report.time,\r\n                town: p_report.town,\r\n                status: 'pending',\r\n                calamity: p_report.calamity,\r\n                imageLink: p_report.imageLink,\r\n                description: p_report.description,\r\n            },\r\n            { headers: { 'Content-Type': 'application/json', }}\r\n        )\r\n        return response\r\n    }\r\n    catch(error) { throw error }\r\n}\r\n\r\nasync function insertNewUser(p_uid) {\r\n    try {\r\n        const response = await axios.patch(\r\n            'http://localhost:5500/users/insertNewUser', {\r\n                uid: p_uid,\r\n            },\r\n            { headers: { 'Content-Type': 'application/json', }}\r\n        )\r\n        return response\r\n    }\r\n    catch(error) { throw error }\r\n}\r\n\r\nasync function signInUser(p_email, p_password, recaptchaToken) {\r\n    try {\r\n        const response = await axios.post(\r\n            'http://localhost:5500/users/signin', \r\n            { p_email, p_password, recaptchaToken, }, \r\n            { headers: { 'Content-Type': 'application/json', }}\r\n        )\r\n\r\n        if (response.data && response.data.message) {\r\n            return response\r\n        }\r\n    } catch(error) { throw error }\r\n}\r\n\r\nasync function signupUser(p_email, p_password, recaptchaToken) {\r\n    try {\r\n        const response = await axios.post(\r\n            'http://localhost:5500/users/signup',\r\n            { p_email, p_password, recaptchaToken },\r\n            { headers: { 'Content-Type': 'application/json' }}\r\n        ) \r\n        return response \r\n    } catch (error) { throw error }\r\n}\r\n\r\nasync function getUserType(uid) {\r\n    try {\r\n        const response = await axios.get(\r\n            'http://localhost:5500/users/getUserType',  {\r\n                params: {\r\n                    uid: uid,\r\n                },\r\n                headers: {'Content-Type': 'application/json', },\r\n            }\r\n        )\r\n        return response\r\n    }\r\n    catch (error) { throw error}\r\n}\r\n\r\nasync function deleteReport(p_uid, p_imageLink, p_subcollection) {\r\n    try {\r\n        const response = await axios.delete(\r\n            'http://localhost:5500/data/deleteReport', \r\n            {\r\n                headers: { 'Content-Type': 'application/json' },\r\n                data: {\r\n                    uid: p_uid,\r\n                    imageLink: p_imageLink,\r\n                    subcollection: p_subcollection,\r\n                },\r\n            }\r\n        );\r\n        return response;\r\n    } catch (error) {\r\n        console.error(\"Error in deleteReport:\", error);\r\n        throw error;\r\n    }\r\n}\r\n\r\nasync function updateUserInfo(data) {\r\n    try {\r\n        const response = await axios.patch( \r\n            'http://localhost:5500/users/updateUserInfo',\r\n            data,\r\n            { headers: { 'Content-Type': 'application/json' }, } \r\n        )\r\n        return response\r\n    }\r\n    catch(error) {\r\n        throw new Error('Error updating data:', error)\r\n    }\r\n}\r\n\r\nasync function getAllReportsSubcollection() {\r\n    try {\r\n        const response = await axios.get(\r\n            'http://localhost:5500/data/getAllReportsSubcollection',\r\n            { headers: { 'Content-Type': 'applicatio/json' }, }\r\n        )\r\n        return response\r\n    }\r\n    catch(error) { throw error }\r\n}\n\n//# sourceURL=webpack://src/./services/request.js?");

/***/ }),

/***/ "./web/presenter/signup.js":
/*!*********************************!*\
  !*** ./web/presenter/signup.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/request.js */ \"./services/request.js\");\n/* harmony import */ var _model_user_credential_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/user-credential.js */ \"./model/user-credential.js\");\n\r\n\r\n\r\n\r\nif(document.getElementById('signup-button')) {\r\n    const signupButton = document.getElementById('signup-button')\r\n\r\n    signupButton.addEventListener('click', async () => {\r\n        try {\r\n            const p_email = document.getElementById('signup-email').value \r\n            const p_password = document.getElementById('signup-password').value \r\n            // const recaptchaToken = document.getElementById('g-recaptcha-response').value\r\n            const recaptchaToken = 'fhdjhu4y4'\r\n    \r\n            const response = await (0,_services_request_js__WEBPACK_IMPORTED_MODULE_0__.signupUser)(p_email, p_password, recaptchaToken)\r\n            \r\n            if (response.data.user.uid) {\r\n                const uid = response.data.user.uid\r\n\r\n                await initializeUserProfile(uid)\r\n                sessionStorage.setItem('uid', uid) \r\n                window.open('../structure/signup-confirmation.html', '_self')\r\n            }\r\n        }\r\n        catch(error) {\r\n            const errorHolder = document.getElementById('error-message-holder')\r\n            errorHolder.textContent = `Error signing up: Ensure email is active.`\r\n            errorHolder.style.display = 'block'\r\n        }\r\n    })\r\n}\r\n\r\nif(document.getElementById('continue-button')) {\r\n    const continueButton = document.getElementById('continue-button')\r\n\r\n    continueButton.addEventListener('click', async () => {\r\n        try {\r\n            window.location.href = '../structure/login.html'\r\n        }\r\n        catch(error) { console.error(error) }\r\n    })\r\n}\r\n\r\nasync function initializeUserProfile(p_uid) {\r\n    try {\r\n        const p_userInfo = new _model_user_credential_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\r\n      \r\n        p_userInfo.firstname = 'Not Set'\r\n        p_userInfo.middlename = 'Not Set'\r\n        p_userInfo.lastname = 'Not Set'\r\n        p_userInfo.town = 'Not Set'\r\n        p_userInfo.city = 'Not Set'\r\n        p_userInfo.userType = 'client'\r\n\r\n        await (0,_services_request_js__WEBPACK_IMPORTED_MODULE_0__.insertUserInfo)(p_userInfo, p_uid)\r\n    } \r\n    catch(error) {console.error(error) }\r\n}\r\n\n\n//# sourceURL=webpack://src/./web/presenter/signup.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./web/presenter/signup.js");
/******/ 	
/******/ })()
;