"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Home/SlickSlider.js":
/*!****************************************!*\
  !*** ./components/Home/SlickSlider.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n\n\n\nconst SlickSlider = (param)=>{\n    let { children, option } = param;\n    var _option_arrow;\n    const settings = {\n        dots: true,\n        infinite: true,\n        speed: 400,\n        slidesToShow: (option === null || option === void 0 ? void 0 : option.desk) || 3,\n        slidesToScroll: 1,\n        autoplay: true,\n        autoplaySpeed: 3000,\n        arrows: (_option_arrow = option === null || option === void 0 ? void 0 : option.arrow) !== null && _option_arrow !== void 0 ? _option_arrow : true,\n        responsive: [\n            {\n                breakpoint: 1024,\n                settings: {\n                    slidesToShow: (option === null || option === void 0 ? void 0 : option.desk) || 3\n                }\n            },\n            {\n                breakpoint: 768,\n                settings: {\n                    slidesToShow: (option === null || option === void 0 ? void 0 : option.desk) || 2\n                }\n            },\n            {\n                breakpoint: 480,\n                settings: {\n                    slidesToShow: (option === null || option === void 0 ? void 0 : option.desk) || 1\n                }\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        ...settings,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\smicr\\\\OneDrive\\\\Desktop\\\\Sahil\\\\home-page\\\\front\\\\components\\\\Home\\\\SlickSlider.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SlickSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SlickSlider);\nvar _c;\n$RefreshReg$(_c, \"SlickSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUvU2xpY2tTbGlkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNPO0FBRWpDLE1BQU1FLGNBQWM7UUFBQyxFQUFFQyxRQUFRLEVBQUdDLE1BQU0sRUFBQztRQVM3QkE7SUFSVixNQUFNQyxXQUFXO1FBQ2ZDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLGNBQWNMLENBQUFBLG1CQUFBQSw2QkFBQUEsT0FBUU0sSUFBSSxLQUFJO1FBQzlCQyxnQkFBZ0I7UUFDaEJDLFVBQVU7UUFDVkMsZUFBZTtRQUNmQyxRQUFRVixDQUFBQSxnQkFBQUEsbUJBQUFBLDZCQUFBQSxPQUFRVyxLQUFLLGNBQWJYLDJCQUFBQSxnQkFBaUI7UUFDekJZLFlBQVk7WUFDVjtnQkFDRUMsWUFBWTtnQkFDWlosVUFBVTtvQkFDUkksY0FBY0wsQ0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFRTSxJQUFJLEtBQUk7Z0JBQ2hDO1lBQ0Y7WUFDQTtnQkFDRU8sWUFBWTtnQkFDWlosVUFBVTtvQkFDUkksY0FBY0wsQ0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFRTSxJQUFJLEtBQUk7Z0JBQ2hDO1lBQ0Y7WUFDQTtnQkFDRU8sWUFBWTtnQkFDWlosVUFBVTtvQkFDUkksY0FBY0wsQ0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFRTSxJQUFJLEtBQUk7Z0JBQ2hDO1lBQ0Y7U0FDRDtJQUNIO0lBRUEscUJBQ0UsOERBQUNULG1EQUFNQTtRQUFFLEdBQUdJLFFBQVE7a0JBQ2pCRjs7Ozs7O0FBR1A7S0FyQ01EO0FBdUNOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG9tZS9TbGlja1NsaWRlci5qcz9mMDZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5cclxuY29uc3QgU2xpY2tTbGlkZXIgPSAoeyBjaGlsZHJlbiAsIG9wdGlvbn0pID0+IHtcclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGRvdHM6IHRydWUsICAgICAgICAgIC8vIFNob3cgbmF2aWdhdGlvbiBkb3RzXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSwgICAgICAvLyBJbmZpbml0ZSBsb29wIHNsaWRpbmdcclxuICAgIHNwZWVkOiA0MDAsICAgICAgICAgIC8vIFRyYW5zaXRpb24gc3BlZWQgaW4gbXNcclxuICAgIHNsaWRlc1RvU2hvdzogb3B0aW9uPy5kZXNrIHx8IDMsICAgICAvLyBEZWZhdWx0IG51bWJlciBvZiBzbGlkZXMgb24gZGVza3RvcFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsICAgLy8gTnVtYmVyIG9mIHNsaWRlcyB0byBzY3JvbGwgYXQgYSB0aW1lXHJcbiAgICBhdXRvcGxheTogdHJ1ZSwgICAgICAvLyBBdXRvcGxheSBzbGlkZXNcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsIC8vIEF1dG9wbGF5IHNwZWVkIGluIG1zXHJcbiAgICBhcnJvd3M6IG9wdGlvbj8uYXJyb3cgPz8gdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsIC8vIERlc2t0b3AgYW5kIGFib3ZlXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogb3B0aW9uPy5kZXNrIHx8IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCwgLy8gVGFibGV0XHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogb3B0aW9uPy5kZXNrIHx8IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCwgLy8gTW9iaWxlXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogb3B0aW9uPy5kZXNrIHx8IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TbGlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWNrU2xpZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTbGlkZXIiLCJTbGlja1NsaWRlciIsImNoaWxkcmVuIiwib3B0aW9uIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsImRlc2siLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImFycm93cyIsImFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Home/SlickSlider.js\n"));

/***/ })

});