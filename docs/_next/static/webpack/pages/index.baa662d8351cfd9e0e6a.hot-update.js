webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Slides/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Slides/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_shared_functions_keyChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/functions/keyChange */ \"./src/shared/functions/keyChange.js\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Slides/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/lillydev/lilly.art/src/components/Slides/index.jsx\",\n    _this = undefined;\n\n\n\n\n\nvar Slides = function Slides(_ref) {\n  var slides = _ref.slides,\n      title = _ref.title,\n      description = _ref.description;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"slides\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"slidesTitle\"],\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"slideList\"],\n      style: {\n        display: 'grid',\n        gridTemplateColumns: '2fr repeat(3, 1fr)',\n        gridTemplateRows: 'auto',\n        gridGap: '1rem'\n      },\n      children: slides.map(function (_ref2) {\n        var title = _ref2.title,\n            image = _ref2.image;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"slide\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: image,\n            alt: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figcaption\", {\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 13\n          }, _this)]\n        }, \"slide_\".concat(Object(src_shared_functions_keyChange__WEBPACK_IMPORTED_MODULE_2__[\"keyChange\"])(title), \"}\"), true, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Slides;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slides);\nSlides.propTypes = {\n  slides: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n  })).isRequired,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Slides\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2xpZGVzL2luZGV4LmpzeD80YmU1Il0sIm5hbWVzIjpbIlNsaWRlcyIsInNsaWRlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzbGlkZXNTdHlsZSIsInNsaWRlc1RpdGxlIiwic2xpZGVMaXN0IiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkVGVtcGxhdGVSb3dzIiwiZ3JpZEdhcCIsIm1hcCIsImltYWdlIiwic2xpZGUiLCJrZXlDaGFuZ2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQU9BLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWtDO0FBQUEsTUFBaENDLE1BQWdDLFFBQWhDQSxNQUFnQztBQUFBLE1BQXhCQyxLQUF3QixRQUF4QkEsS0FBd0I7QUFBQSxNQUFqQkMsV0FBaUIsUUFBakJBLFdBQWlCO0FBRS9DLHNCQUNFO0FBQVMsYUFBUyxFQUFFQyx3REFBcEI7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBRUMsNkRBQWY7QUFBQSxnQkFBNkJIO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsZ0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBSyxlQUFTLEVBQUVHLDJEQUFoQjtBQUEyQixXQUFLLEVBQUU7QUFBQ0MsZUFBTyxFQUFFLE1BQVY7QUFBa0JDLDJCQUFtQixFQUFFLG9CQUF2QztBQUE2REMsd0JBQWdCLEVBQUUsTUFBL0U7QUFBdUZDLGVBQU8sRUFBRTtBQUFoRyxPQUFsQztBQUFBLGdCQUNHVCxNQUFNLENBQUNVLEdBQVAsQ0FBVztBQUFBLFlBQUVULEtBQUYsU0FBRUEsS0FBRjtBQUFBLFlBQVNVLEtBQVQsU0FBU0EsS0FBVDtBQUFBLDRCQUNWO0FBQTJDLG1CQUFTLEVBQUVDLHVEQUF0RDtBQUFBLGtDQUNFO0FBQUssZUFBRyxFQUFFRCxLQUFWO0FBQWlCLGVBQUcsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSxzQkFBYVY7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsMkJBQXNCWSxnRkFBUyxDQUFDWixLQUFELENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFYO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0FoQkQ7O0tBQU1GLE07QUFrQlNBLHFFQUFmO0FBRUFBLE1BQU0sQ0FBQ2UsU0FBUCxHQUFtQjtBQUNqQmQsUUFBTSxFQUFFZSxpREFBUyxDQUFDQyxPQUFWLENBQWtCRCxpREFBUyxDQUFDRSxLQUFWLENBQWdCO0FBQ3hDaEIsU0FBSyxFQUFFYyxpREFBUyxDQUFDRyxNQUFWLENBQWlCQyxVQURnQjtBQUV4Q1IsU0FBSyxFQUFFSSxpREFBUyxDQUFDRyxNQUFWLENBQWlCQztBQUZnQixHQUFoQixDQUFsQixFQUdKQSxVQUphO0FBS2pCakIsYUFBVyxFQUFFYSxpREFBUyxDQUFDRyxNQUFWLENBQWlCQyxVQUxiO0FBTWpCbEIsT0FBSyxFQUFFYyxpREFBUyxDQUFDRyxNQUFWLENBQWlCQztBQU5QLENBQW5CIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU2xpZGVzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBrZXlDaGFuZ2UgfSBmcm9tICdzcmMvc2hhcmVkL2Z1bmN0aW9ucy9rZXlDaGFuZ2UnO1xuaW1wb3J0IHsgXG4gIHNsaWRlcyBhcyBzbGlkZXNTdHlsZSxcbiAgc2xpZGVzVGl0bGUsXG4gIHNsaWRlTGlzdCxcbiAgc2xpZGUsXG59IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbmNvbnN0IFNsaWRlcyA9ICh7c2xpZGVzLCB0aXRsZSwgZGVzY3JpcHRpb259KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3NsaWRlc1N0eWxlfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9e3NsaWRlc1RpdGxlfT57dGl0bGV9PC9oMz5cbiAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c2xpZGVMaXN0fSBzdHlsZT17e2Rpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzJmciByZXBlYXQoMywgMWZyKScsIGdyaWRUZW1wbGF0ZVJvd3M6ICdhdXRvJywgZ3JpZEdhcDogJzFyZW0nLH19PlxuICAgICAgICB7c2xpZGVzLm1hcCgoe3RpdGxlLCBpbWFnZX0pID0+IChcbiAgICAgICAgICA8ZmlndXJlIGtleT17YHNsaWRlXyR7a2V5Q2hhbmdlKHRpdGxlKX19YH0gY2xhc3NOYW1lPXtzbGlkZX0+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8ZmlnY2FwdGlvbj57dGl0bGV9PC9maWdjYXB0aW9uPlxuICAgICAgICAgIDwvZmlndXJlPilcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvYXJ0aWNsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcztcblxuU2xpZGVzLnByb3BUeXBlcyA9IHtcbiAgc2xpZGVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSkpLmlzUmVxdWlyZWQsXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Slides/index.jsx\n");

/***/ })

})