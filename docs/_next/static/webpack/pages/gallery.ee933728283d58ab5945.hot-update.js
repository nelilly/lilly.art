webpackHotUpdate_N_E("pages/gallery",{

/***/ "./src/pages/gallery/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/gallery/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/constants/role */ \"./src/shared/constants/role.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Layout */ \"./src/components/Layout/index.jsx\");\n/* harmony import */ var src_components_Directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Directory */ \"./src/components/Directory/index.jsx\");\n/* harmony import */ var src_components_Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Filter */ \"./src/components/Filter/index.jsx\");\n/* harmony import */ var src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/RepoList */ \"./src/components/RepoList/index.jsx\");\n/* harmony import */ var src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/data/gallery.json */ \"./src/data/gallery.json\");\nvar src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/data/gallery.json */ \"./src/data/gallery.json\", 1);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.module.css */ \"./src/pages/gallery/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/lillydev/lilly.art/src/pages/gallery/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconsole.log(src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"]); // console.log('Thanks for visiting!');\n\nvar GalleryPage = function GalleryPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      currentRole = _useState[0],\n      setCurrentRole = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setCurrentRole(localStorage.getItem('role', currentRole) || src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__[\"DEVELOPER\"]);\n  }, [currentRole, setCurrentRole]);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      keyword = _useState2[0],\n      setKeyword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      pageNumber = _useState3[0],\n      setPageNumber = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      projectLanguage = _useState4[0],\n      setLanguage = _useState4[1];\n\n  var onPageSelect = function onPageSelect(event) {\n    setPageNumber(parseInt(event.target.value, 10));\n  };\n\n  var articleSearch = function articleSearch(event) {\n    setKeyword(event.target.value);\n    setPageNumber(0);\n  };\n\n  var selectLanguage = function selectLanguage(event) {\n    setLanguage(event.target.value);\n    setPageNumber(0);\n  };\n\n  var techArray = src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].map(function (data) {\n    return data.tech;\n  }).map(function (language) {\n    return language;\n  }).reduce(function (categoryArray, currentCategory) {\n    var newArray = categoryArray;\n    newArray[currentCategory] = (newArray[currentCategory] || 0) + 1; // console.log(newArray);\n\n    return newArray;\n  });\n  var techList = Object.keys(techArray).map(function (key) {\n    return {\n      optionLabel: key,\n      optionCount: techArray[key]\n    };\n  }).sort(function (a, b) {\n    return b.optionLabel < a.optionLabel ? 1 : -1;\n  }); // console.log({techArray, techList});\n\n  var filteredList = src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].filter(function (data) {\n    if (keyword && projectLanguage) {\n      return data.node.languages.edges.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true) && data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (keyword && !projectLanguage) {\n      return data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (!keyword && projectLanguage) {\n      return data.tech.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true);\n    }\n\n    return data;\n  }).sort(function (a, b) {\n    return new Date(b.date) - new Date(a.date);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"N.E.Lilly: Gallery\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: 'title'\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1.0, minimum-scale=1.0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      role: currentRole,\n      setRole: setCurrentRole,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Gallery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          data: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"],\n          itemType: ['work', 'works'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage,\n          categoryList: techList\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Directory__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          works: filteredList.slice(pageNumber * 10, pageNumber * 10 + 10)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          data: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"],\n          itemType: ['work', 'works'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          works: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"repositories\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(GalleryPage, \"Fc6+9UFYZWs9vrdVrIWcnaFcFY0=\");\n\n_c = GalleryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"GalleryPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dhbGxlcnkvaW5kZXguanN4PzViYjMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImdhbGxlcnkiLCJHYWxsZXJ5UGFnZSIsInVzZVN0YXRlIiwiY3VycmVudFJvbGUiLCJzZXRDdXJyZW50Um9sZSIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJERVZFTE9QRVIiLCJrZXl3b3JkIiwic2V0S2V5d29yZCIsInBhZ2VOdW1iZXIiLCJzZXRQYWdlTnVtYmVyIiwicHJvamVjdExhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJvblBhZ2VTZWxlY3QiLCJldmVudCIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiLCJhcnRpY2xlU2VhcmNoIiwic2VsZWN0TGFuZ3VhZ2UiLCJ0ZWNoQXJyYXkiLCJtYXAiLCJkYXRhIiwidGVjaCIsImxhbmd1YWdlIiwicmVkdWNlIiwiY2F0ZWdvcnlBcnJheSIsImN1cnJlbnRDYXRlZ29yeSIsIm5ld0FycmF5IiwidGVjaExpc3QiLCJPYmplY3QiLCJrZXlzIiwia2V5Iiwib3B0aW9uTGFiZWwiLCJvcHRpb25Db3VudCIsInNvcnQiLCJhIiwiYiIsImZpbHRlcmVkTGlzdCIsImZpbHRlciIsIm5vZGUiLCJsYW5ndWFnZXMiLCJlZGdlcyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0aXRsZSIsIkRhdGUiLCJkYXRlIiwiZ2FsbGVyeVN0eWxlIiwic2xpY2UiLCJyZXBvc2l0b3JpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBSUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyw2REFBWixFLENBRUE7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEVBQUQsQ0FEdEI7QUFBQSxN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QUFNbkQsVzs7S0FBQUEsVztBQW9HU0EsMEVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FsbGVyeS9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgREVWRUxPUEVSIH0gZnJvbSAnc3JjL3NoYXJlZC9jb25zdGFudHMvcm9sZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExheW91dCBmcm9tICdzcmMvY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IERpcmVjdG9yeSBmcm9tICdzcmMvY29tcG9uZW50cy9EaXJlY3RvcnknO1xuaW1wb3J0IEZpbHRlciBmcm9tICdzcmMvY29tcG9uZW50cy9GaWx0ZXInO1xuaW1wb3J0IFJlcG9MaXN0IGZyb20gJ3NyYy9jb21wb25lbnRzL1JlcG9MaXN0JztcblxuaW1wb3J0IHsgZ2FsbGVyeSwgcmVwb3NpdG9yaWVzIH0gZnJvbSAnc3JjL2RhdGEvZ2FsbGVyeS5qc29uJztcblxuaW1wb3J0IHtcbiAgZ2FsbGVyeSBhcyBnYWxsZXJ5U3R5bGUsXG59IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbmNvbnNvbGUubG9nKGdhbGxlcnkpXG5cbi8vIGNvbnNvbGUubG9nKCdUaGFua3MgZm9yIHZpc2l0aW5nIScpO1xuXG5jb25zdCBHYWxsZXJ5UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRSb2xlLCBzZXRDdXJyZW50Um9sZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3VycmVudFJvbGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvbGUnLCBjdXJyZW50Um9sZSkgfHwgREVWRUxPUEVSKTtcbiAgfSwgW2N1cnJlbnRSb2xlLCBzZXRDdXJyZW50Um9sZV0pO1xuXG4gIGNvbnN0IFtrZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Byb2plY3RMYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgb25QYWdlU2VsZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0UGFnZU51bWJlcihwYXJzZUludChldmVudC50YXJnZXQudmFsdWUsIDEwKSk7XG4gIH07XG5cbiAgY29uc3QgYXJ0aWNsZVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgIHNldEtleXdvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRQYWdlTnVtYmVyKDApO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdExhbmd1YWdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0TGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRQYWdlTnVtYmVyKDApO1xuICB9O1xuXG4gIGNvbnN0IHRlY2hBcnJheSA9IGdhbGxlcnlcbiAgICAubWFwKChkYXRhKSA9PiAoZGF0YS50ZWNoKSlcbiAgICAubWFwKChsYW5ndWFnZSkgPT4gbGFuZ3VhZ2UpXG4gICAgLnJlZHVjZSgoY2F0ZWdvcnlBcnJheSwgY3VycmVudENhdGVnb3J5KSA9PiB7XG4gICAgICBjb25zdCBuZXdBcnJheSA9IGNhdGVnb3J5QXJyYXk7XG4gICAgICBuZXdBcnJheVtjdXJyZW50Q2F0ZWdvcnldID0gKG5ld0FycmF5W2N1cnJlbnRDYXRlZ29yeV0gfHwgMCkgKyAxO1xuICAgICAgLy8gY29uc29sZS5sb2cobmV3QXJyYXkpO1xuICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgIH0pO1xuXG4gIGNvbnN0IHRlY2hMaXN0ID0gT2JqZWN0LmtleXModGVjaEFycmF5KVxuICAubWFwKChrZXkpID0+ICh7IG9wdGlvbkxhYmVsOiBrZXksIG9wdGlvbkNvdW50OiB0ZWNoQXJyYXlba2V5XSB9KSlcbiAgLnNvcnQoKGEsIGIpID0+ICgoYi5vcHRpb25MYWJlbCA8IGEub3B0aW9uTGFiZWwpID8gMSA6IC0xKSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh7dGVjaEFycmF5LCB0ZWNoTGlzdH0pO1xuXG4gIGNvbnN0IGZpbHRlcmVkTGlzdCA9IGdhbGxlcnlcbiAgICAuZmlsdGVyKChkYXRhKSA9PiB7XG4gICAgICBpZiAoa2V5d29yZCAmJiBwcm9qZWN0TGFuZ3VhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEubm9kZS5sYW5ndWFnZXMuZWRnZXNcbiAgICAgICAgLm1hcCgobGFuZ3VhZ2UpID0+IGxhbmd1YWdlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICA9PT0gcHJvamVjdExhbmd1YWdlPy50b0xvd2VyQ2FzZSgpKS5pbmNsdWRlcyh0cnVlKVxuICAgICAgICAgICYmIGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgLy8gfHwgZGF0YS5hdXRob3IudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXl3b3JkICYmICFwcm9qZWN0TGFuZ3VhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgLy8gfHwgZGF0YS5hdXRob3IudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmICgha2V5d29yZCAmJiBwcm9qZWN0TGFuZ3VhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEudGVjaFxuICAgICAgICAgIC5tYXAoKGxhbmd1YWdlKSA9PiBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICA9PT0gcHJvamVjdExhbmd1YWdlPy50b0xvd2VyQ2FzZSgpKS5pbmNsdWRlcyh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgICAuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSkpO1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OLkUuTGlsbHk6IEdhbGxlcnk8L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17J3RpdGxlJ30ga2V5PVwidGl0bGVcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWluaW11bS1zY2FsZT0xLjBcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExheW91dCByb2xlPXtjdXJyZW50Um9sZX0gc2V0Um9sZT17c2V0Q3VycmVudFJvbGV9PlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2dhbGxlcnlTdHlsZX0+XG4gICAgICAgICAgPGgxPkdhbGxlcnk8L2gxPlxuICAgICAgICAgIDxGaWx0ZXJcbiAgICAgICAgICAgIGRhdGE9e2dhbGxlcnl9XG4gICAgICAgICAgICBpdGVtVHlwZT17Wyd3b3JrJywgJ3dvcmtzJ119XG4gICAgICAgICAgICBjdXJyZW50UGFnZT17cGFnZU51bWJlcn1cbiAgICAgICAgICAgIG9uUGFnZVNlbGVjdD17b25QYWdlU2VsZWN0fVxuICAgICAgICAgICAgb25TZWFyY2g9e2FydGljbGVTZWFyY2h9XG4gICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0TGFuZ3VhZ2V9XG4gICAgICAgICAgICBjYXRlZ29yeUxpc3Q9e3RlY2hMaXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIDxwPltGSUxURVJTXTwvcD4gKi99XG4gICAgICAgICAgey8qIDxEaXJlY3Rvcnkgd29ya3M9e2dhbGxlcnl9IC8+ICovfVxuICAgICAgICAgIDxEaXJlY3Rvcnkgd29ya3M9e2ZpbHRlcmVkTGlzdC5zbGljZShwYWdlTnVtYmVyICogMTAsIChwYWdlTnVtYmVyICogMTApICsgMTApfSAvPlxuICAgICAgICAgIDxGaWx0ZXJcbiAgICAgICAgICAgIGRhdGE9e2dhbGxlcnl9XG4gICAgICAgICAgICBpdGVtVHlwZT17Wyd3b3JrJywgJ3dvcmtzJ119XG4gICAgICAgICAgICBjdXJyZW50UGFnZT17cGFnZU51bWJlcn1cbiAgICAgICAgICAgIG9uUGFnZVNlbGVjdD17b25QYWdlU2VsZWN0fVxuICAgICAgICAgICAgb25TZWFyY2g9e2FydGljbGVTZWFyY2h9XG4gICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0TGFuZ3VhZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UmVwb0xpc3Qgd29ya3M9e3JlcG9zaXRvcmllc30gLz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/gallery/index.jsx\n");

/***/ })

})