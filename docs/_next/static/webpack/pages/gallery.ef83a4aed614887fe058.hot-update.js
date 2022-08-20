webpackHotUpdate_N_E("pages/gallery",{

/***/ "./src/pages/gallery/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/gallery/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/constants/role */ \"./src/shared/constants/role.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Layout */ \"./src/components/Layout/index.jsx\");\n/* harmony import */ var src_components_Directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Directory */ \"./src/components/Directory/index.jsx\");\n/* harmony import */ var src_components_Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Filter */ \"./src/components/Filter/index.jsx\");\n/* harmony import */ var src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/RepoList */ \"./src/components/RepoList/index.jsx\");\n/* harmony import */ var src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/data/gallery.json */ \"./src/data/gallery.json\");\nvar src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/data/gallery.json */ \"./src/data/gallery.json\", 1);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.module.css */ \"./src/pages/gallery/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/lillydev/lilly.art/src/pages/gallery/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n // console.log('Thanks for visiting!');\n\nvar GalleryPage = function GalleryPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      currentRole = _useState[0],\n      setCurrentRole = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setCurrentRole(localStorage.getItem('role', currentRole) || src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__[\"DEVELOPER\"]);\n  }, [currentRole, setCurrentRole]);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      webKeyword = _useState2[0],\n      setWebKeyword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      webPageNumber = _useState3[0],\n      setWebPageNumber = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      webProjectLanguage = _useState4[0],\n      setWebLanguage = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      ccKeyword = _useState5[0],\n      setCCKeyword = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      ccPageNumber = _useState6[0],\n      setCCPageNumber = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      ccProjectLanguage = _useState7[0],\n      setCCLanguage = _useState7[1];\n\n  var onWebPageSelect = function onWebPageSelect(event) {\n    setWebPageNumber(parseInt(event.target.value, 10));\n  };\n\n  var webArticleSearch = function webArticleSearch(event) {\n    setWebKeyword(event.target.value);\n    setWebPageNumber(0);\n  };\n\n  var webSelectLanguage = function webSelectLanguage(event) {\n    setWebLanguage(event.target.value);\n    setWebPageNumber(0);\n  };\n\n  var onCCPageSelect = function onCCPageSelect(event) {\n    setCCPageNumber(parseInt(event.target.value, 10));\n  };\n\n  var ccArticleSearch = function ccArticleSearch(event) {\n    setCCKeyword(event.target.value);\n    setCCPageNumber(0);\n  };\n\n  var ccSelectLanguage = function ccSelectLanguage(event) {\n    setCCLanguage(event.target.value);\n    setCCPageNumber(0);\n  };\n\n  var filteredList = function filteredList(section) {\n    return src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].filter(function (data) {\n      var sectionMatch = data.section == section;\n\n      if (sectionMatch && section == \"web\" && webKeyword && !webProjectLanguage) {\n        return data.title.toLowerCase().includes(webKeyword === null || webKeyword === void 0 ? void 0 : webKeyword.toLowerCase());\n      }\n\n      if (sectionMatch && section == \"comcast\" && ccKeyword && !ccProjectLanguage) {\n        return data.title.toLowerCase().includes(ccKeyword === null || ccKeyword === void 0 ? void 0 : ccKeyword.toLowerCase());\n      }\n\n      return sectionMatch && data;\n    }).sort(function (a, b) {\n      return new Date(b.date) - new Date(a.date);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"N.E.Lilly: Gallery\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: 'title'\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1.0, minimum-scale=1.0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      role: currentRole,\n      setRole: setCurrentRole,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Gallery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          data: filteredList(\"comcast\"),\n          itemType: ['post', 'posts'],\n          currentPage: ccPageNumber,\n          onPageSelect: onCCPageSelect,\n          onSearch: ccArticleSearch,\n          onSelect: ccSelectLanguage\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Directory__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          works: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].slice(0, 10)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          works: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"repositories\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(GalleryPage, \"GdZVWaPLWMFYRtrBwgx0pnNSpjA=\");\n\n_c = GalleryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"GalleryPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dhbGxlcnkvaW5kZXguanN4PzViYjMiXSwibmFtZXMiOlsiR2FsbGVyeVBhZ2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRSb2xlIiwic2V0Q3VycmVudFJvbGUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiREVWRUxPUEVSIiwid2ViS2V5d29yZCIsInNldFdlYktleXdvcmQiLCJ3ZWJQYWdlTnVtYmVyIiwic2V0V2ViUGFnZU51bWJlciIsIndlYlByb2plY3RMYW5ndWFnZSIsInNldFdlYkxhbmd1YWdlIiwiY2NLZXl3b3JkIiwic2V0Q0NLZXl3b3JkIiwiY2NQYWdlTnVtYmVyIiwic2V0Q0NQYWdlTnVtYmVyIiwiY2NQcm9qZWN0TGFuZ3VhZ2UiLCJzZXRDQ0xhbmd1YWdlIiwib25XZWJQYWdlU2VsZWN0IiwiZXZlbnQiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwid2ViQXJ0aWNsZVNlYXJjaCIsIndlYlNlbGVjdExhbmd1YWdlIiwib25DQ1BhZ2VTZWxlY3QiLCJjY0FydGljbGVTZWFyY2giLCJjY1NlbGVjdExhbmd1YWdlIiwiZmlsdGVyZWRMaXN0Iiwic2VjdGlvbiIsImdhbGxlcnkiLCJmaWx0ZXIiLCJkYXRhIiwic2VjdGlvbk1hdGNoIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsImRhdGUiLCJnYWxsZXJ5U3R5bGUiLCJzbGljZSIsInJlcG9zaXRvcmllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBTUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNjQyxzREFBUSxDQUFDLEVBQUQsQ0FEdEI7QUFBQSxNQUNqQkMsV0FEaUI7QUFBQSxNQUNKQyxjQURJOztBQUV4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QUFZLEVBQUVXLGNBSmhCO0FBS0Usa0JBQVEsRUFBRUMsZUFMWjtBQU1FLGtCQUFRLEVBQUVDO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQVlFLHFFQUFDLGdFQUFEO0FBQVcsZUFBSyxFQUFFRyw2REFBTyxDQUFDYSxLQUFSLENBQWMsQ0FBZCxFQUFpQixFQUFqQjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBYUUscUVBQUMsK0RBQUQ7QUFBVSxlQUFLLEVBQUVDLGtFQUFZQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBLGtCQURGO0FBMEJELENBbEZEOztHQUFNOUMsVzs7S0FBQUEsVztBQW9GU0EsMEVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FsbGVyeS9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgREVWRUxPUEVSIH0gZnJvbSAnc3JjL3NoYXJlZC9jb25zdGFudHMvcm9sZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExheW91dCBmcm9tICdzcmMvY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IERpcmVjdG9yeSBmcm9tICdzcmMvY29tcG9uZW50cy9EaXJlY3RvcnknO1xuaW1wb3J0IEZpbHRlciBmcm9tICdzcmMvY29tcG9uZW50cy9GaWx0ZXInO1xuaW1wb3J0IFJlcG9MaXN0IGZyb20gJ3NyYy9jb21wb25lbnRzL1JlcG9MaXN0JztcblxuaW1wb3J0IHsgZ2FsbGVyeSwgcmVwb3NpdG9yaWVzIH0gZnJvbSAnc3JjL2RhdGEvZ2FsbGVyeS5qc29uJztcblxuaW1wb3J0IHtcbiAgZ2FsbGVyeSBhcyBnYWxsZXJ5U3R5bGUsXG59IGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5cbi8vIGNvbnNvbGUubG9nKCdUaGFua3MgZm9yIHZpc2l0aW5nIScpO1xuXG5jb25zdCBHYWxsZXJ5UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRSb2xlLCBzZXRDdXJyZW50Um9sZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3VycmVudFJvbGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvbGUnLCBjdXJyZW50Um9sZSkgfHwgREVWRUxPUEVSKTtcbiAgfSwgW2N1cnJlbnRSb2xlLCBzZXRDdXJyZW50Um9sZV0pO1xuXG5cbiAgY29uc3QgW3dlYktleXdvcmQsIHNldFdlYktleXdvcmRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt3ZWJQYWdlTnVtYmVyLCBzZXRXZWJQYWdlTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbd2ViUHJvamVjdExhbmd1YWdlLCBzZXRXZWJMYW5ndWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NjS2V5d29yZCwgc2V0Q0NLZXl3b3JkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY2NQYWdlTnVtYmVyLCBzZXRDQ1BhZ2VOdW1iZXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjY1Byb2plY3RMYW5ndWFnZSwgc2V0Q0NMYW5ndWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBvbldlYlBhZ2VTZWxlY3QgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRXZWJQYWdlTnVtYmVyKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApKTtcbiAgfTtcblxuICBjb25zdCB3ZWJBcnRpY2xlU2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0V2ViS2V5d29yZChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldFdlYlBhZ2VOdW1iZXIoMCk7XG4gIH07XG5cbiAgY29uc3Qgd2ViU2VsZWN0TGFuZ3VhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRXZWJMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldFdlYlBhZ2VOdW1iZXIoMCk7XG4gIH07XG5cbiAgY29uc3Qgb25DQ1BhZ2VTZWxlY3QgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRDQ1BhZ2VOdW1iZXIocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCkpO1xuICB9O1xuXG4gIGNvbnN0IGNjQXJ0aWNsZVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgIHNldENDS2V5d29yZChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldENDUGFnZU51bWJlcigwKTtcbiAgfTtcblxuICBjb25zdCBjY1NlbGVjdExhbmd1YWdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0Q0NMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldENDUGFnZU51bWJlcigwKTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJlZExpc3QgPSAoc2VjdGlvbikgPT4gZ2FsbGVyeVxuICAgIC5maWx0ZXIoKGRhdGEpID0+IHtcbiAgICAgIHZhciBzZWN0aW9uTWF0Y2ggPSBkYXRhLnNlY3Rpb24gPT0gc2VjdGlvbjtcbiAgICAgIGlmIChzZWN0aW9uTWF0Y2ggJiYgc2VjdGlvbiA9PSBcIndlYlwiICYmIHdlYktleXdvcmQgJiYgIXdlYlByb2plY3RMYW5ndWFnZSkge1xuICAgICAgICByZXR1cm4gZGF0YS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHdlYktleXdvcmQ/LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKHNlY3Rpb25NYXRjaCAmJiBzZWN0aW9uID09IFwiY29tY2FzdFwiICYmIGNjS2V5d29yZCAmJiAhY2NQcm9qZWN0TGFuZ3VhZ2UpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhjY0tleXdvcmQ/LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VjdGlvbk1hdGNoICYmIGRhdGE7XG4gICAgfSlcbiAgICAuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSkpO1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OLkUuTGlsbHk6IEdhbGxlcnk8L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17J3RpdGxlJ30ga2V5PVwidGl0bGVcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWluaW11bS1zY2FsZT0xLjBcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExheW91dCByb2xlPXtjdXJyZW50Um9sZX0gc2V0Um9sZT17c2V0Q3VycmVudFJvbGV9PlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2dhbGxlcnlTdHlsZX0+XG4gICAgICAgICAgPGgxPkdhbGxlcnk8L2gxPlxuICAgICAgICAgIDxGaWx0ZXJcbiAgICAgICAgICAgIGRhdGE9e2ZpbHRlcmVkTGlzdChcImNvbWNhc3RcIil9XG4gICAgICAgICAgICBpdGVtVHlwZT17Wydwb3N0JywgJ3Bvc3RzJ119XG4gICAgICAgICAgICBjdXJyZW50UGFnZT17Y2NQYWdlTnVtYmVyfVxuICAgICAgICAgICAgb25QYWdlU2VsZWN0PXtvbkNDUGFnZVNlbGVjdH1cbiAgICAgICAgICAgIG9uU2VhcmNoPXtjY0FydGljbGVTZWFyY2h9XG4gICAgICAgICAgICBvblNlbGVjdD17Y2NTZWxlY3RMYW5ndWFnZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiA8cD5bRklMVEVSU108L3A+ICovfVxuICAgICAgICAgIHsvKiA8RGlyZWN0b3J5IHdvcmtzPXtnYWxsZXJ5fSAvPiAqL31cbiAgICAgICAgICA8RGlyZWN0b3J5IHdvcmtzPXtnYWxsZXJ5LnNsaWNlKDAsIDEwKX0gLz5cbiAgICAgICAgICA8UmVwb0xpc3Qgd29ya3M9e3JlcG9zaXRvcmllc30gLz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/gallery/index.jsx\n");

/***/ })

})