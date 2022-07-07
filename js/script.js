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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst leftBtn = document.querySelector('.slider__left');\r\nconst rightBtn = document.querySelector('.slider__right');\r\nlet slides = document.querySelectorAll('.slider__image');\r\nconst slidesNum = slides.length;\r\nconst slider = document.querySelector('.slider__images');\r\nlet slidesArr = [];\r\nslider.style.width = 100 + \"%\";\r\nslides.forEach((item,index)=>{\r\n   let span = document.createElement('span');\r\n   span.classList.add('slider__button');\r\n   span.setAttribute('value', index);\r\n   slidesArr.push(item);\r\n   rightBtn.before(span);\r\n   item.remove();\r\n})\r\n\r\nconst points = document.querySelectorAll('.slider__button');\r\npoints[0].classList.add('current');\r\n\r\nconst drow = (num,dir = 'right') => {\r\n   if (num < 0) num+=slidesNum;\r\n   let newSlide = slidesArr[num].cloneNode(true);\r\n   if (dir === \"right\") {\r\n      slider.append(newSlide);\r\n   } else {\r\n      slider.prepend(newSlide);\r\n   }\r\n}\r\n\r\ndrow(0);\r\nlet current = 0;\r\nconst moveSlide=(num, dir) =>{\r\n   if (dir === 'right'){\r\n      current += num;\r\n      if (current >= slidesNum) current -= slidesNum;\r\n      drow(current, 'right');\r\n      slider.style.width = 200 + '%';\r\n      slider.style.left = 0 + '%';\r\n      document.querySelector('.current').classList.remove('current');\r\n      points[current].classList.add('current');\r\n      setTimeout(() => {\r\n         const animation = setInterval(() => {\r\n            let value = slider.style.left;\r\n            slider.style.left = +value.slice(0,value.length-1) -4 +'%';\r\n            if (slider.style.left === \"-100%\"){\r\n               clearInterval(animation);\r\n               document.querySelector('.slider__image').remove();\r\n               slider.style.left = '0%';\r\n               slider.style.width = '100%';\r\n               document.querySelector('.active').classList.remove('active');\r\n            }\r\n         }, 20);\r\n      }, 0);\r\n      \r\n   } else {\r\n      points[current].classList.remove('current');\r\n      current -= num;\r\n      if (current <0) current += slidesNum;\r\n      points[current].classList.add('current');\r\n      drow(current, 'left');\r\n      slider.style.width = 200 + '%';\r\n      slider.style.left = -100 + '%';\r\n      setTimeout(() => {\r\n         const animation = setInterval(() => {\r\n            let value = slider.style.left;\r\n            slider.style.left = +value.slice(0,value.length-1) + 4 +'%';\r\n            if (slider.style.left === \"0%\"){\r\n               clearInterval(animation);\r\n               document.querySelectorAll('.slider__image')[1].remove();\r\n               slider.style.width = '100%';\r\n               document.querySelector('.active').classList.remove('active');\r\n            }\r\n         }, 20);\r\n      }, 200);\r\n   }\r\n}\r\n\r\nrightBtn.addEventListener(\"click\",(event) =>{\r\n   if (!event.target.closest('.active')){\r\n      event.target.closest('.slider__buttons').classList.add('active');\r\n      moveSlide(1,'right');\r\n   }\r\n})\r\n\r\nleftBtn.addEventListener(\"click\",(event) =>{\r\n   if (!event.target.closest('.active')){\r\n      event.target.closest('.slider__buttons').classList.add('active');\r\n      moveSlide(1,'left');\r\n   }\r\n})\r\n\r\ndocument.addEventListener('click',(event)=>{\r\n   if (event.target.closest('.slider__button') && !event.target.closest('.active')){\r\n      event.target.closest('.slider__buttons').classList.add('active');\r\n      points[current].classList.remove('current');\r\n      let newCurrent = event.target.closest('.slider__button').getAttribute('value');\r\n      points[newCurrent].classList.add('current');\r\n      if (newCurrent > current){\r\n         moveSlide(newCurrent - current,'right');\r\n      } else if (newCurrent < current){\r\n         moveSlide(current-newCurrent,'left');\r\n      }\r\n   }\r\n})\n\n//# sourceURL=webpack://gulp/./src/js/app.js?");

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
/******/ 	__webpack_modules__["./src/js/app.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;