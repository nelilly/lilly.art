webpackHotUpdate_N_E("pages/gallery/[item]",{

/***/ "./src/pages/gallery/[item].jsx":
/*!**************************************!*\
  !*** ./src/pages/gallery/[item].jsx ***!
  \**************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_shared_constants_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/constants/role */ \"./src/shared/constants/role.js\");\n/* harmony import */ var src_shared_functions_formatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/functions/formatDate */ \"./src/shared/functions/formatDate.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var src_components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/Layout */ \"./src/components/Layout/index.jsx\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.module.css */ \"./src/pages/gallery/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/lillydev/lilly.art/src/pages/gallery/[item].jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar GalleryItem = function GalleryItem(_ref) {\n  _s();\n\n  var _ref$item = _ref.item,\n      title = _ref$item.title,\n      authorship = _ref$item.authorship,\n      date = _ref$item.date,\n      role = _ref$item.role,\n      tech = _ref$item.tech,\n      image = _ref$item.image,\n      description = _ref$item.description;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      currentRole = _useState[0],\n      setCurrentRole = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setCurrentRole(localStorage.getItem('role', currentRole) || src_shared_constants_role__WEBPACK_IMPORTED_MODULE_4__[\"DEVELOPER\"]);\n  }, [currentRole, setCurrentRole]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [\"N.E.Lilly: \", title]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: \"N.E.Lilly: \".concat(title)\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1.0, minimum-scale=1.0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      role: currentRole,\n      setRole: setCurrentRole,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_8__[\"galleryItem\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_8__[\"galleryItemTitle\"],\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_8__[\"galleryItemDetails\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_8__[\"galleryItemType\"],\n            children: role.map(function (item, index) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                children: [item, index === role.length - 1 || ', ']\n              }, \"dev_\".concat(item), true, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 71\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_8__[\"galleryItemAuthorship\"],\n            children: authorship\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_8__[\"galleryItemTime\"],\n            children: Object(src_shared_functions_formatDate__WEBPACK_IMPORTED_MODULE_5__[\"formatDate\"])(date, \"short\")\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_8__[\"galleryItemImage\"],\n          src: image,\n          alt: \"image\",\n          width: 1600,\n          height: 1080,\n          objectFit: \"cover\",\n          objectPosition: \"top\",\n          priority: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_8__[\"galleryItemDescription\"],\n          children: description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_8__[\"galleryItemTags\"],\n          children: tech.map(function (item, index) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              children: [item, index === tech.length - 1 || ', ']\n            }, item, true, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 69\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(GalleryItem, \"7VgjUCttv7GX6Vut0PMU0mM6E48=\");\n\n_c = GalleryItem;\nGalleryItem.propTypes = {\n  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    authorship: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    role: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,\n    tech: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,\n    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n  }).isRequired\n};\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"GalleryItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dhbGxlcnkvW2l0ZW1dLmpzeD82YWYzIl0sIm5hbWVzIjpbIkdhbGxlcnlJdGVtIiwiaXRlbSIsInRpdGxlIiwiYXV0aG9yc2hpcCIsImRhdGUiLCJyb2xlIiwidGVjaCIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJ1c2VTdGF0ZSIsImN1cnJlbnRSb2xlIiwic2V0Q3VycmVudFJvbGUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiREVWRUxPUEVSIiwiZ2FsbGVyeUl0ZW0iLCJnYWxsZXJ5SXRlbVRpdGxlIiwiZ2FsbGVyeUl0ZW1EZXRhaWxzIiwiZ2FsbGVyeUl0ZW1UeXBlIiwibWFwIiwiaW5kZXgiLCJsZW5ndGgiLCJnYWxsZXJ5SXRlbUF1dGhvcnNoaXAiLCJnYWxsZXJ5SXRlbVRpbWUiLCJmb3JtYXREYXRlIiwiZ2FsbGVyeUl0ZW1JbWFnZSIsImdhbGxlcnlJdGVtRGVzY3JpcHRpb24iLCJnYWxsZXJ5SXRlbVRhZ3MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUE2QkEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBeUU7QUFBQTs7QUFBQSx1QkFBdEVDLElBQXNFO0FBQUEsTUFBL0RDLEtBQStELGFBQS9EQSxLQUErRDtBQUFBLE1BQXhEQyxVQUF3RCxhQUF4REEsVUFBd0Q7QUFBQSxNQUE1Q0MsSUFBNEMsYUFBNUNBLElBQTRDO0FBQUEsTUFBdENDLElBQXNDLGFBQXRDQSxJQUFzQztBQUFBLE1BQWhDQyxJQUFnQyxhQUFoQ0EsSUFBZ0M7QUFBQSxNQUExQkMsS0FBMEIsYUFBMUJBLEtBQTBCO0FBQUEsTUFBbkJDLFdBQW1CLGFBQW5CQSxXQUFtQjs7QUFB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O0FBQUEsa0JBREE7QUFrQ0EsQ0F4Q0Y7O0dBQU1ELFc7O0tBQUFBLFc7QUEwQ05BLFdBQVcsQ0FBQzZCLFNBQVosR0FBd0I7QUFDdEI1QixNQUFJLEVBQUU2QixpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ3BCNUIsY0FBVSxFQUFFMkIsaURBQVMsQ0FBQ0UsTUFBVixDQUFpQkMsVUFEVDtBQUVwQjdCLFFBQUksRUFBRTBCLGlEQUFTLENBQUNFLE1BQVYsQ0FBaUJDLFVBRkg7QUFHcEJ6QixlQUFXLEVBQUVzQixpREFBUyxDQUFDRSxNQUFWLENBQWlCQyxVQUhWO0FBSXBCMUIsU0FBSyxFQUFFdUIsaURBQVMsQ0FBQ0UsTUFKRztBQUtwQjNCLFFBQUksRUFBRXlCLGlEQUFTLENBQUNJLEtBQVYsQ0FBZ0JELFVBTEY7QUFNcEIzQixRQUFJLEVBQUV3QixpREFBUyxDQUFDSSxLQUFWLENBQWdCRCxVQU5GO0FBT3BCL0IsU0FBSyxFQUFFNEIsaURBQVMsQ0FBQ0UsTUFBVixDQUFpQkM7QUFQSixHQUFoQixFQVFIQTtBQVRtQixDQUF4Qjs7QUFZZWpDLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2dhbGxlcnkvW2l0ZW1dLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgREVWRUxPUEVSIH0gZnJvbSAnc3JjL3NoYXJlZC9jb25zdGFudHMvcm9sZSc7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnc3JjL3NoYXJlZC9mdW5jdGlvbnMvZm9ybWF0RGF0ZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExheW91dCBmcm9tICdzcmMvY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgZ2FsbGVyeSB9IGZyb20gJ3NyYy9kYXRhL2dhbGxlcnkuanNvbic7XG5pbXBvcnQge1xuICBnYWxsZXJ5SXRlbSxcbiAgZ2FsbGVyeUl0ZW1UaXRsZSxcbiAgZ2FsbGVyeUl0ZW1JbWFnZSxcbiAgZ2FsbGVyeUl0ZW1BdXRob3JzaGlwLFxuICBnYWxsZXJ5SXRlbVR5cGUsXG4gIGdhbGxlcnlJdGVtVGltZSxcbiAgZ2FsbGVyeUl0ZW1EZXRhaWxzLFxuICBnYWxsZXJ5SXRlbURlc2NyaXB0aW9uLFxuICBnYWxsZXJ5SXRlbVRhZ3MsXG59IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBnYWxsZXJ5LmZpbHRlcigocCkgPT4gcC5pbWFnZVNldC50b1N0cmluZygpID09PSBwYXJhbXMuaXRlbSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGl0ZW06IGxpc3RbMF0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcGF0aHMgPSBnYWxsZXJ5Lm1hcCgoaXRlbSkgPT4gKHtcbiAgICBwYXJhbXM6IHsgaXRlbTogaXRlbS5pbWFnZVNldC50b1N0cmluZygpIH0sXG4gIH0pKTtcblxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59O1xuXG5jb25zdCBHYWxsZXJ5SXRlbSA9ICh7IGl0ZW06IHt0aXRsZSwgYXV0aG9yc2hpcCwgZGF0ZSwgcm9sZSwgdGVjaCwgaW1hZ2UsIGRlc2NyaXB0aW9ufSB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50Um9sZSwgc2V0Q3VycmVudFJvbGVdID0gdXNlU3RhdGUoJycpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEN1cnJlbnRSb2xlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyb2xlJywgY3VycmVudFJvbGUpIHx8IERFVkVMT1BFUik7XG4gIH0sIFtjdXJyZW50Um9sZSwgc2V0Q3VycmVudFJvbGVdKTtcblxuICByZXR1cm4gKFxuICA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPk4uRS5MaWxseToge3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YE4uRS5MaWxseTogJHt0aXRsZX1gfSBrZXk9XCJ0aXRsZVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWluaW11bS1zY2FsZT0xLjBcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8TGF5b3V0IHJvbGU9e2N1cnJlbnRSb2xlfSBzZXRSb2xlPXtzZXRDdXJyZW50Um9sZX0+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2dhbGxlcnlJdGVtfT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtnYWxsZXJ5SXRlbVRpdGxlfT57dGl0bGV9PC9oMT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnYWxsZXJ5SXRlbURldGFpbHN9PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtnYWxsZXJ5SXRlbVR5cGV9Pntyb2xlLm1hcCgoaXRlbSwgaW5kZXgpID0+IDxzcGFuIGtleT17YGRldl8ke2l0ZW19YH0+e2l0ZW19ey8qIDxMaW5rIGhyZWY9e2Avcm9sZS8ke2tleUNoYW5nZShpdGVtKX1gfT57aXRlbX08L0xpbms+ICovfXtpbmRleCA9PT0gKHJvbGUubGVuZ3RoIC0gMSkgfHwgJywgJ308L3NwYW4+KX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2dhbGxlcnlJdGVtQXV0aG9yc2hpcH0+e2F1dGhvcnNoaXB9ey8qIDxMaW5rIGhyZWY9e2AvYXV0aG9yLyR7YXV0aG9yc2hpcH1gfT48L0xpbms+ICovfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Z2FsbGVyeUl0ZW1UaW1lfT57Zm9ybWF0RGF0ZShkYXRlLCBcInNob3J0XCIpfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogPGltZyBjbGFzc05hbWU9e2dhbGxlcnlJdGVtSW1hZ2V9IHNyYz17aW1hZ2V9IGFsdD1cIlwiIC8+ICovfVxuXG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBjbGFzc05hbWU9e2dhbGxlcnlJdGVtSW1hZ2V9XG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxuICAgICAgICAgICAgd2lkdGg9ezE2MDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezEwODB9XG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICBvYmplY3RQb3NpdGlvbj1cInRvcFwiXG4gICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtnYWxsZXJ5SXRlbURlc2NyaXB0aW9ufT57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17Z2FsbGVyeUl0ZW1UYWdzfT57dGVjaC5tYXAoKGl0ZW0sIGluZGV4KSA9PiA8c3BhbiBrZXk9e2l0ZW19PntpdGVtfXsvKiA8TGluayBocmVmPXtgL3JvbGUvJHtrZXlDaGFuZ2UoaXRlbSl9YH0+e2l0ZW19PC9MaW5rPiAqL317aW5kZXggPT09ICh0ZWNoLmxlbmd0aCAtIDEpIHx8ICcsICd9PC9zcGFuPil9PC9wPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvTGF5b3V0PlxuICA8Lz5cbil9O1xuXG5HYWxsZXJ5SXRlbS5wcm9wVHlwZXMgPSB7XG4gIGl0ZW06IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXV0aG9yc2hpcDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJvbGU6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIHRlY2g6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5SXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/gallery/[item].jsx\n");

/***/ })

})