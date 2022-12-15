/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("// Menu Burger\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\tconst menu = document.querySelector('.menu'),\r\n\t\tmenuItem = document.querySelectorAll('.menu__item'),\r\n\t\thamburger = document.querySelector('.hamburger'),\r\n\t\theaderMainTitle = document.querySelector('.intro__content'),\r\n\t\theaderMainTitle2 = document.querySelector('.intro__content2'),\r\n\t\theaderMainTitle3 = document.querySelector('.intro__content3'),\r\n\t\tsidebar = document.querySelector('.sidebar');\r\n\r\n\thamburger.addEventListener('click', () => {\r\n\t\thamburger.classList.toggle('hamburger_active');\r\n\t\tmenu.classList.toggle('menu_active');\r\n\t});\r\n\r\n\thamburger.addEventListener('click', () => {\r\n\t\theaderMainTitle.classList.toggle('header__main-title_active');\r\n\t});\r\n\r\n\thamburger.addEventListener('click', () => {\r\n\t\theaderMainTitle2.classList.toggle('header__main-title_active');\r\n\t});\r\n\r\n\thamburger.addEventListener('click', () => {\r\n\t\theaderMainTitle3.classList.toggle('header__main-title_active');\r\n\t});\r\n\r\n\thamburger.addEventListener('click', () => {\r\n\t\tsidebar.classList.toggle('sidebar_active');\r\n\t});\r\n\r\n\tmenuItem.forEach(item => {\r\n\t\titem.addEventListener('click', () => {\r\n\t\t\thamburger.classList.toggle('hamburger_active');\r\n\t\t\tmenu.classList.toggle('menu_active');\r\n\t\t\theaderMainTitle.classList.remove('header__main-title_active');\r\n\t\t\theaderMainTitle2.classList.remove('header__main-title_active');\r\n\t\t\theaderMainTitle3.classList.remove('header__main-title_active');\r\n\t\t})\r\n\t});\r\n})\r\n\r\n// Progress Bar\r\nlet calcScrollValue = () => {\r\n\tlet scrollProgress = document.getElementById(\"progress\");\r\n\tlet progressValue = document.getElementById(\"progress-value\");\r\n\tlet pos = document.documentElement.scrollTop;\r\n\tlet calcHeight =\r\n\t\tdocument.documentElement.scrollHeight -\r\n\t\tdocument.documentElement.clientHeight;\r\n\tlet scrollValue = Math.round((pos * 100) / calcHeight);\r\n\tif (pos > 100) {\r\n\t\tscrollProgress.style.display = \"grid\";\r\n\t} else {\r\n\t\tscrollProgress.style.display = \"none\";\r\n\t}\r\n\tscrollProgress.addEventListener(\"click\", () => {\r\n\t\tdocument.documentElement.scrollTop = 0;\r\n\t});\r\n\tscrollProgress.style.background = `conic-gradient(#FF0000 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;\r\n};\r\nwindow.onscroll = calcScrollValue;\r\nwindow.onload = calcScrollValue;\r\n\r\n// Parallax\r\n$(document).ready(function () {\r\n\t$(window).on('scroll', function () {\r\n\t\tyPos = window.pageYOffset;\r\n\t\tshift = yPos * 0.8 + 'px';\r\n\t\t$('#intro').css('top', shift);\r\n\t});\r\n\r\n});\r\n\r\n// Awesome Cursor\r\nlet mouseCursor = document.querySelector(\".cursor\");\r\nlet navLinks = document.querySelectorAll('a');\r\n\r\nwindow.addEventListener('mousemove', cursor);\r\n\r\nfunction cursor(e) {\r\n\tmouseCursor.style.top = e.pageY + 'px';\r\n\tmouseCursor.style.left = e.pageX + 'px';\r\n}\r\n\r\nnavLinks.forEach(link => {\r\n\tlink.addEventListener('mouseleave', () => {\r\n\t\tmouseCursor.classList.remove('link-grow');\r\n\t\tlink.classList.remove('hovered-link')\r\n\t});\r\n\tlink.addEventListener('mouseover', () => {\r\n\t\tmouseCursor.classList.add('link-grow');\r\n\t\tmouseCursor.classList.add('hovered-link');\r\n\t});\r\n});\r\n\r\n// Slick Slider\r\n$('.slider').slick({\r\n\tdots: true,\r\n\tspeed: 1000,\r\n\tslidesToShow: 1,\r\n\tslidesToScroll: 1,\r\n\tfade: true,\r\n\tautoplay: true,\r\n\tautoplaySpeed: 2000,\r\n\tinfinite: true\r\n});\r\n\r\n// Tabs\r\n$(function () {\r\n\t$('.tabs-wrapper').each(function () {\r\n\t\tlet ths = $(this);\r\n\t\tths.find('.tab-item').not(':first').hide();\r\n\t\tths.find('.tab').click(function () {\r\n\t\t\tths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');\r\n\t\t\tths.find('.tab-item').hide().eq($(this).index()).fadeIn()\r\n\t\t}).eq(0).addClass('active');\r\n\t});\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;