webpackHotUpdate_N_E("pages/colophon",{

/***/ "./src/components/BarChart/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/BarChart/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_nlilly200_lillydev_lilly_art_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/BarChart/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/lillydev/lilly.art/src/components/BarChart/index.jsx\",\n    _this = undefined;\n\n\n\n\nvar BarChart = function BarChart(_ref) {\n  var title = _ref.title,\n      details = _ref.details,\n      userValue = _ref.userValue,\n      chartData = _ref.chartData;\n\n  var xPos = function xPos(count, index) {\n    return index * 100 / count + (barWidth - count) * 2 + 1;\n  };\n\n  var otherValue = chartData.map(function (_ref2) {\n    var value = _ref2.value;\n    return value;\n  }).reduce(function (previousValue, currentValue) {\n    return previousValue + currentValue;\n  });\n  var newChartData = [].concat(Object(_Users_nlilly200_lillydev_lilly_art_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(chartData), [{\n    label: 'Other',\n    value: 100 - otherValue\n  }]);\n  var count = newChartData.length;\n  var barWidth = 10;\n  var isOther = true;\n\n  var isLabel = function isLabel(label, userValue) {\n    if (label === userValue) {\n      isOther = false;\n    }\n\n    return label === userValue || label === \"Other\" && isOther;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"chart\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figcaption\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"chartCaption\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this), details && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: details\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 23\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n        viewBox: \"0,0 1000,400\",\n        fill: \"currentColor\",\n        fontSize: \"18\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          height: \"86%\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"g\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"chartGrid\"],\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"rect\", {\n              y: \"0%\",\n              height: \"1\",\n              width: \"100%\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"rect\", {\n              y: \"25%\",\n              height: \"1\",\n              width: \"100%\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"rect\", {\n              y: \"50%\",\n              height: \"1\",\n              width: \"100%\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"rect\", {\n              y: \"75%\",\n              height: \"1\",\n              width: \"100%\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"rect\", {\n              y: \"99%\",\n              height: \"1\",\n              width: \"100%\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this), newChartData.map(function (item, index) {\n            var label = item.label,\n                value = item.value;\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"g\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"rect\", {\n                x: \"\".concat(xPos(count, index) - barWidth / 2, \"%\"),\n                y: \"\".concat(99 - value, \"%\"),\n                height: \"\".concat(value, \"%\"),\n                stroke: \"currentColor\",\n                strokeWidth: \".5\",\n                width: \"\".concat(barWidth, \"%\")\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 17\n              }, _this), isLabel(label, userValue) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"circle\", {\n                  cx: \"\".concat(xPos(count, index), \"%\"),\n                  cy: \"\".concat(90.5 - value, \"%\"),\n                  r: \"20\",\n                  fill: \"#0088ff\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 44,\n                  columnNumber: 49\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"text\", {\n                  x: \"\".concat(xPos(count, index), \"%\"),\n                  y: \"\".concat(91 - value, \"%\"),\n                  textAnchor: \"middle\",\n                  alignmentBaseline: \"middle\",\n                  fill: \"var(--color-canvas)\",\n                  children: [\"You\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tspan\", {\n                    fontSize: \"0\",\n                    fill: \"none\",\n                    children: [\" use \", label, \" \", title, \", similar to \", value, \" of other users\"]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 44,\n                    columnNumber: 268\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 44,\n                  columnNumber: 135\n                }, _this)]\n              }, void 0, true)]\n            }, label, true, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 15\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this), newChartData.map(function (_ref3, index) {\n          var label = _ref3.label,\n              value = _ref3.value;\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"g\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"text\", {\n              x: \"\".concat(xPos(count, index), \"%\"),\n              y: \"91%\",\n              textAnchor: \"middle\",\n              children: label\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"text\", {\n              x: \"\".concat(xPos(count, index), \"%\"),\n              y: \"97%\",\n              textAnchor: \"middle\",\n              className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"chartValues\"],\n              children: \"\".concat(value.toFixed(2), \"%\")\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 15\n            }, _this)]\n          }, label, true, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\nBarChart.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,\n  details: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,\n  userValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  chartData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({\n    label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,\n    value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired\n  })).isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"BarChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmFyQ2hhcnQvaW5kZXguanN4P2Q1N2YiXSwibmFtZXMiOlsiQmFyQ2hhcnQiLCJ0aXRsZSIsImRldGFpbHMiLCJ1c2VyVmFsdWUiLCJjaGFydERhdGEiLCJ4UG9zIiwiY291bnQiLCJpbmRleCIsImJhcldpZHRoIiwib3RoZXJWYWx1ZSIsIm1hcCIsInZhbHVlIiwicmVkdWNlIiwicHJldmlvdXNWYWx1ZSIsImN1cnJlbnRWYWx1ZSIsIm5ld0NoYXJ0RGF0YSIsImxhYmVsIiwibGVuZ3RoIiwiaXNPdGhlciIsImlzTGFiZWwiLCJjaGFydCIsImNoYXJ0Q2FwdGlvbiIsImNoYXJ0R3JpZCIsIml0ZW0iLCJjaGFydFZhbHVlcyIsInRvRml4ZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsInNoYXBlIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQU9BLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQThDO0FBQUEsTUFBM0NDLEtBQTJDLFFBQTNDQSxLQUEyQztBQUFBLE1BQXBDQyxPQUFvQyxRQUFwQ0EsT0FBb0M7QUFBQSxNQUEzQkMsU0FBMkIsUUFBM0JBLFNBQTJCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFDN0QsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsV0FBbUJBLEtBQUssR0FBRyxHQUFSLEdBQWNELEtBQWYsR0FBd0IsQ0FBQ0UsUUFBUSxHQUFHRixLQUFaLElBQXFCLENBQTdDLEdBQWlELENBQW5FO0FBQUEsR0FBYjs7QUFDQSxNQUFNRyxVQUFVLEdBQUdMLFNBQVMsQ0FBQ00sR0FBVixDQUFjO0FBQUEsUUFBRUMsS0FBRixTQUFFQSxLQUFGO0FBQUEsV0FBYUEsS0FBYjtBQUFBLEdBQWQsRUFBa0NDLE1B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QUFRQyxLQUFSLENBQVQsTUFBUDtBQUFtQyxlQUFDLEVBQUMsS0FBckM7QUFBMkMsd0JBQVUsRUFBQyxRQUF0RDtBQUErRCx1QkFBUyxFQUFFaUIsNkRBQTFFO0FBQUEsa0NBQTJGYixLQUFLLENBQUNjLE9BQU4sQ0FBYyxDQUFkLENBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBLGFBQVFULEtBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEa0I7QUFBQSxTQUFqQixDQXBCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXNDRCxDQW5ERDs7S0FBTWhCLFE7QUFxRFNBLHVFQUFmO0FBRUFBLFFBQVEsQ0FBQzBCLFNBQVQsR0FBcUI7QUFDbkJ6QixPQUFLLEVBQUUwQixpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURMO0FBRW5CM0IsU0FBTyxFQUFFeUIsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFGUDtBQUduQjFCLFdBQVMsRUFBRXdCLGlEQUFTLENBQUNDLE1BSEY7QUFJbkJ4QixXQUFTLEVBQUV1QixpREFBUyxDQUFDRyxPQUFWLENBQWtCSCxpREFBUyxDQUFDSSxLQUFWLENBQWdCO0FBQzNDZixTQUFLLEVBQUVXLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRG1CO0FBRTNDbEIsU0FBSyxFQUFFZ0IsaURBQVMsQ0FBQ0ssTUFBVixDQUFpQkg7QUFGbUIsR0FBaEIsQ0FBbEIsRUFHUEE7QUFQZSxDQUFyQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0JhckNoYXJ0L2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBcbiAgY2hhcnQsXG4gIGNoYXJ0Q2FwdGlvbixcbiAgY2hhcnRHcmlkLFxuICBjaGFydFZhbHVlcyxcbn0gZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcblxuY29uc3QgQmFyQ2hhcnQgPSAoeyB0aXRsZSwgZGV0YWlscywgdXNlclZhbHVlLCBjaGFydERhdGEgfSkgPT4ge1xuICBjb25zdCB4UG9zID0gKGNvdW50LCBpbmRleCkgPT4gKGluZGV4ICogMTAwIC8gY291bnQpICsgKGJhcldpZHRoIC0gY291bnQpICogMiArIDE7XG4gIGNvbnN0IG90aGVyVmFsdWUgPSBjaGFydERhdGEubWFwKCh7dmFsdWV9KSA9PiB2YWx1ZSkucmVkdWNlKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHByZXZpb3VzVmFsdWUgKyBjdXJyZW50VmFsdWUpO1xuICBjb25zdCBuZXdDaGFydERhdGEgPSBbLi4uY2hhcnREYXRhLCB7bGFiZWw6ICdPdGhlcicsIHZhbHVlOiAxMDAgLSBvdGhlclZhbHVlfV1cbiAgY29uc3QgY291bnQgPSBuZXdDaGFydERhdGEubGVuZ3RoO1xuICBjb25zdCBiYXJXaWR0aCA9IDEwO1xuICBsZXQgaXNPdGhlciA9IHRydWU7XG5cbiAgY29uc3QgaXNMYWJlbCA9IChsYWJlbCwgdXNlclZhbHVlKSA9PiB7XG4gICAgaWYobGFiZWwgPT09IHVzZXJWYWx1ZSl7IGlzT3RoZXIgPSBmYWxzZSB9XG4gICAgcmV0dXJuIChsYWJlbCA9PT0gdXNlclZhbHVlIHx8IChsYWJlbCA9PT0gXCJPdGhlclwiICYmIGlzT3RoZXIpKVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtjaGFydH0+XG4gICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT17Y2hhcnRDYXB0aW9ufT5cbiAgICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XG4gICAgICAgICAge2RldGFpbHMgJiYgPHA+e2RldGFpbHN9PC9wPn1cbiAgICAgICAgPC9maWdjYXB0aW9uPlxuICAgICAgICBcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCwwIDEwMDAsNDAwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGZvbnRTaXplPVwiMThcIj5cbiAgICAgICAgICA8c3ZnIGhlaWdodD1cIjg2JVwiPlxuICAgICAgICAgICAgPGcgY2xhc3NOYW1lPXtjaGFydEdyaWR9PlxuICAgICAgICAgICAgICA8cmVjdCB5PVwiMCVcIiBoZWlnaHQ9XCIxXCIgd2lkdGg9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgICAgPHJlY3QgeT1cIjI1JVwiIGhlaWdodD1cIjFcIiB3aWR0aD1cIjEwMCVcIiAvPlxuICAgICAgICAgICAgICA8cmVjdCB5PVwiNTAlXCIgaGVpZ2h0PVwiMVwiIHdpZHRoPVwiMTAwJVwiIC8+XG4gICAgICAgICAgICAgIDxyZWN0IHk9XCI3NSVcIiBoZWlnaHQ9XCIxXCIgd2lkdGg9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgICAgPHJlY3QgeT1cIjk5JVwiIGhlaWdodD1cIjFcIiB3aWR0aD1cIjEwMCVcIiAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAge25ld0NoYXJ0RGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHtsYWJlbCwgdmFsdWV9ID0gaXRlbTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGcga2V5PXtsYWJlbH0+XG4gICAgICAgICAgICAgICAgPHJlY3QgeD17YCR7eFBvcyhjb3VudCwgaW5kZXgpIC0gYmFyV2lkdGggLyAyfSVgfSB5PXtgJHs5OSAtIHZhbHVlfSVgfSBoZWlnaHQ9e2Ake3ZhbHVlfSVgfSBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIi41XCIgd2lkdGg9e2Ake2JhcldpZHRofSVgfSAvPlxuICAgICAgICAgICAgICAgIHtpc0xhYmVsKGxhYmVsLCB1c2VyVmFsdWUpICYmIDw+PGNpcmNsZSBjeD17YCR7eFBvcyhjb3VudCwgaW5kZXgpfSVgfSBjeT17YCR7OTAuNSAtIHZhbHVlfSVgfSByPVwiMjBcIiBmaWxsPVwiIzAwODhmZlwiIC8+PHRleHQgeD17YCR7eFBvcyhjb3VudCwgaW5kZXgpfSVgfSB5PXtgJHs5MSAtIHZhbHVlfSVgfSB0ZXh0QW5jaG9yPVwibWlkZGxlXCIgYWxpZ25tZW50QmFzZWxpbmU9XCJtaWRkbGVcIiBmaWxsPVwidmFyKC0tY29sb3ItY2FudmFzKVwiPllvdTx0c3BhbiBmb250U2l6ZT1cIjBcIiBmaWxsPVwibm9uZVwiPiB1c2Uge2xhYmVsfSB7dGl0bGV9LCBzaW1pbGFyIHRvIHt2YWx1ZX0gb2Ygb3RoZXIgdXNlcnM8L3RzcGFuPjwvdGV4dD48Lz59XG4gICAgICAgICAgICAgIDwvZz4pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAge25ld0NoYXJ0RGF0YS5tYXAoKHtsYWJlbCwgdmFsdWV9LCBpbmRleCkgPT4gXG4gICAgICAgICAgICA8ZyBrZXk9e2xhYmVsfT5cbiAgICAgICAgICAgICAgPHRleHQgeD17YCR7eFBvcyhjb3VudCwgaW5kZXgpfSVgfSB5PVwiOTElXCIgdGV4dEFuY2hvcj1cIm1pZGRsZVwiPntsYWJlbH08L3RleHQ+XG4gICAgICAgICAgICAgIDx0ZXh0IHg9e2Ake3hQb3MoY291bnQsIGluZGV4KX0lYH0geT1cIjk3JVwiIHRleHRBbmNob3I9XCJtaWRkbGVcIiBjbGFzc05hbWU9e2NoYXJ0VmFsdWVzfT57YCR7dmFsdWUudG9GaXhlZCgyKX0lYH08L3RleHQ+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZmlndXJlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFyQ2hhcnQ7XG5cbkJhckNoYXJ0LnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGV0YWlsczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB1c2VyVmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoYXJ0RGF0YTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIH0pKS5pc1JlcXVpcmVkLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/BarChart/index.jsx\n");

/***/ })

})