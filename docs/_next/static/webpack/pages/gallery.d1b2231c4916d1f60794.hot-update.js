webpackHotUpdate_N_E("pages/gallery",{

/***/ "./src/pages/gallery/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/gallery/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/constants/role */ \"./src/shared/constants/role.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Layout */ \"./src/components/Layout/index.jsx\");\n/* harmony import */ var src_components_Directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Directory */ \"./src/components/Directory/index.jsx\");\n/* harmony import */ var src_components_Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Filter */ \"./src/components/Filter/index.jsx\");\n/* harmony import */ var src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/RepoList */ \"./src/components/RepoList/index.jsx\");\n/* harmony import */ var src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/data/gallery.json */ \"./src/data/gallery.json\");\nvar src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/data/gallery.json */ \"./src/data/gallery.json\", 1);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.module.css */ \"./src/pages/gallery/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/lillydev/lilly.art/src/pages/gallery/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconsole.log(src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"][0].tech); // console.log('Thanks for visiting!');\n\nvar GalleryPage = function GalleryPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      currentRole = _useState[0],\n      setCurrentRole = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setCurrentRole(localStorage.getItem('role', currentRole) || src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__[\"DEVELOPER\"]);\n  }, [currentRole, setCurrentRole]);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      keyword = _useState2[0],\n      setKeyword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      pageNumber = _useState3[0],\n      setPageNumber = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      projectLanguage = _useState4[0],\n      setLanguage = _useState4[1];\n\n  var onPageSelect = function onPageSelect(event) {\n    setPageNumber(parseInt(event.target.value, 10));\n  };\n\n  var articleSearch = function articleSearch(event) {\n    setKeyword(event.target.value);\n    setPageNumber(0);\n  };\n\n  var selectLanguage = function selectLanguage(event) {\n    setLanguage(event.target.value);\n    setPageNumber(0);\n  };\n\n  var techCount = {};\n\n  var techPlus = function techPlus(key) {\n    return techCount[key] = isNaN(techCount[key]) ? 1 : techCount[key] + 1;\n  };\n\n  var techList1 = [].concat.apply([], src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].map(function (data) {\n    return data.tech;\n  })).map(function (key) {\n    return techCount[key] = isNaN(techCount[key]) ? 1 : techCount[key] + 1;\n  });\n  console.log({\n    galleryLength: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].length,\n    galleryTech: [].concat.apply([], src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].map(function (data) {\n      return data.tech;\n    })),\n    techList1: techList1\n  });\n  var techList = Object.keys(techCount).map(function (key) {\n    return {\n      optionLabel: key,\n      optionCount: techCount[key]\n    };\n  }).sort(function (a, b) {\n    return b.optionLabel.toLowerCase() < a.optionLabel.toLowerCase() ? 1 : -1;\n  }); // .reduce((categoryArray, currentCategory, index) => {\n  //   const newArray = categoryArray;\n  //   newArray[index] = (newArray[currentCategory] || 0) + 1;\n  //   return newArray;\n  // });\n\n  console.log({\n    techCount: techCount,\n    techList: techList\n  }); // const techList = techArray\n  // .map((value) => ({ optionLabel: value, optionCount: 0}))\n  // .sort((a, b) => ((b.optionLabel < a.optionLabel) ? 1 : -1));\n  // ç;\n  // console.log(techList);\n  // console.log({techArray, techList});\n\n  var filteredList = src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].filter(function (data) {\n    if (keyword && projectLanguage) {\n      return data.tech.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true) && data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (keyword && !projectLanguage) {\n      return data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (!keyword && projectLanguage) {\n      return data.tech.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true);\n    }\n\n    return data;\n  }).sort(function (a, b) {\n    return new Date(b.date) - new Date(a.date);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"N.E.Lilly: Gallery\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: 'title'\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1.0, minimum-scale=1.0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      role: currentRole,\n      setRole: setCurrentRole,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Gallery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          data: filteredList,\n          itemType: ['Project', 'Projects'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage,\n          categoryList: techList\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Directory__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          works: filteredList.slice(pageNumber * 10, pageNumber * 10 + 10)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          works: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"repositories\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(GalleryPage, \"Fc6+9UFYZWs9vrdVrIWcnaFcFY0=\");\n\n_c = GalleryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"GalleryPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dhbGxlcnkvaW5kZXguanN4PzViYjMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImdhbGxlcnkiLCJ0ZWNoIiwiR2FsbGVyeVBhZ2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRSb2xlIiwic2V0Q3VycmVudFJvbGUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiREVWRUxPUEVSIiwia2V5d29yZCIsInNldEtleXdvcmQiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInByb2plY3RMYW5ndWFnZSIsInNldExhbmd1YWdlIiwib25QYWdlU2VsZWN0IiwiZXZlbnQiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwiYXJ0aWNsZVNlYXJjaCIsInNlbGVjdExhbmd1YWdlIiwidGVjaENvdW50IiwidGVjaFBsdXMiLCJrZXkiLCJpc05hTiIsInRlY2hMaXN0MSIsImNvbmNhdCIsImFwcGx5IiwibWFwIiwiZGF0YSIsImdhbGxlcnlMZW5ndGgiLCJsZW5ndGgiLCJnYWxsZXJ5VGVjaCIsInRlY2hMaXN0IiwiT2JqZWN0Iiwia2V5cyIsIm9wdGlvbkxhYmVsIiwib3B0aW9uQ291bnQiLCJzb3J0IiwiYSIsImIiLCJ0b0xvd2VyQ2FzZSIsImZpbHRlcmVkTGlzdCIsImZpbHRlciIsImxhbmd1YWdlIiwiaW5jbHVkZXMiLCJ0aXRsZSIsIkRhdGUiLCJkYXRlIiwiZ2FsbGVyeVN0eWxlIiwic2xpY2UiLCJyZXBvc2l0b3JpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBSUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyw2REFBTyxDQUFDLENBQUQsQ0FBUCxDQUFXQyxJQUF2QixFLENBRUE7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtC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SmhCO0FBS0Usa0JBQVEsRUFBRUssYUFMWjtBQU1FLGtCQUFRLEVBQUVDLGNBTlo7QUFPRSxzQkFBWSxFQUFFYTtBQVBoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBV0UscUVBQUMsZ0VBQUQ7QUFBVyxlQUFLLEVBQUVTLFlBQVksQ0FBQ1EsS0FBYixDQUFtQnhDLFVBQVUsR0FBRyxFQUFoQyxFQUFxQ0EsVUFBVSxHQUFHLEVBQWQsR0FBb0IsRUFBeEQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRixlQVlFLHFFQUFDLCtEQUFEO0FBQVUsZUFBSyxFQUFFeUMsa0VBQVlBO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUEsa0JBREY7QUF5QkQsQ0FuR0Q7O0dBQU1uRCxXOztLQUFBQSxXO0FBcUdTQSwwRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9nYWxsZXJ5L2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBERVZFTE9QRVIgfSBmcm9tICdzcmMvc2hhcmVkL2NvbnN0YW50cy9yb2xlJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ3NyYy9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gJ3NyYy9jb21wb25lbnRzL0RpcmVjdG9yeSc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJ3NyYy9jb21wb25lbnRzL0ZpbHRlcic7XG5pbXBvcnQgUmVwb0xpc3QgZnJvbSAnc3JjL2NvbXBvbmVudHMvUmVwb0xpc3QnO1xuXG5pbXBvcnQgeyBnYWxsZXJ5LCByZXBvc2l0b3JpZXMgfSBmcm9tICdzcmMvZGF0YS9nYWxsZXJ5Lmpzb24nO1xuXG5pbXBvcnQge1xuICBnYWxsZXJ5IGFzIGdhbGxlcnlTdHlsZSxcbn0gZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcblxuY29uc29sZS5sb2coZ2FsbGVyeVswXS50ZWNoKVxuXG4vLyBjb25zb2xlLmxvZygnVGhhbmtzIGZvciB2aXNpdGluZyEnKTtcblxuY29uc3QgR2FsbGVyeVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50Um9sZSwgc2V0Q3VycmVudFJvbGVdID0gdXNlU3RhdGUoJycpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEN1cnJlbnRSb2xlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyb2xlJywgY3VycmVudFJvbGUpIHx8IERFVkVMT1BFUik7XG4gIH0sIFtjdXJyZW50Um9sZSwgc2V0Q3VycmVudFJvbGVdKTtcblxuICBjb25zdCBba2V5d29yZCwgc2V0S2V5d29yZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3BhZ2VOdW1iZXIsIHNldFBhZ2VOdW1iZXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwcm9qZWN0TGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IG9uUGFnZVNlbGVjdCA9IChldmVudCkgPT4ge1xuICAgIHNldFBhZ2VOdW1iZXIocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCkpO1xuICB9O1xuXG4gIGNvbnN0IGFydGljbGVTZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICBzZXRLZXl3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0UGFnZU51bWJlcigwKTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RMYW5ndWFnZSA9IChldmVudCkgPT4ge1xuICAgIHNldExhbmd1YWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0UGFnZU51bWJlcigwKTtcbiAgfTtcblxuXG4gIGxldCB0ZWNoQ291bnQgPSB7fTtcbiAgY29uc3QgdGVjaFBsdXMgPSAoa2V5KSA9PiB0ZWNoQ291bnRba2V5XSA9IGlzTmFOKHRlY2hDb3VudFtrZXldKSA/IDEgOiB0ZWNoQ291bnRba2V5XSArIDE7XG4gIFxuICBjb25zdCB0ZWNoTGlzdDEgPSBbXS5jb25jYXQuYXBwbHkoW10sIGdhbGxlcnkubWFwKChkYXRhKSA9PiBkYXRhLnRlY2gpKVxuICAgIC5tYXAoKGtleSkgPT4gdGVjaENvdW50W2tleV0gPSBpc05hTih0ZWNoQ291bnRba2V5XSkgPyAxIDogdGVjaENvdW50W2tleV0gKyAxKTtcblxuXG4gIGNvbnNvbGUubG9nKHtnYWxsZXJ5TGVuZ3RoOiBnYWxsZXJ5Lmxlbmd0aCwgZ2FsbGVyeVRlY2g6IFtdLmNvbmNhdC5hcHBseShbXSwgZ2FsbGVyeS5tYXAoKGRhdGEpID0+IGRhdGEudGVjaCkpLCB0ZWNoTGlzdDF9KVxuXG4gIGNvbnN0IHRlY2hMaXN0PSBPYmplY3Qua2V5cyh0ZWNoQ291bnQpXG4gICAgLm1hcCgoa2V5KSA9PiAoeyBvcHRpb25MYWJlbDoga2V5LCBvcHRpb25Db3VudDogdGVjaENvdW50W2tleV0gfSkpXG4gICAgLnNvcnQoKGEsIGIpID0+ICgoYi5vcHRpb25MYWJlbC50b0xvd2VyQ2FzZSgpIDwgYS5vcHRpb25MYWJlbC50b0xvd2VyQ2FzZSgpKSA/IDEgOiAtMSkpO1xuICAgIC8vIC5yZWR1Y2UoKGNhdGVnb3J5QXJyYXksIGN1cnJlbnRDYXRlZ29yeSwgaW5kZXgpID0+IHtcbiAgICAvLyAgIGNvbnN0IG5ld0FycmF5ID0gY2F0ZWdvcnlBcnJheTtcbiAgICAvLyAgIG5ld0FycmF5W2luZGV4XSA9IChuZXdBcnJheVtjdXJyZW50Q2F0ZWdvcnldIHx8IDApICsgMTtcbiAgICAvLyAgIHJldHVybiBuZXdBcnJheTtcbiAgICAvLyB9KTtcbiAgY29uc29sZS5sb2coe3RlY2hDb3VudCwgdGVjaExpc3R9KTtcbiAgLy8gY29uc3QgdGVjaExpc3QgPSB0ZWNoQXJyYXlcbiAgLy8gLm1hcCgodmFsdWUpID0+ICh7IG9wdGlvbkxhYmVsOiB2YWx1ZSwgb3B0aW9uQ291bnQ6IDB9KSlcbiAgLy8gLnNvcnQoKGEsIGIpID0+ICgoYi5vcHRpb25MYWJlbCA8IGEub3B0aW9uTGFiZWwpID8gMSA6IC0xKSk7XG4gIC8vIMOnO1xuICAvLyBjb25zb2xlLmxvZyh0ZWNoTGlzdCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh7dGVjaEFycmF5LCB0ZWNoTGlzdH0pO1xuXG4gIGNvbnN0IGZpbHRlcmVkTGlzdCA9IGdhbGxlcnlcbiAgICAuZmlsdGVyKChkYXRhKSA9PiB7XG4gICAgICBpZiAoa2V5d29yZCAmJiBwcm9qZWN0TGFuZ3VhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEudGVjaFxuICAgICAgICAubWFwKChsYW5ndWFnZSkgPT4gbGFuZ3VhZ2UudG9Mb3dlckNhc2UoKVxuICAgICAgICAgID09PSBwcm9qZWN0TGFuZ3VhZ2U/LnRvTG93ZXJDYXNlKCkpLmluY2x1ZGVzKHRydWUpXG4gICAgICAgICAgJiYgZGF0YS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGtleXdvcmQ/LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAvLyB8fCBkYXRhLmF1dGhvci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGtleXdvcmQ/LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKGtleXdvcmQgJiYgIXByb2plY3RMYW5ndWFnZSkge1xuICAgICAgICByZXR1cm4gZGF0YS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGtleXdvcmQ/LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAvLyB8fCBkYXRhLmF1dGhvci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGtleXdvcmQ/LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKCFrZXl3b3JkICYmIHByb2plY3RMYW5ndWFnZSkge1xuICAgICAgICByZXR1cm4gZGF0YS50ZWNoXG4gICAgICAgICAgLm1hcCgobGFuZ3VhZ2UpID0+IGxhbmd1YWdlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgID09PSBwcm9qZWN0TGFuZ3VhZ2U/LnRvTG93ZXJDYXNlKCkpLmluY2x1ZGVzKHRydWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KVxuICAgIC5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShiLmRhdGUpIC0gbmV3IERhdGUoYS5kYXRlKSk7XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk4uRS5MaWxseTogR2FsbGVyeTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXsndGl0bGUnfSBrZXk9XCJ0aXRsZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtaW5pbXVtLXNjYWxlPTEuMFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TGF5b3V0IHJvbGU9e2N1cnJlbnRSb2xlfSBzZXRSb2xlPXtzZXRDdXJyZW50Um9sZX0+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17Z2FsbGVyeVN0eWxlfT5cbiAgICAgICAgICA8aDE+R2FsbGVyeTwvaDE+XG4gICAgICAgICAgPEZpbHRlclxuICAgICAgICAgICAgZGF0YT17ZmlsdGVyZWRMaXN0fVxuICAgICAgICAgICAgaXRlbVR5cGU9e1snUHJvamVjdCcsICdQcm9qZWN0cyddfVxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e3BhZ2VOdW1iZXJ9XG4gICAgICAgICAgICBvblBhZ2VTZWxlY3Q9e29uUGFnZVNlbGVjdH1cbiAgICAgICAgICAgIG9uU2VhcmNoPXthcnRpY2xlU2VhcmNofVxuICAgICAgICAgICAgb25TZWxlY3Q9e3NlbGVjdExhbmd1YWdlfVxuICAgICAgICAgICAgY2F0ZWdvcnlMaXN0PXt0ZWNoTGlzdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxEaXJlY3Rvcnkgd29ya3M9e2ZpbHRlcmVkTGlzdC5zbGljZShwYWdlTnVtYmVyICogMTAsIChwYWdlTnVtYmVyICogMTApICsgMTApfSAvPlxuICAgICAgICAgIDxSZXBvTGlzdCB3b3Jrcz17cmVwb3NpdG9yaWVzfSAvPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeVBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/gallery/index.jsx\n");

/***/ })

})