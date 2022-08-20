webpackHotUpdate_N_E("pages/gallery",{

/***/ "./src/pages/gallery/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/gallery/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/constants/role */ \"./src/shared/constants/role.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Layout */ \"./src/components/Layout/index.jsx\");\n/* harmony import */ var src_components_Directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Directory */ \"./src/components/Directory/index.jsx\");\n/* harmony import */ var src_components_Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Filter */ \"./src/components/Filter/index.jsx\");\n/* harmony import */ var src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/RepoList */ \"./src/components/RepoList/index.jsx\");\n/* harmony import */ var src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/data/gallery.json */ \"./src/data/gallery.json\");\nvar src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/data/gallery.json */ \"./src/data/gallery.json\", 1);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.module.css */ \"./src/pages/gallery/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/lillydev/lilly.art/src/pages/gallery/index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconsole.log(src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"][0].tech); // console.log('Thanks for visiting!');\n\nvar GalleryPage = function GalleryPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      currentRole = _useState[0],\n      setCurrentRole = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setCurrentRole(localStorage.getItem('role', currentRole) || src_shared_constants_role__WEBPACK_IMPORTED_MODULE_2__[\"DEVELOPER\"]);\n  }, [currentRole, setCurrentRole]);\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      keyword = _useState2[0],\n      setKeyword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      pageNumber = _useState3[0],\n      setPageNumber = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      projectLanguage = _useState4[0],\n      setLanguage = _useState4[1];\n\n  var onPageSelect = function onPageSelect(event) {\n    setPageNumber(parseInt(event.target.value, 10));\n  };\n\n  var articleSearch = function articleSearch(event) {\n    setKeyword(event.target.value);\n    setPageNumber(0);\n  };\n\n  var selectLanguage = function selectLanguage(event) {\n    setLanguage(event.target.value);\n    setPageNumber(0);\n  };\n\n  var techCount = {};\n\n  var techPlus = function techPlus(key) {\n    return techCount[key] = isNaN(techCount[key]) ? 1 : techCount[key] + 1;\n  };\n\n  var techList = [].concat.apply([], src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].map(function (data) {\n    return data.tech;\n  })).map(function (key) {\n    techPlus(key);\n    return {\n      optionCount: techCount[key],\n      optionLabel: key\n    };\n  }).sort(function (a, b) {\n    return b.optionLabel < a.optionLabel ? 1 : -1;\n  }); // .reduce((categoryArray, currentCategory, index) => {\n  //   const newArray = categoryArray;\n  //   newArray[index] = (newArray[currentCategory] || 0) + 1;\n  //   return newArray;\n  // });\n\n  console.log({\n    techCount: techCount,\n    techList: techList\n  }); // const techList = techArray\n  // .map((value) => ({ optionLabel: value, optionCount: 0}))\n  // .sort((a, b) => ((b.optionLabel < a.optionLabel) ? 1 : -1));\n  // ç;\n  // console.log(techList);\n  // console.log({techArray, techList});\n\n  var filteredList = src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"].filter(function (data) {\n    if (keyword && projectLanguage) {\n      return data.node.languages.edges.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true) && data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (keyword && !projectLanguage) {\n      return data.title.toLowerCase().includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()); // || data.author.toLowerCase().includes(keyword?.toLowerCase());\n    }\n\n    if (!keyword && projectLanguage) {\n      return data.tech.map(function (language) {\n        return language.toLowerCase() === (projectLanguage === null || projectLanguage === void 0 ? void 0 : projectLanguage.toLowerCase());\n      }).includes(true);\n    }\n\n    return data;\n  }).sort(function (a, b) {\n    return new Date(b.date) - new Date(a.date);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"N.E.Lilly: Gallery\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        property: \"og:title\",\n        content: 'title'\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1.0, minimum-scale=1.0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      role: currentRole,\n      setRole: setCurrentRole,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_9__[\"gallery\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: \"Gallery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          data: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"],\n          itemType: ['work', 'works'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage,\n          categoryList: techList\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Directory__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          works: filteredList.slice(pageNumber * 10, pageNumber * 10 + 10)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          data: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"gallery\"],\n          itemType: ['work', 'works'],\n          currentPage: pageNumber,\n          onPageSelect: onPageSelect,\n          onSearch: articleSearch,\n          onSelect: selectLanguage,\n          categoryList: techList\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_RepoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          works: src_data_gallery_json__WEBPACK_IMPORTED_MODULE_8__[\"repositories\"]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(GalleryPage, \"Fc6+9UFYZWs9vrdVrIWcnaFcFY0=\");\n\n_c = GalleryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"GalleryPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2dhbGxlcnkvaW5kZXguanN4PzViYjMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImdhbGxlcnkiLCJ0ZWNoIiwiR2FsbGVyeVBhZ2UiLCJ1c2VTdGF0ZSIsImN1cnJlbnRSb2xlIiwic2V0Q3VycmVudFJvbGUiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiREVWRUxPUEVSIiwia2V5d29yZCIsInNldEtleXdvcmQiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInByb2plY3RMYW5ndWFnZSIsInNldExhbmd1YWdlIiwib25QYWdlU2VsZWN0IiwiZXZlbnQiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwiYXJ0aWNsZVNlYXJjaCIsInNlbGVjdExhbmd1YWdlIiwidGVjaENvdW50IiwidGVjaFBsdXMiLCJrZXkiLCJpc05hTiIsInRlY2hMaXN0IiwiY29uY2F0IiwiYXBwbHkiLCJtYXAiLCJkYXRhIiwib3B0aW9uQ291bnQiLCJvcHRpb25MYWJlbCIsInNvcnQiLCJhIiwiYiIsImZpbHRlcmVkTGlzdCIsImZpbHRlciIsIm5vZGUiLCJsYW5ndWFnZXMiLCJlZGdlcyIsImxhbmd1YWdlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInRpdGxlIiwiRGF0ZSIsImRhdGUiLCJnYWxsZXJ5U3R5bGUiLCJzbGljZSIsInJlcG9zaXRvcmllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLDZEQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQXZCLEUsQ0FFQTs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2NDLHNEQUFRLENBQUMsRUFBRCxDQUR0QjtBQUFBLE1BQ2pCQyxX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LGVBQUssRUFBRXVCLGtFQUFZQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQSxrQkFERjtBQWtDRCxDQXpHRDs7R0FBTWhELFc7O0tBQUFBLFc7QUEyR1NBLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2dhbGxlcnkvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERFVkVMT1BFUiB9IGZyb20gJ3NyYy9zaGFyZWQvY29uc3RhbnRzL3JvbGUnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnc3JjL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBEaXJlY3RvcnkgZnJvbSAnc3JjL2NvbXBvbmVudHMvRGlyZWN0b3J5JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvRmlsdGVyJztcbmltcG9ydCBSZXBvTGlzdCBmcm9tICdzcmMvY29tcG9uZW50cy9SZXBvTGlzdCc7XG5cbmltcG9ydCB7IGdhbGxlcnksIHJlcG9zaXRvcmllcyB9IGZyb20gJ3NyYy9kYXRhL2dhbGxlcnkuanNvbic7XG5cbmltcG9ydCB7XG4gIGdhbGxlcnkgYXMgZ2FsbGVyeVN0eWxlLFxufSBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnO1xuXG5jb25zb2xlLmxvZyhnYWxsZXJ5WzBdLnRlY2gpXG5cbi8vIGNvbnNvbGUubG9nKCdUaGFua3MgZm9yIHZpc2l0aW5nIScpO1xuXG5jb25zdCBHYWxsZXJ5UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRSb2xlLCBzZXRDdXJyZW50Um9sZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3VycmVudFJvbGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvbGUnLCBjdXJyZW50Um9sZSkgfHwgREVWRUxPUEVSKTtcbiAgfSwgW2N1cnJlbnRSb2xlLCBzZXRDdXJyZW50Um9sZV0pO1xuXG4gIGNvbnN0IFtrZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Byb2plY3RMYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgb25QYWdlU2VsZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0UGFnZU51bWJlcihwYXJzZUludChldmVudC50YXJnZXQudmFsdWUsIDEwKSk7XG4gIH07XG5cbiAgY29uc3QgYXJ0aWNsZVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgIHNldEtleXdvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRQYWdlTnVtYmVyKDApO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdExhbmd1YWdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0TGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRQYWdlTnVtYmVyKDApO1xuICB9O1xuXG5cbiAgbGV0IHRlY2hDb3VudCA9IHt9O1xuICBjb25zdCB0ZWNoUGx1cyA9IChrZXkpID0+IHRlY2hDb3VudFtrZXldID0gaXNOYU4odGVjaENvdW50W2tleV0pID8gMSA6IHRlY2hDb3VudFtrZXldICsgMTtcbiAgXG4gY29uc3QgdGVjaExpc3QgPSBbXS5jb25jYXQuYXBwbHkoW10sIGdhbGxlcnkubWFwKChkYXRhKSA9PiBkYXRhLnRlY2gpKS5tYXAoKGtleSkgPT4ge1xuICAgIHRlY2hQbHVzKGtleSlcbiAgICByZXR1cm4gKHtcbiAgICAgIG9wdGlvbkNvdW50OiB0ZWNoQ291bnRba2V5XSxcbiAgICAgIG9wdGlvbkxhYmVsOiBrZXlcbiAgICB9KX0pLnNvcnQoKGEsIGIpID0+ICgoYi5vcHRpb25MYWJlbCA8IGEub3B0aW9uTGFiZWwpID8gMSA6IC0xKSk7XG4gICAgLy8gLnJlZHVjZSgoY2F0ZWdvcnlBcnJheSwgY3VycmVudENhdGVnb3J5LCBpbmRleCkgPT4ge1xuICAgIC8vICAgY29uc3QgbmV3QXJyYXkgPSBjYXRlZ29yeUFycmF5O1xuICAgIC8vICAgbmV3QXJyYXlbaW5kZXhdID0gKG5ld0FycmF5W2N1cnJlbnRDYXRlZ29yeV0gfHwgMCkgKyAxO1xuICAgIC8vICAgcmV0dXJuIG5ld0FycmF5O1xuICAgIC8vIH0pO1xuICBjb25zb2xlLmxvZyh7dGVjaENvdW50LCB0ZWNoTGlzdH0pO1xuICAvLyBjb25zdCB0ZWNoTGlzdCA9IHRlY2hBcnJheVxuICAvLyAubWFwKCh2YWx1ZSkgPT4gKHsgb3B0aW9uTGFiZWw6IHZhbHVlLCBvcHRpb25Db3VudDogMH0pKVxuICAvLyAuc29ydCgoYSwgYikgPT4gKChiLm9wdGlvbkxhYmVsIDwgYS5vcHRpb25MYWJlbCkgPyAxIDogLTEpKTtcbiAgLy8gw6c7XG4gIC8vIGNvbnNvbGUubG9nKHRlY2hMaXN0KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHt0ZWNoQXJyYXksIHRlY2hMaXN0fSk7XG5cbiAgY29uc3QgZmlsdGVyZWRMaXN0ID0gZ2FsbGVyeVxuICAgIC5maWx0ZXIoKGRhdGEpID0+IHtcbiAgICAgIGlmIChrZXl3b3JkICYmIHByb2plY3RMYW5ndWFnZSkge1xuICAgICAgICByZXR1cm4gZGF0YS5ub2RlLmxhbmd1YWdlcy5lZGdlc1xuICAgICAgICAubWFwKChsYW5ndWFnZSkgPT4gbGFuZ3VhZ2UudG9Mb3dlckNhc2UoKVxuICAgICAgICAgID09PSBwcm9qZWN0TGFuZ3VhZ2U/LnRvTG93ZXJDYXNlKCkpLmluY2x1ZGVzKHRydWUpXG4gICAgICAgICAgJiYgZGF0YS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGtleXdvcmQ/LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAvLyB8fCBkYXRhLmF1dGhvci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGtleXdvcmQ/LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKGtleXdvcmQgJiYgIXByb2plY3RMYW5ndWFnZSkge1xuICAgICAgICByZXR1cm4gZGF0YS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGtleXdvcmQ/LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAvLyB8fCBkYXRhLmF1dGhvci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGtleXdvcmQ/LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKCFrZXl3b3JkICYmIHByb2plY3RMYW5ndWFnZSkge1xuICAgICAgICByZXR1cm4gZGF0YS50ZWNoXG4gICAgICAgICAgLm1hcCgobGFuZ3VhZ2UpID0+IGxhbmd1YWdlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgID09PSBwcm9qZWN0TGFuZ3VhZ2U/LnRvTG93ZXJDYXNlKCkpLmluY2x1ZGVzKHRydWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KVxuICAgIC5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShiLmRhdGUpIC0gbmV3IERhdGUoYS5kYXRlKSk7XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk4uRS5MaWxseTogR2FsbGVyeTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXsndGl0bGUnfSBrZXk9XCJ0aXRsZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtaW5pbXVtLXNjYWxlPTEuMFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TGF5b3V0IHJvbGU9e2N1cnJlbnRSb2xlfSBzZXRSb2xlPXtzZXRDdXJyZW50Um9sZX0+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17Z2FsbGVyeVN0eWxlfT5cbiAgICAgICAgICA8aDE+R2FsbGVyeTwvaDE+XG4gICAgICAgICAgPEZpbHRlclxuICAgICAgICAgICAgZGF0YT17Z2FsbGVyeX1cbiAgICAgICAgICAgIGl0ZW1UeXBlPXtbJ3dvcmsnLCAnd29ya3MnXX1cbiAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtwYWdlTnVtYmVyfVxuICAgICAgICAgICAgb25QYWdlU2VsZWN0PXtvblBhZ2VTZWxlY3R9XG4gICAgICAgICAgICBvblNlYXJjaD17YXJ0aWNsZVNlYXJjaH1cbiAgICAgICAgICAgIG9uU2VsZWN0PXtzZWxlY3RMYW5ndWFnZX1cbiAgICAgICAgICAgIGNhdGVnb3J5TGlzdD17dGVjaExpc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RGlyZWN0b3J5IHdvcmtzPXtmaWx0ZXJlZExpc3Quc2xpY2UocGFnZU51bWJlciAqIDEwLCAocGFnZU51bWJlciAqIDEwKSArIDEwKX0gLz5cbiAgICAgICAgICA8RmlsdGVyXG4gICAgICAgICAgICBkYXRhPXtnYWxsZXJ5fVxuICAgICAgICAgICAgaXRlbVR5cGU9e1snd29yaycsICd3b3JrcyddfVxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e3BhZ2VOdW1iZXJ9XG4gICAgICAgICAgICBvblBhZ2VTZWxlY3Q9e29uUGFnZVNlbGVjdH1cbiAgICAgICAgICAgIG9uU2VhcmNoPXthcnRpY2xlU2VhcmNofVxuICAgICAgICAgICAgb25TZWxlY3Q9e3NlbGVjdExhbmd1YWdlfVxuICAgICAgICAgICAgY2F0ZWdvcnlMaXN0PXt0ZWNoTGlzdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxSZXBvTGlzdCB3b3Jrcz17cmVwb3NpdG9yaWVzfSAvPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeVBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/gallery/index.jsx\n");

/***/ })

})