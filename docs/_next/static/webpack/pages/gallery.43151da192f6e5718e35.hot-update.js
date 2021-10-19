webpackHotUpdate_N_E("pages/gallery",{

/***/ "./src/pages/gallery/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/gallery/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_nlilly200_lillydev_lilly_art_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_shared_constants_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/constants/role */ \"./src/shared/constants/role.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var src_components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Layout */ \"./src/components/Layout/index.jsx\");\n/* harmony import */ var src_components_Directory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Directory */ \"./src/components/Directory/index.jsx\");\n/* harmony import */ var src_components_Filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/Filter */ \"./src/components/Filter/index.jsx\");\n/* harmony import */ var src_components_RepoList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/RepoList */ \"./src/components/RepoList/index.jsx\");\n/* harmony import */ var src_data_gallery_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/data/gallery.json */ \"./src/data/gallery.json\");\nvar src_data_gallery_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/data/gallery.json */ \"./src/data/gallery.json\", 1);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.module.css */ \"./src/pages/gallery/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/lillydev/lilly.art/src/pages/gallery/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconsole.log(src_data_gallery_json__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"][0].tech); // console.log('Thanks for visiting!');\n\nvar GalleryPage = function GalleryPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      currentRole = _useState[0],\n      setCurrentRole = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setCurrentRole(localStorage.getItem('role', currentRole) || src_shared_constants_role__WEBPACK_IMPORTED_MODULE_3__[\"DEVELOPER\"]);\n  }, [currentRole, setCurrentRole]);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      keyword = _useState2[0],\n      setKeyword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      pageNumber = _useState3[0],\n      setPageNumber = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      projectLanguage = _useState4[0],\n      setLanguage = _useState4[1];\n\n  var onPageSelect = function onPageSelect(event) {\n    setPageNumber(parseInt(event.target.value, 10));\n  };\n\n  var articleSearch = function articleSearch(event) {\n    setKeyword(event.target.value);\n    setPageNumber(0);\n  };\n\n  var selectLanguage = function selectLanguage(event) {\n    setLanguage(event.target.value);\n    setPageNumber(0);\n  };\n\n  var techArray = src_data_gallery_json__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"].map(function (data) {\n    return data.tech;\n  }); // .reduce((categoryArray, currentCategory) => {\n  //   // console.log({categoryArray, currentCategory})\n  //   // const newArray = categoryArray;\n  //   // newArray[currentCategory] = (newArray[currentCategory] || 0) + 1;\n  //   // // console.log(newArray);\n  //   // return newArray;\n  // });\n\n  console.log([techArray.map(function (item) {\n    return Object(_Users_nlilly200_lillydev_lilly_art_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item);\n  })]); // const techList = Object.keys(techArray)\n  // .map((key) => ({ optionLabel: key, optionCount: techArray[key] }))\n  // .sort((a, b) => ((b.optionLabel < a.optionLabel) ? 1 : -1));\n  // console.log({techArray, techList});\n\n  var filteredList = src_data_gallery_json__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"].filter(function (data) {\n    if (keyword && projectLanguage) {\n      return data.node.languages.edges.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true) && data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (keyword && !projectLanguage) {\n      return data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (!keyword && projectLanguage) {\n      return data.tech.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true);\n    }\n\n    return data;\n  }).sort(function (a, b) {\n    return new Date(b.date) - new Date(a.date);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"N.E.Lilly: Gallery\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: 'title'\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1.0, minimum-scale=1.0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      role: currentRole,\n      setRole: setCurrentRole,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_10__[\"gallery\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Gallery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          data: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"],\n          itemType: ['work', 'works'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage // categoryList={techList}\n\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Directory__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          works: filteredList.slice(pageNumber * 10, pageNumber * 10 + 10)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          data: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"],\n          itemType: ['work', 'works'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_RepoList__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          works: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_9__[\"repositories\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(GalleryPage, \"Fc6+9UFYZWs9vrdVrIWcnaFcFY0=\");\n\n_c = GalleryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"GalleryPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dhbGxlcnkvaW5kZXguanN4PzViYjMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImdhbGxlcnkiLCJ0ZWNoIiwiR2FsbGVyeVBhZ2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRSb2xlIiwic2V0Q3VycmVudFJvbGUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiREVWRUxPUEVSIiwia2V5d29yZCIsInNldEtleXdvcmQiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInByb2plY3RMYW5ndWFnZSIsInNldExhbmd1YWdlIiwib25QYWdlU2VsZWN0IiwiZXZlbnQiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwiYXJ0aWNsZVNlYXJjaCIsInNlbGVjdExhbmd1YWdlIiwidGVjaEFycmF5IiwibWFwIiwiZGF0YSIsIml0ZW0iLCJmaWx0ZXJlZExpc3QiLCJmaWx0ZXIiLCJub2RlIiwibGFuZ3VhZ2VzIiwiZWRnZXMiLCJsYW5ndWFnZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0aXRsZSIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJkYXRlIiwiZ2FsbGVyeVN0eWxlIiwic2xpY2UiLCJyZXBvc2l0b3JpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLDZEQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQXZCLEUsQ0FFQTs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsRUFBRCxDQUR0QjtBQUFBLE1BQ2pCQyxXQURpQjtBQUFBLE1BQ0pDLGNBREk7O0FBRXhCQyx5REFBUyxDQUFDLFlBQU07QUFDZEQsa0JBQWMsQ0FBQ0UsWUFBWSxDQUFD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QSxVQUFVLEdBQUcsRUFBZCxHQUFvQixFQUF4RDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGLGVBY0UscUVBQUMsNkRBQUQ7QUFDRSxjQUFJLEVBQUVaLDZEQURSO0FBRUUsa0JBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxPQUFULENBRlo7QUFHRSxxQkFBVyxFQUFFWSxVQUhmO0FBSUUsc0JBQVksRUFBRUksWUFKaEI7QUFLRSxrQkFBUSxFQUFFSyxhQUxaO0FBTUUsa0JBQVEsRUFBRUM7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRGLGVBc0JFLHFFQUFDLCtEQUFEO0FBQVUsZUFBSyxFQUFFcUIsa0VBQVlBO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBLGtCQURGO0FBbUNELENBbEdEOztHQUFNekMsVzs7S0FBQUEsVztBQW9HU0EsMEVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FsbGVyeS9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgREVWRUxPUEVSIH0gZnJvbSAnc3JjL3NoYXJlZC9jb25zdGFudHMvcm9sZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExheW91dCBmcm9tICdzcmMvY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IERpcmVjdG9yeSBmcm9tICdzcmMvY29tcG9uZW50cy9EaXJlY3RvcnknO1xuaW1wb3J0IEZpbHRlciBmcm9tICdzcmMvY29tcG9uZW50cy9GaWx0ZXInO1xuaW1wb3J0IFJlcG9MaXN0IGZyb20gJ3NyYy9jb21wb25lbnRzL1JlcG9MaXN0JztcblxuaW1wb3J0IHsgZ2FsbGVyeSwgcmVwb3NpdG9yaWVzIH0gZnJvbSAnc3JjL2RhdGEvZ2FsbGVyeS5qc29uJztcblxuaW1wb3J0IHtcbiAgZ2FsbGVyeSBhcyBnYWxsZXJ5U3R5bGUsXG59IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbmNvbnNvbGUubG9nKGdhbGxlcnlbMF0udGVjaClcblxuLy8gY29uc29sZS5sb2coJ1RoYW5rcyBmb3IgdmlzaXRpbmchJyk7XG5cbmNvbnN0IEdhbGxlcnlQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudFJvbGUsIHNldEN1cnJlbnRSb2xlXSA9IHVzZVN0YXRlKCcnKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDdXJyZW50Um9sZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm9sZScsIGN1cnJlbnRSb2xlKSB8fCBERVZFTE9QRVIpO1xuICB9LCBbY3VycmVudFJvbGUsIHNldEN1cnJlbnRSb2xlXSk7XG5cbiAgY29uc3QgW2tleXdvcmQsIHNldEtleXdvcmRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwYWdlTnVtYmVyLCBzZXRQYWdlTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcHJvamVjdExhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBvblBhZ2VTZWxlY3QgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRQYWdlTnVtYmVyKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApKTtcbiAgfTtcblxuICBjb25zdCBhcnRpY2xlU2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0S2V5d29yZChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldFBhZ2VOdW1iZXIoMCk7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0TGFuZ3VhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldFBhZ2VOdW1iZXIoMCk7XG4gIH07XG5cbiBjb25zdCB0ZWNoQXJyYXkgPSBnYWxsZXJ5Lm1hcCgoZGF0YSkgPT4gZGF0YS50ZWNoKVxuICAgIC8vIC5yZWR1Y2UoKGNhdGVnb3J5QXJyYXksIGN1cnJlbnRDYXRlZ29yeSkgPT4ge1xuICAgIC8vICAgLy8gY29uc29sZS5sb2coe2NhdGVnb3J5QXJyYXksIGN1cnJlbnRDYXRlZ29yeX0pXG4gICAgLy8gICAvLyBjb25zdCBuZXdBcnJheSA9IGNhdGVnb3J5QXJyYXk7XG4gICAgLy8gICAvLyBuZXdBcnJheVtjdXJyZW50Q2F0ZWdvcnldID0gKG5ld0FycmF5W2N1cnJlbnRDYXRlZ29yeV0gfHwgMCkgKyAxO1xuICAgIC8vICAgLy8gLy8gY29uc29sZS5sb2cobmV3QXJyYXkpO1xuICAgIC8vICAgLy8gcmV0dXJuIG5ld0FycmF5O1xuICAgIC8vIH0pO1xuICBjb25zb2xlLmxvZyhbdGVjaEFycmF5Lm1hcChpdGVtID0+IFsuLi5pdGVtXSldKTtcblxuICAvLyBjb25zdCB0ZWNoTGlzdCA9IE9iamVjdC5rZXlzKHRlY2hBcnJheSlcbiAgLy8gLm1hcCgoa2V5KSA9PiAoeyBvcHRpb25MYWJlbDoga2V5LCBvcHRpb25Db3VudDogdGVjaEFycmF5W2tleV0gfSkpXG4gIC8vIC5zb3J0KChhLCBiKSA9PiAoKGIub3B0aW9uTGFiZWwgPCBhLm9wdGlvbkxhYmVsKSA/IDEgOiAtMSkpO1xuXG4gICAgLy8gY29uc29sZS5sb2coe3RlY2hBcnJheSwgdGVjaExpc3R9KTtcblxuICBjb25zdCBmaWx0ZXJlZExpc3QgPSBnYWxsZXJ5XG4gICAgLmZpbHRlcigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGtleXdvcmQgJiYgcHJvamVjdExhbmd1YWdlKSB7XG4gICAgICAgIHJldHVybiBkYXRhLm5vZGUubGFuZ3VhZ2VzLmVkZ2VzXG4gICAgICAgIC5tYXAoKGxhbmd1YWdlKSA9PiBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgPT09IHByb2plY3RMYW5ndWFnZT8udG9Mb3dlckNhc2UoKSkuaW5jbHVkZXModHJ1ZSlcbiAgICAgICAgICAmJiBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZD8udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIC8vIHx8IGRhdGEuYXV0aG9yLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZD8udG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgICBpZiAoa2V5d29yZCAmJiAhcHJvamVjdExhbmd1YWdlKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZD8udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIC8vIHx8IGRhdGEuYXV0aG9yLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZD8udG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgICBpZiAoIWtleXdvcmQgJiYgcHJvamVjdExhbmd1YWdlKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnRlY2hcbiAgICAgICAgICAubWFwKChsYW5ndWFnZSkgPT4gbGFuZ3VhZ2UudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgPT09IHByb2plY3RMYW5ndWFnZT8udG9Mb3dlckNhc2UoKSkuaW5jbHVkZXModHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pXG4gICAgLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIuZGF0ZSkgLSBuZXcgRGF0ZShhLmRhdGUpKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Ti5FLkxpbGx5OiBHYWxsZXJ5PC90aXRsZT5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9eyd0aXRsZSd9IGtleT1cInRpdGxlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1pbmltdW0tc2NhbGU9MS4wXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQgcm9sZT17Y3VycmVudFJvbGV9IHNldFJvbGU9e3NldEN1cnJlbnRSb2xlfT5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtnYWxsZXJ5U3R5bGV9PlxuICAgICAgICAgIDxoMT5HYWxsZXJ5PC9oMT5cbiAgICAgICAgICA8RmlsdGVyXG4gICAgICAgICAgICBkYXRhPXtnYWxsZXJ5fVxuICAgICAgICAgICAgaXRlbVR5cGU9e1snd29yaycsICd3b3JrcyddfVxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e3BhZ2VOdW1iZXJ9XG4gICAgICAgICAgICBvblBhZ2VTZWxlY3Q9e29uUGFnZVNlbGVjdH1cbiAgICAgICAgICAgIG9uU2VhcmNoPXthcnRpY2xlU2VhcmNofVxuICAgICAgICAgICAgb25TZWxlY3Q9e3NlbGVjdExhbmd1YWdlfVxuICAgICAgICAgICAgLy8gY2F0ZWdvcnlMaXN0PXt0ZWNoTGlzdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiA8cD5bRklMVEVSU108L3A+ICovfVxuICAgICAgICAgIHsvKiA8RGlyZWN0b3J5IHdvcmtzPXtnYWxsZXJ5fSAvPiAqL31cbiAgICAgICAgICA8RGlyZWN0b3J5IHdvcmtzPXtmaWx0ZXJlZExpc3Quc2xpY2UocGFnZU51bWJlciAqIDEwLCAocGFnZU51bWJlciAqIDEwKSArIDEwKX0gLz5cbiAgICAgICAgICA8RmlsdGVyXG4gICAgICAgICAgICBkYXRhPXtnYWxsZXJ5fVxuICAgICAgICAgICAgaXRlbVR5cGU9e1snd29yaycsICd3b3JrcyddfVxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e3BhZ2VOdW1iZXJ9XG4gICAgICAgICAgICBvblBhZ2VTZWxlY3Q9e29uUGFnZVNlbGVjdH1cbiAgICAgICAgICAgIG9uU2VhcmNoPXthcnRpY2xlU2VhcmNofVxuICAgICAgICAgICAgb25TZWxlY3Q9e3NlbGVjdExhbmd1YWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFJlcG9MaXN0IHdvcmtzPXtyZXBvc2l0b3JpZXN9IC8+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5UGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/gallery/index.jsx\n");

/***/ })

})