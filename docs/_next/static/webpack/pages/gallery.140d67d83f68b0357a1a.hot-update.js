webpackHotUpdate_N_E("pages/gallery",{

/***/ "./src/pages/gallery/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/gallery/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/constants/role */ \"./src/shared/constants/role.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Layout */ \"./src/components/Layout/index.jsx\");\n/* harmony import */ var src_components_Directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Directory */ \"./src/components/Directory/index.jsx\");\n/* harmony import */ var src_components_Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Filter */ \"./src/components/Filter/index.jsx\");\n/* harmony import */ var src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/RepoList */ \"./src/components/RepoList/index.jsx\");\n/* harmony import */ var src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/data/gallery.json */ \"./src/data/gallery.json\");\nvar src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/data/gallery.json */ \"./src/data/gallery.json\", 1);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.module.css */ \"./src/pages/gallery/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/lillydev/lilly.art/src/pages/gallery/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n // console.log('Thanks for visiting!');\n\nvar GalleryPage = function GalleryPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      currentRole = _useState[0],\n      setCurrentRole = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setCurrentRole(localStorage.getItem('role', currentRole) || src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__[\"DEVELOPER\"]);\n  }, [currentRole, setCurrentRole]);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      keyword = _useState2[0],\n      setKeyword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      pageNumber = _useState3[0],\n      setPageNumber = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      projectLanguage = _useState4[0],\n      setLanguage = _useState4[1];\n\n  var onPageSelect = function onPageSelect(event) {\n    setPageNumber(parseInt(event.target.value, 10));\n  };\n\n  var articleSearch = function articleSearch(event) {\n    setKeyword(event.target.value);\n    setPageNumber(0);\n  };\n\n  var selectLanguage = function selectLanguage(event) {\n    setLanguage(event.target.value);\n    setPageNumber(0);\n  };\n\n  var techArray = src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].map(function (data) {\n    return data.tech;\n  }).map(function (language) {\n    return language;\n  }).reduce(function (categoryArray, currentCategory) {\n    var newArray = categoryArray;\n    newArray[currentCategory] = (newArray[currentCategory] || 0) + 1; // console.log(newArray);\n\n    return newArray;\n  });\n  console.log(src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].map(function (data) {\n    return data.tech;\n  })[0]);\n  var techList = Object.keys(techArray).map(function (key, value) {\n    return {\n      optionLabel: key,\n      optionCount: value\n    };\n  }).sort(function (a, b) {\n    return b.optionLabel < a.optionLabel ? 1 : -1;\n  }); // console.log({techArray, techList});\n\n  var filteredList = src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].filter(function (data) {\n    if (keyword && projectLanguage) {\n      return data.node.languages.edges.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true) && data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (keyword && !projectLanguage) {\n      return data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (!keyword && projectLanguage) {\n      return data.tech.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true);\n    }\n\n    return data;\n  }).sort(function (a, b) {\n    return new Date(b.date) - new Date(a.date);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"N.E.Lilly: Gallery\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: 'title'\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1.0, minimum-scale=1.0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      role: currentRole,\n      setRole: setCurrentRole,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Gallery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          data: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"],\n          itemType: ['work', 'works'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage,\n          categoryList: techList\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Directory__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          works: filteredList.slice(pageNumber * 10, pageNumber * 10 + 10)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          data: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"],\n          itemType: ['work', 'works'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          works: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"repositories\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(GalleryPage, \"Fc6+9UFYZWs9vrdVrIWcnaFcFY0=\");\n\n_c = GalleryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"GalleryPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dhbGxlcnkvaW5kZXguanN4PzViYjMiXSwibmFtZXMiOlsiR2FsbGVyeVBhZ2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRSb2xlIiwic2V0Q3VycmVudFJvbGUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiREVWRUxPUEVSIiwia2V5d29yZCIsInNldEtleXdvcmQiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInByb2plY3RMYW5ndWFnZSIsInNldExhbmd1YWdlIiwib25QYWdlU2VsZWN0IiwiZXZlbnQiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwiYXJ0aWNsZVNlYXJjaCIsInNlbGVjdExhbmd1YWdlIiwidGVjaEFycmF5IiwiZ2FsbGVyeSIsIm1hcCIsImRhdGEiLCJ0ZWNoIiwibGFuZ3VhZ2UiLCJyZWR1Y2UiLCJjYXRlZ29yeUFycmF5IiwiY3VycmVudENhdGVnb3J5IiwibmV3QXJyYXkiLCJjb25zb2xlIiwibG9nIiwidGVjaExpc3QiLCJPYmplY3QiLCJrZXlzIiwia2V5Iiwib3B0aW9uTGFiZWwiLCJvcHRpb25Db3VudCIsInNvcnQiLCJhIiwiYiIsImZpbHRlcmVkTGlzdCIsImZpbHRlciIsIm5vZGUiLCJsYW5ndWFnZXMiLCJlZGdlcyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0aXRsZSIsIkRhdGUiLCJkYXRlIiwiZ2FsbGVyeVN0eWxlIiwic2xpY2UiLCJyZXBvc2l0b3JpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtDQU1BOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQyxFQUFELENBRHRCO0FBQUEsTUFDakJDLFdBRGlCO0FBQUEsTUFDSkMsY0FESTs7QUFFeEJDLHlEQUFT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QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQSxrQkFERjtBQW1DRCxDQXBHRDs7R0FBTXRELFc7O0tBQUFBLFc7QUFzR1NBLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2dhbGxlcnkvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERFVkVMT1BFUiB9IGZyb20gJ3NyYy9zaGFyZWQvY29uc3RhbnRzL3JvbGUnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnc3JjL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBEaXJlY3RvcnkgZnJvbSAnc3JjL2NvbXBvbmVudHMvRGlyZWN0b3J5JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvRmlsdGVyJztcbmltcG9ydCBSZXBvTGlzdCBmcm9tICdzcmMvY29tcG9uZW50cy9SZXBvTGlzdCc7XG5cbmltcG9ydCB7IGdhbGxlcnksIHJlcG9zaXRvcmllcyB9IGZyb20gJ3NyYy9kYXRhL2dhbGxlcnkuanNvbic7XG5cbmltcG9ydCB7XG4gIGdhbGxlcnkgYXMgZ2FsbGVyeVN0eWxlLFxufSBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnO1xuXG4vLyBjb25zb2xlLmxvZygnVGhhbmtzIGZvciB2aXNpdGluZyEnKTtcblxuY29uc3QgR2FsbGVyeVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50Um9sZSwgc2V0Q3VycmVudFJvbGVdID0gdXNlU3RhdGUoJycpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEN1cnJlbnRSb2xlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyb2xlJywgY3VycmVudFJvbGUpIHx8IERFVkVMT1BFUik7XG4gIH0sIFtjdXJyZW50Um9sZSwgc2V0Q3VycmVudFJvbGVdKTtcblxuICBjb25zdCBba2V5d29yZCwgc2V0S2V5d29yZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3BhZ2VOdW1iZXIsIHNldFBhZ2VOdW1iZXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwcm9qZWN0TGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IG9uUGFnZVNlbGVjdCA9IChldmVudCkgPT4ge1xuICAgIHNldFBhZ2VOdW1iZXIocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCkpO1xuICB9O1xuXG4gIGNvbnN0IGFydGljbGVTZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICBzZXRLZXl3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0UGFnZU51bWJlcigwKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RMYW5ndWFnZSA9IChldmVudCkgPT4ge1xuICAgIHNldExhbmd1YWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0UGFnZU51bWJlcigwKTtcbiAgfTtcblxuICBjb25zdCB0ZWNoQXJyYXkgPSBnYWxsZXJ5XG4gICAgLm1hcCgoZGF0YSkgPT4gKGRhdGEudGVjaCkpXG4gICAgLm1hcCgobGFuZ3VhZ2UpID0+IGxhbmd1YWdlKVxuICAgIC5yZWR1Y2UoKGNhdGVnb3J5QXJyYXksIGN1cnJlbnRDYXRlZ29yeSkgPT4ge1xuICAgICAgY29uc3QgbmV3QXJyYXkgPSBjYXRlZ29yeUFycmF5O1xuICAgICAgbmV3QXJyYXlbY3VycmVudENhdGVnb3J5XSA9IChuZXdBcnJheVtjdXJyZW50Q2F0ZWdvcnldIHx8IDApICsgMTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0FycmF5KTtcbiAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICB9KTtcblxuICBjb25zb2xlLmxvZyhnYWxsZXJ5Lm1hcCgoZGF0YSkgPT4gZGF0YS50ZWNoKVswXSlcblxuICBjb25zdCB0ZWNoTGlzdCA9IE9iamVjdC5rZXlzKHRlY2hBcnJheSlcbiAgICAubWFwKChrZXksIHZhbHVlKSA9PiAoeyBvcHRpb25MYWJlbDoga2V5LCBvcHRpb25Db3VudDogdmFsdWUgfSkpXG4gICAgLnNvcnQoKGEsIGIpID0+ICgoYi5vcHRpb25MYWJlbCA8IGEub3B0aW9uTGFiZWwpID8gMSA6IC0xKSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh7dGVjaEFycmF5LCB0ZWNoTGlzdH0pO1xuXG4gIGNvbnN0IGZpbHRlcmVkTGlzdCA9IGdhbGxlcnlcbiAgICAuZmlsdGVyKChkYXRhKSA9PiB7XG4gICAgICBpZiAoa2V5d29yZCAmJiBwcm9qZWN0TGFuZ3VhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEubm9kZS5sYW5ndWFnZXMuZWRnZXNcbiAgICAgICAgLm1hcCgobGFuZ3VhZ2UpID0+IGxhbmd1YWdlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICA9PT0gcHJvamVjdExhbmd1YWdlPy50b0xvd2VyQ2FzZSgpKS5pbmNsdWRlcyh0cnVlKVxuICAgICAgICAgICYmIGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgLy8gfHwgZGF0YS5hdXRob3IudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXl3b3JkICYmICFwcm9qZWN0TGFuZ3VhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgLy8gfHwgZGF0YS5hdXRob3IudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmICgha2V5d29yZCAmJiBwcm9qZWN0TGFuZ3VhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEudGVjaFxuICAgICAgICAgIC5tYXAoKGxhbmd1YWdlKSA9PiBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICA9PT0gcHJvamVjdExhbmd1YWdlPy50b0xvd2VyQ2FzZSgpKS5pbmNsdWRlcyh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgICAuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSkpO1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OLkUuTGlsbHk6IEdhbGxlcnk8L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17J3RpdGxlJ30ga2V5PVwidGl0bGVcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWluaW11bS1zY2FsZT0xLjBcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExheW91dCByb2xlPXtjdXJyZW50Um9sZX0gc2V0Um9sZT17c2V0Q3VycmVudFJvbGV9PlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2dhbGxlcnlTdHlsZX0+XG4gICAgICAgICAgPGgxPkdhbGxlcnk8L2gxPlxuICAgICAgICAgIDxGaWx0ZXJcbiAgICAgICAgICAgIGRhdGE9e2dhbGxlcnl9XG4gICAgICAgICAgICBpdGVtVHlwZT17Wyd3b3JrJywgJ3dvcmtzJ119XG4gICAgICAgICAgICBjdXJyZW50UGFnZT17cGFnZU51bWJlcn1cbiAgICAgICAgICAgIG9uUGFnZVNlbGVjdD17b25QYWdlU2VsZWN0fVxuICAgICAgICAgICAgb25TZWFyY2g9e2FydGljbGVTZWFyY2h9XG4gICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0TGFuZ3VhZ2V9XG4gICAgICAgICAgICBjYXRlZ29yeUxpc3Q9e3RlY2hMaXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIDxwPltGSUxURVJTXTwvcD4gKi99XG4gICAgICAgICAgey8qIDxEaXJlY3Rvcnkgd29ya3M9e2dhbGxlcnl9IC8+ICovfVxuICAgICAgICAgIDxEaXJlY3Rvcnkgd29ya3M9e2ZpbHRlcmVkTGlzdC5zbGljZShwYWdlTnVtYmVyICogMTAsIChwYWdlTnVtYmVyICogMTApICsgMTApfSAvPlxuICAgICAgICAgIDxGaWx0ZXJcbiAgICAgICAgICAgIGRhdGE9e2dhbGxlcnl9XG4gICAgICAgICAgICBpdGVtVHlwZT17Wyd3b3JrJywgJ3dvcmtzJ119XG4gICAgICAgICAgICBjdXJyZW50UGFnZT17cGFnZU51bWJlcn1cbiAgICAgICAgICAgIG9uUGFnZVNlbGVjdD17b25QYWdlU2VsZWN0fVxuICAgICAgICAgICAgb25TZWFyY2g9e2FydGljbGVTZWFyY2h9XG4gICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0TGFuZ3VhZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UmVwb0xpc3Qgd29ya3M9e3JlcG9zaXRvcmllc30gLz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/gallery/index.jsx\n");

/***/ })

})