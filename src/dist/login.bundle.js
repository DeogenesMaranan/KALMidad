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

/***/ "./services/request.js":
/*!*****************************!*\
  !*** ./services/request.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteReport: () => (/* binding */ deleteReport),\n/* harmony export */   getAllReportsSubcollection: () => (/* binding */ getAllReportsSubcollection),\n/* harmony export */   getAllUserReport: () => (/* binding */ getAllUserReport),\n/* harmony export */   getUserInfo: () => (/* binding */ getUserInfo),\n/* harmony export */   getUserType: () => (/* binding */ getUserType),\n/* harmony export */   insertNewUser: () => (/* binding */ insertNewUser),\n/* harmony export */   insertReport: () => (/* binding */ insertReport),\n/* harmony export */   insertUserInfo: () => (/* binding */ insertUserInfo),\n/* harmony export */   signInUser: () => (/* binding */ signInUser),\n/* harmony export */   signupUser: () => (/* binding */ signupUser),\n/* harmony export */   updateUserInfo: () => (/* binding */ updateUserInfo),\n/* harmony export */   uploadImage: () => (/* binding */ uploadImage)\n/* harmony export */ });\n\r\nasync function getUserInfo(p_uid) {\r\n    try {\r\n        const response = await axios.get(\r\n            'http://localhost:5500/users/getUserInfoById', {\r\n                params: {\r\n                    document: 'users-credential',\r\n                    uid: p_uid,\r\n                },\r\n                headers: { 'Content-Type': 'application/json' },\r\n            }\r\n        )\r\n        return response\r\n    } catch(error) { throw error }\r\n}\r\n\r\nasync function insertUserInfo(p_user, p_uid) {\r\n    try {\r\n        const response = await axios.post(\r\n            'http://localhost:5500/users/insertUserInfo', {\r\n                uid: p_uid,\r\n                firstname: p_user.firstname, \r\n                middlename: p_user.middlename, \r\n                lastname: p_user.lastname,\r\n                town: p_user.town,\r\n                city: p_user.city,\r\n                userType: p_user.userType,\r\n            },\r\n            { headers: { 'Content-Type': 'application/json' },}\r\n        )\r\n        return response\r\n    } catch(error) { throw error }\r\n}\r\n\r\nasync function getAllUserReport(p_uid) {\r\n    try {\r\n        const response = await axios.get(\r\n            'http://localhost:5500/data/getAllUserReports', {\r\n                params: {\r\n                    document: 'report',\r\n                    uid: p_uid,\r\n                    subcollection: 'userReport',\r\n                },\r\n            },\r\n        )\r\n        return response\r\n    }\r\n    catch(error) { throw error }\r\n}\r\n\r\nasync function uploadImage(selectedImage) {\r\n    try {\r\n        const formData = new FormData()\r\n        formData.append('image', selectedImage)\r\n\r\n        const response = await axios.post(\r\n            'http://localhost:5500/data/uploadImage', formData,\r\n            { headers: { 'Content-Type': 'multipart/form-data', }}\r\n        )\r\n        return response\r\n    } \r\n    catch (error) { throw error }\r\n}\r\n\r\nasync function insertReport(p_report, p_uid) {\r\n    try {\r\n        const response = await axios.post(\r\n            'http://localhost:5500/data/insertReport', {\r\n                uid: p_uid,\r\n                city: p_report.city,\r\n                flag: p_report.flag,\r\n                date: p_report.date,\r\n                time: p_report.time,\r\n                town: p_report.town,\r\n                status: 'pending',\r\n                calamity: p_report.calamity,\r\n                imageLink: p_report.imageLink,\r\n                description: p_report.description,\r\n            },\r\n            { headers: { 'Content-Type': 'application/json', }}\r\n        )\r\n        return response\r\n    }\r\n    catch(error) { throw error }\r\n}\r\n\r\nasync function insertNewUser(p_uid) {\r\n    try {\r\n        const response = await axios.patch(\r\n            'http://localhost:5500/users/insertNewUser', {\r\n                uid: p_uid,\r\n            },\r\n            { headers: { 'Content-Type': 'application/json', }}\r\n        )\r\n        return response\r\n    }\r\n    catch(error) { throw error }\r\n}\r\n\r\nasync function signInUser(p_email, p_password, recaptchaToken) {\r\n    try {\r\n        const response = await axios.post(\r\n            'http://localhost:5500/users/signin', \r\n            { p_email, p_password, recaptchaToken, }, \r\n            { headers: { 'Content-Type': 'application/json', }}\r\n        )\r\n\r\n        if (response.data && response.data.message) {\r\n            return response\r\n        }\r\n    } catch(error) { throw error }\r\n}\r\n\r\nasync function signupUser(p_email, p_password, recaptchaToken) {\r\n    try {\r\n        const response = await axios.post(\r\n            'http://localhost:5500/users/signup',\r\n            { p_email, p_password, recaptchaToken },\r\n            { headers: { 'Content-Type': 'application/json' }}\r\n        ) \r\n        return response \r\n    } catch (error) { throw error }\r\n}\r\n\r\nasync function getUserType(uid) {\r\n    try {\r\n        const response = await axios.get(\r\n            'http://localhost:5500/users/getUserType',  {\r\n                params: {\r\n                    uid: uid,\r\n                },\r\n                headers: {'Content-Type': 'application/json', },\r\n            }\r\n        )\r\n        return response\r\n    }\r\n    catch (error) { throw error}\r\n}\r\n\r\nasync function deleteReport(p_uid, p_imageLink, p_subcollection) {\r\n    try {\r\n        const response = await axios.delete(\r\n            'http://localhost:5500/data/deleteReport', \r\n            {\r\n                headers: { 'Content-Type': 'application/json' },\r\n                data: {\r\n                    uid: p_uid,\r\n                    imageLink: p_imageLink,\r\n                    subcollection: p_subcollection,\r\n                },\r\n            }\r\n        );\r\n        return response;\r\n    } catch (error) {\r\n        console.error(\"Error in deleteReport:\", error);\r\n        throw error;\r\n    }\r\n}\r\n\r\nasync function updateUserInfo(data) {\r\n    try {\r\n        const response = await axios.patch( \r\n            'http://localhost:5500/users/updateUserInfo',\r\n            data,\r\n            { headers: { 'Content-Type': 'application/json' }, } \r\n        )\r\n        return response\r\n    }\r\n    catch(error) {\r\n        throw new Error('Error updating data:', error)\r\n    }\r\n}\r\n\r\nasync function getAllReportsSubcollection() {\r\n    try {\r\n        const response = await axios.get(\r\n            'http://localhost:5500/data/getAllReportsSubcollection',\r\n            { headers: { 'Content-Type': 'applicatio/json' }, }\r\n        )\r\n        return response\r\n    }\r\n    catch(error) { throw error }\r\n}\n\n//# sourceURL=webpack://src/./services/request.js?");

/***/ }),

