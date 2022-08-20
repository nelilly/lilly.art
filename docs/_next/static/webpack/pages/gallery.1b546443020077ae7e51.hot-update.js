webpackHotUpdate_N_E("pages/gallery",{

/***/ "./src/pages/gallery/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/gallery/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/constants/role */ \"./src/shared/constants/role.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Layout */ \"./src/components/Layout/index.jsx\");\n/* harmony import */ var src_components_Directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Directory */ \"./src/components/Directory/index.jsx\");\n/* harmony import */ var src_components_Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Filter */ \"./src/components/Filter/index.jsx\");\n/* harmony import */ var src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/RepoList */ \"./src/components/RepoList/index.jsx\");\n/* harmony import */ var src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/data/gallery.json */ \"./src/data/gallery.json\");\nvar src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/data/gallery.json */ \"./src/data/gallery.json\", 1);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.module.css */ \"./src/pages/gallery/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/lillydev/lilly.art/src/pages/gallery/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconsole.log(src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"][0].tech); // console.log('Thanks for visiting!');\n\nvar GalleryPage = function GalleryPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      currentRole = _useState[0],\n      setCurrentRole = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setCurrentRole(localStorage.getItem('role', currentRole) || src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__[\"DEVELOPER\"]);\n  }, [currentRole, setCurrentRole]);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      keyword = _useState2[0],\n      setKeyword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      pageNumber = _useState3[0],\n      setPageNumber = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      projectLanguage = _useState4[0],\n      setLanguage = _useState4[1];\n\n  var onPageSelect = function onPageSelect(event) {\n    setPageNumber(parseInt(event.target.value, 10));\n  };\n\n  var articleSearch = function articleSearch(event) {\n    setKeyword(event.target.value);\n    setPageNumber(0);\n  };\n\n  var selectLanguage = function selectLanguage(event) {\n    setLanguage(event.target.value);\n    setPageNumber(0);\n  };\n\n  var techArray = [].concat.apply([], src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].map(function (data) {\n    return data.tech;\n  })).filter(function (item, index) {\n    return techArray.indexOf(item) === index;\n  });\n  console.log(techArray); // const techList = Object.keys(techArray)\n  // .map((key) => ({ optionLabel: key, optionCount: techArray[key] }))\n  // .sort((a, b) => ((b.optionLabel < a.optionLabel) ? 1 : -1));\n  // console.log({techArray, techList});\n\n  var filteredList = src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].filter(function (data) {\n    if (keyword && projectLanguage) {\n      return data.node.languages.edges.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true) && data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (keyword && !projectLanguage) {\n      return data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (!keyword && projectLanguage) {\n      return data.tech.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true);\n    }\n\n    return data;\n  }).sort(function (a, b) {\n    return new Date(b.date) - new Date(a.date);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"N.E.Lilly: Gallery\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: 'title'\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1.0, minimum-scale=1.0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      role: currentRole,\n      setRole: setCurrentRole,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Gallery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          data: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"],\n          itemType: ['work', 'works'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage // categoryList={techList}\n\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Directory__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          works: filteredList.slice(pageNumber * 10, pageNumber * 10 + 10)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          data: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"],\n          itemType: ['work', 'works'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          works: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"repositories\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(GalleryPage, \"Fc6+9UFYZWs9vrdVrIWcnaFcFY0=\");\n\n_c = GalleryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"GalleryPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dhbGxlcnkvaW5kZXguanN4PzViYjMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImdhbGxlcnkiLCJ0ZWNoIiwiR2FsbGVyeVBhZ2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRSb2xlIiwic2V0Q3VycmVudFJvbGUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiREVWRUxPUEVSIiwia2V5d29yZCIsInNldEtleXdvcmQiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInByb2plY3RMYW5ndWFnZSIsInNldExhbmd1YWdlIiwib25QYWdlU2VsZWN0IiwiZXZlbnQiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwiYXJ0aWNsZVNlYXJjaCIsInNlbGVjdExhbmd1YWdlIiwidGVjaEFycmF5IiwiY29uY2F0IiwiYXBwbHkiLCJtYXAiLCJkYXRhIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4IiwiaW5kZXhPZiIsImZpbHRlcmVkTGlzdCIsIm5vZGUiLCJsYW5ndWFnZXMiLCJlZGdlcyIsImxhbmd1YWdlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInRpdGxlIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsImRhdGUiLCJnYWxsZXJ5U3R5bGUiLCJzbGljZSIsInJlcG9zaXRvcmllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLDZEQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQXZCLEUsQ0FFQTs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsRUFBRCxDQUR0QjtBQUFBLE1BQ2pCQyxXQURpQjtBQUFBLE1BQ0pDLGNBREk7O0FBRXhCQyx5REFBUyxDQUFD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ZUFhRSxxRUFBQyxnRUFBRDtBQUFXLGVBQUssRUFBRVUsWUFBWSxDQUFDYyxLQUFiLENBQW1CbEMsVUFBVSxHQUFHLEVBQWhDLEVBQXFDQSxVQUFVLEdBQUcsRUFBZCxHQUFvQixFQUF4RDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGLGVBY0UscUVBQUMsNkRBQUQ7QUFDRSxjQUFJLEVBQUVaLDZEQURSO0FBRUUsa0JBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxPQUFULENBRlo7QUFHRSxxQkFBVyxFQUFFWSxVQUhmO0FBSUUsc0JBQVksRUFBRUksWUFKaEI7QUFLRSxrQkFBUSxFQUFFSyxhQUxaO0FBTUUsa0JBQVEsRUFBRUM7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRGLGVBc0JFLHFFQUFDLCtEQUFEO0FBQVUsZUFBSyxFQUFFeUIsa0VBQVlBO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBLGtCQURGO0FBbUNELENBL0ZEOztHQUFNN0MsVzs7S0FBQUEsVztBQWlHU0EsMEVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FsbGVyeS9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgREVWRUxPUEVSIH0gZnJvbSAnc3JjL3NoYXJlZC9jb25zdGFudHMvcm9sZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExheW91dCBmcm9tICdzcmMvY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IERpcmVjdG9yeSBmcm9tICdzcmMvY29tcG9uZW50cy9EaXJlY3RvcnknO1xuaW1wb3J0IEZpbHRlciBmcm9tICdzcmMvY29tcG9uZW50cy9GaWx0ZXInO1xuaW1wb3J0IFJlcG9MaXN0IGZyb20gJ3NyYy9jb21wb25lbnRzL1JlcG9MaXN0JztcblxuaW1wb3J0IHsgZ2FsbGVyeSwgcmVwb3NpdG9yaWVzIH0gZnJvbSAnc3JjL2RhdGEvZ2FsbGVyeS5qc29uJztcblxuaW1wb3J0IHtcbiAgZ2FsbGVyeSBhcyBnYWxsZXJ5U3R5bGUsXG59IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbmNvbnNvbGUubG9nKGdhbGxlcnlbMF0udGVjaClcblxuLy8gY29uc29sZS5sb2coJ1RoYW5rcyBmb3IgdmlzaXRpbmchJyk7XG5cbmNvbnN0IEdhbGxlcnlQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudFJvbGUsIHNldEN1cnJlbnRSb2xlXSA9IHVzZVN0YXRlKCcnKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDdXJyZW50Um9sZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm9sZScsIGN1cnJlbnRSb2xlKSB8fCBERVZFTE9QRVIpO1xuICB9LCBbY3VycmVudFJvbGUsIHNldEN1cnJlbnRSb2xlXSk7XG5cbiAgY29uc3QgW2tleXdvcmQsIHNldEtleXdvcmRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwYWdlTnVtYmVyLCBzZXRQYWdlTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcHJvamVjdExhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBvblBhZ2VTZWxlY3QgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRQYWdlTnVtYmVyKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApKTtcbiAgfTtcblxuICBjb25zdCBhcnRpY2xlU2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0S2V5d29yZChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldFBhZ2VOdW1iZXIoMCk7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0TGFuZ3VhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldFBhZ2VOdW1iZXIoMCk7XG4gIH07XG5cbiBjb25zdCB0ZWNoQXJyYXkgPSBbXS5jb25jYXQuYXBwbHkoW10sIGdhbGxlcnkubWFwKChkYXRhKSA9PiBkYXRhLnRlY2gpKS5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gdGVjaEFycmF5LmluZGV4T2YoaXRlbSkgPT09IGluZGV4O1xuICAgIH0pO1xuXG4gICAgXG4gIGNvbnNvbGUubG9nKHRlY2hBcnJheSk7XG5cbiAgLy8gY29uc3QgdGVjaExpc3QgPSBPYmplY3Qua2V5cyh0ZWNoQXJyYXkpXG4gIC8vIC5tYXAoKGtleSkgPT4gKHsgb3B0aW9uTGFiZWw6IGtleSwgb3B0aW9uQ291bnQ6IHRlY2hBcnJheVtrZXldIH0pKVxuICAvLyAuc29ydCgoYSwgYikgPT4gKChiLm9wdGlvbkxhYmVsIDwgYS5vcHRpb25MYWJlbCkgPyAxIDogLTEpKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHt0ZWNoQXJyYXksIHRlY2hMaXN0fSk7XG5cbiAgY29uc3QgZmlsdGVyZWRMaXN0ID0gZ2FsbGVyeVxuICAgIC5maWx0ZXIoKGRhdGEpID0+IHtcbiAgICAgIGlmIChrZXl3b3JkICYmIHByb2plY3RMYW5ndWFnZSkge1xuICAgICAgICByZXR1cm4gZGF0YS5ub2RlLmxhbmd1YWdlcy5lZGdlc1xuICAgICAgICAubWFwKChsYW5ndWFnZSkgPT4gbGFuZ3VhZ2UudG9Mb3dlckNhc2UoKVxuICAgICAgICAgID09PSBwcm9qZWN0TGFuZ3VhZ2U/LnRvTG93ZXJDYXNlKCkpLmluY2x1ZGVzKHRydWUpXG4gICAgICAgICAgJiYgZGF0YS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGtleXdvcmQ/LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAvLyB8fCBkYXRhLmF1dGhvci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGtleXdvcmQ/LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKGtleXdvcmQgJiYgIXByb2plY3RMYW5ndWFnZSkge1xuICAgICAgICByZXR1cm4gZGF0YS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGtleXdvcmQ/LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAvLyB8fCBkYXRhLmF1dGhvci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGtleXdvcmQ/LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKCFrZXl3b3JkICYmIHByb2plY3RMYW5ndWFnZSkge1xuICAgICAgICByZXR1cm4gZGF0YS50ZWNoXG4gICAgICAgICAgLm1hcCgobGFuZ3VhZ2UpID0+IGxhbmd1YWdlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgID09PSBwcm9qZWN0TGFuZ3VhZ2U/LnRvTG93ZXJDYXNlKCkpLmluY2x1ZGVzKHRydWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KVxuICAgIC5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShiLmRhdGUpIC0gbmV3IERhdGUoYS5kYXRlKSk7XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk4uRS5MaWxseTogR2FsbGVyeTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXsndGl0bGUnfSBrZXk9XCJ0aXRsZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtaW5pbXVtLXNjYWxlPTEuMFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TGF5b3V0IHJvbGU9e2N1cnJlbnRSb2xlfSBzZXRSb2xlPXtzZXRDdXJyZW50Um9sZX0+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17Z2FsbGVyeVN0eWxlfT5cbiAgICAgICAgICA8aDE+R2FsbGVyeTwvaDE+XG4gICAgICAgICAgPEZpbHRlclxuICAgICAgICAgICAgZGF0YT17Z2FsbGVyeX1cbiAgICAgICAgICAgIGl0ZW1UeXBlPXtbJ3dvcmsnLCAnd29ya3MnXX1cbiAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtwYWdlTnVtYmVyfVxuICAgICAgICAgICAgb25QYWdlU2VsZWN0PXtvblBhZ2VTZWxlY3R9XG4gICAgICAgICAgICBvblNlYXJjaD17YXJ0aWNsZVNlYXJjaH1cbiAgICAgICAgICAgIG9uU2VsZWN0PXtzZWxlY3RMYW5ndWFnZX1cbiAgICAgICAgICAgIC8vIGNhdGVnb3J5TGlzdD17dGVjaExpc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7LyogPHA+W0ZJTFRFUlNdPC9wPiAqL31cbiAgICAgICAgICB7LyogPERpcmVjdG9yeSB3b3Jrcz17Z2FsbGVyeX0gLz4gKi99XG4gICAgICAgICAgPERpcmVjdG9yeSB3b3Jrcz17ZmlsdGVyZWRMaXN0LnNsaWNlKHBhZ2VOdW1iZXIgKiAxMCwgKHBhZ2VOdW1iZXIgKiAxMCkgKyAxMCl9IC8+XG4gICAgICAgICAgPEZpbHRlclxuICAgICAgICAgICAgZGF0YT17Z2FsbGVyeX1cbiAgICAgICAgICAgIGl0ZW1UeXBlPXtbJ3dvcmsnLCAnd29ya3MnXX1cbiAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtwYWdlTnVtYmVyfVxuICAgICAgICAgICAgb25QYWdlU2VsZWN0PXtvblBhZ2VTZWxlY3R9XG4gICAgICAgICAgICBvblNlYXJjaD17YXJ0aWNsZVNlYXJjaH1cbiAgICAgICAgICAgIG9uU2VsZWN0PXtzZWxlY3RMYW5ndWFnZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxSZXBvTGlzdCB3b3Jrcz17cmVwb3NpdG9yaWVzfSAvPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeVBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/gallery/index.jsx\n");

/***/ })

})