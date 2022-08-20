webpackHotUpdate_N_E("pages/gallery",{

/***/ "./src/pages/gallery/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/gallery/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_nlilly200_lillydev_lilly_art_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_shared_constants_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/constants/role */ \"./src/shared/constants/role.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var src_components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Layout */ \"./src/components/Layout/index.jsx\");\n/* harmony import */ var src_components_Directory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Directory */ \"./src/components/Directory/index.jsx\");\n/* harmony import */ var src_components_Filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/Filter */ \"./src/components/Filter/index.jsx\");\n/* harmony import */ var src_components_RepoList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/RepoList */ \"./src/components/RepoList/index.jsx\");\n/* harmony import */ var src_data_gallery_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/data/gallery.json */ \"./src/data/gallery.json\");\nvar src_data_gallery_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/data/gallery.json */ \"./src/data/gallery.json\", 1);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.module.css */ \"./src/pages/gallery/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/lillydev/lilly.art/src/pages/gallery/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n // console.log('Thanks for visiting!');\n\nvar GalleryPage = function GalleryPage() {\n  _s();\n\n  var _console;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      currentRole = _useState[0],\n      setCurrentRole = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setCurrentRole(localStorage.getItem('role', currentRole) || src_shared_constants_role__WEBPACK_IMPORTED_MODULE_3__[\"DEVELOPER\"]);\n  }, [currentRole, setCurrentRole]);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      keyword = _useState2[0],\n      setKeyword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      pageNumber = _useState3[0],\n      setPageNumber = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      projectLanguage = _useState4[0],\n      setLanguage = _useState4[1];\n\n  var onPageSelect = function onPageSelect(event) {\n    setPageNumber(parseInt(event.target.value, 10));\n  };\n\n  var articleSearch = function articleSearch(event) {\n    setKeyword(event.target.value);\n    setPageNumber(0);\n  };\n\n  var selectLanguage = function selectLanguage(event) {\n    setLanguage(event.target.value);\n    setPageNumber(0);\n  };\n\n  var techArray = src_data_gallery_json__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"].map(function (data) {\n    return data.tech;\n  }).map(function (language) {\n    return language;\n  }).reduce(function (categoryArray, currentCategory) {\n    var newArray = categoryArray;\n    newArray[currentCategory] = (newArray[currentCategory] || 0) + 1; // console.log(newArray);\n\n    return newArray;\n  });\n\n  (_console = console).log.apply(_console, Object(_Users_nlilly200_lillydev_lilly_art_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(src_data_gallery_json__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"].map(function (data) {\n    return Object(_Users_nlilly200_lillydev_lilly_art_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.tech);\n  })));\n\n  var techList = Object.keys(techArray).map(function (key, value) {\n    return {\n      optionLabel: key,\n      optionCount: value\n    };\n  }).sort(function (a, b) {\n    return b.optionLabel < a.optionLabel ? 1 : -1;\n  });\n  console.log({\n    techArray: techArray,\n    techList: techList\n  });\n  var filteredList = src_data_gallery_json__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"].filter(function (data) {\n    if (keyword && projectLanguage) {\n      return data.node.languages.edges.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true) && data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (keyword && !projectLanguage) {\n      return data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (!keyword && projectLanguage) {\n      return data.tech.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true);\n    }\n\n    return data;\n  }).sort(function (a, b) {\n    return new Date(b.date) - new Date(a.date);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"N.E.Lilly: Gallery\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: 'title'\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1.0, minimum-scale=1.0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      role: currentRole,\n      setRole: setCurrentRole,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_10__[\"gallery\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Gallery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          data: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"],\n          itemType: ['work', 'works'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage,\n          categoryList: techList\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Directory__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          works: filteredList.slice(pageNumber * 10, pageNumber * 10 + 10)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          data: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"],\n          itemType: ['work', 'works'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_RepoList__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          works: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_9__[\"repositories\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(GalleryPage, \"Fc6+9UFYZWs9vrdVrIWcnaFcFY0=\");\n\n_c = GalleryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"GalleryPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dhbGxlcnkvaW5kZXguanN4PzViYjMiXSwibmFtZXMiOlsiR2FsbGVyeVBhZ2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRSb2xlIiwic2V0Q3VycmVudFJvbGUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiREVWRUxPUEVSIiwia2V5d29yZCIsInNldEtleXdvcmQiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInByb2plY3RMYW5ndWFnZSIsInNldExhbmd1YWdlIiwib25QYWdlU2VsZWN0IiwiZXZlbnQiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwiYXJ0aWNsZVNlYXJjaCIsInNlbGVjdExhbmd1YWdlIiwidGVjaEFycmF5IiwiZ2FsbGVyeSIsIm1hcCIsImRhdGEiLCJ0ZWNoIiwibGFuZ3VhZ2UiLCJyZWR1Y2UiLCJjYXRlZ29yeUFycmF5IiwiY3VycmVudENhdGVnb3J5IiwibmV3QXJyYXkiLCJjb25zb2xlIiwibG9nIiwidGVjaExpc3QiLCJPYmplY3QiLCJrZXlzIiwia2V5Iiwib3B0aW9uTGFiZWwiLCJvcHRpb25Db3VudCIsInNvcnQiLCJhIiwiYiIsImZpbHRlcmVkTGlzdCIsImZpbHRlciIsIm5vZGUiLCJsYW5ndWFnZXMiLCJlZGdlcyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0aXRsZSIsIkRhdGUiLCJkYXRlIiwiZ2FsbGVyeVN0eWxlIiwic2xpY2UiLCJyZXBvc2l0b3JpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBTUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEVBQUQsQ0FEdEI7QUFBQSxNQUNqQkMsV0FEaUI7QUFBQSxNQUNKQyxjQURJOztBQUV4QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELGtCQUFjLENBQUNFLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixFQUE2QkosV0FBN0IsS0FBNkNLLG1FQUE5QyxDQUFkO0FBQ0QsR0FGUSxFQUVOLENBQUNMLFdBQUQsRUFBY0MsY0FBZCxDQUZNLENBQVQ7O0FBRndCLG1CQU1NRixzREFBUSxDQUFDLElBQUQsQ0FOZDtBQUFBLE1BTWpCTyxPQU5pQjtBQUFBLE1BTVJDLFVBTlE7O0FBQUEsbUJBT1lSLHNEQUFRLENBQUMsQ0FBRCxDQVBwQjtBQUFBLE1BT2pCUyxVQVBpQjtBQUFBLE1BT0xDLGFBUEs7O0FBQUEsbUJBUWVWLHNEQUFRLENBQUMsSUFBRCxDQVJ2QjtBQUFBLE1BUWpCVyxlQVJpQjtBQUFBLE1BUUFDLFdBUkE7O0FBVXhCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM5QkosaUJBQWEsQ0FBQ0ssUUFBUSxDQUFDRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBZCxFQUFxQixFQUFyQixDQUFULENBQWI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0osS0FBRCxFQUFXO0FBQy9CTixjQUFVLENBQUNNLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFkLENBQVY7QUFDQVAsaUJBQWEsQ0FBQyxDQUFELENBQWI7QUFDRCxHQUhEOztBQUtBLE1BQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0wsS0FBRCxFQUFXO0FBQ2hDRixlQUFXLENBQUNFLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFkLENBQVg7QUFDQVAsaUJBQWEsQ0FBQyxDQUFELENBQWI7QUFDRCxHQUhEOztBQUtBLE1BQU1VLFNBQVMsR0FBR0MsNkRBQU8sQ0FDdEJDLEdBRGUsQ0FDWCxVQUFDQyxJQUFEO0FBQUEsV0FBV0EsSUFBSSxDQUFDQyxJQUFoQjtBQUFBLEdBRFcsRUFFZkYsR0FGZSxDQUVYLFVBQUNHLFFBQUQ7QUFBQSxXQUFjQSxRQUFkO0FBQUEsR0FGVyxFQUdmQyxNQUhlLENBR1IsVUFBQ0MsYUFBRCxFQUFnQkMsZUFBaEIsRUFBb0M7QUFDMUMsUUFBTUMsUUFBUSxHQUFHRixhQUFqQjtBQUNBRSxZQUFRLENBQUNELGVBQUQsQ0FBUixHQUE0QixDQUFDQyxRQUFRLENBQUNELGVBQUQsQ0FBUixJQUE2QixDQUE5QixJQUFtQyxDQUEvRCxDQUYwQyxDQUcxQzs7QUFDQSxXQUFPQyxRQUFQO0FBQ0QsR0FSZSxDQUFsQjs7QUFVQSxjQUFBQyxPQUFPLEVBQUNDLEdBQVIsOEpBQWVWLDZEQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFDQyxJQUFEO0FBQUEsd0pBQWNBLElBQUksQ0FBQ0MsSUFBbkI7QUFBQSxHQUFaLENBQWY7O0FBRUEsTUFBTVEsUUFBUSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWWQsU0FBWixFQUNkRSxHQURjLENBQ1YsVUFBQ2EsR0FBRCxFQUFNbEIsS0FBTjtBQUFBLFdBQWlCO0FBQUVtQixpQkFBVyxFQUFFRCxHQUFmO0FBQW9CRSxpQkFBVyxFQUFFcEI7QUFBakMsS0FBakI7QUFBQSxHQURVLEVBRWRxQixJQUZjLENBRVQsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBWUEsQ0FBQyxDQUFDSixXQUFGLEdBQWdCRyxDQUFDLENBQUNILFdBQW5CLEdBQWtDLENBQWxDLEdBQXNDLENBQUMsQ0FBbEQ7QUFBQSxHQUZTLENBQWpCO0FBSUVOLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNYLGFBQVMsRUFBVEEsU0FBRDtBQUFZWSxZQUFRLEVBQVJBO0FBQVosR0FBWjtBQUVGLE1BQU1TLFlBQVksR0FBR3BCLDZEQUFPLENBQ3pCcUIsTUFEa0IsQ0FDWCxVQUFDbkIsSUFBRCxFQUFVO0FBQ2hCLFFBQUloQixPQUFPLElBQUlJLGVBQWYsRUFBZ0M7QUFDOUIsYUFBT1ksSUFBSSxDQUFDb0IsSUFBTCxDQUFVQyxTQUFWLENBQW9CQyxLQUFwQixDQUNOdkIsR0FETSxDQUNGLFVBQUNHLFFBQUQ7QUFBQSxlQUFjQSxRQUFRLENBQUNxQixXQUFULFFBQ2JuQyxlQURhLGFBQ2JBLGVBRGEsdUJBQ2JBLGVBQWUsQ0FBRW1DLFdBQWpCLEVBRGEsQ0FBZDtBQUFBLE9BREUsRUFFK0JDLFFBRi9CLENBRXdDLElBRnhDLEtBR0Z4QixJQUFJLENBQUN5QixLQUFMLENBQVdGLFdBQVgsR0FBeUJDLFFBQXpCLENBQWtDeEMsT0FBbEMsYUFBa0NBLE9BQWxDLHVCQUFrQ0EsT0FBTyxDQUFFdUMsV0FBVCxFQUFsQyxDQUhMLENBRDhCLENBSzlCO0FBQ0Q7O0FBQ0QsUUFBSXZDLE9BQU8sSUFBSSxDQUFDSSxlQUFoQixFQUFpQztBQUMvQixhQUFPWSxJQUFJLENBQUN5QixLQUFMLENBQVdGLFdBQVgsR0FBeUJDLFFBQXpCLENBQWtDeEMsT0FBbEMsYUFBa0NBLE9BQWxDLHVCQUFrQ0EsT0FBTyxDQUFFdUMsV0FBVCxFQUFsQyxDQUFQLENBRCtCLENBRS9CO0FBQ0Q7O0FBQ0QsUUFBSSxDQUFDdkMsT0FBRCxJQUFZSSxlQUFoQixFQUFpQztBQUMvQixhQUFPWSxJQUFJLENBQUNDLElBQUwsQ0FDSkYsR0FESSxDQUNBLFVBQUNHLFFBQUQ7QUFBQSxlQUFjQSxRQUFRLENBQUNxQixXQUFULFFBQ2JuQyxlQURhLGFBQ2JBLGVBRGEsdUJBQ2JBLGVBQWUsQ0FBRW1DLFdBQWpCLEVBRGEsQ0FBZDtBQUFBLE9BREEsRUFFaUNDLFFBRmpDLENBRTBDLElBRjFDLENBQVA7QUFHRDs7QUFFRCxXQUFPeEIsSUFBUDtBQUNELEdBcEJrQixFQXFCbEJlLElBckJrQixDQXFCYixVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVLElBQUlTLElBQUosQ0FBU1QsQ0FBQyxDQUFDVSxJQUFYLElBQW1CLElBQUlELElBQUosQ0FBU1YsQ0FBQyxDQUFDVyxJQUFYLENBQTdCO0FBQUEsR0FyQmEsQ0FBckI7QUF1QkEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFNLGdCQUFRLEVBQUMsVUFBZjtBQUEwQixlQUFPLEVBQUU7QUFBbkMsU0FBZ0QsT0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUUscUVBQUMsNkRBQUQ7QUFBUSxVQUFJLEVBQUVqRCxXQUFkO0FBQTJCLGFBQU8sRUFBRUMsY0FBcEM7QUFBQSw2QkFDRTtBQUFTLGlCQUFTLEVBQUVpRCwwREFBcEI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLDZEQUFEO0FBQ0UsY0FBSSxFQUFFOUIsNkRBRFI7QUFFRSxrQkFBUSxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FGWjtBQUdFLHFCQUFXLEVBQUVaLFVBSGY7QUFJRSxzQkFBWSxFQUFFSSxZQUpoQjtBQUtFLGtCQUFRLEVBQUVLLGFBTFo7QUFNRSxrQkFBUSxFQUFFQyxjQU5aO0FBT0Usc0JBQVksRUFBRWE7QUFQaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQWFFLHFFQUFDLGdFQUFEO0FBQVcsZUFBSyxFQUFFUyxZQUFZLENBQUNXLEtBQWIsQ0FBbUIzQyxVQUFVLEdBQUcsRUFBaEMsRUFBcUNBLFVBQVUsR0FBRyxFQUFkLEdBQW9CLEVBQXhEO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkYsZUFjRSxxRUFBQyw2REFBRDtBQUNFLGNBQUksRUFBRVksNkRBRFI7QUFFRSxrQkFBUSxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FGWjtBQUdFLHFCQUFXLEVBQUVaLFVBSGY7QUFJRSxzQkFBWSxFQUFFSSxZQUpoQjtBQUtFLGtCQUFRLEVBQUVLLGFBTFo7QUFNRSxrQkFBUSxFQUFFQztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEYsZUFzQkUscUVBQUMsK0RBQUQ7QUFBVSxlQUFLLEVBQUVrQyxrRUFBWUE7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUEsa0JBREY7QUFtQ0QsQ0FwR0Q7O0dBQU10RCxXOztLQUFBQSxXO0FBc0dTQSwwRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9nYWxsZXJ5L2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBERVZFTE9QRVIgfSBmcm9tICdzcmMvc2hhcmVkL2NvbnN0YW50cy9yb2xlJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ3NyYy9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gJ3NyYy9jb21wb25lbnRzL0RpcmVjdG9yeSc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJ3NyYy9jb21wb25lbnRzL0ZpbHRlcic7XG5pbXBvcnQgUmVwb0xpc3QgZnJvbSAnc3JjL2NvbXBvbmVudHMvUmVwb0xpc3QnO1xuXG5pbXBvcnQgeyBnYWxsZXJ5LCByZXBvc2l0b3JpZXMgfSBmcm9tICdzcmMvZGF0YS9nYWxsZXJ5Lmpzb24nO1xuXG5pbXBvcnQge1xuICBnYWxsZXJ5IGFzIGdhbGxlcnlTdHlsZSxcbn0gZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcblxuLy8gY29uc29sZS5sb2coJ1RoYW5rcyBmb3IgdmlzaXRpbmchJyk7XG5cbmNvbnN0IEdhbGxlcnlQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudFJvbGUsIHNldEN1cnJlbnRSb2xlXSA9IHVzZVN0YXRlKCcnKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDdXJyZW50Um9sZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm9sZScsIGN1cnJlbnRSb2xlKSB8fCBERVZFTE9QRVIpO1xuICB9LCBbY3VycmVudFJvbGUsIHNldEN1cnJlbnRSb2xlXSk7XG5cbiAgY29uc3QgW2tleXdvcmQsIHNldEtleXdvcmRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwYWdlTnVtYmVyLCBzZXRQYWdlTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcHJvamVjdExhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBvblBhZ2VTZWxlY3QgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRQYWdlTnVtYmVyKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApKTtcbiAgfTtcblxuICBjb25zdCBhcnRpY2xlU2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0S2V5d29yZChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldFBhZ2VOdW1iZXIoMCk7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0TGFuZ3VhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldFBhZ2VOdW1iZXIoMCk7XG4gIH07XG5cbiAgY29uc3QgdGVjaEFycmF5ID0gZ2FsbGVyeVxuICAgIC5tYXAoKGRhdGEpID0+IChkYXRhLnRlY2gpKVxuICAgIC5tYXAoKGxhbmd1YWdlKSA9PiBsYW5ndWFnZSlcbiAgICAucmVkdWNlKChjYXRlZ29yeUFycmF5LCBjdXJyZW50Q2F0ZWdvcnkpID0+IHtcbiAgICAgIGNvbnN0IG5ld0FycmF5ID0gY2F0ZWdvcnlBcnJheTtcbiAgICAgIG5ld0FycmF5W2N1cnJlbnRDYXRlZ29yeV0gPSAobmV3QXJyYXlbY3VycmVudENhdGVnb3J5XSB8fCAwKSArIDE7XG4gICAgICAvLyBjb25zb2xlLmxvZyhuZXdBcnJheSk7XG4gICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgfSk7XG5cbiAgY29uc29sZS5sb2coLi4uZ2FsbGVyeS5tYXAoKGRhdGEpID0+IFsuLi5kYXRhLnRlY2hdKSlcblxuICBjb25zdCB0ZWNoTGlzdCA9IE9iamVjdC5rZXlzKHRlY2hBcnJheSlcbiAgICAubWFwKChrZXksIHZhbHVlKSA9PiAoeyBvcHRpb25MYWJlbDoga2V5LCBvcHRpb25Db3VudDogdmFsdWUgfSkpXG4gICAgLnNvcnQoKGEsIGIpID0+ICgoYi5vcHRpb25MYWJlbCA8IGEub3B0aW9uTGFiZWwpID8gMSA6IC0xKSk7XG5cbiAgICBjb25zb2xlLmxvZyh7dGVjaEFycmF5LCB0ZWNoTGlzdH0pO1xuXG4gIGNvbnN0IGZpbHRlcmVkTGlzdCA9IGdhbGxlcnlcbiAgICAuZmlsdGVyKChkYXRhKSA9PiB7XG4gICAgICBpZiAoa2V5d29yZCAmJiBwcm9qZWN0TGFuZ3VhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEubm9kZS5sYW5ndWFnZXMuZWRnZXNcbiAgICAgICAgLm1hcCgobGFuZ3VhZ2UpID0+IGxhbmd1YWdlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICA9PT0gcHJvamVjdExhbmd1YWdlPy50b0xvd2VyQ2FzZSgpKS5pbmNsdWRlcyh0cnVlKVxuICAgICAgICAgICYmIGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgLy8gfHwgZGF0YS5hdXRob3IudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXl3b3JkICYmICFwcm9qZWN0TGFuZ3VhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgLy8gfHwgZGF0YS5hdXRob3IudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3JkPy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmICgha2V5d29yZCAmJiBwcm9qZWN0TGFuZ3VhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEudGVjaFxuICAgICAgICAgIC5tYXAoKGxhbmd1YWdlKSA9PiBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICA9PT0gcHJvamVjdExhbmd1YWdlPy50b0xvd2VyQ2FzZSgpKS5pbmNsdWRlcyh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgICAuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSkpO1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OLkUuTGlsbHk6IEdhbGxlcnk8L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17J3RpdGxlJ30ga2V5PVwidGl0bGVcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWluaW11bS1zY2FsZT0xLjBcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExheW91dCByb2xlPXtjdXJyZW50Um9sZX0gc2V0Um9sZT17c2V0Q3VycmVudFJvbGV9PlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2dhbGxlcnlTdHlsZX0+XG4gICAgICAgICAgPGgxPkdhbGxlcnk8L2gxPlxuICAgICAgICAgIDxGaWx0ZXJcbiAgICAgICAgICAgIGRhdGE9e2dhbGxlcnl9XG4gICAgICAgICAgICBpdGVtVHlwZT17Wyd3b3JrJywgJ3dvcmtzJ119XG4gICAgICAgICAgICBjdXJyZW50UGFnZT17cGFnZU51bWJlcn1cbiAgICAgICAgICAgIG9uUGFnZVNlbGVjdD17b25QYWdlU2VsZWN0fVxuICAgICAgICAgICAgb25TZWFyY2g9e2FydGljbGVTZWFyY2h9XG4gICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0TGFuZ3VhZ2V9XG4gICAgICAgICAgICBjYXRlZ29yeUxpc3Q9e3RlY2hMaXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIDxwPltGSUxURVJTXTwvcD4gKi99XG4gICAgICAgICAgey8qIDxEaXJlY3Rvcnkgd29ya3M9e2dhbGxlcnl9IC8+ICovfVxuICAgICAgICAgIDxEaXJlY3Rvcnkgd29ya3M9e2ZpbHRlcmVkTGlzdC5zbGljZShwYWdlTnVtYmVyICogMTAsIChwYWdlTnVtYmVyICogMTApICsgMTApfSAvPlxuICAgICAgICAgIDxGaWx0ZXJcbiAgICAgICAgICAgIGRhdGE9e2dhbGxlcnl9XG4gICAgICAgICAgICBpdGVtVHlwZT17Wyd3b3JrJywgJ3dvcmtzJ119XG4gICAgICAgICAgICBjdXJyZW50UGFnZT17cGFnZU51bWJlcn1cbiAgICAgICAgICAgIG9uUGFnZVNlbGVjdD17b25QYWdlU2VsZWN0fVxuICAgICAgICAgICAgb25TZWFyY2g9e2FydGljbGVTZWFyY2h9XG4gICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0TGFuZ3VhZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UmVwb0xpc3Qgd29ya3M9e3JlcG9zaXRvcmllc30gLz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/gallery/index.jsx\n");

/***/ })

})