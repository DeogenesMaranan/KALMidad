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

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    // Helper function to toggle modal visibility\r\n    function toggleModal(openModalId, closeModalId) {\r\n        document.getElementById(openModalId).style.display = 'flex';\r\n        document.getElementById(closeModalId).style.display = 'none';\r\n    }\r\n\r\n    // Show Register Modal when Register button (from header or Register modal) is clicked\r\n    document.getElementById('register-btn').addEventListener('click', function() {\r\n        toggleModal('register-modal', 'signin-modal');\r\n    });\r\n\r\n    // Show Signin Modal when Signin link in the header is clicked\r\n    document.getElementById('signin-header').addEventListener('click', function() {\r\n        toggleModal('signin-modal', 'register-modal');\r\n    });\r\n\r\n    // Show Signin Modal when \"Signin\" link inside the Register Modal is clicked\r\n    document.getElementById('signin-inside').addEventListener('click', function() {\r\n        toggleModal('signin-modal', 'register-modal');\r\n    });\r\n\r\n    // Show Register Modal when \"Sign up\" link inside the Signin Modal is clicked\r\n    document.getElementById('signup-inside').addEventListener('click', function() {\r\n        toggleModal('register-modal', 'signin-modal');\r\n    });\r\n\r\n    // Optional: Close the modal if the user clicks anywhere outside the modal content\r\n    window.addEventListener('click', function(event) {\r\n        if (event.target === document.getElementById('register-modal')) {\r\n            document.getElementById('register-modal').style.display = 'none';\r\n        } else if (event.target === document.getElementById('signin-modal')) {\r\n            document.getElementById('signin-modal').style.display = 'none';\r\n        }\r\n    });\r\n\r\n    // Password visibility toggle\r\n    document.getElementById('toggle-password').addEventListener('click', function() {\r\n        const passwordField = document.getElementById('password');\r\n        //const eyeIcon = document.getElementById('toggle-password'); di pa tapos hehe \r\n        \r\n        // Toggle password visibility\r\n        if (passwordField.type === 'password') {\r\n            passwordField.type = 'text'; // Show password\r\n            //eyeIcon.innerHTML = '&#128064;'; // Change to 'closed eye' icon\r\n        } else {\r\n            passwordField.type = 'password'; // Hide password\r\n            //eyeIcon.innerHTML = '&#128065;'; // Change to 'open eye' icon\r\n        }\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://src/./web/presenter/landing.js?");

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