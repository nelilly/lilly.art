webpackHotUpdate_N_E("pages/gallery",{

/***/ "./src/pages/gallery/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/gallery/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/constants/role */ \"./src/shared/constants/role.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Layout */ \"./src/components/Layout/index.jsx\");\n/* harmony import */ var src_components_Directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Directory */ \"./src/components/Directory/index.jsx\");\n/* harmony import */ var src_components_Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Filter */ \"./src/components/Filter/index.jsx\");\n/* harmony import */ var src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/RepoList */ \"./src/components/RepoList/index.jsx\");\n/* harmony import */ var src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/data/gallery.json */ \"./src/data/gallery.json\");\nvar src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/data/gallery.json */ \"./src/data/gallery.json\", 1);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.module.css */ \"./src/pages/gallery/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/lillydev/lilly.art/src/pages/gallery/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconsole.log(src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"][0].tech); // console.log('Thanks for visiting!');\n\nvar GalleryPage = function GalleryPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      currentRole = _useState[0],\n      setCurrentRole = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setCurrentRole(localStorage.getItem('role', currentRole) || src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__[\"DEVELOPER\"]);\n  }, [currentRole, setCurrentRole]);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      keyword = _useState2[0],\n      setKeyword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      pageNumber = _useState3[0],\n      setPageNumber = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      projectLanguage = _useState4[0],\n      setLanguage = _useState4[1];\n\n  var onPageSelect = function onPageSelect(event) {\n    setPageNumber(parseInt(event.target.value, 10));\n  };\n\n  var articleSearch = function articleSearch(event) {\n    setKeyword(event.target.value);\n    setPageNumber(0);\n  };\n\n  var selectLanguage = function selectLanguage(event) {\n    setLanguage(event.target.value);\n    setPageNumber(0);\n  };\n\n  var techCount = {};\n\n  var techPlus = function techPlus(key) {\n    return techCount[key] = techCount[key] ? 1 : techCount[key] + 1;\n  };\n\n  var techArray = [].concat.apply([], src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].map(function (data) {\n    return data.tech;\n  })).map(function (key) {\n    return techCount[key] = {\n      optionCount: techCount[key] ? 1 : techPlus(key),\n      optionLabel: key\n    };\n  }); // .reduce((categoryArray, currentCategory, index) => {\n  //   const newArray = categoryArray;\n  //   newArray[index] = (newArray[currentCategory] || 0) + 1;\n  //   return newArray;\n  // });\n\n  console.log(techArray);\n  var techList = techArray; // .map((value) => ({ optionLabel: value, optionCount: 0}))\n  // .sort((a, b) => ((b.optionLabel < a.optionLabel) ? 1 : -1));\n  // ç;\n  // console.log(techList);\n  // console.log({techArray, techList});\n\n  var filteredList = src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].filter(function (data) {\n    if (keyword && projectLanguage) {\n      return data.node.languages.edges.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true) && data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (keyword && !projectLanguage) {\n      return data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (!keyword && projectLanguage) {\n      return data.tech.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true);\n    }\n\n    return data;\n  }).sort(function (a, b) {\n    return new Date(b.date) - new Date(a.date);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"N.E.Lilly: Gallery\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: 'title'\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1.0, minimum-scale=1.0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      role: currentRole,\n      setRole: setCurrentRole,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Gallery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          data: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"],\n          itemType: ['work', 'works'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage // categoryList={techList}\n\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Directory__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          works: filteredList.slice(pageNumber * 10, pageNumber * 10 + 10)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          data: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"],\n          itemType: ['work', 'works'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage // categoryList={techList}\n\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          works: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"repositories\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(GalleryPage, \"Fc6+9UFYZWs9vrdVrIWcnaFcFY0=\");\n\n_c = GalleryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"GalleryPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dhbGxlcnkvaW5kZXguanN4PzViYjMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImdhbGxlcnkiLCJ0ZWNoIiwiR2FsbGVyeVBhZ2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRSb2xlIiwic2V0Q3VycmVudFJvbGUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiREVWRUxPUEVSIiwia2V5d29yZCIsInNldEtleXdvcmQiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInByb2plY3RMYW5ndWFnZSIsInNldExhbmd1YWdlIiwib25QYWdlU2VsZWN0IiwiZXZlbnQiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwiYXJ0aWNsZVNlYXJjaCIsInNlbGVjdExhbmd1YWdlIiwidGVjaENvdW50IiwidGVjaFBsdXMiLCJrZXkiLCJ0ZWNoQXJyYXkiLCJjb25jYXQiLCJhcHBseSIsIm1hcCIsImRhdGEiLCJvcHRpb25Db3VudCIsIm9wdGlvbkxhYmVsIiwidGVjaExpc3QiLCJmaWx0ZXJlZExpc3QiLCJmaWx0ZXIiLCJub2RlIiwibGFuZ3VhZ2VzIiwiZWRnZXMiLCJsYW5ndWFnZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0aXRsZSIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJkYXRlIiwiZ2FsbGVyeVN0eWxlIiwic2xpY2UiLCJyZXBvc2l0b3JpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBSUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyw2REFBTyxDQUFDLENBQUQsQ0FBUCxDQUFXQyxJQUF2QixFLENBRUE7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEVBQUQsQ0FEdEI7QUFBQSxNQUNq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QUFBLFc7QUF5R1NBLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2dhbGxlcnkvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERFVkVMT1BFUiB9IGZyb20gJ3NyYy9zaGFyZWQvY29uc3RhbnRzL3JvbGUnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnc3JjL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBEaXJlY3RvcnkgZnJvbSAnc3JjL2NvbXBvbmVudHMvRGlyZWN0b3J5JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvRmlsdGVyJztcbmltcG9ydCBSZXBvTGlzdCBmcm9tICdzcmMvY29tcG9uZW50cy9SZXBvTGlzdCc7XG5cbmltcG9ydCB7IGdhbGxlcnksIHJlcG9zaXRvcmllcyB9IGZyb20gJ3NyYy9kYXRhL2dhbGxlcnkuanNvbic7XG5cbmltcG9ydCB7XG4gIGdhbGxlcnkgYXMgZ2FsbGVyeVN0eWxlLFxufSBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnO1xuXG5jb25zb2xlLmxvZyhnYWxsZXJ5WzBdLnRlY2gpXG5cbi8vIGNvbnNvbGUubG9nKCdUaGFua3MgZm9yIHZpc2l0aW5nIScpO1xuXG5jb25zdCBHYWxsZXJ5UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRSb2xlLCBzZXRDdXJyZW50Um9sZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3VycmVudFJvbGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvbGUnLCBjdXJyZW50Um9sZSkgfHwgREVWRUxPUEVSKTtcbiAgfSwgW2N1cnJlbnRSb2xlLCBzZXRDdXJyZW50Um9sZV0pO1xuXG4gIGNvbnN0IFtrZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Byb2plY3RMYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgb25QYWdlU2VsZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0UGFnZU51bWJlcihwYXJzZUludChldmVudC50YXJnZXQudmFsdWUsIDEwKSk7XG4gIH07XG5cbiAgY29uc3QgYXJ0aWNsZVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgIHNldEtleXdvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRQYWdlTnVtYmVyKDApO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdExhbmd1YWdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0TGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRQYWdlTnVtYmVyKDApO1xuICB9O1xuXG5cbiAgbGV0IHRlY2hDb3VudCA9IHt9O1xuICBjb25zdCB0ZWNoUGx1cyA9IChrZXkpID0+IHRlY2hDb3VudFtrZXldID0gdGVjaENvdW50W2tleV0gPyAxIDogdGVjaENvdW50W2tleV0gKyAxO1xuICBcbiBjb25zdCB0ZWNoQXJyYXkgPSBbXS5jb25jYXQuYXBwbHkoW10sIGdhbGxlcnkubWFwKChkYXRhKSA9PiBkYXRhLnRlY2gpKS5tYXAoKGtleSkgPT4gdGVjaENvdW50W2tleV0gPSB7XG4gIG9wdGlvbkNvdW50OiB0ZWNoQ291bnRba2V5XSA/IDEgOiB0ZWNoUGx1cyhrZXkpLFxuICBvcHRpb25MYWJlbDoga2V5XG59KTtcbiAgICAvLyAucmVkdWNlKChjYXRlZ29yeUFycmF5LCBjdXJyZW50Q2F0ZWdvcnksIGluZGV4KSA9PiB7XG4gICAgLy8gICBjb25zdCBuZXdBcnJheSA9IGNhdGVnb3J5QXJyYXk7XG4gICAgLy8gICBuZXdBcnJheVtpbmRleF0gPSAobmV3QXJyYXlbY3VycmVudENhdGVnb3J5XSB8fCAwKSArIDE7XG4gICAgLy8gICByZXR1cm4gbmV3QXJyYXk7XG4gICAgLy8gfSk7XG4gIGNvbnNvbGUubG9nKHRlY2hBcnJheSk7XG4gIGNvbnN0IHRlY2hMaXN0ID0gdGVjaEFycmF5XG4gIC8vIC5tYXAoKHZhbHVlKSA9PiAoeyBvcHRpb25MYWJlbDogdmFsdWUsIG9wdGlvbkNvdW50OiAwfSkpXG4gIC8vIC5zb3J0KChhLCBiKSA9PiAoKGIub3B0aW9uTGFiZWwgPCBhLm9wdGlvbkxhYmVsKSA/IDEgOiAtMSkpO1xuICAvLyDDpztcbiAgLy8gY29uc29sZS5sb2codGVjaExpc3QpO1xuXG4gICAgLy8gY29uc29sZS5sb2coe3RlY2hBcnJheSwgdGVjaExpc3R9KTtcblxuICBjb25zdCBmaWx0ZXJlZExpc3QgPSBnYWxsZXJ5XG4gICAgLmZpbHRlcigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGtleXdvcmQgJiYgcHJvamVjdExhbmd1YWdlKSB7XG4gICAgICAgIHJldHVybiBkYXRhLm5vZGUubGFuZ3VhZ2VzLmVkZ2VzXG4gICAgICAgIC5tYXAoKGxhbmd1YWdlKSA9PiBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgPT09IHByb2plY3RMYW5ndWFnZT8udG9Mb3dlckNhc2UoKSkuaW5jbHVkZXModHJ1ZSlcbiAgICAgICAgICAmJiBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZD8udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIC8vIHx8IGRhdGEuYXV0aG9yLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZD8udG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgICBpZiAoa2V5d29yZCAmJiAhcHJvamVjdExhbmd1YWdlKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZD8udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIC8vIHx8IGRhdGEuYXV0aG9yLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZD8udG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgICBpZiAoIWtleXdvcmQgJiYgcHJvamVjdExhbmd1YWdlKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnRlY2hcbiAgICAgICAgICAubWFwKChsYW5ndWFnZSkgPT4gbGFuZ3VhZ2UudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgPT09IHByb2plY3RMYW5ndWFnZT8udG9Mb3dlckNhc2UoKSkuaW5jbHVkZXModHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pXG4gICAgLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIuZGF0ZSkgLSBuZXcgRGF0ZShhLmRhdGUpKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Ti5FLkxpbGx5OiBHYWxsZXJ5PC90aXRsZT5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9eyd0aXRsZSd9IGtleT1cInRpdGxlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1pbmltdW0tc2NhbGU9MS4wXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQgcm9sZT17Y3VycmVudFJvbGV9IHNldFJvbGU9e3NldEN1cnJlbnRSb2xlfT5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtnYWxsZXJ5U3R5bGV9PlxuICAgICAgICAgIDxoMT5HYWxsZXJ5PC9oMT5cbiAgICAgICAgICA8RmlsdGVyXG4gICAgICAgICAgICBkYXRhPXtnYWxsZXJ5fVxuICAgICAgICAgICAgaXRlbVR5cGU9e1snd29yaycsICd3b3JrcyddfVxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e3BhZ2VOdW1iZXJ9XG4gICAgICAgICAgICBvblBhZ2VTZWxlY3Q9e29uUGFnZVNlbGVjdH1cbiAgICAgICAgICAgIG9uU2VhcmNoPXthcnRpY2xlU2VhcmNofVxuICAgICAgICAgICAgb25TZWxlY3Q9e3NlbGVjdExhbmd1YWdlfVxuICAgICAgICAgICAgLy8gY2F0ZWdvcnlMaXN0PXt0ZWNoTGlzdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxEaXJlY3Rvcnkgd29ya3M9e2ZpbHRlcmVkTGlzdC5zbGljZShwYWdlTnVtYmVyICogMTAsIChwYWdlTnVtYmVyICogMTApICsgMTApfSAvPlxuICAgICAgICAgIDxGaWx0ZXJcbiAgICAgICAgICAgIGRhdGE9e2dhbGxlcnl9XG4gICAgICAgICAgICBpdGVtVHlwZT17Wyd3b3JrJywgJ3dvcmtzJ119XG4gICAgICAgICAgICBjdXJyZW50UGFnZT17cGFnZU51bWJlcn1cbiAgICAgICAgICAgIG9uUGFnZVNlbGVjdD17b25QYWdlU2VsZWN0fVxuICAgICAgICAgICAgb25TZWFyY2g9e2FydGljbGVTZWFyY2h9XG4gICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0TGFuZ3VhZ2V9XG4gICAgICAgICAgICAvLyBjYXRlZ29yeUxpc3Q9e3RlY2hMaXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFJlcG9MaXN0IHdvcmtzPXtyZXBvc2l0b3JpZXN9IC8+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5UGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/gallery/index.jsx\n");

/***/ })

})