/***/ "./web/presenter/login.js":
/*!********************************!*\
  !*** ./web/presenter/login.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/request.js */ \"./services/request.js\");\n\r\n\r\n\r\n\r\nconst signinButton = document.getElementById('signin-button')\r\n\r\nsigninButton.addEventListener('click', async () => {\r\n    const p_email = document.getElementById('signin-email').value\r\n    const p_password = document.getElementById('signin-password').value\r\n    // const recaptchaToken = document.getElementById('g-recaptcha-response').value\r\n    const recaptchaToken = 'djfhskfd'\r\n\r\n    try {\r\n        const user = await (0,_services_request_js__WEBPACK_IMPORTED_MODULE_0__.signInUser)(p_email, p_password, recaptchaToken)\r\n        \r\n        if (user.data.user.emailVerified) {\r\n            const loggedInUid = user.data.user.uid\r\n            const userType = await getUserType(loggedInUid)\r\n\r\n            sessionStorage.setItem('uid', loggedInUid)\r\n            sessionStorage.setItem('email', user.data.user.email)\r\n            sessionStorage.setItem('userType', userType)\r\n            \r\n            if (userType === 'client') {\r\n                window.top.location.href = '../structure/home-skeleton.html'\r\n            } else {\r\n                sessionStorage.setItem('userType', userType)\r\n                window.top.location.href = '../structure/home-skeleton.html'\r\n            }\r\n        } else {\r\n            throw new Error('Please verify your account first.')\r\n        }\r\n    } \r\n    catch (error) {\r\n        const errorHolder = document.getElementById('error-message-holder')\r\n        errorHolder.textContent = `Error signing in: Ensure all information is correct.`\r\n        errorHolder.style.display = 'block';\r\n    }\r\n});\r\n\r\nasync function getUserType(uid) {\r\n    try {\r\n        const userInfo = await (0,_services_request_js__WEBPACK_IMPORTED_MODULE_0__.getUserInfo)(uid)\r\n        return userInfo.data.userType\r\n    }\r\n    catch (error) {\r\n        return 'admin'\r\n    }\r\n}\n\n//# sourceURL=webpack://src/./web/presenter/login.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./web/presenter/login.js");
/******/ 	
/******/ })()
;