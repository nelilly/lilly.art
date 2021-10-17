webpackHotUpdate_N_E("pages/gallery",{

/***/ "./src/pages/gallery/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/gallery/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/constants/role */ \"./src/shared/constants/role.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Layout */ \"./src/components/Layout/index.jsx\");\n/* harmony import */ var src_components_Directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Directory */ \"./src/components/Directory/index.jsx\");\n/* harmony import */ var src_components_Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Filter */ \"./src/components/Filter/index.jsx\");\n/* harmony import */ var src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/RepoList */ \"./src/components/RepoList/index.jsx\");\n/* harmony import */ var src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/data/gallery.json */ \"./src/data/gallery.json\");\nvar src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/data/gallery.json */ \"./src/data/gallery.json\", 1);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.module.css */ \"./src/pages/gallery/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/lillydev/lilly.art/src/pages/gallery/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconsole.log(src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"][0].tech); // console.log('Thanks for visiting!');\n\nvar GalleryPage = function GalleryPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      currentRole = _useState[0],\n      setCurrentRole = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setCurrentRole(localStorage.getItem('role', currentRole) || src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__[\"DEVELOPER\"]);\n  }, [currentRole, setCurrentRole]);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      keyword = _useState2[0],\n      setKeyword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      pageNumber = _useState3[0],\n      setPageNumber = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      projectLanguage = _useState4[0],\n      setLanguage = _useState4[1];\n\n  var onPageSelect = function onPageSelect(event) {\n    setPageNumber(parseInt(event.target.value, 10));\n  };\n\n  var articleSearch = function articleSearch(event) {\n    setKeyword(event.target.value);\n    setPageNumber(0);\n  };\n\n  var selectLanguage = function selectLanguage(event) {\n    setLanguage(event.target.value);\n    setPageNumber(0);\n  };\n\n  var techCount = {};\n  var techArray = [].concat.apply([], src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].map(function (data) {\n    return data.tech;\n  })).map(function (key) {\n    return techCount[key] = isNaN(techCount[key]) ? 1 : techCount[key] + 1;\n  });\n  console.log({\n    galleryLength: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].length,\n    galleryTech: [].concat.apply([], src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].map(function (data) {\n      return data.tech;\n    }))\n  });\n  var techList = Object.keys(techCount).map(function (key) {\n    return {\n      optionLabel: key,\n      optionCount: techCount[key]\n    };\n  }).sort(function (a, b) {\n    return b.optionLabel.toLowerCase() < a.optionLabel.toLowerCase() ? 1 : -1;\n  }); // .reduce((categoryArray, currentCategory, index) => {\n  //   const newArray = categoryArray;\n  //   newArray[index] = (newArray[currentCategory] || 0) + 1;\n  //   return newArray;\n  // });\n\n  console.log({\n    techCount: techCount,\n    techList: techList\n  }); // const techList = techArray\n  // .map((value) => ({ optionLabel: value, optionCount: 0}))\n  // .sort((a, b) => ((b.optionLabel < a.optionLabel) ? 1 : -1));\n  // ç;\n  // console.log(techList);\n  // console.log({techArray, techList});\n\n  var filteredList = src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].filter(function (data) {\n    if (keyword && projectLanguage) {\n      return data.tech.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true) && data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (keyword && !projectLanguage) {\n      return data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (!keyword && projectLanguage) {\n      return data.tech.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true);\n    }\n\n    return data;\n  }).sort(function (a, b) {\n    return new Date(b.date) - new Date(a.date);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"N.E.Lilly: Gallery\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: 'title'\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1.0, minimum-scale=1.0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      role: currentRole,\n      setRole: setCurrentRole,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Gallery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          data: filteredList,\n          itemType: ['Project', 'Projects'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage,\n          categoryList: techList\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Directory__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          works: filteredList.slice(pageNumber * 10, pageNumber * 10 + 10)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          works: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"repositories\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(GalleryPage, \"Fc6+9UFYZWs9vrdVrIWcnaFcFY0=\");\n\n_c = GalleryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"GalleryPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dhbGxlcnkvaW5kZXguanN4PzViYjMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImdhbGxlcnkiLCJ0ZWNoIiwiR2FsbGVyeVBhZ2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRSb2xlIiwic2V0Q3VycmVudFJvbGUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiREVWRUxPUEVSIiwia2V5d29yZCIsInNldEtleXdvcmQiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInByb2plY3RMYW5ndWFnZSIsInNldExhbmd1YWdlIiwib25QYWdlU2VsZWN0IiwiZXZlbnQiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwiYXJ0aWNsZVNlYXJjaCIsInNlbGVjdExhbmd1YWdlIiwidGVjaENvdW50IiwidGVjaEFycmF5IiwiY29uY2F0IiwiYXBwbHkiLCJtYXAiLCJkYXRhIiwia2V5IiwiaXNOYU4iLCJnYWxsZXJ5TGVuZ3RoIiwibGVuZ3RoIiwiZ2FsbGVyeVRlY2giLCJ0ZWNoTGlzdCIsIk9iamVjdCIsImtleXMiLCJvcHRpb25MYWJlbCIsIm9wdGlvbkNvdW50Iiwic29ydCIsImEiLCJiIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXJlZExpc3QiLCJmaWx0ZXIiLCJsYW5ndWFnZSIsImluY2x1ZGVzIiwidGl0bGUiLCJEYXRlIiwiZGF0ZSIsImdhbGxlcnlTdHlsZSIsInNsaWNlIiwicmVwb3NpdG9yaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUlBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsNkRBQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0MsSUFBdkIsRSxDQUVBOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDY0Msc0RBQVEs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QUE7QUFBQSxpQkFYRixlQVlFLHFFQUFDLCtEQUFEO0FBQVUsZUFBSyxFQUFFd0Msa0VBQVlBO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUEsa0JBREY7QUF5QkQsQ0FsR0Q7O0dBQU1sRCxXOztLQUFBQSxXO0FBb0dTQSwwRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9nYWxsZXJ5L2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBERVZFTE9QRVIgfSBmcm9tICdzcmMvc2hhcmVkL2NvbnN0YW50cy9yb2xlJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ3NyYy9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gJ3NyYy9jb21wb25lbnRzL0RpcmVjdG9yeSc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJ3NyYy9jb21wb25lbnRzL0ZpbHRlcic7XG5pbXBvcnQgUmVwb0xpc3QgZnJvbSAnc3JjL2NvbXBvbmVudHMvUmVwb0xpc3QnO1xuXG5pbXBvcnQgeyBnYWxsZXJ5LCByZXBvc2l0b3JpZXMgfSBmcm9tICdzcmMvZGF0YS9nYWxsZXJ5Lmpzb24nO1xuXG5pbXBvcnQge1xuICBnYWxsZXJ5IGFzIGdhbGxlcnlTdHlsZSxcbn0gZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcblxuY29uc29sZS5sb2coZ2FsbGVyeVswXS50ZWNoKVxuXG4vLyBjb25zb2xlLmxvZygnVGhhbmtzIGZvciB2aXNpdGluZyEnKTtcblxuY29uc3QgR2FsbGVyeVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50Um9sZSwgc2V0Q3VycmVudFJvbGVdID0gdXNlU3RhdGUoJycpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEN1cnJlbnRSb2xlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyb2xlJywgY3VycmVudFJvbGUpIHx8IERFVkVMT1BFUik7XG4gIH0sIFtjdXJyZW50Um9sZSwgc2V0Q3VycmVudFJvbGVdKTtcblxuICBjb25zdCBba2V5d29yZCwgc2V0S2V5d29yZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3BhZ2VOdW1iZXIsIHNldFBhZ2VOdW1iZXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwcm9qZWN0TGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IG9uUGFnZVNlbGVjdCA9IChldmVudCkgPT4ge1xuICAgIHNldFBhZ2VOdW1iZXIocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCkpO1xuICB9O1xuXG4gIGNvbnN0IGFydGljbGVTZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICBzZXRLZXl3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0UGFnZU51bWJlcigwKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RMYW5ndWFnZSA9IChldmVudCkgPT4ge1xuICAgIHNldExhbmd1YWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0UGFnZU51bWJlcigwKTtcbiAgfTtcblxuXG4gIGxldCB0ZWNoQ291bnQgPSB7fTtcbiAgXG4gIGNvbnN0IHRlY2hBcnJheSA9IFtdLmNvbmNhdC5hcHBseShbXSwgZ2FsbGVyeS5tYXAoKGRhdGEpID0+IGRhdGEudGVjaCkpXG4gICAgLm1hcCgoa2V5KSA9PiB0ZWNoQ291bnRba2V5XSA9IGlzTmFOKHRlY2hDb3VudFtrZXldKSA/IDEgOiB0ZWNoQ291bnRba2V5XSArIDEpO1xuXG5cbiAgY29uc29sZS5sb2coe2dhbGxlcnlMZW5ndGg6IGdhbGxlcnkubGVuZ3RoLCBnYWxsZXJ5VGVjaDogW10uY29uY2F0LmFwcGx5KFtdLCBnYWxsZXJ5Lm1hcCgoZGF0YSkgPT4gZGF0YS50ZWNoKSl9KVxuXG4gIGNvbnN0IHRlY2hMaXN0ID0gT2JqZWN0LmtleXModGVjaENvdW50KVxuICAgIC5tYXAoKGtleSkgPT4gKHsgb3B0aW9uTGFiZWw6IGtleSwgb3B0aW9uQ291bnQ6IHRlY2hDb3VudFtrZXldIH0pKVxuICAgIC5zb3J0KChhLCBiKSA9PiAoKGIub3B0aW9uTGFiZWwudG9Mb3dlckNhc2UoKSA8IGEub3B0aW9uTGFiZWwudG9Mb3dlckNhc2UoKSkgPyAxIDogLTEpKTtcbiAgICAvLyAucmVkdWNlKChjYXRlZ29yeUFycmF5LCBjdXJyZW50Q2F0ZWdvcnksIGluZGV4KSA9PiB7XG4gICAgLy8gICBjb25zdCBuZXdBcnJheSA9IGNhdGVnb3J5QXJyYXk7XG4gICAgLy8gICBuZXdBcnJheVtpbmRleF0gPSAobmV3QXJyYXlbY3VycmVudENhdGVnb3J5XSB8fCAwKSArIDE7XG4gICAgLy8gICByZXR1cm4gbmV3QXJyYXk7XG4gICAgLy8gfSk7XG4gIGNvbnNvbGUubG9nKHt0ZWNoQ291bnQsIHRlY2hMaXN0fSk7XG4gIC8vIGNvbnN0IHRlY2hMaXN0ID0gdGVjaEFycmF5XG4gIC8vIC5tYXAoKHZhbHVlKSA9PiAoeyBvcHRpb25MYWJlbDogdmFsdWUsIG9wdGlvbkNvdW50OiAwfSkpXG4gIC8vIC5zb3J0KChhLCBiKSA9PiAoKGIub3B0aW9uTGFiZWwgPCBhLm9wdGlvbkxhYmVsKSA/IDEgOiAtMSkpO1xuICAvLyDDpztcbiAgLy8gY29uc29sZS5sb2codGVjaExpc3QpO1xuXG4gICAgLy8gY29uc29sZS5sb2coe3RlY2hBcnJheSwgdGVjaExpc3R9KTtcblxuICBjb25zdCBmaWx0ZXJlZExpc3QgPSBnYWxsZXJ5XG4gICAgLmZpbHRlcigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGtleXdvcmQgJiYgcHJvamVjdExhbmd1YWdlKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnRlY2hcbiAgICAgICAgLm1hcCgobGFuZ3VhZ2UpID0+IGxhbmd1YWdlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICA9PT0gcHJvamVjdExhbmd1YWdlPy50b0xvd2VyQ2FzZSgpKS5pbmNsdWRlcyh0cnVlKVxuICAgICAgICAgICYmIGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgLy8gfHwgZGF0YS5hdXRob3IudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXl3b3JkICYmICFwcm9qZWN0TGFuZ3VhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgLy8gfHwgZGF0YS5hdXRob3IudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmICgha2V5d29yZCAmJiBwcm9qZWN0TGFuZ3VhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEudGVjaFxuICAgICAgICAgIC5tYXAoKGxhbmd1YWdlKSA9PiBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICA9PT0gcHJvamVjdExhbmd1YWdlPy50b0xvd2VyQ2FzZSgpKS5pbmNsdWRlcyh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgICAuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSkpO1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OLkUuTGlsbHk6IEdhbGxlcnk8L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17J3RpdGxlJ30ga2V5PVwidGl0bGVcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWluaW11bS1zY2FsZT0xLjBcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExheW91dCByb2xlPXtjdXJyZW50Um9sZX0gc2V0Um9sZT17c2V0Q3VycmVudFJvbGV9PlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2dhbGxlcnlTdHlsZX0+XG4gICAgICAgICAgPGgxPkdhbGxlcnk8L2gxPlxuICAgICAgICAgIDxGaWx0ZXJcbiAgICAgICAgICAgIGRhdGE9e2ZpbHRlcmVkTGlzdH1cbiAgICAgICAgICAgIGl0ZW1UeXBlPXtbJ1Byb2plY3QnLCAnUHJvamVjdHMnXX1cbiAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtwYWdlTnVtYmVyfVxuICAgICAgICAgICAgb25QYWdlU2VsZWN0PXtvblBhZ2VTZWxlY3R9XG4gICAgICAgICAgICBvblNlYXJjaD17YXJ0aWNsZVNlYXJjaH1cbiAgICAgICAgICAgIG9uU2VsZWN0PXtzZWxlY3RMYW5ndWFnZX1cbiAgICAgICAgICAgIGNhdGVnb3J5TGlzdD17dGVjaExpc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RGlyZWN0b3J5IHdvcmtzPXtmaWx0ZXJlZExpc3Quc2xpY2UocGFnZU51bWJlciAqIDEwLCAocGFnZU51bWJlciAqIDEwKSArIDEwKX0gLz5cbiAgICAgICAgICA8UmVwb0xpc3Qgd29ya3M9e3JlcG9zaXRvcmllc30gLz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/gallery/index.jsx\n");

/***/ })

})