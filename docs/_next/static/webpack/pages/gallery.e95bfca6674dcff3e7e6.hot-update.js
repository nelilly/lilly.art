webpackHotUpdate_N_E("pages/gallery",{

/***/ "./src/components/Pagination/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/Pagination/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Pagination/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/lillydev/lilly.art/src/components/Pagination/index.jsx\",\n    _this = undefined;\n\n\n\n\nvar paginate = function paginate(currentPage, endPage, onPageSelect) {\n  var n = 0;\n  var pages = [];\n\n  while (n < endPage) {\n    if (currentPage >= 4 && n === 1 || n > 4 && currentPage <= endPage - 5 && (n + 1) % 5 === 0 || n >= currentPage + 2 && n <= currentPage - 2) {\n      pages.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"page\"],\n        children: \"\\u2026\"\n      }, \"span_\".concat(n), false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 18\n      }, _this));\n    }\n\n    if (n === 0 || n < 5 && currentPage < 3 || n <= currentPage + 2 && n >= currentPage - 2 || (n + 1) % 5 === 0 || n > 4 && currentPage >= endPage - 4) {\n      pages.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        onClick: function onClick(e) {\n          return onPageSelect(e);\n        },\n        value: n,\n        className: \"\".concat(_style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"page\"], \" \").concat(currentPage === n ? _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"selected\"] : null),\n        children: n + 1\n      }, \"button_\".concat(n), false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 18\n      }, _this));\n    }\n\n    n += 1;\n  }\n\n  return pages;\n};\n\nvar Pagination = function Pagination(_ref) {\n  var itemType = _ref.itemType,\n      count = _ref.count,\n      currentPage = _ref.currentPage,\n      onPageSelect = _ref.onPageSelect;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"pagination\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"itemCount\"],\n      children: [count, \" \", count === 1 ? itemType[0] : itemType[1]]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }, _this), count > 10 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"paginationButtons\"],\n      children: [\"\\u2190\", paginate(parseInt(currentPage, 10), Math.ceil(count / 10), onPageSelect), count > Math.ceil(count / 10 - 3) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \"\\u2192\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 49\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"pagesCount\"],\n      children: [\"page \", parseInt(currentPage, 10) + 1, \" of \", Math.ceil(count / 10)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nPagination.propTypes = {\n  itemType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired).isRequired,\n  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  currentPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  onPageSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Pagination\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9pbmRleC5qc3g/ZjE2MCJdLCJuYW1lcyI6WyJwYWdpbmF0ZSIsImN1cnJlbnRQYWdlIiwiZW5kUGFnZSIsIm9uUGFnZVNlbGVjdCIsIm4iLCJwYWdlcyIsInB1c2giLCJwYWdlIiwiZSIsInNlbGVjdGVkIiwiUGFnaW5hdGlvbiIsIml0ZW1UeXBlIiwiY291bnQiLCJwYWdpbmF0aW9uIiwiaXRlbUNvdW50IiwicGFnaW5hdGlvbkJ1dHRvbnMiLCJwYXJzZUludCIsIk1hdGgiLCJjZWlsIiwicGFnZXNDb3VudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFTQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxXQUFELEVBQWNDLE9BQWQsRUFBdUJDLFlBQXZCLEVBQXdDO0FBQ3ZELE1BQUlDLENBQUMsR0FBRyxDQUFSO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLEVBQWQ7O0FBRUEsU0FBT0QsQ0FBQyxHQUFHRixPQUFYLEVBQW9CO0FBQ2xCLFFBQU1ELFdBQVcsSUFBSSxDQUFoQixJQUNGRyxDQUFDLEtBQUssQ0FETCxJQUVDQSxDQUFDLEdBQUcsQ0FBSixJQUFTSCxXQUFXLElBQUlDLE9BQU8sR0FBRyxDQUFuQyxJQUNBLENBQUNFLENBQUMsR0FBRyxDQUFMLElBQVUsQ0FBVixLQUFnQixDQUhoQixJQUlDQSxDQUFDLElBQUlILFdBQVcsR0FBRyxDQUFwQixJQUEyQkcsQ0FBQyxJQUFJSCxXQUFXLEdBQUcsQ0FKbEQsRUFJdUQ7QUFDckRJLFdBQUssQ0FBQ0MsSUFBTixlQUFXO0FBQU0saUJBQVMsRUFBRUMsc0RBQWpCO0FBQUE7QUFBQSx3QkFBb0NILENBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBWDtBQUNEOztB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eC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7XG4gIHBhZ2luYXRpb24sXG4gIHBhZ2UsXG4gIGl0ZW1Db3VudCxcbiAgcGFnaW5hdGlvbkJ1dHRvbnMsXG4gIHBhZ2VzQ291bnQsXG4gIHNlbGVjdGVkLFxufSBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBwYWdpbmF0ZSA9IChjdXJyZW50UGFnZSwgZW5kUGFnZSwgb25QYWdlU2VsZWN0KSA9PiB7XG4gIGxldCBuID0gMDtcbiAgY29uc3QgcGFnZXMgPSBbXTtcblxuICB3aGlsZSAobiA8IGVuZFBhZ2UpIHtcbiAgICBpZiAoKChjdXJyZW50UGFnZSA+PSA0KVxuICAgICYmIG4gPT09IDEpXG4gICAgfHwgKChuID4gNCAmJiBjdXJyZW50UGFnZSA8PSBlbmRQYWdlIC0gNSlcbiAgICAmJiAoKG4gKyAxKSAlIDUgPT09IDApKVxuICAgIHx8ICgobiA+PSBjdXJyZW50UGFnZSArIDIpICYmIChuIDw9IGN1cnJlbnRQYWdlIC0gMikpKSB7XG4gICAgICBwYWdlcy5wdXNoKDxzcGFuIGNsYXNzTmFtZT17cGFnZX0ga2V5PXtgc3Bhbl8ke259YH0+JmhlbGxpcDs8L3NwYW4+KTtcbiAgICB9XG4gICAgaWYgKChuID09PSAwKVxuICAgIHx8IChuIDwgNSAmJiBjdXJyZW50UGFnZSA8IDMpXG4gICAgfHwgKChuIDw9IGN1cnJlbnRQYWdlICsgMikgJiYgKG4gPj0gY3VycmVudFBhZ2UgLSAyKSlcbiAgICB8fCAoKG4gKyAxKSAlIDUgPT09IDApXG4gICAgfHwgKG4gPiA0ICYmIGN1cnJlbnRQYWdlID49IGVuZFBhZ2UgLSA0KSkge1xuICAgICAgcGFnZXMucHVzaCg8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZSkgPT4gb25QYWdlU2VsZWN0KGUpfSB2YWx1ZT17bn0ga2V5PXtgYnV0dG9uXyR7bn1gfSBjbGFzc05hbWU9e2Ake3BhZ2V9ICR7Y3VycmVudFBhZ2UgPT09IG4gPyBzZWxlY3RlZCA6IG51bGx9YH0+e24gKyAxfTwvYnV0dG9uPik7XG4gICAgfVxuICAgIG4gKz0gMTtcbiAgfVxuICByZXR1cm4gcGFnZXM7XG59O1xuXG5jb25zdCBQYWdpbmF0aW9uID0gKHtcbiAgaXRlbVR5cGUsXG4gIGNvdW50LFxuICBjdXJyZW50UGFnZSxcbiAgb25QYWdlU2VsZWN0LFxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17cGFnaW5hdGlvbn0+XG4gICAgPHAgY2xhc3NOYW1lPXtpdGVtQ291bnR9Pntjb3VudH0ge2NvdW50ID09PSAxID8gaXRlbVR5cGVbMF0gOiBpdGVtVHlwZVsxXX08L3A+XG4gICAge2NvdW50ID4gMTAgJiYgKFxuICAgICAgPHAgY2xhc3NOYW1lPXtwYWdpbmF0aW9uQnV0dG9uc30+XG4gICAgICAgICZsYXJyO1xuICAgICAgICB7cGFnaW5hdGUocGFyc2VJbnQoY3VycmVudFBhZ2UsIDEwKSwgTWF0aC5jZWlsKGNvdW50IC8gMTApLCBvblBhZ2VTZWxlY3QpfVxuICAgICAgICB7Y291bnQgPiAoTWF0aC5jZWlsKGNvdW50IC8gMTAgLSAzKSkgJiYgPHNwYW4+JnJhcnI7PC9zcGFuPn1cbiAgICAgIDwvcD5cbiAgICApfVxuICAgIDxwIGNsYXNzTmFtZT17cGFnZXNDb3VudH0+cGFnZSB7cGFyc2VJbnQoY3VycmVudFBhZ2UsIDEwKSArIDF9IG9mIHtNYXRoLmNlaWwoY291bnQgLyAxMCl9PC9wPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XG5cblBhZ2luYXRpb24ucHJvcFR5cGVzID0ge1xuICBpdGVtVHlwZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxuICBjb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjdXJyZW50UGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvblBhZ2VTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pagination/index.jsx\n");

/***/ })

})